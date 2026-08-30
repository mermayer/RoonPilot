# RoonPilot-Dokumentation

[English documentation](../README.md) · **Deutsche Dokumentation**

Diese Dokumentation setzt keinerlei Erfahrung mit ESP-Geräten, seriellen
Anschlüssen oder Firmware-Installation voraus.

## Weg zur ersten Installation

1. [Hardware und die beiden Prozessoren](hardware-and-two-processors.md)
2. [Original-Firmware sichern](factory-backup.md)
3. [RoonPilot installieren](installation.md)
4. [Ersteinrichtung](first-time-setup.md)
5. [Bedienung am Gerät](device-controls.md)
6. [Testplan für Einsteiger](test-plan.md)

Die ersten beiden Seiten dürfen nicht übersprungen werden. Wegen der
ungewöhnlichen Auswahl des Prozessors durch die USB-C-Steckerorientierung sind
sie Bestandteil der Installation und keine optionale Hintergrundinformation.

## Vollständige Referenz

| Thema | Dokument |
| --- | --- |
| Jede Displayansicht | [Bildschirmreferenz](screen-reference.md) |
| Jede lokale Konfigurationsseite | [Weboberfläche](web-interface.md) |
| Factory-Installation und signierte Online-Updates | [Firmwareupdates und Wiederherstellung](firmware-updates-and-recovery.md) |
| Optionale Stromspar-Firmware des zweiten ESP | [Companion-Firmware](companion-firmware.md) |
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
- **OTA-Update:** signiertes Anwendungsupdate, das RoonPilot selbst abruft und
  installiert; eine manuelle Hauptfirmware-Datei wird nicht angeboten.
- **AP:** temporärer WLAN-Zugangspunkt für die Ersteinrichtung.
- **NVS:** nichtflüchtiger Einstellungsspeicher des ESP32.

Vor einem öffentlichen GitHub-Issue Diagnoseinformationen unter **System**
herunterladen und private WLAN-Namen, IP-Adressen, Roon-Metadaten sowie andere
persönliche Angaben aus Bildern und Protokollen entfernen.
