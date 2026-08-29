# Firmwareupdates und Wiederherstellung

[English](../firmware-updates-and-recovery.md) · **Deutsch**

## Die drei Abbilder sind nicht austauschbar

| Abbild | Prozessor | Flashadresse | Einstellungen bleiben? |
| --- | --- | --- | --- |
| ESP32-S3 Factory | ESP32-S3 | `0x0` | Nein, vollständige Installation |
| ESP32-S3 OTA | ESP32-S3 | verwalteter inaktiver A/B-Slot | Normalerweise ja |
| Companion Factory | klassischer ESP32 | `0x0` | Ersetzt den Companion-Flash |

Vor jedem Schreiben Dateiname, SHA-256 und aktiven Chip prüfen.

## Lokales OTA-Update

1. Stabile USB-Stromversorgung anschließen.
2. Geräte-Webseite **System → Firmware update** öffnen.
3. Passende Datei `roonpilot-ota-vX.Y.Z.bin` wählen.
4. Version prüfen und Update starten.
5. Während Schreiben/Prüfen weder Seite schließen noch Strom trennen.
6. RoonPilot startet im anderen Anwendungsslot neu.
7. Startbildschirm, WLAN und Roon-Verbindung abwarten.
8. Unter System Version und Partition kontrollieren.

Die Firmware prüft wichtige Startmeilensteine. Scheitert das neue Abbild vor
dem gesunden Start wiederholt, kann der ESP-IDF-Bootloader zum vorherigen
gültigen Slot zurückkehren.

## Signiertes Online-Update — der normale spätere Weg

Nach der ersten Factory-Installation:

1. Geräte-IP im Browser öffnen.
2. **System → Firmware update** wählen.
3. **Check for updates** anklicken.
4. Wird eine neuere freigegebene Version gezeigt, **Download and install**
   auswählen.
5. Stabile Stromversorgung bis zum Neustart angeschlossen lassen.

RoonPilot lädt ein HTTPS-Manifest, vergleicht Projekt, Board, Version und Größe,
verlangt ein signiertes Abbild und prüft zusätzlich SHA-256. Das Update erfolgt
nur nach Benutzeraktion, niemals still im Hintergrund. Es schreibt den
inaktiven A/B-Slot und behält WLAN, Roon-Freigabe und Einstellungen
normalerweise bei.

Der private RSA-Signaturschlüssel befindet sich weder im Repository noch im
öffentlichen Abbild oder den Webdateien.

## Browser-Factory-Installation

Der [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/de/) ist nur
für vollständige Neuinstallation/Wiederherstellung des ESP32-S3 gedacht.

- Erfordert aktuellen Chromium-Desktopbrowser mit Web Serial, etwa Chrome oder
  Edge; Firefox/Safari funktionieren nicht.
- Löscht den gesamten ESP32-S3-Flash und alle Einstellungen.
- Beschreibt niemals den Begleit-ESP32.
- Zuerst Prozessor prüfen und vollständige Original-Sicherungen erstellen.

Für ein gewöhnliches Update immer die Online-/lokale OTA-Seite im Gerät nutzen.

## Unterbrochenes Update

- Ist die lokale Seite noch erreichbar, mehrere Minuten warten und System
  prüfen.
- Startet die alte Version, hat Rollback funktioniert; Diagnose sichern, bevor
  erneut versucht wird.
- Wiederholt sich der Startbildschirm, USB stabil halten und serielles Protokoll
  erfassen.
- Startet keine Anwendung, ESP32-S3-Factory-Abbild ab Adresse `0x0` verwenden.
- Niemals USB drehen und den zweiten Prozessor auf Verdacht flashen.

## Originalen ESP32-S3 wiederherstellen

```powershell
py -m esptool --chip esp32s3 --port COM4 chip-id
py -m esptool --chip esp32s3 --port COM4 write-flash 0x0 D:\RoonPilot-Factory-Backup\esp32s3-original-16mb.bin
```

Dieser Vorgang überschreibt RoonPilot und alle Einstellungen vollständig.
Vorher Chip, Dateigröße und Prüfsumme verifizieren.

## Originalen Begleit-ESP32 wiederherstellen

USB trennen, drehen, klassischen ESP32 bestätigen:

```powershell
py -m esptool --chip esp32 --port COM4 chip-id
py -m esptool --chip esp32 --port COM4 write-flash 0x0 D:\RoonPilot-Factory-Backup\companion-original-4mb.bin
```

Danach USB trennen und zur ESP32-S3-Seite zurückdrehen.

Ein Factory Reset auf der Systemseite löscht nur RoonPilot-Konfiguration und
Freigabe; er stellt Waveshares Originalsoftware nicht wieder her.
