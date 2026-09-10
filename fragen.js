// Fragenpool aus den beiden Lernscripten
// Keine Verweise auf "Präsentationen" oder "Lernscripte" in den Fragen.
// script.js mischt die Antwortmöglichkeiten bei jedem Quizstart neu.

const quizData = [

  // =========================
  // NETZWERK-GRUNDLAGEN
  // =========================

  {
    cat: "Netzwerk-Grundlagen",
    q: "Welche Aussage beschreibt ein Netzwerk am treffendsten?",
    a: [
      "Ein Zusammenschluss vernetzter Geräte, die Daten austauschen können",
      "Ein einzelner Computer mit mehreren Programmen",
      "Nur eine Verbindung zwischen zwei Servern",
      "Ein Programm zur Verwaltung von Dateien"
    ],
    c: 0,
    e: "Ein Netzwerk verbindet Geräte miteinander, damit sie Daten und Informationen austauschen können."
  },
  {
    cat: "Netzwerk-Grundlagen",
    q: "Was bezeichnet der Begriff „Knoten“ in einem Netzwerk?",
    a: [
      "Ein Gerät bzw. einen Netzwerkteilnehmer",
      "Nur einen Router",
      "Nur ein Netzwerkkabel",
      "Eine Firewall-Regel"
    ],
    c: 0,
    e: "Ein Knoten ist ein Netzwerkteilnehmer, beispielsweise ein Computer, Drucker oder Server."
  },
  {
    cat: "Netzwerk-Grundlagen",
    q: "Was ist bei einem Netzwerk unter einem Link zu verstehen?",
    a: [
      "Eine Verbindung zwischen zwei Knoten",
      "Ein Benutzerkonto",
      "Eine IP-Adresse",
      "Ein Serverprogramm"
    ],
    c: 0,
    e: "Ein Link bezeichnet die Verbindung zwischen zwei Netzwerkknoten."
  },
  {
    cat: "Netzwerk-Grundlagen",
    q: "Was ist ein Endsystem?",
    a: [
      "Ein Gerät, das Daten sendet oder empfängt und von einem Benutzer oder einer Anwendung genutzt wird",
      "Ein Gerät, das ausschließlich Daten weiterleitet",
      "Ein Netzwerkkabel",
      "Ein Protokoll zur Adressierung"
    ],
    c: 0,
    e: "Endsysteme sind beispielsweise PCs, Smartphones, Drucker oder Server. Sie erzeugen oder empfangen Daten."
  },
  {
    cat: "Netzwerk-Grundlagen",
    q: "Welche Aufgabe hat ein Zwischensystem?",
    a: [
      "Es vermittelt bzw. leitet Daten zwischen Netzwerkteilnehmern weiter",
      "Es erstellt ausschließlich Dokumente",
      "Es ersetzt jede IP-Adresse durch eine MAC-Adresse",
      "Es dient nur als Datenspeicher"
    ],
    c: 0,
    e: "Zwischensysteme wie Switches und Router übernehmen Vermittlungs- und Weiterleitungsaufgaben."
  },
  {
    cat: "Netzwerk-Grundlagen",
    q: "Welches Gerät ist typischerweise ein Endsystem?",
    a: [
      "PC",
      "Switch",
      "Router",
      "Firewall"
    ],
    c: 0,
    e: "Ein PC ist ein Endsystem, weil er Daten für Anwendungen erzeugt und empfängt."
  },
  {
    cat: "Netzwerk-Grundlagen",
    q: "Welches Gerät ist typischerweise ein Zwischensystem?",
    a: [
      "Router",
      "Drucker",
      "Notebook",
      "Smartphone"
    ],
    c: 0,
    e: "Ein Router vermittelt Daten zwischen unterschiedlichen Netzwerken."
  },
  {
    cat: "Netzwerk-Grundlagen",
    q: "Warum werden Netzwerke aufgebaut?",
    a: [
      "Um Geräte und Ressourcen miteinander zu verbinden und Daten auszutauschen",
      "Um Computer voneinander zu isolieren",
      "Um nur lokale Dateien zu speichern",
      "Um Betriebssysteme zu ersetzen"
    ],
    c: 0,
    e: "Netzwerke ermöglichen Kommunikation sowie die gemeinsame Nutzung von Daten und Ressourcen."
  },
  {
    cat: "Netzwerk-Grundlagen",
    q: "Welche Kombination besteht ausschließlich aus typischen Endsystemen?",
    a: [
      "PC, Smartphone und Drucker",
      "Router, Switch und Firewall",
      "Switch, Access Point und Router",
      "Firewall, Router und Switch"
    ],
    c: 0,
    e: "PC, Smartphone und Drucker können als Endsysteme Daten senden und empfangen."
  },

  // =========================
  // CLIENT-SERVER & P2P
  // =========================

  {
    cat: "Client-Server & P2P",
    q: "Was ist das grundlegende Prinzip einer Client-Server-Architektur?",
    a: [
      "Clients greifen auf Dienste eines Servers zu",
      "Alle Geräte übernehmen immer exakt dieselbe Rolle",
      "Nur ein Gerät darf Daten senden",
      "Clients und Server dürfen nicht miteinander kommunizieren"
    ],
    c: 0,
    e: "Beim Client-Server-Modell stellt ein Server Dienste bereit, die von Clients genutzt werden."
  },
  {
    cat: "Client-Server & P2P",
    q: "Welche Aufgabe übernimmt ein Server typischerweise?",
    a: [
      "Dienste oder Ressourcen für andere Geräte bereitstellen",
      "Ausschließlich Tastatureingaben verarbeiten",
      "Nur Netzwerkkabel verbinden",
      "Nur IP-Adressen anzeigen"
    ],
    c: 0,
    e: "Server stellen beispielsweise Dateien, Webseiten oder andere Netzwerkdienste bereit."
  },
  {
    cat: "Client-Server & P2P",
    q: "Welche Aufgabe übernimmt ein Client typischerweise?",
    a: [
      "Einen Dienst eines Servers nutzen",
      "Alle Netzwerkgeräte miteinander verkabeln",
      "Netzwerkpakete grundsätzlich routen",
      "Den gesamten Netzwerkverkehr verschlüsseln"
    ],
    c: 0,
    e: "Ein Client greift auf einen bereitgestellten Dienst zu."
  },
  {
    cat: "Client-Server & P2P",
    q: "Was kennzeichnet ein Peer-to-Peer-Netzwerk?",
    a: [
      "Geräte können direkt miteinander kommunizieren und Ressourcen bereitstellen",
      "Es gibt zwingend genau einen zentralen Server",
      "Nur Router dürfen Daten austauschen",
      "Alle Geräte müssen dieselbe IP-Adresse besitzen"
    ],
    c: 0,
    e: "Bei P2P können Teilnehmer direkt miteinander kommunizieren und sowohl Dienste nutzen als auch bereitstellen."
  },
  {
    cat: "Client-Server & P2P",
    q: "Was ist ein Vorteil einer Client-Server-Architektur?",
    a: [
      "Zentrale Bereitstellung und Verwaltung von Diensten",
      "Es gibt keinerlei zentrale Verwaltung",
      "Jeder Client benötigt alle Serverdienste lokal",
      "Netzwerkgeräte benötigen keine Adressen"
    ],
    c: 0,
    e: "Die zentrale Struktur erleichtert beispielsweise Verwaltung und Bereitstellung von Ressourcen."
  },
  {
    cat: "Client-Server & P2P",
    q: "Was kann ein Nachteil einer stark zentralisierten Client-Server-Struktur sein?",
    a: [
      "Der Server kann zu einem zentralen Ausfallpunkt werden",
      "Clients können keine Dienste nutzen",
      "Es können keine Benutzer angelegt werden",
      "Das Netzwerk benötigt grundsätzlich keine Verbindung"
    ],
    c: 0,
    e: "Fällt ein zentraler Server aus, können die von ihm bereitgestellten Dienste betroffen sein."
  },
  {
    cat: "Client-Server & P2P",
    q: "Welche Aussage passt zu einem Peer in einem P2P-Netzwerk?",
    a: [
      "Ein Teilnehmer kann sowohl Dienste nutzen als auch bereitstellen",
      "Ein Peer darf niemals Daten empfangen",
      "Ein Peer ist immer ein Router",
      "Ein Peer besitzt grundsätzlich keine Netzwerkadresse"
    ],
    c: 0,
    e: "P2P-Teilnehmer können sowohl als Nutzer als auch als Anbieter von Ressourcen auftreten."
  },
  {
    cat: "Client-Server & P2P",
    q: "Welche Architektur eignet sich besonders für zentral verwaltete Unternehmensdienste?",
    a: [
      "Client-Server",
      "Nur P2P",
      "Nur eine Punkt-zu-Punkt-Verbindung ohne Server",
      "Ein Netzwerk ohne Endsysteme"
    ],
    c: 0,
    e: "Zentrale Server erleichtern die Verwaltung von Diensten und Ressourcen in Unternehmen."
  },
  {
    cat: "Client-Server & P2P",
    q: "Welche Aussage über Client-Server und P2P ist richtig?",
    a: [
      "Client-Server trennt Rollen stärker, während P2P Teilnehmer gleichberechtigter behandeln kann",
      "P2P benötigt immer einen zentralen Server",
      "Client-Server bedeutet, dass kein Client Daten empfängt",
      "Beide Modelle sind technisch exakt identisch"
    ],
    c: 0,
    e: "Der wesentliche Unterschied liegt in der Rollenverteilung und der Zentralisierung von Diensten."
  },

  // =========================
  // SERVER & NETZWERKTYPEN
  // =========================

  {
    cat: "Server & Netzwerktypen",
    q: "Was ist ein Server?",
    a: [
      "Ein System, das Dienste oder Ressourcen für andere Systeme bereitstellt",
      "Ausschließlich ein Netzwerkkabel",
      "Nur ein Switch-Port",
      "Ein Gerät ohne Netzwerkfunktion"
    ],
    c: 0,
    e: "Ein Server stellt Netzwerkdienste oder Ressourcen für andere Teilnehmer bereit."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Wofür steht die Abkürzung LAN?",
    a: [
      "Local Area Network",
      "Large Access Network",
      "Linked Application Node",
      "Local Application Number"
    ],
    c: 0,
    e: "LAN steht für Local Area Network und bezeichnet ein lokal begrenztes Netzwerk."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Was kennzeichnet ein LAN?",
    a: [
      "Es verbindet Geräte in einem räumlich begrenzten Bereich",
      "Es verbindet ausschließlich Kontinente",
      "Es besteht nur aus Routern",
      "Es darf keine Server enthalten"
    ],
    c: 0,
    e: "Ein LAN ist beispielsweise in einem Gebäude, Büro oder einer Schule zu finden."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Wofür steht WAN?",
    a: [
      "Wide Area Network",
      "Wireless Access Node",
      "Web Application Network",
      "Wide Application Number"
    ],
    c: 0,
    e: "WAN steht für Wide Area Network und bezeichnet ein weitreichendes Netzwerk."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Welche Situation beschreibt am ehesten ein WAN?",
    a: [
      "Die Verbindung von Netzwerken über große geografische Entfernungen",
      "Die Verbindung zweier Geräte über ein USB-Kabel",
      "Ein einzelner Arbeitsplatz-PC",
      "Ein Drucker innerhalb eines Raumes"
    ],
    c: 0,
    e: "WANs verbinden Netzwerke über größere geografische Entfernungen."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Was beschreibt SOHO?",
    a: [
      "Small Office / Home Office",
      "Secure Office Hardware Operation",
      "Server Online Host Operation",
      "Small Online Hardware Object"
    ],
    c: 0,
    e: "SOHO steht für Small Office / Home Office und beschreibt kleine Büro- oder Heimarbeitsumgebungen."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Was ist typisch für ein kleines SOHO-Netzwerk?",
    a: [
      "Wenige Geräte und eine überschaubare Netzwerkstruktur",
      "Tausende miteinander verbundene Server",
      "Nur Rechenzentren",
      "Ausschließlich WAN-Verbindungen"
    ],
    c: 0,
    e: "SOHO-Netzwerke sind typischerweise klein und überschaubar."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Was bezeichnet ein Datacenter?",
    a: [
      "Eine Umgebung, in der viele IT-Systeme und Server zentral betrieben werden",
      "Ein einzelner Arbeitsplatz",
      "Ein spezielles Netzwerkkabel",
      "Eine WLAN-Frequenz"
    ],
    c: 0,
    e: "In Datacentern werden viele Server- und IT-Systeme konzentriert betrieben."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Welche Umgebung ist typischerweise auf eine große Anzahl von Servern und IT-Systemen ausgelegt?",
    a: [
      "Datacenter",
      "SOHO",
      "Ein einzelner Arbeitsplatz",
      "Ein privater Druckeranschluss"
    ],
    c: 0,
    e: "Datacenter sind für den Betrieb vieler IT-Systeme ausgelegt."
  }
  // =========================
  // APPLIANCES & DIENSTE
  // =========================

  {
    cat: "Appliances & Dienste",
    q: "Welche Aufgabe hat ein Switch?",
    a: [
      "Er verbindet Geräte innerhalb eines Netzwerks und leitet Daten gezielt weiter",
      "Er vergibt grundsätzlich öffentliche IP-Adressen",
      "Er verschlüsselt jede Datei auf einem Computer",
      "Er ersetzt einen Webbrowser"
    ],
    c: 0,
    e: "Ein Switch verbindet Geräte innerhalb eines Netzwerksegments und leitet Frames gezielt an den passenden Anschluss weiter."
  },
  {
    cat: "Appliances & Dienste",
    q: "Welche Aufgabe hat ein Router?",
    a: [
      "Er verbindet unterschiedliche Netzwerke und leitet Pakete zwischen ihnen weiter",
      "Er arbeitet ausschließlich mit MAC-Adressen innerhalb eines Segments",
      "Er ersetzt einen Server",
      "Er speichert automatisch alle Webseiten"
    ],
    c: 0,
    e: "Ein Router verbindet unterschiedliche Netzwerke und übernimmt die Weiterleitung auf Netzwerkebene."
  },
  {
    cat: "Appliances & Dienste",
    q: "Welche Aufgabe hat eine Firewall?",
    a: [
      "Sie kontrolliert und filtert Netzwerkverkehr nach festgelegten Regeln",
      "Sie ersetzt jedes Netzwerkkabel",
      "Sie vergibt automatisch alle MAC-Adressen",
      "Sie dient ausschließlich zum Drucken"
    ],
    c: 0,
    e: "Eine Firewall kontrolliert Netzwerkverkehr und kann ihn abhängig von Regeln erlauben oder blockieren."
  },
  {
    cat: "Appliances & Dienste",
    q: "Welche Aufgabe hat DHCP?",
    a: [
      "Netzwerkgeräte automatisch mit Netzwerkkonfigurationen versorgen",
      "Webseiten verschlüsseln",
      "MAC-Adressen in Ethernet-Frames speichern",
      "Dateien komprimieren"
    ],
    c: 0,
    e: "DHCP kann Geräten automatisch Netzwerkparameter wie eine IP-Adresse zuweisen."
  },
  {
    cat: "Appliances & Dienste",
    q: "Welche Aufgabe hat DNS?",
    a: [
      "Namen in Netzwerkadressen bzw. IP-Adressen auflösen",
      "Netzwerkkabel testen",
      "Daten ausschließlich verschlüsseln",
      "Frames innerhalb eines Switches sortieren"
    ],
    c: 0,
    e: "DNS ermöglicht beispielsweise die Auflösung eines Hostnamens in eine IP-Adresse."
  },
  {
    cat: "Appliances & Dienste",
    q: "Wofür wird ein VPN eingesetzt?",
    a: [
      "Für eine geschützte bzw. logisch private Verbindung über ein fremdes Netzwerk",
      "Zum Ersetzen einer Netzwerkkarte",
      "Zum Erstellen von MAC-Adressen",
      "Zum direkten Anschließen eines Monitors"
    ],
    c: 0,
    e: "Ein VPN kann eine geschützte Verbindung über ein nicht vertrauenswürdiges oder öffentliches Netzwerk ermöglichen."
  },
  {
    cat: "Appliances & Dienste",
    q: "Was beschreibt QoS im Netzwerkbereich?",
    a: [
      "Quality of Service – die gezielte Behandlung bzw. Priorisierung bestimmter Datenströme",
      "Quick Online Server",
      "Query Operating System",
      "Quality of Storage"
    ],
    c: 0,
    e: "QoS steht für Quality of Service und kann dazu genutzt werden, bestimmten Datenverkehr bevorzugt zu behandeln."
  },
  {
    cat: "Appliances & Dienste",
    q: "Welches Gerät arbeitet typischerweise auf der Datenübertragungsebene und verwendet MAC-Adressen zur Weiterleitung?",
    a: [
      "Switch",
      "Router",
      "DNS-Server",
      "DHCP-Server"
    ],
    c: 0,
    e: "Ein Switch arbeitet auf Layer 2 und nutzt MAC-Adressen für die lokale Weiterleitung."
  },
  {
    cat: "Appliances & Dienste",
    q: "Welches Gerät ist typisch für die Verbindung unterschiedlicher IP-Netzwerke?",
    a: [
      "Router",
      "Switch",
      "Access Point",
      "Patchpanel"
    ],
    c: 0,
    e: "Router übernehmen die Weiterleitung zwischen unterschiedlichen Netzwerken auf Layer 3."
  },
  {
    cat: "Appliances & Dienste",
    q: "Welche Kombination enthält ausschließlich typische Netzwerkdienste?",
    a: [
      "DHCP und DNS",
      "Switch und Router",
      "Firewall und Switch",
      "Router und Access Point"
    ],
    c: 0,
    e: "DHCP und DNS sind Netzwerkdienste. Switch, Router und Firewall sind Netzwerkgeräte bzw. Appliances."
  },
  {
    cat: "Appliances & Dienste",
    q: "Ein Gerät soll automatisch eine IP-Konfiguration erhalten. Welcher Dienst ist dafür besonders relevant?",
    a: [
      "DHCP",
      "DNS",
      "HTTP",
      "QoS"
    ],
    c: 0,
    e: "DHCP stellt Netzwerkgeräten automatisch Konfigurationsinformationen bereit."
  },
  {
    cat: "Appliances & Dienste",
    q: "Ein Benutzer gibt einen Hostnamen ein und möchte die zugehörige IP-Adresse ermitteln. Welcher Dienst wird dafür verwendet?",
    a: [
      "DNS",
      "DHCP",
      "VPN",
      "QoS"
    ],
    c: 0,
    e: "DNS übernimmt die Namensauflösung und kann Hostnamen in IP-Adressen auflösen."
  },

  // =========================
  // OSI-GRUNDLAGEN
  // =========================

  {
    cat: "OSI-Grundlagen",
    q: "Wie viele Schichten besitzt das OSI-Modell?",
    a: [
      "7",
      "4",
      "5",
      "8"
    ],
    c: 0,
    e: "Das OSI-Referenzmodell besteht aus sieben Schichten."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Schicht ist die unterste Schicht des OSI-Modells?",
    a: [
      "Layer 1 – Physical",
      "Layer 2 – Data Link",
      "Layer 3 – Network",
      "Layer 7 – Application"
    ],
    c: 0,
    e: "Layer 1 ist die Physical Layer und beschreibt die physische Übertragung von Bits."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Aufgabe hat OSI Layer 1?",
    a: [
      "Übertragung von Bits als physikalische Signale",
      "Routing zwischen Netzwerken",
      "Adressierung mit Ports",
      "Bereitstellung von Webanwendungen"
    ],
    c: 0,
    e: "Die Physical Layer beschäftigt sich mit der Übertragung von Bits als physische Signale."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Aufgabe gehört zu OSI Layer 2?",
    a: [
      "Lokale Adressierung und Weiterleitung innerhalb eines Netzwerksegments",
      "Routing zwischen verschiedenen Netzwerken",
      "Verschlüsselung von Anwendungen",
      "Verwaltung von Sitzungen"
    ],
    c: 0,
    e: "Layer 2 übernimmt unter anderem lokale Adressierung und die Weiterleitung innerhalb eines Segments."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Aufgabe gehört zu OSI Layer 3?",
    a: [
      "Logische Adressierung und Routing",
      "Übertragung einzelner Bits",
      "Verwaltung von Sitzungen",
      "Darstellung und Kompression von Daten"
    ],
    c: 0,
    e: "Die Network Layer übernimmt logische Adressierung und Routing."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Aufgabe gehört zu OSI Layer 4?",
    a: [
      "Ende-zu-Ende-Übertragung und Portadressierung",
      "Physische Übertragung",
      "Lokale MAC-Adressierung",
      "Darstellung von Datenformaten"
    ],
    c: 0,
    e: "Die Transport Layer ermöglicht Ende-zu-Ende-Kommunikation und verwendet Portnummern."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Aufgabe hat die Session Layer?",
    a: [
      "Sitzungen zwischen Kommunikationspartnern aufbauen und verwalten",
      "Bits über ein Kabel übertragen",
      "IP-Pakete routen",
      "MAC-Adressen verwalten"
    ],
    c: 0,
    e: "Layer 5 beschäftigt sich mit dem Aufbau und der Verwaltung von Sitzungen."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Aufgabe hat die Presentation Layer?",
    a: [
      "Datenformatumwandlung, Kompression und Verschlüsselung",
      "Routing von IP-Paketen",
      "Weiterleitung von Ethernet-Frames",
      "Vergabe von IP-Adressen"
    ],
    c: 0,
    e: "Layer 6 kümmert sich unter anderem um Darstellung, Formatumwandlung, Kompression und Verschlüsselung."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Aufgabe hat die Application Layer?",
    a: [
      "Schnittstelle für Anwendungen und Netzwerkdienste",
      "Übertragung von Bits",
      "Routing zwischen Routern",
      "Weiterleitung anhand von MAC-Adressen"
    ],
    c: 0,
    e: "Layer 7 stellt Funktionen für Anwendungen bereit, beispielsweise im Umfeld von Web, Mail oder Verzeichnisdiensten."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Zuordnung ist korrekt?",
    a: [
      "Layer 3 = Network Layer",
      "Layer 3 = Physical Layer",
      "Layer 3 = Application Layer",
      "Layer 3 = Session Layer"
    ],
    c: 0,
    e: "Layer 3 des OSI-Modells ist die Network Layer."
  },

  // =========================
  // KAPSELUNG & PDU
  // =========================

  {
    cat: "Kapselung & PDU",
    q: "Was bedeutet Kapselung im Netzwerk?",
    a: [
      "Jede Schicht ergänzt die Daten um für sie relevante Informationen",
      "Alle Netzwerkdaten werden gelöscht",
      "Nur die Anwendung darf Daten verändern",
      "Ein Router entfernt grundsätzlich alle Header"
    ],
    c: 0,
    e: "Bei der Kapselung werden beim Durchlaufen der Schichten zusätzliche Informationen wie Header hinzugefügt."
  },
  {
    cat: "Kapselung & PDU",
    q: "Was passiert bei der Entkapselung?",
    a: [
      "Die empfangende Seite verarbeitet und entfernt schichtweise die jeweiligen Informationen",
      "Die Daten werden erneut zufällig gemischt",
      "Alle Daten werden verworfen",
      "Der Sender erhält eine neue MAC-Adresse"
    ],
    c: 0,
    e: "Bei der Entkapselung werden die Informationen der einzelnen Schichten schrittweise interpretiert und entfernt."
  },
  {
    cat: "Kapselung & PDU",
    q: "Wie heißt die PDU der Transportschicht bei TCP?",
    a: [
      "Segment",
      "Frame",
      "Packet",
      "Bit"
    ],
    c: 0,
    e: "Bei TCP wird die PDU der Transportschicht als Segment bezeichnet."
  },
  {
    cat: "Kapselung & PDU",
    q: "Wie wird die PDU der Netzwerkschicht typischerweise bezeichnet?",
    a: [
      "Packet bzw. Datagram",
      "Frame",
      "Segment",
      "Bit"
    ],
    c: 0,
    e: "Auf Layer 3 wird die PDU als Packet bzw. Datagram bezeichnet."
  },
  {
    cat: "Kapselung & PDU",
    q: "Wie heißt die PDU der Data-Link-Schicht?",
    a: [
      "Frame",
      "Segment",
      "Packet",
      "Bit"
    ],
    c: 0,
    e: "Die PDU der Data-Link-Schicht ist ein Frame."
  },
  {
    cat: "Kapselung & PDU",
    q: "Was wird auf der Physical Layer übertragen?",
    a: [
      "Bits als physische Signale",
      "Frames als logische Einheiten",
      "IP-Adressen als Dateien",
      "TCP-Segmente als Anwendungen"
    ],
    c: 0,
    e: "Auf der Physical Layer werden Bits in Form physischer Signale übertragen."
  },
  {
    cat: "Kapselung & PDU",
    q: "Welche Bestandteile kann eine PDU enthalten?",
    a: [
      "Header, Nutzlast und teilweise Trailer",
      "Nur einen Header",
      "Nur eine IP-Adresse",
      "Nur einen Port"
    ],
    c: 0,
    e: "PDUs können aus Header, Payload/Nutzlast und je nach Protokoll zusätzlich einem Trailer bestehen."
  },
  {
    cat: "Kapselung & PDU",
    q: "Welche Reihenfolge beschreibt die Kapselung vom Anwendungsprogramm bis zur Übertragung?",
    a: [
      "Daten → TCP-Segment → IP-Paket → Ethernet-Frame → Bits",
      "Bits → Frame → Paket → Segment → Daten",
      "Frame → Bits → Daten → Paket → Segment",
      "IP-Paket → Daten → Frame → Bits → Segment"
    ],
    c: 0,
    e: "Bei der Kapselung werden die Anwendungsdaten schrittweise um die Informationen der unteren Schichten ergänzt."
  },
  {
    cat: "Kapselung & PDU",
    q: "Welche Reihenfolge beschreibt die Entkapselung beim Empfänger?",
    a: [
      "Bits → Ethernet-Frame → IP-Paket → TCP-Segment → Anwendungsdaten",
      "Anwendungsdaten → TCP-Segment → IP-Paket → Frame → Bits",
      "IP-Paket → Bits → Frame → Daten → Segment",
      "Frame → Anwendung → Bits → Segment → Paket"
    ],
    c: 0,
    e: "Der Empfänger verarbeitet die Daten von den unteren Schichten nach oben und entfernt dabei die jeweiligen Header."
  }
  // =========================
  // ADRESSIERUNG & GERÄTE
  // =========================

  {
    cat: "Adressierung & Geräte",
    q: "Wofür wird eine MAC-Adresse hauptsächlich verwendet?",
    a: [
      "Zur lokalen Adressierung innerhalb eines Netzwerksegments",
      "Zum Routing über das Internet",
      "Zur Identifikation einer Anwendung",
      "Zur Verschlüsselung von Webseiten"
    ],
    c: 0,
    e: "MAC-Adressen werden für die lokale Kommunikation innerhalb eines Netzwerksegments verwendet."
  },
  {
    cat: "Adressierung & Geräte",
    q: "Wofür wird eine IP-Adresse hauptsächlich verwendet?",
    a: [
      "Zur logischen Adressierung und zur Weiterleitung zwischen Netzwerken",
      "Nur zur Identifikation einer Netzwerkkarte innerhalb eines Frames",
      "Zur Darstellung von Webseiten",
      "Zur Verschlüsselung von Passwörtern"
    ],
    c: 0,
    e: "IP-Adressen dienen der logischen Adressierung und ermöglichen die Weiterleitung von Paketen zwischen Netzwerken."
  },
  {
    cat: "Adressierung & Geräte",
    q: "Auf welcher OSI-Schicht ist die MAC-Adressierung hauptsächlich angesiedelt?",
    a: [
      "Layer 2 – Data Link",
      "Layer 1 – Physical",
      "Layer 3 – Network",
      "Layer 7 – Application"
    ],
    c: 0,
    e: "MAC-Adressen gehören zur Data-Link-Schicht, also Layer 2."
  },
  {
    cat: "Adressierung & Geräte",
    q: "Auf welcher OSI-Schicht ist die IP-Adressierung hauptsächlich angesiedelt?",
    a: [
      "Layer 3 – Network",
      "Layer 1 – Physical",
      "Layer 2 – Data Link",
      "Layer 6 – Presentation"
    ],
    c: 0,
    e: "IP-Adressen gehören zur Network Layer, also Layer 3."
  },
  {
    cat: "Adressierung & Geräte",
    q: "Was passiert mit der MAC-Adresse bei der Weiterleitung über einen Router?",
    a: [
      "Die MAC-Adressen des jeweiligen lokalen Segments können sich ändern",
      "Die MAC-Adresse bleibt über alle Netzwerke immer identisch",
      "Die IP-Adresse wird durch die MAC-Adresse ersetzt",
      "Alle MAC-Adressen werden gelöscht"
    ],
    c: 0,
    e: "Bei der Weiterleitung über Router wird auf jedem lokalen Segment eine passende MAC-Adressierung verwendet."
  },
  {
    cat: "Adressierung & Geräte",
    q: "Welche Adresse bleibt im beschriebenen Modell bei einer Kommunikation über mehrere Netzwerke grundsätzlich gleich?",
    a: [
      "Die IP-Adresse des Endpunkts",
      "Die MAC-Adresse des ersten Switches",
      "Die MAC-Adresse des ersten Routers",
      "Die Portnummer des Switches"
    ],
    c: 0,
    e: "Im beschriebenen Modell bleibt die IP-Adressierung für die Endpunkte über den Weg grundsätzlich bestehen, während sich die lokale MAC-Adressierung ändern kann."
  },
  {
    cat: "Adressierung & Geräte",
    q: "Welche Aufgabe hat ein Switch im Zusammenhang mit MAC-Adressen?",
    a: [
      "Er verwendet MAC-Adressen, um Frames innerhalb eines Segments gezielt weiterzuleiten",
      "Er verwendet ausschließlich DNS-Namen",
      "Er vergibt öffentliche IP-Adressen",
      "Er verschlüsselt automatisch jede Anwendung"
    ],
    c: 0,
    e: "Ein Switch nutzt MAC-Adressen zur Weiterleitung von Frames innerhalb eines lokalen Netzwerks."
  },
  {
    cat: "Adressierung & Geräte",
    q: "Welche Aufgabe hat ein Router im Zusammenhang mit IP-Adressen?",
    a: [
      "Er nutzt logische Adressen zur Weiterleitung von Paketen zwischen Netzwerken",
      "Er nutzt ausschließlich MAC-Adressen für Routing zwischen Netzwerken",
      "Er ersetzt IP-Adressen durch Portnummern",
      "Er verarbeitet nur physische Signale"
    ],
    c: 0,
    e: "Router arbeiten auf Layer 3 und verwenden logische Adressierung für die Weiterleitung zwischen Netzwerken."
  },

  // =========================
  // PRAXIS & PROTOKOLLE
  // =========================

  {
    cat: "Praxis & Protokolle",
    q: "Was passiert vereinfacht, wenn ein Benutzer eine Webseite über einen Hostnamen aufruft?",
    a: [
      "Zunächst kann der Hostname über DNS in eine IP-Adresse aufgelöst werden",
      "Der Hostname wird direkt in eine MAC-Adresse umgewandelt",
      "Der Browser sendet grundsätzlich nur Bits ohne weitere Informationen",
      "Der Switch übernimmt die DNS-Auflösung"
    ],
    c: 0,
    e: "DNS kann den eingegebenen Hostnamen in die benötigte IP-Adresse auflösen."
  },
  {
    cat: "Praxis & Protokolle",
    q: "Welche Aufgabe hat HTTP?",
    a: [
      "Es dient der Kommunikation zwischen Webbrowser und Webserver",
      "Es vergibt IP-Adressen",
      "Es ersetzt Ethernet",
      "Es übernimmt das Routing zwischen Netzwerken"
    ],
    c: 0,
    e: "HTTP ist ein Protokoll für die Kommunikation im Web, beispielsweise zwischen Browser und Webserver."
  },
  {
    cat: "Praxis & Protokolle",
    q: "Welche Aussage beschreibt HTTPS am besten?",
    a: [
      "Es ermöglicht die geschützte Kommunikation zwischen Webbrowser und Webserver",
      "Es ist ausschließlich ein Routingprotokoll",
      "Es ersetzt DNS vollständig",
      "Es arbeitet ausschließlich auf Layer 1"
    ],
    c: 0,
    e: "HTTPS wird für geschützte Kommunikation im Web verwendet."
  },
  {
    cat: "Praxis & Protokolle",
    q: "Welche Aufgabe hat DNS beim Aufruf einer Webseite?",
    a: [
      "Den Namen des Zielsystems in eine IP-Adresse auflösen",
      "Das Ethernet-Kabel aktivieren",
      "Den Bildschirm des Benutzers ansteuern",
      "Die Tastatureingaben verschlüsseln"
    ],
    c: 0,
    e: "DNS übernimmt die Namensauflösung, damit das Zielsystem anhand seiner IP-Adresse erreicht werden kann."
  },
  {
    cat: "Praxis & Protokolle",
    q: "Welche Aussage beschreibt TCP korrekt?",
    a: [
      "TCP ist ein Transportprotokoll",
      "TCP ist ein Protokoll der Physical Layer",
      "TCP ist ausschließlich ein DNS-Protokoll",
      "TCP ist ein Ethernet-Frame"
    ],
    c: 0,
    e: "TCP gehört zur Transportschicht und ermöglicht Transportkommunikation zwischen Endpunkten."
  },
  {
    cat: "Praxis & Protokolle",
    q: "Welche Rolle spielen Ports bei der Transportkommunikation?",
    a: [
      "Sie ermöglichen die Zuordnung von Daten zu Anwendungen bzw. Diensten",
      "Sie ersetzen die IP-Adresse",
      "Sie bestimmen ausschließlich das Netzwerkkabel",
      "Sie dienen nur zur MAC-Adressierung"
    ],
    c: 0,
    e: "Portnummern helfen dabei, Daten innerhalb eines Systems der passenden Anwendung bzw. dem passenden Dienst zuzuordnen."
  },
  {
    cat: "Praxis & Protokolle",
    q: "Welche Schicht ist für Portadressierung zuständig?",
    a: [
      "Layer 4 – Transport",
      "Layer 2 – Data Link",
      "Layer 3 – Network",
      "Layer 7 – Application"
    ],
    c: 0,
    e: "Portadressierung gehört zur Transportschicht, also Layer 4."
  },
  {
    cat: "Praxis & Protokolle",
    q: "Welche Reihenfolge passt zu einem vereinfachten Webseitenaufruf?",
    a: [
      "Name auflösen → Ziel-IP ermitteln → Transport- und Netzwerkkommunikation → Webdaten übertragen",
      "MAC-Adresse löschen → Monitor einschalten → DNS deaktivieren",
      "IP-Adresse durch einen Dateinamen ersetzen → Kabel entfernen → Webseite anzeigen",
      "Nur Layer 1 verwenden → Anwendung direkt ausführen"
    ],
    c: 0,
    e: "Beim Webseitenaufruf spielen unter anderem Namensauflösung, IP-Kommunikation, Transportkommunikation und die Webanwendung zusammen."
  },

  // =========================
  // TCP/IP & OSI
  // =========================

  {
    cat: "TCP/IP & OSI",
    q: "Wie viele Schichten hat das TCP/IP-Modell in der hier verwendeten Darstellung?",
    a: [
      "4",
      "7",
      "5",
      "3"
    ],
    c: 0,
    e: "Das TCP/IP-Modell wird hier mit vier Schichten dargestellt."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Welche TCP/IP-Schicht entspricht der OSI-Transportschicht?",
    a: [
      "Transport",
      "Internet",
      "Link",
      "Application"
    ],
    c: 0,
    e: "Die TCP/IP-Transportschicht entspricht der OSI-Schicht 4."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Welche TCP/IP-Schicht entspricht der OSI-Network-Layer?",
    a: [
      "Internet",
      "Transport",
      "Application",
      "Link"
    ],
    c: 0,
    e: "Die TCP/IP-Internet-Schicht entspricht der OSI-Network-Layer."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Welche TCP/IP-Schicht fasst OSI Layer 1 und Layer 2 zusammen?",
    a: [
      "Link",
      "Internet",
      "Transport",
      "Application"
    ],
    c: 0,
    e: "Die TCP/IP-Link-Schicht fasst die Funktionen von OSI Layer 1 und Layer 2 zusammen."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Welche TCP/IP-Schicht fasst OSI Layer 5 bis 7 zusammen?",
    a: [
      "Application",
      "Transport",
      "Internet",
      "Link"
    ],
    c: 0,
    e: "Die TCP/IP-Application-Schicht fasst die oberen OSI-Schichten 5, 6 und 7 zusammen."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Welche Zuordnung ist richtig?",
    a: [
      "TCP/IP Application = OSI Layer 5, 6 und 7",
      "TCP/IP Application = OSI Layer 1 und 2",
      "TCP/IP Transport = OSI Layer 1",
      "TCP/IP Link = OSI Layer 7"
    ],
    c: 0,
    e: "Die TCP/IP-Application-Schicht bündelt die Funktionen der OSI-Schichten 5 bis 7."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Was ist das OSI-Modell hauptsächlich?",
    a: [
      "Ein konzeptionelles Referenzmodell zur Beschreibung von Netzwerkkommunikation",
      "Ein einzelnes Netzwerkprotokoll",
      "Ein Betriebssystem",
      "Ein physisches Netzwerkgerät"
    ],
    c: 0,
    e: "OSI dient als Referenzmodell, mit dem Netzwerkkommunikation strukturiert und beschrieben werden kann."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Was ist TCP/IP im Vergleich zum OSI-Modell?",
    a: [
      "Eine praktisch eingesetzte Protokollfamilie bzw. ein Protokollstapel",
      "Nur ein theoretisches Diagramm ohne Protokolle",
      "Ein einzelner Switch",
      "Eine Verschlüsselungsmethode"
    ],
    c: 0,
    e: "TCP/IP beschreibt eine praktisch eingesetzte Protokollfamilie und deren Schichten."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Welche Aussage über OSI und TCP/IP ist richtig?",
    a: [
      "OSI dient vor allem als Referenzmodell, TCP/IP ist praktisch als Protokollfamilie umgesetzt",
      "OSI und TCP/IP sind exakt dasselbe Modell",
      "TCP/IP besitzt sieben Schichten und OSI vier",
      "OSI ist ausschließlich ein Webprotokoll"
    ],
    c: 0,
    e: "OSI ist ein Referenzmodell, während TCP/IP eine praktisch eingesetzte Protokollfamilie darstellt."
  }
  // =========================
  // WEITERE PRÜFUNGSFRAGEN
  // =========================

  {
    cat: "Netzwerk-Grundlagen",
    q: "Welche Aussage beschreibt ein Endsystem korrekt?",
    a: [
      "Ein Endsystem steht am Rand der Kommunikation und sendet oder empfängt Anwendungsdaten",
      "Ein Endsystem leitet ausschließlich Pakete zwischen Netzwerken weiter",
      "Ein Endsystem ist immer ein Switch",
      "Ein Endsystem arbeitet nur auf Layer 1"
    ],
    c: 0,
    e: "Endsysteme wie PCs oder Server sind die Quelle oder das Ziel einer Kommunikation."
  },
  {
    cat: "Netzwerk-Grundlagen",
    q: "Welche Geräte können in einem Netzwerk als Zwischensysteme eingesetzt werden?",
    a: [
      "Switches und Router",
      "Nur Drucker",
      "Nur Smartphones",
      "Nur Tastaturen"
    ],
    c: 0,
    e: "Switches und Router vermitteln Daten zwischen Netzwerkgeräten."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Welche Netzwerkgröße passt typischerweise zu einem LAN?",
    a: [
      "Ein Gebäude oder ein begrenztes lokales Gebiet",
      "Die gesamte Welt",
      "Ausschließlich mehrere Kontinente",
      "Nur eine einzelne Anwendung"
    ],
    c: 0,
    e: "Ein LAN deckt typischerweise einen lokal begrenzten Bereich ab."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Was ist ein Enterprise-LAN?",
    a: [
      "Ein umfangreicheres lokales Netzwerk für eine Organisation oder ein Unternehmen",
      "Ein einzelner Heimcomputer",
      "Ein ausschließlich drahtloser Drucker",
      "Ein einzelnes Netzwerkkabel"
    ],
    c: 0,
    e: "Ein Enterprise-LAN ist für größere organisatorische Umgebungen ausgelegt."
  },
  {
    cat: "Server & Netzwerktypen",
    q: "Was beschreibt ein CAN im Zusammenhang mit Netzwerken?",
    a: [
      "Ein Campus Area Network zur Vernetzung mehrerer lokaler Bereiche eines Campus",
      "Ein ausschließlich privates Heimnetzwerk",
      "Ein einzelner Computer",
      "Ein Internetbrowser"
    ],
    c: 0,
    e: "CAN steht für Campus Area Network und verbindet mehrere lokale Bereiche innerhalb eines Campus."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Schicht des OSI-Modells ist für Routing zuständig?",
    a: [
      "Layer 3 – Network",
      "Layer 1 – Physical",
      "Layer 2 – Data Link",
      "Layer 6 – Presentation"
    ],
    c: 0,
    e: "Routing und logische Adressierung gehören zur Network Layer."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche Schicht ist für die lokale Weiterleitung innerhalb eines Netzwerksegments zuständig?",
    a: [
      "Layer 2 – Data Link",
      "Layer 3 – Network",
      "Layer 4 – Transport",
      "Layer 7 – Application"
    ],
    c: 0,
    e: "Layer 2 übernimmt unter anderem die lokale Weiterleitung innerhalb eines Netzwerksegments."
  },
  {
    cat: "OSI-Grundlagen",
    q: "Welche OSI-Schicht stellt eine Schnittstelle für Anwendungen bereit?",
    a: [
      "Layer 7 – Application",
      "Layer 1 – Physical",
      "Layer 2 – Data Link",
      "Layer 3 – Network"
    ],
    c: 0,
    e: "Die Application Layer stellt Funktionen und Schnittstellen für Anwendungen bereit."
  },
  {
    cat: "Kapselung & PDU",
    q: "Was wird beim Durchlaufen einer Schicht bei der Kapselung typischerweise hinzugefügt?",
    a: [
      "Kontrollinformationen wie ein Header",
      "Ein neuer Monitor",
      "Eine neue Netzwerkkarte",
      "Ein Benutzerkonto"
    ],
    c: 0,
    e: "Schichten ergänzen die Daten um Informationen, die für ihre jeweilige Aufgabe benötigt werden."
  },
  {
    cat: "Kapselung & PDU",
    q: "Welche PDU gehört zur Data-Link-Schicht?",
    a: [
      "Frame",
      "Segment",
      "Packet",
      "Daten"
    ],
    c: 0,
    e: "Die PDU der Data-Link-Schicht wird als Frame bezeichnet."
  },
  {
    cat: "Kapselung & PDU",
    q: "Welche PDU gehört zur Network Layer?",
    a: [
      "Packet bzw. Datagram",
      "Frame",
      "Segment",
      "Bit"
    ],
    c: 0,
    e: "Die Network Layer verwendet als PDU ein Packet bzw. Datagram."
  },
  {
    cat: "Kapselung & PDU",
    q: "Welche PDU gehört zur Transport Layer bei TCP?",
    a: [
      "Segment",
      "Frame",
      "Packet",
      "Bit"
    ],
    c: 0,
    e: "Bei TCP wird die PDU der Transportschicht als Segment bezeichnet."
  },
  {
    cat: "Adressierung & Geräte",
    q: "Welche Kombination ordnet die Adressen korrekt zu?",
    a: [
      "MAC = lokal auf Layer 2, IP = logisch auf Layer 3",
      "MAC = Layer 7, IP = Layer 1",
      "MAC = Transport Layer, IP = Application Layer",
      "MAC und IP gehören ausschließlich zu Layer 1"
    ],
    c: 0,
    e: "MAC-Adressen gehören zur lokalen Layer-2-Kommunikation, IP-Adressen zur logischen Layer-3-Kommunikation."
  },
  {
    cat: "Adressierung & Geräte",
    q: "Welche Information wird durch eine Portnummer hauptsächlich bestimmt?",
    a: [
      "Welche Anwendung bzw. welcher Dienst die Daten erhalten soll",
      "Welches Kabel verwendet wird",
      "Welche MAC-Adresse ein Switch besitzt",
      "Welche physische Spannung verwendet wird"
    ],
    c: 0,
    e: "Ports ermöglichen auf der Transportschicht die Zuordnung zu Anwendungen bzw. Diensten."
  },
  {
    cat: "Praxis & Protokolle",
    q: "Welche Protokollart wird beim Aufruf einer Webseite typischerweise für die Webkommunikation verwendet?",
    a: [
      "HTTP bzw. HTTPS",
      "DHCP",
      "DNS ausschließlich",
      "Ethernet ausschließlich"
    ],
    c: 0,
    e: "HTTP und HTTPS sind Protokolle für Webkommunikation."
  },
  {
    cat: "Praxis & Protokolle",
    q: "Was kann die Ursache sein, wenn ein Hostname nicht in eine IP-Adresse aufgelöst werden kann?",
    a: [
      "Ein Problem bei der DNS-Auflösung",
      "Ein defekter Monitor",
      "Eine falsche Tastaturbelegung",
      "Ein fehlender Druckertreiber"
    ],
    c: 0,
    e: "Wenn ein Hostname nicht aufgelöst werden kann, liegt die Ursache beispielsweise beim DNS-Dienst oder der DNS-Kommunikation."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Welche TCP/IP-Schicht enthält die Funktionen der OSI-Schichten 1 und 2?",
    a: [
      "Link",
      "Internet",
      "Transport",
      "Application"
    ],
    c: 0,
    e: "Die Link-Schicht des TCP/IP-Modells fasst OSI Physical und Data Link zusammen."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Welche TCP/IP-Schicht enthält die Funktionen der OSI-Schicht 3?",
    a: [
      "Internet",
      "Link",
      "Transport",
      "Application"
    ],
    c: 0,
    e: "Die Internet-Schicht entspricht der OSI-Network-Layer."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Welche TCP/IP-Schicht enthält die Funktionen der OSI-Schicht 4?",
    a: [
      "Transport",
      "Internet",
      "Link",
      "Application"
    ],
    c: 0,
    e: "Die TCP/IP-Transportschicht entspricht der OSI-Transportschicht."
  },
  {
    cat: "TCP/IP & OSI",
    q: "Ein Techniker spricht von einem „Layer-3-Problem“. Was ist damit im OSI-Kontext gemeint?",
    a: [
      "Ein Problem auf der Network Layer, beispielsweise bei IP-Adressierung oder Routing",
      "Ein Problem ausschließlich mit dem Netzwerkkabel",
      "Ein Problem mit einer Anwendung auf Layer 7",
      "Ein Problem mit der Darstellung von Daten auf Layer 6"
    ],
    c: 0,
    e: "Layer 3 ist die Network Layer. Typische Themen sind IP-Adressierung und Routing."
  },

  // =========================
  // ENDE DES FRAGENPOOLS
  // =========================

];