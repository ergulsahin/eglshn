document.addEventListener('DOMContentLoaded', () => {
    // Telegram Web App nesnesini başlat
    const tg = window.Telegram.WebApp;
    tg.ready(); // Uygulamanın hazır olduğunu Telegram'a bildir
    tg.expand(); // Uygulamayı tam boyuta genişlet

    const infoText = document.getElementById('info-text');
    const totalWellsEl = document.getElementById('total-wells');
    const completedWellsEl = document.getElementById('completed-wells');
    const ongoingWellsEl = document.getElementById('ongoing-wells');
    const wellListEl = document.getElementById('well-list');
    const searchInput = document.getElementById('search-input');

    // --- GERÇEK VERİLER GELENE KADAR KULLANILACAK SAHTE VERİ ---
    // Bir sonraki adımda bu bölümü bot'tan gelen gerçek verilerle değiştireceğiz.
    const dummyData = [
        { kuyu_id: 1, kuyu_adi: "Gültepe-1", mahalle: "Gültepe", durum: "Tamamlandı" },
        { kuyu_id: 2, kuyu_adi: "Yıldız-3", mahalle: "Yıldız", durum: "Devam Ediyor" },
        { kuyu_id: 3, kuyu_adi: "Merkez Park", mahalle: "Cumhuriyet", durum: "Tamamlandı" },
        { kuyu_id: 4, kuyu_adi: "Sanayi Bölgesi-2", mahalle: "Sanayi", durum: "Devam Ediyor" },
        { kuyu_id: 5, kuyu_adi: "Okul Bahçesi", mahalle: "Eğitim", durum: "Tamamlandı" },
    ];
    // --- SAHTE VERİ SONU ---

    // Bu fonksiyon, gelen kuyu verilerini ekrana çizer
    function renderData(data) {
        // İstatistikleri güncelle
        const total = data.length;
        const completed = data.filter(w => w.durum === 'Tamamlandı').length;
        const ongoing = total - completed;

        totalWellsEl.textContent = total;
        completedWellsEl.textContent = completed;
        ongoingWellsEl.textContent = ongoing;

        // Kuyu listesini temizle ve yeniden oluştur
        wellListEl.innerHTML = '';
        if (data.length === 0) {
            wellListEl.innerHTML = '<p style="text-align:center; color: var(--tg-hint-color);">Sonuç bulunamadı.</p>';
            return;
        }

        data.forEach(well => {
            const card = document.createElement('div');
            card.className = 'well-card';
            // Duruma göre renk sınıfı ekle
            if (well.durum === 'Tamamlandı') {
                card.classList.add('completed');
            } else {
                card.classList.add('ongoing');
            }

            card.innerHTML = `
                <h4>${well.kuyu_adi}</h4>
                <div class="well-info">
                    <p><strong>Mahalle:</strong> ${well.mahalle}</p>
                    <p><strong>Durum:</strong> ${well.durum}</p>
                </div>
            `;
            wellListEl.appendChild(card);
        });
    }

    // Arama kutusuna her harf girildiğinde filtreleme yap
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredData = dummyData.filter(well =>
            well.kuyu_adi.toLowerCase().includes(searchTerm) ||
            well.mahalle.toLowerCase().includes(searchTerm)
        );
        renderData(filteredData);
    });
    
    // Uygulama ilk açıldığında verileri ekrana çiz
    infoText.textContent = `Toplam ${dummyData.length} kuyu bulundu.`;
    renderData(dummyData);
});