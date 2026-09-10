const quizData = [
  {
    "cat": "Netzwerk-Grundlagen",
    "q": "Was benötigt ein Netzwerk laut Präsentation mindestens?",
    "a": [
      "Mindestens zwei Systeme, ein Übertragungsmedium und ein gemeinsames Protokoll",
      "Mindestens zehn Systeme und ausschließlich Glasfaser",
      "Einen Server, einen Router und eine Firewall",
      "Nur zwei Rechner ohne gemeinsame Kommunikationsregeln"
    ],
    "c": 0,
    "e": "Die Präsentation beschreibt ein Netzwerk als mindestens zwei verbundene Systeme, die über ein Medium kommunizieren und ein gemeinsames Protokoll nutzen.",
    "id": "q1"
  },
  {
    "cat": "Netzwerk-Grundlagen",
    "q": "Welche der folgenden Möglichkeiten wird in der Präsentation als Übertragungsmedium genannt?",
    "a": [
      "Kupferkabel",
      "Nur Satelliten",
      "Nur USB-Sticks",
      "Ausschließlich Infrarot"
    ],
    "c": 0,
    "e": "Als Medien werden unter anderem Kupferkabel, Glasfaser und Funkstrecken genannt.",
    "id": "q2"
  },
  {
    "cat": "Netzwerk-Grundlagen",
    "q": "Was ist ein Knoten in einem Netzwerk?",
    "a": [
      "Eine physische Komponente mit Netzwerkschnittstelle",
      "Ausschließlich ein Router",
      "Nur das verwendete Kabel",
      "Ein Protokoll zur Namensauflösung"
    ],
    "c": 0,
    "e": "Ein Knoten ist laut Präsentation eine physische Komponente mit Netzwerkschnittstelle, die Daten senden, empfangen oder weiterleiten kann.",
    "id": "q3"
  },
  {
    "cat": "Netzwerk-Grundlagen",
    "q": "Was beschreibt einen Punkt-zu-Punkt-Link?",
    "a": [
      "Eine direkte Verbindung zwischen genau zwei Knoten",
      "Eine Verbindung zwischen beliebig vielen Knoten",
      "Eine Verbindung ausschließlich über das Internet",
      "Eine logische Adresse eines Knotens"
    ],
    "c": 0,
    "e": "Ein Punkt-zu-Punkt-Link verbindet genau zwei Knoten direkt miteinander.",
    "id": "q4"
  },
  {
    "cat": "Netzwerk-Grundlagen",
    "q": "Was ist ein Endsystem?",
    "a": [
      "Ein Knoten, an dem Kommunikation beginnt oder endet",
      "Ein Knoten, der ausschließlich Daten weiterleitet",
      "Ein Kabel zwischen zwei Switches",
      "Ein Netzwerkprotokoll"
    ],
    "c": 0,
    "e": "Endsysteme sind die Start- oder Endpunkte einer Kommunikation und erzeugen oder konsumieren Daten selbst.",
    "id": "q5"
  },
  {
    "cat": "Netzwerk-Grundlagen",
    "q": "Welches Gerät wird in der Präsentation als typisches Zwischensystem genannt?",
    "a": [
      "Router",
      "Smartphone",
      "Netzwerkdrucker",
      "Tablet"
    ],
    "c": 0,
    "e": "Router gehören zu den genannten Zwischensystemen. Smartphones, Tablets und Netzwerkdrucker werden als typische Endsysteme genannt.",
    "id": "q6"
  },
  {
    "cat": "Netzwerk-Grundlagen",
    "q": "Woran trifft ein Router laut Präsentation Weiterleitungsentscheidungen?",
    "a": [
      "An Netzwerkadressen und einer Routingtabelle",
      "An Dateinamen und Druckerstatus",
      "An der Bildschirmauflösung",
      "An der verwendeten Tastatur"
    ],
    "c": 0,
    "e": "Die Präsentation beschreibt Router als Zwischensysteme, die Weiterleitungsentscheidungen anhand von Netzwerkadressen und einer Routingtabelle treffen.",
    "id": "q7"
  },
  {
    "cat": "Client-Server & P2P",
    "q": "Was ist im Client-Server-Modell die Rolle eines Clients?",
    "a": [
      "Er fordert Dienste an und nutzt sie",
      "Er stellt grundsätzlich alle Daten zentral bereit",
      "Er ersetzt automatisch jeden Router",
      "Er verwaltet ausschließlich die Verkabelung"
    ],
    "c": 0,
    "e": "Ein Client fordert Dienste an und nutzt sie. Client und Server werden dabei als Funktionen und nicht zwingend als Geräte beschrieben.",
    "id": "q8"
  },
  {
    "cat": "Client-Server & P2P",
    "q": "Welche Aussage über Client und Server ist laut Präsentation richtig?",
    "a": [
      "Client und Server sind Funktionen, keine zwingend festen Geräte",
      "Ein Gerät kann niemals beide Rollen übernehmen",
      "Ein Server muss immer ein separates physisches Gerät sein",
      "Ein Client darf keine Daten empfangen"
    ],
    "c": 0,
    "e": "Die Rollen sind Funktionen einer Kommunikationsbeziehung. Ein Gerät kann gleichzeitig Server für eine Verbindung und Client für eine andere sein.",
    "id": "q9"
  },
  {
    "cat": "Client-Server & P2P",
    "q": "Welcher Vorteil des Client-Server-Modells wird genannt?",
    "a": [
      "Zentrale Datenhaltung erleichtert die Datensicherung",
      "Es gibt grundsätzlich keinen Ausfallpunkt",
      "Es wird keine Administration benötigt",
      "Serverhardware ist immer billiger als Endgeräte"
    ],
    "c": 0,
    "e": "Die zentrale Datenhaltung wird als Vorteil genannt, weil sie die Datensicherung erleichtert.",
    "id": "q10"
  },
  {
    "cat": "Client-Server & P2P",
    "q": "Was ist ein Nachteil des Client-Server-Modells?",
    "a": [
      "Der zentrale Server kann ein Single Point of Failure sein",
      "Neue Clients können nicht hinzugefügt werden",
      "Datenhaltung ist grundsätzlich unmöglich",
      "Es gibt keine Zugriffskontrollen"
    ],
    "c": 0,
    "e": "Der zentrale Server kann einen Single Point of Failure darstellen: Fällt er aus, können die betroffenen Dienste ausfallen.",
    "id": "q11"
  },
  {
    "cat": "Client-Server & P2P",
    "q": "Was kennzeichnet ein Peer-to-Peer-Netzwerk?",
    "a": [
      "Jeder Knoten kann gleichzeitig Anbieter und Nutzer von Ressourcen sein",
      "Es gibt immer einen einzigen zentralen Server",
      "Nur Router dürfen Ressourcen anbieten",
      "Alle Teilnehmer müssen dieselbe Hardware besitzen"
    ],
    "c": 0,
    "e": "P2P-Netzwerke verzichten auf feste Rollen; jeder Knoten kann Anbieter und Nutzer von Ressourcen sein.",
    "id": "q12"
  },
  {
    "cat": "Client-Server & P2P",
    "q": "Welcher Nachteil von Peer-to-Peer-Netzwerken wird in der Präsentation genannt?",
    "a": [
      "Fehlende einheitliche Sicherheitsstrategie",
      "Zentrale Zugriffskontrollen sind zwingend vorgeschrieben",
      "Eine dedizierte Serverhardware ist immer erforderlich",
      "Ein einzelner Teilnehmerausfall legt das gesamte Netzwerk still"
    ],
    "c": 0,
    "e": "Als Nachteile werden unter anderem fehlende einheitliche Sicherheitsstrategien und eine unübersichtliche Koordination bei vielen Teilnehmern genannt.",
    "id": "q13"
  },
  {
    "cat": "Server & Netzwerktypen",
    "q": "Welche Aufgabe hat ein Dateiserver?",
    "a": [
      "Er bietet zentralen Speicherplatz für Dokumente",
      "Er übersetzt Namen in IP-Adressen",
      "Er verteilt Anfragen auf mehrere Server",
      "Er erzeugt ausschließlich WLAN-Signale"
    ],
    "c": 0,
    "e": "Die Präsentation beschreibt einen Dateiserver als Server, der zentralen Speicherplatz für Dokumente bereitstellt.",
    "id": "q14"
  },
  {
    "cat": "Server & Netzwerktypen",
    "q": "Welcher Netzwerktyp ist für ein kleines Home Office gedacht?",
    "a": [
      "SOHO",
      "WAN",
      "GAN",
      "Datacenter"
    ],
    "c": 0,
    "e": "SOHO steht für Small Office/Home Office und beschreibt Netzwerke für kleine Büros oder Home Offices.",
    "id": "q15"
  },
  {
    "cat": "Server & Netzwerktypen",
    "q": "Was ist ein LAN laut Präsentation?",
    "a": [
      "Ein lokales Netzwerk an einem Standort",
      "Ein weltweiter Verbund von LANs und WANs",
      "Eine Verbindung ausschließlich zwischen Städten",
      "Ein Netzwerk nur für Rechenzentren"
    ],
    "c": 0,
    "e": "Ein LAN ist ein lokales Netzwerk an einem Standort und kann Knoten über Kabel oder Funk verbinden.",
    "id": "q16"
  },
  {
    "cat": "Server & Netzwerktypen",
    "q": "Welcher Netzwerktyp verbindet mehrere Gebäude auf einem Gelände?",
    "a": [
      "CAN",
      "PAN",
      "WAN",
      "GAN"
    ],
    "c": 0,
    "e": "Ein Campus Area Network (CAN) verbindet mehrere Gebäude auf einem Gelände und wird meist von der eigenen Organisation betrieben.",
    "id": "q17"
  },
  {
    "cat": "Server & Netzwerktypen",
    "q": "Was ist ein WAN?",
    "a": [
      "Ein Netzwerk, das Netzwerke über große Entfernungen verbindet",
      "Ein Netzwerk für wenige Meter zwischen persönlichen Geräten",
      "Ein einzelner Büro-Switch",
      "Ein Netzwerk ausschließlich innerhalb eines Raums"
    ],
    "c": 0,
    "e": "Ein WAN (Wide Area Network) verbindet Netzwerke über große Entfernungen und wird häufig über Strecken von Telekommunikationsanbietern realisiert.",
    "id": "q18"
  },
  {
    "cat": "Server & Netzwerktypen",
    "q": "Welche Aussage passt zum Datacenter-Netzwerk?",
    "a": [
      "Es beherbergt ausschließlich Server und Speichersysteme",
      "Es ist ausschließlich für Smartphones gedacht",
      "Es besteht immer aus genau einem Switch",
      "Es hat keine Anforderungen an Redundanz"
    ],
    "c": 0,
    "e": "Die Präsentation beschreibt Datacenter-Netzwerke als Umgebungen für Server und Speichersysteme mit Anforderungen wie Redundanz und hoher interner Bandbreite.",
    "id": "q19"
  },
  {
    "cat": "Appliances & Dienste",
    "q": "Welche Aufgabe hat ein Switch laut Präsentation?",
    "a": [
      "Er verbindet Endgeräte im selben Netzwerksegment",
      "Er verbindet grundsätzlich verschiedene Kontinente",
      "Er übersetzt DNS-Namen",
      "Er stellt automatisch Webseiten bereit"
    ],
    "c": 0,
    "e": "Ein Switch verbindet Endgeräte innerhalb desselben Netzwerksegments und leitet Datenrahmen gezielt weiter.",
    "id": "q20"
  },
  {
    "cat": "Appliances & Dienste",
    "q": "Welche Aufgabe hat ein Router?",
    "a": [
      "Er verbindet unterschiedliche Netzwerke miteinander",
      "Er dient ausschließlich als Dateiserver",
      "Er ersetzt jedes Übertragungsmedium",
      "Er komprimiert automatisch alle Dateien"
    ],
    "c": 0,
    "e": "Ein Router verbindet unterschiedliche Netzwerke und leitet Datenpakete anhand von Netzwerkadressen weiter.",
    "id": "q21"
  },
  {
    "cat": "Appliances & Dienste",
    "q": "Welche Funktion hat eine Firewall?",
    "a": [
      "Sie überwacht und filtert Datenverkehr zwischen Netzwerken",
      "Sie speichert ausschließlich Benutzerdokumente",
      "Sie wandelt DNS-Namen in Dateinamen um",
      "Sie dient nur zur Zeitsynchronisation"
    ],
    "c": 0,
    "e": "Die Präsentation beschreibt Firewalls als Systeme, die Datenverkehr zwischen Netzwerken überwachen und filtern.",
    "id": "q22"
  },
  {
    "cat": "Appliances & Dienste",
    "q": "Wofür wird ein Load Balancer eingesetzt?",
    "a": [
      "Er verteilt Anfragen auf mehrere Server",
      "Er vergibt automatisch IP-Adressen an Clients",
      "Er verbindet Kopfhörer per Bluetooth",
      "Er ersetzt die Routingtabelle"
    ],
    "c": 0,
    "e": "Ein Load Balancer verteilt Anfragen auf mehrere Server, um Überlastung zu vermeiden.",
    "id": "q23"
  },
  {
    "cat": "Appliances & Dienste",
    "q": "Welche Aussage über DHCP und DNS entspricht der Präsentation?",
    "a": [
      "DHCP vergibt Netzwerkadressen automatisch; DNS übersetzt Namen in Adressen",
      "DHCP verschlüsselt Webseiten; DNS verteilt Serverlast",
      "DHCP ersetzt Router; DNS ersetzt Switches",
      "Beide Dienste dienen ausschließlich der Dateispeicherung"
    ],
    "c": 0,
    "e": "DHCP wird für die automatische Vergabe von Netzwerkadressen genannt, DNS für die Übersetzung von Namen in Adressen.",
    "id": "q24"
  },
  {
    "cat": "Appliances & Dienste",
    "q": "Was ist QoS laut Präsentation?",
    "a": [
      "Eine Funktion, die bevorzugte Datenströme bei zeitkritischen Anwendungen ermöglicht",
      "Ein Dienst zur Vergabe von IP-Adressen",
      "Ein Dateiservertyp",
      "Eine Hardwareadresse"
    ],
    "c": 0,
    "e": "Quality of Service (QoS) sorgt laut Präsentation für bevorzugte Datenströme bei zeitkritischen Anwendungen.",
    "id": "q25"
  },
  {
    "cat": "OSI-Grundlagen",
    "q": "Wie viele Schichten besitzt das OSI-Modell?",
    "a": [
      "Sieben",
      "Vier",
      "Fünf",
      "Drei"
    ],
    "c": 0,
    "e": "Das OSI-Modell wird in der Präsentation mit sieben funktionalen Schichten dargestellt.",
    "id": "q26"
  },
  {
    "cat": "OSI-Grundlagen",
    "q": "Welche Schicht ist im OSI-Modell die Bitübertragungsschicht?",
    "a": [
      "Schicht 1",
      "Schicht 2",
      "Schicht 3",
      "Schicht 4"
    ],
    "c": 0,
    "e": "Schicht 1 ist der Physical Layer beziehungsweise die Bitübertragungsschicht.",
    "id": "q27"
  },
  {
    "cat": "OSI-Grundlagen",
    "q": "Welche Schicht ist der Data Link Layer?",
    "a": [
      "Schicht 2",
      "Schicht 3",
      "Schicht 5",
      "Schicht 7"
    ],
    "c": 0,
    "e": "Der Data Link Layer ist Schicht 2, die Sicherungsschicht.",
    "id": "q28"
  },
  {
    "cat": "OSI-Grundlagen",
    "q": "Welche Schicht ist für logische Adressierung und Wegfindung zuständig?",
    "a": [
      "Schicht 3 – Network Layer",
      "Schicht 1 – Physical Layer",
      "Schicht 5 – Session Layer",
      "Schicht 6 – Presentation Layer"
    ],
    "c": 0,
    "e": "Die Vermittlungsschicht (Schicht 3) übernimmt laut Präsentation logische Adressierung und Wegfindung.",
    "id": "q29"
  },
  {
    "cat": "OSI-Grundlagen",
    "q": "Welche Schicht verwendet Portnummern zur Identifikation von Netzwerkanwendungen?",
    "a": [
      "Schicht 4 – Transport Layer",
      "Schicht 2 – Data Link Layer",
      "Schicht 6 – Presentation Layer",
      "Schicht 1 – Physical Layer"
    ],
    "c": 0,
    "e": "Die Transportschicht ist die Ende-zu-Ende-Schicht und verwendet Portnummern, um Netzwerkanwendungen zu identifizieren.",
    "id": "q30"
  },
  {
    "cat": "OSI-Grundlagen",
    "q": "Welche Aufgabe gehört zur Sitzungsschicht (Schicht 5)?",
    "a": [
      "Dialogaufbau und -abbau sowie Verwaltung zusammengehöriger Nachrichten",
      "Übertragung elektrischer Signale",
      "Weiterleitung anhand von IP-Adressen",
      "Auswahl eines Ethernet-Ausgangsports anhand einer MAC-Adresse"
    ],
    "c": 0,
    "e": "Die Sitzungsschicht steuert laut Präsentation den Dialogaufbau und -abbau und verwaltet Sitzungen.",
    "id": "q31"
  },
  {
    "cat": "OSI-Grundlagen",
    "q": "Welche Aufgabe gehört zur Darstellungsschicht (Schicht 6)?",
    "a": [
      "Datenformate umwandeln, komprimieren und verschlüsseln",
      "Router anhand einer Routingtabelle steuern",
      "MAC-Adressen lernen",
      "Physikalische Signale über Kabel übertragen"
    ],
    "c": 0,
    "e": "Die Darstellungsschicht wandelt Datenformate um; außerdem werden Kompression und Verschlüsselung genannt.",
    "id": "q32"
  },
  {
    "cat": "OSI-Grundlagen",
    "q": "Welche Aussage beschreibt die Anwendungsschicht (Schicht 7)?",
    "a": [
      "Sie stellt eine Schnittstelle für Softwareprogramme und Netzwerkdienste bereit",
      "Sie überträgt Bits als elektrische Signale",
      "Sie entscheidet ausschließlich anhand von MAC-Adressen",
      "Sie ist ausschließlich für Kabel zuständig"
    ],
    "c": 0,
    "e": "Die Anwendungsschicht ist die oberste Schicht und stellt Schnittstellen für Softwareprogramme und Netzwerkdienste bereit.",
    "id": "q33"
  },
  {
    "cat": "Kapselung & PDU",
    "q": "Welche Reihenfolge beschreibt die Kapselung beim Senden?",
    "a": [
      "Anwendungsdaten → Segment → Paket → Frame → Bits",
      "Bits → Frame → Paket → Segment → Anwendungsdaten",
      "Frame → Bits → Segment → Paket → Anwendungsdaten",
      "Paket → Anwendungsdaten → Frame → Segment → Bits"
    ],
    "c": 0,
    "e": "Die Präsentation nennt beim Weg nach unten die Reihenfolge Anwendungsdaten, Segment, Paket, Frame und Bits.",
    "id": "q34"
  },
  {
    "cat": "Kapselung & PDU",
    "q": "Was passiert bei der Dekapselung beim Empfänger?",
    "a": [
      "Die Verarbeitung läuft in umgekehrter Reihenfolge und Steuerinformationen werden entfernt",
      "Alle Header werden weiter ergänzt",
      "Nur die Anwendungsschicht fügt neue Header hinzu",
      "Die Daten werden ausschließlich in Bits umgewandelt"
    ],
    "c": 0,
    "e": "Beim Empfänger läuft die Dekapselung von unten nach oben; die hinzugefügten Steuerinformationen werden schrittweise entfernt.",
    "id": "q35"
  },
  {
    "cat": "Kapselung & PDU",
    "q": "Wie heißt die PDU auf der Transportschicht?",
    "a": [
      "Segment",
      "Frame",
      "Bit",
      "Link"
    ],
    "c": 0,
    "e": "Auf der Transportschicht heißt die PDU Segment.",
    "id": "q36"
  },
  {
    "cat": "Kapselung & PDU",
    "q": "Wie heißt die PDU auf der Sicherungsschicht?",
    "a": [
      "Frame",
      "Segment",
      "Paket",
      "Signal"
    ],
    "c": 0,
    "e": "Auf der Sicherungsschicht wird die PDU als Frame bezeichnet.",
    "id": "q37"
  },
  {
    "cat": "Kapselung & PDU",
    "q": "Was kann ein Trailer einer PDU enthalten beziehungsweise bewirken?",
    "a": [
      "Er kann das Ende markieren und zur Fehlerprüfung dienen",
      "Er vergibt grundsätzlich die IP-Adresse",
      "Er ersetzt den gesamten Header",
      "Er bestimmt immer die Anwendung"
    ],
    "c": 0,
    "e": "Ein Trailer kann das Ende einer Dateneinheit markieren und zur Fehlerprüfung dienen.",
    "id": "q38"
  },
  {
    "cat": "Adressierung & Geräte",
    "q": "Welche Adresse nutzt ein Switch laut Präsentation zur Bestimmung des passenden Ausgangsports?",
    "a": [
      "MAC-Adresse",
      "IP-Adresse",
      "Portnummer der Anwendung",
      "DNS-Name"
    ],
    "c": 0,
    "e": "Ein Switch nutzt MAC-Adressen, um den passenden Ausgangsport zu bestimmen.",
    "id": "q39"
  },
  {
    "cat": "Adressierung & Geräte",
    "q": "Was macht ein Router mit einem Paket auf dem nächsten Streckenabschnitt?",
    "a": [
      "Er verarbeitet den IP-Header und verpackt das Paket in einen neuen Frame",
      "Er ändert nur die Tastatureingabe des Benutzers",
      "Er ersetzt die IP-Adresse durch einen DNS-Namen",
      "Er liest ausschließlich die MAC-Adresse und ignoriert IP"
    ],
    "c": 0,
    "e": "Laut Präsentation liest der Router den IP-Header und erstellt für den nächsten Streckenabschnitt einen neuen Frame.",
    "id": "q40"
  },
  {
    "cat": "Adressierung & Geräte",
    "q": "Welche Aussage unterscheidet MAC- und IP-Adressen laut Präsentation richtig?",
    "a": [
      "MAC-Adressen gelten lokal; IP-Adressen ermöglichen Wegfindung über Netzwerke hinweg",
      "IP-Adressen gelten nur innerhalb eines einzelnen Frames",
      "MAC-Adressen übernehmen grundsätzlich weltweites Routing",
      "Beide Adresstypen haben exakt dieselbe Aufgabe"
    ],
    "c": 0,
    "e": "Die Präsentation stellt MAC-Adressen als lokale Hardwareadressen und IP-Adressen als Grundlage der Wegfindung über Netzwerke hinweg gegenüber.",
    "id": "q41"
  },
  {
    "cat": "Praxis & Protokolle",
    "q": "Was ermittelt DNS beim Aufruf einer Webseite?",
    "a": [
      "Die passende IP-Adresse zu einem Namen",
      "Den Ethernet-Frame",
      "Die MAC-Adresse jedes Routers im Internet",
      "Die physische Kabellänge"
    ],
    "c": 0,
    "e": "Beim Webseitenaufruf ermittelt DNS laut Präsentation die passende IP-Adresse.",
    "id": "q42"
  },
  {
    "cat": "Praxis & Protokolle",
    "q": "Welche Aufgabe übernimmt TCP im beschriebenen Webseitenaufruf?",
    "a": [
      "Es übernimmt den zuverlässigen Transport",
      "Es übernimmt ausschließlich die physische Signalübertragung",
      "Es ersetzt DNS",
      "Es bestimmt den Ethernet-Ausgangsport anhand der MAC-Adresse"
    ],
    "c": 0,
    "e": "TCP wird in der Präsentation als Protokoll für den zuverlässigen Transport beschrieben.",
    "id": "q43"
  },
  {
    "cat": "Praxis & Protokolle",
    "q": "Welche Aufgabe übernimmt IP beim Webseitenaufruf?",
    "a": [
      "Adressierung und Weiterleitung",
      "Zeichencodierung",
      "Dateikompression",
      "Zentrale Dateispeicherung"
    ],
    "c": 0,
    "e": "IP sorgt laut Präsentation für Adressierung und Weiterleitung.",
    "id": "q44"
  },
  {
    "cat": "Praxis & Protokolle",
    "q": "Welche Aussage zum TCP/IP-Modell trifft laut Präsentation zu?",
    "a": [
      "Es ist praxisorientiert und beschreibt bewährte Protokolle des Internets",
      "Es ist ausschließlich ein theoretisches Lehrmodell ohne praktische Protokolle",
      "Es besitzt genau sieben Schichten wie das OSI-Modell",
      "Es ersetzt Ethernet und IP vollständig"
    ],
    "c": 0,
    "e": "Das TCP/IP-Modell wird als älter, praxisorientiert und auf bewährten Protokollen basierend beschrieben.",
    "id": "q45"
  },
  {
    "cat": "TCP/IP & OSI",
    "q": "Welche OSI-Schichten werden in der Link Layer des beschriebenen TCP/IP-Modells zusammengefasst?",
    "a": [
      "Physical und Data Link",
      "Network und Transport",
      "Session und Presentation",
      "Presentation und Application"
    ],
    "c": 0,
    "e": "Die Link Layer umfasst laut Präsentation die OSI-Schichten Bitübertragung und Sicherung.",
    "id": "q46"
  },
  {
    "cat": "TCP/IP & OSI",
    "q": "Welcher OSI-Schicht entspricht die Internet Layer im beschriebenen TCP/IP-Modell?",
    "a": [
      "Schicht 3 – Network Layer",
      "Schicht 1 – Physical Layer",
      "Schicht 4 – Transport Layer",
      "Schicht 7 – Application Layer"
    ],
    "c": 0,
    "e": "Die Internet Layer entspricht der OSI-Vermittlungsschicht (Schicht 3).",
    "id": "q47"
  },
  {
    "cat": "TCP/IP & OSI",
    "q": "Welche Aussage über TCP und UDP wird in der Präsentation gemacht?",
    "a": [
      "TCP sorgt für zuverlässige Übertragung; UDP setzt auf Geschwindigkeit",
      "UDP ist immer zuverlässiger als TCP",
      "TCP ist ausschließlich für MAC-Adressen zuständig",
      "Beide Protokolle arbeiten nur auf der Bitübertragungsschicht"
    ],
    "c": 0,
    "e": "Die Präsentation stellt TCP als zuverlässiges Transportprotokoll und UDP als schnelleres, weniger zuverlässiges Protokoll gegenüber.",
    "id": "q48"
  },
  {
    "cat": "TCP/IP & OSI",
    "q": "Was ist das OSI-Modell laut Präsentation?",
    "a": [
      "Ein theoretisches, herstellerneutrales Rahmen- beziehungsweise Referenzmodell",
      "Ein konkreter Ethernet-Steckerstandard",
      "Ein einzelnes Routingprotokoll",
      "Ein Dateisystem für Netzwerkserver"
    ],
    "c": 0,
    "e": "Das OSI-Modell wird als theoretisches, herstellerneutrales Referenzmodell beschrieben.",
    "id": "q49"
  },
  {
    "cat": "Fehlersuche & Sicherheit",
    "q": "Warum ist das OSI-Modell bei der Fehlersuche hilfreich?",
    "a": [
      "Es ermöglicht eine schichtweise und systematische Prüfung",
      "Es ersetzt jede technische Messung",
      "Es legt konkrete Steckerformen fest",
      "Es verhindert grundsätzlich alle Netzwerkfehler"
    ],
    "c": 0,
    "e": "Die Präsentation beschreibt das OSI-Modell als Analysewerkzeug für eine schichtweise, systematische Fehlersuche.",
    "id": "q50"
  },
  {
    "cat": "Fehlersuche & Sicherheit",
    "q": "Was prüft ein Switch laut Präsentation im Rahmen der Kapselung?",
    "a": [
      "MAC-Adressen",
      "Nur den HTTP-Inhalt",
      "Nur Portnummern",
      "Nur den DNS-Namen"
    ],
    "c": 0,
    "e": "Ein Switch liest laut Präsentation MAC-Adressen aus dem Frame-Header.",
    "id": "q51"
  },
  {
    "cat": "Fehlersuche & Sicherheit",
    "q": "Was werten Sicherheitsgeräte auf der Transportschicht laut Präsentation aus?",
    "a": [
      "Portnummern",
      "Nur Lichtsignale",
      "Nur MAC-Adressen",
      "Ausschließlich Dateinamen"
    ],
    "c": 0,
    "e": "Sicherheitsgeräte auf der Transportschicht können Portnummern auswerten.",
    "id": "q52"
  },
  {
    "cat": "Fehlersuche & Sicherheit",
    "q": "Was ist eine Grenze eines Layer-3-Paketfilters laut Präsentation?",
    "a": [
      "Er erkennt nicht immer korrekt, ob auf einem Port tatsächlich das erwartete Protokoll läuft",
      "Er kann grundsätzlich keine IP-Adressen lesen",
      "Er kann keine Pakete weiterleiten",
      "Er arbeitet ausschließlich mit Glasfaserkabeln"
    ],
    "c": 0,
    "e": "Die Präsentation weist darauf hin, dass ein Layer-3-Paketfilter nicht immer erkennen kann, welches Protokoll tatsächlich auf einem bestimmten Port läuft.",
    "id": "q53"
  },
  {
    "cat": "Praxis & Protokolle",
    "q": "Ein Rechner mit IP 10.1.1.10 verbindet sich mit einem Webserver 10.2.2.20. Welcher Zielport wird im Beispiel für sicheren Webverkehr verwendet?",
    "a": [
      "443",
      "25",
      "53",
      "110"
    ],
    "c": 0,
    "e": "Im Praxisbeispiel wird Port 443 für sicheren Webverkehr genannt.",
    "id": "q54"
  }
];
