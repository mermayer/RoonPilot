# Optional factory backup with macOS

**English** · [Deutsch](de/factory-backup-macos.md) · [Backup overview](factory-backup.md)

This technical procedure reads the complete original flash from both internal
processors. It does not change either processor. Perform it only if you want a
personal return path to the exact manufacturer-delivered firmware.

> [!IMPORTANT]
> This backup is optional. You can instead return to the
> [normal browser installation](installation-macos.md) immediately.

## 1. Download the official standalone esptool

The standalone package avoids Python, `pip`, Rust and native-library builds.
These instructions were verified with Espressif esptool **v5.4.0**.

Open **Terminal** and identify the Mac architecture:

```bash
uname -m
```

Download the matching archive from Espressif's official release:

| `uname -m` result | Mac | Official archive | SHA-256 |
| --- | --- | --- | --- |
| `arm64` | Apple Silicon | [`esptool-v5.4.0-macos-arm64.tar.gz`](https://github.com/espressif/esptool/releases/download/v5.4.0/esptool-v5.4.0-macos-arm64.tar.gz) | `ba332671130939e2e6db90c2784488f7e62a1459b0fe3c5ec66e9a366821de7a` |
| `x86_64` | Intel or a Terminal running under Rosetta | [`esptool-v5.4.0-macos-amd64.tar.gz`](https://github.com/espressif/esptool/releases/download/v5.4.0/esptool-v5.4.0-macos-amd64.tar.gz) | `910bb64fe39a84c792752701293c8aa294faeef229fe8705ecd6955b01db3778` |

For Apple Silicon, verify, extract and select the executable:

```bash
cd "$HOME/Downloads"
shasum -a 256 esptool-v5.4.0-macos-arm64.tar.gz
tar -xzf esptool-v5.4.0-macos-arm64.tar.gz
ESPTOOL_BIN="$HOME/Downloads/esptool-macos-arm64/esptool"
"$ESPTOOL_BIN" version
```

For Intel/Rosetta, use:

```bash
cd "$HOME/Downloads"
shasum -a 256 esptool-v5.4.0-macos-amd64.tar.gz
tar -xzf esptool-v5.4.0-macos-amd64.tar.gz
ESPTOOL_BIN="$HOME/Downloads/esptool-macos-amd64/esptool"
"$ESPTOOL_BIN" version
```

The printed checksum must exactly match the table and the final command should
report `esptool v5.4.0`. If macOS blocks the standalone program, or if you
prefer a Python virtual environment, follow the complete
[esptool on macOS guide](esptool-macos.md). It also covers the Python 3.14
`cryptography`/Cargo error.

## 2. Prepare the backup folder

Keep all commands in the same Terminal window:

```bash
ROONPILOT_BACKUP_DIR="$HOME/Documents/RoonPilot-Factory-Backup"
mkdir -p "$ROONPILOT_BACKUP_DIR"
```

Close Chrome's installer, Arduino Serial Monitor, ESP-IDF Monitor and every
other program that may use a serial connection.

## 3. Back up the main ESP32-S3 — 16 MB

1. Connect RoonPilot with a USB data cable.
2. Open **System Information → Hardware → USB** and confirm
   **USB JTAG/serial**.
3. In Terminal, compare `ls /dev/cu.*` before and after connection. The main
   processor typically creates a `/dev/cu.usbmodem…` port. Replace the example
   port below with the one on your Mac.
4. Identify the chip without writing anything:

   ```bash
   "$ESPTOOL_BIN" --port /dev/cu.usbmodem2101 chip-id
   ```

5. Continue only if the output identifies **ESP32-S3**. Read the complete
   16 MB flash:

   ```bash
   "$ESPTOOL_BIN" --chip esp32s3 \
     --port /dev/cu.usbmodem2101 \
     --baud 460800 \
     read-flash 0x0 0x1000000 \
     "$ROONPILOT_BACKUP_DIR/esp32s3-original-16mb.bin"
   ```

6. Verify exact size and calculate its checksum:

   ```bash
   stat -f%z "$ROONPILOT_BACKUP_DIR/esp32s3-original-16mb.bin"
   shasum -a 256 "$ROONPILOT_BACKUP_DIR/esp32s3-original-16mb.bin"
   ```

The size must be exactly **16777216 bytes**. Save the SHA-256 value in a text
file beside the backup.

## 4. Back up the Companion ESP32 — 4 MB

1. Unplug USB.
2. Turn the USB-C plug at the RoonPilot device by **180 degrees** and reconnect
   it.
3. Under **System Information → Hardware → USB**, confirm **USB serial**.
4. Compare `ls /dev/cu.*` again. Depending on the Mac and driver, the Companion
   creates a `/dev/cu.usbserial…` or `/dev/cu.wchusbserial…` port. Replace the
   example below with your port.
5. Identify the chip again:

   ```bash
   "$ESPTOOL_BIN" --port /dev/cu.wchusbserial1420 chip-id
   ```

6. Continue only if the output identifies a classic **ESP32**, not ESP32-S3.
   Read the complete 4 MB flash:

   ```bash
   "$ESPTOOL_BIN" --chip esp32 \
     --port /dev/cu.wchusbserial1420 \
     --baud 460800 \
     read-flash 0x0 0x400000 \
     "$ROONPILOT_BACKUP_DIR/companion-original-4mb.bin"
   ```

7. Verify exact size and calculate its checksum:

   ```bash
   stat -f%z "$ROONPILOT_BACKUP_DIR/companion-original-4mb.bin"
   shasum -a 256 "$ROONPILOT_BACKUP_DIR/companion-original-4mb.bin"
   ```

The size must be exactly **4194304 bytes**. Save this SHA-256 value too.

## 5. Preserve and verify the files

- Keep the filenames tied to their processor.
- Copy both images and their checksums to a second, independent, preferably
  encrypted location.
- Never publish these images; original flash can contain device-specific or
  private data.
- A file with the wrong size or a later checksum mismatch is not a valid
  backup.

Afterwards, unplug USB, turn the USB-C plug at the device by 180 degrees and
reconnect it. **USB JTAG/serial** should appear again.

Continue with the [normal RoonPilot Web Installer](installation-macos.md). The
[Companion Web Installer](companion-installation-macos.md) is a separate,
optional step.

## If esptool cannot connect

- Check `/dev/cu.*` again after every reconnection.
- Close every program that may already use the port.
- Use a direct data-capable cable without a hub.
- Retry once without `--baud 460800` if the read cannot start reliably.
- Never use `erase-flash` or `write-flash` while creating a backup.
- Never force a chip type to work around an unexpected `chip-id` result.

Official references:

- [Espressif esptool installation](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html)
- [Espressif esptool v5.4.0 release](https://github.com/espressif/esptool/releases/tag/v5.4.0)
