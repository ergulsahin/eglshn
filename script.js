document.addEventListener('DOMContentLoaded', async () => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    // ======================== ÖNEMLİ DEĞİŞİKLİK ========================
    // Python botunuzu çalıştırdığınız sunucunun/bilgisayarın
    // DIŞARIYA AÇIK IP adresini veya alan adını buraya yazın.
    // Eğer botu yerel bilgisayarınızda test ediyorsanız ve telefonunuz aynı ağdaysa,
    // bilgisayarınızın yerel IP adresini (örn: 192.168.1.35) kullanabilirsiniz.
    // Ancak en doğru yöntem, botu bir sunucuya yüklemektir.
    const API_URL = 'http://SUNUCUNUZUN_IP_ADRESI_VEYA_ALAN_ADI:5000/api/get_kuyular';
    // ====================================================================

    // Bu büyük statik veri dizisini artık siliyoruz. Veriler API'den gelecek.
    let kuyuVerisi = []; 

    // --- HTML Elementlerini Seçme (Değişiklik yok) ---
    const totalWellsEl = document.getElementById('total-wells');
    const completedWellsEl = document.getElementById('completed-wells');
    const remainingWellsEl = document.getElementById('remaining-wells');
    const totalProjectMeterageEl = document.getElementById('total-project-meterage');
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
     * Sunucudan anlık olarak verileri çeken ve panoyu güncelleyen ana fonksiyon.
     */
    async function fetchDataAndRender() {
        // Yükleme animasyonu veya mesajı gösterilebilir
        tableBodyEl.innerHTML = '<tr><td colspan="7" style="text-align:center;">Veriler yükleniyor...</td></tr>';
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Sunucuya bağlanılamadı. Hata Kodu: ${response.status}`);
            }
            kuyuVerisi = await response.json(); // Gelen JSON verisini işle
            
            if (!Array.isArray(kuyuVerisi)) {
                 throw new Error("Sunucudan gelen veri formatı bozuk.");
            }

            renderTable(kuyuVerisi);
            updateStats(kuyuVerisi);
        } catch (error) {
            console.error("Veri çekme hatası:", error);
            tableBodyEl.innerHTML = `<tr><td colspan="7" style="text-align:center; color: red;">Hata: ${error.message}</td></tr>`;
        }
    }

    /**
     * Panodaki tüm istatistik kartlarını güncelleyen fonksiyon. (Değişiklik yok)
     */
    function updateStats(data) {
        // ... bu fonksiyonun içeriği aynı kalıyor ...
    }

    /**
     * Gelen veriye göre tabloyu oluşturan fonksiyon. (Değişiklik yok)
     */
    function renderTable(data) {
        // ... bu fonksiyonun içeriği aynı kalıyor ...
    }
    
    // --- EVENT LISTENERS (OLAY DİNLEYİCİLER) ---

    // 'Veriyi Yenile' butonu artık panoyu kapatmak yerine veriyi yeniden çekecek.
    refreshBtn.addEventListener('click', fetchDataAndRender);

    addWellForm.addEventListener('submit', (event) => {
        // ... bu fonksiyonun içeriği aynı kalıyor, sadece işlem sonrası alert mesajını değiştirebiliriz...
        event.preventDefault();
        //... form doğrulama kodlarınız ...
        
        // Veri gönderildikten sonra panonun hemen güncellenmesi için küçük bir gecikme sonrası veri çekme fonksiyonunu çağırabiliriz.
        setTimeout(() => {
            fetchDataAndRender();
        }, 1500); // 1.5 saniye sonra veriyi yenile (veritabanının güncellenmesi için zaman tanır)

        modal.style.display = 'none';
        alert('Kuyu ekleme talebi bota gönderildi. Pano kısa süre içinde güncellenecektir.');
    });

    tableBodyEl.addEventListener('click', function(event) {
        // ... bu fonksiyonun içeriği aynı kalıyor, sadece işlem sonrası alert mesajını değiştirebiliriz...
        if (event.target && event.target.classList.contains('delete-btn')) {
            const kuyuNo = event.target.getAttribute('data-kuyu-no');
            if (confirm(`'${kuyuNo}' numaralı kuyu kaydını silmek istediğinizden emin misiniz?`)) {
                const command = `delete_well:${kuyuNo}`;
                tg.sendData(command);

                // Arayüzden anında kaldırma ve gecikmeli yenileme
                document.getElementById(`well-row-${kuyuNo}`).remove();
                setTimeout(() => {
                    fetchDataAndRender();
                }, 1500);
            }
        }
    });

    // ... diğer tüm event listener'larınız (modal kapatma, arama vb.) olduğu gibi kalacak ...

    // --- İLK YÜKLEME ---
    // Pano ilk açıldığında veriyi sunucudan çekiyoruz.
    fetchDataAndRender();
});
