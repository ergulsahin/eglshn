from flask import Flask, request
import asyncio
import telegram
import os

# Diğer dosyamızdaki hazır 'application' nesnesini import ediyoruz.
from kuyu_yonetim_botu import application

# Token doğrudan koda yazıldı.
TOKEN = "8238034662:AAEAbeGig96fz7tf-yUkmLNMPk2v2I5jOxw"

# Flask web sunucusunu oluşturuyoruz.
app = Flask(__name__)

# Bu fonksiyon, Telegram'dan gelen mesajları karşılayacak.
@app.route(f'/{TOKEN}', methods=['POST'])
def webhook_handler():
    update_data = request.get_json(force=True)
    update = telegram.Update.de_json(update_data, application.bot)

    # Kütüphaneyi başlatıp güncellemeyi işleyecek asenkron fonksiyon
    async def process():
        await application.initialize()
        await application.process_update(update)

    asyncio.run(process())
    return 'ok'

# Bu fonksiyon, webhook'u Telegram'a tanıtmak için kullanılır.
@app.route('/setwebhook', methods=['GET', 'POST'])
def set_webhook():
    PA_USERNAME = "diaponik"
    webhook_url = f'https://{PA_USERNAME}.pythonanywhere.com/{TOKEN}'

    # Kütüphaneyi başlatıp webhook'u ayarlayacak asenkron fonksiyon
    async def setup():
        await application.initialize()
        success = await application.bot.set_webhook(webhook_url)
        return success

    s = asyncio.run(setup())
    
    if s:
        return f"Webhook başarıyla ayarlandı: {webhook_url}"
    else:
        return "Webhook ayarlanırken bir hata oluştu."

# Web sunucusunun çalıştığını kontrol etmek için basit bir ana sayfa
@app.route('/')
def index():
    return 'Kuyu Yönetim Botu Web Sunucusu Aktif!'