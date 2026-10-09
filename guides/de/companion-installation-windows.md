# Companion-Firmware unter Windows installieren

[English](../companion-installation-windows.md) · **Deutsch** · [macOS](companion-installation-macos.md)

[![Videoanleitung ansehen](../../docs/assets/video-button-de.svg)](https://mermayer.github.io/RoonPilot/video/companion-installation-de.html)

Diese freiwillige Installation läuft vollständig in Chrome oder Edge. Der
Geräte-Manager, Python und `esptool` werden dafür nicht benötigt.

## Installation

1. Alle Programme schließen, die eine serielle USB-Verbindung verwenden.
2. Den
   [Companion-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/companion/)
   in Chrome oder Edge öffnen.
3. Beide Bestätigungen aktivieren und **Companion-Firmware installieren**
   wählen. Der Geräteauswahldialog des Browsers öffnet sich.
4. RoonPilot per USB anschließen. Der richtige Eintrag lautet:

   > **USB serial** (`COM…`)

5. Entscheidend ist **USB serial** vor der Klammer. Die COM-Nummer in Klammern
   darf abweichen.
6. Wird stattdessen **USB JTAG/serial debug unit** (`COM…`) angezeigt, ist der
   Hauptprozessor verbunden. Den Dialog geöffnet lassen, USB abziehen, den
   USB-C-Stecker am RoonPilot-Gerät um **180 Grad drehen** und neu verbinden.
   Der Webinstaller erkennt das Gerät sofort wieder. Nun **USB serial**
   auswählen.
7. **Erase device** bestätigen und USB verbunden lassen, bis die Prüfung
   vollständig abgeschlossen ist.
8. Danach USB abziehen, den USB-C-Stecker um **180 Grad drehen** und neu
   verbinden. RoonPilot startet wieder über den ESP32-S3.

Nur der klassische Begleit-ESP32 wird beschrieben. RoonPilot auf dem
ESP32-S3 und dessen Einstellungen bleiben unverändert.

Eine [Sicherung der Original-Firmware](factory-backup.md) ist freiwillig. Sie
ist nur sinnvoll, wenn später exakt der Herstellerzustand wiederhergestellt
werden soll, und muss vor dieser Installation erstellt werden.
