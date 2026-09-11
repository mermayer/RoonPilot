# Using esptool on macOS

**English** · [Deutsch](de/esptool-macos.md)

This guide is for the few RoonPilot procedures that require direct serial flash
access:

- making an optional backup of the original Waveshare firmware;
- installing or restoring the optional firmware of RoonPilot's internal
  Companion ESP32.

The normal RoonPilot ESP32-S3 Factory installation uses the browser-based Web
Installer and does **not** require Python or esptool. Normal later RoonPilot and
IR Bridge updates are installed online from RoonPilot and also do not require
esptool.

## Recommended choice

For someone who does not otherwise use Python, the official standalone esptool
release is the simpler path. It already contains everything needed and avoids
Python, `pip`, Rust and native-library builds.

Use the Python virtual-environment path only if you already work with Python or
prefer `python -m esptool`.

## Before any flash command: understand the two processors

The Waveshare ESP32-S3-Knob-Touch-LCD-1.8 contains two independent processors.
Rotating the USB-C plug at the round device can connect macOS to the other one:

| Processor | Typical macOS port | Purpose |
| --- | --- | --- |
| Main ESP32-S3 | `/dev/cu.usbmodem…` | RoonPilot display firmware |
| Classic Companion ESP32 | `/dev/cu.wchusbserial…` or another USB-serial name | Optional Companion firmware |

Port names can vary. They are only a clue; the result of `chip-id` is the final
test. Never run `erase-flash`, `write-flash` or `read-flash` until the command
has identified the expected chip.

> [!IMPORTANT]
> The external RoonPilot IR Bridge is a third, physically separate ESP32-S3
> board. Its Factory image must never be written to either processor inside the
> round RoonPilot device.

## Path A — official standalone release (recommended)

These instructions were verified with Espressif esptool **v5.4.0**.

### 1. Determine the Mac architecture

Open **Terminal** and run:

```bash
uname -m
```

Choose the archive as follows:

| Result | Mac type | Official archive |
| --- | --- | --- |
| `arm64` | Apple Silicon | [`esptool-v5.4.0-macos-arm64.tar.gz`](https://github.com/espressif/esptool/releases/download/v5.4.0/esptool-v5.4.0-macos-arm64.tar.gz) |
| `x86_64` | Intel, or a Terminal running under Rosetta | [`esptool-v5.4.0-macos-amd64.tar.gz`](https://github.com/espressif/esptool/releases/download/v5.4.0/esptool-v5.4.0-macos-amd64.tar.gz) |

On an Apple-Silicon Mac, a Terminal deliberately launched with Rosetta can
report `x86_64`. Either use the matching `amd64` archive in that Terminal or
close it and open a native Terminal so `uname -m` reports `arm64`.

Both files also appear on the
[official Espressif esptool release page](https://github.com/espressif/esptool/releases/tag/v5.4.0).
Do not download a repackaged copy from a third-party site.

### 2. Verify the download

In Terminal, change to Downloads and calculate the checksum of the archive you
downloaded:

```bash
cd "$HOME/Downloads"
shasum -a 256 esptool-v5.4.0-macos-arm64.tar.gz
```

For an Intel/Rosetta download, replace `arm64` with `amd64`. The expected values
published with Espressif's release assets are:

| Archive | SHA-256 |
| --- | --- |
| `esptool-v5.4.0-macos-arm64.tar.gz` | `ba332671130939e2e6db90c2784488f7e62a1459b0fe3c5ec66e9a366821de7a` |
| `esptool-v5.4.0-macos-amd64.tar.gz` | `910bb64fe39a84c792752701293c8aa294faeef229fe8705ecd6955b01db3778` |

The value printed by `shasum` must match the complete value in the table.

### 3. Extract and test esptool

For Apple Silicon:

```bash
cd "$HOME/Downloads"
tar -xzf esptool-v5.4.0-macos-arm64.tar.gz
cd esptool-macos-arm64
./esptool version
```

For Intel/Rosetta:

```bash
cd "$HOME/Downloads"
tar -xzf esptool-v5.4.0-macos-amd64.tar.gz
cd esptool-macos-amd64
./esptool version
```

The final command should report `esptool v5.4.0`. The archive already marks the
program executable. If macOS reports `permission denied` after extraction, run
this once inside the extracted folder:

```bash
chmod u+x ./esptool
```

If macOS blocks the program for a security reason, confirm that it came directly
from the official Espressif release page. Do not remove security attributes from
an unverified download. The Python virtual-environment path below is a safe
alternative if local policy does not permit the standalone application.

### 4. Find the serial port

First list likely serial devices with RoonPilot disconnected:

```bash
ls /dev/cu.*
```

Connect RoonPilot with a data-capable USB cable and run the command again. The
new entry is normally the relevant port. Typical examples are:

```text
/dev/cu.usbmodem2101
/dev/cu.wchusbserial1420
```

Close Chrome's Web Installer, Arduino Serial Monitor, ESP-IDF Monitor and every
other program that may have opened that port.

### 5. Store the executable path for this Terminal

Apple Silicon example:

```bash
ESPTOOL_BIN="$HOME/Downloads/esptool-macos-arm64/esptool"
"$ESPTOOL_BIN" version
```

Intel/Rosetta example:

```bash
ESPTOOL_BIN="$HOME/Downloads/esptool-macos-amd64/esptool"
"$ESPTOOL_BIN" version
```

This variable exists only in the current Terminal window. It does not change
macOS globally.

### 6. Identify the processor

Replace the example port with the new port found on your Mac:

```bash
"$ESPTOOL_BIN" --port /dev/cu.usbmodem2101 chip-id
```

- Continue with a main-device backup only if the output says **ESP32-S3**.
- Continue with Companion backup/installation only if it says classic
  **ESP32**, not ESP32-S3.
- If the wrong chip is reported, disconnect USB, rotate the USB-C plug at the
  round device by 180 degrees, reconnect and run `chip-id` again.

### 7. Translate the commands in the RoonPilot guides

Where a RoonPilot guide shows:

```text
python -m esptool …
```

or:

```text
py -m esptool …
```

use this with the standalone release:

```text
"$ESPTOOL_BIN" …
```

For example, a verified Companion backup becomes:

```bash
mkdir -p "$HOME/Documents/RoonPilot-Factory-Backup"

"$ESPTOOL_BIN" --chip esp32 \
  --port /dev/cu.wchusbserial1420 \
  --baud 460800 \
  read-flash 0x0 0x400000 \
  "$HOME/Documents/RoonPilot-Factory-Backup/companion-original-4mb.bin"
```

Check its exact size and create a checksum:

```bash
stat -f%z "$HOME/Documents/RoonPilot-Factory-Backup/companion-original-4mb.bin"
shasum -a 256 "$HOME/Documents/RoonPilot-Factory-Backup/companion-original-4mb.bin"
```

A complete Companion backup must contain exactly `4194304` bytes. Keep the
printed checksum with the file.

## Path B — Python virtual environment

Espressif recommends a virtual environment because it isolates esptool and its
dependencies from the rest of the computer.

### Normal installation

```bash
python3 -m venv "$HOME/esptoolenv-roonpilot"
source "$HOME/esptoolenv-roonpilot/bin/activate"
python -m pip install --upgrade pip setuptools wheel
python -m pip install --upgrade "esptool>=5.4,<6"
python -m esptool version
```

Run the RoonPilot commands in the same Terminal while this environment is
active. In a later Terminal session, reactivate it with:

```bash
source "$HOME/esptoolenv-roonpilot/bin/activate"
```

When finished for the day:

```bash
deactivate
```

Do not use `sudo pip install`. A virtual environment neither needs nor benefits
from administrator privileges.

### Python 3.14, Intel/Rosetta and a cryptography/Cargo error

An error containing all of these terms is a dependency installation problem,
not a connection problem with RoonPilot:

```text
Failed building wheel for cryptography
Failed to build a native library through cargo
pyo3-config-x86_64-apple-darwin-3.14
```

`cryptography` 49 stopped publishing x86-64 macOS wheels. The released
esptool 5.4.0 accepts an earlier compatible release, but its dependency rule
does not by itself stop `pip` from choosing version 49 on this platform. `pip`
may then try to compile it locally with Rust. Use a new environment and install
a compatible binary wheel explicitly before installing esptool:

```bash
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3.14 \
  -m venv "$HOME/esptoolenv-roonpilot-314"

source "$HOME/esptoolenv-roonpilot-314/bin/activate"
python -m pip install --upgrade pip setuptools wheel
python -m pip install --only-binary=cryptography "cryptography>=43,<49"
python -m pip install --upgrade "esptool>=5.4,<6"
python -m esptool version
```

This should install a prebuilt compatible `cryptography` wheel instead of
starting Cargo. Installing Rust and compiling the library is unnecessary for a
normal RoonPilot user. If a binary wheel is still unavailable for that Mac,
use Path A rather than weakening macOS security or building a toolchain.

## Common macOS errors

| Message or symptom | Meaning and action |
| --- | --- |
| `command not found: esptool` | With Python use `python -m esptool`; with the standalone release use `"$ESPTOOL_BIN"`. |
| `No module named esptool` | The virtual environment is not active or installation failed. Activate it and run the install command again. |
| `Failed building wheel for cryptography` | Use the Python 3.14/x86 procedure above or the standalone release. Do not diagnose the USB cable yet. |
| No new `/dev/cu.*` entry | Use a data cable and connect directly without a hub. Then unplug USB, turn the USB-C plug at RoonPilot by 180 degrees, reconnect and compare the list again. |
| `Could not open …` or `Resource busy` | Close every serial monitor and browser Web Serial dialog using the port. Unplug/reconnect, then retry. |
| Wrong chip in `chip-id` | Stop. Unplug USB, turn the USB-C plug at RoonPilot by 180 degrees, reconnect and identify again. Never compensate by forcing `--chip`. |
| Connection dots continue forever | Reconnect, reduce baud if a guide permits it, and ensure the correct port and chip are selected. Do not erase experimentally. |

## Official references

- [Espressif: Install esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html)
- [Espressif: esptool v5.4.0 release and standalone downloads](https://github.com/espressif/esptool/releases/tag/v5.4.0)
- [esptool v5.4.0 dependency metadata](https://github.com/espressif/esptool/blob/v5.4.0/pyproject.toml)
- [`cryptography` changelog](https://github.com/pyca/cryptography/blob/main/CHANGELOG.rst)

## Continue with the correct procedure

- [Optional original-firmware backup](factory-backup.md)
- [Optional Companion ESP32 firmware](companion-firmware.md)
- [Main RoonPilot browser installation](installation.md)
