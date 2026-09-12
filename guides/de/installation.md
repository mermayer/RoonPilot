# RoonPilot installieren

[English](../installation.md) · **Deutsch**

Für die normale Installation werden weder Geräte-Manager noch macOS-
Systembericht, Python, `esptool` oder andere Kommandozeilenwerkzeuge benötigt.
Der Geräteauswahldialog des Webinstallers zeigt den verbundenen Prozessor
direkt an.

## Das wird benötigt

- das Waveshare ESP32-S3-Knob-Touch-LCD-1.8;
- ein USB-Datenkabel, kein reines Ladekabel;
- ein aktueller Desktopbrowser Chrome oder Edge.

## Direkt im Webinstaller beginnen

1. Den [RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/)
   in Chrome oder Edge öffnen.
2. Die beiden Bestätigungen aktivieren und **RoonPilot installieren** wählen.
3. Im Geräteauswahldialog auf den Namen vor der Klammer achten und
   **USB JTAG/serial debug unit** auswählen.
4. Wird stattdessen **USB serial** angezeigt, den Dialog geöffnet lassen, USB
   abziehen, den USB-C-Stecker am RoonPilot-Gerät um **180 Grad drehen** und neu
   verbinden. Der Browser aktualisiert die Geräteliste sofort.
5. **Erase device** bestätigen und USB verbunden lassen, bis Löschen,
   Schreiben und Prüfen abgeschlossen sind.

Eine Sicherung der Original-Firmware ist **freiwillig**. Sie ist nur sinnvoll,
wenn später vielleicht der exakte Auslieferungszustand des Herstellers
wiederhergestellt werden soll. Für Installation und Betrieb von RoonPilot wird
sie nicht benötigt.

## Optional: zusätzlich im Betriebssystem prüfen

Diese Kontrolle ist für den Webinstaller nicht erforderlich. Sie kann helfen,
wenn mehrere USB-Geräte angeschlossen sind oder die Prozessorseite unabhängig
vom Browser bestätigt werden soll.

- **Windows:** Unter **Geräte-Manager → Anschlüsse (COM & LPT)** erscheint der
  RoonPilot-ESP32-S3 als **Serielles USB-Gerät (COMx)**. Der klassische
  Begleitprozessor erscheint als **USB-SERIAL CH340 (COMx)**.
- **macOS:** Unter **Systeminformationen → Hardware → USB** erscheint der
  RoonPilot-ESP32-S3 als **USB JTAG/serial**. Der klassische Begleitprozessor
  erscheint als **USB serial**.

Die Bezeichnungen im Betriebssystem sind nur eine Zusatzkontrolle. Für die
Installation ist der Eintrag **USB JTAG/serial debug unit** im Browserdialog
entscheidend.

Ausführliche Schrittfolgen: [Windows](installation-windows.md) ·
[macOS](installation-macos.md).

## Nach der Installation

Mit der [Ersteinrichtung](first-time-setup.md) fortfahren, um WLAN zu verbinden,
RoonPilot in Roon freizugeben und eine Zone auszuwählen.

Die [Companion-Sleep-Firmware](companion-firmware.md) des zweiten Prozessors ist
ein getrennter freiwilliger Schritt. Sie besitzt jetzt ebenfalls einen eigenen
Webinstaller und benötigt kein Kommandozeilenwerkzeug.

Mehr Details stehen unter [Hardware und die beiden Prozessoren](hardware-and-two-processors.md),
in der [optionalen Sicherungsanleitung](factory-backup.md) und unter
[Fehlerbehebung](troubleshooting.md). Kommandozeilenwerkzeuge gehören nicht zur
normalen Browser-Installation.
