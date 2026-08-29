# Optionale Firmware für den Begleit-ESP32

[English](../companion-firmware.md) · **Deutsch**

> [!IMPORTANT]
> Diese Firmware ist optional, getrennt und nicht für den ESP32-S3 bestimmt.
> RoonPilot funktioniert vollständig ohne sie. Vor der Installation muss der
> originale 4-MB-Flash des klassischen ESP32 vollständig gesichert und geprüft
> sein.

## Aufgabe

Das Waveshare-Modul enthält neben dem ESP32-S3 einen unabhängig
programmierbaren klassischen ESP32. RoonPilot nutzt ihn nicht. Die kleine
Companion-Firmware deaktiviert den ungenutzten DAC-Pfad und versetzt diesen
Prozessor dauerhaft in Deep Sleep, um unnötigen Stromverbrauch zu vermeiden.
Sie fügt keine Roon-Funktion hinzu und wird niemals vom Web Installer des
Hauptprozessors installiert.

## Benötigt

- Windows-PC und USB-Datenkabel;
- Python 3.10 oder neuer;
- Espressif `esptool`;
- heruntergeladenes Companion-Abbild samt SHA-256;
- sicherer Speicherort für das originale 4-MB-Abbild;
- genaue Kenntnis des COM-Ports.

## 1. esptool installieren und prüfen

```powershell
py --version
py -m pip install --upgrade esptool
py -m esptool version
```

Funktioniert `py` nicht, `python` verwenden. Keine zufälligen Flash-Programme
installieren; die dokumentierten Befehle gelten für Espressifs `esptool`.

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

## 4. Verpflichtende vollständige 4-MB-Sicherung

```powershell
py -m esptool --chip esp32 --port COM4 read-flash 0x0 0x400000 companion-original-4mb.bin
Get-Item .\companion-original-4mb.bin
Get-FileHash -Algorithm SHA256 .\companion-original-4mb.bin
```

Die Datei muss genau **4.194.304 Bytes** groß sein. Prüfsumme notieren und eine
zweite Kopie an einem sicheren Ort erstellen. Ohne korrekte Sicherung nicht
fortfahren.

## 5. Download prüfen

```powershell
Get-FileHash -Algorithm SHA256 .\roonpilot-companion-sleep-factory-v1.0.0.bin
```

Für Version 1.0.0 muss der Wert lauten:

```text
2288e61f9e2a0ed72e2ebf29cf7d7f317800f0623012f2516281e909d499d5a2
```

Bei jeder Abweichung stoppen und Datei neu laden.

## 6. Nochmals prüfen und schreiben

```powershell
py -m esptool --chip esp32 --port COM4 chip-id
py -m esptool --chip esp32 --port COM4 --baud 460800 write-flash 0x0 roonpilot-companion-sleep-factory-v1.0.0.bin
py -m esptool --chip esp32 --port COM4 verify-flash 0x0 roonpilot-companion-sleep-factory-v1.0.0.bin
```

Die S3-Factory- oder OTA-Datei darf hier niemals verwendet werden.

## 7. Zu RoonPilot zurückkehren

1. USB trennen.
2. Stecker um 180° zurückdrehen.
3. Neu verbinden.
4. `chip-id` muss nun **ESP32-S3** melden.
5. RoonPilot-Start, Display, WLAN und Roon-Verbindung prüfen.

## Original-Firmware wiederherstellen

Companion-Seite erneut durch Steckerrotation auswählen, klassischen ESP32
bestätigen und die eigene geprüfte Sicherung schreiben:

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
