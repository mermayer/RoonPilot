# Akkustatus und Laufzeitkalibrierung

Die vollständige deutschsprachige Dokumentation befindet sich unter:

[Akku, Messgrenzen, reproduzierbare Kalibrierung und Sicherheit](https://github.com/mermayer/RoonPilot/blob/main/guides/de/battery-and-runtime.md)

Kurzfassung: Das Board misst die geregelte Systemschiene und nicht direkt die
Li-Ion-Zelle. Deshalb zeigt RoonPilot keine erfundene exakte Prozent- oder
Restlaufzeitangabe. Die Gerätekalibrierung misst unter einem festen Profil die
Laufzeit von Volladung bis zur Hardwareabschaltung; sie ist ein Vergleichswert,
kein aktueller Ladezustand. Deep Sleep ist während Vorbereitung und Messlauf
immer deaktiviert.

**Wichtig vor einer Kalibrierung:** Das Gerät an einem stabilen
USB-Netzteil/Ladegerät vollständig laden. An einem USB-Port des Computers kann
die am Board ankommende Spannung niedriger sein; das Gerät läuft dann zwar,
der Akku erreicht aber möglicherweise keine vollständige Ladung. Erst nach dem
Ladeende USB abziehen und die Kalibrierung am Display starten.
