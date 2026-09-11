# RoonPilot unter Windows installieren

[English](../installation-windows.md) · **Deutsch** · [Anderes Betriebssystem wählen](installation.md)

Für die normale Installation wird kein Kommandozeilenwerkzeug benötigt.

## 1. Computer vorbereiten

1. Einen Windows-PC mit einem aktuellen **Chrome**- oder **Edge**-Browser
   verwenden.
2. RoonPilot direkt mit einem **USB-Datenkabel** verbinden.
3. Arduino Serial Monitor, PuTTY, ESP-IDF Monitor und alle anderen Programme
   schließen, die den seriellen Anschluss bereits verwenden könnten.

## 2. Steckerstellung prüfen

1. Mit der rechten Maustaste auf das Windows-Startsymbol klicken und den
   **Geräte-Manager** öffnen.
2. **Anschlüsse (COM & LPT)** aufklappen.
3. Den Eintrag suchen, der beim Anstecken von RoonPilot erscheint.

Die richtige Seite mit dem ESP32-S3 wird normalerweise so angezeigt:

> **Serielles USB-Gerät (COMx)**

`COMx` steht für eine von Windows vergebene Nummer, zum Beispiel `COM5`.

Zeigt Windows stattdessen Folgendes an:

> **USB-SERIAL CH340 (COMx)**

ist die USB-Schnittstelle des **ESP32-U4WDH**-Begleitprozessors verbunden, nicht
der ESP32-S3. USB abziehen, den USB-C-Stecker am RoonPilot-Gerät um **180 Grad
drehen**, neu verbinden und noch einmal im Geräte-Manager nachsehen. Erst mit
**Serielles USB-Gerät (COMx)** fortfahren.

## 3. RoonPilot installieren

1. Den [RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/)
   in Chrome oder Edge öffnen.
2. Die Hardwarebestätigung markieren und die Lizenz für private Nutzung
   akzeptieren.
3. **RoonPilot installieren** auswählen.
4. Im Browserfenster dieselbe COM-Nummer wählen, die der Geräte-Manager für
   **Serielles USB-Gerät** gezeigt hat.
5. **Erase device** bestätigen, wenn danach gefragt wird. Vorher muss nichts
   separat gelöscht werden.
6. Das Kabel angeschlossen lassen, bis Löschen, Schreiben und Prüfen vollständig
   abgeschlossen sind.

Die Factory-Installation löscht Firmware und Einstellungen auf dem ESP32-S3.
Der andere Prozessor des Boards wird dabei nicht gelöscht.

## 4. RoonPilot starten

1. USB abziehen und den Stecker **ohne Drehung** wieder einstecken.
2. Den RoonPilot-Startbildschirm abwarten.
3. Mit der [Ersteinrichtung](first-time-setup.md) fortfahren.

## Wenn der Installer keine Verbindung herstellt

- Prüfen, ob das Kabel Daten übertragen kann.
- Prüfen, ob ein anderes Programm den COM-Port geöffnet hat.
- Den Installer in Chrome oder Edge neu laden und erneut die ESP32-S3-COM-Nummer
  auswählen.
- Unter [Fehlerbehebung](troubleshooting.md) stehen Wiederherstellung und
  erweiterte Chiperkennung.

Eine [Sicherung der Original-Firmware](factory-backup.md) ist freiwillig und
keine Voraussetzung für die Installation von RoonPilot.
