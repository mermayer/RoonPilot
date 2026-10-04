# Vollständige Referenz aller Gerätebildschirme

[English](../screen-reference.md) · **Deutsch**

Die Bilder entsprechen den 360-×-360-LVGL-Layouts. Classic verwendet die
maßgebliche Projektreferenz; die übrigen Renderbilder nutzen fiktive Daten.
Zwischen Browserbild und physischem IPS-LCD können kleine Farbunterschiede
bestehen.

Die Beispiele unten verwenden die deutsche Oberfläche. Unter **System →
Sprache** kann jederzeit auf Englisch gewechselt werden. Musikmetadaten,
Roon-Zonennamen, Bridge-Kennungen und selbst vergebene Namen bleiben in beiden
Sprachen unverändert.

## Player- und Höransichten

### Classic

<img src="../../assets/device-screens/roonpilot-classic.png" width="360" alt="Maßgebliche aktuelle RoonPilot-Playeransicht Classic">

Ausgewogene Standardansicht mit Zone, rundem Cover, Titel, Interpret und drei
Wiedergabetasten. WLAN und – sofern die Akkuhardware unter **Energie** aktiviert
ist – das grobe Akkusymbol stehen innerhalb der sicheren runden Fläche. Bei
aktivierten Optionen ergänzt Classic außerdem verstrichene/Gesamtzeit, einen
feinen Fortschrittsbogen exakt auf dem vorhandenen Coverrand, Playlist- und
Live-Radio-Tasten sowie die Power-/Mute-Tasten der aktuellen Zone. Das Cover
selbst wird dabei nicht kleiner.

### Focus

<img src="../../assets/device-screens/02-now-playing-focus-de.png" width="360" alt="Focus-Player">

Betont Titel und große Tasten. Fortschrittsbalken sowie verstrichene/gesamte
Zeit stehen nahe dem unteren Rand.

### Orbit

<img src="../../assets/device-screens/03-now-playing-orbit-de.png" width="360" alt="Orbit-Player">

Vollbild-Cover, feiner äußerer Fortschrittsring und luftige umrandete Tasten.
Text und Bedienelemente bleiben innerhalb des Rundbereichs.

### Aura

<img src="../../assets/device-screens/34-now-playing-aura-de.png" width="360" alt="Aura-Player ohne Coverbild und mit nativer Roon-Lautstärke">

Aura verwendet nur die weich rekonstruierten Farben des aktuellen Covers,
zeigt aber das Coverbild selbst nicht. Titel, Interpret und Transport bleiben
ruhig und luftig; unter dem Interpreten steht groß der absolute native
Roon-Lautstärkewert. Bei einer External-IR-Bridge-Route wird dieser Wert bewusst
ausgeblendet, weil das externe Gerät keinen absoluten Zustand zurückmeldet.

### Optionale große Play/Pause-Touchfläche

<img src="../../docs/assets/large-play-pause-touch-de.svg" width="720" alt="Schaubild der optionalen großen Play/Pause-Touchfläche in der Displaymitte">

Die gestrichelte Fläche dient nur der Erklärung und wird auf dem Gerät nicht
eingeblendet. Wenn die Option unter **Display & Controls** aktiviert ist,
reagiert der ungefähr covergroße Bereich in allen Playeransichten auf ein kurzes
Tippen mit Play/Pause. Sichtbare Tasten behalten Vorrang; langes Halten sperrt
weiterhin die Bedienung. Der Doppeltipp für sofortiges Display-Aus steht in
diesem Modus nicht zur Verfügung. Standardmäßig ist die Option ausgeschaltet.

### Lautstärke und Zonenwahl

| Lautstärke | Zonenwahl |
| --- | --- |
| <img src="../../assets/device-screens/04-volume-de.png" width="320" alt="Aktuelles kompaktes Lautstärke-Popup über dem Classic-Player"> | <img src="../../assets/device-screens/05-zone-picker-de.png" width="320" alt="Zonenwahl"> |

Das kompakte amberfarbene Popup erscheint beim Drehen und beginnt mit dem
aktuellen Zonenwert. Es ersetzt den Player nicht durch einen eigenen Bildschirm:
Zonenname, Cover und Wiedergabetasten bleiben sichtbar.
Die Einheit folgt automatisch dem Roon-Lautstärketyp: `number` erscheint als
dimensionsloser Wert ohne erfundenes Prozentzeichen, `db` mit dem echten Wert
wie `-40 dB`.
Nur-relatives `incremental` bleibt bedienbar, liefert aber keinen absoluten
Anzeigewert. Der schmale waagerechte Balken stellt einen Pegel nur dar, wenn Roon brauchbare Minimal-
und Maximalwerte liefert; für dB wird kein künstlicher Bereich erfunden. In der
Zonenwahl kennzeichnen
Akzentrahmen und Haken die aktuelle Auswahl; nur freigegebene Zonen erscheinen.

<img src="../../assets/device-screens/33-ir-volume-overlay-de.png" width="360" alt="Relative Infrarot-Lautstärkeeinblendung">

Bei externer IR-Bridge-Route bleibt der Player sichtbar. Ein kompaktes
amberfarbenes Feld zählt die angenommenen relativen Aktionen jeder neuen
Bedienung ab null. `+4` bedeutet vier Schritte nach oben und ist kein absoluter
Hardware-Lautstärkewert.

### Roon-Gruppenmixer

| Ganze Gruppe | Ein physischer Ausgang |
| --- | --- |
| <img src="../../assets/device-screens/35-group-volume-de.png" width="320" alt="Roon-Gruppenmixer für alle Mitglieder"> | <img src="../../assets/device-screens/36-group-volume-individual-de.png" width="320" alt="Roon-Gruppenmixer mit einzeln ausgewähltem Ausgang"> |

Ist die gewählte Roon-Zone eine Gruppe, öffnet das erste Ringraster diesen Mixer,
ohne die Lautstärke zu ändern. Weiterdrehen regelt die ganze Gruppe. Jede
sichtbare Zeile behält ihre echte Rückmeldungsart: dimensionsloser Zahlenwert,
dB, relative Roon-Schritte, IR-Schritte oder `OFFLINE`. Eine der großen Zeilen
antippen, um nur diesen physischen Ausgang zu regeln; ein Tipp auf den
Gruppenkopf kehrt zur Gesamtgruppe zurück. Nach acht Sekunden ohne Eingabe
schließt die Anzeige. Drei Zeilen lassen sich einzeln auswählen, während die
Gesamtgruppensteuerung weiterhin alle geeigneten Ausgänge verarbeitet. Mehr zu
Routing, mehreren Bridges und Fehlerbehandlung steht unter
[Roon-Gruppen und Gruppenmixer](roon-groups.md).

## Verbindung und Auswahl

| Ansicht | Bedeutung |
| --- | --- |
| <img src="../../assets/device-screens/06-roon-pairing-de.png" width="250" alt="Roon-Freigabe"> | WLAN/Discovery funktionieren; RoonPilot unter **Roon → Einstellungen → Erweiterungen** freigeben. |
| <img src="../../assets/device-screens/18-wifi-setup-de.png" width="250" alt="WLAN-Setup"> | Keine gültigen WLAN-Daten; mit dem geschützten Setup-AP verbinden. |
| <img src="../../assets/device-screens/19-wifi-attention-de.png" width="250" alt="WLAN-Problem"> | Gespeicherte Angaben sind falsch; Recovery-AP ist verfügbar. |
| <img src="../../assets/device-screens/20-wifi-connecting-de.png" width="250" alt="WLAN-Verbindung"> | Angaben gespeichert; RoonPilot versucht beizutreten. |
| <img src="../../assets/device-screens/21-roon-offline-de.png" width="250" alt="Roon-Suche"> | Netzwerk steht; RoonPilot sucht bzw. verbindet den gewählten Server erneut. |
| <img src="../../assets/device-screens/22-select-roon-server-de.png" width="250" alt="Roon Server wählen"> | Mehrere Server gefunden; gewünschten auf der Webseite wählen. |
| <img src="../../assets/device-screens/23-zone-unavailable-de.png" width="250" alt="Zone nicht verfügbar"> | Kurzer Hinweis, falls die gespeicherte Zone fehlt oder offline ist; sobald eine andere freigegebene Zone verfügbar ist, öffnet RoonPilot automatisch die Auswahl. |
| <img src="../../assets/device-screens/24-select-zone-de.png" width="250" alt="Zone wählen"> | Roon ist freigegeben, aber keine Steuerzone ausgewählt. |

Das WLAN-Symbol zeigt gemessene RSSI-Stufen und ist kein stets volles
Dekorationselement.

## Uhren

| Bahnhofsuhr | Digitaluhr |
| --- | --- |
| <img src="../../assets/device-screens/07-clock-station-de.png" width="320" alt="Bahnhofsuhr"> | <img src="../../assets/device-screens/08-clock-digital-de.png" width="320" alt="Digitaluhr"> |

Die analoge Uhr läuft vorwärts. Die Digitaluhr zeigt Zeit und Datum. Beide
verwenden getrennte Tag-/Nachthelligkeiten und Umschaltzeiten. Touch kehrt zur
Wiedergabe zurück.

## Schnelleinstellungen

| Hauptmenü | System | Display |
| --- | --- | --- |
| <img src="../../assets/device-screens/09-quick-settings-de.png" width="220" alt="Schnelleinstellungen"> | <img src="../../assets/device-screens/09b-quick-system-de.png" width="220" alt="Systeminformationen"> | <img src="../../assets/device-screens/10-quick-display-de.png" width="220" alt="Displayeinstellungen"> |

| Lautstärke | Uhr | IR Bridges |
| --- | --- | --- |
| <img src="../../assets/device-screens/11-quick-volume-de.png" width="220" alt="Lautstärkeeinstellungen"> | <img src="../../assets/device-screens/12-quick-clock-de.png" width="220" alt="Uhreinstellungen"> | <img src="../../assets/device-screens/30-quick-ir-bridges-de.png" width="220" alt="IR-Bridge-Status"> |

**System** ist der erste Menüpunkt und zeigt Geräte-IP, verbundenen Roon Server,
Firmwarestand und Gesamtstatus. Er ist nur lesbar. **IR Bridges** erscheint bei
aktivierter optionaler Funktion und zeigt die von der gewählten Zone oder
Roon-Gruppe benötigten Bridges samt Transport, WLAN-Zustand und Feldstärke.
Andere Seiten werden mit Touch/Ring bedient und ausdrücklich gespeichert. Nach
30 Sekunden ohne Eingabe schließt sich das Menü.

## Roon-Bibliotheksansichten

| Playlisten | Live Radio |
| --- | --- |
| <img src="../../assets/device-screens/31-playlists-de.png" width="300" alt="Roon-Playlist-Auswahl"> | <img src="../../assets/device-screens/32-live-radio-de.png" width="300" alt="Roon-Live-Radio-Auswahl"> |

Playlistnamen belegen höchstens zwei vollständige Zeilen. Ring oder Wischen
wechselt die Seite; Touch wählt die Zeile. Bei Playlisten folgt die Frage
Normal/Zufällig, Live Radio startet ohne diese Abfrage. Leere Platzhalter und
graue, funktionslose Navigationsfelder auf der letzten Seite erscheinen nicht.
Beide Ansichten übernehmen die auf der Musik-Webseite gespeicherte Sortierung.
Playlisten lassen sich dort nach Name, Titelanzahl oder der von Roon gelieferten
Änderungsreihenfolge sortieren; für Live Radio steht die Namenssortierung zur
Verfügung, jeweils auf- oder absteigend.

## Akku-Kalibrierung

Diese Ansichten und die Kalibrierung auf der Energie-Seite sind nur verfügbar,
wenn **Eingebauter Akku** auf **Eingebaut** steht oder die Automatik einen Akku
positiv erkannt hat. **Nicht eingebaut** entfernt den vollständigen
Kalibrierungsweg.

| Vorbereitung | Lauf | Ergebnis |
| --- | --- | --- |
| <img src="../../assets/device-screens/13-battery-prepare-de.png" width="260" alt="Akku-Vorbereitung"> | <img src="../../assets/device-screens/14-battery-running-de.png" width="260" alt="Akku-Test läuft"> | <img src="../../assets/device-screens/15-battery-result-de.png" width="260" alt="Akku-Ergebnis"> |

Während des Laufs erzwingt RoonPilot das feste Profil mit 50 % Helligkeit und
240 MHz CPU. Die Zeit wird jede Sekunde im erhaltenen RTC-Speicher aufgezeichnet,
nicht minütlich im Flash. Der Lauf endet am Unterspannungs-Schutzstopp.

Nach Anschluss stabiler USB-Versorgung kann das Display vor dem Wiederanlauf
noch etwa 33 Sekunden schwarz bleiben. Nur ein vollständig beendeter Lauf mit
gültiger erhaltener Aufzeichnung ab fünf Minuten kann als Referenz gespeichert
werden. Bei einem unterbrochenen Lauf bleibt Speichern gesperrt; Verwerfen
erhält die bisherige Referenz. Das Ergebnis wird nie automatisch übernommen
oder in einen Akkuprozentwert umgerechnet.
Siehe [Akku und Laufzeit](battery-and-runtime.md).

Bei einer Unterbrechung zeigt das Gerät stattdessen **TEST UNTERBROCHEN** und
sperrt **SPEICHERN**, auch wenn bereits mehr als fünf Minuten gemessen wurden:

<img src="../../assets/device-screens/15b-battery-interrupted-de.png" width="300" alt="Unterbrochene Akkukalibrierung; Speichern ist gesperrt">

## Rückmeldung der Bediensperre

| Gesperrt | Entsperrt |
| --- | --- |
| <img src="../../assets/device-screens/16-controls-locked-de.png" width="300" alt="Bedienung gesperrt"> | <img src="../../assets/device-screens/17-controls-unlocked-de.png" width="300" alt="Bedienung entsperrt"> |

Jeder Bedienversuch bei Sperre wiederholt den Hinweis. Zum Umschalten die Mitte
etwa 1,2 Sekunden halten.

## Start und Wartung

Wurde eine freigegebene neuere Version gefunden, zeigt **UPDATE AVAILABLE** die
installierte und verfügbare Version. Die Anzeige erscheint nur über einer
unbenutzten Playeransicht und höchstens einmal innerhalb von 24 Stunden.
**LATER** quittiert sie; eine Drehung quittiert sie und regelt anschließend die
Lautstärke. Die Meldung installiert nichts. Das Update wird bei Bedarf unter
**System → Firmware update** ausdrücklich gestartet.

| Ansicht | Bedeutung |
| --- | --- |
| <img src="../../assets/device-screens/25-boot-de.png" width="250" alt="Startbildschirm"> | Firmware startet; installierte Version wird gezeigt. |
| <img src="../../assets/device-screens/26-firmware-update-de.png" width="250" alt="Firmwareupdate"> | OTA wird installiert. Stromversorgung nicht trennen. |
| <img src="../../assets/device-screens/27-hardware-test-de.png" width="250" alt="Hardwaretest"> | Herstellerorientierte Testansicht für Display/Ring-Diagnose. |
| <img src="../../assets/device-screens/28-screen-off-de.png" width="250" alt="Display aus"> | Schwarzer Ruhemodus; erste Eingabe weckt, ohne Befehl auszulösen. |
