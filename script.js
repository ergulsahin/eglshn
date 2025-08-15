document.addEventListener('DOMContentLoaded', () => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    // BU BÖLÜMÜ /get_dashboard_data KOMUTU İLE GELEN VERİYLE GÜNCELLEYİN
    const kuyuVerisi = [
        // Örnek veri. Bot'tan gelen JSON içeriği buraya yapıştırılacak.
        // Eğer bu dizi boş bırakılırsa, pano "Veri Yok" mesajı gösterecektir.
        // { "kuyu_no": "1", "proje_metraji": 6.0, "tarih": "-", "foraj": "-", "alinan_foraj": 0, "durum": "Yapılmadı" },
        // { "kuyu_no": "2", "proje_metraji": 6.0, "tarih": "14.08.2025", "foraj": "6", "alinan_foraj": 6, "durum": "Tam" }
    ];

    // --- HTML Elementlerini Seçme ---
    // Mevcut kartlar
    const totalWellsEl = document.getElementById('total-wells');
    const completedWellsEl = document.getElementById('completed-wells');
    const remainingWellsEl = document.getElementById('remaining-wells'); // 'ongoing-wells' yerine
    // Yeni eklenen kartlar
    const totalDrilledMeterageEl = document.getElementById('total-drilled-meterage');
    const remainingMeterageEl = document.getElementById('remaining-meterage');
    
    const tableBodyEl = document.getElementById('well-table-body');
    const searchInput = document.getElementById('search-input');
    
    const modal = document.getElementById('add-well-modal');
    const addWellBtn = document.getElementById('add-well-btn');
    const closeModalBtn = document.querySelector('.close-btn');
    const addWellForm = document.getElementById('add-well-form');
    const durumSelect = document.getElementById('durum');
    const alinanForajGroup = document.getElementById('alinan-foraj-group');
    const refreshBtn = document.getElementById('refresh-btn');

    
    /**
     * Panodaki tüm istatistik kartlarını güncelleyen ana fonksiyon.
     * @param {Array} data - Tüm kuyu verilerini içeren dizi.
     */
    function updateStats(data) {
        // --- TEMEL HESAPLAMALAR ---
        const total = data.length;
        const completed = data.filter(w => w.durum === 'Tam').length;
        const incomplete = data.filter(w => w.durum === 'Eksik').length;
        // Kalan kuyu sayısı = Toplam - (Tamamlanan + Eksik olanlar)
        const remaining = total - (completed + incomplete);

        // --- YENİ METRAJ HESAPLAMALARI ---

        // 1. Projedeki tüm kuyuların proje metrajlarının toplamı
        const projeMetrajToplami = data.reduce((sum, well) => sum + (well.proje_metraji || 0), 0);
        
        // 2. Sadece yapılmış (Tam veya Eksik) kuyuların alınan forajlarının toplamı
        const yapilanMetrajToplami = data
            .filter(w => w.durum === 'Tam' || w.durum === 'Eksik')
            .reduce((sum, well) => sum + (well.alinan_foraj || 0), 0);

        // 3. Kalan metraj
        const kalanMetraj = projeMetrajToplami - yapilanMetrajToplami;

        // --- KARTLARI GÜNCELLEME ---
        totalWellsEl.textContent = total;
        completedWellsEl.textContent = completed;
        remainingWellsEl.textContent = remaining;
        // toFixed(1) ile virgülden sonra 1 basamak gösteriyoruz
        totalDrilledMeterageEl.textContent = `${yapilanMetrajToplami.toFixed(1)}m`;
        remainingMeterageEl.textContent = `${kalanMetraj.toFixed(1)}m`;
    }


    /**
     * Gelen veriye göre tabloyu oluşturan ve istatistikleri güncelleyen fonksiyon.
     * @param {Array} data - Tabloda gösterilecek kuyu verileri.
     */
    function renderTable(data) {
        // İstatistikler her zaman tüm veritabanı üzerinden hesaplanır, filtrelenmiş veriden değil.
        updateStats(kuyuVerisi);

        tableBodyEl.innerHTML = '';
        if (data.length === 0) {
            tableBodyEl.innerHTML = '<tr><td colspan="7" style="text-align:center;">Sonuç bulunamadı.</td></tr>';
            return;
        }

        data.forEach(well => {
            let statusClass = '';
            if (well.durum === 'Tam') statusClass = 'status-tam';
            else if (well.durum === 'Eksik') statusClass = 'status-eksik';
            else statusClass = 'status-yapilmadi';

            const row = document.createElement('tr');
            row.id = `well-row-${well.kuyu_no}`;

            let actionButtonsHtml = '';
            if (well.durum !== 'Yapılmadı') {
                actionButtonsHtml = `<button class="action-btn delete-btn" data-kuyu-no="${well.kuyu_no}">Sil</button>`;
            }

            row.innerHTML = `
                <td>${well.tarih}</td>
                <td>${well.kuyu_no}</td>
                <td>${well.proje_metraji}m</td>
                <td>${well.foraj}</td>
                <td>${well.alinan_foraj}m</td>
                <td><span class="status ${statusClass}">${well.durum}</span></td>
                <td>${actionButtonsHtml}</td>
            `;
            tableBodyEl.appendChild(row);
        });
    }

    // --- EVENT LISTENERS (OLAY DİNLEYİCİLER) ---
    addWellBtn.addEventListener('click', () => {
        addWellForm.reset();
        alinanForajGroup.style.display = 'none';
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    durumSelect.addEventListener('change', () => {
        alinanForajGroup.style.display = durumSelect.value === 'Eksik' ? 'block' : 'none';
    });
    
    refreshBtn.addEventListener('click', () => {
        tg.sendData("refresh_prompt:1");
        tg.close();
    });

    addWellForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(addWellForm);
        const wellData = {
            kuyu_no: formData.get('kuyu_no'),
            tarih: formData.get('tarih'),
            foraj: formData.get('foraj'),
            durum: formData.get('durum'),
            alinan_foraj: formData.get('alinan_foraj') || formData.get('foraj')
        };
        
        if (!wellData.kuyu_no || !wellData.tarih || !wellData.foraj) {
            alert("Lütfen tüm zorunlu alanları doldurun.");
            return;
        }

        const command = `add_well:${JSON.stringify(wellData)}`;
        tg.sendData(command);
        
        modal.style.display = 'none';
        alert('Kuyu ekleme talebi bota gönderildi. Panoyu en güncel haliyle görmek için "Veriyi Yenile" butonunu kullanmayı unutmayın.');
    });

    tableBodyEl.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('delete-btn')) {
            const kuyuNo = event.target.getAttribute('data-kuyu-no');
            
            if (confirm(`'${kuyuNo}' numaralı kuyu kaydını silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.`)) {
                const command = `delete_well:${kuyuNo}`;
                tg.sendData(command);

                const rowToRemove = document.getElementById(`well-row-${kuyuNo}`);
                if (rowToRemove) {
                    rowToRemove.style.opacity = '0.5';
                    setTimeout(() => {
                        // Not: Bu satır artık tabloyu yeniden render etmeyecek, sadece satırı silecek.
                        // Tam güncelleme için "Veriyi Yenile" kullanılmalı.
                        rowToRemove.remove(); 
                        alert('Kuyu silme talebi bota gönderildi. Değişikliğin kalıcı olması için "Veriyi Yenile" butonunu kullanmayı unutmayın.');
                    }, 300);
                }
            }
        }
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredData = kuyuVerisi.filter(well =>
            well.kuyu_no.toLowerCase().includes(searchTerm)
        );
        // Arama yapıldığında sadece tablo güncellenir, üstteki istatistikler sabit kalır.
        renderTable(filteredData);
    });
    
    // --- İLK YÜKLEME ---
    if (kuyuVerisi && kuyuVerisi.length > 0) {
         renderTable(kuyuVerisi);
    } else {
        totalWellsEl.textContent = 0;
        completedWellsEl.textContent = 0;
        remainingWellsEl.textContent = 0;
        totalDrilledMeterageEl.textContent = '0m';
        remainingMeterageEl.textContent = '0m';
        tableBodyEl.innerHTML = '<tr><td colspan="7" style="text-align:center;">Pano boş. Lütfen bottan veri alıp bu dosyaya yapıştırın.</td></tr>';
    }
});
