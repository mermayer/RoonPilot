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

## Bedeutung des Akkusymbols

RoonPilot behält ein gefiltertes vierstufiges Symbol als groben Hinweis auf die
gemessene Boardspannung. Hysterese verhindert ständiges Flackern des letzten
Segments. Das Symbol ist **keine kalibrierte Prozentanzeige**, unterscheidet
nicht zwischen USB und Akku und ersetzt keine Schutzabschaltung. Die Webseite
bezeichnet den Messwert deshalb als `System voltage`.

## Warum stattdessen Laufzeit gemessen wird

RoonPilot kann eine engere, aber brauchbare Frage beantworten:

> Wie lange lief genau dieses Gerät nach vollständigem Laden unter einem festen
> Arbeitsprofil, bis die Hardware abschaltete?

Das Ergebnis berücksichtigt eingebauten Akku, Alter, Boardverluste und reale
Geräteaufnahme. Es wird als **Referenzlaufzeit ab Volladung** gespeichert. Es
ist kein Live-Countdown, keine Kapazitätsmessung und keine Schätzung des
aktuellen Restladezustands.

## Reproduzierbares Kalibrierprofil

| Punkt | Feste Einstellung |
| --- | --- |
| Display | Statische Ansicht auf dem 1,8-Zoll-IPS-LCD |
| Hintergrundbeleuchtung | 50 Prozent |
| Dimmen/Display aus | während des Tests deaktiviert |
| WLAN | verbunden und aktiv |
| Roon-Client | nach lokalem Start gestoppt |
| Webserver | nach lokalem Start gestoppt |
| Touch | für lokalen Abbruch aktiv |
| Fortschrittssicherung | alle 60 Sekunden |
| Deep Sleep | während Vorbereitung/Lauf deaktiviert |

WLAN bleibt als Teil der typischen Gerätebelastung aktiv. Roon und Webserver
werden gestoppt, damit wechselnder Verkehr, Browserpolling und Konfiguration
das Ergebnis nicht verfälschen.

## Schritt-für-Schritt

1. Gerät mit normaler Hardware/Firmware vollständig laden.
2. **Power → Battery calibration** auf der lokalen Webseite öffnen.
3. **Prepare calibration** wählen und bestätigen.
4. Kalibrier-Vorbereitungsbild am Gerät kontrollieren.
5. USB-Kabel abziehen; mit USB wäre der Test ungültig.
6. **Start** direkt auf dem Display antippen.
7. Gerät bei repräsentativer Raumtemperatur unberührt lassen, bis es abschaltet.
8. USB wieder anschließen.
9. Wiederhergestellte Dauer prüfen und nur speichern, wenn dies das normale Ende
   dieses ununterbrochenen Akkutests war; sonst verwerfen.

Der Start ist absichtlich nur lokal möglich. Ein Browser kann vorbereiten, aber
nicht starten, damit nicht versehentlich mit angeschlossenem USB gemessen wird.
Vorbereitung kann auf der Webseite abgebrochen werden; laufender Test lokal per
langem Druck auf Abbrechen.

## Überleben des endgültigen Stromausfalls

Nach Stromverlust kann das Gerät den exakten Abschaltzeitpunkt nicht mehr
schreiben. Deshalb speichert RoonPilot alle 60 Sekunden abwechselnd zwei
NVS-Datensätze mit Formatkennung, Sequenznummer, Laufzustand, vergangener Zeit,
vorheriger Referenz, Datum und Prüfsumme.

Beim nächsten Start werden beide geprüft und der neueste gültige gewählt. Ein
unterbrochener Lauf wird zur Begutachtung angezeigt und niemals automatisch
akzeptiert. Die übliche Messabweichung liegt dadurch bis zu 60 Sekunden auf der
kurzen Seite. Ergebnisse unter fünf Minuten werden abgelehnt.

## Bedeutung eines akzeptierten Ergebnisses

Es bedeutet ausschließlich: Mit diesem Akku, dieser Hardware, Firmware und dem
festen Profil lief dieses RoonPilot ungefähr die gespeicherte Zeit von
Volladung bis zur Hardwareabschaltung.

Normalbetrieb kann durch Helligkeit, Display-Aus-Zeiten, Interaktion,
Roon-Verkehr, WLAN-RSSI, Temperatur, Akkualter und Companion-Firmware deutlich
abweichen. Nach Akkutausch, Stromspar-Firmwarewechsel oder wichtiger
Power-Änderung neu kalibrieren.

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
| Profil | LCD 50 %, statisch, WLAN an, Roon/Web aus |
| WLAN | ungefähre RSSI vor Start |
| Umgebung | ungefähre Raumtemperatur |
| Ergebnis | Datum und HH:MM, bis 60 s Unsicherheit |

## Akkusicherheit

Kalibrierung ist kein Akkuschutz. RoonPilot kann ohne Zellspannung keine
softwareseitige Zellspannungsabschaltung implementieren.

- Waveshare-Akkuvariante oder ausdrücklich kompatible geschützte Zelle nutzen.
- Spannung, Maße, Stecker und Polarität vor Ersatz prüfen.
- Aufgeblähte, beschädigte, undichte oder ungewöhnlich heiße Zellen niemals
  verwenden.
- Bei Wärme oder ungewöhnlichem Verhalten Test sofort beenden.
- Schaltet das Gerät nicht normal ab, nicht durch tieferes Entladen erzwingen.

## Häufige Fragen

**Warum keine Prozentzahl?** Weil die dafür nötige Zellmessung fehlt.

**Warum verschwindet die Webseite?** Der Server wird für reproduzierbare Last
absichtlich gestoppt.

**Warum trennt Roon?** Auch der Roon-Client wird im festen Profil gestoppt.

**Warum kann das Ergebnis etwa eine Minute zu kurz sein?** Es wird einmal pro
Minute gespeichert; nach Stromverlust ist kein letzter Schreibvorgang möglich.

**Kann man Ersatzakkus vergleichen?** Ja, praktisch bei identischen übrigen
Bedingungen, aber nicht als Laborkapazitätsmessung.

**Sagt die Referenz die aktuelle Restlaufzeit voraus?** Nein. Stromquelle und
aktueller Ladezustand sind nicht zuverlässig messbar.
