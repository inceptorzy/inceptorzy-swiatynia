document.addEventListener('DOMContentLoaded', () => {

    const manifesty = [
        {
            obraz: 'https://i.imgur.com/Qk7cQUc.png',
            tytul: 'Twoja otyłość nie jest chorobą. Jest zbroją.',
            tresc: `Mówią ci, że to genetyka...` // Wklej tu pełne manifesty
        },
        // ... więcej manifestów
    ];

    const galeria = document.querySelector('.galeria-sygnetow');
    const modal = document.getElementById('kodeks-modal');
    const modalImage = document.getElementById('kodeks-image');
    const modalTitle = document.getElementById('kodeks-title');
    const modalText = document.getElementById('kodeks-text');
    const closeModal = document.getElementById('kodeks-close');

    if (galeria) {
        galeria.innerHTML = '';
        manifesty.forEach(manifest => {
            const sygnet = document.createElement('div');
            sygnet.className = 'sygnet';
            sygnet.style.backgroundImage = `url(${manifest.obraz})`;
            
            const tytul = document.createElement('h3');
            tytul.textContent = manifest.tytul;
            sygnet.appendChild(tytul);

            sygnet.addEventListener('click', () => {
                modalImage.src = manifest.obraz;
                modalTitle.textContent = manifest.tytul;
                modalText.innerText = manifest.tresc;
                
                modal.classList.add('modal-visible');
});
            
            galeria.appendChild(sygnet);
        });
    }

    function zamknijModal() {
        modal.classList.remove('modal-visible');
    }

    if (closeModal) closeModal.addEventListener('click', zamknijModal);
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                zamknijModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal && modal.classList.contains('modal-visible')) {
            zamknijModal();
        }
    });
});