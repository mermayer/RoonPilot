# Optionale Originalsicherung unter macOS

[English](../factory-backup-macos.md) · **Deutsch** · [Backup-Übersicht](factory-backup.md)

Dieser technische Ablauf liest das vollständige Original-Flash beider internen
Prozessoren. Er verändert keinen der beiden Prozessoren. Er ist nur nötig, wenn
ein persönlicher Rückweg zur exakt ausgelieferten Hersteller-Firmware gewünscht
ist.

> [!IMPORTANT]
> Dieses Backup ist freiwillig. Ohne Backup kann direkt mit der
> [normalen Browser-Installation](installation-macos.md) fortgefahren werden.

## 1. Offizielles Standalone-esptool laden

Das Standalone-Paket vermeidet Python, `pip`, Rust und das Übersetzen nativer
Bibliotheken. Diese Anleitung wurde mit Espressif esptool **v5.4.0** geprüft.

**Terminal** öffnen und die Mac-Architektur ermitteln:

```bash
uname -m
```

Das passende Archiv aus Espressifs offiziellem Release laden:

| Ergebnis von `uname -m` | Mac | Offizielles Archiv | SHA-256 |
| --- | --- | --- | --- |
| `arm64` | Apple Silicon | [`esptool-v5.4.0-macos-arm64.tar.gz`](https://github.com/espressif/esptool/releases/download/v5.4.0/esptool-v5.4.0-macos-arm64.tar.gz) | `ba332671130939e2e6db90c2784488f7e62a1459b0fe3c5ec66e9a366821de7a` |
| `x86_64` | Intel oder Terminal unter Rosetta | [`esptool-v5.4.0-macos-amd64.tar.gz`](https://github.com/espressif/esptool/releases/download/v5.4.0/esptool-v5.4.0-macos-amd64.tar.gz) | `910bb64fe39a84c792752701293c8aa294faeef229fe8705ecd6955b01db3778` |

Für Apple Silicon Download prüfen, entpacken und Programm auswählen:

```bash
cd "$HOME/Downloads"
shasum -a 256 esptool-v5.4.0-macos-arm64.tar.gz
tar -xzf esptool-v5.4.0-macos-arm64.tar.gz
ESPTOOL_BIN="$HOME/Downloads/esptool-macos-arm64/esptool"
"$ESPTOOL_BIN" version
```

Für Intel/Rosetta verwenden:

```bash
cd "$HOME/Downloads"
shasum -a 256 esptool-v5.4.0-macos-amd64.tar.gz
tar -xzf esptool-v5.4.0-macos-amd64.tar.gz
ESPTOOL_BIN="$HOME/Downloads/esptool-macos-amd64/esptool"
"$ESPTOOL_BIN" version
```

Die ausgegebene Prüfsumme muss exakt der Tabelle entsprechen. Der letzte
Befehl sollte `esptool v5.4.0` melden. Blockiert macOS das Standalone-Programm
oder soll stattdessen eine virtuelle Python-Umgebung verwendet werden, hilft
die vollständige Anleitung [esptool unter macOS](esptool-macos.md). Dort ist
auch der Python-3.14-Fehler mit `cryptography`/Cargo erklärt.

## 2. Backup-Ordner vorbereiten

Alle Befehle im selben Terminalfenster ausführen:

```bash
ROONPILOT_BACKUP_DIR="$HOME/Documents/RoonPilot-Factory-Backup"
mkdir -p "$ROONPILOT_BACKUP_DIR"
```

Chromes Installer, Arduino Serial Monitor, ESP-IDF Monitor und alle anderen
Programme schließen, die eine serielle Verbindung verwenden könnten.

## 3. Hauptprozessor ESP32-S3 sichern — 16 MB

1. RoonPilot mit einem USB-Datenkabel verbinden.
2. Unter **Systeminformationen → Hardware → USB** den Eintrag
   **USB JTAG/serial** bestätigen.
3. Im Terminal `ls /dev/cu.*` vor und nach dem Verbinden vergleichen. Der
   Hauptprozessor erzeugt typischerweise einen Port `/dev/cu.usbmodem…`. Den
   Beispielport unten durch den eigenen ersetzen.
4. Den Chip ohne Schreibzugriff identifizieren:

   ```bash
   "$ESPTOOL_BIN" --port /dev/cu.usbmodem2101 chip-id
   ```

5. Nur fortfahren, wenn die Ausgabe **ESP32-S3** nennt. Danach das vollständige
   16-MB-Flash auslesen:

   ```bash
   "$ESPTOOL_BIN" --chip esp32s3 \
     --port /dev/cu.usbmodem2101 \
     --baud 460800 \
     read-flash 0x0 0x1000000 \
     "$ROONPILOT_BACKUP_DIR/esp32s3-original-16mb.bin"
   ```

6. Exakte Größe prüfen und Prüfsumme berechnen:

   ```bash
   stat -f%z "$ROONPILOT_BACKUP_DIR/esp32s3-original-16mb.bin"
   shasum -a 256 "$ROONPILOT_BACKUP_DIR/esp32s3-original-16mb.bin"
   ```

Die Größe muss exakt **16777216 Bytes** betragen. Den SHA-256-Wert in einer
Textdatei neben dem Backup speichern.

## 4. Companion-ESP32 sichern — 4 MB

1. USB abziehen.
2. Den USB-C-Stecker am RoonPilot-Gerät um **180 Grad drehen** und neu
   verbinden.
3. Unter **Systeminformationen → Hardware → USB** den Eintrag **USB serial**
   bestätigen.
4. `ls /dev/cu.*` erneut vergleichen. Der Companion erzeugt je nach Mac und
   Treiber einen Port `/dev/cu.usbserial…` oder `/dev/cu.wchusbserial…`. Den
   Beispielport unten durch den eigenen ersetzen.
5. Den Chip erneut identifizieren:

   ```bash
   "$ESPTOOL_BIN" --port /dev/cu.wchusbserial1420 chip-id
   ```

6. Nur fortfahren, wenn ein klassischer **ESP32** und kein ESP32-S3 gemeldet
   wird. Danach das vollständige 4-MB-Flash auslesen:

   ```bash
   "$ESPTOOL_BIN" --chip esp32 \
     --port /dev/cu.wchusbserial1420 \
     --baud 460800 \
     read-flash 0x0 0x400000 \
     "$ROONPILOT_BACKUP_DIR/companion-original-4mb.bin"
   ```

7. Exakte Größe prüfen und Prüfsumme berechnen:

   ```bash
   stat -f%z "$ROONPILOT_BACKUP_DIR/companion-original-4mb.bin"
   shasum -a 256 "$ROONPILOT_BACKUP_DIR/companion-original-4mb.bin"
   ```

Die Größe muss exakt **4194304 Bytes** betragen. Auch diesen SHA-256-Wert
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
verbinden. Jetzt sollte wieder **USB JTAG/serial** erscheinen.

Mit dem [normalen RoonPilot-Webinstaller](installation-macos.md) fortfahren.
Der [Companion-Webinstaller](companion-installation-macos.md) ist ein
getrennter, freiwilliger Schritt.

## Wenn esptool keine Verbindung herstellt

- Nach jedem Neuverbinden `/dev/cu.*` erneut prüfen.
- Alle Programme schließen, die den Port bereits verwenden könnten.
- Ein direktes datenfähiges Kabel ohne Hub nutzen.
- Falls das Lesen nicht zuverlässig startet, einmal ohne `--baud 460800`
  wiederholen.
- Während eines Backups niemals `erase-flash` oder `write-flash` verwenden.
- Einen unerwarteten `chip-id`-Wert niemals durch Erzwingen des Chiptyps
  umgehen.

Offizielle Quellen:

- [Espressif: esptool installieren](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html)
- [Espressif: esptool v5.4.0](https://github.com/espressif/esptool/releases/tag/v5.4.0)
