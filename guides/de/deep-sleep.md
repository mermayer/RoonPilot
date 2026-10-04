# Deep Sleep

[English](../deep-sleep.md) · **Deutsch**

Deep Sleep schaltet den ESP32-S3 weitgehend ab und spart deutlich mehr Energie
als ein schwarzes oder gedimmtes Display. Das Aufwachen ist daher ein kompletter
Start mit erneuter WLAN- und Roon-Verbindung.

## Aktivieren

1. Geräte-Webseite öffnen.
2. **Energie → Deep Sleep** aktivieren.
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

Die Energie-Seite zeigt Zulässigkeit, Restzeit oder Blockierungsgrund. Der
normale, zeitgesteuerte Deep Sleep ist während Akku-Kalibrierung ausdrücklich
deaktiviert, selbst wenn er zuvor eingeschaltet war. Die Schutzabschaltung bei
Unterspannung gilt nur für den laufenden Kalibrierungsmesslauf. Der
Flash-Schreibschutz bleibt dagegen in allen Betriebsarten aktiv.

## Unterschied zum Unterspannungs-Schutzstopp

Nur während einer **laufenden Akku-Kalibrierung** beendet niedrige Systemspannung
den Messlauf durch Schutz-Deep-Sleep, auch wenn der normale Ruhezustand
ausgeschaltet ist. Im normalen Betrieb löst ein Versorgungswechsel diesen
softwaregesteuerten Schutzschlaf nicht aus.

Nach einem erhaltenen Kalibrierungs-Schutzstopp lässt sich RoonPilot nicht durch
Touch oder Drehen wecken. Stabile USB-Versorgung anschließen: Der Wiederanlauf
verlangt mindestens 4,28 V Systemspannung für drei Sekunden und wird alle
30 Sekunden geprüft. Das Display kann deshalb nach dem Anstecken noch etwa
33 Sekunden schwarz bleiben. Diese Wiederanlaufbedingung gilt nicht für
normalen, zeitgesteuerten Deep Sleep. Deep Sleep trennt den Akku nicht elektrisch
ab und ersetzt keine Akkuschutzschaltung. Siehe
[Akku und Laufzeit](battery-and-runtime.md).

## Aufwachen

Für den normalen, zeitgesteuerten Ruhezustand gilt:

- Display antippen oder äußeren Ring drehen.
- Einige Sekunden für vollständigen Boot, WLAN und Roon abwarten.
- Die auslösende Eingabe führt keinen Wiedergabe-/Lautstärkebefehl aus.
- Netzwerkverkehr und Browserzugriff können einen tief schlafenden ESP32-S3
  nicht aufwecken.

## Gespeicherte Daten

WLAN, Roon-Freigabe, Zone, Display-/Uhreinstellungen, Deep-Sleep-Konfiguration
und andere NVS-Werte bleiben erhalten. Laufzeit und flüchtige Verbindungssitzung
beginnen neu.

## Wenn das Gerät nicht schläft oder aufwacht

Auf der Energie-Seite Blockierungsgrund und Zonenstatus prüfen. Nach dem Wecken
den vollständigen Neustart und die erneute Verbindung abwarten, bevor die
Webseite geöffnet wird. Bei einem Kalibrierungs-Schutzstopp stattdessen stabile
USB-Versorgung anschließen. Siehe [Fehlerbehebung](troubleshooting.md), bevor
Firmware gelöscht oder neu geflasht wird.
