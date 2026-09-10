# Optionale Firmware für den Begleit-ESP32

[English](../companion-firmware.md) · **Deutsch**

> [!IMPORTANT]
> Diese Firmware ist optional, getrennt und nicht für den ESP32-S3 bestimmt.
> RoonPilot funktioniert vollständig ohne sie. Eine vollständige Sicherung des
> originalen 4-MB-Flashs ist freiwillig und keine Installationsvoraussetzung.
> Sie ist nur dann empfehlenswert, wenn später möglicherweise der exakte
> Auslieferungszustand des Herstellers wiederhergestellt werden soll. Ohne eine
> eigene Sicherung ist genau dieser Rückweg mit den RoonPilot-Dateien nicht
> möglich. Chiperkennung und Prüfung des heruntergeladenen Abbilds bleiben
> dagegen unbedingt erforderlich.

## Aufgabe

Das Waveshare-Modul enthält neben dem ESP32-S3 einen unabhängig
programmierbaren klassischen ESP32. RoonPilot nutzt ihn nicht. Die kleine
Companion-Firmware deaktiviert den ungenutzten DAC-Pfad und versetzt diesen
Prozessor dauerhaft in Deep Sleep, um unnötigen Stromverbrauch zu vermeiden.
Sie fügt keine Roon-Funktion hinzu und wird niemals vom Web Installer des
Hauptprozessors installiert.

## Benötigt

- Windows-, macOS- oder Linux-Rechner und USB-Datenkabel;
- Espressif `esptool` als Standalone-Programm oder über Python 3.10 oder neuer;
- heruntergeladenes Companion-Abbild samt SHA-256;
- optional ein sicherer Speicherort für das originale 4-MB-Abbild, falls ein
  exakter Rückweg zur Hersteller-Firmware gewünscht ist;
- den vom Betriebssystem angezeigten seriellen Port.

Die nachfolgenden Befehle zeigen Windows PowerShell. Unter macOS zuerst die
vollständige Anleitung [esptool unter macOS verwenden](esptool-macos.md) lesen.
Sie erklärt Standalone-Betrieb ohne Python, Apple-Silicon-/Intel-Auswahl,
Prüfsummen, `/dev/cu...`-Ports, die Umsetzung aller Befehle und den bekannten
Python-3.14-Fehler mit `cryptography`/Cargo.

## 1. esptool unter Windows installieren und prüfen

Falls Python noch fehlt, es ausschließlich von der
[offiziellen Python-Webseite](https://www.python.org/downloads/windows/)
installieren. Der folgende `pip`-Befehl lädt `esptool` automatisch aus dem
Python-Paketindex; eine separate Programmdatei muss dafür nicht gesucht werden.

```powershell
py --version
py -m pip install --upgrade esptool
py -m esptool version
```

Funktioniert `py` nicht, `python` verwenden. Keine zufälligen Flash-Programme
installieren; die dokumentierten Befehle gelten für Espressifs `esptool`. Die
[offizielle Espressif-Installationsanleitung](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html)
erklärt die Installation und Fehlerbehebung. Dort sind auch die von Espressif
bereitgestellten
[Standalone-Downloads](https://github.com/espressif/esptool/releases)
verlinkt, falls `esptool` ohne Python verwendet werden soll. Die
[macOS-Schritt-für-Schritt-Anleitung](esptool-macos.md) nennt die exakten
Archivnamen, Prüfsummen und Terminalbefehle; die PowerShell-Beispiele nicht auf
Verdacht übertragen.

## 2. Datei herunterladen und seriellen Port freigeben

Das Abbild von der nicht verlinkten Firmwareseite laden und zusammen mit dem
veröffentlichten SHA-256-Wert aufbewahren. ESP-IDF Monitor, PuTTY, Arduino
Serial Monitor und alle Programme schließen, die COM verwenden.

## 3. Companion-Prozessor auswählen

1. USB vollständig abziehen.
2. USB-C-Stecker um 180° drehen.
3. Neu verbinden und Port im Geräte-Manager feststellen.
4. Chip nur lesend prüfen:

```powershell
py -m esptool --port COM4 chip-id
```

Nur fortfahren, wenn ein klassischer **ESP32** gemeldet wird. Bei **ESP32-S3**
sofort stoppen, USB trennen und erneut drehen.

## 4. Optional: vollständige 4-MB-Sicherung

Dieser Abschnitt kann übersprungen werden, wenn die exakte Original-Firmware
des Begleitprozessors später nicht wiederhergestellt werden muss. Die Sicherung
ist als freiwilliger Rückweg empfehlenswert, aber keine Voraussetzung für die
Installation der Companion-Sleep-Firmware.

```powershell
py -m esptool --chip esp32 --port COM4 read-flash 0x0 0x400000 companion-original-4mb.bin
Get-Item .\companion-original-4mb.bin
Get-FileHash -Algorithm SHA256 .\companion-original-4mb.bin
```

Wenn eine Sicherung erstellt wird, muss die Datei genau **4.194.304 Bytes** groß
sein. Prüfsumme notieren und möglichst eine zweite Kopie an einem sicheren Ort
erstellen. Originalabbilder niemals veröffentlichen; sie können
gerätespezifische oder private Daten enthalten.

## 5. Download prüfen

```powershell
Get-FileHash -Algorithm SHA256 .\roonpilot-companion-sleep-factory-v1.0.1.bin
```

Für Version 1.0.1 muss der Wert lauten:

```text
4959cec1d9baf769359c21e24dbd63f6951466fd05699eec7d9c37661b92b00f
```

Bei jeder Abweichung stoppen und Datei neu laden.

## 6. Nochmals prüfen und schreiben

```powershell
py -m esptool --chip esp32 --port COM4 chip-id
py -m esptool --chip esp32 --port COM4 --baud 460800 write-flash 0x0 roonpilot-companion-sleep-factory-v1.0.1.bin
py -m esptool --chip esp32 --port COM4 verify-flash 0x0 roonpilot-companion-sleep-factory-v1.0.1.bin
```

Die S3-Factory- oder OTA-Datei darf hier niemals verwendet werden.

## 7. Zu RoonPilot zurückkehren

1. USB trennen.
2. Stecker um 180° zurückdrehen.
3. Neu verbinden.
4. `chip-id` muss nun **ESP32-S3** melden.
5. RoonPilot-Start, Display, WLAN und Roon-Verbindung prüfen.

## Original-Firmware wiederherstellen

Der exakte Herstellerzustand kann nur wiederhergestellt werden, wenn die
freiwillige Sicherung aus Schritt 4 erstellt wurde. Dazu die Companion-Seite
erneut durch Steckerrotation auswählen, den klassischen ESP32 bestätigen und
die eigene geprüfte Sicherung schreiben:

```powershell
py -m esptool --chip esp32 --port COM4 write-flash 0x0 companion-original-4mb.bin
```

Danach wieder zur ESP32-S3-Seite drehen.

## Wenn esptool keine Verbindung erhält

- alle seriellen Programme schließen;
- Datenkabel und direkten USB-Port verwenden;
- USB abziehen, Stecker drehen und erneut versuchen;
- COM-Port im Geräte-Manager neu prüfen;
- BOOT/RESET nur nach dokumentierter Recovery-Anweisung verwenden;
- niemals `erase-flash` als bloßen Verbindungstest ausführen.
