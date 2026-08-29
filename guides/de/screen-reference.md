# Vollständige Referenz aller Gerätebildschirme

[English](../screen-reference.md) · **Deutsch**

Die Renderbilder entsprechen den 360-×-360-LVGL-Layouts und verwenden fiktive
Daten. Zwischen Browserdarstellung und physischem IPS-LCD können kleine
Farbunterschiede bestehen.

## Player- und Höransichten

### Classic

<img src="../../assets/device-screens/01-now-playing-classic.png" width="360" alt="Classic-Player">

Ausgewogene Standardansicht mit Zone, rundem Cover, Titel, Interpret und drei
Wiedergabetasten. WLAN- und grobes Akkusymbol stehen innerhalb der sicheren
runden Fläche.

### Focus

<img src="../../assets/device-screens/02-now-playing-focus.png" width="360" alt="Focus-Player">

Betont Titel und große Tasten. Fortschrittsbalken sowie verstrichene/gesamte
Zeit stehen nahe dem unteren Rand.

### Orbit

<img src="../../assets/device-screens/03-now-playing-orbit.png" width="360" alt="Orbit-Player">

Vollbild-Cover, feiner äußerer Fortschrittsring und luftige umrandete Tasten.
Text und Bedienelemente bleiben innerhalb des Rundbereichs.

### Lautstärke und Zonenwahl

| Lautstärke | Zonenwahl |
| --- | --- |
| <img src="../../assets/device-screens/04-volume.png" width="320" alt="Lautstärke"> | <img src="../../assets/device-screens/05-zone-picker.png" width="320" alt="Zonenwahl"> |

Die Lautstärke erscheint beim Drehen. In der Zonenwahl kennzeichnen
Akzentrahmen und Haken die aktuelle Auswahl; nur freigegebene Zonen erscheinen.

## Verbindung und Auswahl

| Ansicht | Bedeutung |
| --- | --- |
| <img src="../../assets/device-screens/06-roon-pairing.png" width="250" alt="Roon-Freigabe"> | WLAN/Discovery funktionieren; RoonPilot unter **Roon → Einstellungen → Erweiterungen** freigeben. |
| <img src="../../assets/device-screens/18-wifi-setup.png" width="250" alt="WLAN-Setup"> | Keine gültigen WLAN-Daten; mit dem geschützten Setup-AP verbinden. |
| <img src="../../assets/device-screens/19-wifi-attention.png" width="250" alt="WLAN-Problem"> | Gespeicherte Angaben sind falsch; Recovery-AP ist verfügbar. |
| <img src="../../assets/device-screens/20-wifi-connecting.png" width="250" alt="WLAN-Verbindung"> | Angaben gespeichert; RoonPilot versucht beizutreten. |
| <img src="../../assets/device-screens/21-roon-offline.png" width="250" alt="Roon offline"> | Netzwerk steht, gewählter Server ist nicht erreichbar. |
| <img src="../../assets/device-screens/22-select-roon-server.png" width="250" alt="Roon Server wählen"> | Mehrere Server gefunden; gewünschten auf der Webseite wählen. |
| <img src="../../assets/device-screens/23-zone-unavailable.png" width="250" alt="Zone nicht verfügbar"> | Gespeicherte Zone fehlt oder ist offline. |
| <img src="../../assets/device-screens/24-select-zone.png" width="250" alt="Zone wählen"> | Roon ist freigegeben, aber keine Steuerzone ausgewählt. |

Das WLAN-Symbol zeigt gemessene RSSI-Stufen und ist kein stets volles
Dekorationselement.

## Uhren

| Bahnhofsuhr | Digitaluhr |
| --- | --- |
| <img src="../../assets/device-screens/07-clock-station.png" width="320" alt="Bahnhofsuhr"> | <img src="../../assets/device-screens/08-clock-digital.png" width="320" alt="Digitaluhr"> |

Die analoge Uhr läuft vorwärts. Die Digitaluhr zeigt Zeit und Datum. Beide
verwenden getrennte Tag-/Nachthelligkeiten und Umschaltzeiten. Touch kehrt zur
Wiedergabe zurück.

## Schnelleinstellungen

| Hauptmenü | System | Display |
| --- | --- | --- |
| <img src="../../assets/device-screens/09-quick-settings.png" width="220" alt="Schnelleinstellungen"> | <img src="../../assets/device-screens/09b-quick-system.png" width="220" alt="Systeminformationen"> | <img src="../../assets/device-screens/10-quick-display.png" width="220" alt="Displayeinstellungen"> |

| Lautstärke | Uhr |
| --- | --- |
| <img src="../../assets/device-screens/11-quick-volume.png" width="220" alt="Lautstärkeeinstellungen"> | <img src="../../assets/device-screens/12-quick-clock.png" width="220" alt="Uhreinstellungen"> |

**System** ist der erste Menüpunkt und zeigt Geräte-IP, verbundenen Roon Server
und Gesamtstatus. Er ist nur lesbar. Andere Seiten werden mit Touch/Ring
bedient und ausdrücklich gespeichert.

## Akku-Kalibrierung

| Vorbereitung | Lauf | Ergebnis |
| --- | --- | --- |
| <img src="../../assets/device-screens/13-battery-prepare.png" width="260" alt="Akku-Vorbereitung"> | <img src="../../assets/device-screens/14-battery-running.png" width="260" alt="Akku-Test läuft"> | <img src="../../assets/device-screens/15-battery-result.png" width="260" alt="Akku-Ergebnis"> |

Während des Laufs erzwingt RoonPilot das Testprofil. Nach erneutem Einschalten
wird der letzte gespeicherte Wert zur Bestätigung angeboten und niemals
automatisch als Prozentwert interpretiert.

## Rückmeldung der Bediensperre

| Gesperrt | Entsperrt |
| --- | --- |
| <img src="../../assets/device-screens/16-controls-locked.png" width="300" alt="Bedienung gesperrt"> | <img src="../../assets/device-screens/17-controls-unlocked.png" width="300" alt="Bedienung entsperrt"> |

Jeder Bedienversuch bei Sperre wiederholt den Hinweis. Zum Umschalten die Mitte
etwa 1,2 Sekunden halten.

## Start und Wartung

| Ansicht | Bedeutung |
| --- | --- |
| <img src="../../assets/device-screens/25-boot.png" width="250" alt="Startbildschirm"> | Firmware startet; installierte Version wird gezeigt. |
| <img src="../../assets/device-screens/26-firmware-update.png" width="250" alt="Firmwareupdate"> | OTA wird installiert. Stromversorgung nicht trennen. |
| <img src="../../assets/device-screens/27-hardware-test.png" width="250" alt="Hardwaretest"> | Herstellerorientierte Testansicht für Display/Ring-Diagnose. |
| <img src="../../assets/device-screens/28-screen-off.png" width="250" alt="Display aus"> | Schwarzer Ruhemodus; erste Eingabe weckt, ohne Befehl auszulösen. |
