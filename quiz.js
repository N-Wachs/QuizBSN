// Quiz Questions Database
const quizQuestions = [
    // PAN, LAN, MAN, WAN
    {
        topic: "netzwerktypen",
        question: "Was ist ein PAN (Personal Area Network)?",
        answers: [
            "Ein Netzwerk, das Geräte in unmittelbarer Nähe einer Person verbindet (z.B. Bluetooth zwischen Smartphone und Kopfhörer)",
            "Ein Netzwerk, das mehrere Gebäude innerhalb einer Stadt verbindet",
            "Ein weltweites Netzwerk für internationale Verbindungen",
            "Ein Netzwerk innerhalb eines Bürogebäudes"
        ],
        correct: 0,
        explanation: "Ein PAN verbindet Geräte in unmittelbarer persönlicher Nähe, typischerweise im Umkreis von wenigen Metern."
    },
    {
        topic: "netzwerktypen",
        question: "Welche Aussage über ein LAN (Local Area Network) ist korrekt?",
        answers: [
            "Ein LAN erstreckt sich über mehrere Städte",
            "Ein LAN ist auf ein begrenztes geografisches Gebiet beschränkt, wie ein Gebäude oder Campus",
            "Ein LAN verwendet nur Funkverbindungen",
            "Ein LAN kann keine Server enthalten"
        ],
        correct: 1,
        explanation: "Ein LAN ist ein lokales Netzwerk, das sich typischerweise auf ein Gebäude oder einen Campus beschränkt."
    },
    {
        topic: "netzwerktypen",
        question: "Was ist der Hauptunterschied zwischen MAN und WAN?",
        answers: [
            "MAN ist ein städtisches Netzwerk, WAN verbindet geografisch weit entfernte Standorte",
            "MAN ist drahtlos, WAN ist kabelgebunden",
            "MAN ist schneller als WAN",
            "MAN und WAN sind identisch"
        ],
        correct: 0,
        explanation: "MAN (Metropolitan Area Network) erstreckt sich über eine Stadt, während WAN (Wide Area Network) geografisch weit entfernte Standorte verbindet."
    },
    {
        topic: "netzwerktypen",
        question: "Welcher Vorteil ergibt sich durch Netzwerke?",
        answers: [
            "Höhere Hardwarekosten",
            "Gemeinsame Nutzung von Ressourcen (Drucker, Dateien, Internetverbindung)",
            "Komplexere Installation",
            "Geringere Datensicherheit"
        ],
        correct: 1,
        explanation: "Netzwerke ermöglichen die gemeinsame Nutzung von Ressourcen, was Kosten spart und die Effizienz erhöht."
    },
    {
        topic: "netzwerktypen",
        question: "Was ist eine Gefahr/Nachteil von Netzwerken?",
        answers: [
            "Bessere Kommunikation zwischen Mitarbeitern",
            "Sicherheitsrisiken durch Hackerangriffe und Malware-Verbreitung",
            "Einfachere Datenverwaltung",
            "Kostenersparnis"
        ],
        correct: 1,
        explanation: "Netzwerke erhöhen das Sicherheitsrisiko, da Angriffe sich schnell verbreiten können und mehrere Geräte betreffen."
    },

    // Übertragungsmedien
    {
        topic: "kabel",
        question: "Was versteht man unter einem Übertragungsmedium?",
        answers: [
            "Ein physikalisches oder drahtloses Medium zur Übertragung von Daten",
            "Nur Kupferkabel",
            "Software zur Datenübertragung",
            "Ein Netzwerkprotokoll"
        ],
        correct: 0,
        explanation: "Übertragungsmedien sind physikalische (Kabel) oder drahtlose (Funk) Medien, über die Daten übertragen werden."
    },
    {
        topic: "kabel",
        question: "Welches Übertragungsmedium bietet die höchste Übertragungsrate?",
        answers: [
            "Koaxialkabel",
            "Twisted-Pair-Kabel (TP)",
            "Lichtwellenleiter (LWL/Glasfaser)",
            "WLAN"
        ],
        correct: 2,
        explanation: "Glasfaser/LWL bietet die höchsten Übertragungsraten und ist zudem unempfindlich gegen elektromagnetische Störungen."
    },

    // TP-Kabel
    {
        topic: "kabel",
        question: "Was bedeutet die Bezeichnung S/UTP bei einem TP-Kabel?",
        answers: [
            "Schirm um das gesamte Kabel, einzelne Adernpaare ungeschirmt",
            "Alle Adernpaare einzeln geschirmt",
            "Komplett ungeschirmt",
            "Nur ein Adernpaar geschirmt"
        ],
        correct: 0,
        explanation: "S/UTP bedeutet: S (Screened) = Gesamtschirm um alle Adernpaare, UTP (Unshielded Twisted Pair) = einzelne Paare ungeschirmt."
    },
    {
        topic: "kabel",
        question: "Was ist der Unterschied zwischen Massivleiter und Litze?",
        answers: [
            "Massivleiter besteht aus einem durchgehenden Draht und wird für feste Verlegung verwendet, Litze aus mehreren dünnen Drähten für flexible Anwendungen",
            "Massivleiter ist flexibler als Litze",
            "Litze wird nur für Gebäudeverlegung verwendet",
            "Es gibt keinen Unterschied"
        ],
        correct: 0,
        explanation: "Massivleiter eignet sich für feste Installation (z.B. in Wänden), Litze für flexible Anwendungen (z.B. Patchkabel)."
    },
    {
        topic: "kabel",
        question: "Welche CAT-Kategorie sollte man heutzutage mindestens für neue Installationen verwenden?",
        answers: [
            "CAT5",
            "CAT5e",
            "CAT6 oder höher",
            "CAT3"
        ],
        correct: 2,
        explanation: "Für neue Installationen sollte mindestens CAT6 verwendet werden, um zukunftssicher zu sein und höhere Bandbreiten zu unterstützen."
    },
    {
        topic: "kabel",
        question: "Was ist der Unterschied zwischen einem Straight-Through und einem Cross-Over Kabel?",
        answers: [
            "Straight-Through für gleichartige Geräte, Cross-Over für unterschiedliche Geräte",
            "Straight-Through für unterschiedliche Geräte (PC-Switch), Cross-Over für gleichartige Geräte (PC-PC)",
            "Beide sind identisch",
            "Straight-Through nur für LAN, Cross-Over nur für WAN"
        ],
        correct: 1,
        explanation: "Straight-Through verbindet unterschiedliche Geräte (PC-Switch), Cross-Over verbindet gleichartige Geräte (PC-PC, Switch-Switch). Moderne Geräte erkennen dies automatisch (Auto-MDI/MDI-X)."
    },
    {
        topic: "kabel",
        question: "Was bedeutet 'Signaldämpfung' bei Kabeln?",
        answers: [
            "Die Abschwächung des Signals über die Kabellänge",
            "Die Verstärkung des Signals",
            "Die Geschwindigkeit der Übertragung",
            "Die Anzahl der Adernpaare"
        ],
        correct: 0,
        explanation: "Signaldämpfung beschreibt den Verlust der Signalstärke über die Kabellänge. Je länger das Kabel, desto stärker die Dämpfung."
    },
    {
        topic: "kabel",
        question: "Was ist Übersprechdämpfung (Crosstalk)?",
        answers: [
            "Die Übertragung von Daten über mehrere Kanäle",
            "Die unerwünschte Signalübertragung zwischen benachbarten Adernpaaren",
            "Die Verstärkung von Signalen",
            "Eine Fehlerkorrekturmethode"
        ],
        correct: 1,
        explanation: "Übersprechdämpfung (Crosstalk) tritt auf, wenn Signale von einem Adernpaar auf ein benachbartes Paar übertragen werden und Störungen verursachen."
    },
    {
        topic: "kabel",
        question: "Was bedeutet die Bezeichnung 1000Base-T?",
        answers: [
            "1000 Mbit/s, Basisband-Übertragung, Twisted-Pair-Kabel",
            "1000 km Reichweite, Glasfaser",
            "100 Mbit/s, Koaxialkabel",
            "10 Gbit/s, WLAN"
        ],
        correct: 0,
        explanation: "1000Base-T bedeutet: 1000 Mbit/s Übertragungsrate, Baseband (gesamte Bandbreite für ein Signal), T = Twisted Pair."
    },
    {
        topic: "kabel",
        question: "Was ist der Unterschied zwischen RJ45 und GG45?",
        answers: [
            "RJ45 ist der Standard-Stecker für TP-Kabel, GG45 ist abwärtskompatibel und unterstützt höhere Frequenzen",
            "GG45 ist nur für Glasfaser",
            "RJ45 ist neuer als GG45",
            "Es gibt keinen Unterschied"
        ],
        correct: 0,
        explanation: "GG45 ist eine Weiterentwicklung von RJ45, abwärtskompatibel und unterstützt höhere Frequenzen für CAT7/CAT8 Kabel."
    },

    // Glasfaser/LWL
    {
        topic: "kabel",
        question: "Wie funktioniert die Datenübertragung bei Glasfaser (LWL)?",
        answers: [
            "Durch elektrische Signale",
            "Durch Lichtsignale und Totalreflexion im Glasfaserkern",
            "Durch Funkwellen",
            "Durch magnetische Felder"
        ],
        correct: 1,
        explanation: "Glasfaser nutzt Lichtsignale, die durch Totalreflexion im Kern der Faser geleitet werden."
    },
    {
        topic: "kabel",
        question: "Was ist Totalreflexion bei Glasfaserkabeln?",
        answers: [
            "Die vollständige Reflexion von Licht an der Grenzfläche zwischen Kern und Mantel",
            "Die Absorption von Licht im Kabel",
            "Die Streuung von Licht",
            "Ein Fehler in der Übertragung"
        ],
        correct: 0,
        explanation: "Totalreflexion ermöglicht es dem Licht, im Kern der Glasfaser zu bleiben, indem es an der Grenzfläche zum Mantel reflektiert wird."
    },
    {
        topic: "kabel",
        question: "Was ist der Unterschied zwischen Singlemode und Multimode LWL?",
        answers: [
            "Singlemode hat einen sehr dünnen Kern für lange Distanzen mit einem Lichtweg, Multimode hat einen dickeren Kern für kürzere Distanzen mit mehreren Lichtwegen",
            "Singlemode ist billiger als Multimode",
            "Multimode ist für längere Distanzen geeignet",
            "Beide sind identisch"
        ],
        correct: 0,
        explanation: "Singlemode (SMF) hat einen sehr dünnen Kern (~9 µm) für lange Distanzen mit einem Lichtweg. Multimode (MMF) hat einen dickeren Kern (~50-62,5 µm) für kürzere Distanzen mit mehreren Lichtwegen."
    },
    {
        topic: "kabel",
        question: "Welche Vorteile hat Glasfaser gegenüber Kupferkabeln?",
        answers: [
            "Günstiger in der Anschaffung",
            "Höhere Übertragungsraten, größere Reichweite, keine elektromagnetische Störempfindlichkeit",
            "Einfachere Installation",
            "Geringerer Platzbedarf"
        ],
        correct: 1,
        explanation: "Glasfaser bietet sehr hohe Übertragungsraten, große Reichweiten und ist immun gegen elektromagnetische Störungen."
    },

    // Netzwerkgeräte
    {
        topic: "geraete",
        question: "Auf welcher ISO/OSI-Schicht arbeitet ein Hub?",
        answers: [
            "Schicht 1 (Physical Layer)",
            "Schicht 2 (Data Link Layer)",
            "Schicht 3 (Network Layer)",
            "Schicht 7 (Application Layer)"
        ],
        correct: 0,
        explanation: "Ein Hub arbeitet auf Schicht 1 und verstärkt/verteilt Signale einfach an alle Ports ohne Intelligenz."
    },
    {
        topic: "geraete",
        question: "Was ist der Hauptzweck eines Switches?",
        answers: [
            "Internetverbindung herstellen",
            "Geräte im LAN miteinander zu verbinden und Datenpakete gezielt an den richtigen Port weiterzuleiten",
            "WLAN bereitstellen",
            "Firewall-Funktionen"
        ],
        correct: 1,
        explanation: "Ein Switch verbindet Geräte im LAN und leitet Datenpakete basierend auf MAC-Adressen gezielt an den richtigen Port weiter."
    },
    {
        topic: "geraete",
        question: "Auf welcher ISO/OSI-Schicht arbeitet ein Switch?",
        answers: [
            "Schicht 1 (Physical Layer)",
            "Schicht 2 (Data Link Layer)",
            "Schicht 3 (Network Layer)",
            "Schicht 4 (Transport Layer)"
        ],
        correct: 1,
        explanation: "Ein Switch arbeitet auf Schicht 2 und verwendet MAC-Adressen zur Weiterleitung von Frames."
    },
    {
        topic: "geraete",
        question: "Was ist die Hauptaufgabe eines Routers?",
        answers: [
            "Geräte innerhalb eines LANs verbinden",
            "Verschiedene Netzwerke miteinander verbinden und Datenpakete zwischen ihnen weiterleiten",
            "Signale verstärken",
            "WLAN bereitstellen"
        ],
        correct: 1,
        explanation: "Ein Router verbindet verschiedene Netzwerke (z.B. LAN und Internet) und leitet Datenpakete basierend auf IP-Adressen weiter."
    },
    {
        topic: "geraete",
        question: "Auf welcher ISO/OSI-Schicht arbeitet ein Router?",
        answers: [
            "Schicht 1 (Physical Layer)",
            "Schicht 2 (Data Link Layer)",
            "Schicht 3 (Network Layer)",
            "Schicht 5 (Session Layer)"
        ],
        correct: 2,
        explanation: "Ein Router arbeitet auf Schicht 3 und verwendet IP-Adressen zur Weiterleitung von Paketen zwischen verschiedenen Netzwerken."
    },
    {
        topic: "geraete",
        question: "Wie wählt man einen passenden Switch aus?",
        answers: [
            "Nur nach dem Preis",
            "Nach Anzahl der Ports, Übertragungsgeschwindigkeit (z.B. Gigabit), PoE-Unterstützung, VLAN-Fähigkeit und Managementfunktionen",
            "Nach der Farbe",
            "Nach dem Hersteller"
        ],
        correct: 1,
        explanation: "Bei der Switch-Auswahl sind Port-Anzahl, Geschwindigkeit (1 Gbit/s, 10 Gbit/s), PoE, VLAN und Management-Features wichtig."
    },

    // Simplex, Halbduplex, Vollduplex
    {
        topic: "kommunikation",
        question: "Was bedeutet Simplex-Übertragung?",
        answers: [
            "Daten können in beide Richtungen gleichzeitig übertragen werden",
            "Daten können nur in eine Richtung übertragen werden",
            "Daten können abwechselnd in beide Richtungen übertragen werden",
            "Keine Datenübertragung möglich"
        ],
        correct: 1,
        explanation: "Bei Simplex erfolgt die Übertragung nur in eine Richtung (z.B. Radio, Fernsehen)."
    },
    {
        topic: "kommunikation",
        question: "Was ist der Unterschied zwischen Halbduplex und Vollduplex?",
        answers: [
            "Halbduplex: gleichzeitige bidirektionale Übertragung; Vollduplex: abwechselnde Übertragung",
            "Halbduplex: abwechselnde bidirektionale Übertragung; Vollduplex: gleichzeitige bidirektionale Übertragung",
            "Beide sind identisch",
            "Halbduplex ist schneller als Vollduplex"
        ],
        correct: 1,
        explanation: "Halbduplex: Kommunikation in beide Richtungen, aber nicht gleichzeitig (z.B. Walkie-Talkie). Vollduplex: gleichzeitige bidirektionale Kommunikation (z.B. Telefon)."
    },

    // Topologien
    {
        topic: "topologien",
        question: "Was ist ein Vorteil der Stern-Topologie?",
        answers: [
            "Geringste Kabelkosten",
            "Ausfall eines Endgeräts beeinflusst nicht das restliche Netzwerk, zentrale Verwaltung",
            "Keine zentrale Komponente erforderlich",
            "Höchste Ausfallsicherheit ohne Single Point of Failure"
        ],
        correct: 1,
        explanation: "Bei der Stern-Topologie ist jedes Gerät mit einem zentralen Switch verbunden. Fällt ein Endgerät aus, bleibt das Netzwerk funktionsfähig."
    },
    {
        topic: "topologien",
        question: "Was ist ein Nachteil der Stern-Topologie?",
        answers: [
            "Schwierige Fehlersuche",
            "Der zentrale Switch/Hub ist ein Single Point of Failure",
            "Komplizierte Verkabelung",
            "Niedrige Übertragungsraten"
        ],
        correct: 1,
        explanation: "Der zentrale Switch ist ein Single Point of Failure - fällt er aus, ist das gesamte Netzwerk betroffen."
    },
    {
        topic: "topologien",
        question: "Welche Topologie wird bei der strukturierten Verkabelung hauptsächlich verwendet?",
        answers: [
            "Ring-Topologie",
            "Bus-Topologie",
            "Stern-Topologie",
            "Mesh-Topologie"
        ],
        correct: 2,
        explanation: "Die strukturierte Verkabelung nach ISO/IEC 11801 verwendet hauptsächlich die Stern-Topologie mit hierarchischem Aufbau."
    },
    {
        topic: "topologien",
        question: "Was ist ein Vorteil der Bus-Topologie?",
        answers: [
            "Hohe Ausfallsicherheit",
            "Einfache Installation, geringe Kabelkosten",
            "Zentrale Verwaltung",
            "Keine Kollisionen möglich"
        ],
        correct: 1,
        explanation: "Die Bus-Topologie ist einfach zu installieren und benötigt wenig Kabel, aber ein Kabelbruch betrifft das gesamte Netzwerk."
    },
    {
        topic: "topologien",
        question: "Was kennzeichnet die Ring-Topologie?",
        answers: [
            "Alle Geräte sind mit einem zentralen Switch verbunden",
            "Geräte sind in einer Ringstruktur verbunden, Daten zirkulieren im Ring",
            "Alle Geräte teilen sich ein gemeinsames Kabel",
            "Jedes Gerät ist mit jedem anderen direkt verbunden"
        ],
        correct: 1,
        explanation: "In einer Ring-Topologie sind die Geräte ringförmig verbunden, Daten werden von Station zu Station weitergegeben."
    },

    // Strukturierte Verkabelung
    {
        topic: "verkabelung",
        question: "Was ist der Primärbereich in der strukturierten Verkabelung nach ISO/IEC 11801?",
        answers: [
            "Die Verbindung zwischen Hauptverteiler und Gebäudeverteiler",
            "Die Verbindung zwischen Gebäudeverteiler und Etagenverteiler",
            "Die Verbindung zwischen Etagenverteiler und Arbeitsplatz",
            "Die Verbindung zwischen verschiedenen Standorten"
        ],
        correct: 0,
        explanation: "Der Primärbereich verbindet den Hauptverteiler (Campus Distributor) mit den Gebäudeverteilern (Building Distributors)."
    },
    {
        topic: "verkabelung",
        question: "Was ist der Sekundärbereich (Steigbereich) in der strukturierten Verkabelung?",
        answers: [
            "Die Verbindung zwischen Hauptverteiler und Gebäudeverteiler",
            "Die Verbindung zwischen Gebäudeverteiler und Etagenverteiler",
            "Die Verbindung zwischen Etagenverteiler und Arbeitsplatz",
            "Externe Verbindungen"
        ],
        correct: 1,
        explanation: "Der Sekundärbereich (Steigbereich) verbindet den Gebäudeverteiler mit den Etagenverteilern innerhalb eines Gebäudes."
    },
    {
        topic: "verkabelung",
        question: "Was ist der Tertiärbereich in der strukturierten Verkabelung?",
        answers: [
            "Die Verbindung zwischen Hauptverteiler und Gebäudeverteiler",
            "Die Verbindung zwischen Gebäudeverteiler und Etagenverteiler",
            "Die Verbindung zwischen Etagenverteiler und Arbeitsplatz (Endgerät)",
            "Die Verbindung zwischen Gebäuden"
        ],
        correct: 2,
        explanation: "Der Tertiärbereich (Horizontalbereich) verbindet den Etagenverteiler (Floor Distributor) mit den Arbeitsplätzen."
    },
    {
        topic: "verkabelung",
        question: "Welche maximale Länge sollte ein Kabel im Tertiärbereich nicht überschreiten?",
        answers: [
            "50 Meter",
            "90 Meter (fest verlegt) + 10 Meter (Patchkabel) = 100 Meter gesamt",
            "200 Meter",
            "500 Meter"
        ],
        correct: 1,
        explanation: "Im Tertiärbereich sollten maximal 90m feste Verkabelung + 10m Patchkabel = 100m Gesamtlänge nicht überschritten werden."
    },
    {
        topic: "verkabelung",
        question: "Welche Kabel sollten im Primär- und Sekundärbereich verwendet werden?",
        answers: [
            "Nur Twisted-Pair-Kabel",
            "Vorzugsweise Glasfaserkabel (LWL) für hohe Bandbreiten und große Distanzen",
            "Koaxialkabel",
            "WLAN"
        ],
        correct: 1,
        explanation: "Im Primär- und Sekundärbereich werden vorzugsweise Glasfaserkabel verwendet, da sie hohe Bandbreiten und große Distanzen ermöglichen."
    },

    // Netzwerkkommunikation
    {
        topic: "kommunikation",
        question: "Was ist ein leitungsvermittelndes Netzwerk?",
        answers: [
            "Ein Netzwerk, bei dem eine dedizierte Verbindung für die gesamte Kommunikationsdauer aufgebaut wird (z.B. klassisches Telefonnetz)",
            "Ein Netzwerk, bei dem Daten in Paketen übertragen werden",
            "Ein drahtloses Netzwerk",
            "Ein lokales Netzwerk"
        ],
        correct: 0,
        explanation: "Bei der Leitungsvermittlung wird eine dedizierte physische Verbindung für die Dauer der Kommunikation aufgebaut (z.B. klassisches Telefonnetz)."
    },
    {
        topic: "kommunikation",
        question: "Was ist ein paketvermittelndes Netzwerk?",
        answers: [
            "Ein Netzwerk mit fester Verbindung",
            "Ein Netzwerk, bei dem Daten in Pakete aufgeteilt und unabhängig über verschiedene Wege übertragen werden (z.B. Internet)",
            "Ein Netzwerk nur für Sprache",
            "Ein lokales Netzwerk"
        ],
        correct: 1,
        explanation: "Bei der Paketvermittlung werden Daten in Pakete aufgeteilt, die unabhängig voneinander über verschiedene Wege zum Ziel gelangen (z.B. Internet)."
    },
    {
        topic: "kommunikation",
        question: "Was ist ein Vorteil von paketvermittelnden Netzwerken gegenüber leitungsvermittelnden?",
        answers: [
            "Garantierte Dienstqualität",
            "Effizientere Nutzung der Netzwerkressourcen, flexiblere Routenwahl",
            "Einfacheres Protokoll",
            "Geringere Latenz"
        ],
        correct: 1,
        explanation: "Paketvermittelnde Netzwerke nutzen die Ressourcen effizienter, da keine dedizierte Leitung reserviert werden muss und Pakete flexible Routen nehmen können."
    },

    // Übertragungsraten und Einheiten
    {
        topic: "kabel",
        question: "Was bedeutet die Einheit Mbit/s?",
        answers: [
            "Megabyte pro Sekunde",
            "Megabit pro Sekunde (1 Mbit/s = 1.000.000 Bit/s)",
            "Millionen Bytes pro Sekunde",
            "Megahertz pro Sekunde"
        ],
        correct: 1,
        explanation: "Mbit/s steht für Megabit pro Sekunde. 1 Mbit/s = 1.000.000 Bit/s. Nicht zu verwechseln mit MByte/s (Megabyte)."
    },
    {
        topic: "kabel",
        question: "Wie viel ist 1 Gbit/s in Mbit/s?",
        answers: [
            "100 Mbit/s",
            "500 Mbit/s",
            "1000 Mbit/s",
            "10000 Mbit/s"
        ],
        correct: 2,
        explanation: "1 Gbit/s (Gigabit pro Sekunde) = 1000 Mbit/s (Megabit pro Sekunde)."
    }
];

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = [];
let filteredQuestions = [];
let selectedTopic = 'all';

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const reviewScreen = document.getElementById('review-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const backToResultsBtn = document.getElementById('back-to-results-btn');

const topicSelect = document.getElementById('topic-select');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const questionNumber = document.getElementById('question-number');
const currentTopicBadge = document.getElementById('current-topic');
const progressFill = document.getElementById('progress');
const feedbackDiv = document.getElementById('feedback');

// Topic names mapping
const topicNames = {
    'netzwerktypen': 'Netzwerktypen',
    'kabel': 'Kabel & Medien',
    'geraete': 'Netzwerkgeräte',
    'topologien': 'Topologien',
    'kommunikation': 'Kommunikation',
    'verkabelung': 'Verkabelung'
};

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', previousQuestion);
restartBtn.addEventListener('click', () => {
    showScreen('start');
    resetQuiz();
});
reviewBtn.addEventListener('click', () => showReview());
backToResultsBtn.addEventListener('click', () => showScreen('results'));

// Functions
function startQuiz() {
    selectedTopic = topicSelect.value;
    
    // Filter questions based on selected topic
    if (selectedTopic === 'all') {
        filteredQuestions = [...quizQuestions];
    } else {
        filteredQuestions = quizQuestions.filter(q => q.topic === selectedTopic);
    }
    
    // Shuffle questions
    filteredQuestions = shuffleArray(filteredQuestions);
    
    currentQuestionIndex = 0;
    userAnswers = new Array(filteredQuestions.length).fill(null);
    
    showScreen('quiz');
    displayQuestion();
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function displayQuestion() {
    const question = filteredQuestions[currentQuestionIndex];
    
    // Update question text and info
    questionText.textContent = question.question;
    questionNumber.textContent = `Frage ${currentQuestionIndex + 1} von ${filteredQuestions.length}`;
    currentTopicBadge.textContent = topicNames[question.topic] || question.topic;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    feedbackDiv.classList.remove('show', 'correct', 'incorrect');
    
    // Display answer options
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.dataset.index = index;
        
        // Check if this answer was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
            showFeedback(index === question.correct);
            
            // Show correct/incorrect styling
            if (index === question.correct) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
                // Also highlight the correct answer
                const correctBtn = answersContainer.querySelector(`[data-index="${question.correct}"]`);
                if (correctBtn) correctBtn.classList.add('correct');
            }
            disableAnswers();
        }
        
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (userAnswers[currentQuestionIndex] !== null) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
    
    // Update next button text
    if (currentQuestionIndex === filteredQuestions.length - 1) {
        nextBtn.textContent = 'Ergebnisse anzeigen';
    } else {
        nextBtn.textContent = 'Weiter';
    }
}

function selectAnswer(index) {
    if (userAnswers[currentQuestionIndex] !== null) return; // Already answered
    
    const question = filteredQuestions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = index;
    
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    const selectedButton = answersContainer.querySelector(`[data-index="${index}"]`);
    selectedButton.classList.add('selected');
    
    // Show feedback
    const isCorrect = index === question.correct;
    showFeedback(isCorrect);
    
    // Highlight correct and incorrect answers
    if (isCorrect) {
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
    }
    
    disableAnswers();
    nextBtn.disabled = false;
}

function showFeedback(isCorrect) {
    const question = filteredQuestions[currentQuestionIndex];
    feedbackDiv.classList.add('show');
    
    if (isCorrect) {
        feedbackDiv.classList.add('correct');
        feedbackDiv.classList.remove('incorrect');
        feedbackDiv.innerHTML = `
            <strong>✓ Richtig!</strong>
            <div class="feedback-explanation">${question.explanation}</div>
        `;
    } else {
        feedbackDiv.classList.add('incorrect');
        feedbackDiv.classList.remove('correct');
        feedbackDiv.innerHTML = `
            <strong>✗ Falsch!</strong>
            <div class="feedback-explanation">${question.explanation}</div>
        `;
    }
}

function disableAnswers() {
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function showResults() {
    showScreen('results');
    
    // Calculate score
    let correctCount = 0;
    filteredQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const totalCount = filteredQuestions.length;
    const incorrectCount = totalCount - correctCount;
    const percentage = Math.round((correctCount / totalCount) * 100);
    
    // Display results
    document.getElementById('final-score').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    document.getElementById('total-count').textContent = totalCount;
    
    // Display message based on score
    const scoreMessage = document.getElementById('score-message');
    if (percentage >= 90) {
        scoreMessage.textContent = 'Ausgezeichnet! Du bist bestens vorbereitet! 🌟';
    } else if (percentage >= 75) {
        scoreMessage.textContent = 'Sehr gut! Du hast ein solides Verständnis! 👍';
    } else if (percentage >= 60) {
        scoreMessage.textContent = 'Gut gemacht! Mit etwas mehr Übung wirst du noch besser! 📚';
    } else {
        scoreMessage.textContent = 'Weiter üben! Du schaffst das! 💪';
    }
}

function showReview() {
    showScreen('review');
    
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    
    filteredQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        let html = `
            <div class="review-question">
                ${index + 1}. ${question.question}
            </div>
        `;
        
        if (!isCorrect && userAnswer !== null) {
            html += `
                <div class="review-answer wrong-answer">
                    <div class="review-label">Deine Antwort:</div>
                    ${question.answers[userAnswer]}
                </div>
            `;
        }
        
        html += `
            <div class="review-answer correct-answer">
                <div class="review-label">${isCorrect ? 'Deine Antwort (richtig):' : 'Richtige Antwort:'}</div>
                ${question.answers[question.correct]}
            </div>
            <div class="review-answer">
                <div class="review-label">Erklärung:</div>
                ${question.explanation}
            </div>
        `;
        
        reviewItem.innerHTML = html;
        reviewContainer.appendChild(reviewItem);
    });
}

function showScreen(screenName) {
    const screens = [startScreen, quizScreen, resultsScreen, reviewScreen];
    screens.forEach(screen => screen.classList.remove('active'));
    
    switch(screenName) {
        case 'start':
            startScreen.classList.add('active');
            break;
        case 'quiz':
            quizScreen.classList.add('active');
            break;
        case 'results':
            resultsScreen.classList.add('active');
            break;
        case 'review':
            reviewScreen.classList.add('active');
            break;
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    filteredQuestions = [];
    selectedTopic = 'all';
    topicSelect.value = 'all';
}
