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

## Bereitstellung

- Das ESP32-S3-Factory-Abbild wird nur durch den autorisierten Web Installer
  installiert und nicht als einzelne Datei angeboten.
- Hauptfirmware-Updates installiert RoonPilot ausschliesslich aus dem
  freigegebenen signierten Online-Kanal.
- `roonpilot-companion-sleep-factory-v1.0.0.bin` ist die einzige separat
  herunterladbare Firmware und ausschliesslich fuer den Begleit-ESP32 bestimmt.
- Interne Archive, Hauptabbilder, Pruefsummenlisten, SBOMs, ELF- und Map-Dateien
  gehoeren nicht zur oeffentlichen Downloadflaeche.

## Lizenzierung

Für die RoonPilot-eigenen Teile gilt die RoonPilot-Lizenz für private
Binärnutzung 1.0. Offizielle unveränderte Firmware darf privat und nicht
kommerziell installiert und genutzt werden. Weitergabe, Veränderung, Reverse
Engineering, Quellcode-Rückgewinnung, Wettbewerbsanalyse und kommerzielle
Nutzung sind untersagt, soweit zwingendes Recht keine Ausnahme vorsieht.
Drittanbieterbestandteile behalten ihre unabhängigen Lizenzen.

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
- signiertes Online-OTA in beide A/B-Richtungen sowie Rollback;
- Companion-Sicherung, Stromspar-Firmware und Originalwiederherstellung;
- mindestens zwei vollständige Akku-Kalibrierläufe.

Vor öffentlichen Issues private IPs, WLAN-Namen und Roon-Metadaten aus
Protokollen und Bildern entfernen.
