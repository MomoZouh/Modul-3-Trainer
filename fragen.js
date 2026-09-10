// Fragenpool aus den beiden Lernscripten
// Keine Verweise auf "Präsentationen" oder "Lernscripte" in den Fragen.
// script.js mischt die Antwortmöglichkeiten bei jedem Test neu.

const quizData = [
  {
    "id": "q001",
    "eduBite": "eduBite 1",
    "cat": "Netzwerk-Grundlagen",
    "q": "Welche Aussage beschreibt ein Netzwerk am treffendsten?",
    "a": [
      "Mindestens zwei Systeme tauschen über ein Medium Daten nach gemeinsamen Regeln aus.",
      "Mehrere Programme laufen auf demselben Rechner und teilen sich Speicher.",
      "Ein einzelner Rechner stellt Daten für mehrere lokale Benutzer bereit.",
      "Mehrere Kabel werden ohne gemeinsame Kommunikationsregeln miteinander verbunden."
    ],
    "c": 0,
    "e": "Ein Netzwerk besteht aus mindestens zwei Systemen, einem Übertragungsmedium und gemeinsamen Protokollen."
  },
  {
    "id": "q002",
    "eduBite": "eduBite 1",
    "cat": "Netzwerk-Grundlagen",
    "q": "Was bezeichnet der Begriff „Knoten“ in einem Netzwerk?",
    "a": [
      "Eine physisch vorhandene Komponente mit Netzwerkschnittstelle, die Daten verarbeitet.",
      "Eine reine Kabelstrecke zwischen zwei angeschlossenen Geräten.",
      "Ein Protokoll, das Regeln für die Datenübertragung festlegt.",
      "Eine logische Sitzung zwischen zwei laufenden Anwendungen."
    ],
    "c": 0,
    "e": "Ein Knoten ist eine physisch vorhandene Netzwerkkomponente mit mindestens einer Netzwerkschnittstelle."
  },
  {
    "id": "q003",
    "eduBite": "eduBite 1",
    "cat": "Netzwerk-Grundlagen",
    "q": "Was ist bei einem Netzwerk unter einem Link zu verstehen?",
    "a": [
      "Die Kommunikationsstrecke zwischen zwei Knoten.",
      "Die Anwendung, die Daten über das Netzwerk bereitstellt.",
      "Die Adresse eines einzelnen Endgeräts.",
      "Die Tabelle, die ein Router für seine Weiterleitung nutzt."
    ],
    "c": 0,
    "e": "Ein Link ist die physische oder logische Kommunikationsstrecke zwischen zwei Knoten."
  },
  {
    "id": "q004",
    "eduBite": "eduBite 1",
    "cat": "Netzwerk-Grundlagen",
    "q": "Welches Gerät ist in der beschriebenen Funktion ein Endsystem?",
    "a": [
      "Ein Netzwerkdrucker, der Druckdaten selbst verarbeitet.",
      "Ein Switch, der Frames zwischen Geräten weiterleitet.",
      "Ein Router, der Pakete zwischen Netzwerken vermittelt.",
      "Ein Repeater, der ein Signal aufbereitet."
    ],
    "c": 0,
    "e": "Ein Endsystem erzeugt oder konsumiert Daten. Ein Netzwerkdrucker gehört dazu."
  },
  {
    "id": "q005",
    "eduBite": "eduBite 1",
    "cat": "Netzwerk-Grundlagen",
    "q": "Welche Eigenschaft kennzeichnet ein Zwischensystem?",
    "a": [
      "Es leitet Daten zwischen Endsystemen weiter.",
      "Es stellt immer die eigentliche Anwendung für Benutzer bereit.",
      "Es muss die übertragenen Anwendungsdaten vollständig verstehen.",
      "Es ist grundsätzlich ein physischer Server mit mehreren Festplatten."
    ],
    "c": 0,
    "e": "Zwischensysteme vermitteln Daten zwischen Endsystemen und müssen die Anwendungsebene nicht verstehen."
  },
  {
    "id": "q006",
    "eduBite": "eduBite 1",
    "cat": "Netzwerk-Grundlagen",
    "q": "Zwei Geräte sind direkt mit einem einzigen Kabel verbunden. Welche Bezeichnung passt?",
    "a": [
      "Punkt-zu-Punkt-Link",
      "Virtuelle Appliance",
      "Client-Server-Rolle",
      "Netzwerksegmentierung"
    ],
    "c": 0,
    "e": "Eine direkte Verbindung zwischen zwei Knoten über einen einzelnen Link ist ein Punkt-zu-Punkt-Link."
  },
  {
    "id": "q007",
    "eduBite": "eduBite 1",
    "cat": "Netzwerk-Grundlagen",
    "q": "Ein Rechner leitet Daten zwischen zwei Netzwerksegmenten weiter. Welche Rolle kann er dadurch übernehmen?",
    "a": [
      "Zwischensystem",
      "Endsystem",
      "Nur Serverdienst",
      "Nur Peripheriegerät"
    ],
    "c": 0,
    "e": "Die Rolle hängt von der konkreten Funktion ab. Durch Weiterleitung zwischen Segmenten kann ein Rechner wie ein Router als Zwischensystem arbeiten."
  },
  {
    "id": "q008",
    "eduBite": "eduBite 1",
    "cat": "Netzwerk-Grundlagen",
    "q": "Welche Aussage zu Endsystemen und Zwischensystemen trifft zu?",
    "a": [
      "Die Rolle ergibt sich aus der Funktion in der jeweiligen Kommunikation.",
      "Die Bauform entscheidet immer eindeutig über die Rolle.",
      "Nur Server können Endsysteme sein.",
      "Ein Gerät kann niemals unterschiedliche Rollen übernehmen."
    ],
    "c": 0,
    "e": "Die Einordnung richtet sich nach der konkreten Funktion, nicht allein nach der Bauform."
  },
  {
    "id": "q009",
    "eduBite": "eduBite 1",
    "cat": "Netzwerk-Grundlagen",
    "q": "Welche Kombination enthält ausschließlich typische Endsysteme?",
    "a": [
      "Notebook, Server, Netzwerkdrucker",
      "Switch, Router, Notebook",
      "Router, Access Point, Server",
      "Repeater, Switch, Drucker"
    ],
    "c": 0,
    "e": "Notebooks, Server und Netzwerkdrucker erzeugen oder konsumieren Daten und sind damit typische Endsysteme."
  },
  {
    "id": "q010",
    "eduBite": "eduBite 1",
    "cat": "Client-Server & P2P",
    "q": "Welche Rolle hat ein Client in einer Client-Server-Beziehung?",
    "a": [
      "Er fordert einen bereitgestellten Dienst an und nutzt ihn.",
      "Er verwaltet grundsätzlich alle Zugriffsrechte zentral.",
      "Er ersetzt den Server bei jedem Ausfall automatisch.",
      "Er übernimmt die Weiterleitung aller Netzwerkpakete."
    ],
    "c": 0,
    "e": "Ein Client fordert Dienste oder Ressourcen eines Servers an und konsumiert sie."
  },
  {
    "id": "q011",
    "eduBite": "eduBite 1",
    "cat": "Client-Server & P2P",
    "q": "Was ist ein wesentliches Merkmal des Client-Server-Modells?",
    "a": [
      "Dienste und Daten werden zentral bereitgestellt und verwaltet.",
      "Jeder Teilnehmer verwaltet ausschließlich seine eigenen Daten.",
      "Alle Teilnehmer haben immer identische Aufgaben.",
      "Es gibt keine feste Rollenverteilung zwischen den Geräten."
    ],
    "c": 0,
    "e": "Im Client-Server-Modell liegen zentrale Dienste und maßgebliche Daten typischerweise auf Servern."
  },
  {
    "id": "q012",
    "eduBite": "eduBite 1",
    "cat": "Client-Server & P2P",
    "q": "Welche Situation ist ein typisches Beispiel für Client-Server?",
    "a": [
      "Viele Notebooks greifen auf einen zentralen Dateiserver zu.",
      "Mehrere Rechner geben ihre Ordner direkt gegenseitig frei.",
      "Jedes Gerät speichert nur seine eigene lokale Konfiguration.",
      "Ein Switch verbindet mehrere Geräte innerhalb eines Segments."
    ],
    "c": 0,
    "e": "Viele Clients greifen bei Client-Server auf einen zentral bereitgestellten Dienst wie eine Dateifreigabe zu."
  },
  {
    "id": "q013",
    "eduBite": "eduBite 1",
    "cat": "Client-Server & P2P",
    "q": "Welcher Vorteil entsteht durch zentrale Datenhaltung?",
    "a": [
      "Datensicherungen lassen sich zentral organisieren.",
      "Jeder Teilnehmer benötigt einen eigenen Server.",
      "Ein einzelner Serverausfall betrifft keine Clients.",
      "Zugriffsrechte müssen auf jedem Client separat gepflegt werden."
    ],
    "c": 0,
    "e": "Zentrale Datenhaltung erleichtert die Datensicherung, weil die maßgeblichen Daten an einer zentralen Stelle liegen."
  },
  {
    "id": "q014",
    "eduBite": "eduBite 1",
    "cat": "Client-Server & P2P",
    "q": "Was ist ein Single Point of Failure im Client-Server-Modell?",
    "a": [
      "Ein zentraler Server, dessen Ausfall abhängige Dienste für viele Clients beendet.",
      "Ein einzelner Client, dessen Ausfall alle anderen Geräte abschaltet.",
      "Ein zusätzlicher Switch, der nur für redundante Verbindungen eingesetzt wird.",
      "Ein lokaler Link, der ausschließlich zwei gleichberechtigte Clients verbindet."
    ],
    "c": 0,
    "e": "Ein zentraler Server kann zum Single Point of Failure werden, wenn alle Clients von seinen Diensten abhängen."
  },
  {
    "id": "q015",
    "eduBite": "eduBite 1",
    "cat": "Client-Server & P2P",
    "q": "Was kennzeichnet ein Peer-to-Peer-Netzwerk?",
    "a": [
      "Teilnehmer können gleichzeitig Ressourcen anbieten und nutzen.",
      "Ein zentraler Server verwaltet alle Freigaben und Benutzerkonten.",
      "Alle Daten müssen auf einem einzigen Dateiserver liegen.",
      "Nur der Administrator darf Ressourcen zwischen den Teilnehmern freigeben."
    ],
    "c": 0,
    "e": "Bei P2P sind die Teilnehmer grundsätzlich gleichberechtigt und können Anbieter und Nutzer von Ressourcen sein."
  },
  {
    "id": "q016",
    "eduBite": "eduBite 1",
    "cat": "Client-Server & P2P",
    "q": "Warum wird P2P bei kleinen Gruppen häufig eingesetzt?",
    "a": [
      "Es benötigt keine dedizierte Serverhardware.",
      "Es bietet immer eine zentrale Sicherheitsstrategie.",
      "Es skaliert bei Tausenden Teilnehmern ohne zusätzlichen Aufwand.",
      "Es ersetzt die lokale Verwaltung von Freigaben vollständig."
    ],
    "c": 0,
    "e": "P2P kann mit geringem finanziellen und organisatorischen Aufwand ohne dedizierte Serverhardware aufgebaut werden."
  },
  {
    "id": "q017",
    "eduBite": "eduBite 1",
    "cat": "Client-Server & P2P",
    "q": "Welcher Nachteil wird bei P2P mit wachsender Teilnehmerzahl besonders relevant?",
    "a": [
      "Die Verwaltung von Freigaben und Rechten wird zunehmend unübersichtlich.",
      "Ein einzelner zentraler Server wird zum zwingenden Ausfallpunkt.",
      "Alle Teilnehmer müssen dieselbe Hardware verwenden.",
      "Die Kommunikation zwischen den Rechnern wird grundsätzlich unmöglich."
    ],
    "c": 0,
    "e": "Ohne zentrale Verwaltung wird die Koordination bei vielen Teilnehmern zunehmend unübersichtlich."
  },
  {
    "id": "q018",
    "eduBite": "eduBite 1",
    "cat": "Client-Server & P2P",
    "q": "Was unterscheidet strukturierte von unstrukturierten P2P-Netzen?",
    "a": [
      "Strukturierte P2P-Netze ermöglichen gezieltere Anfragen über ein festgelegtes Verfahren.",
      "Strukturierte P2P-Netze benötigen immer einen zentralen Dateiserver.",
      "Unstrukturierte P2P-Netze speichern alle Ressourcen an einer zentralen Stelle.",
      "Unstrukturierte P2P-Netze können keine Anfragen zwischen Teilnehmern weiterreichen."
    ],
    "c": 0,
    "e": "Strukturierte P2P-Netze organisieren Teilnehmer so, dass Ressourcen gezielter gefunden werden können."
  },
  {
    "id": "q019",
    "eduBite": "eduBite 1",
    "cat": "Server & Netzwerktypen",
    "q": "Nach welchen beiden Kriterien werden Netzwerktypen besonders betrachtet?",
    "a": [
      "Größe und räumliche Reichweite",
      "Anzahl der Benutzer und CPU-Leistung",
      "Hersteller und Betriebssystem",
      "Speicherplatz und Anzahl der Anwendungen"
    ],
    "c": 0,
    "e": "Die Skripte unterscheiden Netzwerktypen vor allem nach Größe und Reichweite."
  },
  {
    "id": "q020",
    "eduBite": "eduBite 1",
    "cat": "Server & Netzwerktypen",
    "q": "Welche Umgebung passt am ehesten zu SOHO?",
    "a": [
      "Ein kleines Büro mit sechs Personen und einem Kombigerät",
      "Ein Konzern mit mehreren tausend Arbeitsplätzen",
      "Ein Rechenzentrum mit tausenden Servern",
      "Ein Verbund mehrerer Standorte über gemietete Leitungen"
    ],
    "c": 0,
    "e": "SOHO steht für Small Office/Home Office und umfasst typischerweise etwa ein bis zehn Personen."
  },
  {
    "id": "q021",
    "eduBite": "eduBite 1",
    "cat": "Server & Netzwerktypen",
    "q": "Was ist typisch für ein SME-Netzwerk?",
    "a": [
      "Mehrere Dutzend Personen und strukturierte Verkabelung",
      "Ein einzelner Router für wenige Geräte",
      "Tausende Server ohne Endnutzer-Clients",
      "Mehrere Länder, die ausschließlich über ein WAN verbunden sind"
    ],
    "c": 0,
    "e": "SME-Netze unterstützen typischerweise mehrere Dutzend Nutzer und nutzen strukturierte Verkabelung."
  },
  {
    "id": "q022",
    "eduBite": "eduBite 1",
    "cat": "Server & Netzwerktypen",
    "q": "Welche Beschreibung passt am besten zu einem Enterprise-LAN?",
    "a": [
      "Hunderte bis Tausende Geräte mit redundanter Infrastruktur",
      "Wenige Geräte in einer Wohnung mit einem Kombirouter",
      "Ausschließlich Server in einem hochverdichteten Rechenzentrum",
      "Mehrere entfernte LANs, die über einen externen Anbieter verbunden werden"
    ],
    "c": 0,
    "e": "Enterprise-LANs umfassen typischerweise Hunderte bis Tausende Geräte und nutzen redundante Infrastruktur."
  },
  {
    "id": "q023",
    "eduBite": "eduBite 1",
    "cat": "Server & Netzwerktypen",
    "q": "Was unterscheidet ein Datacenter-Netzwerk besonders von einem normalen Unternehmens-LAN?",
    "a": [
      "Es beherbergt Server und Speichersysteme statt gewöhnlicher Endnutzer-Clients.",
      "Es besteht ausschließlich aus WLAN-Geräten für Mitarbeitende.",
      "Es verbindet nur kleine Heimnetzwerke miteinander.",
      "Es verwendet grundsätzlich nur einen einzigen Switch."
    ],
    "c": 0,
    "e": "Das beschriebene Datacenter-Netzwerk beherbergt Server und Speichersysteme, keine gewöhnlichen Endnutzer-Clients."
  },
  {
    "id": "q024",
    "eduBite": "eduBite 1",
    "cat": "Server & Netzwerktypen",
    "q": "Welche Aussage beschreibt ein WAN korrekt?",
    "a": [
      "Es verbindet räumlich getrennte Netzwerke über größere Entfernungen.",
      "Es beschränkt sich auf einen einzelnen Bürostandort.",
      "Es besteht nur aus Geräten innerhalb eines Switches.",
      "Es wird immer vollständig von einer einzigen Organisation betrieben."
    ],
    "c": 0,
    "e": "Ein WAN verbindet mehrere räumlich getrennte Netzwerke über größere Entfernungen."
  },
  {
    "id": "q025",
    "eduBite": "eduBite 1",
    "cat": "Server & Netzwerktypen",
    "q": "Warum ist die Betriebsverantwortung für die Unterscheidung von LAN und WAN wichtig?",
    "a": [
      "WAN-Strecken werden typischerweise von externen Netzbetreibern bereitgestellt.",
      "LANs müssen immer über das öffentliche Internet laufen.",
      "WANs dürfen keine Router enthalten.",
      "LANs bestehen ausschließlich aus Funkverbindungen."
    ],
    "c": 0,
    "e": "Bei einem WAN werden verbindende Strecken typischerweise von einem externen Anbieter betrieben."
  },
  {
    "id": "q026",
    "eduBite": "eduBite 1",
    "cat": "Server & Netzwerktypen",
    "q": "Welche Entwicklung beschreibt einen typischen Wachstumspfad eines Unternehmens?",
    "a": [
      "SOHO → SME → Enterprise-LAN",
      "WAN → SOHO → PAN",
      "Datacenter → SOHO → SME",
      "Enterprise-LAN → PAN → SOHO"
    ],
    "c": 0,
    "e": "Das Skript beschreibt SOHO, SME und Enterprise-LAN als idealtypischen Wachstumspfad."
  },
  {
    "id": "q027",
    "eduBite": "eduBite 1",
    "cat": "Server & Netzwerktypen",
    "q": "Welche Umgebung beschreibt ein PAN am besten?",
    "a": [
      "Ein Smartphone mit kabellosen Kopfhörern über kurze Distanz",
      "Mehrere Filialen eines Unternehmens in verschiedenen Ländern",
      "Mehrere Gebäude auf einem großen Firmengelände",
      "Mehrere LANs innerhalb einer Stadt"
    ],
    "c": 0,
    "e": "Ein PAN umfasst nur wenige Meter und verbindet typischerweise ein Gerät mit direkt zugehörigem Zubehör."
  },
  {
    "id": "q028",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Was ist eine Netzwerk-Appliance?",
    "a": [
      "Ein Computer mit eigenem Betriebssystem und einer spezialisierten Netzwerkrolle",
      "Ein beliebiges Benutzerprogramm ohne Netzwerkfunktion",
      "Eine reine Kabelverbindung zwischen zwei Endgeräten",
      "Eine gespeicherte Datei mit Netzwerkkonfigurationen"
    ],
    "c": 0,
    "e": "Eine Appliance ist ein spezialisierter Computer mit eigenem Betriebssystem und eigener Software."
  },
  {
    "id": "q029",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Was unterscheidet eine virtuelle Appliance von einer physischen Appliance?",
    "a": [
      "Sie läuft als Softwareinstanz auf gemeinsam genutzter Hardware.",
      "Sie benötigt grundsätzlich keine Netzwerkschnittstelle.",
      "Sie kann ausschließlich als einzelnes Hardwaregerät betrieben werden.",
      "Sie arbeitet nur auf einem Smartphone mit lokalem Speicher."
    ],
    "c": 0,
    "e": "Eine virtuelle Appliance erfüllt die Funktion als Software, typischerweise als virtuelle Maschine auf einem Hypervisor."
  },
  {
    "id": "q030",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Welche Hauptaufgabe hat ein Switch?",
    "a": [
      "Er verbindet Geräte im selben Segment und leitet anhand von Hardwareadressen weiter.",
      "Er verbindet verschiedene Netzwerke und entscheidet anhand einer Routingtabelle.",
      "Er verschlüsselt automatisch jede Verbindung über das Internet.",
      "Er verteilt Anfragen auf mehrere gleichwertige Server."
    ],
    "c": 0,
    "e": "Ein Switch arbeitet innerhalb eines Segments und leitet Frames anhand physischer Hardwareadressen weiter."
  },
  {
    "id": "q031",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Welche Aufgabe hat ein Router?",
    "a": [
      "Er verbindet unterschiedliche Netzwerke und leitet anhand von Netzwerkadressen weiter.",
      "Er verteilt WLAN-Signale ausschließlich innerhalb eines einzelnen Raums.",
      "Er prüft ausschließlich Dateiinhalte auf Schadsoftware.",
      "Er speichert zentrale Projektdokumente für alle Benutzer."
    ],
    "c": 0,
    "e": "Ein Router verbindet unterschiedliche Netzwerke und nutzt Netzwerkadressen sowie Routinginformationen."
  },
  {
    "id": "q032",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Welche Aufgabe übernimmt eine Firewall?",
    "a": [
      "Sie überwacht und filtert Datenverkehr anhand festgelegter Regeln.",
      "Sie verteilt Daten automatisch auf alle Ports eines Switches.",
      "Sie ersetzt jeden Router in einem Unternehmensnetzwerk.",
      "Sie wandelt Webseiten in Netzwerkadressen um."
    ],
    "c": 0,
    "e": "Eine Firewall kontrolliert Datenverkehr anhand von Regeln und wird häufig an Netzwerkgrenzen eingesetzt."
  },
  {
    "id": "q033",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Wann ist ein Load Balancer besonders sinnvoll?",
    "a": [
      "Wenn Anfragen auf mehrere gleichwertige Server verteilt werden sollen.",
      "Wenn ein einzelnes Notebook erstmals eine Netzwerkadresse benötigt.",
      "Wenn zwei Geräte über ein Kabel direkt verbunden werden.",
      "Wenn ein WLAN-Signal in ein elektrisches Signal umgewandelt wird."
    ],
    "c": 0,
    "e": "Ein Load Balancer verteilt eingehende Anfragen auf mehrere gleichwertige Server."
  },
  {
    "id": "q034",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Welche Aufgabe passt zu einem vorwärtsgerichteten Proxy?",
    "a": [
      "Er vermittelt den Internetzugriff von Clients und kann ihn filtern oder protokollieren.",
      "Er verbindet mehrere Teilnetze anhand einer Routingtabelle.",
      "Er stellt ausschließlich WLAN für mobile Geräte bereit.",
      "Er verteilt Anfragen auf mehrere Backend-Server."
    ],
    "c": 0,
    "e": "Ein Forward Proxy steht auf Clientseite und kann Internetzugriffe zentral filtern, protokollieren oder zwischenspeichern."
  },
  {
    "id": "q035",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Welche Funktion hat ein Wireless Access Point?",
    "a": [
      "Er vermittelt zwischen drahtlosen Endgeräten und dem verkabelten Netzwerk.",
      "Er entscheidet anhand von IP-Adressen über Routen zwischen Netzen.",
      "Er speichert zentrale Dateien für mehrere Clients.",
      "Er verteilt Webanfragen auf eine Gruppe von Servern."
    ],
    "c": 0,
    "e": "Ein Access Point verbindet drahtlose Endgeräte mit dem bestehenden verkabelten Netzwerk."
  },
  {
    "id": "q036",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Welche Aufgabe erfüllt ein VPN?",
    "a": [
      "Es ermöglicht einen verschlüsselten Zugang über ein öffentliches Netz zu einem internen Netzwerk.",
      "Es verteilt Datenpakete auf mehrere Server nach ihrer aktuellen Auslastung.",
      "Es weist jedem Gerät automatisch eine Netzwerkadresse zu.",
      "Es ersetzt die Hardwareadresse eines Geräts durch eine Portnummer."
    ],
    "c": 0,
    "e": "Ein VPN ermöglicht eine verschlüsselte Verbindung über ein öffentliches Netz zu einem internen Netzwerk."
  },
  {
    "id": "q037",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Wozu dient Quality of Service?",
    "a": [
      "Zeitkritische Datenströme können bei Engpässen bevorzugt behandelt werden.",
      "Alle Netzwerkdaten werden unabhängig von ihrer Bedeutung gleich verzögert.",
      "Jedes Gerät erhält dadurch automatisch einen eigenen Server.",
      "Die Funktion ersetzt die Adressierung auf der Netzwerkschicht."
    ],
    "c": 0,
    "e": "QoS kann zeitkritischen Datenverkehr, etwa Sprache oder Video, bei Engpässen bevorzugen."
  },
  {
    "id": "q038",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Welcher Dienst übersetzt für Menschen lesbare Namen in numerische Netzwerkadressen?",
    "a": [
      "Ein Namensauflösungsdienst",
      "Ein Zeitsynchronisationsdienst",
      "Ein Lastverteilungsdienst",
      "Ein Datensicherungsdienst"
    ],
    "c": 0,
    "e": "Der Namensauflösungsdienst übersetzt lesbare Namen in numerische Adressen."
  },
  {
    "id": "q039",
    "eduBite": "eduBite 1",
    "cat": "Appliances & Dienste",
    "q": "Welche Aufgabe hat ein Dienst zur dynamischen Host-Konfiguration?",
    "a": [
      "Er weist Geräten automatisch eine Netzwerkadresse und weitere Parameter zu.",
      "Er verteilt Webanfragen auf mehrere Server.",
      "Er filtert Datenverkehr anhand von Firewall-Regeln.",
      "Er synchronisiert die Uhren aller Netzwerkgeräte."
    ],
    "c": 0,
    "e": "Der Dienst weist neu angeschlossenen Geräten automatisch Netzwerkadressen und weitere Konfigurationsparameter zu."
  },
  {
    "id": "q040",
    "eduBite": "eduBite 1",
    "cat": "OSI-Grundlagen",
    "q": "Welche Reihenfolge der OSI-Schichten ist von unten nach oben korrekt?",
    "a": [
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Data Link, Physical",
      "Physical, Network, Data Link, Transport, Application, Session, Presentation",
      "Data Link, Physical, Network, Transport, Presentation, Session, Application"
    ],
    "c": 0,
    "e": "Die sieben Schichten beginnen bei Physical und enden bei Application."
  },
  {
    "id": "q041",
    "eduBite": "eduBite 1",
    "cat": "OSI-Grundlagen",
    "q": "Welche Kernaufgabe gehört zur Physical-Schicht?",
    "a": [
      "Übertragung von Bits als physisches Signal",
      "Logische Adressierung zwischen Netzwerken",
      "Aufbau und Verwaltung von Sitzungen",
      "Bereitstellung von Anwendungen für Benutzer"
    ],
    "c": 0,
    "e": "Schicht 1 ist für die physische Übertragung von Bits als Signal zuständig."
  },
  {
    "id": "q042",
    "eduBite": "eduBite 1",
    "cat": "OSI-Grundlagen",
    "q": "Welche Aufgabe gehört zur Data-Link-Schicht?",
    "a": [
      "Lokale Adressierung und Weiterleitung innerhalb eines Segments",
      "Routing zwischen verschiedenen Netzwerken",
      "Verwaltung von Dialogen zwischen Anwendungen",
      "Formatumwandlung und Kompression von Daten"
    ],
    "c": 0,
    "e": "Schicht 2 übernimmt lokale Adressierung und Weiterleitung im Segment."
  },
  {
    "id": "q043",
    "eduBite": "eduBite 1",
    "cat": "OSI-Grundlagen",
    "q": "Welche Aufgabe gehört zur Network-Schicht?",
    "a": [
      "Logische Adressierung und Routing zwischen Netzen",
      "Übertragung einzelner Bits über ein Medium",
      "Aufbau einer Sitzung zwischen Anwendungen",
      "Formatierung der Nutzdaten für eine Anwendung"
    ],
    "c": 0,
    "e": "Schicht 3 ist für logische Adressierung und Routing zwischen Netzwerken zuständig."
  },
  {
    "id": "q044",
    "eduBite": "eduBite 1",
    "cat": "OSI-Grundlagen",
    "q": "Welche Aufgabe gehört zur Transport-Schicht?",
    "a": [
      "Ende-zu-Ende-Zustellung, Portadressierung und Zuverlässigkeit",
      "Übertragung von Signalen über Kupfer oder Glasfaser",
      "Lokale Weiterleitung anhand von Hardwareadressen",
      "Darstellung und Kompression von Anwendungsdaten"
    ],
    "c": 0,
    "e": "Schicht 4 übernimmt Ende-zu-Ende-Zustellung, Portadressierung und Zuverlässigkeitsfunktionen."
  },
  {
    "id": "q045",
    "eduBite": "eduBite 1",
    "cat": "OSI-Grundlagen",
    "q": "Welche Aufgabe ist typisch für die Session-Schicht?",
    "a": [
      "Aufbau, Abbau und Verwaltung von Sitzungen",
      "Routing anhand logischer Netzwerkadressen",
      "Weiterleitung von Frames innerhalb eines Segments",
      "Übertragung von Bits als physisches Signal"
    ],
    "c": 0,
    "e": "Schicht 5 verwaltet Sitzungen beziehungsweise Dialoge."
  },
  {
    "id": "q046",
    "eduBite": "eduBite 1",
    "cat": "OSI-Grundlagen",
    "q": "Welche Funktion gehört zur Presentation-Schicht?",
    "a": [
      "Formatumwandlung, Kompression und Verschlüsselung",
      "Routing zwischen verschiedenen Netzwerksegmenten",
      "Weiterleitung anhand von MAC-Adressen",
      "Vergabe von Portnummern für Anwendungen"
    ],
    "c": 0,
    "e": "Schicht 6 behandelt unter anderem Formatumwandlung, Kompression und Verschlüsselung."
  },
  {
    "id": "q047",
    "eduBite": "eduBite 1",
    "cat": "OSI-Grundlagen",
    "q": "Welche Aufgabe hat die Application-Schicht?",
    "a": [
      "Sie stellt die Schnittstelle zu Netzwerkdiensten für Anwendungen bereit.",
      "Sie überträgt elektrische Signale auf dem Übertragungsmedium.",
      "Sie entscheidet über den besten Routerpfad zwischen Netzen.",
      "Sie leitet Frames anhand von Hardwareadressen weiter."
    ],
    "c": 0,
    "e": "Schicht 7 stellt die Schnittstelle für Anwendungen wie Web oder Mail bereit."
  },
  {
    "id": "q048",
    "eduBite": "eduBite 1",
    "cat": "OSI-Grundlagen",
    "q": "Warum ist das OSI-Modell für die Fehlersuche hilfreich?",
    "a": [
      "Probleme lassen sich gezielt einzelnen Funktionsschichten zuordnen.",
      "Es schreibt für jedes Netzwerkgerät eine konkrete Hardware vor.",
      "Es ersetzt alle technischen Netzwerkstandards durch sieben Protokolle.",
      "Es sorgt dafür, dass jedes Netzwerk genau sieben Geräte benötigt."
    ],
    "c": 0,
    "e": "Das Modell unterstützt eine schichtweise Fehlersuche, bei der Probleme gezielt eingegrenzt werden."
  },
  {
    "id": "q049",
    "eduBite": "eduBite 1",
    "cat": "OSI-Grundlagen",
    "q": "Welche Aussage beschreibt das OSI-Modell korrekt?",
    "a": [
      "Es ist ein funktionales Referenzmodell und keine konkrete Protokollsuite.",
      "Es ist eine Sammlung konkreter Kabel- und Steckerstandards.",
      "Es schreibt die genaue Hardware jedes Routers verbindlich vor.",
      "Es ist identisch mit der praktisch eingesetzten TCP/IP-Protokollsuite."
    ],
    "c": 0,
    "e": "OSI beschreibt Funktionen in sieben Schichten und dient als Referenzmodell."
  },
  {
    "id": "q050",
    "eduBite": "eduBite 1",
    "cat": "Kapselung & PDU",
    "q": "Welche Reihenfolge beschreibt die Kapselung von oben nach unten korrekt?",
    "a": [
      "Daten → Segment → Paket → Frame → Bits",
      "Bits → Frame → Paket → Segment → Daten",
      "Daten → Paket → Segment → Bits → Frame",
      "Segment → Daten → Frame → Paket → Bits"
    ],
    "c": 0,
    "e": "Beim Senden wird aus Daten ein Segment, daraus ein Paket, daraus ein Frame und schließlich eine Bitfolge."
  },
  {
    "id": "q051",
    "eduBite": "eduBite 1",
    "cat": "Kapselung & PDU",
    "q": "Welche PDU gehört zur Transportschicht bei TCP?",
    "a": [
      "Segment",
      "Frame",
      "Paket",
      "Bits"
    ],
    "c": 0,
    "e": "Ein TCP-Datenblock auf der Transportschicht wird als Segment bezeichnet."
  },
  {
    "id": "q052",
    "eduBite": "eduBite 1",
    "cat": "Kapselung & PDU",
    "q": "Welche PDU gehört zur Sicherungsschicht?",
    "a": [
      "Frame",
      "Segment",
      "Paket",
      "Daten"
    ],
    "c": 0,
    "e": "Die Sicherungsschicht erzeugt beziehungsweise verarbeitet Frames."
  },
  {
    "id": "q053",
    "eduBite": "eduBite 1",
    "cat": "Kapselung & PDU",
    "q": "Was geschieht bei der Kapselung auf der Transportschicht?",
    "a": [
      "Ein Transport-Header mit unter anderem Portnummern wird ergänzt.",
      "Ein Frame-Trailer wird entfernt und ein Bitstrom erzeugt.",
      "Eine MAC-Adresse wird durch eine IP-Adresse ersetzt.",
      "Die Anwendung wird beendet und neu gestartet."
    ],
    "c": 0,
    "e": "Die Transportschicht ergänzt einen Header mit Informationen wie Quell- und Zielport."
  },
  {
    "id": "q054",
    "eduBite": "eduBite 1",
    "cat": "Kapselung & PDU",
    "q": "Welche Information gehört typischerweise in den Header der Netzwerkschicht?",
    "a": [
      "Logische Quell- und Zieladressen",
      "Die elektrische Spannung eines Kabelsignals",
      "Der Name der geöffneten Browserseite",
      "Die Anzahl der angeschlossenen Switch-Ports"
    ],
    "c": 0,
    "e": "Der Header der Netzwerkschicht enthält die logischen Adressen von Quelle und Ziel."
  },
  {
    "id": "q055",
    "eduBite": "eduBite 1",
    "cat": "Kapselung & PDU",
    "q": "Was passiert bei der Dekapselung auf dem empfangenden System?",
    "a": [
      "Die Header werden schichtweise ausgewertet und entfernt.",
      "Die Daten werden von unten nach oben immer weiter gekapselt.",
      "Jede Schicht fügt dauerhaft einen weiteren Header hinzu.",
      "Das empfangende System überspringt die unteren Schichten vollständig."
    ],
    "c": 0,
    "e": "Beim Empfänger läuft der Vorgang umgekehrt: Header werden ausgewertet und entfernt."
  },
  {
    "id": "q056",
    "eduBite": "eduBite 1",
    "cat": "Kapselung & PDU",
    "q": "Welche Aussage beschreibt die Nutzlast einer PDU?",
    "a": [
      "Sie enthält die vollständige Dateneinheit der darüberliegenden Schicht.",
      "Sie besteht ausschließlich aus dem Header der aktuellen Schicht.",
      "Sie enthält nur die physische Leitung zwischen zwei Geräten.",
      "Sie ist immer identisch mit dem Trailer des Frames."
    ],
    "c": 0,
    "e": "Die Nutzlast enthält aus Sicht der aktuellen Schicht die vollständige PDU der darüberliegenden Schicht."
  },
  {
    "id": "q057",
    "eduBite": "eduBite 1",
    "cat": "Kapselung & PDU",
    "q": "Welche Funktion kann ein Trailer eines Ethernet-Frames übernehmen?",
    "a": [
      "Er kann eine Prüfinformation zur Fehlererkennung enthalten.",
      "Er enthält ausschließlich die Zielportnummer der Anwendung.",
      "Er ersetzt die logische Zieladresse des IP-Pakets.",
      "Er legt fest, welche Anwendung den Frame geöffnet hat."
    ],
    "c": 0,
    "e": "Beim Ethernet-Frame kann der Trailer eine Prüfsumme zur Erkennung beschädigter Frames enthalten."
  },
  {
    "id": "q058",
    "eduBite": "eduBite 1",
    "cat": "Kapselung & PDU",
    "q": "Was passiert mit einem beschädigten Ethernet-Frame, wenn die Prüfsumme nicht stimmt?",
    "a": [
      "Der Frame wird als beschädigt erkannt und verworfen.",
      "Der Router ersetzt automatisch alle Header und sendet ihn weiter.",
      "Der Browser übernimmt den Frame direkt als Anwendungsdaten.",
      "Die Portnummer wird geändert und der Frame unverändert weitergeleitet."
    ],
    "c": 0,
    "e": "Stimmt die Prüfsumme nicht, wird der Frame als beschädigt erkannt und verworfen."
  },
  {
    "id": "q059",
    "eduBite": "eduBite 1",
    "cat": "Adressierung & Geräte",
    "q": "Welche Adresse gehört zur lokalen Adressierung der Data-Link-Schicht?",
    "a": [
      "MAC-Adresse",
      "IP-Adresse",
      "Portnummer",
      "Webadresse"
    ],
    "c": 0,
    "e": "Die Data-Link-Schicht nutzt Hardwareadressen wie MAC-Adressen für die lokale Weiterleitung."
  },
  {
    "id": "q060",
    "eduBite": "eduBite 1",
    "cat": "Adressierung & Geräte",
    "q": "Welche Adresse gehört zur Network-Schicht?",
    "a": [
      "IP-Adresse",
      "MAC-Adresse",
      "Portnummer",
      "Dateipfad"
    ],
    "c": 0,
    "e": "Die Network-Schicht verwendet logische Adressen wie IP-Adressen."
  },
  {
    "id": "q061",
    "eduBite": "eduBite 1",
    "cat": "Adressierung & Geräte",
    "q": "Wozu dient eine Portnummer?",
    "a": [
      "Sie ordnet Daten einem Dienst beziehungsweise einer Anwendung auf dem Zielhost zu.",
      "Sie bestimmt den physischen Standort eines Switches.",
      "Sie ersetzt die MAC-Adresse bei jeder lokalen Übertragung.",
      "Sie beschreibt die Länge eines Ethernet-Kabels."
    ],
    "c": 0,
    "e": "Portnummern gehören zur Transportschicht und helfen dabei, Daten dem passenden Dienst zuzuordnen."
  },
  {
    "id": "q062",
    "eduBite": "eduBite 1",
    "cat": "Adressierung & Geräte",
    "q": "Welches Gerät ist typischerweise der Vermittlungsschicht zugeordnet?",
    "a": [
      "Router",
      "Switch",
      "Repeater",
      "Transceiver"
    ],
    "c": 0,
    "e": "Router werden im Skript der Network-Schicht zugeordnet und leiten anhand logischer Adressen weiter."
  },
  {
    "id": "q063",
    "eduBite": "eduBite 1",
    "cat": "Adressierung & Geräte",
    "q": "Ein Switch soll einen Frame innerhalb eines Segments weiterleiten. Welche Information ist dafür zentral?",
    "a": [
      "Die Hardwareadresse des Zielgeräts",
      "Die Portnummer der Anwendung",
      "Die Sitzungskennung des Browsers",
      "Der Name des Zielservers"
    ],
    "c": 0,
    "e": "Switches leiten Frames anhand physischer Hardwareadressen weiter."
  },
  {
    "id": "q064",
    "eduBite": "eduBite 1",
    "cat": "Adressierung & Geräte",
    "q": "Warum kann ein Router einen Frame auf dem nächsten Netzwerkabschnitt mit anderen MAC-Adressen weiterleiten?",
    "a": [
      "MAC-Adressen gelten nur innerhalb des jeweiligen Segments.",
      "MAC-Adressen beschreiben immer den gesamten End-to-End-Weg.",
      "IP-Adressen werden nur innerhalb eines Switches verwendet.",
      "Portnummern ersetzen beim Router die Hardwareadressen."
    ],
    "c": 0,
    "e": "Das Skript betont, dass MAC-Adressen lokal im Segment gelten und sich an Routern ändern können."
  },
  {
    "id": "q065",
    "eduBite": "eduBite 1",
    "cat": "Adressierung & Geräte",
    "q": "Ein Problem betrifft Routing oder eine falsche IP-Konfiguration. Welche OSI-Schicht ist zuerst relevant?",
    "a": [
      "Schicht 3",
      "Schicht 1",
      "Schicht 2",
      "Schicht 7"
    ],
    "c": 0,
    "e": "Routing und IP-Adressierung gehören zur Vermittlungsschicht, also Layer 3."
  },
  {
    "id": "q066",
    "eduBite": "eduBite 1",
    "cat": "Adressierung & Geräte",
    "q": "Ein Switch-Port ist aktiv, aber ein Gerät kann wegen einer falschen MAC-Zuordnung nicht korrekt kommunizieren. Welche Schicht ist besonders relevant?",
    "a": [
      "Schicht 2",
      "Schicht 1",
      "Schicht 3",
      "Schicht 5"
    ],
    "c": 0,
    "e": "MAC-Adressen und Switch-Weiterleitung gehören zur Sicherungsschicht, also Layer 2."
  },
  {
    "id": "q067",
    "eduBite": "eduBite 1",
    "cat": "Praxis & Protokolle",
    "q": "Ein Notebook ruft eine Webseite ab. Welche Abfolge beschreibt die Kapselung am besten?",
    "a": [
      "HTTP-Daten werden über TCP, IP und Ethernet schrittweise verpackt.",
      "Ethernet erzeugt zuerst die Anwendung und TCP entfernt danach die IP-Adresse.",
      "Der Router erstellt die ursprünglichen Browserdaten erst am Zielserver.",
      "Die Bitübertragungsschicht fügt nachträglich den HTTP-Header hinzu."
    ],
    "c": 0,
    "e": "Bei der beschriebenen HTTP-Anfrage werden die Daten über TCP, IP und Ethernet gekapselt."
  },
  {
    "id": "q068",
    "eduBite": "eduBite 1",
    "cat": "Praxis & Protokolle",
    "q": "Welche Protokollkombination wird im Skript als Beispiel für einen Webseitenaufruf genannt?",
    "a": [
      "HTTP, TCP, IP und Ethernet",
      "DNS, DHCP, QoS und VPN",
      "FTP, UDP, ARP und Bluetooth",
      "SMTP, POP3, ICMP und WLAN"
    ],
    "c": 0,
    "e": "Das Beispiel beschreibt HTTP über TCP/IP und Ethernet."
  },
  {
    "id": "q069",
    "eduBite": "eduBite 1",
    "cat": "Praxis & Protokolle",
    "q": "Warum kann eine Anwendung trotz funktionierendem Kabel weiterhin nicht erreichbar sein?",
    "a": [
      "Fehler können auch auf höheren Schichten liegen.",
      "Ein funktionierendes Kabel garantiert immer die Anwendungserreichbarkeit.",
      "Die Physical-Schicht übernimmt automatisch alle Anwendungsfunktionen.",
      "Ein Link macht Routing und Namensauflösung überflüssig."
    ],
    "c": 0,
    "e": "Ein funktionierendes physisches Medium schließt Fehler auf Sicherungs-, Vermittlungs-, Transport- oder höheren Schichten nicht aus."
  },
  {
    "id": "q070",
    "eduBite": "eduBite 1",
    "cat": "Praxis & Protokolle",
    "q": "Welche Reihenfolge ist für eine schichtweise Fehlersuche sinnvoll?",
    "a": [
      "Physische Verbindung prüfen, dann höhere Schichten schrittweise untersuchen.",
      "Direkt das Anwendungsprogramm neu installieren und danach das Kabel prüfen.",
      "Zuerst die Anwendung analysieren und die physische Verbindung ignorieren.",
      "Zuerst alle Router austauschen und danach die eigentliche Ursache suchen."
    ],
    "c": 0,
    "e": "Die beschriebene Methode beginnt bei Schicht 1 und arbeitet sich nach oben."
  },
  {
    "id": "q071",
    "eduBite": "eduBite 1",
    "cat": "Praxis & Protokolle",
    "q": "Welche Aussage zur Peer-Kommunikation ist korrekt?",
    "a": [
      "Gleichrangige Schichten kommunizieren konzeptionell mit derselben Schicht des Gegenübers.",
      "Jede Schicht kommuniziert ausschließlich mit dem darunterliegenden Kabel.",
      "Nur Router können an Peer-Kommunikation beteiligt sein.",
      "Peer-Kommunikation bedeutet, dass zwei Benutzerkonten Dateien austauschen."
    ],
    "c": 0,
    "e": "Peer-Kommunikation beschreibt die konzeptionelle Kommunikation zwischen gleichen Schichten zweier Netzwerkknoten."
  },
  {
    "id": "q072",
    "eduBite": "eduBite 1",
    "cat": "Praxis & Protokolle",
    "q": "Was beschreibt die Interaktion benachbarter Schichten?",
    "a": [
      "Eine Schicht stellt der darüberliegenden einen Dienst bereit und nutzt den Dienst der darunterliegenden.",
      "Zwei Router tauschen ausschließlich ihre Benutzeroberflächen aus.",
      "Jede Schicht arbeitet vollständig unabhängig von allen anderen Schichten.",
      "Nur die Anwendungsschicht darf Dienste anderer Schichten verwenden."
    ],
    "c": 0,
    "e": "Benachbarte Schichten stehen in einer Dienstbeziehung: oben wird ein Dienst bereitgestellt, unten ein Dienst genutzt."
  },
  {
    "id": "q073",
    "eduBite": "eduBite 1",
    "cat": "Praxis & Protokolle",
    "q": "Was kann beim Wechsel von Kabel zu WLAN im Idealfall unverändert bleiben?",
    "a": [
      "Die Anwendung und die darüberliegenden Schichten",
      "Das physische Übertragungsverfahren",
      "Die konkrete Funk- oder Kabeltechnik",
      "Die Arbeitsweise der unteren Schichten"
    ],
    "c": 0,
    "e": "Beim Wechsel des Mediums ändern sich im Idealfall vor allem die unteren Schichten; die Anwendung bleibt unbeeinträchtigt."
  },
  {
    "id": "q074",
    "eduBite": "eduBite 1",
    "cat": "Praxis & Protokolle",
    "q": "Warum werden OSI und TCP/IP in der Praxis gemeinsam betrachtet?",
    "a": [
      "OSI unterstützt die strukturierte Analyse, TCP/IP beschreibt die praktisch eingesetzte Protokollwelt.",
      "Beide Modelle sind vollständig identisch und haben dieselbe Anzahl an Schichten.",
      "TCP/IP wird nur in Lehrbüchern genutzt, während OSI alle Internetprotokolle implementiert.",
      "OSI ersetzt technische Standards, während TCP/IP ausschließlich Hardware beschreibt."
    ],
    "c": 0,
    "e": "Das Skript beschreibt OSI als feineres Analyse- und Referenzmodell und TCP/IP als praktisch implementierte Protokollwelt."
  },
  {
    "id": "q075",
    "eduBite": "eduBite 1",
    "cat": "TCP/IP & OSI",
    "q": "Wie viele Schichten hat das im Skript beschriebene TCP/IP-Modell?",
    "a": [
      "Vier",
      "Drei",
      "Fünf",
      "Sieben"
    ],
    "c": 0,
    "e": "Das beschriebene TCP/IP-Modell umfasst vier Schichten."
  },
  {
    "id": "q076",
    "eduBite": "eduBite 1",
    "cat": "TCP/IP & OSI",
    "q": "Welche OSI-Schichten werden im TCP/IP Application Layer zusammengefasst?",
    "a": [
      "Application, Presentation und Session",
      "Transport, Network und Data Link",
      "Physical, Data Link und Network",
      "Session, Transport und Network"
    ],
    "c": 0,
    "e": "Der TCP/IP Application Layer umfasst die OSI-Schichten 5 bis 7."
  },
  {
    "id": "q077",
    "eduBite": "eduBite 1",
    "cat": "TCP/IP & OSI",
    "q": "Welche OSI-Schicht entspricht dem TCP/IP Transport Layer?",
    "a": [
      "Transport",
      "Network",
      "Data Link",
      "Application"
    ],
    "c": 0,
    "e": "Der TCP/IP Transport Layer entspricht der OSI-Transportschicht 4."
  },
  {
    "id": "q078",
    "eduBite": "eduBite 1",
    "cat": "TCP/IP & OSI",
    "q": "Welche OSI-Schicht entspricht dem TCP/IP Internet Layer?",
    "a": [
      "Network",
      "Transport",
      "Presentation",
      "Physical"
    ],
    "c": 0,
    "e": "Der Internet Layer übernimmt die Aufgaben der OSI-Network-Schicht."
  },
  {
    "id": "q079",
    "eduBite": "eduBite 1",
    "cat": "TCP/IP & OSI",
    "q": "Welche OSI-Schichten werden im TCP/IP Link Layer zusammengefasst?",
    "a": [
      "Data Link und Physical",
      "Network und Transport",
      "Session und Presentation",
      "Application und Transport"
    ],
    "c": 0,
    "e": "Der Link Layer deckt die Aufgaben von OSI-Schicht 1 und 2 ab."
  },
  {
    "id": "q080",
    "eduBite": "eduBite 1",
    "cat": "TCP/IP & OSI",
    "q": "Warum ist das OSI-Modell bei der Fehlersuche feiner als TCP/IP?",
    "a": [
      "OSI trennt Physical und Data Link, während TCP/IP beide im Link Layer zusammenfasst.",
      "OSI besitzt weniger Schichten und fasst dadurch mehr Funktionen zusammen.",
      "TCP/IP trennt jede Anwendung in drei eigene Schichten.",
      "OSI und TCP/IP verwenden exakt dieselben Schichtgrenzen."
    ],
    "c": 0,
    "e": "Die getrennten OSI-Schichten 1 und 2 erlauben eine feinere Unterscheidung als der gemeinsame TCP/IP Link Layer."
  },
  {
    "id": "q081",
    "eduBite": "eduBite 1",
    "cat": "TCP/IP & OSI",
    "q": "Welche Aussage beschreibt den Charakter des TCP/IP-Modells am besten?",
    "a": [
      "Es ist eng mit praktisch eingesetzten Protokollen und Standards verbunden.",
      "Es ist ausschließlich ein theoretisches Modell ohne reale Implementierungen.",
      "Es beschreibt nur physische Kabel und keine höheren Protokolle.",
      "Es wurde als vollständige Kopie des OSI-Modells entwickelt."
    ],
    "c": 0,
    "e": "Das Skript beschreibt TCP/IP als praktisch eingesetzte Protokollwelt, die das Internet trägt."
  },
  {
    "id": "q082",
    "eduBite": "eduBite 1",
    "cat": "TCP/IP & OSI",
    "q": "Welche Rolle hat RFC 1122 im Zusammenhang mit TCP/IP?",
    "a": [
      "Es beschreibt normative Anforderungen an Internet-Hosts.",
      "Es ist ein siebenstufiges Ersatzmodell für Ethernet-Kabel.",
      "Es definiert ausschließlich die Gestaltung von Switch-Gehäusen.",
      "Es beschreibt nur die Benutzeroberfläche von Webbrowsern."
    ],
    "c": 0,
    "e": "RFC 1122 enthält grundlegende Anforderungen an Internet-Hosts und ist normativer Bestandteil der technischen Grundlage."
  },
  {
    "id": "q083",
    "eduBite": "eduBite 1",
    "cat": "TCP/IP & OSI",
    "q": "Ein Techniker spricht von einem „Layer-3-Problem“. Was ist damit im OSI-Kontext gemeint?",
    "a": [
      "Ein Problem der Vermittlungsschicht, etwa bei Routing oder IP-Adressierung.",
      "Ein Problem der Bitübertragung, etwa ein defektes Kabel.",
      "Ein Problem der Anwendungsschicht, etwa eine Weboberfläche.",
      "Ein Problem der Darstellungsschicht, etwa eine Datenkompression."
    ],
    "c": 0,
    "e": "Layer 3 bezeichnet im OSI-Modell die Network- beziehungsweise Vermittlungsschicht."
  }
];
