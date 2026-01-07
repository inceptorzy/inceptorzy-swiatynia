window.onload = function() {

    const manifesty = [
        {
            obraz: 'assets/images/manifest-1.png'
            tytul: 'Twoja siła woli nie istnieje.',
            tresc: `Mówią ci:

'Weź się w garść.'
'Miej więcej dyscypliny.'
'Wszystko jest w twojej głowie.'

Kłamią.

Próbujesz kontrolować biochemiczny sztorm za pomocą myśli. To jak próba zatrzymania huraganu krzykiem.

Twoje ciało nie słucha twojej woli, bo jest zaprogramowane przez wroga:
Cukier. Stan zapalny. Bezruch.

Chcesz odzyskać kontrolę?

Przestań walczyć ze sobą.
Zacznij walczyć z wrogiem, którego wpuściłeś do świątyni.`
        },
        {
            obraz: 'assets/images/manifest-7.png'
            tytul: 'Nie jesteś uzależniony od jedzenia. Jesteś niewolnikiem potwora, którego sam karmisz.',
            tresc: `Myślisz, że to 'ty' chcesz tego ciastka.
Myślisz, że to 'twoja' ochota na chipsy.

To iluzja.

W tobie, w mrocznych, zapomnianych katakumbach twoich jelit i twojego mózgu, żyje bestia. Stworzyłeś ją z cukru, przetworzonego jedzenia i lat złych nawyków. Wyhodowałeś ją. Uczyniłeś ją silną.

A teraz... to ona rządzi.

To nie jest głód. To jest jej ryk.
To nie jest zachcianka. To jest jej rozkaz.

Gdy czujesz ten nieodparty impuls, by sięgnąć po truciznę, to nie jesteś ty. To jest ona, twój Pan, która domaga się swojej ofiary.

A ty, posłuszny niewolnik, idziesz i ją karmisz. Z każdym kęsem, ona rośnie w siłę, a ty stajesz się słabszy.

To jest idealny cykl niewolnictwa.

Chcesz się wyzwolić? Musisz przestać z nią negocjować.
Musisz ją zagłodzić.
Musisz przetrwać jej agonalne krzyki.

Bo tylko wtedy, gdy ona umrze, ty wreszcie odzyskasz swój tron.`
        }
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
                if (modalImage) modalImage.src = manifest.obraz;
                if (modalTitle) modalTitle.textContent = manifest.tytul;
                if (modalText) modalText.innerText = manifest.tresc;
                
                if (modal) {
                    modal.classList.add('modal-visible');
                }
            });
            
            galeria.appendChild(sygnet);
        });
    }

    function zamknijModal() {
        if (modal) {
            modal.classList.remove('modal-visible');
        }
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