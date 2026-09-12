# Companion-Firmware unter Windows installieren

[English](../companion-installation-windows.md) · **Deutsch** · [Companion-Übersicht](companion-firmware.md)

Diese freiwillige Installation läuft in Chrome oder Edge. Python,
PowerShell-Befehle und esptool werden dafür nicht benötigt.

## 1. Direkt im Webinstaller beginnen

1. RoonPilot mit einem USB-Datenkabel direkt an den Windows-PC anschließen.
2. Arduino Serial Monitor, ESP-IDF Monitor und andere Programme schließen, die
   den COM-Port verwenden könnten.
3. Den
   [Companion-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/companion/)
   in einem aktuellen Desktopbrowser **Chrome** oder **Edge** öffnen.

Eine vorherige Prüfung im Geräte-Manager ist nicht erforderlich. Der passende
USB-Eintrag wird direkt im Geräteauswahldialog des Browsers ausgewählt.

## 2. Über freiwilliges Backup entscheiden

Ein Backup ist nicht erforderlich. Es ist nur dann sinnvoll, wenn später
möglicherweise exakt die ursprüngliche Waveshare-Firmware dieses Prozessors
wiederhergestellt werden soll. Wer diesen Rückweg möchte, folgt jetzt zuerst
der [ausführlichen Windows-Backup-Anleitung](factory-backup-windows.md). Alle
anderen machen direkt weiter.

## 3. Im Browser installieren

1. Den vorgesehenen USB-Namen und die Lizenz für private Nutzung bestätigen.
2. **Companion-Firmware installieren** auswählen. Jetzt öffnet sich der
   Geräteauswahldialog des Browsers.
3. Dort **USB serial** (`COM…`) auswählen.
4. Steht dort stattdessen **USB JTAG/serial debug unit**, den Dialog geöffnet
   lassen, USB abziehen, den USB-C-Stecker am RoonPilot-Gerät um **180 Grad
   drehen** und neu verbinden. Der Webinstaller erkennt das Gerät sofort wieder;
   nun **USB serial** auswählen.
5. **Erase device** bestätigen, wenn danach gefragt wird.
6. Das Kabel angeschlossen lassen, bis Löschen, Schreiben und Prüfen vollständig
   beendet sind.

Nur der Companion-ESP32 wird gelöscht. Der Hauptprozessor ESP32-S3 und dessen
RoonPilot-Einstellungen bleiben unverändert.

## 4. Kabel wieder mit RoonPilot verbinden

1. USB abziehen.
2. Den USB-C-Stecker am RoonPilot-Gerät um **180 Grad drehen**.
3. Neu verbinden.
4. Warten, bis RoonPilot normal startet. Der Geräte-Manager muss dafür nicht
   geöffnet werden.

## Wenn der Installer keine Verbindung herstellt

- Prüfen, ob das Kabel Daten übertragen kann und direkt ohne Hub verbunden ist.
- Alle Programme schließen, die den COM-Port geöffnet haben könnten.
- Sicherstellen, dass im Browser **USB serial** und nicht **USB JTAG/serial
  debug unit** ausgewählt wurde.
- Einmal abziehen, neu verbinden, den Installer neu laden und erneut versuchen.
- Wurde die Installation unterbrochen, die Companion-Seite wieder verbinden
  und den Webinstaller mit demselben offiziellen Abbild wiederholen.

Nur wenn die Einträge im Browser nicht eindeutig sind, kann der
**Geräte-Manager → Anschlüsse (COM & LPT)** als zusätzliche Kontrolle dienen:
**USB-SERIAL CH340 (COMx)** ist der Companion-ESP32; **Serielles USB-Gerät
(COMx)** ist der Hauptprozessor ESP32-S3.
