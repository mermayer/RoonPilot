# Akkustatus und Laufzeitkalibrierung

[English](../battery-and-runtime.md) · **Deutsch**

RoonPilot beschreibt die Grenzen der Akkuhardware des Waveshare
`ESP32-S3-Knob-Touch-LCD-1.8` bewusst offen. Eine elektrisch ungeeignete
Messung wird nicht in eine präzise aussehende Prozentzahl umgerechnet.

## Was die Hardware bereitstellt

Waveshare verkauft Varianten mit einem 3,7-V-/800-mAh-Lithiumakku (102035) und
Varianten ohne Akku. Ein selbst eingebauter Akku kann andere Kapazität, anderes
Alter und eine andere Schutzschaltung besitzen.

Der offizielle Schaltplan führt `BATT_ADC` so:

```text
geregelte 5-V-Systemschiene
          |
       R62 10 kΩ
          |
          +------ BATT_ADC ------ GPIO1 / ADC1 Kanal 0
          |
       R63 10 kΩ
          |
         GND
```

Die gleichen Widerstände halbieren die **geregelte 5-V-Systemspannung**. Der
ADC liegt nicht am Li-Ion-Zellanschluss. Waveshares Beispiel `01_ADC_Test`
bezeichnet die Messung entsprechend als Systemspannung.

Herstellerquellen:

- [Waveshare-Produktseite](https://www.waveshare.com/esp32-s3-knob-touch-lcd-1.8.htm)
- [Technisches Wiki](https://www.waveshare.com/wiki/ESP32-S3-Knob-Touch-LCD-1.8)
- [Offizielles Schaltplanarchiv](https://files.waveshare.com/wiki/ESP32-S3-Knob-Touch-LCD-1.8/ESP32-S3-Knob-Touch-LCD-1.8-schematic.zip)

## Folgen für die Akkuanzeige

Der ESP32-S3 kann damit nicht zuverlässig bestimmen:

- Zellspannung;
- Ladezustand oder genaue Restprozentzahl;
- Restkapazität in mAh/Wh;
- verbleibende Laufzeit;
- Versorgung über USB oder nur Akku;
- Zellspannungsgrenze, bei der die Hardware abschaltet.

Der Spannungswandler kann die Systemschiene während der Entladung lange stabil
halten. Zusätzlich verändern Last, Umwandlungsverluste, ADC-Toleranz und
USB-Versorgung den Wert. Eine exakte Prozentzahl wäre irreführend.

## Warum der Schalter für die Akkuhardware notwendig ist

Waveshare verkauft das Gerät sowohl mit als auch ohne internen Akku. Der
ESP32-S3 besitzt jedoch keinen eigenen Signaleingang, der meldet, ob tatsächlich
ein Akku eingebaut ist. Er sieht nur die gemeinsame Systemspannung. Ein
einzelner Messwert kann deshalb von einem internen Akku, einem Computer-USB-Port,
einem USB-Netzteil oder einer externen Powerbank stammen. Ohne eine eindeutige
Einstellung würde auch ein Gerät ohne Akku ein sinnloses Akkusymbol und eine
nicht durchführbare Kalibrierung anbieten.

Unter **Energie > Eingebauter Akku** stehen drei Einstellungen zur Verfügung:

| Einstellung | Verhalten |
| --- | --- |
| **Automatisch** | Akkuspezifische Anzeigen bleiben ausgeblendet, bis RoonPilot einen eingebauten Akku positiv beobachtet hat. Dies ist die Voreinstellung einer Neuinstallation. |
| **Eingebaut** | Akkusymbol, Akkuinformationen und Laufzeitkalibrierung werden immer angezeigt. Diese Einstellung verwenden, wenn ein Akku vorhanden ist, aber von der Automatik noch nicht erkannt wurde. |
| **Nicht eingebaut** | Akkusymbol, Akkuinformationen und der vollständige Kalibrierungsabschnitt werden ausgeblendet. |

**Nicht eingebaut** entfernt ausschließlich die akkubezogenen Funktionen.
CPU-Modi, Versorgungsschwellen, Display-Zeitsteuerung und Deep Sleep bleiben
erhalten, weil sie auch beim Betrieb über eine externe Powerbank sinnvoll sind.
Bestehende Installationen werden beim Update auf **Eingebaut** übernommen,
damit eine bisher sichtbare Akkuanzeige nicht unerwartet verschwindet.

### So funktioniert die Automatik

Die automatische Erkennung benötigt eine positive, ununterbrochene Beobachtung:

1. RoonPilot läuft und erkennt den höheren Bereich der Systemspannung als
   externe USB-Versorgung.
2. Das USB-Kabel wird abgezogen oder das Gerät wird aus seinem versorgten Dock
   genommen, ohne RoonPilot auszuschalten.
3. RoonPilot läuft im niedrigeren Spannungsbereich weiter.
4. Dieser Weiterbetrieb beweist, dass ein interner Akku das Gerät versorgt.
   RoonPilot speichert den positiven Nachweis lokal und blendet Akkusymbol,
   Akkuinformationen und Kalibrierung ein.

Die Automatik entscheidet absichtlich niemals, dass **kein** Akku vorhanden
ist. Ein dauerhafter Betrieb an USB beweist dies nicht, und eine schwache
USB-Versorgung kann dem Akkubereich ähneln. Bei einem Modell ohne Akku deshalb
**Nicht eingebaut** manuell wählen. Die gewählte Einstellung ist Bestandteil
des RoonPilot-Konfigurationsbackups. Der positive automatische Nachweis gehört
zur physischen Hardware und wird beim Einspielen eines Backups auf ein anderes
Gerät nicht übernommen.

### Die USB-Quelle ist wichtig

Die auf der Energie-Seite angezeigte Systemspannung kann an einem USB-Port des
Computers niedriger sein als an einem separaten USB-Netzteil oder Ladegerät.
Der konkrete Wert hängt auch von USB-Port, Kabel und Belastung ab. Das Gerät
kann am Computer völlig normal laufen, obwohl die am Board ankommende Spannung
nicht ausreicht, um den Akku wirklich vollständig zu laden.

> **Wichtig für die Akku-Kalibrierung:** Die Volladephase an einem stabilen
> USB-Netzteil/Ladegerät durchführen, nicht am USB-Port eines Computers. Das
> Ladeende abwarten, erst danach USB abziehen und die Kalibrierung am Display
> starten.

Vorbereitung und Speichern eines Ergebnisses setzen eine gemessene
Systemspannung von mindestens **4,28 V für durchgehend drei Sekunden** voraus.
Bleibt **Kalibrierung vorbereiten** oder **Ergebnis speichern** gesperrt, den
Spannungswert auf der Energie-Seite prüfen und ein stabiles USB-Netzteil mit
geeignetem Kabel verwenden. Eine Änderung der Versorgungserkennung umgeht
diese Bedingung nicht. Der Spannungscheck beweist keine Volladung; das
vollständige Laden bleibt deshalb ein eigener notwendiger Schritt.

Für Flashen, Diagnose und normalen Betrieb kann ein Computer-USB-Port weiterhin
verwendet werden. Er darf nur nicht als Referenz für **vollständig geladen** vor
einer Laufzeitkalibrierung dienen. Unterschiedliche Spannungswerte an Computer
und Netzteil beschreiben den Versorgungsweg und sind keine Akkuprozentanzeige.

## Bedeutung des Akkusymbols

Bei aktivierter Akkuhardware behält RoonPilot ein gefiltertes vierstufiges
Symbol als groben Hinweis auf die gemessene Boardspannung. Hysterese verhindert
ständiges Flackern des letzten Segments. Die Balken sind **keine kalibrierte
Prozentanzeige** und ersetzen keine Schutzabschaltung. Ein kleiner Blitz
bedeutet, dass die gemeinsame Systemspannung aktuell als externe Versorgung
eingestuft wird; er beweist nicht, dass der Akku geladen wird. Die Webseite
bezeichnet den Messwert deshalb als `System voltage`.

## Automatischer Schutz bei niedriger Systemspannung

RoonPilot unterscheidet zwischen dem **Flash-Schreibschutz**, der immer aktiv
ist, und der **Schutzabschaltung**, die ausschließlich während einer laufenden
Akku-Kalibrierung eingesetzt wird. Die festen Grenzen sind unabhängig vom
Akkusymbol und den beiden einstellbaren Schwellen der Versorgungserkennung.
Es sind **Systemspannungen, keine Akkuzellspannungen**.

| Bedingung | Verhalten von RoonPilot |
| --- | --- |
| Systemspannung unter **3,80 V**, in jeder Betriebsart | Neue Flash-Schreib- und Löschvorgänge werden gesperrt. Freigabe erst nach mindestens 300 ms gültiger, stabiler Messwerte ab 3,80 V. Das gilt auch bei **Nicht eingebaut**. |
| Während laufender Kalibrierung: unter **3,70 V für 500 ms** | Der Messlauf endet im Schutz-Deep-Sleep; das Display wird dunkel. Der Schalter für normalen Deep Sleep ist dabei unerheblich. |
| Während laufender Kalibrierung: **3,50 V oder weniger** | Stopp bei der nächsten Versorgungsmessung ohne die 500-ms-Wartezeit. |
| Nach einem erhaltenen Kalibrierungs-Schutzstopp | Wiederanlauf erst bei **mindestens 4,28 V für drei Sekunden**. |

Im normalen Betrieb verhindern niedrige, fehlende oder ungültige Messwerte
unsichere Flash-Schreibvorgänge; sie lösen **keinen** solchen softwaregesteuerten
Schutzschlaf aus. Kurzes Umstecken vom Ladegerät zum Computer-USB aktiviert
also nicht die Kalibrierungsabschaltung. Sind die Messwerte wieder gültig und
stabil, werden Schreibvorgänge erneut freigegeben. Während der Kalibrierung
bleibt Flash-Schreiben dagegen über den gesamten Messlauf gesperrt, auch oberhalb
von 3,80 V.

Fehlende oder ungültige Messwerte können während laufender Kalibrierung ebenfalls
einen Schutzstopp auslösen. Sie ergeben aber kein gültiges Kalibrierungsergebnis.
Deep Sleep senkt den Verbrauch, trennt den Akku jedoch nicht elektrisch ab.

Nach einem Kalibrierungs-Schutzstopp ein stabiles USB-Netzteil anschließen.
RoonPilot prüft die Versorgung alle 30 Sekunden. Das Display kann deshalb nach
dem Anstecken noch etwa **33 Sekunden** schwarz bleiben, bevor der normale Start
beginnt. Berühren oder Drehen kann diesen Schutzstopp nicht übergehen. Die
4,28-V-Bedingung gilt für diesen erhaltenen Kalibrierungsstopp, nicht für normale
Versorgungswechsel oder andere Neustarts. Bleibt das Gerät im Schutzstopp,
Netzteil und Kabel prüfen, nicht die Schwellen der Versorgungserkennung absenken.

## Warum stattdessen Laufzeit gemessen wird

RoonPilot kann eine engere, aber brauchbare Frage beantworten:

> Wie lange lief genau dieses Gerät nach vollständigem Laden unter einem festen
> Arbeitsprofil, bis RoonPilot den Schutzstopp wegen niedriger Versorgung auslöste?

Das Ergebnis berücksichtigt eingebauten Akku, Alter, Boardverluste und reale
Geräteaufnahme. Es wird als **Referenzlaufzeit ab Volladung** gespeichert. Es
ist kein Live-Countdown, keine Kapazitätsmessung und keine Schätzung des
aktuellen Restladezustands.

## Reproduzierbares Kalibrierprofil

| Punkt | Feste Einstellung |
| --- | --- |
| Display | Statische Ansicht auf dem 1,8-Zoll-IPS-LCD |
| Hintergrundbeleuchtung | 50 Prozent |
| CPU | Fest auf 240 MHz, unabhängig vom normalen CPU-Modus |
| Dimmen/Display aus | während des Tests deaktiviert |
| WLAN | verbunden und aktiv |
| Roon-Client | nach lokalem Start gestoppt |
| Webserver | nach lokalem Start gestoppt |
| Touch | für lokalen Abbruch aktiv |
| Fortschrittssicherung | Jede Sekunde im erhaltenen RTC-Speicher; keine periodischen Flash-Schreibvorgänge |
| Normaler Deep Sleep | Während Vorbereitung und Lauf deaktiviert; die Unterspannungsabschaltung gilt ausschließlich während des Messlaufs |
| Ende des Laufs | Schutzstopp der Versorgung, nicht Entladung bis zur Hardwareabschaltung |

WLAN bleibt als Teil der typischen Gerätebelastung aktiv. Roon und Webserver
werden gestoppt, damit wechselnder Verkehr, Browserpolling und Konfiguration
das Ergebnis nicht verfälschen.

## Schritt-für-Schritt

1. Gerät an einem stabilen USB-Netzteil/Ladegerät – **nicht am USB-Port eines
   Computers** – vollständig laden und das Ladeende abwarten.
2. Prüfen, dass **Energie > Eingebauter Akku** auf **Automatisch** mit erkanntem
   Akku oder auf **Eingebaut** steht.
3. **Energie > Akkukalibrierung** auf der lokalen Webseite öffnen.
4. **Kalibrierung vorbereiten** wählen und bestätigen. Stabile USB-Versorgung
   ist Voraussetzung; nach einem Update die automatische Startprüfung abwarten.
5. Kalibrier-Vorbereitungsbild am Gerät kontrollieren.
6. USB-Kabel abziehen; mit USB wäre der Test ungültig.
7. Erkennung der Akkuversorgung abwarten und **Start** direkt auf dem Display
   antippen.
8. Gerät bei repräsentativer Raumtemperatur unberührt lassen, bis der Schutzstopp
   das Display ausschaltet. Keine weitere Entladung bis zur Hardwareabschaltung
   des Akkus erzwingen.
9. Ein stabiles USB-Netzteil/Ladegerät wieder anschließen und den Wiederanlauf
   abwarten. Vor dem Start kann das Display noch etwa 33 Sekunden schwarz bleiben.
10. Dauer prüfen. **Ergebnis speichern** ist nur bei einem vollständig durch
    Schutzstopp beendeten Lauf ab fünf Minuten und stabiler USB-Versorgung
    möglich. Einen unterbrochenen Lauf verwerfen und vor einem neuen Versuch
    wieder vollständig laden.

Der Start ist absichtlich nur lokal möglich. Ein Browser kann vorbereiten, aber
nicht starten, damit nicht versehentlich mit angeschlossenem USB gemessen wird.
Zusätzlich verlangt der Start einen gültigen, sicheren Messwert ab 3,80 V und
eine als Akku erkannte Versorgung unter 4,28 V.

Vorbereitung kann auf der Webseite abgebrochen werden; laufender Test lokal per
langem Druck auf Abbrechen.

## Fortschritt und Umgang mit dem Ergebnis

Die Vorbereitung legt die Kennung des Laufs im dauerhaften Speicher ab, solange
noch stabile USB-Versorgung anliegt. Während der Messung wird die Laufzeit jede
Sekunde in zwei prüfsummengesicherten Bereichen des **erhaltenen RTC-Speichers**
festgehalten. Flash-Schreib- und Löschvorgänge der Anwendung sind während des
Messlaufs gesperrt; die bisherigen minütlichen Flash-Sicherungen entfallen.
Beim Absinken der Versorgung wird kein letzter Flash-Schreibvorgang versucht.

Der RTC-Speicher übersteht den Schutz-Deep-Sleep, ist aber keine dauerhafte
Sicherung. Ein vollständiger Stromverlust oder ein verlorener RTC-Datensatz
verhindert ein gültiges Ergebnis. Beim Wiederanlauf prüft RoonPilot, ob die
Aufzeichnung zum vorbereiteten Lauf gehört und ob der spannungsbedingte
Schutzstopp diesen Lauf beendet hat.

| Ende des Laufs | Umgang mit dem Ergebnis |
| --- | --- |
| Spannungsbedingter Schutzstopp mit gültiger erhaltener Aufzeichnung | Ergebnis wird zur Prüfung angeboten. Speichern ist ab fünf Minuten mit stabiler USB-Versorgung möglich. |
| USB vor dem Schutzstopp wieder angeschlossen, manueller Reset, vollständiger Stromverlust oder unbrauchbare Spannungsmessung | Unvollständig; **Ergebnis speichern** bleibt gesperrt. Verwerfen und ab Volladung wiederholen. |
| Abgebrochen oder verworfen | Keine neue Referenz; der bisher akzeptierte Wert bleibt erhalten. |

Nichts wird automatisch akzeptiert. Erst erfolgreiches **Ergebnis speichern**
an stabiler USB-Versorgung ersetzt die bisherige Referenz. Der Sekundentakt der
Aufzeichnung bedeutet keine garantierte sekundengenaue Gesamtlaufzeitmessung.

Diese Abbildungen geben die aktuellen Geräteansichten mit Beispiellaufzeiten
wieder. Auch eine ausreichend lange Dauer macht einen unterbrochenen Lauf
nicht gültig:

| Lauf durch Schutzstopp vollständig beendet | Lauf unterbrochen |
| --- | --- |
| <img src="../../assets/device-screens/15-battery-result-de.png" width="300" alt="Vollständige Kalibrierung nach Schutzstopp; Referenz an USB speichern"> | <img src="../../assets/device-screens/15b-battery-interrupted-de.png" width="300" alt="Unvollständige Kalibrierung mit gesperrtem Speichern"> |

## Bedeutung eines akzeptierten Ergebnisses

Es bedeutet ausschließlich: Mit diesem Akku, dieser Hardware, Firmware und dem
festen Profil lief dieses RoonPilot ungefähr die gespeicherte Zeit von
Volladung bis zum Schutzstopp der Versorgung.

Bereits gespeicherte Referenzen bleiben erhalten. Ältere Ergebnisse, die noch
bis zur Hardwareabschaltung gemessen wurden, sind mit dem früher ausgelösten
Schutzstopp des neuen Verfahrens nicht unmittelbar vergleichbar. Für eine
Referenz nach dem neuen Verfahren erneut kalibrieren.

Normalbetrieb kann durch Helligkeit, Display-Aus-Zeiten, Interaktion,
Roon-Verkehr, WLAN-RSSI, Temperatur, Akkualter und Companion-Firmware deutlich
abweichen. Nach Akkutausch, Stromspar-Firmwarewechsel oder wichtiger
Änderungen an den Energieeinstellungen neu kalibrieren.

## Vergleichbare Ergebnisse veröffentlichen

Mindestens zwei, besser drei vollständige Läufe unter identischen Bedingungen
verwenden und alle gültigen Werte samt Spanne veröffentlichen. Für einen
Vergleich der Companion-Stromspar-Firmware müssen Original- und Stromsparlauf
ansonsten vollständig identisch sein.

| Feld | Anzugeben |
| --- | --- |
| Hardware | genaue Waveshare-Bestellnummer |
| Akku | Hersteller, Nennspannung/-kapazität, werkseitig oder nachgerüstet |
| Firmware | RoonPilot-Version/Build |
| Begleit-ESP32 | Original oder Stromspar-Firmware |
| Profil | LCD 50 %, CPU 240 MHz, statisch, WLAN an, Roon/Web aus |
| WLAN | ungefähre RSSI vor Start |
| Umgebung | ungefähre Raumtemperatur |
| Ergebnis | Datum, Laufzeit und Schutzstopp als Endpunkt; Aufzeichnung im Sekundentakt |

## Akkusicherheit

Der Versorgungsschutz reduziert instabilen Unterspannungsbetrieb. Er ersetzt
nicht die Schutzschaltung des Akkus: Die Zellspannung wird nicht gemessen, und
Deep Sleep trennt die Zelle nicht ab. Eine softwareseitige Abschaltung anhand
der tatsächlichen Akkuzellspannung ist mit diesem Board nicht möglich.

- Waveshare-Akkuvariante oder ausdrücklich kompatible geschützte Zelle nutzen.
- Spannung, Maße, Stecker und Polarität vor Ersatz prüfen.
- Aufgeblähte, beschädigte, undichte oder ungewöhnlich heiße Zellen niemals
  verwenden.
- Bei Wärme oder ungewöhnlichem Verhalten Test sofort beenden.
- Nach dem Schutzstopp zeitnah ein stabiles USB-Netzteil anschließen; das
  entladene Gerät nicht tagelang ohne Versorgung liegen lassen.
- Erfolgt kein Schutzstopp, den Lauf abbrechen, nicht durch tieferes Entladen
  erzwingen.

## Häufige Fragen

**Warum keine Prozentzahl?** Weil die dafür nötige Zellmessung fehlt.

**Warum verschwindet die Webseite?** Der Server wird für reproduzierbare Last
absichtlich gestoppt.

**Warum trennt Roon?** Auch der Roon-Client wird im festen Profil gestoppt.

**Schreibt die Kalibrierung noch jede Minute in den Flash?** Nein. Der
Fortschritt wird jede Sekunde im erhaltenen RTC-Speicher aufgezeichnet.
Vorbereitet wird vor dem Lauf an USB; eine neue Referenz wird erst danach an
stabiler USB-Versorgung gespeichert.

**Warum ist Ergebnis speichern gesperrt?** Der Lauf muss vollständig beendet
sein, mindestens fünf Minuten dauern und eine gültige erhaltene Aufzeichnung
besitzen. Zusätzlich müssen mindestens 4,28 V Systemspannung für drei Sekunden
anliegen. Ein unterbrochener Lauf ist auch mit plausibler Dauer nicht speicherbar.

**Warum bleibt das Display nach dem Anstecken noch schwarz?** Nach dem
Schutzstopp erfolgt alle 30 Sekunden eine Versorgungsprüfung. Etwa 33 Sekunden
bis zum normalen Start einplanen, anschließend die WLAN-/Roon-Verbindung
abwarten. Touch und Drehregler können den Schutzstopp nicht übergehen.

**Kann man Ersatzakkus vergleichen?** Ja, praktisch bei identischen übrigen
Bedingungen, aber nicht als Laborkapazitätsmessung.

**Sagt die Referenz die aktuelle Restlaufzeit voraus?** Nein. Die
Stromquellenschätzung und der positive Akku-Nachweis messen nicht den aktuellen
Ladezustand.

**Verliere ich ohne eingebauten Akku die übrigen Energieeinstellungen?** Nein.
Unter **Energie > Eingebauter Akku > Nicht eingebaut** verschwinden nur
Akkusymbol, Akkuinformationen und Kalibrierung. CPU-Einstellung,
Versorgungsschwellen, Display-Zeiten und Deep Sleep bleiben auch für eine
externe Powerbank erhalten.
