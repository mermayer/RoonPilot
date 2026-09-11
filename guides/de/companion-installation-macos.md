# Companion-Firmware unter macOS installieren

[English](../companion-installation-macos.md) · **Deutsch** · [Companion-Übersicht](companion-firmware.md)

Diese freiwillige Installation läuft in Google Chrome. Python,
Terminalbefehle und esptool werden dafür nicht benötigt.

## 1. Richtigen Prozessor verbinden

1. RoonPilot mit einem USB-Datenkabel direkt an den Mac anschließen.
2. Über Spotlight die **Systeminformationen** öffnen und
   **Hardware → USB** auswählen.
3. Den Eintrag anklicken, der beim Anstecken von RoonPilot erscheint. Die
   Companion-Seite wird so angezeigt:

   > **USB serial**

Zeigen die Systeminformationen stattdessen **USB JTAG/serial**, ist der
Hauptprozessor ESP32-S3 verbunden. USB abziehen, den USB-C-Stecker am
RoonPilot-Gerät um **180 Grad drehen**, neu verbinden und noch einmal unter
**Hardware → USB** nachsehen.

## 2. Über freiwilliges Backup entscheiden

Ein Backup ist nicht erforderlich. Es ist nur dann sinnvoll, wenn später
möglicherweise exakt die ursprüngliche Waveshare-Firmware dieses Prozessors
wiederhergestellt werden soll. Wer diesen Rückweg möchte, folgt jetzt zuerst
der [ausführlichen macOS-Backup-Anleitung](factory-backup-macos.md). Alle
anderen machen direkt weiter.

## 3. In Chrome installieren

1. Arduino Serial Monitor, ESP-IDF Monitor und andere Programme schließen, die
   die serielle Verbindung verwenden könnten.
2. Den
   [Companion-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/companion/)
   in einem aktuellen Desktopbrowser **Google Chrome** öffnen. Safari und
   Firefox unterstützen diese Web-Serial-Installation nicht.
3. Den angezeigten USB-Namen und die Lizenz für private Nutzung bestätigen.
4. **Companion-Firmware installieren** auswählen.
5. Im Gerätefenster von Chrome den zu **USB serial** gehörenden Eintrag wählen.
6. **Erase device** bestätigen, wenn danach gefragt wird.
7. Das Kabel angeschlossen lassen, bis Löschen, Schreiben und Prüfen vollständig
   beendet sind.

Nur der Companion-ESP32 wird gelöscht. Der Hauptprozessor ESP32-S3 und dessen
RoonPilot-Einstellungen bleiben unverändert.

## 4. Kabel wieder mit RoonPilot verbinden

1. USB abziehen.
2. Den USB-C-Stecker am RoonPilot-Gerät um **180 Grad drehen**.
3. Neu verbinden.
4. In den Systeminformationen sollte jetzt **USB JTAG/serial** erscheinen und
   RoonPilot normal starten.

## Wenn der Installer keine Verbindung herstellt

- Prüfen, ob das Kabel Daten übertragen kann und direkt ohne Hub verbunden ist.
- Alle Programme schließen, die die serielle Verbindung verwenden könnten.
- Sicherstellen, dass **USB serial** und nicht **USB JTAG/serial** ausgewählt
  wurde.
- Einmal abziehen, neu verbinden, den Installer in Chrome neu laden und erneut
  versuchen.
- Wurde die Installation unterbrochen, die Companion-Seite wieder verbinden
  und den Webinstaller mit demselben offiziellen Abbild wiederholen.
