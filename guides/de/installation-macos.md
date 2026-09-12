# RoonPilot unter macOS installieren

[English](../installation-macos.md) · **Deutsch** · [Windows](installation-windows.md)

Für die normale Installation werden weder der macOS-Systembericht noch Python,
Terminalbefehle oder `esptool` benötigt.

## Benötigt

- Mac mit aktuellem **Google Chrome**; Safari und Firefox unterstützen diese
  Web-Serial-Installation nicht;
- USB-Datenkabel;
- RoonPilot-Gerät.

## Installation

1. Alle Programme schließen, die eine serielle USB-Verbindung verwenden.
2. Den [RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/)
   in Chrome öffnen.
3. Beide Bestätigungen aktivieren und **RoonPilot installieren** wählen. Nun
   öffnet sich der Geräteauswahldialog von Chrome.
4. RoonPilot per USB anschließen. Der richtige Eintrag lautet:

   > **USB JTAG/serial debug unit** (`cu.usbmodem…`)

5. Entscheidend ist **USB JTAG/serial debug unit** vor der Klammer.
   `cu.usbmodem…` steht ergänzend in Klammern und kann eine andere Endnummer
   erhalten.
6. Wird stattdessen **USB serial** (`cu.wchusbserial…`) angezeigt, ist der
   klassische Begleit-ESP32 verbunden. Den Dialog geöffnet lassen, USB
   abziehen, den USB-C-Stecker am RoonPilot-Gerät um **180 Grad drehen** und
   neu verbinden. Der Webinstaller erkennt das Gerät sofort wieder. Nun
   **USB JTAG/serial debug unit** auswählen.
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
[Companion-Webinstaller für macOS](companion-installation-macos.md).

Eine [Sicherung der Original-Firmware](factory-backup.md) ist freiwillig. Die
[technische esptool-Anleitung für macOS](esptool-macos.md) wird nur für diese
Sicherung, manuelle Wiederherstellung oder erweiterte Diagnose benötigt.

## Optional: zusätzlich mit macOS prüfen

Diese Prüfung ist **nicht** Teil des normalen Installationsablaufs. Nur wenn
mehrere USB-Geräte schwer auseinanderzuhalten sind, kann unter
**Systeminformationen → Hardware → USB** kontrolliert werden:

- **USB JTAG/serial:** ESP32-S3-Seite für RoonPilot;
- **USB serial:** klassischer Begleit-ESP32.

Für die eigentliche Installation bleibt der Chrome-Dialog maßgeblich: Dort
**USB JTAG/serial debug unit** auswählen.
