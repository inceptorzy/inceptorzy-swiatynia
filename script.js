document.addEventListener('DOMContentLoaded', () => {

    // --- ARSENAŁ: BAZA DANYCH MANIFESTÓW ---
    const arsenalData = [
         {
            obraz: 'assets/images/sila-woli.png',
            tytul: 'TWOJA SIŁA WOLI NIE ISTNIEJE.',
            tresc: `Mówią CI:\n\n'Weź się w garść.'
'Miej więcej dyscypliny.'
'Wszystko jest w twojej głowie.'.\n\nKłamią.\n\nPróbujesz kontrolować biochemiczny sztorm za pomocą myśli.
To jak próba zatrzymania huraganu krzykiem.\n\nTwoje ciało nie słucha TWOJEJ woli, bo jest zaprogramowane przez wroga:
Cukier. Stan zapalny. Bezruch.\n\nChcesz odzyskać kontrolę?\n\nPrzestań walczyć ze SOBĄ.
Zacznij walczyć z wrogiem, którego wpuściłeś do świątyni.`
        },
        {
            obraz: 'assets/images/pasozyt.png',
            tytul: 'NIE JESTEŚ UZALEŻNIONY OD JEDZENIA. JESTEŚ ŻYWICIELEM PASOŻYTA, KTÓREGO SAM HODUJESZ.',
            tresc: `Myślisz, że to 'TY' chcesz tego ciastka.
Myślisz, że to 'TWOJA' ochota na chipsy.\n\nTo iluzja.\n\nW TOBIE, w mrocznych, wilgotnych katakumbach twojego ciała, żyje pasożyt.
Stworzyłeś go z cukru, ultraprzetworzonego jedzenia i chemii.
Wykarmiłeś go swoją słabością.
Uczyniłeś go panem SWOJEGO wewnętrznego królestwa.\n\nA teraz... to on rządzi.\n\nTo nie jest głód. To jest jego żądanie.
To nie jest zachcianka. To jest jego rozkaz.\n\nGdy czujesz ten nieodparty impuls, by sięgnąć po truciznę, to nie jesteś TY. To jest pasożyt, który domaga się pożywienia. A TY jesteś jego żywicielem.\n\nI TY, posłuszny, idziesz i go karmisz. Z każdym kęsem, on rośnie w siłę, a TY stajesz się słabszy, bardziej zmęczony, bardziej zamglony.\n\nTo jest idealny cykl niewolnictwa.\n\nChcesz się wyzwolić?\n\nMusisz przestać z nim negocjować.
Musisz go zagłodzić.
Musisz przetrwać jego agonalne spazmy, gdy będzie umierał w TWOIM wnętrzu.\n\nBo tylko wtedy, gdy on zginie, TY wreszcie odzyskasz SWOJĄ świątynię.`
        },
        {
            obraz: 'assets/images/otylosc.png',
            tytul: 'TWOJA OTYŁOŚĆ NIE JEST CHOROBĄ. JEST ZBROJĄ.',
            tresc: `Mówią ci, że to genetyka.
Spowolniony metabolizm. Choroba.\n\nKłamią, byś na zawsze pozostał ich potulnym, płacącym pacjentem.\n\nPrawda jest prostsza. I znacznie bardziej brutalna.\n\nTa waga, którą dźwigasz, to nie jest tłuszcz.
To jest fizyczny zapis każdego TWOJEGO poddania się.
Każdego 'zacznę od jutra'.
Każdej chwili, w której wybrałeś iluzję komfortu zamiast ognia dyscypliny.\n\nZbudowałeś tę zbroję, kawałek po kawałku.
Ale teraz... ta zbroja CIĘ miażdży.
Dusi TWOJĄ energię.
Zmienia TWOJĄ świątynię w chodzący grobowiec.\n\nNie jesteś chory.
Jesteś więźniem w fortecy, którą sam zbudowałeś.\n\nKluczem nie jest kolejna dieta-cud.
Kluczem jest młot.\n\nPytanie brzmi: czy masz odwagę, by uderzyć?`
        }
    ];

    // --- SELEKTORY DOM: IDENTYFIKACJA POLA BITWY ---
    const preloader = document.getElementById('preloader');
    const body = document.body;
    const kredoContainer = document.getElementById('kredo-container');
    const scrollArrow = document.getElementById('scroll-arrow');
    const spotlight = document.querySelector('.spotlight');
    const galeria = document.querySelector('.galeria-manifestow');
    const modal = document.getElementById('kodeks-modal');
    const modalImage = document.getElementById('kodeks-image');
    const modalTitle = document.getElementById('kodeks-title');
    const modalText = document.getElementById('kodeks-text');
    const closeModal = document.getElementById('kodeks-close');

    // --- FUNKCJA GŁÓWNA: INICJALIZACJA PROTOKOŁU ---
    function inicjalizuj() {
        uruchomProtokolPrzeladowania();
        uruchomProtokolBramy();
        zbudujArsenal();
        uruchomNasluchiwacze();
    }

    // --- PROTOKOŁY CZĄSTKOWE ---
    function uruchomProtokolPrzeladowania() {
        window.addEventListener('load', () => {
            body.classList.add('loaded');
        });
    }

    function uruchomProtokolBramy() {
        const kredoLines = [
            "TWOJE CIAŁO TO POLE BITWY. WALCZYMY RAZEM.",
            "DEKONSTRUUJEMY KŁAMSTWA. KUJEMY BROŃ. TWORZYMY LEGION.",
            "BRAMA ZOSTAŁA OTWARTA."
        ];
        
        let totalDelay = 500; // Opóźnienie przed startem pisania
        setTimeout(() => { kredoContainer.style.opacity = 1; }, totalDelay - 250); // <<< DODAJ TĘ LINIĘ
        kredoLines.forEach((line, index) => {
            const p = document.createElement('p');
            p.className = 'kredo-line';
            kredoContainer.appendChild(p);
            setTimeout(() => typeWriter(p, line), totalDelay);
            totalDelay += (line.length * 50) + 1000; // Czas pisania + pauza
        });
        
        setTimeout(() => {
            scrollArrow.style.transition = 'opacity 2s ease-in-out';
            scrollArrow.style.opacity = 1;
        }, totalDelay);

        // Inicjalizacja Oka Architekta
        document.getElementById('brama-wejsciowa').addEventListener('mousemove', e => {
            requestAnimationFrame(() => {
                spotlight.style.transform = `translate(${e.clientX - (window.innerWidth / 2)}px, ${e.clientY - (window.innerHeight / 2)}px)`;
            });
        });
    }

    function zbudujArsenal() {
        galeria.innerHTML = '';
        arsenalData.forEach(manifestData => {
            const manifest = document.createElement('div');
            manifest.className = 'manifest';
            manifest.style.backgroundImage = `url(${manifestData.obraz})`;
            const tytul = document.createElement('h3');
            tytul.textContent = manifestData.tytul;
            manifest.appendChild(tytul);
            
            manifest.addEventListener('click', () => otworzModal(manifestData));
            galeria.appendChild(manifest);
        });
    }

    function uruchomNasluchiwacze() {
        closeModal.addEventListener('click', zamknijModal);
        modal.addEventListener('click', e => { if (e.target === modal) zamknijModal(); });
        document.addEventListener('keydown', e => { if (e.key === "Escape") zamknijModal(); });
    }

    // --- FUNKCJE POMOCNICZE ---
    function typeWriter(element, text, i = 0) {
        if (i === 0) {
            element.innerHTML = ''; // Czyść na starcie
        }
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(element, text, i + 1), 50);
        } else {
            const cursor = document.createElement('span');
            cursor.className = 'cursor';
            element.appendChild(cursor);
        }
    }

    function otworzModal(manifestData) {
        modalImage.src = manifestData.obraz;
        modalTitle.textContent = manifestData.tytul;
        modalText.innerText = manifestData.tresc;
        modal.classList.add('modal-visible');
        body.style.overflow = 'hidden'; // Zablokuj scrollowanie tła
    }

    function zamknijModal() {
        modal.classList.remove('modal-visible');
        body.style.overflow = ''; // Odblokuj scrollowanie
    }

    // --- URUCHOMIENIE ---
    inicjalizuj();
});