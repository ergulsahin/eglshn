# =============================================================================
#
#           KUYU YÖNETİM TELEGRAM BOTU - NİHAİ SÜRÜM v5
#           (İNTERAKTİF PANO - EKLE/SİL/YENİLE ÖZELLİKLERİ)
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

# --- Konuşma Adımları ---
SELECT_STATUS, GET_DATE, GET_WELL_DATA = range(3)
GET_WELLS_TO_DELETE = range(3, 4)
SELECT_WELL_TO_EDIT, SELECT_FIELD_TO_EDIT, GET_NEW_VALUE = range(4, 7)
SELECT_STATUS_TXT, GET_WELL_DATA_TXT = range(7, 9)

# --- Veritabanı ve Yetkilendirme Fonksiyonları ---
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
        user_id = update.effective_user.id
        if not yetkili_mi(user_id):
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
                await context.bot.send_message(chat_id=update.effective_chat.id, text=f"✅ Panodan gönderilen `{kuyu_no_to_delete}` numaralı kuyu kaydı başarıyla silindi. Panoyu güncellemek için Veri Yenile butonunu kullanabilirsiniz.", parse_mode='Markdown')
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
            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"✅ Panodan `{kuyu_no}` numaralı kuyu başarıyla eklendi. Panoyu güncellemek için Veri Yenile butonunu kullanabilirsiniz.", parse_mode='Markdown')

        elif command == "refresh_prompt":
            await context.bot.send_message(
                chat_id=update.effective_chat.id,
                text="🔄 Panodaki verileri en güncel haliyle görmek için lütfen `/get_dashboard_data` komutunu çalıştırın, gelen dosyayı `script.js`'e yapıştırıp GitHub'a yeniden yükleyin.",
                parse_mode='Markdown'
            )

        conn.close()

    except Exception as e:
        logger.error(f"Web App verisi işlenirken hata: {e}\n{traceback.format_exc()}")
        await context.bot.send_message(chat_id=update.effective_chat.id, text=f"❌ Panodan gelen komut işlenirken bir hata oluştu: {e}")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user_id = update.effective_user.id
    user_name = update.effective_user.first_name

    komut_listesi = (f"Merhaba {user_name}!\n\n"
                     "**Genel Komutlar (Herkes Kullanabilir):**\n"
                     "`/start` - Bu komut listesini gösterir.\n"
                     "`/id` - Kendi Telegram ID'nizi öğrenirsiniz.\n"
                     "`/ara <kuyu_no>` - Kuyu durumunu sorgular.\n"
                     "`/ilerleme` - Proje ilerlemesini gösterir.\n"
                     "`/rapor` - Excel/PDF raporu alır.\n"
                     "`/raportxt` - Metin tabanlı rapor alır.\n\n")

    if yetkili_mi(user_id):
        komut_listesi += ("**Admin Komutları:**\n"
                          "`/dashboard` - Görsel İlerleme Panosunu açar.\n"
                          "`/get_dashboard_data` - Pano için veri dosyasını alır.\n"
                          "`/kuyuekle` - Adım adım kuyu ekler.\n"
                          "`/kuyuekletxt` - Toplu metin ile kuyu ekler.\n"
                          "`/sil` - Kayıtları siler.\n"
                          "`/toplusil` - Kuyu no'ya göre toplu siler.\n"
                          "`/duzenle` - Bir kuyu kaydını düzenler.\n"
                          "`/adminlistesi` - Adminleri listeler.\n\n")

    if user_id == SUPER_ADMIN_ID:
        komut_listesi += ("**Süper Admin Komutları:**\n"
                          "`/veriyukle` - Ana kuyu listesini CSV'den yükler.\n"
                          "`/yetkiver <user_id>`\n"
                          "`/yetkial <user_id>`")

    await update.message.reply_text(komut_listesi, parse_mode='Markdown')

@restricted
async def dashboard(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    WEB_APP_URL = "https://ergulsahin.github.io/eglshn/"
    keyboard = [[InlineKeyboardButton("📊 Panoyu Aç", web_app=WebAppInfo(url=WEB_APP_URL))]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Proje ilerleme panosunu görüntülemek için butona tıklayın:", reply_markup=reply_markup)

@restricted
async def get_dashboard_data(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    try:
        await update.message.reply_text("Detaylı tablo verileri hazırlanıyor, lütfen bekleyin...")
        conn = sqlite3.connect(DB_NAME)
        query = """
        SELECT
            m.kuyu_no,
            m.metraj AS proje_metraji,
            y.yapilma_tarihi,
            y.foraj,
            y.alinan_metraj,
            y.durum
        FROM
            master_kuyular m
        LEFT JOIN
            yapilan_kuyular y ON m.kuyu_no = y.kuyu_no
        ORDER BY
            CASE WHEN y.yapilma_tarihi IS NULL THEN 1 ELSE 0 END,
            SUBSTR(y.yapilma_tarihi, 7, 4) || '-' || SUBSTR(y.yapilma_tarihi, 4, 2) || '-' || SUBSTR(y.yapilma_tarihi, 1, 2) DESC,
            m.kuyu_no ASC;
        """
        cursor = conn.cursor()
        cursor.execute(query)
        rows = cursor.fetchall()
        conn.close()

        if not rows:
            await update.message.reply_text("Veritabanında hiç kuyu bulunamadı. Önce /veriyukle komutunu çalıştırdınız mı?")
            return

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

        json_data = json.dumps(data_list, indent=4, ensure_ascii=False)
        
        file_path = os.path.join(SCRIPT_DIR, "kuyu_verisi.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(json_data)

        await context.bot.send_document(
            chat_id=update.effective_chat.id,
            document=open(file_path, 'rb'),
            filename="kuyu_verisi.json",
            caption="İşte detaylı tablo için gereken veri dosyası. Lütfen bu dosyayı indirip içeriğini `script.js`'e yapıştırın."
        )
        
        os.remove(file_path)

    except Exception as e:
        logger.error(f"Dashboard verisi alınırken hata: {e}\n{traceback.format_exc()}")
        await update.message.reply_text(f"Veri alınırken bir hata oluştu: {e}")

# ... (Diğer tüm orijinal fonksiyonlarınız burada olduğu gibi kalır) ...
# (show_my_id, veriyukle, kuyuekle_baslat ve diğer tüm ConversationHandler adımları, rapor, sil vb.)
async def show_my_id(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user = update.effective_user; user_id = user.id; first_name = user.first_name
    message = (f"Merhaba {first_name}!\n\n"
               f"Telegram Kullanıcı ID'niz aşağıdadır:\n\n"
               f"🆔 `{user_id}`\n\n"
               f"(Adminlik yetkisi istemek için bu numarayı kopyalayıp Süper Admin'e gönderebilirsiniz.)")
    await update.message.reply_text(message, parse_mode='Markdown')

@super_admin_only
async def veriyukle(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    try:
        df = pd.read_csv(MASTER_CSV_PATH)
        if not {'kuyu_no', 'metraj'}.issubset(df.columns):
            await update.message.reply_text("HATA: CSV'de `kuyu_no` ve `metraj` başlıkları olmalı."); return
        conn = sqlite3.connect(DB_NAME); conn.execute("DELETE FROM master_kuyular;"); df.to_sql('master_kuyular', conn, if_exists='append', index=False); conn.close()
        await update.message.reply_text(f"✅ Başarılı! {len(df)} adet kuyu ana listeye yüklendi.")
    except FileNotFoundError: await update.message.reply_text(f"HATA: `{MASTER_CSV_PATH}` dosyası bulunamadı.")
    except Exception as e: await update.message.reply_text(f"Bir hata oluştu: {e}")

@restricted
async def kuyuekle_baslat(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    keyboard = [[InlineKeyboardButton("✅ Tam", callback_data="Tam"), InlineKeyboardButton("⚠️ Eksik", callback_data="Eksik")], [InlineKeyboardButton("❌ İptal", callback_data="iptal")]]; await update.message.reply_text('Lütfen eklenecek kuyuların durumunu seçin:', reply_markup=InlineKeyboardMarkup(keyboard)); return SELECT_STATUS
async def status_secildi(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    query = update.callback_query; await query.answer();
    if query.data == 'iptal': await query.edit_message_text(text="İşlem iptal edildi."); return ConversationHandler.END
    context.user_data['durum'] = query.data; bugun_tarih = datetime.now().strftime("%d.%m.%Y"); await query.edit_message_text(text=f"Durum: *{query.data}*\n\nLütfen işlem tarihini `GG.AA.YYYY` formatında girin. (Bugün için: `{bugun_tarih}`)", parse_mode='Markdown'); return GET_DATE
async def tarih_alindi(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    try:
        tarih_str = update.message.text; datetime.strptime(tarih_str, '%d.%m.%Y'); context.user_data['tarih'] = tarih_str; durum = context.user_data['durum']
        if durum == 'Tam': format_str = "`KuyuNo;Foraj`"; ornek_str = "`3309;9.3`\n`3308;10`"
        else: format_str = "`KuyuNo;Foraj;AlınanForaj`"; ornek_str = "`3309;9.3;6.3`\n`3308;10.2;10`"
        yanit_metni = (f"Durum: *{durum}* | Tarih: *{tarih_str}*\n\n" + f"Şimdi yapılan kuyuları {format_str} formatında gönderin:\n\n" + "Örnek:\n" + ornek_str); await update.message.reply_text(yanit_metni, parse_mode='Markdown'); return GET_WELL_DATA
    except ValueError: await update.message.reply_text("Hatalı tarih formatı! Lütfen `GG.AA.YYYY` formatında tekrar girin."); return GET_DATE
async def veri_kaydet(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    gelen_veri = update.message.text; kuyu_satirlari = gelen_veri.strip().split('\n'); user = update.message.from_user; durum = context.user_data['durum']; conn = sqlite3.connect(DB_NAME); cursor = conn.cursor(); basarili_kayitlar = []; hatali_kayitlar = []
    for satir in kuyu_satirlari:
        try:
            parcalar = [p.strip() for p in satir.strip().split(';')]; alinan_metraj = 0.0
            if durum == 'Tam' and len(parcalar) == 2: kuyu_no, foraj = parcalar; alinan_metraj = float(foraj.replace(',', '.'))
            elif durum == 'Eksik' and len(parcalar) == 3: kuyu_no, foraj, alinan_metraj_str = parcalar; alinan_metraj = float(alinan_metraj_str.replace(',', '.'))
            else: raise ValueError("Format hatası")
            cursor.execute("SELECT 1 FROM master_kuyular WHERE kuyu_no = ?", (kuyu_no,));
            if not cursor.fetchone(): hatali_kayitlar.append(f"`{kuyu_no}` - Ana listede yok"); continue
            cursor.execute("INSERT INTO yapilan_kuyular (kuyu_no, foraj, yapilma_tarihi, durum, alinan_metraj, ekleyen_kisi_id, ekleyen_kisi_adi) VALUES (?, ?, ?, ?, ?, ?, ?)", (kuyu_no, foraj, context.user_data['tarih'], durum, alinan_metraj, user.id, user.first_name)); basarili_kayitlar.append(f"`{kuyu_no}`")
        except sqlite3.IntegrityError: cursor.execute("SELECT yapilma_tarihi FROM yapilan_kuyular WHERE kuyu_no = ?", (kuyu_no,)); yapilma_tarihi = cursor.fetchone()[0]; hatali_kayitlar.append(f"`{kuyu_no}` - Zaten *{yapilma_tarihi}* tarihinde yapılmış.")
        except (ValueError, TypeError): hatali_kayitlar.append(f"`{satir}` - Format hatalı veya eksik bilgi.")
    conn.commit(); conn.close(); sonuc_mesaji = ""
    if basarili_kayitlar: sonuc_mesaji += f"✅ **Kaydedildi ({len(basarili_kayitlar)}):**\n" + ", ".join(basarili_kayitlar) + "\n\n"
    if hatali_kayitlar: sonuc_mesaji += f"❌ **Hatalı/Tekrar ({len(hatali_kayitlar)}):**\n" + "\n".join(hatali_kayitlar)
    await update.message.reply_text(sonuc_mesaji, parse_mode='Markdown'); return ConversationHandler.END

@restricted
async def kuyuekletxt_baslat(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    keyboard = [[InlineKeyboardButton("✅ Tam", callback_data="tam_txt"), InlineKeyboardButton("⚠️ Eksik", callback_data="eksik_txt")], [InlineKeyboardButton("❌ İptal", callback_data="iptal_txt")]]; await update.message.reply_text('Lütfen eklenecek kuyuların durumunu seçin:', reply_markup=InlineKeyboardMarkup(keyboard)); return SELECT_STATUS_TXT
async def status_secildi_txt(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    query = update.callback_query; await query.answer()
    if query.data == 'iptal_txt': await query.edit_message_text(text="İşlem iptal edildi."); context.user_data.clear(); return ConversationHandler.END
    durum = "Tam" if query.data == 'tam_txt' else "Eksik"; context.user_data['durum_txt'] = durum
    if durum == 'Tam': format_str = "`Tarih;KuyuNo;Foraj`"; ornek_str = "`02.08.2025;3309;9.3`\n`02.08.2025;3308;10`"
    else: format_str = "`Tarih;KuyuNo;Foraj;AlınanForaj`"; ornek_str = "`02.08.2025;3309;9.3;6.3`\n`02.08.2025;3308;10.2;10`"
    yanit_metni = (f"Durum: *{durum}*\n\n" + f"Şimdi yapılan kuyuları {format_str} formatında, her birini yeni bir satıra yazarak tek bir mesajda gönderin:\n\n" + "Örnek:\n" + f"{ornek_str}")
    await query.edit_message_text(text=yanit_metni, parse_mode='Markdown'); return GET_WELL_DATA_TXT
async def veri_kaydet_txt(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    gelen_veri = update.message.text; kuyu_satirlari = gelen_veri.strip().split('\n'); user = update.message.from_user; durum = context.user_data.get('durum_txt')
    conn = sqlite3.connect(DB_NAME); cursor = conn.cursor(); basarili_kayitlar = []; hatali_kayitlar = []
    for i, satir in enumerate(kuyu_satirlari, 1):
        try:
            parcalar = [p.strip() for p in satir.strip().split(';')]; alinan_metraj = 0.0
            if durum == 'Tam' and len(parcalar) == 3: tarih_str, kuyu_no, foraj_str = parcalar; datetime.strptime(tarih_str, '%d.%m.%Y'); alinan_metraj = float(foraj_str.replace(',', '.'))
            elif durum == 'Eksik' and len(parcalar) == 4: tarih_str, kuyu_no, foraj_str, alinan_metraj_str = parcalar; datetime.strptime(tarih_str, '%d.%m.%Y'); alinan_metraj = float(alinan_metraj_str.replace(',', '.'))
            else: raise ValueError(f"Yanlış format veya eksik sütun sayısı.")
            cursor.execute("SELECT 1 FROM master_kuyular WHERE kuyu_no = ?", (kuyu_no,));
            if not cursor.fetchone(): hatali_kayitlar.append(f"`{kuyu_no}` (Satır {i}) - Ana listede yok"); continue
            cursor.execute("INSERT INTO yapilan_kuyular (kuyu_no, foraj, yapilma_tarihi, durum, alinan_metraj, ekleyen_kisi_id, ekleyen_kisi_adi) VALUES (?, ?, ?, ?, ?, ?, ?)", (kuyu_no, foraj_str, tarih_str, durum, alinan_metraj, user.id, user.first_name)); basarili_kayitlar.append(f"`{kuyu_no}`")
        except sqlite3.IntegrityError:
            cursor.execute("SELECT yapilma_tarihi FROM yapilan_kuyular WHERE kuyu_no = ?", (kuyu_no,)); yapilma_tarihi_db = cursor.fetchone()[0]
            hatali_kayitlar.append(f"`{kuyu_no}` (Satır {i}) - Zaten *{yapilma_tarihi_db}* tarihinde yapılmış.")
        except ValueError as e:
            if "does not match format" in str(e): hatali_kayitlar.append(f"Satır {i} (`{satir.split(';')[0]}`) - Hatalı tarih formatı.")
            else: hatali_kayitlar.append(f"Satır {i} (`{satir}`) - Format hatalı veya geçersiz veri: {e}")
    conn.commit(); conn.close()
    sonuc_mesaji = "";
    if basarili_kayitlar: sonuc_mesaji += f"✅ **Kaydedildi ({len(basarili_kayitlar)}):**\n" + ", ".join(basarili_kayitlar) + "\n\n"
    if hatali_kayitlar: sonuc_mesaji += f"❌ **Hatalı/Tekrar ({len(hatali_kayitlar)}):**\n" + "\n".join(hatali_kayitlar)
    await update.message.reply_text(sonuc_mesaji or "İşlenecek veri bulunamadı.", parse_mode='Markdown'); context.user_data.clear(); return ConversationHandler.END

@restricted
async def sil_komutu(update: Update, context: ContextTypes.DEFAULT_TYPE):
    args = context.args
    if not args: await update.message.reply_text("Kullanım:\n`/sil <kuyu_no>`\n`/sil <tarih>`\n`/sil <başlangıç> <bitiş>`\n`/sil tamamını`", parse_mode='Markdown'); return
    conn = sqlite3.connect(DB_NAME); cursor = conn.cursor()
    if len(args) == 1 and args[0].lower() == 'tamamını':
        keyboard = [[InlineKeyboardButton("⚠️ EVET, TÜM KAYITLARI SİL", callback_data="confirm_delete_all"), InlineKeyboardButton("❌ HAYIR, İPTAL ET", callback_data="cancel_delete_all")]]; await update.message.reply_text("⚠️ **EMİN MİSİNİZ?**\nBu işlem, yapılmış olan **TÜM** kuyu kayıtlarını kalıcı olarak silecektir. Bu işlemin geri dönüşü yoktur!", reply_markup=InlineKeyboardMarkup(keyboard)); return
    if len(args) == 2:
        try:
            start_date = datetime.strptime(args[0], '%d.%m.%Y').strftime('%Y-%m-%d'); end_date = datetime.strptime(args[1], '%d.%m.%Y').strftime('%Y-%m-%d')
            cursor.execute("DELETE FROM yapilan_kuyular WHERE SUBSTR(yapilma_tarihi, 7, 4) || '-' || SUBSTR(yapilma_tarihi, 4, 2) || '-' || SUBSTR(yapilma_tarihi, 1, 2) BETWEEN ? AND ?", (start_date, end_date)); etkilenen_satir = cursor.rowcount; await update.message.reply_text(f"✅ `{args[0]}` ve `{args[1]}` tarihleri arasındaki {etkilenen_satir} adet kayıt silindi."); conn.commit(); conn.close(); return
        except ValueError: await update.message.reply_text("Hatalı tarih aralığı formatı. Lütfen `GG.AA.YYYY GG.AA.YYYY` formatını kullanın."); conn.close(); return
    if len(args) == 1:
        arg = args[0]
        try:
            datetime.strptime(arg, '%d.%m.%Y'); cursor.execute("DELETE FROM yapilan_kuyular WHERE yapilma_tarihi = ?", (arg,)); etkilenen_satir = cursor.rowcount; await update.message.reply_text(f"✅ `{arg}` tarihine ait {etkilenen_satir} adet kayıt silindi.")
        except ValueError:
            cursor.execute("DELETE FROM yapilan_kuyular WHERE kuyu_no = ?", (arg,)); etkilenen_satir = cursor.rowcount
            if etkilenen_satir > 0: await update.message.reply_text(f"✅ `{arg}` numaralı kuyu kaydı başarıyla silindi.")
            else: await update.message.reply_text(f"❌ `{arg}` numaralı yapılmış bir kuyu kaydı bulunamadı.")
        conn.commit(); conn.close(); return

@restricted
async def tumunu_sil_onay(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query; await query.answer()
    if query.data == 'confirm_delete_all':
        conn = sqlite3.connect(DB_NAME); cursor = conn.cursor(); cursor.execute("DELETE FROM yapilan_kuyular"); etkilenen_satir = cursor.rowcount; conn.commit(); conn.close()
        await query.edit_message_text(text=f"✅ **TÜM KAYITLAR SİLİNDİ!**\nToplam {etkilenen_satir} adet kayıt veritabanından kaldırıldı.")
    else: await query.edit_message_text(text="İşlem iptal edildi.")

@restricted
async def toplusil_baslat(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    await update.message.reply_text("Silmek istediğiniz yapılmış kuyu numaralarını alt alta yazıp tek bir mesajla gönderin. (İptal için /iptal)"); return GET_WELLS_TO_DELETE
async def kuyulari_toplusil(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    gelen_veri = update.message.text; kuyu_nolar = gelen_veri.strip().split('\n'); conn = sqlite3.connect(DB_NAME); cursor = conn.cursor(); basarili_silinenler = []; bulunamayanlar = []
    for kuyu_no in kuyu_nolar:
        kuyu_no = kuyu_no.strip()
        if not kuyu_no: continue
        cursor.execute("DELETE FROM yapilan_kuyular WHERE kuyu_no = ?", (kuyu_no,));
        if cursor.rowcount > 0: basarili_silinenler.append(f"`{kuyu_no}`")
        else: bulunamayanlar.append(f"`{kuyu_no}`")
    conn.commit(); conn.close(); sonuc_mesaji = ""
    if basarili_silinenler: sonuc_mesaji += f"✅ **Silindi ({len(basarili_silinenler)}):**\n" + ", ".join(basarili_silinenler) + "\n\n"
    if bulunamayanlar: sonuc_mesaji += f"❌ **Bulunamadı ({len(bulunamayanlar)}):**\n" + ", ".join(bulunamayanlar)
    await update.message.reply_text(sonuc_mesaji if sonuc_mesaji else "Kuyu girilmedi.", parse_mode='Markdown'); return ConversationHandler.END

@restricted
async def duzenle_baslat(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    await update.message.reply_text("Düzenlemek istediğiniz yapılmış kuyunun numarasını girin. (İptal için /iptal)"); return SELECT_WELL_TO_EDIT
async def kuyu_secildi(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    kuyu_no = update.message.text.strip(); conn = sqlite3.connect(DB_NAME); cursor = conn.cursor(); cursor.execute("SELECT yapilma_tarihi, foraj, durum FROM yapilan_kuyular WHERE kuyu_no = ?", (kuyu_no,)); kuyu_verisi = cursor.fetchone(); conn.close()
    if not kuyu_verisi: await update.message.reply_text("Bu numaraya sahip yapılmış bir kuyu bulunamadı. Tekrar deneyin veya /iptal yazın."); return SELECT_WELL_TO_EDIT
    context.user_data['edit_kuyu_no'] = kuyu_no; tarih, foraj, durum = kuyu_verisi
    mesaj = (f"Kuyu No: `{kuyu_no}`\n" + f"Mevcut Bilgiler:\n" + f"  Tarih: {tarih}\n" + f"  Foraj: {foraj}\n" + f"  Durum: {durum}\n\n" + f"Neyi değiştirmek istersiniz?")
    keyboard = [[InlineKeyboardButton("🔢 Kuyu No", callback_data="edit_kuyu_no")], [InlineKeyboardButton("🗓️ Tarih", callback_data="edit_tarih"), InlineKeyboardButton("⛏️ Foraj", callback_data="edit_foraj")], [InlineKeyboardButton("📊 Durum", callback_data="edit_durum")], [InlineKeyboardButton("❌ İptal", callback_data="iptal")]]; await update.message.reply_text(mesaj, reply_markup=InlineKeyboardMarkup(keyboard), parse_mode='Markdown'); return SELECT_FIELD_TO_EDIT
async def alan_secildi(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    query = update.callback_query; await query.answer(); field_to_edit = query.data; context.user_data['field_to_edit'] = field_to_edit
    if field_to_edit == "edit_kuyu_no": await query.edit_message_text(text="Lütfen bu kayıt için YENİ kuyu numarasını girin.")
    elif field_to_edit == "edit_tarih": await query.edit_message_text(text="Lütfen yeni tarihi `GG.AA.YYYY` formatında girin.")
    elif field_to_edit == "edit_foraj": await query.edit_message_text(text="Lütfen yeni 'Foraj' bilgisini girin.")
    elif field_to_edit == "edit_durum": keyboard = [[InlineKeyboardButton("✅ Tam", callback_data="yeni_durum_Tam"), InlineKeyboardButton("⚠️ Eksik", callback_data="yeni_durum_Eksik")]]; await query.edit_message_text(text="Lütfen yeni durumu seçin:", reply_markup=InlineKeyboardMarkup(keyboard)); return SELECT_FIELD_TO_EDIT
    return GET_NEW_VALUE
async def yeni_deger_alindi(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    yeni_deger = update.message.text.strip(); field_to_edit = context.user_data.get('field_to_edit'); eski_kuyu_no = context.user_data.get('edit_kuyu_no')
    conn = sqlite3.connect(DB_NAME); cursor = conn.cursor()
    if field_to_edit == 'edit_kuyu_no':
        yeni_kuyu_no = yeni_deger
        cursor.execute("SELECT 1 FROM master_kuyular WHERE kuyu_no = ?", (yeni_kuyu_no,));
        if not cursor.fetchone(): await update.message.reply_text(f"❌ Hata: `{yeni_kuyu_no}` ana listede bulunamadı. İşlem iptal edildi."); conn.close(); return ConversationHandler.END
        cursor.execute("SELECT 1 FROM yapilan_kuyular WHERE kuyu_no = ?", (yeni_kuyu_no,));
        if cursor.fetchone(): await update.message.reply_text(f"❌ Hata: `{yeni_kuyu_no}` zaten yapılmış olarak kayıtlı. İşlem iptal edildi."); conn.close(); return ConversationHandler.END
        cursor.execute("UPDATE yapilan_kuyular SET kuyu_no = ? WHERE kuyu_no = ?", (yeni_kuyu_no, eski_kuyu_no)); mesaj = f"✅ Başarılı! `{eski_kuyu_no}` kuyusunun numarası `{yeni_kuyu_no}` olarak güncellendi."
    else:
        field_map = {'edit_tarih': 'yapilma_tarihi', 'edit_foraj': 'foraj'}; db_column = field_map.get(field_to_edit)
        if db_column == 'foraj':
            try:
                alinan_metraj = float(yeni_deger.replace(',', '.')); cursor.execute(f"UPDATE yapilan_kuyular SET foraj = ?, alinan_metraj = ? WHERE kuyu_no = ?", (yeni_deger, alinan_metraj, eski_kuyu_no))
            except (ValueError, TypeError): await update.message.reply_text("Hatalı foraj değeri. Lütfen sayısal bir değer girin."); conn.close(); return GET_NEW_VALUE
        else: cursor.execute(f"UPDATE yapilan_kuyular SET {db_column} = ? WHERE kuyu_no = ?", (yeni_deger, eski_kuyu_no))
        mesaj = f"✅ Başarılı! `{eski_kuyu_no}` numaralı kuyunun bilgisi güncellendi."
    conn.commit(); conn.close(); await update.message.reply_text(mesaj); context.user_data.clear(); return ConversationHandler.END
async def yeni_durum_secildi(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    query = update.callback_query; await query.answer(); yeni_durum = query.data.replace('yeni_durum_', ''); kuyu_no = context.user_data.get('edit_kuyu_no')
    conn = sqlite3.connect(DB_NAME); cursor = conn.cursor(); cursor.execute(f"UPDATE yapilan_kuyular SET durum = ? WHERE kuyu_no = ?", (yeni_durum, kuyu_no)); conn.commit(); conn.close()
    await query.edit_message_text(text=f"✅ Başarılı! `{kuyu_no}` numaralı kuyunun durumu *{yeni_durum}* olarak güncellendi.", parse_mode='Markdown'); context.user_data.clear(); return ConversationHandler.END
async def genel_iptal(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    if update.callback_query: await update.callback_query.answer(); await update.callback_query.edit_message_text("İşlem iptal edildi.")
    else: await update.message.reply_text("İşlem iptal edildi.")
    context.user_data.clear(); return ConversationHandler.END

async def ilerleme(update: Update, context: ContextTypes.DEFAULT_TYPE):
    conn = sqlite3.connect(DB_NAME); master_df = pd.read_sql_query("SELECT kuyu_no, metraj FROM master_kuyular", conn); yapilan_df = pd.read_sql_query("SELECT kuyu_no FROM yapilan_kuyular", conn); conn.close()
    if master_df.empty: await update.message.reply_text("Ana kuyu listesi boş. `/veriyukle` komutunu kullanın."); return
    mesaj = "📊 **Proje İlerleme Durumu (Metraja Göre)**\n\n"; metraj_gruplari = sorted(master_df['metraj'].unique())
    for metraj in metraj_gruplari:
        toplam_kuyu_df = master_df[master_df['metraj'] == metraj]; yapilan_kuyu_df_metraj = toplam_kuyu_df[toplam_kuyu_df['kuyu_no'].isin(yapilan_df['kuyu_no'])]; toplam_sayi = len(toplam_kuyu_df); yapilan_sayi = len(yapilan_kuyu_df_metraj); kalan_sayi = toplam_sayi - yapilan_sayi; yuzde = (yapilan_sayi / toplam_sayi * 100) if toplam_sayi > 0 else 0
        mesaj += f"*{int(metraj)} Metre Kuyuları:*\n  Toplam: {toplam_sayi}, Yapılan: {yapilan_sayi}, Kalan: {kalan_sayi}  (%{yuzde:.1f})\n"
    genel_toplam = len(master_df); genel_yapilan = len(yapilan_df); genel_kalan = genel_toplam - genel_yapilan; genel_yuzde = (genel_yapilan / genel_toplam * 100) if genel_toplam > 0 else 0
    mesaj += "\n-------------------------------------\n" + f"**GENEL TOPLAM:**\n" + f"  Toplam: {genel_toplam}, Yapılan: {genel_yapilan}, Kalan: {genel_kalan}  **(Genel %{genel_yuzde:.1f})**"; await update.message.reply_text(mesaj, parse_mode='Markdown')

async def ara(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args: await update.message.reply_text("Kullanım: `/ara <Kuyu Numarası>`\nÖrnek: `/ara 3309`", parse_mode='Markdown'); return
    kuyu_no_aranan = context.args[0].strip(); conn = sqlite3.connect(DB_NAME); cursor = conn.cursor()
    cursor.execute("SELECT metraj FROM master_kuyular WHERE kuyu_no = ?", (kuyu_no_aranan,)); master_kayit = cursor.fetchone()
    if not master_kayit: await update.message.reply_text(f"❌ `{kuyu_no_aranan}` numaralı kuyu proje ana listesinde bulunamadı.", parse_mode='Markdown'); conn.close(); return
    proje_metraji = master_kayit[0]
    cursor.execute("SELECT yapilma_tarihi, foraj, durum, ekleyen_kisi_adi FROM yapilan_kuyular WHERE kuyu_no = ?", (kuyu_no_aranan,)); yapilan_kayit = cursor.fetchone(); conn.close()
    if yapilan_kayit:
        yapilma_tarihi, foraj, durum, ekleyen_kisi_adi = yapilan_kayit
        mesaj = (f"🔎 **Kuyu Arama Sonucu: `{kuyu_no_aranan}`**\n\n" + f"✅ **DURUM: YAPILDI**\n" + f"-------------------------------------\n" + f"🔹 **Proje Metrajı:** {proje_metraji}m\n" + f"🔹 **Yapılma Tarihi:** {yapilma_tarihi}\n" + f"🔹 **Yapılan Foraj:** {foraj}m\n" + f"🔹 **Kayıt Durumu:** {durum}\n" + f"🔹 **Ekleyen:** {ekleyen_kisi_adi}")
    else:
        mesaj = (f"🔎 **Kuyu Arama Sonucu: `{kuyu_no_aranan}`**\n\n" + f"⚠️ **DURUM: YAPILMADI**\n" + f"-------------------------------------\n" + f"🔹 **Proje Metrajı:** {proje_metraji}m\n\n" + f"Bu kuyu henüz `yapilan_kuyular` listesine eklenmemiş.")
    await update.message.reply_text(mesaj, parse_mode='Markdown')

def get_report_data(args: list) -> (pd.DataFrame, pd.DataFrame, str):
    params = (); where_clause = ""; rapor_basligi = "Kuyu Durum Raporu (Tüm Zamanlar)"
    if len(args) == 1:
        start_date = datetime.strptime(args[0], '%d.%m.%Y').strftime('%Y-%m-%d'); where_clause = "WHERE SUBSTR(y.yapilma_tarihi, 7, 4) || '-' || SUBSTR(y.yapilma_tarihi, 4, 2) || '-' || SUBSTR(y.yapilma_tarihi, 1, 2) = ?"; params = (start_date,); rapor_basligi = f"Kuyu Durum Raporu ({args[0]})"
    elif len(args) == 2:
        start_date = datetime.strptime(args[0], '%d.%m.%Y').strftime('%Y-%m-%d'); end_date = datetime.strptime(args[1], '%d.%m.%Y').strftime('%Y-%m-%d'); where_clause = "WHERE SUBSTR(y.yapilma_tarihi, 7, 4) || '-' || SUBSTR(y.yapilma_tarihi, 4, 2) || '-' || SUBSTR(y.yapilma_tarihi, 1, 2) BETWEEN ? AND ?"; params = (start_date, end_date); rapor_basligi = f"Kuyu Durum Raporu ({args[0]} - {args[1]})"
    conn = sqlite3.connect(DB_NAME)
    detay_query = (f"SELECT y.id, y.yapilma_tarihi, m.kuyu_no, m.metraj as proje_metraji, y.foraj, y.alinan_metraj, y.durum "
                   f"FROM yapilan_kuyular y JOIN master_kuyular m ON y.kuyu_no = m.kuyu_no {where_clause} "
                   f"ORDER BY SUBSTR(y.yapilma_tarihi, 7, 4) || '-' || SUBSTR(y.yapilma_tarihi, 4, 2) || '-' || SUBSTR(y.yapilma_tarihi, 1, 2) ASC")
    detay_df = pd.read_sql_query(detay_query, conn, params=params)
    if detay_df.empty: conn.close(); return None, None, rapor_basligi
    master_df = pd.read_sql_query("SELECT kuyu_no, metraj FROM master_kuyular", conn)
    yapilan_df_filtered = pd.read_sql_query(f"SELECT kuyu_no, durum FROM yapilan_kuyular y {where_clause}", conn, params=params)
    conn.close()
    summary_data = []
    metraj_gruplari = sorted(master_df['metraj'].unique())
    for metraj in metraj_gruplari:
        toplam_kuyu_df = master_df[master_df['metraj'] == metraj]; toplam_sayi = len(toplam_kuyu_df)
        yapilan_kuyular_bu_metrajda_df = toplam_kuyu_df.merge(yapilan_df_filtered, on='kuyu_no')
        tam_sayisi = len(yapilan_kuyular_bu_metrajda_df[yapilan_kuyular_bu_metrajda_df['durum'] == 'Tam']); eksik_sayisi = len(yapilan_kuyular_bu_metrajda_df[yapilan_kuyular_bu_metrajda_df['durum'] == 'Eksik']); kalan_sayi = toplam_sayi - (tam_sayisi + eksik_sayisi)
        summary_data.append([f"{int(metraj)}m", toplam_sayi, tam_sayisi, eksik_sayisi, kalan_sayi])
    genel_toplam_kuyu = len(master_df); genel_toplam_tam = len(yapilan_df_filtered[yapilan_df_filtered['durum'] == 'Tam']); genel_toplam_eksik = len(yapilan_df_filtered[yapilan_df_filtered['durum'] == 'Eksik']); genel_toplam_kalan = genel_toplam_kuyu - (genel_toplam_tam + genel_toplam_eksik)
    summary_data.append(["GENEL TOPLAM", genel_toplam_kuyu, genel_toplam_tam, genel_toplam_eksik, genel_toplam_kalan])
    summary_df = pd.DataFrame(summary_data, columns=['Grup', 'Toplam Proje', 'Tam Yapılan', 'Eksik Yapılan', 'Kalan']); detay_df.rename(columns={'kuyu_no': 'Kuyu No', 'yapilma_tarihi': 'Tarih', 'proje_metraji': 'Proje Metrajı', 'foraj': 'Foraj', 'alinan_metraj': 'Alınan Foraj', 'durum': 'Durum'}, inplace=True)
    return detay_df, summary_df, rapor_basligi

async def rapor(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        detay_df, summary_df, rapor_basligi = get_report_data(context.args)
    except (ValueError, IndexError): await update.message.reply_text("Hatalı kullanım!\n`/rapor` (Tümü)\n`/rapor GG.AA.YYYY`\n`/rapor GG.AA.YYYY GG.AA.YYYY`", parse_mode='Markdown'); return
    if detay_df is None: await update.message.reply_text("Belirtilen kriterlere uygun yapılmış kuyu bulunamadı."); return
    await update.message.reply_text("Dosya raporlarınız hazırlanıyor, lütfen bekleyin...")
    detay_df.insert(0, 'Sıra No', range(1, 1 + len(detay_df))); detay_df['Fark'] = detay_df.apply(lambda row: row['Proje Metrajı'] - row['Alınan Foraj'] if row['Durum'] == 'Eksik' else 0, axis=1)
    excel_columns = ['Sıra No', 'Tarih', 'Kuyu No', 'Proje Metrajı', 'Foraj', 'Alınan Foraj', 'Durum', 'Fark']; detay_df_formatted = detay_df[excel_columns].copy()
    for col in ['Proje Metrajı', 'Alınan Foraj', 'Fark']: detay_df_formatted[col] = detay_df_formatted[col].apply(lambda x: f"{x:.2f}")
    rapor_tarihi_str = rapor_basligi.replace("Kuyu Durum Raporu", "").strip(" ()").replace(".", "-") or "Tum_Zamanlar"; excel_path = os.path.join(SCRIPT_DIR, f"Rapor_{rapor_tarihi_str}.xlsx")
    with pd.ExcelWriter(excel_path) as writer: detay_df_formatted.to_excel(writer, sheet_name='Detaylı Liste', index=False); summary_df.to_excel(writer, sheet_name='Özet', index=False)
    await context.bot.send_document(chat_id=update.effective_chat.id, document=open(excel_path, 'rb'), caption=f"{rapor_basligi} (Excel)"); os.remove(excel_path)
    try:
        font_regular_path = os.path.join(SCRIPT_DIR, "RobotoCondensed-Regular.ttf"); font_bold_path = os.path.join(SCRIPT_DIR, "RobotoCondensed-Bold.ttf"); font_italic_path = os.path.join(SCRIPT_DIR, "RobotoCondensed-Italic.ttf")
        if not all(map(os.path.exists, [font_regular_path, font_bold_path, font_italic_path])): raise FileNotFoundError("Gerekli Roboto Condensed font dosyaları (Regular, Bold, Italic) bulunamadı.")
        class PDF(FPDF):
            def header(self): self.set_font(FONT_FAMILY_NAME, 'B', 15); self.cell(0, 10, rapor_basligi, 0, 1, 'C'); self.ln(5)
            def footer(self): self.set_y(-15); self.set_font(FONT_FAMILY_NAME, 'I', 8); self.cell(0, 10, f'Sayfa {self.page_no()}', 0, 0, 'C')
        pdf = PDF(orientation='P'); pdf.add_font(FONT_FAMILY_NAME, '', font_regular_path); pdf.add_font(FONT_FAMILY_NAME, 'B', font_bold_path); pdf.add_font(FONT_FAMILY_NAME, 'I', font_italic_path)
        pdf.set_auto_page_break(auto=True, margin=15); pdf.add_page(); pdf.set_font(FONT_FAMILY_NAME, 'B', 9)
        pdf_header = ['S.N', 'Tarih', 'Kuyu No', 'P.Metraj', 'Foraj', 'Alınan M.', 'Durum', 'Fark']; col_widths = {'S.N': 12, 'Tarih': 22, 'Kuyu No': 22, 'P.Metraj': 22, 'Foraj': 35, 'Alınan M.': 25, 'Durum': 18, 'Fark': 20}
        for col_name in pdf_header: pdf.cell(col_widths.get(col_name), 10, col_name, 1, 0, 'C')
        pdf.ln(); pdf.set_font(FONT_FAMILY_NAME, '', 8)
        for _, row in detay_df_formatted.iterrows():
            pdf.cell(col_widths.get('S.N'), 10, str(row['Sıra No']), 1, 0, 'C'); pdf.cell(col_widths.get('Tarih'), 10, str(row['Tarih']), 1, 0, 'C'); pdf.cell(col_widths.get('Kuyu No'), 10, str(row['Kuyu No']), 1, 0, 'C'); pdf.cell(col_widths.get('P.Metraj'), 10, str(row['Proje Metrajı']), 1, 0, 'C'); pdf.cell(col_widths.get('Foraj'), 10, str(row['Foraj']), 1, 0, 'C'); pdf.cell(col_widths.get('Alınan M.'), 10, str(row['Alınan Foraj']), 1, 0, 'C'); pdf.cell(col_widths.get('Durum'), 10, str(row['Durum']), 1, 0, 'C'); pdf.cell(col_widths.get('Fark'), 10, str(row['Fark']), 1, 0, 'C'); pdf.ln()
        pdf.ln(10); pdf.set_font(FONT_FAMILY_NAME, 'B', 12); pdf.cell(0, 10, f'Proje Ozeti - {rapor_tarihi_str.replace("_", " ")}', 0, 1, 'L'); pdf.set_font(FONT_FAMILY_NAME, '', 10)
        for _, row in summary_df.iterrows(): summary_text = (f"{row['Grup']}:  " + f"Toplam: {row['Toplam Proje']}, Tam: {row['Tam Yapılan']}, Eksik: {row['Eksik Yapılan']}, Kalan: {row['Kalan']}"); pdf.cell(0, 8, summary_text, 0, 1, 'L')
        pdf_path = os.path.join(SCRIPT_DIR, f"Rapor_{rapor_tarihi_str}.pdf"); pdf.output(pdf_path)
        await context.bot.send_document(chat_id=update.effective_chat.id, document=open(pdf_path, 'rb'), caption=f"{rapor_basligi} (PDF)"); os.remove(pdf_path)
    except (FPDFException, FileNotFoundError, Exception) as e:
        logger.error(f"PDF oluşturma hatası: {e}\n{traceback.format_exc()}"); await update.message.reply_text(f"✅ Excel raporu başarıyla gönderildi.\n\n❌ PDF raporu oluşturulamadı.\n*Hata Detayı:* {str(e)}")

async def raportxt(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        detay_df, summary_df, rapor_basligi = get_report_data(context.args)
    except (ValueError, IndexError): await update.message.reply_text("Hatalı kullanım!\n`/raportxt` (Tümü)\n`/raportxt GG.AA.YYYY`\n`/raportxt GG.AA.YYYY GG.AA.YYYY`", parse_mode='Markdown'); return
    if detay_df is None: await update.message.reply_text("Belirtilen kriterlere uygun yapılmış kuyu bulunamadı."); return
    mesaj = f"*{rapor_basligi}*\n" + "-------------------------------------\n\n"; mesaj += "*📊 Proje Özeti*\n"
    for _, row in summary_df.iterrows(): mesaj += f"*{row['Grup']}:* T: {row['Toplam Proje']}, Tam: {row['Tam Yapılan']}, Eksik: {row['Eksik Yapılan']}, Kalan: {row['Kalan']}\n"
    mesaj += "\n-------------------------------------\n"; detay_mesaji = "*📋 Detaylı Liste*\n"
    for _, row in detay_df.iterrows(): detay_mesaji += f"`{row['Kuyu No']}` - {row['Foraj']}m (Durum: {row['Durum']})\n"
    if len(mesaj) + len(detay_mesaji) > 4000: mesaj += "_Detaylı liste çok uzun. Detaylar için `/rapor` komutunu kullanın._"
    else: mesaj += detay_mesaji
    await update.message.reply_text(mesaj, parse_mode='Markdown')

@super_admin_only
async def yetki_ver(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        user_id_to_add = int(context.args[0]); conn = sqlite3.connect(DB_NAME); cursor = conn.cursor(); cursor.execute("INSERT OR IGNORE INTO adminler (user_id) VALUES (?)", (user_id_to_add,)); conn.commit(); conn.close()
        await update.message.reply_text(f"✅ `{user_id_to_add}` ID'li kullanıcıya admin yetkisi verildi.", parse_mode='Markdown')
    except (IndexError, ValueError): await update.message.reply_text("Kullanım: `/yetkiver <user_id>`")
@super_admin_only
async def yetki_al(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        user_id_to_remove = int(context.args[0])
        if user_id_to_remove == SUPER_ADMIN_ID: await update.message.reply_text("Süper Admin'in yetkisini kaldıramazsınız."); return
        conn = sqlite3.connect(DB_NAME); cursor = conn.cursor(); cursor.execute("DELETE FROM adminler WHERE user_id = ?", (user_id_to_remove,)); conn.commit(); conn.close()
        await update.message.reply_text(f"✅ `{user_id_to_remove}` ID'li kullanıcının admin yetkisi kaldırıldı.", parse_mode='Markdown')
    except (IndexError, ValueError): await update.message.reply_text("Kullanım: `/yetkial <user_id>`")

@restricted
async def admin_listesi(update: Update, context: ContextTypes.DEFAULT_TYPE):
    conn = sqlite3.connect(DB_NAME); cursor = conn.cursor(); cursor.execute("SELECT user_id FROM adminler"); admins = cursor.fetchall(); conn.close(); mesaj = "🔑 **Yetkili Kullanıcılar (Adminler):**\n"
    for admin_id in admins:
        mesaj += f"- `{admin_id[0]}`";
        if admin_id[0] == SUPER_ADMIN_ID: mesaj += " (Süper Admin)"
        mesaj += "\n"
    await update.message.reply_text(mesaj, parse_mode='Markdown')

def main() -> None:
    setup_database()
    application = Application.builder().token(API_TOKEN).build()
    
    # WEB APP'TEN GELEN İSTEKLER İÇİN HANDLER
    application.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, web_app_data_handler))
    
    # DİĞER TÜM HANDLER'LAR
    iptal_handler = CommandHandler("iptal", genel_iptal)
    ekle_conv_handler = ConversationHandler(entry_points=[CommandHandler("kuyuekle", kuyuekle_baslat)], states={SELECT_STATUS: [CallbackQueryHandler(status_secildi)], GET_DATE: [MessageHandler(filters.TEXT & ~filters.COMMAND, tarih_alindi)], GET_WELL_DATA: [MessageHandler(filters.TEXT & ~filters.COMMAND, veri_kaydet)]}, fallbacks=[iptal_handler, CallbackQueryHandler(genel_iptal, pattern="^iptal$")])
    kuyuekletxt_conv_handler = ConversationHandler(entry_points=[CommandHandler("kuyuekletxt", kuyuekletxt_baslat)], states={SELECT_STATUS_TXT: [CallbackQueryHandler(status_secildi_txt)], GET_WELL_DATA_TXT: [MessageHandler(filters.TEXT & ~filters.COMMAND, veri_kaydet_txt)]}, fallbacks=[iptal_handler, CallbackQueryHandler(genel_iptal, pattern="^iptal_txt$")])
    sil_conv_handler = ConversationHandler(entry_points=[CommandHandler("toplusil", toplusil_baslat)], states={GET_WELLS_TO_DELETE: [MessageHandler(filters.TEXT & ~filters.COMMAND, kuyulari_toplusil)]}, fallbacks=[iptal_handler])
    duzenle_conv_handler = ConversationHandler(entry_points=[CommandHandler("duzenle", duzenle_baslat)], states={SELECT_WELL_TO_EDIT: [MessageHandler(filters.TEXT & ~filters.COMMAND, kuyu_secildi)], SELECT_FIELD_TO_EDIT: [CallbackQueryHandler(alan_secildi, pattern="^edit_"), CallbackQueryHandler(yeni_durum_secildi, pattern="^yeni_durum_")], GET_NEW_VALUE: [MessageHandler(filters.TEXT & ~filters.COMMAND, yeni_deger_alindi)]}, fallbacks=[iptal_handler, CallbackQueryHandler(genel_iptal, pattern="^iptal$")])

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("id", show_my_id))
    application.add_handler(CommandHandler("dashboard", dashboard))
    application.add_handler(CommandHandler("get_dashboard_data", get_dashboard_data))
    application.add_handler(CommandHandler("veriyukle", veriyukle))
    application.add_handler(ekle_conv_handler)
    application.add_handler(kuyuekletxt_conv_handler)
    application.add_handler(CommandHandler("sil", sil_komutu))
    application.add_handler(CallbackQueryHandler(tumunu_sil_onay, pattern="^confirm_delete_all$|^cancel_delete_all$"))
    application.add_handler(sil_conv_handler)
    application.add_handler(duzenle_conv_handler)
    application.add_handler(CommandHandler("ara", ara))
    application.add_handler(CommandHandler("ilerleme", ilerleme))
    application.add_handler(CommandHandler("rapor", rapor))
    application.add_handler(CommandHandler("raportxt", raportxt))
    application.add_handler(CommandHandler("yetkiver", yetki_ver))
    application.add_handler(CommandHandler("yetkial", yetki_al))
    application.add_handler(CommandHandler("adminlistesi", admin_listesi))

    logger.info("Bot başlatılıyor..."); application.run_polling()

if __name__ == "__main__":
    main()