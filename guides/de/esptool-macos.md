# esptool unter macOS verwenden

[English](../esptool-macos.md) · **Deutsch**

Diese Anleitung gilt für die wenigen RoonPilot-Arbeiten, die direkten seriellen
Flashzugriff benötigen:

- optionale Sicherung der ursprünglichen Waveshare-Firmware;
- manuelle Wiederherstellung eines zuvor gesicherten Originalabbilds oder
  erweiterte serielle Diagnose.

Die normale Factory-Installation der RoonPilot-Hauptfirmware auf dem ESP32-S3
und die optionale Installation des Companion-ESP32 besitzen jeweils einen
eigenen Webinstaller. Beide benötigen weder Python noch esptool. Normale spätere
Onlineupdates von RoonPilot benötigen esptool ebenfalls nicht.

## Empfohlener Weg

Wer Python sonst nicht verwendet, nimmt am einfachsten das offizielle
Standalone-esptool. Darin ist alles Notwendige enthalten; Python, `pip`, Rust
und das Übersetzen nativer Bibliotheken entfallen.

Die virtuelle Python-Umgebung ist nur sinnvoll, wenn Python bereits genutzt wird
oder ausdrücklich mit `python -m esptool` gearbeitet werden soll.

## Vor jedem Flashbefehl: die beiden Prozessoren verstehen

Das Waveshare ESP32-S3-Knob-Touch-LCD-1.8 enthält zwei unabhängige Prozessoren.
Durch Drehen des USB-C-Steckers am runden Gerät kann macOS mit dem jeweils
anderen verbunden werden:

| Prozessor | Typischer macOS-Port | Aufgabe |
| --- | --- | --- |
| Haupt-ESP32-S3 | `/dev/cu.usbmodem…` | RoonPilot-Displayfirmware |
| Klassischer Begleit-ESP32 | `/dev/cu.wchusbserial…` oder anderer USB-Seriell-Name | Optionale Companion-Firmware |

Portnamen können abweichen und sind nur ein Anhaltspunkt. Das Ergebnis von
`chip-id` ist die entscheidende Prüfung. Niemals `erase-flash`, `write-flash`
oder `read-flash` ausführen, bevor der erwartete Chip identifiziert wurde.

## Weg A – offizielles Standalone-Release (empfohlen)

Diese Anleitung wurde mit Espressif esptool **v5.4.0** geprüft.

### 1. Mac-Architektur ermitteln

**Terminal** öffnen und ausführen:

```bash
uname -m
```

Danach das passende Archiv auswählen:

| Ergebnis | Mac-Typ | Offizielles Archiv |
| --- | --- | --- |
| `arm64` | Apple Silicon | [`esptool-v5.4.0-macos-arm64.tar.gz`](https://github.com/espressif/esptool/releases/download/v5.4.0/esptool-v5.4.0-macos-arm64.tar.gz) |
| `x86_64` | Intel oder Terminal unter Rosetta | [`esptool-v5.4.0-macos-amd64.tar.gz`](https://github.com/espressif/esptool/releases/download/v5.4.0/esptool-v5.4.0-macos-amd64.tar.gz) |

Auf einem Apple-Silicon-Mac kann ein absichtlich unter Rosetta gestartetes
Terminal `x86_64` melden. Dann entweder in diesem Terminal das passende
`amd64`-Archiv verwenden oder das Terminal schließen und nativ neu öffnen,
sodass `uname -m` den Wert `arm64` ausgibt.

Beide Dateien stehen auch auf der
[offiziellen Espressif-Release-Seite](https://github.com/espressif/esptool/releases/tag/v5.4.0).
Keine neu verpackte Kopie einer Drittseite verwenden.

### 2. Download prüfen

Im Terminal in den Downloadordner wechseln und die Prüfsumme des geladenen
Archivs berechnen:

```bash
cd "$HOME/Downloads"
shasum -a 256 esptool-v5.4.0-macos-arm64.tar.gz
```

Bei Intel/Rosetta `arm64` durch `amd64` ersetzen. Die von Espressif für die
Release-Dateien veröffentlichten Werte lauten:

| Archiv | SHA-256 |
| --- | --- |
| `esptool-v5.4.0-macos-arm64.tar.gz` | `ba332671130939e2e6db90c2784488f7e62a1459b0fe3c5ec66e9a366821de7a` |
| `esptool-v5.4.0-macos-amd64.tar.gz` | `910bb64fe39a84c792752701293c8aa294faeef229fe8705ecd6955b01db3778` |

Der von `shasum` ausgegebene vollständige Wert muss exakt übereinstimmen.

### 3. esptool entpacken und prüfen

Für Apple Silicon:

```bash
cd "$HOME/Downloads"
tar -xzf esptool-v5.4.0-macos-arm64.tar.gz
cd esptool-macos-arm64
./esptool version
```

Für Intel/Rosetta:

```bash
cd "$HOME/Downloads"
tar -xzf esptool-v5.4.0-macos-amd64.tar.gz
cd esptool-macos-amd64
./esptool version
```

Der letzte Befehl muss `esptool v5.4.0` melden. Das Archiv kennzeichnet das
Programm bereits als ausführbar. Meldet macOS nach dem Entpacken dennoch
`permission denied`, einmal im entpackten Ordner ausführen:

```bash
chmod u+x ./esptool
```

Blockiert macOS das Programm aus Sicherheitsgründen, zuerst prüfen, dass es
direkt von der offiziellen Espressif-Seite stammt. Sicherheitsattribute eines
ungeprüften Downloads niemals entfernen. Falls lokale Richtlinien das
Standalone-Programm nicht erlauben, ist die virtuelle Python-Umgebung weiter
unten die sichere Alternative.

### 4. Seriellen Port finden

Zuerst ohne angeschlossenen RoonPilot mögliche Geräte auflisten:

```bash
ls /dev/cu.*
```

RoonPilot mit einem datenfähigen USB-Kabel verbinden und den Befehl wiederholen.
Der neue Eintrag ist normalerweise der gesuchte Port, zum Beispiel:

```text
/dev/cu.usbmodem2101
/dev/cu.wchusbserial1420
```

Chromes Webinstaller, Arduino Serial Monitor, ESP-IDF Monitor und alle anderen
Programme schließen, die diesen Port geöffnet haben könnten.

### 5. Programmpfad für dieses Terminal speichern

Beispiel für Apple Silicon:

```bash
ESPTOOL_BIN="$HOME/Downloads/esptool-macos-arm64/esptool"
"$ESPTOOL_BIN" version
```

Beispiel für Intel/Rosetta:

```bash
ESPTOOL_BIN="$HOME/Downloads/esptool-macos-amd64/esptool"
"$ESPTOOL_BIN" version
```

Diese Variable gilt nur im aktuellen Terminalfenster und verändert macOS nicht
global.

### 6. Prozessor identifizieren

Den Beispielport durch den auf dem eigenen Mac gefundenen Port ersetzen:

```bash
"$ESPTOOL_BIN" --port /dev/cu.usbmodem2101 chip-id
```

- Eine Sicherung des Hauptgeräts nur fortsetzen, wenn **ESP32-S3** gemeldet wird.
- Companion-Sicherung/-Installation nur bei klassischem **ESP32**, nicht
  ESP32-S3, fortsetzen.
- Bei falschem Chip USB trennen, den USB-C-Stecker am runden Gerät um 180 Grad
  drehen, wieder verbinden und `chip-id` erneut ausführen.

### 7. Befehle aus den RoonPilot-Anleitungen übersetzen

Wo eine RoonPilot-Anleitung Folgendes zeigt:

```text
python -m esptool …
```

oder:

```text
py -m esptool …
```

mit dem Standalone-Release stattdessen verwenden:

```text
"$ESPTOOL_BIN" …
```

Eine geprüfte Companion-Sicherung sieht beispielsweise so aus:

```bash
mkdir -p "$HOME/Documents/RoonPilot-Factory-Backup"

"$ESPTOOL_BIN" --chip esp32 \
  --port /dev/cu.wchusbserial1420 \
  --baud 460800 \
  read-flash 0x0 0x400000 \
  "$HOME/Documents/RoonPilot-Factory-Backup/companion-original-4mb.bin"
```

Exakte Größe und Prüfsumme kontrollieren:

```bash
stat -f%z "$HOME/Documents/RoonPilot-Factory-Backup/companion-original-4mb.bin"
shasum -a 256 "$HOME/Documents/RoonPilot-Factory-Backup/companion-original-4mb.bin"
```

Eine vollständige Companion-Sicherung enthält exakt `4194304` Bytes. Die
ausgegebene Prüfsumme gemeinsam mit der Datei aufbewahren.

## Weg B – virtuelle Python-Umgebung

Espressif empfiehlt eine virtuelle Umgebung, weil sie esptool und seine
Abhängigkeiten vom restlichen Computer trennt.

### Normale Installation

```bash
python3 -m venv "$HOME/esptoolenv-roonpilot"
source "$HOME/esptoolenv-roonpilot/bin/activate"
python -m pip install --upgrade pip setuptools wheel
python -m pip install --upgrade "esptool>=5.4,<6"
python -m esptool version
```

Die RoonPilot-Befehle im selben Terminal ausführen, solange die Umgebung aktiv
ist. In einem späteren Terminal wird sie erneut aktiviert mit:

```bash
source "$HOME/esptoolenv-roonpilot/bin/activate"
```

Nach Abschluss der Arbeit:

```bash
deactivate
```

Kein `sudo pip install` verwenden. Eine virtuelle Umgebung benötigt keine
Administratorrechte.

### Python 3.14, Intel/Rosetta und cryptography-/Cargo-Fehler

Eine Meldung mit diesen Begriffen ist ein Problem der Paketinstallation und
kein Verbindungsfehler von RoonPilot:

```text
Failed building wheel for cryptography
Failed to build a native library through cargo
pyo3-config-x86_64-apple-darwin-3.14
```

`cryptography` 49 veröffentlicht keine x86-64-macOS-Wheels mehr. Das
veröffentlichte esptool 5.4.0 akzeptiert eine frühere kompatible Version, seine
Abhängigkeitsregel verhindert auf dieser Plattform aber noch nicht, dass `pip`
Version 49 auswählt. `pip` versucht dann möglicherweise, sie lokal mit Rust zu
übersetzen. Eine neue Umgebung anlegen und zuerst ausdrücklich ein kompatibles
fertiges Binärpaket installieren:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3.14 \
  -m venv "$HOME/esptoolenv-roonpilot-314"

source "$HOME/esptoolenv-roonpilot-314/bin/activate"
python -m pip install --upgrade pip setuptools wheel
python -m pip install --only-binary=cryptography "cryptography>=43,<49"
python -m pip install --upgrade "esptool>=5.4,<6"
python -m esptool version
```

Damit wird ein kompatibles fertiges `cryptography`-Wheel installiert, anstatt
Cargo zu starten. Für einen normalen RoonPilot-Anwender ist es unnötig, Rust zu
installieren und die Bibliothek selbst zu übersetzen. Ist für diesen Mac
trotzdem kein Wheel verfügbar, Weg A verwenden, statt macOS-Sicherheit zu
schwächen oder eine Buildumgebung einzurichten.

## Häufige macOS-Fehler

| Meldung oder Symptom | Bedeutung und Abhilfe |
| --- | --- |
| `command not found: esptool` | Mit Python `python -m esptool`, mit Standalone `"$ESPTOOL_BIN"` verwenden. |
| `No module named esptool` | Virtuelle Umgebung ist nicht aktiv oder Installation ist fehlgeschlagen. Aktivieren und erneut installieren. |
| `Failed building wheel for cryptography` | Python-3.14-/x86-Anleitung oben oder Standalone verwenden. Das USB-Kabel ist hierfür noch nicht verantwortlich. |
| Kein neuer `/dev/cu.*`-Eintrag | Datenkabel verwenden und direkt ohne Hub verbinden. Dann USB abziehen, den USB-C-Stecker am RoonPilot um 180 Grad drehen, neu verbinden und die Liste erneut vergleichen. |
| `Could not open …` oder `Resource busy` | Alle seriellen Monitore und Web-Serial-Dialoge schließen. USB trennen/verbinden und wiederholen. |
| Falscher Chip bei `chip-id` | Stoppen, USB abziehen, den USB-C-Stecker am RoonPilot um 180 Grad drehen, neu verbinden und erneut identifizieren. Niemals durch erzwungenes `--chip` kompensieren. |
| Verbindungspunkte laufen endlos | Neu verbinden, Baudrate nur nach Anleitung reduzieren und Port/Chip prüfen. Nicht versuchsweise löschen. |

## Offizielle Quellen

- [Espressif: esptool installieren](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html)
- [Espressif: esptool-v5.4.0-Release und Standalone-Downloads](https://github.com/espressif/esptool/releases/tag/v5.4.0)
- [Abhängigkeitsdefinition von esptool 5.4.0](https://github.com/espressif/esptool/blob/v5.4.0/pyproject.toml)
- [`cryptography`-Änderungsprotokoll](https://github.com/pyca/cryptography/blob/main/CHANGELOG.rst)

## Mit der richtigen Anleitung fortfahren

- [Optionale Sicherung der Original-Firmware](factory-backup.md)
- [Optionaler Companion-ESP32-Webinstaller](companion-firmware.md)
- [RoonPilot-Hauptfirmware per Webinstaller](installation.md)
