# =============================================================================
#           KUYU YÖNETİM TELEGRAM BOTU - KOYEB SÜRÜMÜ (PostgreSQL)
# =============================================================================
import os
import logging
from datetime import datetime
import pandas as pd
from fpdf import FPDF
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import (Application, CommandHandler, ContextTypes, ConversationHandler, CallbackQueryHandler, MessageHandler, filters)
from functools import wraps
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# --- AYARLAR ---
API_TOKEN = os.environ.get("API_TOKEN", "8238034662:AAEAbeGig96fz7tf-yUkmLNMPk2v2I5jOxw")
SUPER_ADMIN_ID = int(os.environ.get("SUPER_ADMIN_ID", "1566380580"))
DATABASE_URL = os.environ.get("DATABASE_URL") # Bu Koyeb'den gelecek

# --- Flask ve SQLAlchemy Kurulumu ---
# Geçici bir Flask uygulaması oluşturup veritabanı bağlantısını yapıyoruz.
# Bu, botun veritabanı modellerini tanımasını sağlar.
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

# --- Logging Kurulumu ---
logging.basicConfig(format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO)
logger = logging.getLogger(__name__)

# --- VERİTABANI MODELLERİ ---
class MasterKuyular(db.Model):
    kuyu_no = db.Column(db.String, primary_key=True)
    metraj = db.Column(db.Float, nullable=False)

class YapilanKuyular(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    kuyu_no = db.Column(db.String, nullable=False, unique=True)
    foraj = db.Column(db.String, nullable=False)
    yapilma_tarihi = db.Column(db.String, nullable=False)
    durum = db.Column(db.String, nullable=False)
    alinan_metraj = db.Column(db.Float, default=0)
    ekleyen_kisi_id = db.Column(db.BigInteger, nullable=False)
    ekleyen_kisi_adi = db.Column(db.String, nullable=False)

class Adminler(db.Model):
    user_id = db.Column(db.BigInteger, primary_key=True)

# --- Veritabanı ve Yetkilendirme Fonksiyonları (SQLAlchemy versiyonu) ---
def setup_database():
    with app.app_context():
        db.create_all()
        # Süper admini kontrol et ve ekle
        super_admin = db.session.get(Adminler, SUPER_ADMIN_ID)
        if not super_admin:
            db.session.add(Adminler(user_id=SUPER_ADMIN_ID))
            db.session.commit()
    logger.info("Veritabanı bağlantısı hazır ve tablolar oluşturuldu.")

def yetkili_mi(user_id: int) -> bool:
    with app.app_context():
        admin = db.session.get(Adminler, user_id)
        return admin is not None

# ... (Diğer tüm bot fonksiyonlarınız buraya gelecek, ancak veritabanı
# işlemleri SQLAlchemy'ye göre güncellenmeli. Başlangıç olarak temel fonksiyonları
# ekliyorum, diğerlerini daha sonra bu yapıya göre uyarlayabiliriz.)

# Örnek olarak /start ve yetki fonksiyonları
def restricted(func):
    @wraps(func)
    async def wrapped(update: Update, context: ContextTypes.DEFAULT_TYPE, *args, **kwargs):
        if not yetkili_mi(update.effective_user.id):
            await update.message.reply_text("⛔️ Üzgünüm, bu komutu kullanma yetkiniz yok.")
            return
        return await func(update, context, *args, **kwargs)
    return wrapped

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user_name = update.effective_user.first_name
    await update.message.reply_text(f"Merhaba {user_name}! Koyeb üzerinden çalışan bota hoş geldiniz.")
    
# --- BOT KURULUMU ---
def setup_application() -> Application:
    setup_database() # Veritabanını hazırla
    application = Application.builder().token(API_TOKEN).build()
    
    # Komutları ekle
    application.add_handler(CommandHandler("start", start))
    # ... Diğer komut handler'larınızı buraya ekleyebilirsiniz.
    
    return application

application = setup_application()