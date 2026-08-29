# Konfiguration exportieren und importieren

[English](../configuration-backup.md) · **Deutsch**

## Zweck

Ein Export sichert die nicht geheimen RoonPilot-Einstellungen vor Tests,
Factory Reset, Gerätewechsel oder umfangreichen Änderungen. Er ist keine
Firmware- oder Original-Flash-Sicherung.

## Enthalten

- Gerätename und Roon-Verbindungsmodus/-adresse;
- sichtbare/ausgeblendete sowie primäre Zone;
- Displayhelligkeiten, Dimm-/Ruhezeiten und Uhrenmodus;
- Tag-/Nachthelligkeit und Umschaltzeiten der Uhr;
- Hintergrundintensität, Playerlayout, Akzentfarbe und 180°-Drehung;
- Lautstärkeschritt, Richtung, Beschleunigung und Maximalwert;
- Deep-Sleep-Einstellung und Wartezeit;
- akzeptierte Akku-Referenzdaten, soweit das aktuelle Schema sie unterstützt.

## Absichtlich ausgeschlossen

- WLAN-Kennwort;
- Roon-Freigabe-/Kopplungstoken;
- private Schlüssel oder Update-Signaturschlüssel;
- Sitzungs-/Update-Token der lokalen Webseite;
- Entwicklungszugangsdaten und private Diagnoseinhalte.

## Export

1. **System → Export configuration** öffnen.
2. JSON-Datei an einem sicheren Ort speichern.
3. Inhalt vor öffentlicher Weitergabe trotzdem auf private Netzwerknamen,
   Adressen und Zonenbezeichnungen prüfen.

## Import

1. Vorhandenen Zustand bei Bedarf erneut exportieren.
2. **System → Import configuration** wählen.
3. Passende RoonPilot-JSON-Datei auswählen.
4. Vorschau/Bestätigung lesen und importieren.
5. Neustart oder Wiederverbindung abwarten.
6. Display, Zone, Roon und Power-Einstellungen kontrollieren.

Unbekannte Felder werden abgelehnt oder ignoriert, Pflichtfelder und Bereiche
validiert. Nach Import auf ein anderes Gerät müssen WLAN und gegebenenfalls
Roon-Freigabe bewusst neu eingerichtet werden, weil Geheimnisse nicht
übertragen werden.
