# Bedienung am Gerät

[English](../device-controls.md) · **Deutsch**

RoonPilot kombiniert äußeren Drehring und kapazitiven Touch. Ein Wecksignal
wird bewusst verbraucht: Die erste Berührung oder Ringbewegung weckt ein
schwarzes Display, ohne gleichzeitig Musik oder Lautstärke zu verändern.

## Wiedergabe

Alle Texte der Firmware folgen der unter **System → Sprache** gewählten
Sprache. Zonenname, Titel, Interpret und Album stammen von Roon, werden
unverändert angezeigt und nicht maschinell übersetzt.

- Mittlere Taste für Play/Pause antippen.
- Linke/rechte Taste für vorherigen/nächsten Titel antippen.
- Nach **links** wischen für Weiter, nach **rechts** für Zurück.
- Zonennamen antippen, um die Zonenwahl zu öffnen.
- Nach **oben** wischen, um die Schnelleinstellungen zu öffnen.
- Außenring drehen, um die Lautstärke zu ändern.
- Displaymitte etwa 1,2 Sekunden halten, um alle Bedienelemente zu sperren oder
  freizugeben.
- Bei ausgeschalteter großer Play/Pause-Touchfläche zweimal kurz in die
  Displaymitte tippen, um das Display sofort vollständig auszuschalten.

Lange Titel laufen nach einem Trackwechsel einmal automatisch durch und bleiben
danach stehen. Kurze Titel bewegen sich nicht. Die Interpretenzeile verwendet
eine fettere, Unicode-fähige Schrift.

Die Display-Schriften decken neben Deutsch und Englisch auch west-, mittel- und
osteuropäische lateinische Zeichen, Griechisch, Kyrillisch, häufige Satz- und
Währungssymbole sowie eine bewusst ausgewählte Gruppe gebräuchlicher Emoji ab.
Emoji erscheinen einfarbig. Große asiatische Schriftsysteme sind wegen des
begrenzten Flash- und Arbeitsspeichers nicht enthalten; ein nicht vorhandenes
Zeichen wird sichtbar ersetzt, statt Textdaten stillschweigend zu verändern.

Die verstrichene Zeit läuft zwischen Roon-Meldungen lokal im Sekundentakt
weiter. Neue Roon-Positionen gleichen diese Zeit regelmäßig in kleinen Schritten
ab; ein Titelwechsel oder eine Abweichung von mehr als drei Sekunden wird sofort
übernommen. Dadurch bleibt die Anzeige ruhig, ohne nach einem Verbindungsverlust
unbegrenzt Fortschritt zu erfinden. Feste Ziffernabstände verhindern, dass die
Zeitfelder bei wechselnden Zahlen ihre Breite ändern.

Classic zeigt links die verstrichene und rechts die gesamte Zeit. Der feine
Rand des runden Covers dient zugleich als Fortschrittsring. Focus verwendet
seinen waagerechten Balken, Orbit den äußeren Fortschrittsbogen. Aura blendet
das eigentliche Cover aus, behält aber dessen weich abgeleiteten Farbhintergrund
und zeigt einen großen nativen Roon-Lautstärkewert, sofern ein absoluter Wert
existiert. Bei einer External-IR-Route bleibt dieser Wert bewusst verborgen.

<img src="../../assets/device-screens/roonpilot-classic.png" alt="Aktuelle RoonPilot-Playeransicht Classic mit Fortschrittsring und seitlichen Bedienelementen" width="360">

Bis zu vier seitliche Tasten können erscheinen: links Playlist über Power,
rechts Live Radio über Mute. Playlist/Radio werden global unter **Display &
Controls** gewählt; Power/Mute werden in der **Zonenverwaltung** pro Zone
aktiviert.

## Große Play/Pause-Touchfläche

Unter **Display & Controls** lässt sich optional eine unsichtbare, 194 Pixel
große Play/Pause-Touchfläche in der Displaymitte einschalten. Sie entspricht
ungefähr dem Coverdurchmesser der Classic-Ansicht, gilt in allen vier
Player-Layouts und verändert deren Gestaltung nicht. Ein kurzes Tippen in diese
Fläche schaltet zwischen Wiedergabe und Pause um; die sichtbaren Tasten behalten
Vorrang und die normale Touch-Vibration bleibt erhalten.

<img src="../../docs/assets/large-play-pause-touch-de.svg" alt="Schaubild der optionalen großen Play/Pause-Touchfläche" width="720">

Ein langer Druck in derselben Fläche sperrt oder entsperrt die Bedienung. Bei
schwarzem Display wird die erste Berührung weiterhin nur zum Aufwecken
verbraucht. Weil zwei kurze Berührungen dann zwei bewusste Play/Pause-Befehle
sind, steht der Doppeltipp zum sofortigen Ausschalten nur bei deaktivierter
großer Touchfläche zur Verfügung. Die Option ist standardmäßig ausgeschaltet.

## Lautstärke

<img src="../../assets/device-screens/04-volume-de.png" alt="Lautstärkeanzeige" width="360">

Beim Drehen erscheint die große Lautstärkeansicht der aktuellen Zone. Sie
beginnt mit dem tatsächlich von Roon gemeldeten Wert, verwendet die native
Schrittweite des Endpunkts und schließt anschließend automatisch. RoonPilot
erkennt die Roon-Lautstärketypen `number`, `db` und `incremental` ohne manuelle
Auswahl:

- `number` wird als dimensionsloser, von Roon gelieferter Wert ohne erfundenes
  Prozentzeichen angezeigt. Gemeldete Minimal- und Maximalwerte bestimmen den
  Bogen und den Webregler; nur intern kann bei älteren Endpunkten ohne Bereich
  der übliche Bereich 0 bis 100 als Rückfall dienen.
- `db` zeigt den echten Roon-Wert, zum Beispiel `-40 dB`; er wird nicht
  künstlich in 0 bis 100 umgerechnet.
- `incremental` verwendet relative Lauter-/Leiser-Befehle, wenn kein absoluter
  Wert verfügbar ist.

Auch eine externe IR-Route arbeitet relativ. Die Playeransicht bleibt sichtbar;
darüber erscheint ein kompaktes amberfarbenes Feld mit einer vorzeichenbehafteten
Aktionszahl wie `+2` oder `-1`. Sie beginnt bei jeder neuen Bedienung mit null
und zählt bestätigte Ringschritte. Sie ist kein erfundener absoluter DAC-Wert in
Prozent oder dB.

<img src="../../assets/device-screens/33-ir-volume-overlay-de.png" alt="Amberfarbene relative IR-Lautstärkeeinblendung" width="360">

### Roon-Gruppen

Bei einer ausgewählten Gruppe öffnet ein einzelnes Ringraster zunächst nur den
großen Mitgliedermixer und wird bewusst nicht als Lautstärkebefehl gesendet.
Weiterdrehen regelt die ganze Gruppe. Alternativ eine der großen Zeilen antippen
und danach nur diesen physischen Ausgang regeln. Ein Tipp auf den Gruppennamen
wählt wieder die vollständige Gruppe. Nach acht Sekunden ohne Bedienung schließt
der Mixer.

Jedes Mitglied behält seinen gespeicherten Weg und seine ehrliche Einheit.
Zahlenwert, dB, relative Roon- und IR-Rückmeldung können deshalb gleichzeitig
erscheinen. Eine nicht erreichbare Bridge wird als `OFFLINE` gezeigt und nicht
unbemerkt durch native Roon-Regelung ersetzt.

<img src="../../assets/device-screens/35-group-volume-de.png" alt="Gruppenlautstärkemixer mit drei unterschiedlichen Ausgabemodellen" width="360">

<img src="../../assets/device-screens/36-group-volume-individual-de.png" alt="Ein physischer Ausgang ist im Gruppenmixer ausgewählt" width="360">

[Roon-Gruppen und Gruppenmixer](roon-groups.md) erklärt das erste Raster,
schwarzes Display, mehrere Bridges und Gruppen mit mehr als drei Routen genau.

Die Einstellung 1, 2, 3, 5 oder 10 bezeichnet Roon-Schritte pro Raster, nicht
pauschal Prozent. Bei einem Endpunkt mit nativer Schrittweite 1 dB bedeutet der
Wert `2` beispielsweise 2 dB pro Raster. Beschleunigung kann die wirksame
Änderung bei schneller Drehung vervielfachen.

**Maximum volume** begrenzt Ringbefehle nur, wenn der Endpunkt brauchbare
Minimal- und Maximalwerte meldet. Andere Roon-Controller können die lokale
Grenze überschreiten; sie ist keine zertifizierte akustische Schutzfunktion.
Fehlen bei einem dB-Endpunkt die Grenzen, bleiben korrekte dB-Anzeige und
relative Regelung erhalten, RoonPilot erfindet aber keinen Bereich und wendet
keine möglicherweise unsichere lokale Obergrenze an.

## Zonenwahl

Zonennamen antippen, Zeile berühren oder mit dem Ring zwischen Seiten wechseln.
Die Liste läuft in beide Richtungen zyklisch. Nach oben/unten wischen wechselt
die Seite; Zurück verlässt die Ansicht ohne Zonenwechsel. Nur in **Zone
management** freigegebene Zonen erscheinen.

Verschwindet die gewählte Zone, öffnet RoonPilot die Zonenwahl automatisch,
sobald Roon wieder mindestens eine freigegebene Zone meldet. Es wird nicht
stillschweigend ein anderer Raum bedient. Nach einer Auswahl schließt das Menü
und der Player wird mit der neuen Zone aufgebaut.

## Schnelleinstellungen

<img src="../../assets/device-screens/09-quick-settings-de.png" alt="Schnelleinstellungen" width="360">

Auf der Startseite bewegt der Ring die Markierung; Berührung öffnet den
Menüpunkt. In Einstellungsseiten eine Zeile antippen und den Wert mit dem Ring
ändern. **Save & Close** speichert dauerhaft. Verlassen ohne Speichern stellt
vorherige Werte und Akzentfarbe wieder her. Nach 30 Sekunden ohne Touch- oder
Ringeingabe schließt sich das Schnellmenü automatisch.

### System

<img src="../../assets/device-screens/09b-quick-system-de.png" alt="Systeminformationen" width="360">

Der erste, nur lesbare Menüpunkt zeigt:

- IP-Adresse der lokalen RoonPilot-Webseite;
- Namen des verbundenen Roon Servers;
- laufenden Firmwarestand;
- **Ready**, **Wi-Fi offline**, **Roon offline** oder **Approval needed**.

Mit Zurück oder Wischen nach unten zum Hauptmenü zurückkehren.

### Display

- aktive Helligkeit;
- Intensität des aus dem Cover abgeleiteten Hintergrunds;
- Akzentfarbe;
- Player-Ansicht Classic, Focus, Orbit oder Aura;
- Vibrationsrückmeldung ein/aus und Stärke von 1 bis 100 Prozent.

Touchaktionen werden kurz bestätigt; Sperren/Entsperren verwendet ein eigenes
Doppelmuster. Das Drehen des physischen Rings löst niemals Vibration aus.

### Volume Controls

- Multiplikator der nativen Roon-Schrittweite;
- maximale Lautstärke, sofern der Endpunkt Grenzen meldet;
- Beschleunigung ein/aus;
- Standard-/umgekehrte Richtung.

### Clock

- Bahnhofs- oder Digitaluhr;
- regionale Zeitzone mit automatischer Sommer-/Winterzeit;
- Tag- und Nachthelligkeit;
- Uhrzeiten für Tag- und Nachtbeginn in 30-Minuten-Schritten.

Dimm-/Ruhezeiten, 180°-Drehung und „Never“-Auswahl bleiben auf der Webseite,
weil sie im Alltag selten geändert werden.

### IR Bridges

Dieser nur lesbare Eintrag erscheint ausschließlich bei aktivierter optionaler
Bridge-Funktion. Er zeigt die zur gewählten Zone oder Gruppe gehörenden Bridges
mit Klarname, Verbindung/Transport, WLAN-Zustand und verfügbaren Feldstärken.
**Automatische Zonensteuerung** folgt den gespeicherten Routen der Einzelzone
oder aller Mitglieder der aktuellen Gruppe. Es gibt höchstens einen BLE-Link;
mehrere benötigte Bridges können gleichzeitig über ihre getrennten
authentifizierten WLAN-Wege bereit sein. Nicht benötigte gespeicherte Bridges
müssen dagegen nicht verbunden bleiben.

<img src="../../assets/device-screens/30-quick-ir-bridges-de.png" alt="IR-Bridge-Status im Schnellmenü" width="360">

Pairing, Profile und Firmwarewartung bleiben in der lokalen Weboberfläche.

## Playlisten

Die optionale Playlist-Taste lädt die Roon-Playlisten der gewählten Zone. Mit
Ring oder Wischgeste seitenweise blättern und eine Zeile per Touch auswählen.
Lange Namen sind auf zwei vollständig sichtbare Zeilen begrenzt. Danach wird
gefragt, ob die Playlist normal oder zufällig starten soll; beide Varianten
ersetzen die bisherige Queue dieser Zone.

<img src="../../assets/device-screens/31-playlists-de.png" alt="Playlist-Auswahl mit zweizeiligen Namen" width="360">

Die Liste wird nur beim Öffnen angefordert. Reagiert Roon vorübergehend langsam,
zeigt RoonPilot den laufenden Vorgang bzw. Fehler und wartet nicht unbegrenzt.
Die auf der Musik-Webseite gespeicherte Sortierung gilt auch hier: Name,
Titelanzahl oder von Roon gelieferte Änderungsreihenfolge, jeweils auf- oder
absteigend. Roon stellt über diese Schnittstelle weder ein belastbares
Änderungsdatum noch die Playlist-Gesamtdauer bereit; RoonPilot erfindet diese
Werte deshalb nicht.

## Live Radio

Die optionale Radio-Taste öffnet Roons gespeicherte Live-Radio-Sender. Mit Ring
und Touch wie bei Playlisten navigieren und den Sender antippen. Live Radio
startet ohne Zufallsabfrage und ersetzt die bisherige Wiedergabe der Zone.
Die auf der Musik-Webseite gespeicherte Namenssortierung – auf- oder absteigend –
wird auch auf dem Gerät verwendet.

<img src="../../assets/device-screens/32-live-radio-de.png" alt="Auswahl gespeicherter Roon-Live-Radio-Sender" width="360">

## Bediensperre

Displaymitte ungefähr 1,2 Sekunden halten. Bei aktiver Sperre werden Touch,
Wischgesten und Ringbefehle ignoriert. Jeder Versuch zeigt **Controls locked**,
statt einen Roon-Befehl zu senden. Zum Entsperren erneut lange in die Mitte
drücken. Die lokale Webseite und andere Roon-Fernbedienungen bleiben nutzbar.

## Display sofort ausschalten

Bei deaktivierter großer Play/Pause-Touchfläche zweimal kurz und ohne
Wischbewegung in die Mitte eines aktiven Displays tippen.
RoonPilot schaltet die Hintergrundbeleuchtung vollständig aus und hält sie auch
bei Wiedergabe-, Titel- oder Webseitenaktivität ausgeschaltet. Nur das Display
ist aus: Roon, WLAN und die lokale Webseite laufen weiter. Dies ist kein Deep
Sleep.

Die nächste Berührung oder Ringbewegung weckt das Display. Dieses erste
Wecksignal wird vollständig verbraucht und betätigt weder die darunterliegende
Taste noch die Lautstärke. Die gewünschte Aktion danach wiederholen. Der
Doppeltipp ist klar vom etwa 1,2 Sekunden langen Mitteldruck für die
Bediensperre getrennt. Bei aktivierter großer Play/Pause-Touchfläche steht diese
Geste nicht zur Verfügung. Während der Akku-Kalibrierung bleibt sie gesperrt,
damit der Kalibrierungsbildschirm nicht unterbrochen wird.

## Dimmen, Uhr und schwarzer Bildschirm

- **Dim after** senkt nach Inaktivität die Playerhelligkeit.
- **Idle display after** wechselt bei inaktiver Wiedergabe zur gewählten Uhr
  oder zum schwarzen Bildschirm.
- **Idle timing starts after** bestimmt, ob die Zeit nach der letzten lokalen
  Touch-/Ringbedienung oder erst nach Ende der Wiedergabe in der gewählten Zone
  beginnt.
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
