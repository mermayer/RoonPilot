# RoonPilot installieren

[English](../installation.md) · **Deutsch**

Wähle zuerst den Computer, mit dem du installieren möchtest. Jede Anleitung
beginnt beim Anstecken und zeigt genau den Gerätenamen, an dem der ESP32-S3 zu
erkennen ist.

## Betriebssystem wählen

### [Installation unter Windows →](installation-windows.md)

Unter **Geräte-Manager → Anschlüsse (COM & LPT)** nachsehen:

- **Richtig für RoonPilot:** `Serielles USB-Gerät (COMx)`
- **Andere Steckerstellung:** `USB-SERIAL CH340 (COMx)`

### [Installation unter macOS →](installation-macos.md)

Unter **Systeminformationen → Hardware → USB** nachsehen:

- **Richtig für RoonPilot:** `USB JTAG/serial`
- **Andere Steckerstellung:** `USB serial`

Erscheint das jeweils andere Gerät, USB abziehen, den USB-C-Stecker am
RoonPilot-Gerät um 180 Grad drehen und neu verbinden. Den Stecker nicht drehen,
solange er noch eingesteckt ist.

## Das wird benötigt

- das Waveshare ESP32-S3-Knob-Touch-LCD-1.8;
- ein USB-Datenkabel, kein reines Ladekabel;
- ein aktueller Desktopbrowser Chrome oder Edge;
- der [RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/).

Eine Sicherung der Original-Firmware ist **freiwillig**. Sie ist nur sinnvoll,
wenn später vielleicht der exakte Auslieferungszustand des Herstellers
wiederhergestellt werden soll. Für Installation und Betrieb von RoonPilot wird
sie nicht benötigt.

## Nach der Installation

Mit der [Ersteinrichtung](first-time-setup.md) fortfahren, um WLAN zu verbinden,
RoonPilot in Roon freizugeben und eine Zone auszuwählen.

Mehr Details stehen unter [Hardware und die beiden Prozessoren](hardware-and-two-processors.md),
in der [optionalen Sicherungsanleitung](factory-backup.md) und unter
[Fehlerbehebung](troubleshooting.md). Kommandozeilenwerkzeuge gehören nicht zur
normalen Browser-Installation.
