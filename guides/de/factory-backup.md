# Optional: Original-Firmware beider Prozessoren sichern

[English](../factory-backup.md) · **Deutsch**

Eine vollständige Sicherung ist sinnvoll, wenn später möglicherweise der
exakte Auslieferungszustand des Herstellers wiederhergestellt werden soll.
Dieser Vorgang ist optional und keine Voraussetzung für die Installation von
RoonPilot. Wer sich dafür entscheidet, erstellt vor der Factory-Installation
zwei Dateien: 16 MB vom ESP32-S3 und 4 MB vom klassischen Begleit-ESP32.

## Vorbereitung

1. Python 3.10 oder neuer von der
   [offiziellen Python-Webseite](https://www.python.org/downloads/windows/)
   installieren.
2. PowerShell öffnen und `py -m pip install --upgrade esptool` ausführen. Der
   Befehl lädt das Werkzeug automatisch. Weitere Möglichkeiten stehen in der
   [offiziellen Espressif-Installationsanleitung](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html);
   Espressif bietet außerdem
   [Standalone-Downloads](https://github.com/espressif/esptool/releases) an.
3. Einen Ordner auf einem lokalen Laufwerk anlegen, zum Beispiel
   `D:\RoonPilot-Factory-Backup`.
4. Alle seriellen Monitore schließen.
5. Ein USB-Datenkabel verwenden.

## ESP32-S3 sichern

USB verbinden und zunächst nur lesen:

```powershell
py -m esptool --port COM4 chip-id
```

Nur fortfahren, wenn **ESP32-S3** gemeldet wird:

```powershell
py -m esptool --chip esp32s3 --port COM4 read-flash 0x0 0x1000000 D:\RoonPilot-Factory-Backup\esp32s3-original-16mb.bin
Get-Item D:\RoonPilot-Factory-Backup\esp32s3-original-16mb.bin
Get-FileHash -Algorithm SHA256 D:\RoonPilot-Factory-Backup\esp32s3-original-16mb.bin
```

Die Datei muss exakt **16.777.216 Bytes** groß sein. Prüfsumme notieren und
Datei an einen zweiten sicheren Ort kopieren.

## Begleit-ESP32 sichern

USB abziehen, USB-C-Stecker um 180° drehen und neu verbinden. Erneut prüfen:

```powershell
py -m esptool --port COM4 chip-id
```

Nur bei einem klassischen **ESP32** fortfahren:

```powershell
py -m esptool --chip esp32 --port COM4 read-flash 0x0 0x400000 D:\RoonPilot-Factory-Backup\companion-original-4mb.bin
Get-Item D:\RoonPilot-Factory-Backup\companion-original-4mb.bin
Get-FileHash -Algorithm SHA256 D:\RoonPilot-Factory-Backup\companion-original-4mb.bin
```

Die Datei muss exakt **4.194.304 Bytes** groß sein. Auch diese Prüfsumme
notieren und die Datei doppelt sichern.

## Sicherungen verifizieren

- Dateigrößen exakt prüfen.
- Beide SHA-256-Werte dauerhaft notieren.
- Kopien auf einem zweiten physischen Datenträger oder verschlüsselten
  Sicherungsziel aufbewahren.
- Keine Datei umbenennen, ohne die Zuordnung zum Chip eindeutig festzuhalten.
- Sicherungsdateien nicht öffentlich hochladen; sie können gerätespezifische
  oder private Daten enthalten.

Nach dem Prüfen der freiwillig erstellten Sicherungen folgt die
[Installation](installation.md). Wer keinen Rückweg zur Original-Firmware
benötigt, kann direkt mit der Installation beginnen.
