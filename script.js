document.addEventListener('DOMContentLoaded', () => {

    // --- ARSENAŁ: BAZA DANYCH MANIFESTÓW ---
    const arsenalData = [
        {
            obraz: 'assets/images/sila-woli.PNG',
            tytul: 'TWOJA SIŁA WOLI NIE ISTNIEJE.',
            tresc: `Mówią CI:
\n\n
'Weź się w garść.'
'Miej więcej dyscypliny.'
'Wszystko jest w twojej głowie.'
\n\n
Kłamią.
\n\n
Próbujesz kontrolować biochemiczny sztorm za pomocą myśli.
To jak próba zatrzymania huraganu krzykiem.
\n\n
Twoje ciało nie słucha TWOJEJ woli, bo jest zaprogramowane przez wroga:
Cukier. Stan zapalny. Bezruch.
\n\n
Chcesz odzyskać kontrolę?
\n\n
Przestań walczyć ze SOBĄ.
Zacznij walczyć z wrogiem, którego wpuściłeś do świątyni.`
        },
        {
            obraz: 'assets/images/plynny-zlodziej.png',
            tytul: 'Nie pijesz alkoholu. To on pije CIEBIE.',
            tresc: `Mówią: 'relaks', 'nagroda', 'tradycja'. Podają ci złoty płyn w kieliszku i mówią, że to symbol siły i wolności. A ty w to wierzysz.\n\nObudź się. Ten płyn to kastracja. To fitoestrogenowy rozpuszczalnik, który kawałek po kawałku kradnie twoją męskość, twoją energię, twoją wolę. Każdy łyk to transakcja, w której oddajesz cząstkę swojej duszy za iluzję chwilowej ulgi.\n\nOn nie sprzedaje ci relaksu. On sprzedaje tobie CIEBIE. Korporacyjnym bogom, którzy płacą mu za twoje zniewolenie. Następnym razem, gdy na niego spojrzysz, zobacz w nim złodzieja, który przyszedł okraść twoją świątynię.`
        },
        {
            obraz: 'assets/images/dopaminowa-smycz.jpg', // Zaktualizowana nazwa pliku
            tytul: 'Twoja wola jest na smyczy.',
            tresc: `Czujesz to. Ten swędzący kciuk. Ten nagły głód, żeby sprawdzić. Jeszcze jeden scroll. Jeszcze jedna nagroda. Myślisz, że to twój wybór.\n\nA oni się śmieją. Bo dałeś sobie wpiąć biochemiczną smycz. Każdy lajk, każdy obraz to mikroskopijny strzał dopaminy prosto w twój mózg. Zaprojektowali system, który celowo wypala twoje receptory, by prawdziwe życie stało się szare i pozbawione smaku.\n\nZmienili cię w cyfrowego psa Pawłowa, który ślini się na dźwięk powiadomienia. Twoja wola nie została złamana. Została wytresowana, by pragnąć swojej klatki. Odetnij smycz.`
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