// Czekaj, aż cała strona się załaduje
window.onload = function() {

const drone = document.getElementById('background-drone');
let dronePlayed = false;

document.body.addEventListener('click', () => {
    if (!dronePlayed) {
        drone.volume = 0.1;
        drone.play();
        dronePlayed = true;
    }
}, { once: true });

    // --- DANE DLA ZBROJOWNI: PEŁNY MAGAZYNEK ---
    const manifesty = [
        {
            obraz: 'https://i.imgur.com/bYaljIc.png', // Zbroja Wstydu
            tytul: 'Twoja otyłość nie jest chorobą. Jest zbroją.',
            tresc: `Mówią ci, że to genetyka. Spowolniony metabolizm. Choroba. Kłamią, byś na zawsze pozostał ich potulnym, płacącym pacjentem.

Prawda jest prostsza. I znacznie bardziej brutalna.

Ta waga, którą dźwigasz, to nie jest tłuszcz. To jest fizyczny zapis każdego twojego poddania się. Każdego 'zacznę od jutra'. Każdego kęsa zjedzonego z nudów, a nie z głodu. Każdej chwili, w której wybrałeś iluzję komfortu zamiast ognia dyscypliny.

Zbudowałeś tę zbroję, kawałek po kawałku, by chroniła cię przed trudnymi emocjami, przed światem, przed lustrem.

Ale teraz... ta zbroja cię miażdży. Dusi twoją energię. Ogranicza twój świat do rozmiarów więziennej celi. Zmienia twoje ciało, twoją świątynię, w chodzący grobowiec.

Nie jesteś chory. Jesteś więźniem w fortecy, którą sam zbudowałeś.

Kluczem nie jest kolejna dieta-cud. Kluczem jest młot.

Pytanie brzmi: czy masz odwagę, by uderzyć?`
        },
        {
            obraz: 'https://i.imgur.com/o0llYdW.png', // Płynny Złodziej
            tytul: 'Nie pijesz alkoholu. To on pije CIEBIE.',
            tresc: `Mówisz: 'muszę się zrelaksować'. 'To był ciężki tydzień'. 'Jeden drink dla kurażu'.

I sięgasz po butelkę. Sięgasz po swojego najbardziej cierpliwego, najbardziej podstępnego wroga.

Myślisz, że to ty kontrolujesz. Że to tylko narzędzie. Że to ty decydujesz. To jest jego pierwsze, największe kłamstwo.

Z każdym łykiem, on nie daje ci niczego. On kradnie.

Kradnie twój sen.
Kradnie twoją wolę.
Kradnie twoją jasność.
Kradnie twój czas.

Nie jesteś 'duszą towarzystwa'. Jesteś dobrowolną ofiarą. Bierzesz udział w masowym, społecznym rytuale osłabiania najsilniejszych.

Przestań karmić złodzieja, który okrada cię z twojego własnego życia. Prawdziwa odwaga nie leży na dnie butelki. Leży w odstawieniu jej na zawsze.`
        },
        {
            obraz: 'https://imgur.com/MysmX9E.png', // Słodka Zdrada
            tytul: `Cukrzyca nie jest chorobą, którą 'łapiesz'. Jest zdradą.`,
            tresc: `Twój lekarz spojrzy ci w oczy ze współczuciem i powie: 'Przykro mi, ma pan cukrzycę'. Poda ci receptę. Powie, że to na całe życie. Uczyni cię dożywotnim klientem.

On nie jest twoim zbawcą. Jest dealerem, który właśnie uzależnił cię od swojego najczystszego produktu.

Posłuchaj prawdy, której on ci nie powie: Twoje ciało cię nie zdradziło. To ty zdradziłeś je.

Przez lata, z każdym słodkim napojem, z każdą białą bułką, z każdym deserem, prowadziłeś wojnę z własnymi komórkami. Zmuszałeś je, by pływały w toksycznym oceanie cukru. One krzyczały. Buntowały się. Aż w końcu, pewnego dnia, miały dość.

Zamknęły swoje bramy. Stały się głuche na twoje własne hormony. To nie jest 'insulinooporność'. To jest ostatni, desperacki akt samoobrony twoich komórek przed tobą.

Cukrzyca to nie jest choroba. To jest stan oblężenia. A lekarstwo, które ci dają, nie burzy murów. Ono tylko podnosi poziom toksycznego oceanu na zewnątrz.

Chcesz się wyleczyć? Musisz przestać być najeźdźcą. Musisz zawrzeć pokój z własnym ciałem. A pierwszy artykuł tego traktatu brzmi: koniec bombardowania cukrem.`
        }
    ];

    // --- SELEKCJA ELEMENTÓW ---
    const galeria = document.querySelector('.galeria-sygnetow');
    const modal = document.getElementById('kodeks-modal');
    const modalImage = document.getElementById('kodeks-image');
    const modalTitle = document.getElementById('kodeks-title');
    const modalText = document.getElementById('kodeks-text');
    const closeModal = document.getElementById('kodeks-close');

    // --- LOGIKA PROGRAMU ---

    // 1. WYPEŁNIJ ZBROJOWNIĘ
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
                    modal.classList.remove('modal-hidden');
                    modal.classList.add('modal-visible');
                }
            });
            
            galeria.appendChild(sygnet);
        });
    }

    // 2. FUNKCJA ZAMYKANIA MODALA
    function zamknijModal() {
        if (modal) {
            modal.classList.remove('modal-visible');
        }
    }

    // 3. LISTENERY DLA ZAMYKANIA MODALA
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
    