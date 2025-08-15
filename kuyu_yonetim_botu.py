# =============================================================================
#
#           KUYU YÖNETİM TELEGRAM BOTU - v6 (DİNAMİK PANO API DESTEKLİ)
#
# =============================================================================

import sqlite3
import logging
from datetime import datetime
import pandas as pd
from fpdf import FPDF, FPDFException
import os
import traceback
import json
import threading
from flask import Flask, jsonify
from flask_cors import CORS
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import (
    Application, CommandHandler, ContextTypes, ConversationHandler,
    CallbackQueryHandler, MessageHandler, filters
)
from functools import wraps

# --- AYARLAR ---
API_TOKEN = os.environ.get('API_TOKEN') # Lütfen kendi token'ınızı girin
SUPER_ADMIN_ID = 1566380580 # Kendi Telegram ID'nizi girin

# --- SAĞLAMLAŞTIRILMIŞ DOSYA YOLLARI ---
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DB_NAME = os.path.join(SCRIPT_DIR, "proje_yonetim.db")
MASTER_CSV_PATH = os.path.join(SCRIPT_DIR, "kuyular_master.csv")
FONT_FAMILY_NAME = 'Roboto'

# --- Logging Kurulumu ---
logging.basicConfig(format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO)
logger = logging.getLogger(__name__)

# --- YENİ: FLASK API UYGULAMASI ---
app = Flask(__name__)
# Farklı bir alan adından (GitHub Pages vb.) gelen isteklere izin vermek için CORS gereklidir.
CORS(app)

# --- Konuşma Adımları ---
SELECT_STATUS, GET_DATE, GET_WELL_DATA = range(3)
GET_WELLS_TO_DELETE = range(3, 4)
SELECT_WELL_TO_EDIT, SELECT_FIELD_TO_EDIT, GET_NEW_VALUE = range(4, 7)
SELECT_STATUS_TXT, GET_WELL_DATA_TXT = range(7, 9)

# --- Veritabanı ve Yetkilendirme Fonksiyonları (DEĞİŞİKLİK YOK) ---
def setup_database():
    conn = sqlite3.connect(DB_NAME); cursor = conn.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS master_kuyular (kuyu_no TEXT PRIMARY KEY, metraj REAL NOT NULL)")
    cursor.execute("CREATE TABLE IF NOT EXISTS yapilan_kuyular (id INTEGER PRIMARY KEY AUTOINCREMENT, kuyu_no TEXT NOT NULL UNIQUE, foraj TEXT NOT NULL, yapilma_tarihi TEXT NOT NULL, durum TEXT NOT NULL, alinan_metraj REAL DEFAULT 0, ekleyen_kisi_id INTEGER NOT NULL, ekleyen_kisi_adi TEXT NOT NULL)")
    cursor.execute("CREATE TABLE IF NOT EXISTS adminler (user_id INTEGER PRIMARY KEY)")
    cursor.execute("INSERT OR IGNORE INTO adminler (user_id) VALUES (?)", (SUPER_ADMIN_ID,))
    conn.commit(); conn.close(); logger.info("Veritabanı başarıyla kuruldu.")

def yetkili_mi(user_id: int) -> bool:
    conn = sqlite3.connect(DB_NAME); cursor = conn.cursor(); cursor.execute("SELECT 1 FROM adminler WHERE user_id = ?", (user_id,)); result = cursor.fetchone(); conn.close(); return result is not None

def restricted(func):
    @wraps(func)
    async def wrapped(update: Update, context: ContextTypes.DEFAULT_TYPE, *args, **kwargs):
        if not yetkili_mi(update.effective_user.id):
            if update.message: await update.message.reply_text("⛔️ Üzgünüm, bu komutu kullanma yetkiniz yok.")
            return
        return await func(update, context, *args, **kwargs)
    return wrapped

def super_admin_only(func):
    @wraps(func)
    async def wrapped(update: Update, context: ContextTypes.DEFAULT_TYPE, *args, **kwargs):
        if update.effective_user.id != SUPER_ADMIN_ID:
            if update.message: await update.message.reply_text("⛔️ Bu komutu sadece botun sahibi kullanabilir.")
            return
        return await func(update, context, *args, **kwargs)
    return wrapped

# --- YENİ: WEB ARAYÜZÜ İÇİN API ADRESİ (ENDPOINT) ---
@app.route('/api/get_kuyular', methods=['GET'])
def get_kuyular_api():
    """
    Bu fonksiyon, web panosundan gelen veri isteğine yanıt verir.
    Veritabanındaki tüm kuyu verilerini JSON formatında döndürür.
    """
    logger.info("API'den /api/get_kuyular isteği alındı.")
    try:
        conn = sqlite3.connect(DB_NAME)
        query = """
        SELECT m.kuyu_no, m.metraj AS proje_metraji, y.yapilma_tarihi, y.foraj, y.alinan_metraj, y.durum
        FROM master_kuyular m
        LEFT JOIN yapilan_kuyular y ON m.kuyu_no = y.kuyu_no
        ORDER BY CAST(m.kuyu_no AS INTEGER) ASC;
        """
        cursor = conn.cursor()
        cursor.execute(query)
        rows = cursor.fetchall()
        conn.close()

        data_list = []
        for row in rows:
            data_list.append({
                "kuyu_no": row[0],
                "proje_metraji": row[1] if row[1] is not None else 0,
                "tarih": row[2] if row[2] is not None else "-",
                "foraj": row[3] if row[3] is not None else "-",
                "alinan_foraj": row[4] if row[4] is not None else 0,
                "durum": row[5] if row[5] is not None else "Yapılmadı",
            })
        
        return jsonify(data_list)
    except Exception as e:
        logger.error(f"API hatası: {e}\n{traceback.format_exc()}")
        return jsonify({"error": str(e)}), 500

# --- WEB APP'TEN GELEN VERİLERİ İŞLEYEN FONKSİYON (GÜNCELLENDİ) ---
@restricted
async def web_app_data_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        data_str = update.message.web_app_data.data
        user = update.effective_user
        logger.info(f"Web App'ten veri alındı: {data_str}")
        
        command, value = data_str.split(":", 1)
        conn = sqlite3.connect(DB_NAME)
        cursor = conn.cursor()

        if command == "delete_well":
            kuyu_no_to_delete = value
            cursor.execute("DELETE FROM yapilan_kuyular WHERE kuyu_no = ?", (kuyu_no_to_delete,))
            conn.commit()
            etkilenen_satir_sayisi = cursor.rowcount
            
            if etkilenen_satir_sayisi > 0:
                await context.bot.send_message(chat_id=update.effective_chat.id, text=f"✅ Panodan gönderilen `{kuyu_no_to_delete}` numaralı kuyu kaydı başarıyla silindi. Pano otomatik olarak güncellenecektir.", parse_mode='Markdown')
            else:
                await context.bot.send_message(chat_id=update.effective_chat.id, text=f"⚠️ Panodan gönderilen `{kuyu_no_to_delete}` numaralı kuyu kaydı veritabanında bulunamadı.", parse_mode='Markdown')
        
        elif command == "add_well":
            well_data = json.loads(value)
            kuyu_no = well_data.get("kuyu_no")
            tarih = well_data.get("tarih")
            foraj = well_data.get("foraj")
            durum = well_data.get("durum")
            alinan_foraj_str = well_data.get("alinan_foraj", foraj)
            
            cursor.execute("SELECT 1 FROM master_kuyular WHERE kuyu_no = ?", (kuyu_no,))
            if not cursor.fetchone():
                await context.bot.send_message(chat_id=update.effective_chat.id, text=f"❌ HATA: `{kuyu_no}` numaralı kuyu ana projede bulunamadı.", parse_mode='Markdown')
                conn.close()
                return

            cursor.execute("SELECT yapilma_tarihi FROM yapilan_kuyular WHERE kuyu_no = ?", (kuyu_no,))
            existing = cursor.fetchone()
            if existing:
                await context.bot.send_message(chat_id=update.effective_chat.id, text=f"❌ HATA: `{kuyu_no}` numaralı kuyu zaten `{existing[0]}` tarihinde yapılmış olarak kayıtlı.", parse_mode='Markdown')
                conn.close()
                return
            
            alinan_metraj = float(str(alinan_foraj_str).replace(',', '.'))
            cursor.execute(
                "INSERT INTO yapilan_kuyular (kuyu_no, foraj, yapilma_tarihi, durum, alinan_metraj, ekleyen_kisi_id, ekleyen_kisi_adi) VALUES (?, ?, ?, ?, ?, ?, ?)",
                (kuyu_no, foraj, tarih, durum, alinan_metraj, user.id, user.first_name)
            )
            conn.commit()
            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"✅ Panodan `{kuyu_no}` numaralı kuyu başarıyla eklendi. Pano otomatik olarak güncellenecektir.", parse_mode='Markdown')
        
        # refresh_prompt komutuna artık ihtiyacımız yok çünkü pano kendi kendini yenileyecek.
        # elif command == "refresh_prompt": ...
        
        conn.close()

    except Exception as e:
        logger.error(f"Web App verisi işlenirken hata: {e}\n{traceback.format_exc()}")
        await context.bot.send_message(chat_id=update.effective_chat.id, text=f"❌ Panodan gelen komut işlenirken bir hata oluştu: {e}")

# --- BOT KOMUTLARI ---
# ... /start, /id, /ara, /ilerleme, /rapor vb. tüm komutlar DEĞİŞMEDEN olduğu gibi kalacak...
# ... Sadece /get_dashboard_data komutunu artık kullanmayacağımız için silebilir veya bırakabilirsiniz. ...
# ... Aşağıya örnek olarak sadece birkaçı eklenmiştir, siz kendi dosyanızdaki tüm komutları koruyun. ...

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user_id = update.effective_user.id
    user_name = update.effective_user.first_name
    komut_listesi = (f"Merhaba {user_name}!\n\n"
                     "**Genel Komutlar:**\n"
                     "`/start` - Komut listesi.\n"
                     "`/id` - Telegram ID'nizi öğrenin.\n"
                     "`/ara <kuyu_no>` - Kuyu durumunu sorgular.\n"
                     "`/ilerleme` - Proje ilerlemesini gösterir.\n"
                     "`/rapor` - Excel/PDF raporu alır.\n\n")
    if yetkili_mi(user_id):
        komut_listesi += ("**Admin Komutları:**\n"
                          "`/dashboard` - İnteraktif Proje Panosunu açar.\n"
                          "`/kuyuekle`, `/kuyuekletxt` - Kuyu ekleme.\n"
                          "`/sil`, `/toplusil` - Kuyu silme.\n"
                          "`/duzenle` - Kuyu kaydı düzenleme.\n\n")
    if user_id == SUPER_ADMIN_ID:
        komut_listesi += ("**Süper Admin Komutları:**\n"
                          "`/veriyukle` - Ana kuyu listesini CSV'den yükler.\n"
                          "`/yetkiver`, `/yetkial` - Admin yönetimi.")
    await update.message.reply_text(komut_listesi, parse_mode='Markdown')

@restricted
async def dashboard(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    # WEB_APP_URL'nizi kendi GitHub Pages linkiniz ile değiştirmeyi unutmayın.
    WEB_APP_URL = "https://ergulsahin.github.io/eglshn/" 
    keyboard = [[InlineKeyboardButton("📊 Panoyu Aç", web_app=WebAppInfo(url=WEB_APP_URL))]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Proje ilerleme panosunu görüntülemek için butona tıklayın:", reply_markup=reply_markup)

# Diğer tüm komutlarınız (rapor, sil, ekle vb.) burada DEĞİŞMEDEN kalmalıdır.
# ...
# Bu örnekte yer kaplamaması için eklenmemiştir. Lütfen kendi dosyanızdan silmeyin.
# ...

# --- BOTU VE SUNUCUYU BAŞLATMA KISMI (GÜNCELLENDİ) ---
def run_flask_app():
    # '0.0.0.0' adresi, sunucunun tüm ağ arayüzlerinden gelen isteklere yanıt vermesini sağlar.
    # Bu, sunucunuza genel IP adresi üzerinden erişilebilmesi için gereklidir.
    app.run(host='0.0.0.0', port=5000, debug=False)

def main() -> None:
    setup_database()
    
    # Flask web sunucusunu arka planda (ayrı bir thread'de) başlatıyoruz.
    # Bu sayede hem bot hem de web sunucusu aynı anda çalışabilir.
    flask_thread = threading.Thread(target=run_flask_app)
    flask_thread.daemon = True # Ana program kapandığında bu thread'in de kapanmasını sağlar.
    flask_thread.start()
    
    application = Application.builder().token(API_TOKEN).build()
    
    # Handler'larınızı buraya ekleyin (DEĞİŞİKLİK YOK)
    application.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, web_app_data_handler))
    # ...Diğer tüm CommandHandler ve ConversationHandler'larınızı buraya ekleyin...
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("dashboard", dashboard))
    # ...
    
    logger.info("Bot ve API sunucusu başlatılıyor...");
    application.run_polling()

if __name__ == "__main__":
    main()
