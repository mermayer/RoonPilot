# Optionale Firmware für den Companion-ESP32

[English](../companion-firmware.md) · **Deutsch**

Das Waveshare ESP32-S3-Knob-Touch-LCD-1.8 enthält zwei unabhängige
ESP-Prozessoren. RoonPilot läuft auf dem Hauptprozessor ESP32-S3. Der zweite
Prozessor ist ein klassischer ESP32-U4WDH und wird von RoonPilot nicht benötigt.

> [!NOTE]
> Die Companion-Firmware ist freiwillig. RoonPilot, Display, Touchbedienung,
> Drehring, WLAN und Roon-Verbindung funktionieren vollständig ohne sie.

## Aufgabe der Companion-Firmware

Das kleine Companion-Sleep-Abbild versetzt den sonst ungenutzten zweiten
Prozessor in einen definierten Stromsparzustand. Es:

- hält den ungenutzten PCM5100A-DAC über dessen `XSMT`-Steuerung stumm;
- gibt die gemeinsam genutzten Audio-, Encoder- und seriellen Signale als
  inaktive Eingänge frei;
- versetzt den ESP32-U4WDH ohne Aufwachquelle dauerhaft in Deep Sleep.

Es fügt keine Roon-Funktion hinzu, verändert keine RoonPilot-Konfiguration und
installiert nichts auf dem Hauptprozessor ESP32-S3. Die externe RoonPilot IR
Bridge ist ein anderes, räumlich getrenntes Gerät.

## Einfachster Weg: der getrennte Webinstaller

Für die normale Companion-Installation sind weder Python noch Terminalbefehle
oder esptool nötig. Wähle die Anleitung für deinen Computer:

- **[Companion-Firmware unter Windows installieren →](companion-installation-windows.md)**
- **[Companion-Firmware unter macOS installieren →](companion-installation-macos.md)**

Nur diese Betriebssystem-Anleitungen führen zum Companion-Webinstaller, nachdem
sie den richtigen USB-Eintrag und die Steckerstellung erklärt haben.

Der Webinstaller löscht und ersetzt die Firmware des klassischen
Companion-ESP32. Nach dem Abschluss USB abziehen, den USB-C-Stecker am
RoonPilot-Gerät um 180 Grad drehen und neu verbinden. Das Kabel ist dann wieder
mit dem Hauptprozessor ESP32-S3 verbunden.

## Richtigen Prozessor erkennen

| System | Companion-ESP32 — verwenden | Haupt-ESP32-S3 — stoppen |
| --- | --- | --- |
| Windows | `USB-SERIAL CH340 (COMx)` | `Serielles USB-Gerät (COMx)` |
| macOS-Systeminformationen | `USB serial` | `USB JTAG/serial` |

Erscheint der falsche Eintrag, USB abziehen, den USB-C-Stecker am
RoonPilot-Gerät um 180 Grad drehen und neu verbinden.

Beide Browser-Installer besitzen bewusst getrennte Manifeste:

- der normale RoonPilot-Installer enthält nur ein `ESP32-S3`-Abbild;
- der Companion-Installer enthält nur ein `ESP32`-Abbild.

Dadurch prüft der Browser vor dem Schreiben zusätzlich die Prozessorfamilie.

## Freiwillige Sicherung der Original-Firmware

Eine Sicherung ist nur dann sinnvoll, wenn später möglicherweise exakt die von
Waveshare ausgelieferte Firmware dieses Prozessors wiederhergestellt werden
soll. Für RoonPilot und die Companion-Installation ist sie nicht erforderlich.

Ein Browser kann das vollständige Original-Flash nicht auslesen und als Datei
sichern. Wer diesen freiwilligen Rückweg erhalten möchte, erstellt das Backup
vor der Installation mit der ausführlichen technischen Anleitung für das
eigene Betriebssystem:

- [Optionale Originalsicherung unter Windows](factory-backup-windows.md)
- [Optionale Originalsicherung unter macOS](factory-backup-macos.md)

Nur für diese technische Sicherung wird im normalen Ablauf Espressifs
`esptool` benötigt.

## Weitere Anleitungen

- [Hardware und die beiden Prozessoren](hardware-and-two-processors.md)
- [Normale RoonPilot-Installation](installation.md)
- [Firmwareupdates und Wiederherstellung](firmware-updates-and-recovery.md)
