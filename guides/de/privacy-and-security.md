# Datenschutz und Sicherheit

[English](../privacy-and-security.md) · **Deutsch**

## Lokale Architektur

RoonPilot verbindet sich direkt im lokalen Netz mit Roon. Displaysteuerung,
Webkonfiguration und Freigabe laufen im ESP32-S3. Es gibt keinen RoonPilot-
Clouddienst, keine Relay-Bridge und kein Benutzerkonto. Internetzugriff erfolgt
nur bei ausdrücklich ausgelöster Online-Updateprüfung/-installation.

## Lokal gespeichert

- WLAN-SSID und Kennwort im NVS des Geräts;
- gewählter/manuell eingetragener Roon Server;
- Roon-Freigabedaten;
- Zonen-, Display-, Uhr-, Encoder-, Power- und Deep-Sleep-Einstellungen;
- Akku-Referenzlaufzeit und Kalibrierstatus;
- technische Zähler für Diagnose und Wiederherstellung.

## Öffentliche 1.0.0-Abbilder

Factory- und OTA-Abbilder enthalten keine Entwicklungs-SSID, kein
WLAN-Kennwort, keine private Roon-Adresse, kein Kopplungstoken und keinen
privaten Signaturschlüssel. Ein neues Gerät startet den geschützten
`RoonPilot-Setup-XXXXXX`-AP.

## Konfigurationsexport

Exporte schließen Kennwörter, Roon-Token, private Schlüssel und kurzlebige
Webtoken absichtlich aus. Zonen-/Servernamen und lokale Adressen können trotzdem
privat sein; Datei vor Veröffentlichung prüfen.

## Sicherheitsgrenze der lokalen Webseite

Die normale Geräteoberfläche ist für ein vertrauenswürdiges Heimnetz gedacht,
nicht für direkte Internetfreigabe. Keine Portweiterleitung einrichten. WLAN
mit aktuellem WPA2/WPA3 schützen und Gäste/IoT-Netze passend isolieren, ohne die
für Roon nötige lokale Kommunikation zu blockieren.

Zustandsändernde API-Aufrufe verwenden Sitzungs-/Update-Token und validieren
Eingaben. Das ersetzt keine sichere Netzgrenze.

## Setup-AP

Der AP startet ohne gültige WLAN-Daten oder nach wiederholtem
Verbindungsfehler. Seine minimale Seite konfiguriert nur WLAN. Nach erfolgreicher
Verbindung wird der AP beendet.

## Firmwareintegrität

- öffentliche OTA-Abbilder werden mit RSA-3072 signiert;
- Onlinepfad verlangt HTTPS, korrektes Projekt/Board, Version, Größe, Signatur
  und SHA-256;
- A/B-Update schreibt den inaktiven Slot;
- Bootvalidierung kann bei fehlerhaftem Start zurückrollen;
- Factory-Installation bleibt ein absichtlich manueller, vollständig
  löschender Vorgang.

## Diagnose

Diagnosepakete können IPs, WLAN-Namen, Zonen-/Roon-Namen, Status und
Titelmetadaten enthalten. Vor einem öffentlichen Upload private Inhalte
entfernen. Original-Flash-Sicherungen niemals veröffentlichen.

## Factory Reset und Weitergabe

Vor Weitergabe **System → Factory reset** ausführen und die Roon-Erweiterung
gegebenenfalls in Roon deaktivieren. Factory Reset entfernt RoonPilot-
Konfiguration und startet wieder den Setup-AP, stellt aber Waveshares
Originalsoftware nicht wieder her.

RoonPilot behauptet keine Ende-zu-Ende-Sicherheit gegen Angreifer mit physischem
Zugriff oder Kontrolle über das Heimnetz. Aussagen beschränken sich auf die
implementierten und geprüften Schutzmaßnahmen.
