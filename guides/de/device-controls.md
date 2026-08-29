# Bedienung am Gerät

[English](../device-controls.md) · **Deutsch**

RoonPilot kombiniert äußeren Drehring und kapazitiven Touch. Ein Wecksignal
wird bewusst verbraucht: Die erste Berührung oder Ringbewegung weckt ein
schwarzes Display, ohne gleichzeitig Musik oder Lautstärke zu verändern.

## Wiedergabe

- Mittlere Taste für Play/Pause antippen.
- Linke/rechte Taste für vorherigen/nächsten Titel antippen.
- Nach **links** wischen für Weiter, nach **rechts** für Zurück.
- Zonennamen antippen, um die Zonenwahl zu öffnen.
- Nach **oben** wischen, um die Schnelleinstellungen zu öffnen.
- Außenring drehen, um die Lautstärke zu ändern.
- Displaymitte etwa 1,2 Sekunden halten, um alle Bedienelemente zu sperren oder
  freizugeben.

Lange Titel laufen nach einem Trackwechsel einmal automatisch durch und bleiben
danach stehen. Kurze Titel bewegen sich nicht. Die Interpretenzeile verwendet
eine fettere, Unicode-fähige Schrift.

## Lautstärke

<img src="../../assets/device-screens/04-volume.png" alt="Lautstärkeanzeige" width="360">

Beim Drehen erscheint die große Lautstärkeansicht der aktuellen Zone. Der Wert
wird durch **Maximum volume** begrenzt, auch bei Beschleunigung. Einstellbar sind
Richtung, Schrittweite (1, 2, 3, 5 oder 10 Prozent pro Raster), Beschleunigung
und lokale Maximalgrenze. Andere Roon-Controller können die lokale Grenze
überschreiten; sie ist keine zertifizierte akustische Schutzfunktion.

## Zonenwahl

Zonennamen antippen, Zeile berühren oder mit dem Ring zwischen Seiten wechseln.
Die Liste läuft in beide Richtungen zyklisch. Nach oben/unten wischen wechselt
die Seite; Zurück verlässt die Ansicht ohne Zonenwechsel. Nur in **Zone
management** freigegebene Zonen erscheinen.

## Schnelleinstellungen

<img src="../../assets/device-screens/09-quick-settings.png" alt="Schnelleinstellungen" width="360">

Auf der Startseite bewegt der Ring die Markierung; Berührung öffnet den
Menüpunkt. In Einstellungsseiten eine Zeile antippen und den Wert mit dem Ring
ändern. **Save & Close** speichert dauerhaft. Verlassen ohne Speichern stellt
vorherige Werte und Akzentfarbe wieder her.

### System

<img src="../../assets/device-screens/09b-quick-system.png" alt="Systeminformationen" width="360">

Der erste, nur lesbare Menüpunkt zeigt:

- IP-Adresse der lokalen RoonPilot-Webseite;
- Namen des verbundenen Roon Servers;
- **Ready**, **Wi-Fi offline**, **Roon offline** oder **Approval needed**.

Mit Zurück oder Wischen nach unten zum Hauptmenü zurückkehren.

### Display

- aktive Helligkeit;
- Intensität des aus dem Cover abgeleiteten Hintergrunds;
- Akzentfarbe;
- Player-Ansicht Classic, Focus oder Orbit.

### Volume Controls

- Lautstärkeschritt;
- maximale Lautstärke;
- Beschleunigung ein/aus;
- Standard-/umgekehrte Richtung.

### Clock

- Bahnhofs- oder Digitaluhr;
- Tag- und Nachthelligkeit;
- Uhrzeiten für Tag- und Nachtbeginn in 30-Minuten-Schritten.

Dimm-/Ruhezeiten, 180°-Drehung und „Never“-Auswahl bleiben auf der Webseite,
weil sie im Alltag selten geändert werden.

## Bediensperre

Displaymitte ungefähr 1,2 Sekunden halten. Bei aktiver Sperre werden Touch,
Wischgesten und Ringbefehle ignoriert. Jeder Versuch zeigt **Controls locked**,
statt einen Roon-Befehl zu senden. Zum Entsperren erneut lange in die Mitte
drücken. Die lokale Webseite und andere Roon-Fernbedienungen bleiben nutzbar.

## Dimmen, Uhr und schwarzer Bildschirm

- **Dim after** senkt nach Inaktivität die Playerhelligkeit.
- **Idle display after** wechselt bei inaktiver Wiedergabe zur gewählten Uhr
  oder zum schwarzen Bildschirm.
- **Never** deaktiviert den jeweiligen Übergang.
- Bei gewählter Uhr bleibt sie mit eigener Tag-/Nachthelligkeit sichtbar und
  wird nicht später zwangsläufig schwarz.
- Touch auf der Uhr kehrt zur Wiedergabe zurück.
- Touch oder Ring weckt Schwarz; danach gewünschte Aktion wiederholen.

## Deep Sleep und 180°-Drehung

Deep Sleep startet nur nach der eingestellten Pause-/Stop-Zeit der gewählten
Zone. Touch oder Ring löst einen vollständigen Neustart mit WLAN-/Roon-
Verbindung aus. Setup, Update und Akku-Kalibrierung blockieren Deep Sleep.

**Rotate display 180°** dreht Darstellung und Touchkoordinaten gemeinsam. Die
Drehrichtung des Encoders wird unabhängig eingestellt.
