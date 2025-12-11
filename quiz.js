// Quiz Questions Database
const quizQuestions = [
    // PAN, LAN, MAN, WAN
    {
        topic: "netzwerktypen",
        question: "Was ist ein PAN (Personal Area Network)?",
        answers: [
            "Ein Netzwerk für persönliche Geräte in unmittelbarer Nähe (z.B. Bluetooth)",
            "Ein Netzwerk, das mehrere Gebäude innerhalb einer Stadt miteinander verbindet",
            "Ein weltweites Netzwerk für internationale Datenübertragung und Kommunikation",
            "Ein Netzwerk innerhalb eines Bürogebäudes oder einer Etage"
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
            "MAN deckt eine Stadt ab, WAN verbindet geografisch entfernte Standorte",
            "MAN nutzt ausschließlich drahtlose Technologie, WAN nur Kabelverbindungen",
            "MAN bietet grundsätzlich höhere Übertragungsgeschwindigkeiten als WAN",
            "MAN und WAN sind identische Begriffe für dieselbe Netzwerkart"
        ],
        correct: 0,
        explanation: "MAN (Metropolitan Area Network) erstreckt sich über eine Stadt, während WAN (Wide Area Network) geografisch weit entfernte Standorte verbindet."
    },
    {
        topic: "netzwerktypen",
        question: "Welcher Vorteil ergibt sich durch Netzwerke?",
        answers: [
            "Es fallen deutlich höhere Hardwarekosten für alle Geräte an",
            "Ressourcen können gemeinsam genutzt werden (Drucker, Dateien, Internet)",
            "Die Installation und Konfiguration wird erheblich komplexer und aufwendiger",
            "Die Datensicherheit wird grundsätzlich schlechter und anfälliger für Angriffe"
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
            "Massivleiter für feste Verlegung, Litze für flexible Anwendungen",
            "Massivleiter bietet deutlich mehr Flexibilität und Biegsamkeit als Litze",
            "Litze ist ausschließlich für die feste Gebäudeverlegung in Wänden konzipiert",
            "Es gibt keinerlei funktionale oder strukturelle Unterschiede zwischen beiden"
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
            "Straight-Through ist ausschließlich für gleichartige Geräte, Cross-Over für unterschiedliche",
            "Straight-Through verbindet unterschiedliche Geräte, Cross-Over gleichartige",
            "Beide Kabeltypen sind vollständig identisch in Funktion und Verdrahtung",
            "Straight-Through wird nur in LANs eingesetzt, Cross-Over nur in WANs"
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
            "Durch elektrische Signale wie bei Kupferkabeln",
            "Durch Lichtsignale via Totalreflexion",
            "Durch hochfrequente elektromagnetische Funkwellen",
            "Durch magnetische Feldänderungen im Faserkern"
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
            "Singlemode: dünner Kern für lange Distanzen; Multimode: dicker Kern für kurze Distanzen",
            "Singlemode ist in der Anschaffung deutlich kostengünstiger als Multimode-Glasfaser",
            "Multimode eignet sich besonders gut für sehr lange Übertragungsstrecken über Kilometer",
            "Beide Glasfasertypen sind technisch identisch und austauschbar in der Anwendung"
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
            "Eine direkte Verbindung zum Internet herstellen und verwalten",
            "LAN-Geräte verbinden und Pakete gezielt weiterleiten",
            "Drahtlose Netzwerke bereitstellen und WLAN-Geräte anbinden",
            "Als Firewall fungieren und Sicherheitsregeln durchsetzen"
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
            "Ausschließlich nach dem günstigsten verfügbaren Kaufpreis im Handel",
            "Nach Ports, Geschwindigkeit, PoE, VLAN und Management",
            "Primär nach der äußeren Farbgestaltung und dem Design des Gehäuses",
            "Nur nach dem Markennamen und der Reputation des Herstellers"
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
            "Geringste Kabelkosten und minimaler Verkabelungsaufwand aller Topologien",
            "Ausfall eines Endgeräts beeinträchtigt nicht das restliche Netzwerk",
            "Es ist keine zentrale Komponente wie Switch oder Hub erforderlich",
            "Höchste Ausfallsicherheit ohne Single Point of Failure im System"
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
            "50 Meter ist die absolute maximale Gesamtlänge für alle Kabel",
            "90 Meter fest verlegt + 10 Meter Patchkabel = 100 Meter",
            "200 Meter Gesamtlänge bei Verwendung hochwertiger CAT6-Kabel",
            "500 Meter wenn Repeater zur Signalverstärkung eingesetzt werden"
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
            "Dedizierte Verbindung für gesamte Kommunikationsdauer",
            "Ein Netzwerk, bei dem sämtliche Daten in kleinen Paketen übertragen werden",
            "Ein Netzwerk, das ausschließlich drahtlose Funkverbindungen nutzt",
            "Ein geografisch begrenztes lokales Netzwerk innerhalb eines Gebäudes"
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
    },

    // Additional questions for more variety (38 new questions)
    {
        topic: "netzwerktypen",
        question: "Welche maximale Reichweite hat ein typisches WLAN?",
        answers: [
            "Bis zu 100 Meter im Freien",
            "Bis zu 1 Kilometer",
            "Bis zu 10 Kilometer",
            "Unbegrenzte Reichweite"
        ],
        correct: 0,
        explanation: "WLAN hat typischerweise eine Reichweite von etwa 100m im Freien, in Gebäuden weniger durch Wände und Störungen."
    },
    {
        topic: "geraete",
        question: "Was ist der Hauptunterschied zwischen Hub und Switch?",
        answers: [
            "Hub ist schneller",
            "Switch leitet gezielt weiter, Hub verteilt an alle Ports",
            "Hub hat mehr Ports",
            "Switch ist günstiger"
        ],
        correct: 1,
        explanation: "Ein Switch leitet Pakete gezielt an den richtigen Port weiter, während ein Hub blind an alle Ports sendet."
    },
    {
        topic: "kabel",
        question: "Welche Farbreihenfolge gilt für T568B?",
        answers: [
            "Orange-Weiß, Orange, Grün-Weiß, Blau, Blau-Weiß, Grün, Braun-Weiß, Braun",
            "Grün-Weiß, Grün, Orange-Weiß, Blau, Blau-Weiß, Orange, Braun-Weiß, Braun",
            "Blau-Weiß, Blau, Orange-Weiß, Orange, Grün-Weiß, Grün, Braun-Weiß, Braun",
            "Braun-Weiß, Braun, Grün-Weiß, Grün, Orange-Weiß, Orange, Blau-Weiß, Blau"
        ],
        correct: 0,
        explanation: "T568B: Orange-Weiß, Orange, Grün-Weiß, Blau, Blau-Weiß, Grün, Braun-Weiß, Braun ist der Standard."
    },
    {
        topic: "topologien",
        question: "Was ist eine vermaschte (Mesh) Topologie?",
        answers: [
            "Alle Geräte um einen zentralen Switch",
            "Geräte in einer Linie",
            "Jedes Gerät mit jedem verbunden",
            "Geräte im Ring"
        ],
        correct: 2,
        explanation: "Bei Mesh-Topologie ist jedes Gerät mit jedem anderen verbunden, was hohe Ausfallsicherheit bietet."
    },
    {
        topic: "kommunikation",
        question: "Was bedeutet Latenz in einem Netzwerk?",
        answers: [
            "Die Übertragungsgeschwindigkeit",
            "Die Verzögerungszeit bei der Datenübertragung",
            "Die Anzahl der Fehler",
            "Die Größe der Datenpakete"
        ],
        correct: 1,
        explanation: "Latenz ist die Verzögerungszeit zwischen Senden und Empfangen von Daten, gemessen in Millisekunden."
    },
    {
        topic: "geraete",
        question: "Wofür steht PoE bei Netzwerkgeräten?",
        answers: [
            "Port over Ethernet",
            "Power over Ethernet - Stromversorgung über das Netzwerkkabel",
            "Protocol of Ethernet",
            "Point of Entry"
        ],
        correct: 1,
        explanation: "PoE (Power over Ethernet) ermöglicht die Stromversorgung von Geräten über das Netzwerkkabel."
    },
    {
        topic: "verkabelung",
        question: "Was ist ein Patchpanel?",
        answers: [
            "Ein Switch mit vielen Ports",
            "Ein Router für große Netzwerke",
            "Eine Anschlussleiste zur strukturierten Verkabelung",
            "Ein Kabeltyp"
        ],
        correct: 2,
        explanation: "Ein Patchpanel ist eine Anschlussleiste, die die strukturierte Verkabelung organisiert und flexibel macht."
    },
    {
        topic: "netzwerktypen",
        question: "Was ist VPN?",
        answers: [
            "Very Private Network",
            "Virtual Private Network - sichere Verbindung über öffentliche Netze",
            "Variable Protocol Network",
            "Verified Personal Network"
        ],
        correct: 1,
        explanation: "VPN (Virtual Private Network) erstellt eine verschlüsselte Verbindung über öffentliche Netzwerke."
    },
    {
        topic: "kabel",
        question: "Was ist der Vorteil von CAT7 gegenüber CAT6?",
        answers: [
            "Günstiger Preis",
            "Einfachere Installation",
            "Bessere Schirmung, höhere Frequenzen bis 600 MHz",
            "Geringeres Gewicht"
        ],
        correct: 2,
        explanation: "CAT7 bietet bessere Schirmung und unterstützt höhere Frequenzen bis 600 MHz, ideal für 10 Gigabit."
    },
    {
        topic: "geraete",
        question: "Was macht eine Firewall?",
        answers: [
            "Erhöht die Geschwindigkeit",
            "Verteilt Netzwerklast",
            "Kontrolliert und filtert Datenverkehr nach Sicherheitsregeln",
            "Verbindet WLAN-Geräte"
        ],
        correct: 2,
        explanation: "Eine Firewall kontrolliert den Datenverkehr und blockiert unerwünschte Verbindungen nach definierten Regeln."
    },
    {
        topic: "topologien",
        question: "Was ist der Nachteil einer Bus-Topologie?",
        answers: [
            "Zu teuer",
            "Kabelbruch betrifft das gesamte Netzwerk",
            "Zu komplex",
            "Geringe Geschwindigkeit"
        ],
        correct: 1,
        explanation: "Bei Bus-Topologie führt ein Kabelbruch zum Ausfall des gesamten Netzwerks, da alle Geräte das Kabel teilen."
    },
    {
        topic: "kommunikation",
        question: "Was ist Bandbreite?",
        answers: [
            "Die Länge des Kabels",
            "Die maximale Datenübertragungsrate",
            "Die Anzahl der Nutzer",
            "Die Netzwerkgröße"
        ],
        correct: 1,
        explanation: "Bandbreite bezeichnet die maximale Datenmenge, die pro Zeiteinheit übertragen werden kann (z.B. Mbit/s)."
    },
    {
        topic: "kabel",
        question: "Was bedeutet Auto-MDI/MDI-X?",
        answers: [
            "Automatische Stromversorgung",
            "Automatische Kabelerkennung und Anpassung",
            "Automatisches Routing",
            "Automatische Verschlüsselung"
        ],
        correct: 1,
        explanation: "Auto-MDI/MDI-X erkennt automatisch den Kabeltyp und passt sich an, sodass Cross-Over-Kabel nicht mehr nötig sind."
    },
    {
        topic: "geraete",
        question: "Was ist ein Layer-3-Switch?",
        answers: [
            "Ein normaler Switch",
            "Ein Switch mit Routing-Fähigkeiten",
            "Ein Switch mit drei Ports",
            "Ein Hub"
        ],
        correct: 1,
        explanation: "Ein Layer-3-Switch kombiniert Switch-Funktionen mit Routing-Fähigkeiten und arbeitet auf OSI-Schicht 3."
    },
    {
        topic: "verkabelung",
        question: "Was ist ein Backbone-Netzwerk?",
        answers: [
            "Ein kleines Heimnetzwerk",
            "Das Hauptnetzwerk, das Teilnetze verbindet",
            "Ein Funknetzwerk",
            "Ein Testnetzwerk"
        ],
        correct: 1,
        explanation: "Das Backbone ist das Hauptnetzwerk, das verschiedene Teilnetze miteinander verbindet und hohe Kapazitäten hat."
    },
    {
        topic: "netzwerktypen",
        question: "Was ist der Unterschied zwischen Client und Server?",
        answers: [
            "Kein Unterschied",
            "Client fordert Dienste an, Server stellt sie bereit",
            "Server ist immer langsamer",
            "Client hat mehr Speicher"
        ],
        correct: 1,
        explanation: "In einem Client-Server-Modell fordert der Client Dienste an, die der Server bereitstellt und verarbeitet."
    },
    {
        topic: "kommunikation",
        question: "Was ist Multicast?",
        answers: [
            "Übertragung an alle im Netz",
            "Übertragung an ein Gerät",
            "Übertragung an mehrere spezifische Geräte",
            "Keine Übertragung"
        ],
        correct: 2,
        explanation: "Multicast sendet Daten gleichzeitig an eine ausgewählte Gruppe von Empfängern, effizienter als Broadcast."
    },
    {
        topic: "kabel",
        question: "Was ist Impedanz bei Kabeln?",
        answers: [
            "Die Kabellänge",
            "Der Widerstand gegen Wechselstrom",
            "Die Kabelfarbe",
            "Die Anzahl der Adern"
        ],
        correct: 1,
        explanation: "Impedanz ist der Wechselstromwiderstand eines Kabels, bei Ethernet typischerweise 100 Ohm."
    },
    {
        topic: "topologien",
        question: "Was ist eine hybride Topologie?",
        answers: [
            "Nur Stern-Topologie",
            "Kombination verschiedener Topologien",
            "Nur Ring-Topologie",
            "Keine Topologie"
        ],
        correct: 1,
        explanation: "Eine hybride Topologie kombiniert verschiedene Topologie-Typen, z.B. Stern und Ring zusammen."
    },
    {
        topic: "geraete",
        question: "Was ist ein Repeater?",
        answers: [
            "Verstärkt Signale über lange Strecken",
            "Filtert Datenpakete",
            "Verschlüsselt Daten",
            "Speichert Daten"
        ],
        correct: 0,
        explanation: "Ein Repeater verstärkt das Signal, um größere Distanzen ohne Qualitätsverlust zu überbrücken."
    },
    {
        topic: "kommunikation",
        question: "Was ist der Unterschied zwischen Broadcast und Unicast?",
        answers: [
            "Kein Unterschied",
            "Broadcast an alle, Unicast an ein Gerät",
            "Broadcast ist schneller",
            "Unicast ist unsicher"
        ],
        correct: 1,
        explanation: "Broadcast sendet an alle Geräte im Netz, Unicast nur an ein spezifisches Zielgerät."
    },
    {
        topic: "verkabelung",
        question: "Was ist der Zweck eines Kabelkanals?",
        answers: [
            "Erhöht die Geschwindigkeit",
            "Schützt und organisiert Kabel",
            "Verstärkt Signale",
            "Filtert Störungen"
        ],
        correct: 1,
        explanation: "Kabelkanäle schützen Kabel vor Beschädigungen und sorgen für eine ordentliche, strukturierte Verlegung."
    },
    {
        topic: "netzwerktypen",
        question: "Was ist ein Intranet?",
        answers: [
            "Das öffentliche Internet",
            "Ein privates internes Netzwerk einer Organisation",
            "Ein mobiles Netzwerk",
            "Ein Funknetzwerk"
        ],
        correct: 1,
        explanation: "Ein Intranet ist ein privates Netzwerk innerhalb einer Organisation, das Internet-Technologien nutzt."
    },
    {
        topic: "kabel",
        question: "Was bedeutet Dämpfung bei Glasfaserkabeln?",
        answers: [
            "Signalverstärkung",
            "Signalabschwächung über Entfernung",
            "Geschwindigkeitszunahme",
            "Kapazitätssteigerung"
        ],
        correct: 1,
        explanation: "Dämpfung beschreibt die Abschwächung des Lichtsignals über die Kabellänge, bei Glasfaser sehr gering."
    },
    {
        topic: "geraete",
        question: "Was ist ein Access Point?",
        answers: [
            "Ein Kabelanschluss",
            "Ein Gerät für WLAN-Zugang",
            "Ein Stromverteiler",
            "Ein Speichergerät"
        ],
        correct: 1,
        explanation: "Ein Access Point ermöglicht drahtlosen Geräten den Zugang zum kabelgebundenen Netzwerk."
    },
    {
        topic: "kommunikation",
        question: "Was ist Kollision in einem Netzwerk?",
        answers: [
            "Physischer Schaden an Kabeln",
            "Gleichzeitige Datenübertragung mehrerer Geräte auf einem Medium",
            "Virenbefall",
            "Stromausfall"
        ],
        correct: 1,
        explanation: "Eine Kollision tritt auf, wenn zwei Geräte gleichzeitig senden, was die Daten unbrauchbar macht."
    },
    {
        topic: "topologien",
        question: "Was ist der Vorteil einer Mesh-Topologie?",
        answers: [
            "Niedrige Kosten",
            "Hohe Ausfallsicherheit durch Redundanz",
            "Einfache Installation",
            "Wenig Kabel"
        ],
        correct: 1,
        explanation: "Mesh bietet hohe Ausfallsicherheit, da mehrere Pfade existieren. Fällt eine Verbindung aus, gibt es Alternativen."
    },
    {
        topic: "verkabelung",
        question: "Was ist ein RJ45-Keystone?",
        answers: [
            "Ein Kabeltyp",
            "Eine modulare Netzwerkdose für Wandmontage",
            "Ein Switch",
            "Ein Router"
        ],
        correct: 1,
        explanation: "Ein Keystone ist ein modulares Anschlusselement für strukturierte Verkabelung in Dosen und Panels."
    },
    {
        topic: "netzwerktypen",
        question: "Was ist ein Extranet?",
        answers: [
            "Ein sehr schnelles Internet",
            "Erweiterung eines Intranets für externe Partner",
            "Ein mobiles Netzwerk",
            "Ein lokales Netzwerk"
        ],
        correct: 1,
        explanation: "Ein Extranet erweitert ein Intranet für ausgewählte externe Partner wie Kunden oder Lieferanten."
    },
    {
        topic: "kabel",
        question: "Was ist der Unterschied zwischen Simplex- und Duplex-Glasfaser?",
        answers: [
            "Simplex hat eine Faser, Duplex zwei",
            "Simplex ist schneller",
            "Duplex ist billiger",
            "Kein Unterschied"
        ],
        correct: 0,
        explanation: "Simplex-Kabel haben eine Faser für eine Richtung, Duplex-Kabel zwei Fasern für bidirektionale Kommunikation."
    },
    {
        topic: "geraete",
        question: "Was ist ein Managed Switch?",
        answers: [
            "Ein sehr großer Switch",
            "Ein Switch mit Konfigurationsmöglichkeiten",
            "Ein defekter Switch",
            "Ein Switch ohne Funktionen"
        ],
        correct: 1,
        explanation: "Ein Managed Switch kann konfiguriert werden (VLANs, QoS, etc.), ein Unmanaged Switch arbeitet automatisch."
    },
    {
        topic: "kommunikation",
        question: "Was ist Jitter in einem Netzwerk?",
        answers: [
            "Schwankungen in der Paketlaufzeit",
            "Die Gesamtverzögerung",
            "Die Übertragungsgeschwindigkeit",
            "Die Anzahl verlorener Pakete"
        ],
        correct: 0,
        explanation: "Jitter bezeichnet Schwankungen in der Paketlaufzeit, problematisch für Echtzeitanwendungen wie VoIP."
    },
    {
        topic: "topologien",
        question: "Was ist ein Single Point of Failure?",
        answers: [
            "Ein sehr sicherer Punkt",
            "Eine Komponente, deren Ausfall das System stoppt",
            "Ein Backup-System",
            "Eine redundante Verbindung"
        ],
        correct: 1,
        explanation: "Ein Single Point of Failure ist eine kritische Komponente, deren Ausfall das gesamte System lahmlegt."
    },
    {
        topic: "verkabelung",
        question: "Was ist ein Serverschrank?",
        answers: [
            "Ein Möbelstück für Bücher",
            "Ein 19-Zoll-Schrank für Netzwerkgeräte",
            "Ein Kabeltyp",
            "Ein Softwareprogramm"
        ],
        correct: 1,
        explanation: "Ein Serverschrank (Rack) ist ein standardisierter 19-Zoll-Schrank zur geordneten Aufnahme von Netzwerkgeräten."
    },
    {
        topic: "netzwerktypen",
        question: "Was ist Cloud Computing?",
        answers: [
            "Lokale Datenspeicherung",
            "IT-Ressourcen über das Internet bereitstellen",
            "Ein Netzwerktyp",
            "Eine Kabelart"
        ],
        correct: 1,
        explanation: "Cloud Computing stellt IT-Ressourcen wie Server, Speicher und Anwendungen über das Internet bereit."
    },
    {
        topic: "kabel",
        question: "Was ist ein Pigtail bei Glasfasern?",
        answers: [
            "Ein beschädigtes Kabel",
            "Ein kurzes Kabel mit vorkonfektioniertem Stecker",
            "Ein sehr langes Kabel",
            "Ein Kupferkabel"
        ],
        correct: 1,
        explanation: "Ein Pigtail ist ein kurzes Glasfaserkabel mit einem vorkonfektionierten Stecker zum Spleißen."
    },
    {
        topic: "geraete",
        question: "Was ist ein Gateway?",
        answers: [
            "Ein Türschloss",
            "Ein Gerät zum Verbinden verschiedener Netzwerkprotokolle",
            "Ein Kabeltyp",
            "Ein Stecker"
        ],
        correct: 1,
        explanation: "Ein Gateway verbindet Netzwerke mit unterschiedlichen Protokollen und übersetzt zwischen ihnen."
    },
    {
        topic: "kommunikation",
        question: "Was bedeutet QoS (Quality of Service)?",
        answers: [
            "Qualitätskontrolle von Kabeln",
            "Priorisierung bestimmter Datenströme",
            "Geschwindigkeitsmessung",
            "Sicherheitsprotokoll"
        ],
        correct: 1,
        explanation: "QoS priorisiert wichtige Datenströme (z.B. VoIP) gegenüber weniger kritischem Verkehr."
    },
    {
        topic: "topologien",
        question: "Was ist eine Point-to-Point-Verbindung?",
        answers: [
            "Direktverbindung zwischen zwei Punkten",
            "Verbindung zu allen Geräten",
            "Eine Ringverbindung",
            "Eine Sternverbindung"
        ],
        correct: 0,
        explanation: "Point-to-Point ist eine dedizierte Direktverbindung zwischen genau zwei Endpunkten."
    }
];

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = [];
let filteredQuestions = [];
let selectedTopic = 'all';
let currentStreak = 0;
let maxStreak = 0;

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
const streakDisplay = document.getElementById('streak-display');
const streakCount = document.getElementById('streak-count');
const progressText = document.getElementById('progress-text');

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

// Initialize particles on page load
window.addEventListener('load', initParticles);

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
    
    // Limit to 20 questions per session from the question pool
    const MAX_QUESTIONS = 20;
    if (filteredQuestions.length > MAX_QUESTIONS) {
        filteredQuestions = filteredQuestions.slice(0, MAX_QUESTIONS);
    }
    
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
    
    // Update progress bar with animation
    const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
    
    // Update streak display
    updateStreakDisplay();
    
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
    
    // Update streak
    if (isCorrect) {
        currentStreak++;
        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }
        // Mini celebration for correct answer
        if (currentStreak >= 3) {
            confetti({
                particleCount: 30,
                spread: 60,
                origin: { y: 0.6 }
            });
        }
    } else {
        currentStreak = 0;
    }
    
    updateStreakDisplay();
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
        scoreMessage.textContent = `Ausgezeichnet! Du bist bestens vorbereitet! 🌟 (Max Streak: ${maxStreak})`;
        celebrate(); // Big celebration!
    } else if (percentage >= 75) {
        scoreMessage.textContent = `Sehr gut! Du hast ein solides Verständnis! 👍 (Max Streak: ${maxStreak})`;
        celebrate(); // Celebrate good score
    } else if (percentage >= 60) {
        scoreMessage.textContent = `Gut gemacht! Mit etwas mehr Übung wirst du noch besser! 📚 (Max Streak: ${maxStreak})`;
    } else {
        scoreMessage.textContent = `Weiter üben! Du schaffst das! 💪 (Max Streak: ${maxStreak})`;
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
    currentStreak = 0;
    maxStreak = 0;
    updateStreakDisplay();
}

// Create floating particles in background
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Update streak display
function updateStreakDisplay() {
    if (currentStreak >= 3) {
        streakCount.textContent = currentStreak;
        streakDisplay.classList.add('show');
    } else {
        streakDisplay.classList.remove('show');
    }
}

// Trigger confetti celebration
function celebrate() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
}
