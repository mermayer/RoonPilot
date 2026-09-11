# Hardware und die beiden Prozessoren

[English](../hardware-and-two-processors.md) · **Deutsch**

## Unterstütztes Gerät

RoonPilot unterstützt gezielt das **Waveshare
ESP32-S3-Knob-Touch-LCD-1.8**. Ein anderes rundes ESP32-Display ist nicht
automatisch elektrisch kompatibel, nur weil es dieselbe Auflösung besitzt.

| Bauteil | Von RoonPilot verwendete Spezifikation |
| --- | --- |
| Display | 1,8-Zoll rundes IPS-LCD, 360 × 360 Pixel |
| Touch | Kapazitiver CST816-Controller |
| Hauptprozessor | ESP32-S3R8 |
| Hauptspeicher | 16 MB Flash und 8 MB PSRAM |
| Bedienung | Vollständiger äußerer Drehring |
| Begleitprozessor | ESP32-U4WDH, unabhängiger 4-MB-Flash |
| Audio | PCM5100A-DAC und 3,5-mm-Ausgang, von RoonPilot nicht genutzt |
| Weitere Hardware | Mikrofon, Vibrationsmotor, microSD-/TF-Steckplatz |
| Stromversorgung | USB-C oder optionaler interner Li-Ion-Akku |

Offizielle Quellen: [Waveshare-Produktseite](https://www.waveshare.com/esp32-s3-knob-touch-lcd-1.8.htm)
und [technisches Wiki](https://www.waveshare.com/wiki/ESP32-S3-Knob-Touch-LCD-1.8).

## Varianten

| Bestellnummer | Gehäuse | Akku |
| --- | --- | --- |
| `ESP32-S3-Knob-Touch-LCD-1.8` | Blau | 800 mAh enthalten |
| `ESP32-S3-Knob-Touch-LCD-1.8-EN` | Blau | Ohne Akku |
| `ESP32-S3-Knob-Touch-LCD-1.8B` | Schwarz | 800 mAh enthalten |
| `ESP32-S3-Knob-Touch-LCD-1.8B-EN` | Schwarz | Ohne Akku |

Vor dem Kauf das aktuelle Händlerangebot prüfen; Akkulieferung und regionale
Bestellnummern können sich ändern.

## Die Besonderheit: zwei Computer im Gehäuse

```text
Steckerstellung, in der chip-id einen ESP32-S3 meldet
    └──► ESP32-S3R8 ──► Display, Touch, Ring, WLAN, RoonPilot

USB abziehen, USB-C-Stecker um 180 Grad drehen und neu verbinden
    └──► ESP32-U4WDH ─► separate Companion-Firmware
```

Beide besitzen einen eigenen Flash und benötigen eigene Firmware. Eine
Sicherung des einen Prozessors kann den anderen nicht wiederherstellen. Um den
anderen Prozessor zu erreichen, USB abziehen, den USB-C-Stecker um 180 Grad
drehen und neu verbinden. Die COM-Nummer allein beweist nicht, welcher Chip
aktiv ist.

## Ohne Kommandozeilenwerkzeug erkennen

| Betriebssystem | ESP32-S3 für RoonPilot | ESP32-U4WDH-Begleitprozessor |
| --- | --- | --- |
| Windows, Geräte-Manager → Anschlüsse (COM & LPT) | `Serielles USB-Gerät (COMx)` | `USB-SERIAL CH340 (COMx)` |
| macOS, Systeminformationen → Hardware → USB | `USB JTAG/serial` | `USB serial` |

Die getrennten Anleitungen für [Windows](installation-windows.md) und
[macOS](installation-macos.md) zeigen anschließend jeden benötigten Klick.

## Erweiterte Erkennung mit esptool

```powershell
python -m esptool --port COM4 chip-id
```

- RoonPilot-Seite: meldet **ESP32-S3**.
- Companion-Seite: meldet einen klassischen **ESP32**.

Dieser Befehl ist nur für eine erweiterte Diagnose gedacht und gehört nicht zur
normalen Browser-Installation. `COM4` durch den Anschluss im
Windows-Geräte-Manager ersetzen. Schlägt die Verbindung fehl, alle seriellen
Programme schließen, USB abziehen, den USB-C-Stecker um 180° drehen, neu
verbinden und erneut prüfen.

> [!CAUTION]
> Stoppen, wenn der gemeldete Chip nicht zu der Datei passt, die geschrieben
> werden soll. Niemals Löschen oder Installieren drücken, um zu sehen, was
> passiert.

## Aufgabe der optionalen Companion-Firmware

RoonPilot benötigt den zweiten ESP32 nicht für Roon. Die optionale kleine
Firmware deaktiviert den ungenutzten DAC-Pfad und versetzt den Prozessor in
unbegrenzten Deep Sleep, um unnötigen Energieverbrauch zu vermeiden. Sie wird
separat und ausschließlich manuell installiert. Eine geprüfte vollständige
4-MB-Sicherung ist freiwillig und nur dann sinnvoll, wenn später der exakte
Herstellerzustand des Begleitprozessors wiederhergestellt werden soll.

## Nächster Schritt

Mit der [Installation](installation.md) fortfahren. Falls der exakte
Auslieferungszustand des Herstellers später wiederhergestellt werden können
soll, vorher die [optionale Original-Firmware-Sicherung](factory-backup.md)
erstellen.
