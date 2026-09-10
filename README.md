# Netzwerk Prüfungstrainer

Eine statische Quiz-Seite für GitHub Pages.

## Dateien

- `index.html` – Oberfläche
- `style.css` – Design
- `script.js` – Quiz-Logik
- `fragen.js` – Fragen und Antworten

## GitHub Pages veröffentlichen

1. Auf GitHub ein neues Repository erstellen, z. B. `netzwerk-pruefungstrainer`.
2. Die vier Dateien hochladen.
3. Im Repository auf **Settings → Pages** gehen.
4. Bei **Build and deployment** als Quelle **Deploy from a branch** wählen.
5. Branch `main` und Ordner `/ (root)` auswählen und speichern.
6. Nach dem Deployment stellt GitHub die Seite über GitHub Pages bereit.

## Neue Fragen hinzufügen

In `fragen.js` kann jede Frage nach diesem Muster ergänzt werden:

{
  "cat": "Meine Kategorie",
  "q": "Meine Frage?",
  "a": ["Antwort A", "Antwort B", "Antwort C", "Antwort D"],
  "c": 0,
  "e": "Erklärung zur richtigen Antwort."
}

`c` ist der Index der richtigen Antwort:
- `0` = A
- `1` = B
- `2` = C
- `3` = D

Die Antwortoptionen werden beim Start automatisch gemischt.

## Quellenbasis

Die enthaltenen Fragen wurden aus den vom Nutzer bereitgestellten Präsentationen
„Was ist ein Netzwerk?“ und „OSI- und TCP/IP-Modelle verstehen“ abgeleitet.
