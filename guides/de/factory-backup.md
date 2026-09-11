# Optionale Sicherung der Original-Firmware

[English](../factory-backup.md) · **Deutsch**

Eine Original-Firmware-Sicherung ist nur dann sinnvoll, wenn später
möglicherweise beide Prozessoren exakt in den Auslieferungszustand des eigenen
Waveshare-Gerätes zurückversetzt werden sollen. Sie ist freiwillig und keine
Voraussetzung für die Installation von RoonPilot oder der
Companion-Sleep-Firmware.

Die normale RoonPilot- und Companion-Installation läuft jeweils über einen
Webinstaller und benötigt keine Kommandozeilenwerkzeuge. Ein Browser-Installer
kann das vorhandene Flash jedoch nicht auslesen und auf dem Computer sichern.
Deshalb verwendet nur dieses freiwillige Backup Espressifs `esptool`.

## Computer auswählen

- **[Optionale Sicherung unter Windows erstellen →](factory-backup-windows.md)**
- **[Optionale Sicherung unter macOS erstellen →](factory-backup-macos.md)**

Beide Anleitungen erklären getrennt den Werkzeugdownload, die USB-Erkennung,
das vollständige 16-MB-Backup des ESP32-S3, das vollständige 4-MB-Backup des
Companion-ESP32, die exakten Dateigrößen und SHA-256-Prüfsummen.

## Wenn kein exakter Rückweg zum Auslieferungszustand benötigt wird

Das Backup überspringen und mit dem passenden Installer fortfahren:

- [RoonPilot-Hauptfirmware installieren](installation.md)
- [Optionale Companion-Firmware installieren](companion-firmware.md)

Ein RoonPilot-Konfigurationsexport ist etwas anderes als dieses
Original-Firmware-Backup. Er sichert Einstellungen zum späteren Import, enthält
aber keine Hersteller-Firmware.
