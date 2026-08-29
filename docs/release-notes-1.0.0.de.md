# RoonPilot Firmware 1.0.0

Dies ist der erste vollständige RoonPilot-Validierungsbuild für das Waveshare
`ESP32-S3-Knob-Touch-LCD-1.8`. Er dient dazu, Installation,
Wiederherstellung und den vollständigen Testplan von einem sauberen Gerät aus
zu wiederholen.

## Enthalten

- direkte Roon-Erkennung, Freigabe und Zonensteuerung ohne Zusatzdienst;
- Classic-, Focus- und Orbit-Player mit coverbasierten Hintergründen;
- Touch-Wiedergabe, Wischgesten und Lautstärkeregelung per Drehring;
- konfigurierbare Zonenanzeige und primäre Steuerzone;
- Bahnhofs- und Digitaluhr mit Tag-/Nachthelligkeit;
- Schnelleinstellungen für Systeminformationen, Display, Uhr, Akzentfarbe und
  Lautstärke;
- Maximal-Lautstärke, Bediensperre und sichtbare Sperrrückmeldung;
- WLAN-Ersteinrichtungs-AP mit automatischer Rückkehr bei falschen Daten;
- lokale Webseite, sicherer Export/Import und Diagnose;
- Akku-Laufzeitkalibrierung mit wiederherstellbaren Prüfpunkten;
- abgesicherter Deep Sleep mit Touch-/Ring-Wake;
- lokale A/B-OTA, signierte Online-OTA, Startvalidierung und Rollback;
- Browser-Factory-Installation des ESP32-S3;
- separate optionale Stromspar-Firmware für den Begleit-ESP32.

## Dateien

- `roonpilot-factory-v1.0.0.bin`: vollständiges ESP32-S3-Abbild für blankes
  Gerät, Browserinstallation oder Wiederherstellung; löscht alles.
- `roonpilot-ota-v1.0.0.bin`: Anwendungsabbild für ein vorhandenes RoonPilot
  über die lokale Firmwareseite.
- `roonpilot-companion-sleep-factory-v1.0.0.bin`: ausschließlich klassischer
  Begleit-ESP32; niemals auf den ESP32-S3 schreiben.
- `roonpilot-complete-v1.0.0.zip`: empfohlenes Komplettpaket mit Firmware,
  Lizenztexten, Hinweisen und SPDX-Stückliste.
- `SHA256SUMS.txt`: veröffentlichte Prüfsummen.

## Lizenzierung

Für die RoonPilot-eigenen Teile gilt PolyForm Noncommercial 1.0.0. Private und
andere nicht kommerzielle Nutzung ist erlaubt; kommerzielle Nutzung benötigt
eine separate schriftliche Erlaubnis. Eine Veröffentlichung geänderten
Quellcodes ist nicht vorgeschrieben, bei Weitergabe müssen Lizenz und Hinweise
jedoch erhalten bleiben. Drittanbieterbestandteile behalten ihre unabhängigen
Lizenzen.

## Datenschutz und Vorbereitung

Die öffentlichen Factory-/OTA-Dateien enthalten keine Entwicklungs-WLAN-Daten,
private Roon-Adresse, Kopplungstoken oder privaten Signaturschlüssel. Die
USB-C-Orientierung wählt einen von zwei Prozessoren. Vor jeder Sicherung oder
jedem Schreiben den Chip erkennen und zuerst den vollständigen 16-MB- sowie
4-MB-Originalflash sichern.

## Noch zu validieren

- saubere Factory-Installation mit aktuellem Desktop-Chromium;
- AP-Ersteinrichtung und Recovery bei falschem Kennwort;
- Roon-Freigabe, Mehrfachserver- und Zonenbehandlung;
- alle Display-, Touch-, Wisch-, Ring- und Sperrabläufe;
- Deep-Sleep-Blockierung und Wake/Reconnect;
- lokales und signiertes Online-OTA sowie Rollback;
- Companion-Sicherung, Stromspar-Firmware und Originalwiederherstellung;
- mindestens zwei vollständige Akku-Kalibrierläufe.

Vor öffentlichen Issues private IPs, WLAN-Namen und Roon-Metadaten aus
Protokollen und Bildern entfernen.
