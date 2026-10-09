# RoonPilot-Dokumentation

[English documentation](../README.md) · **Deutsche Dokumentation**

## Videoanleitungen zur Installation

Beginne mit RoonPilot. Companion-Firmware und IR Bridge sind optional.

<p align="center">
  <a href="https://mermayer.github.io/RoonPilot/video/installation-de.html"><img src="../../docs/assets/video-card-roonpilot-de.svg" alt="RoonPilot-Installationsvideo ansehen" width="228"></a>
  <a href="https://mermayer.github.io/RoonPilot/video/companion-installation-de.html"><img src="../../docs/assets/video-card-companion-de.svg" alt="Installationsvideo zur Companion-Firmware ansehen" width="228"></a>
  <a href="https://mermayer.github.io/RoonPilot/video/ir-bridge-installation-de.html"><img src="../../docs/assets/video-card-ir-bridge-de.svg" alt="IR-Bridge-Installationsvideo ansehen" width="228"></a>
</p>

> **Aktuelle USB-Firmware: 2.0.2.** Diese Anleitungen beschreiben RoonPilot und die
> optionale **IR Bridge 1.0.0**. Beide Webinstaller sind verfügbar. RoonPilot-Onlineupdates
> sind vorübergehend gesperrt; für eine saubere Installation von 2.0.2 den USB-Installer
> verwenden. Er löscht Einstellungen und Kopplungen. Onlineupdates der separaten
> IR Bridge bleiben verfügbar.

[RoonPilot 2.0.2 — Release Notes und aktuelle Installation](../../docs/release-notes-2.0.2.de.md)
· [Änderungsprotokoll und frühere Versionen](../../CHANGELOG.de.md)

Diese Dokumentation setzt keinerlei Erfahrung mit ESP-Geräten, seriellen
Anschlüssen oder Firmware-Installation voraus.

## Weg zur ersten Installation

1. Betriebssystem wählen: [Windows](installation-windows.md) oder
   [macOS](installation-macos.md)
2. [Ersteinrichtung](first-time-setup.md)
3. [Bedienung am Gerät](device-controls.md)
4. [Die erste Konfigurationssicherung erstellen](configuration-backup.md)

Wenn später möglicherweise der exakte Auslieferungszustand des Herstellers
wiederhergestellt werden soll, vorher die
[optionale Original-Firmware-Sicherung](factory-backup.md) erstellen. Sie ist
keine Voraussetzung für RoonPilot. Im normalen Ablauf wird zuerst der
[öffentliche RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/)
geöffnet. Sein Geräteauswahldialog zeigt selbst, welche USB-Seite verbunden ist.
Eine vorherige Prüfung im Geräte-Manager oder Systembericht ist nicht nötig.

Die [Hardwareseite](hardware-and-two-processors.md) erklärt bei Interesse,
warum das Drehen des USB-C-Steckers um 180 Grad zwischen zwei unabhängigen
Prozessoren wechselt.

## Vollständige Referenz

| Thema | Dokument |
| --- | --- |
| Installations-Betriebssystem wählen | [Windows oder macOS](installation.md) |
| Einsteigerinstallation unter Windows | [Windows-Installation](installation-windows.md) |
| Einsteigerinstallation unter macOS | [macOS-Installation](installation-macos.md) |
| Jede Displayansicht | [Bildschirmreferenz](screen-reference.md) |
| Roon-Gruppen, gemischte Lautstärkewege und Einzelsteuerung | [Roon-Gruppen und Gruppenmixer](roon-groups.md) |
| Jede lokale Konfigurationsseite | [Weboberfläche](web-interface.md) |
| Factory-Installation und signierte Online-Updates | [Firmwareupdates und Wiederherstellung](firmware-updates-and-recovery.md) |
| Sauberer USB-Rückweg von 2.0.2 zur originalen Version 1.0.2 | [Zurück zu RoonPilot 1.0.2](return-to-1.0.2.md) |
| Optionale Stromspar-Firmware des zweiten ESP | [Companion-Firmware](companion-firmware.md) |
| RoonPilot unter Windows/macOS installieren | [Windows](installation-windows.md) · [macOS](installation-macos.md) |
| Companion unter Windows/macOS installieren | [Windows](companion-installation-windows.md) · [macOS](companion-installation-macos.md) |
| Optionale Sicherung der Original-Firmware | [Original-Firmware sichern](factory-backup.md) |
| Standalone-/Python-esptool unter macOS | [esptool unter macOS verwenden](esptool-macos.md) |
| RoonPilot und Bridges gemeinsam sichern | [Eine Sicherung erstellen und wiederherstellen](configuration-backup.md) |
| Akku-Grenzen und Kalibrierung | [Akku und Laufzeit](battery-and-runtime.md) |
| Deep Sleep und Aufwachen | [Deep Sleep](deep-sleep.md) |
| Fehler suchen | [Fehlerbehebung](troubleshooting.md) |
| Gespeicherte und nicht gespeicherte Daten | [Datenschutz und Sicherheit](privacy-and-security.md) |
| Private/kommerzielle Nutzung und Weitergabe | [Lizenzierung und Weitergabe](licensing.md) |
| Optionaler vierteiliger 3D-gedruckter Stand | [RoonPilot-Stand und STL-Downloads](roonpilot-stand.md) |

## Optionale RoonPilot IR Bridge

Die einheitliche RoonPilot-Firmware kann einzelne Roon-Zonen um eine
Infrarotsteuerung erweitern. Die Funktion bleibt optional: Ist **Bridge &
Bluetooth** ausgeschaltet und der angeforderte Neustart abgeschlossen, bleiben
Bluetooth, Scans, Bridge-Verbindungen, Statusverkehr und Bridge-Updateprüfungen
ausgeschaltet. Gespeicherte Kopplungen und Routen bleiben für eine spätere
Reaktivierung erhalten.

| Bridge-Thema | Dokument |
| --- | --- |
| Nutzen und Zusammenspiel aller Komponenten | [IR-Bridge-Übersicht](ir-bridge.md) |
| Teile, Verdrahtung und erste Factory-Installation | [Hardware und Installation](ir-bridge-installation.md) |
| Gedrucktes Gehäuse, Montagebilder und STL-Dateien | [IR-Bridge-Gehäuse](ir-bridge-enclosure.md) |
| Kopplung, mehrere gespeicherte Bridges, BLE/WLAN und automatische Zonensteuerung | [Verbindungen und automatische Zonensteuerung](ir-bridge-connectivity.md) |
| Befehle lernen, Profile, Zonenrouten, Power, Mute und HTTP-Aktionen | [IR-Profile und Zonenrouting](ir-bridge-zones-and-profiles.md) |
| Signierte Onlineupdates, Backup, Wiederherstellung und Rettung | [Updates und Wiederherstellung](ir-bridge-updates.md) |
| Fehler systematisch eingrenzen | [IR-Bridge-Fehlerbehebung](ir-bridge-troubleshooting.md) |

Auch bei bereits aufgebauter Hardware mit der Übersicht beginnen. Vor allem
**gespeichert**, **verbunden**, **automatische Zonensteuerung** und
**Wartungsauswahl** bezeichnen unterschiedliche Zustände. Die Schaubilder und
Renderbilder mit fiktiven Daten zeigen, wie bis zu vier gespeicherte Bridges
physischen Ausgängen zugewiesen werden. Eine Einzelzone verwendet ihre benötigte
Route; eine Roon-Gruppe kann mehrere Bridges über einen BLE-Link und getrennte
authentifizierte WLAN-Wege gleichzeitig ansprechbar halten.

## Begriffe

- **Roon Server:** Computer oder Gerät mit Roons Server-Software; früher
  „Core“ genannt.
- **Zone:** Roon-Wiedergabeziel oder Gruppe von Wiedergabezielen.
- **Haupt-ESP32-S3:** Prozessor für RoonPilot, Display, Touch, WLAN, Roon und
  lokale Webseite.
- **Begleit-ESP32:** zweiter, unabhängiger klassischer ESP32 im selben Gerät.
- **IR Bridge:** optionales, getrenntes ESP32-S3-Gerät, das gelernte
  Infrarotbefehle wiedergibt. Es ist nicht der Begleit-ESP32 im RoonPilot.
- **Automatische Zonensteuerung:** normaler Bridge-Modus, in dem die gewählte
  Roon-Zone oder Gruppe alle benötigten Bridge-Routen und Funkwege bestimmt.
- **Wartungsauswahl:** vorübergehende Verbindung zu einer bestimmten Bridge für
  Lernen, Diagnose oder Firmwarewartung.
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
