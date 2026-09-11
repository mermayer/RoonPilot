# RoonPilot-Dokumentation

[English documentation](../README.md) · **Deutsche Dokumentation**

Diese Dokumentation setzt keinerlei Erfahrung mit ESP-Geräten, seriellen
Anschlüssen oder Firmware-Installation voraus.

## Weg zur ersten Installation

Zuerst den Computer auswählen:

- **[Installation unter Windows →](installation-windows.md)**
- **[Installation unter macOS →](installation-macos.md)**

Beide Anleitungen beginnen beim Kabel und dem vom Betriebssystem angezeigten
USB-Namen. Ein Kommandozeilenwerkzeug wird nicht benötigt. Danach folgen
[Ersteinrichtung](first-time-setup.md), [Bedienung am Gerät](device-controls.md)
und der [Testplan für Einsteiger](test-plan.md).

Wenn später möglicherweise der exakte Auslieferungszustand des Herstellers
wiederhergestellt werden soll, vorher die
[optionale Original-Firmware-Sicherung](factory-backup.md) erstellen. Sie ist
keine Voraussetzung für RoonPilot. Nach der eindeutigen Erkennung des ESP32-S3
geht es mit dem
[öffentlichen RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/)
weiter.

Die technische Erklärung der beiden Prozessoren steht getrennt unter
[Hardware und die beiden Prozessoren](hardware-and-two-processors.md).

## Vollständige Referenz

| Thema | Dokument |
| --- | --- |
| Installations-Betriebssystem wählen | [Windows oder macOS](installation.md) |
| Einsteigerinstallation unter Windows | [Windows-Installation](installation-windows.md) |
| Einsteigerinstallation unter macOS | [macOS-Installation](installation-macos.md) |
| Jede Displayansicht | [Bildschirmreferenz](screen-reference.md) |
| Jede lokale Konfigurationsseite | [Weboberfläche](web-interface.md) |
| Factory-Installation und signierte Online-Updates | [Firmwareupdates und Wiederherstellung](firmware-updates-and-recovery.md) |
| Optionale Stromspar-Firmware und Webinstaller des zweiten ESP | [Companion-Firmware](companion-firmware.md) |
| Companion-Installation unter Windows | [Windows-Companion-Installation](companion-installation-windows.md) |
| Companion-Installation unter macOS | [macOS-Companion-Installation](companion-installation-macos.md) |
| Optionale Sicherung der Original-Firmware | [Windows oder macOS wählen](factory-backup.md) |
| Optionales Backup unter Windows | [Windows-Originalsicherung](factory-backup-windows.md) |
| Optionales Backup unter macOS | [macOS-Originalsicherung](factory-backup-macos.md) |
| Standalone-/Python-esptool unter macOS | [esptool unter macOS verwenden](esptool-macos.md) |
| Einstellungen sichern | [Konfiguration exportieren/importieren](configuration-backup.md) |
| Akku-Grenzen und Kalibrierung | [Akku und Laufzeit](battery-and-runtime.md) |
| Deep Sleep und Aufwachen | [Deep Sleep](deep-sleep.md) |
| Fehler suchen | [Fehlerbehebung](troubleshooting.md) |
| Gespeicherte und nicht gespeicherte Daten | [Datenschutz und Sicherheit](privacy-and-security.md) |
| Private/kommerzielle Nutzung und Weitergabe | [Lizenzierung und Weitergabe](licensing.md) |

## Begriffe

- **Roon Server:** Computer oder Gerät mit Roons Server-Software; früher
  „Core“ genannt.
- **Zone:** Roon-Wiedergabeziel oder Gruppe von Wiedergabezielen.
- **Haupt-ESP32-S3:** Prozessor für RoonPilot, Display, Touch, WLAN, Roon und
  lokale Webseite.
- **Begleit-ESP32:** zweiter, unabhängiger klassischer ESP32 im selben Gerät.
- **Factory-Installation:** vollständiges Löschen/Installieren des ESP32-S3,
  ausschließlich durch den autorisierten Web Installer.
- **Companion-Installation:** freiwilliges Löschen/Installieren des klassischen
  ESP32 durch dessen getrennten, auf diesen Chip beschränkten Webinstaller.
- **OTA-Update:** signiertes Anwendungsupdate, das RoonPilot selbst abruft und
  installiert; eine manuelle Hauptfirmware-Datei wird nicht angeboten.
- **AP:** temporärer WLAN-Zugangspunkt für die Ersteinrichtung.
- **NVS:** nichtflüchtiger Einstellungsspeicher des ESP32.

Vor einem öffentlichen GitHub-Issue Diagnoseinformationen unter **System**
herunterladen und private WLAN-Namen, IP-Adressen, Roon-Metadaten sowie andere
persönliche Angaben aus Bildern und Protokollen entfernen.
