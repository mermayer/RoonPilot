# Akkustatus und Laufzeitkalibrierung

Die vollständige deutschsprachige Dokumentation befindet sich unter:

[Akku, Messgrenzen, reproduzierbare Kalibrierung und Sicherheit](https://github.com/mermayer/RoonPilot/blob/main/guides/de/battery-and-runtime.md)

Kurzfassung: Das Board misst die geregelte Systemschiene und nicht direkt die
Li-Ion-Zelle. Deshalb zeigt RoonPilot keine erfundene exakte Prozent- oder
Restlaufzeitangabe. Die Gerätekalibrierung misst unter einem festen Profil die
Laufzeit von Volladung bis zum Schutzstopp wegen niedriger Systemspannung; sie
ist ein Vergleichswert, kein aktueller Ladezustand. Der normale Deep Sleep ist
während Vorbereitung und Messlauf deaktiviert. Die Schutzabschaltung bei
Unterspannung gilt ausschließlich für den laufenden Messlauf; der
Flash-Schreibschutz bleibt dagegen in allen Betriebsarten aktiv.

Da das Waveshare-Gerät mit oder ohne Akku angeboten wird, aber keinen eigenen
„Akku vorhanden“-Kontakt besitzt, gibt es unter **Energie > Eingebauter Akku**
die Auswahl **Automatisch**, **Eingebaut** und **Nicht eingebaut**. Die
Automatik merkt sich einen positiven Nachweis, wenn das laufende Gerät zuerst
USB erkennt und nach dem Abziehen im niedrigeren Spannungsbereich weiterläuft.
Bei **Nicht eingebaut** verschwinden Akkusymbol, Akkuinformationen und die
gesamte Kalibrierung; alle übrigen Energieoptionen für Netzteil oder Powerbank
bleiben erhalten.

**Wichtig vor einer Kalibrierung:** Das Gerät an einem stabilen
USB-Netzteil/Ladegerät vollständig laden. An einem USB-Port des Computers kann
die am Board ankommende Spannung niedriger sein; das Gerät läuft dann zwar,
der Akku erreicht aber möglicherweise keine vollständige Ladung. Erst nach dem
Ladeende USB abziehen und die Kalibrierung am Display starten.

Vorbereitung und Speichern benötigen mindestens **4,28 V Systemspannung für
drei Sekunden**. Während des Laufs wird die Zeit jede Sekunde im erhaltenen
RTC-Speicher aufgezeichnet; während des Messlaufs wird nicht in den Flash
geschrieben. Nur während laufender Kalibrierung geht RoonPilot unter
**3,70 V für 500 ms** in den Schutz-Deep-Sleep, bei **3,50 V oder weniger** ohne
diese Wartezeit. Es wird nicht bis zur Hardwareabschaltung weitergemessen. Nach
diesem Kalibrierungs-Schutzstopp kann der Startcheck an stabiler USB-Versorgung
noch etwa 33 Sekunden dauern. Touch und Ring können den Schutzstopp nicht wecken.

Im normalen Betrieb löst ein kurzer Spannungsabfall, etwa beim Umstecken vom
Netzteil zum Computer, diesen Schutzschlaf nicht aus. Neue Flash-Schreib- und
Löschvorgänge bleiben bei niedriger oder ungültiger Messung gesperrt; Freigabe
erst nach mindestens 300 ms gültiger, stabiler Messwerte ab **3,80 V**. Der
Wiederanlauf ab 4,28 V gilt nur nach einem erhaltenen Kalibrierungs-Schutzstopp,
nicht nach jedem Neustart.

Nur ein vollständig durch den spannungsbedingten Schutzstopp beendeter Lauf
mit erhaltener Aufzeichnung und mindestens fünf Minuten Dauer ist speicherbar.
Unterbrochene Ergebnisse können nicht als Referenz übernommen werden. Die
bisherige Referenz bleibt erhalten, bis ein neues gültiges Ergebnis erfolgreich
gespeichert wurde. Alle genannten Spannungen beziehen sich auf die
Systemschiene, nicht auf die Akkuzelle. Deep Sleep trennt den Akku nicht ab und
ersetzt seine Schutzschaltung nicht.
