# RoonPilot unter Windows installieren

[English](../installation-windows.md) · **Deutsch** · [macOS](installation-macos.md)

Für die normale Installation werden weder Geräte-Manager noch Python,
`esptool` oder andere Kommandozeilenwerkzeuge benötigt.

## Benötigt

- Windows-PC mit aktuellem **Chrome** oder **Edge**;
- USB-Datenkabel;
- RoonPilot-Gerät.

## Installation

1. Alle Programme schließen, die eine serielle USB-Verbindung verwenden.
2. Den [RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/)
   in Chrome oder Edge öffnen.
3. Beide Bestätigungen aktivieren und **RoonPilot installieren** wählen. Nun
   öffnet sich der Geräteauswahldialog des Browsers.
4. RoonPilot per USB anschließen. Der richtige Eintrag lautet:

   > **USB JTAG/serial debug unit** (`COM…`)

5. Entscheidend ist **USB JTAG/serial debug unit** vor der Klammer. Die
   COM-Nummer in Klammern wird von Windows vergeben und darf abweichen.
6. Wird stattdessen **USB serial** (`COM…`) angezeigt, ist der klassische
   Begleit-ESP32 verbunden. Den Dialog geöffnet lassen, USB abziehen, den
   USB-C-Stecker am RoonPilot-Gerät um **180 Grad drehen** und neu verbinden.
   Der Webinstaller erkennt das Gerät sofort wieder. Nun **USB JTAG/serial
   debug unit** auswählen.
7. **Erase device** bestätigen und USB verbunden lassen, bis Löschen,
   Schreiben und Prüfen vollständig abgeschlossen sind.
8. Den RoonPilot-Startbildschirm abwarten und mit der
   [Ersteinrichtung](first-time-setup.md) fortfahren.

Die Factory-Installation löscht Firmware und Einstellungen auf dem ESP32-S3.
Der zweite Prozessor des Boards wird dabei nicht verändert.

## Optionaler Begleitprozessor

RoonPilot funktioniert vollständig ohne dessen Zusatzfirmware. Soll der
ungenutzte ESP32-U4WDH in einen definierten Stromsparzustand versetzt werden,
folgt danach der getrennte
[Companion-Webinstaller für Windows](companion-installation-windows.md).

Eine [Sicherung der Original-Firmware](factory-backup.md) ist freiwillig und
nur für einen späteren Rückweg zum exakten Herstellerzustand sinnvoll. Erst
dieser technische Sonderweg benötigt `esptool`.

## Optional: zusätzlich mit Windows prüfen

Diese Prüfung ist **nicht** Teil des normalen Installationsablaufs. Nur wenn
mehrere USB-Geräte schwer auseinanderzuhalten sind, kann unter
**Geräte-Manager → Anschlüsse (COM & LPT)** kontrolliert werden:

- **Serielles USB-Gerät (COMx):** ESP32-S3-Seite für RoonPilot;
- **USB-SERIAL CH340 (COMx):** klassischer Begleit-ESP32.

Für die eigentliche Installation bleibt der Browserdialog maßgeblich: Dort
**USB JTAG/serial debug unit** auswählen.
