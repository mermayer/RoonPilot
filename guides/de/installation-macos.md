# RoonPilot unter macOS installieren

[English](../installation-macos.md) · **Deutsch** · [Anderes Betriebssystem wählen](installation.md)

Für die normale Installation werden weder Python noch Terminalbefehle oder
andere Kommandozeilenwerkzeuge benötigt.

## 1. Mac vorbereiten

1. Einen aktuellen **Google-Chrome**-Browser installieren oder öffnen. Safari
   und Firefox unterstützen diese Browser-Installation nicht.
2. RoonPilot direkt mit einem **USB-Datenkabel** verbinden.
3. Arduino Serial Monitor, ESP-IDF Monitor und alle anderen Programme schließen,
   die die serielle Verbindung bereits verwenden könnten.

## 2. Steckerstellung prüfen

1. Über Spotlight die **Systeminformationen** öffnen. Alternativ:
   **Apple-Menü → Über diesen Mac → Weitere Infos → Systembericht**.
2. In der linken Spalte **Hardware → USB** auswählen.
3. Den Eintrag anklicken, der beim Anstecken von RoonPilot erscheint.

Die richtige Seite mit dem ESP32-S3 wird so angezeigt:

> **USB JTAG/serial**

Zeigt macOS stattdessen Folgendes an:

> **USB serial**

ist die USB-Schnittstelle des **ESP32-U4WDH**-Begleitprozessors verbunden, nicht
der ESP32-S3. USB abziehen, den USB-C-Stecker am RoonPilot-Gerät um **180 Grad
drehen**, neu verbinden und noch einmal unter **Hardware → USB** nachsehen. Erst
mit **USB JTAG/serial** fortfahren.

## 3. RoonPilot installieren

1. Den [RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/)
   in Chrome öffnen.
2. Die Hardwarebestätigung markieren und die Lizenz für private Nutzung
   akzeptieren.
3. **RoonPilot installieren** auswählen.
4. Im Gerätefenster von Chrome den Eintrag für **USB JTAG/serial** wählen.
   Chrome kann ihn als **USB JTAG/serial debug unit** bezeichnen.
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

## Optional: zweiten Prozessor in Deep Sleep versetzen

RoonPilot funktioniert vollständig ohne diesen Schritt. Soll der ungenutzte
Companion-ESP32 in einen definierten Stromsparzustand versetzt werden, folgt
danach der getrennte
[Companion-Webinstaller für macOS](companion-installation-macos.md).
Auch dafür sind keine Terminalbefehle und kein esptool nötig.

## Wenn der Installer keine Verbindung herstellt

- Prüfen, ob das Kabel Daten übertragen kann.
- Prüfen, ob ein anderes Programm die serielle USB-Verbindung verwendet.
- Den Installer in Chrome neu laden und erneut **USB JTAG/serial** auswählen.
- Unter [Fehlerbehebung](troubleshooting.md) stehen weitere Schritte.

Die separate [esptool-Anleitung für macOS](esptool-macos.md) ist nur für
erweiterte Diagnose, freiwillige Original-Flash-Sicherungen und manuelle
Wiederherstellung gedacht. Sie gehört zu keiner der beiden normalen
Browser-Installationen. Eine
[Sicherung der Original-Firmware](factory-backup.md) ist freiwillig.
