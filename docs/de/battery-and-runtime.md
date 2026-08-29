# Akkustatus und Laufzeitkalibrierung

Die vollständige deutschsprachige Dokumentation befindet sich unter:

[Akku, Messgrenzen, reproduzierbare Kalibrierung und Sicherheit](https://github.com/mermayer/RoonPilot/blob/main/guides/de/battery-and-runtime.md)

Kurzfassung: Das Board misst die geregelte Systemschiene und nicht direkt die
Li-Ion-Zelle. Deshalb zeigt RoonPilot keine erfundene exakte Prozent- oder
Restlaufzeitangabe. Die Gerätekalibrierung misst unter einem festen Profil die
Laufzeit von Volladung bis zur Hardwareabschaltung; sie ist ein Vergleichswert,
kein aktueller Ladezustand. Deep Sleep ist während Vorbereitung und Messlauf
immer deaktiviert.
