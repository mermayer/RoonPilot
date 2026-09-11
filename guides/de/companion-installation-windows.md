# Companion-Firmware unter Windows installieren

[English](../companion-installation-windows.md) · **Deutsch** · [Companion-Übersicht](companion-firmware.md)

Diese freiwillige Installation läuft in Chrome oder Edge. Python,
PowerShell-Befehle und esptool werden dafür nicht benötigt.

## 1. Richtigen Prozessor verbinden

1. RoonPilot mit einem USB-Datenkabel direkt an den Windows-PC anschließen.
2. **Geräte-Manager → Anschlüsse (COM & LPT)** öffnen.
3. Nach diesem Eintrag suchen:

   > **USB-SERIAL CH340 (COMx)**

Das ist der klassische ESP32-U4WDH-Companion-Prozessor. `COMx` steht für eine
von Windows vergebene Nummer, zum Beispiel `COM5`.

Zeigt der Geräte-Manager stattdessen **Serielles USB-Gerät (COMx)**, ist der
Hauptprozessor ESP32-S3 verbunden. USB abziehen, den USB-C-Stecker am
RoonPilot-Gerät um **180 Grad drehen**, neu verbinden und erneut im
Geräte-Manager nachsehen.

## 2. Über freiwilliges Backup entscheiden

Ein Backup ist nicht erforderlich. Es ist nur dann sinnvoll, wenn später
möglicherweise exakt die ursprüngliche Waveshare-Firmware dieses Prozessors
wiederhergestellt werden soll. Wer diesen Rückweg möchte, folgt jetzt zuerst
der [ausführlichen Windows-Backup-Anleitung](factory-backup-windows.md). Alle
anderen machen direkt weiter.

## 3. Im Browser installieren

1. Arduino Serial Monitor, ESP-IDF Monitor und andere Programme schließen, die
   den COM-Port verwenden könnten.
2. Den
   [Companion-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/companion/)
   in einem aktuellen Desktopbrowser **Chrome** oder **Edge** öffnen.
3. Den angezeigten USB-Namen und die Lizenz für private Nutzung bestätigen.
4. **Companion-Firmware installieren** auswählen.
5. Im Browserdialog denselben Eintrag **USB-SERIAL CH340 (COMx)** wählen.
6. **Erase device** bestätigen, wenn danach gefragt wird.
7. Das Kabel angeschlossen lassen, bis Löschen, Schreiben und Prüfen vollständig
   beendet sind.

Nur der Companion-ESP32 wird gelöscht. Der Hauptprozessor ESP32-S3 und dessen
RoonPilot-Einstellungen bleiben unverändert.

## 4. Kabel wieder mit RoonPilot verbinden

1. USB abziehen.
2. Den USB-C-Stecker am RoonPilot-Gerät um **180 Grad drehen**.
3. Neu verbinden.
4. Im Geräte-Manager sollte jetzt **Serielles USB-Gerät (COMx)** erscheinen und
   RoonPilot normal starten.

## Wenn der Installer keine Verbindung herstellt

- Prüfen, ob das Kabel Daten übertragen kann und direkt ohne Hub verbunden ist.
- Alle Programme schließen, die den COM-Port geöffnet haben könnten.
- Sicherstellen, dass **USB-SERIAL CH340** und nicht **Serielles USB-Gerät**
  ausgewählt wurde.
- Einmal abziehen, neu verbinden, den Installer neu laden und erneut versuchen.
- Wurde die Installation unterbrochen, die Companion-Seite wieder verbinden
  und den Webinstaller mit demselben offiziellen Abbild wiederholen.
