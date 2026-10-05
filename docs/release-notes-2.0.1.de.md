# RoonPilot 2.0.1

[English](release-notes-2.0.1.md) · **Deutsch**

Historisches Release: **5. Oktober 2026**. Die aktuelle USB-Firmware und den Installationsweg beschreiben die [Release Notes zu 2.0.2](release-notes-2.0.2.de.md). Die 2.0.1-Binärdatei bleibt unverändert.

> [!WARNING]
> **RoonPilot-Onlineupdates sind vorübergehend gesperrt.** Den internen
> RoonPilot-Updater nicht verwenden, auch wenn noch ein altes Updateangebot
> angezeigt wird. Für eine saubere Installation von 2.0.2 den
> [USB-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/?v=2.0.2-usb)
> verwenden. Dabei werden Einstellungen und Bridge-Kopplungen gelöscht.
> Updates der separaten IR Bridge bleiben verfügbar.

## Änderungen an der Firmware

2.0.1 verwendet wieder den ursprünglichen RoonPilot-Signaturschlüssel.
Signaturprüfung, SHA-256-Prüfung und Boot-Rollback bleiben Bestandteil der
Firmware. Die Änderung belegt keinen zuverlässigen Online-Umstieg für jede
ältere Installation; der Controller-Onlinekanal bleibt gesperrt.

Die mit 2.0.0 eingeführten Funktionen bleiben enthalten: optionale IR Bridges,
Gruppensteuerung, Playlisten und Live Radio, Displaylayouts, Akkukalibrierung,
lokale Konfigurationsseiten und Diagnose. Die vollständige Funktionsbeschreibung
steht in den [historischen Release Notes zu 2.0.0](release-notes-2.0.0.de.md).
Für die aktuelle Installation gelten die Hinweise auf dieser Seite.

## Installationsstatus

2.0.1 ist nicht mehr die aktuelle USB-Auswahl. Der Installer bietet jetzt 2.0.2 und den festen 1.0.2-Rückweg an. Den aktuellen Installationsweg beschreiben die [Release Notes zu 2.0.2](release-notes-2.0.2.de.md) und die [Firmware-Anleitung](../guides/de/firmware-updates-and-recovery.md).

## Einstellungen und Bridge-Kopplungen

Eine saubere USB-Installation löscht RoonPilot-Einstellungen, Profilbibliothek,
WLAN-Zugang und die auf dem Controller gespeicherten Bridge-Kopplungen. Der
Companion und die separaten IR Bridges werden nicht geflasht oder gelöscht.

Eine JSON-Konfigurationssicherung stellt kryptografische Kopplungsschlüssel nicht
wieder her. WLAN und Roon neu einrichten. Bei Nutzung von IR Bridges die
Bridge-Funktion aktivieren, die Bridges erneut koppeln und wiederhergestellte
Profile sowie Zonenzuordnungen prüfen. Siehe
[Konfiguration sichern und wiederherstellen](../guides/de/configuration-backup.md).

## Eigenständige IR-Bridge-Version

Die optionale IR Bridge bleibt bei **1.0.0**. Ihr Webinstaller und ihr signierter
Online-Updatekanal bleiben verfügbar. Die Installation von RoonPilot 2.0.1
installiert keine Bridge- oder Companion-Firmware.

## Zurück zu 1.0.2

Der originale USB-Rückweg auf 1.0.2 bleibt als getrennte Installerauswahl
verfügbar. Auch er löscht die RoonPilot-Einstellungen. Unter 1.0.2 kein
2.0.x-Backup einspielen und keine Akkukalibrierung durchführen. Der vollständige
Ablauf steht in der [Rückweg-Anleitung](../guides/de/return-to-1.0.2.md).

[Änderungsprotokoll und frühere Releases](../CHANGELOG.de.md) ·
[Benutzerdokumentation](../guides/de/README.md)
