# Firmwareupdates und Wiederherstellung

[English](../firmware-updates-and-recovery.md) - **Deutsch**

## Welcher Weg ist richtig?

| Zweck | Prozessor | Methode | Einstellungen |
| --- | --- | --- | --- |
| Erstinstallation oder vollstaendige Wiederherstellung | ESP32-S3 | Autorisierter Chromium Web Installer | Vollstaendig geloescht |
| Normales Update | ESP32-S3 | Signiertes Online-Update am Geraet | Normalerweise erhalten |
| Optionale Companion-Stromersparnis | Klassischer ESP32 | Separate Companion-Datei und `esptool` | Ersetzt Companion-Flash |

Hauptfirmware fuer Factory und OTA wird nicht als einzelner Download angeboten.
Die Verfahren sind nicht austauschbar. Vor jeder Wiederherstellung muss die
USB-Orientierung eindeutig geprueft werden.

## Signiertes Online-Update - der normale Weg

1. RoonPilot mit stabiler USB-Stromversorgung verbinden.
2. IP-Adresse im Browser oeffnen.
3. **System - Firmware update** waehlen.
4. **Check for updates** auswaehlen.
5. Bei einer freigegebenen neueren Version **Download and install** waehlen.
6. Waehrend Download, Schreiben und Pruefung den Strom nicht trennen.
7. Startbildschirm, WLAN und Roon-Verbindung abwarten.
8. Unter System Version und aktive Partition kontrollieren.

RoonPilot prueft Releaseangaben, Ziel, Version, Groesse, SHA-256 und die
konfigurierte RSA-Signatur. Geschrieben wird der inaktive A/B-Slot. Erst nach
dem erfolgreichen Startselbsttest wird das neue Abbild gueltig; andernfalls
kehrt der Bootloader zum vorherigen Stand zurueck. Updates werden nie
automatisch installiert.

Der private Signaturschluessel befindet sich weder im Repository noch im
Installer, in Geraetedateien oder in der Firmware. Eingebettet ist nur das
oeffentliche Pruefmaterial.

## Browser-Factory-Wiederherstellung

Die bereitgestellte autorisierte Installerseite erst nach Erstellung und
Kontrolle beider Original-Sicherungen verwenden. Erforderlich ist ein aktueller
Chromium-Desktopbrowser mit Web Serial, etwa Chrome oder Edge. Firefox und
Safari funktionieren nicht.

Der Browser muss ESP32-S3 melden. Bei klassischem ESP32 oder Chipfehler sofort
abbrechen und USB drehen/neu verbinden. Factory loescht die gesamte Firmware
und Konfiguration des Hauptprozessors.

## Unterbrochenes Update

- Strom stabil lassen und mehrere Minuten warten.
- Startet die vorherige Version, war Rollback erfolgreich. Vor einem neuen
  Versuch Diagnose herunterladen.
- Bei weiterem Startloop USB stabil lassen und serielles Protokoll erfassen.
- Startet RoonPilot nicht, den autorisierten ESP32-S3 Web Installer nach
  Kontrolle von Prozessor und Sicherung erneut verwenden.
- Niemals den zweiten Prozessor auf Verdacht beschreiben.

## Original-Sicherung wiederherstellen

Die Wiederherstellung einer selbst erstellten Original-Sicherung ist etwas
anderes als die Weitergabe eines RoonPilot-Abbilds. Sie schreibt exakt die
zuvor gelesenen Bytes zurueck und ist destruktiv. Der Anleitung
[Original-Firmware sichern](factory-backup.md) folgen und Chip, exakte Groesse
und SHA-256 vor dem Restore kontrollieren.

## Companion-Wiederherstellung

Das optionale Companion-Abbild ist die einzige separat herunterladbare
RoonPilot-Firmware. Sicherung, Pruefsumme, Schreiben, Verifikation und Restore
erklaert die [Companion-Anleitung](companion-firmware.md).

Ein Factory Reset auf der Systemseite loescht nur RoonPilot-Konfiguration und
Kopplung. Er stellt die Waveshare-Firmware nicht wieder her.
