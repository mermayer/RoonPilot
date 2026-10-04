# RoonPilot 2.0.1

[English](release-notes-2.0.1.md) · **Deutsch**

GitHub-Release und Installationshinweise: **5. Oktober 2026**. Dies ist die
aktuelle **USB-Firmware-Version**. Die vorhandene Firmware 2.0.1 wird durch
diese Dokumentations- und Metadatenaktualisierung nicht verändert.

> [!WARNING]
> **RoonPilot-Onlineupdates sind vorübergehend gesperrt.** Den internen
> RoonPilot-Updater nicht verwenden, auch wenn noch ein altes Updateangebot
> angezeigt wird. Für eine saubere Installation von 2.0.1 den
> [USB-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/?v=2.0.1-usb)
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

## 2.0.1 über USB installieren

1. Wenn die bisherige RoonPilot-Webseite erreichbar ist, eine Konfigurationssicherung
   speichern. Sicherungen aus 1.0.2 und 2.0.x getrennt aufbewahren.
2. RoonPilot mit einem USB-Datenkabel an einen stabilen Computer-USB-Port anschließen.
3. Den [RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/?v=2.0.1-usb)
   in Chrome oder Edge auf dem Computer öffnen und **RoonPilot 2.0.1** auswählen.
4. Prozessor und Lizenz bestätigen. Im USB-Auswahldialog **USB JTAG/serial debug
   unit**, den Haupt-ESP32-S3, wählen, nicht den Companion-ESP32.
5. Installation vollständig abschließen und den Neustart abwarten, ohne USB zu
   trennen. Vollständiges Löschen ist enthalten, auch bei derselben Versionsnummer.
6. Der [Ersteinrichtung](../guides/de/first-time-setup.md) folgen: WLAN-Zugang
   eingeben, RoonPilot in Roon freigeben und eine Zone wählen.

Python, Kommandozeilen-Flashen und ein getrennter Firmware-Download sind nicht
erforderlich. Die bebilderten Abläufe stehen unter
[Windows-Installation](../guides/de/installation-windows.md) und
[macOS-Installation](../guides/de/installation-macos.md).

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
