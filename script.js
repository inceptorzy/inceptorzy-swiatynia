document.addEventListener('DOMContentLoaded', () => {

    // --- Dane Arsenału ---
    const manifesty = [
        { obraz: 'assets/images/zbroja-wstydu.jpg', tytul: 'Twoja otyłość nie jest chorobą. Jest zbroją.', tresc: `(Pełny tekst manifestu...)` },
        { obraz: 'assets/images/plynny-zlodziej.jpg', tytul: 'Nie pijesz alkoholu. To on pije CIEBIE.', tresc: `(Pełny tekst manifestu...)` },
        { obraz: 'assets/images/slodka-zdrada.jpg', tytul: `Cukrzyca nie jest chorobą, którą 'łapiesz'. Jest zdradą.`, tresc: `(Pełny tekst manifestu...)` }
    ];

    // --- Elementy DOM ---
    const kredo = document.getElementById('kredo-container');
    const strzalka = document.getElementById('scroll-arrow');
    const galeria = document.querySelector('.galeria-sygnetow');
    const modal = document.getElementById('kodeks-modal');
    // ... (reszta selektorów modala, tak jak były)
    const modalImage = document.getElementById('kodeks-image');
    const modalTitle = document.getElementById('kodeks-title');
    const modalText = document.getElementById('kodeks-text');
    const closeModal = document.getElementById('kodeks-close');
    
    // --- FUNKCJA GŁÓWNA ---
    function inicjalizuj() {
        
        // 1. UKRYJ ELEMENTY PRZEDSIONKA NA STARCIE
        kredo.style.opacity = 0;
        strzalka.style.opacity = 0;
        
        // 2. ODSŁOŃ JE Z OPÓŹNIENIEM
        setTimeout(() => {
            kredo.style.transition = 'opacity 2s ease-in-out';
            strzalka.style.transition = 'opacity 2s ease-in-out';
            kredo.style.opacity = 1;
            strzalka.style.opacity = 1;
        }, 3000);

        // 3. BUDUJ ZBROJOWNIĘ
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

    // --- Reszta kodu (funkcje modala) pozostaje bez zmian ---
    function otworzModal(manifest) {
        modalImage.src = manifest.obraz;
        modalTitle.textContent = manifest.tytul;
        modalText.innerText = manifest.tresc;
        modal.classList.add('modal-visible');
    }

    function zamknijModal() {
        modal.classList.remove('modal-visible');
    }

    closeModal.addEventListener('click', zamknijModal);
    modal.addEventListener('click', e => { if (e.target === modal) zamknijModal(); });
    document.addEventListener('keydown', e => { if (e.key === "Escape") zamknijModal(); });

    // --- Uruchomienie ---
    inicjalizuj();
});