# Original-Firmware beider Prozessoren sichern

[English](../factory-backup.md) · **Deutsch**

Die Sicherungen sind der einzige sichere Weg zurück zum exakten
Auslieferungszustand. Es werden zwei Dateien benötigt: 16 MB vom ESP32-S3 und
4 MB vom klassischen Begleit-ESP32.

## Vorbereitung

1. Python 3.10 oder neuer installieren.
2. PowerShell öffnen und `py -m pip install --upgrade esptool` ausführen.
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

Erst wenn beide Sicherungen vollständig und geprüft sind, folgt die
[Installation](installation.md).
