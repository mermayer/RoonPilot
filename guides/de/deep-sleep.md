# Deep Sleep

[English](../deep-sleep.md) · **Deutsch**

Deep Sleep schaltet den ESP32-S3 weitgehend ab und spart deutlich mehr Energie
als ein schwarzes oder gedimmtes Display. Das Aufwachen ist daher ein kompletter
Start mit erneuter WLAN- und Roon-Verbindung.

## Aktivieren

1. Geräte-Webseite öffnen.
2. **Power → Deep sleep** aktivieren.
3. Wartezeit wählen.
4. Änderungen speichern.
5. Gewählte Zone pausieren oder stoppen und Gerät unangetastet lassen.

## Alle erforderlichen Bedingungen

- Funktion ist aktiviert und Wartezeit abgelaufen;
- gewählte Zone meldet eindeutig pausiert oder gestoppt;
- keine Wiedergabe, kein Laden/Puffern und kein unbekannter Zonenstatus;
- WLAN-Ersteinrichtung ist nicht aktiv;
- kein lokales oder Online-Firmwareupdate läuft;
- keine Akku-Kalibrierung ist vorbereitet, aktiv oder zu prüfen;
- Startvalidierung/Rollbackprüfung ist abgeschlossen;
- keine andere Wartungsoperation hält das Gerät wach.

Die Power-Seite zeigt Zulässigkeit, Restzeit oder Blockierungsgrund. Deep Sleep
ist während Akku-Kalibrierung ausdrücklich deaktiviert, selbst wenn er zuvor
eingeschaltet war.

## Aufwachen

- Display antippen oder äußeren Ring drehen.
- Einige Sekunden für vollständigen Boot, WLAN und Roon abwarten.
- Die auslösende Eingabe führt keinen Wiedergabe-/Lautstärkebefehl aus.
- Netzwerkverkehr und Browserzugriff können einen tief schlafenden ESP32-S3
  nicht aufwecken.

## Gespeicherte Daten

WLAN, Roon-Freigabe, Zone, Display-/Uhreinstellungen, Deep-Sleep-Konfiguration
und andere NVS-Werte bleiben erhalten. Laufzeit und flüchtige Verbindungssitzung
beginnen neu.

## Sicherer Test

1. USB angeschlossen lassen.
2. Kurze Testwartezeit wählen.
3. Roon-Zone pausieren und Webseite schließen.
4. Einschlafen abwarten.
5. Erst mit Touch wecken, vollständige Rückkehr prüfen.
6. Test wiederholen und mit Ring wecken.
7. Anschließend gewünschte reale Wartezeit einstellen.

Startet Deep Sleep nicht, auf der Power-Seite Blockierungsgrund und Zonenstatus
prüfen. Wacht es nicht auf, zunächst beide Eingabearten testen, USB stabil
halten und serielles Protokoll erfassen. Nicht löschen oder flashen, nur weil
ein Wake-Test scheitert.
