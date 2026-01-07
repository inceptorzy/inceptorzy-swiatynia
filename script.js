document.addEventListener('DOMContentLoaded', () => {
    // --- Dane Arsenału ---
    const manifesty = [
        { obraz: 'https://i.imgur.com/Qk7cQUc.png', tytul: 'Twoja otyłość nie jest chorobą. Jest zbroją.', tresc: `(Wklej tu pełny manifest o zbroi...)` },
        { obraz: 'https://i.imgur.com/gYfAP8c.png', tytul: 'Nie pijesz alkoholu. To on pije CIEBIE.', tresc: `(Wklej tu pełny manifest o alkoholu...)` },
        { obraz: 'https://i.imgur.com/z4bY4jS.png', tytul: `Cukrzyca nie jest chorobą, którą 'łapiesz'. Jest zdradą.`, tresc: `(Wklej tu pełny manifest o cukrzycy...)` }
    ];

    // --- Elementy DOM ---
    const przedsionek = document.getElementById('przedsionek');
    const galeria = document.querySelector('.galeria-sygnetow');
    const modal = document.getElementById('kodeks-modal');
    const modalImage = document.getElementById('kodeks-image');
    const modalTitle = document.getElementById('kodeks-title');
    const modalText = document.getElementById('kodeks-text');
    const closeModal = document.getElementById('kodeks-close');

    // --- FUNKCJA GŁÓWNA ---
    function inicjalizuj() {
        // 1. Buduj Przedsionek
        przedsionek.innerHTML = `
            <div id="logo-container">
                <assets/images/logo.png" alt="Sztandar Inceptorów">
            </div>
            <div id="kredo-container">
                <p>TWOJE CIAŁO TO POLE BITWY. WALCZYMY RAZEM.</p>
                <br>
                <p>DEKONSTRUUJEMY KŁAMSTWA. KUJEMY BROŃ. TWORZYMY LEGION.</p>
                <br>
                <p>BRAMA ZOSTANIE OTWARTA.</p>
            </div>
            <div id="scroll-arrow">↓</div>
        `;

        // 2. Buduj Zbrojownię
        galeria.innerHTML = '';
        manifesty.forEach(manifest => {
            const sygnet = document.createElement('div');
            sygnet.className = 'sygnet';
            sygnet.style.backgroundImage = `url(${manifest.obraz})`;
            const tytul = document.createElement('h3');
            tytul.textContent = manifest.tytul;
            sygnet.appendChild(tytul);
            
            sygnet.addEventListener('click', () => otworzModal(manifest));
            galeria.appendChild(sygnet);
        });
    }

    // --- Funkcje Pomocnicze ---
    function otworzModal(manifest) {
        modalImage.src = manifest.obraz;
        modalTitle.textContent = manifest.tytul;
        modalText.innerText = manifest.tresc;
        modal.classList.add('modal-visible');
    }

    function zamknijModal() {
        modal.classList.remove('modal-visible');
    }

    // --- Listenery ---
    closeModal.addEventListener('click', zamknijModal);
    modal.addEventListener('click', e => { if (e.target === modal) zamknijModal(); });
    document.addEventListener('keydown', e => { if (e.key === "Escape") zamknijModal(); });

    // --- Uruchomienie ---
    inicjalizuj();
});