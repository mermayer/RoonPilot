# Optionale Originalsicherung unter Windows

[English](../factory-backup-windows.md) · **Deutsch** · [Backup-Übersicht](factory-backup.md)

Dieser technische Ablauf liest das vollständige Original-Flash beider internen
Prozessoren. Er verändert keinen der beiden Prozessoren. Er ist nur nötig, wenn
ein persönlicher Rückweg zur exakt ausgelieferten Hersteller-Firmware gewünscht
ist.

> [!IMPORTANT]
> Dieses Backup ist freiwillig. Ohne Backup kann direkt mit der
> [normalen Browser-Installation](installation-windows.md) fortgefahren werden.

## 1. Offizielles Standalone-esptool laden

Das Standalone-Paket vermeidet Python, `pip`, Rust und das Übersetzen nativer
Bibliotheken. Diese Anleitung wurde mit Espressif esptool **v5.4.0** geprüft.

1. Das Archiv
   [`esptool-v5.4.0-windows-amd64.zip`](https://github.com/espressif/esptool/releases/download/v5.4.0/esptool-v5.4.0-windows-amd64.zip)
   aus Espressifs offiziellem GitHub-Release laden.
2. PowerShell öffnen und das geladene ZIP prüfen:

   ```powershell
   Get-FileHash -Algorithm SHA256 "$env:USERPROFILE\Downloads\esptool-v5.4.0-windows-amd64.zip"
   ```

3. Das vollständige Ergebnis muss lauten:

   ```text
   b7f6b9dd301a210b31f4829118c909c84aae23107f9ca1fdc14ccf4d7384be2e
   ```

4. Im Explorer das ZIP mit der rechten Maustaste anklicken und
   **Alle extrahieren** wählen.
5. Die entpackten Ordner öffnen, bis `esptool.exe` sichtbar ist. In die
   Adresszeile des Explorers `powershell` eingeben und Enter drücken. Dadurch
   öffnet sich PowerShell direkt im richtigen Ordner.
6. Das Programm prüfen:

   ```powershell
   .\esptool.exe version
   ```

Der letzte Befehl sollte `esptool v5.4.0` melden. Die offizielle
[Espressif-Release-Seite](https://github.com/espressif/esptool/releases/tag/v5.4.0)
listet den Download ebenfalls auf.

## 2. Backup-Ordner vorbereiten

Alle Befehle im selben PowerShell-Fenster ausführen. Aufgabenspezifische Pfade
anlegen:

```powershell
$backupDir = Join-Path ([Environment]::GetFolderPath('MyDocuments')) 'RoonPilot-Factory-Backup'
$s3Backup = Join-Path $backupDir 'esp32s3-original-16mb.bin'
$companionBackup = Join-Path $backupDir 'companion-original-4mb.bin'
New-Item -ItemType Directory -Force -Path $backupDir
```

Chromes Installer, Arduino Serial Monitor, PuTTY, ESP-IDF Monitor und alle
anderen Programme schließen, die den seriellen Port belegen könnten.

## 3. Hauptprozessor ESP32-S3 sichern — 16 MB

1. RoonPilot mit einem USB-Datenkabel verbinden.
2. Unter **Geräte-Manager → Anschlüsse (COM & LPT)** nach
   **Serielles USB-Gerät (COMx)** suchen. Das Beispiel verwendet `COM5`; diese
   Nummer durch die eigene ersetzen.
3. Den Chip ohne Schreibzugriff identifizieren:

   ```powershell
   .\esptool.exe --port COM5 chip-id
   ```

4. Nur fortfahren, wenn die Ausgabe **ESP32-S3** nennt. Danach das vollständige
   16-MB-Flash auslesen:

   ```powershell
   .\esptool.exe --chip esp32s3 --port COM5 --baud 460800 `
     read-flash 0x0 0x1000000 $s3Backup
   ```

5. Exakte Größe prüfen und Prüfsumme berechnen:

   ```powershell
   (Get-Item -LiteralPath $s3Backup).Length
   Get-FileHash -Algorithm SHA256 -LiteralPath $s3Backup
   ```

Die Größe muss exakt **16.777.216 Bytes** betragen. Den SHA-256-Wert in einer
Textdatei neben dem Backup speichern.

## 4. Companion-ESP32 sichern — 4 MB

1. USB abziehen.
2. Den USB-C-Stecker am RoonPilot-Gerät um **180 Grad drehen** und neu
   verbinden.
3. Im Geräte-Manager nach **USB-SERIAL CH340 (COMx)** suchen. Die COM-Nummer
   kann jetzt anders sein; das Beispiel verwendet `COM4`.
4. Den Chip erneut identifizieren:

   ```powershell
   .\esptool.exe --port COM4 chip-id
   ```

5. Nur fortfahren, wenn ein klassischer **ESP32** und kein ESP32-S3 gemeldet
   wird. Danach das vollständige 4-MB-Flash auslesen:

   ```powershell
   .\esptool.exe --chip esp32 --port COM4 --baud 460800 `
     read-flash 0x0 0x400000 $companionBackup
   ```

6. Exakte Größe prüfen und Prüfsumme berechnen:

   ```powershell
   (Get-Item -LiteralPath $companionBackup).Length
   Get-FileHash -Algorithm SHA256 -LiteralPath $companionBackup
   ```

Die Größe muss exakt **4.194.304 Bytes** betragen. Auch diesen SHA-256-Wert
speichern.

## 5. Dateien sicher aufbewahren

- Dateinamen eindeutig dem jeweiligen Prozessor zugeordnet lassen.
- Beide Abbilder und Prüfsummen an einen zweiten, unabhängigen und möglichst
  verschlüsselten Ort kopieren.
- Originalabbilder niemals veröffentlichen; sie können gerätespezifische oder
  private Daten enthalten.
- Eine Datei mit falscher Größe oder später abweichender Prüfsumme ist kein
  gültiges Backup.

Danach USB abziehen, den USB-C-Stecker am Gerät um 180 Grad drehen und neu
verbinden. Jetzt sollte wieder **Serielles USB-Gerät (COMx)** erscheinen.

Mit dem [normalen RoonPilot-Webinstaller](installation-windows.md) fortfahren.
Der [Companion-Webinstaller](companion-installation-windows.md) ist ein
getrennter, freiwilliger Schritt.

## Wenn esptool keine Verbindung herstellt

- Nach jedem Neuverbinden die COM-Nummer erneut prüfen.
- Alle Programme schließen, die den Port bereits verwenden könnten.
- Ein direktes datenfähiges Kabel ohne Hub nutzen.
- Falls das Lesen nicht zuverlässig startet, einmal ohne `--baud 460800`
  wiederholen.
- Während eines Backups niemals `erase-flash` oder `write-flash` verwenden.
- Einen unerwarteten `chip-id`-Wert niemals durch Erzwingen des Chiptyps
  umgehen.

Weitere Installationswege erklärt Espressifs offizielle
[esptool-Installationsanleitung](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html).
