# Companion-Firmware unter macOS installieren

[English](../companion-installation-macos.md) · **Deutsch** · [Windows](companion-installation-windows.md)

Diese freiwillige Installation läuft vollständig in Google Chrome. Der
macOS-Systembericht, Python, Terminalbefehle und `esptool` werden dafür nicht
benötigt.

## Installation

1. Alle Programme schließen, die eine serielle USB-Verbindung verwenden.
2. Den
   [Companion-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/companion/)
   in Chrome öffnen. Safari und Firefox unterstützen diese Web-Serial-
   Installation nicht.
3. Beide Bestätigungen aktivieren und **Companion-Firmware installieren**
   wählen. Der Geräteauswahldialog von Chrome öffnet sich.
4. RoonPilot per USB anschließen. Der richtige Eintrag lautet:

   > **USB serial** (`cu.wchusbserial…`)

5. Entscheidend ist **USB serial** vor der Klammer. Der Anschlussname in
   Klammern darf abweichen.
6. Wird stattdessen **USB JTAG/serial debug unit** (`cu.usbmodem…`) angezeigt,
   ist der Hauptprozessor verbunden. Den Dialog geöffnet lassen, USB abziehen,
   den USB-C-Stecker am RoonPilot-Gerät um **180 Grad drehen** und neu
   verbinden. Der Webinstaller erkennt das Gerät sofort wieder. Nun **USB
   serial** auswählen.
7. **Erase device** bestätigen und USB verbunden lassen, bis die Prüfung
   vollständig abgeschlossen ist.
8. Danach USB abziehen, den USB-C-Stecker um **180 Grad drehen** und neu
   verbinden. RoonPilot startet wieder über den ESP32-S3.

Nur der klassische Begleit-ESP32 wird beschrieben. RoonPilot auf dem
ESP32-S3 und dessen Einstellungen bleiben unverändert.

Eine [Sicherung der Original-Firmware](factory-backup.md) ist freiwillig. Sie
ist nur sinnvoll, wenn später exakt der Herstellerzustand wiederhergestellt
werden soll. Die technische [esptool-Anleitung für macOS](esptool-macos.md)
wird nur für diese Sicherung oder eine manuelle Wiederherstellung benötigt.
