# Optional factory backup with Windows

**English** · [Deutsch](de/factory-backup-windows.md) · [Backup overview](factory-backup.md)

This technical procedure reads the complete original flash from both internal
processors. It does not change either processor. Perform it only if you want a
personal return path to the exact manufacturer-delivered firmware.

> [!IMPORTANT]
> This backup is optional. You can instead return to the
> [normal browser installation](installation-windows.md) immediately.

## 1. Download the official standalone esptool

The standalone package avoids Python, `pip`, Rust and native-library builds.
These instructions were verified with Espressif esptool **v5.4.0**.

1. Download
   [`esptool-v5.4.0-windows-amd64.zip`](https://github.com/espressif/esptool/releases/download/v5.4.0/esptool-v5.4.0-windows-amd64.zip)
   from Espressif's official GitHub release.
2. Open PowerShell and verify the downloaded ZIP:

   ```powershell
   Get-FileHash -Algorithm SHA256 "$env:USERPROFILE\Downloads\esptool-v5.4.0-windows-amd64.zip"
   ```

3. The complete result must be:

   ```text
   b7f6b9dd301a210b31f4829118c909c84aae23107f9ca1fdc14ccf4d7384be2e
   ```

4. In File Explorer, right-click the ZIP and select **Extract All**.
5. Open the extracted folders until `esptool.exe` is visible. Click File
   Explorer's address bar, enter `powershell` and press Enter. This opens
   PowerShell directly in the correct folder.
6. Test the program:

   ```powershell
   .\esptool.exe version
   ```

The final command should report `esptool v5.4.0`. The official
[Espressif release page](https://github.com/espressif/esptool/releases/tag/v5.4.0)
also lists the download.

## 2. Prepare the backup folder

Keep all commands in the same PowerShell window. Create task-specific paths:

```powershell
$backupDir = Join-Path ([Environment]::GetFolderPath('MyDocuments')) 'RoonPilot-Factory-Backup'
$s3Backup = Join-Path $backupDir 'esp32s3-original-16mb.bin'
$companionBackup = Join-Path $backupDir 'companion-original-4mb.bin'
New-Item -ItemType Directory -Force -Path $backupDir
```

Close Chrome's installer, Arduino Serial Monitor, PuTTY, ESP-IDF Monitor and
every other program that may hold the serial port.

## 3. Back up the main ESP32-S3 — 16 MB

1. Connect RoonPilot with a USB data cable.
2. In **Device Manager → Ports (COM & LPT)**, locate
   **USB Serial Device (COMx)**. The example below uses `COM5`; replace it with
   your number.
3. Identify the chip without writing anything:

   ```powershell
   .\esptool.exe --port COM5 chip-id
   ```

4. Continue only if the output identifies **ESP32-S3**. Then read the complete
   16 MB flash:

   ```powershell
   .\esptool.exe --chip esp32s3 --port COM5 --baud 460800 `
     read-flash 0x0 0x1000000 $s3Backup
   ```

5. Verify exact size and calculate its checksum:

   ```powershell
   (Get-Item -LiteralPath $s3Backup).Length
   Get-FileHash -Algorithm SHA256 -LiteralPath $s3Backup
   ```

The size must be exactly **16,777,216 bytes**. Copy the SHA-256 value into a
text file beside the backup.

## 4. Back up the Companion ESP32 — 4 MB

1. Unplug USB.
2. Turn the USB-C plug at the RoonPilot device by **180 degrees** and reconnect
   it.
3. In Device Manager, locate **USB-SERIAL CH340 (COMx)**. Its COM number may be
   different; the example continues with `COM4`.
4. Identify the chip again:

   ```powershell
   .\esptool.exe --port COM4 chip-id
   ```

5. Continue only if the output identifies a classic **ESP32**, not ESP32-S3.
   Read the complete 4 MB flash:

   ```powershell
   .\esptool.exe --chip esp32 --port COM4 --baud 460800 `
     read-flash 0x0 0x400000 $companionBackup
   ```

6. Verify exact size and calculate its checksum:

   ```powershell
   (Get-Item -LiteralPath $companionBackup).Length
   Get-FileHash -Algorithm SHA256 -LiteralPath $companionBackup
   ```

The size must be exactly **4,194,304 bytes**. Save this SHA-256 value too.

## 5. Preserve and verify the files

- Keep the filenames tied to their processor.
- Copy both images and their checksums to a second, independent, preferably
  encrypted location.
- Never publish these images; original flash can contain device-specific or
  private data.
- A file with the wrong size or a later checksum mismatch is not a valid
  backup.

Afterwards, unplug USB, turn the USB-C plug at the device by 180 degrees and
reconnect it. **USB Serial Device (COMx)** should appear again.

Continue with the [normal RoonPilot Web Installer](installation-windows.md).
The [Companion Web Installer](companion-installation-windows.md) is a separate,
optional step.

## If esptool cannot connect

- Check the COM number again after every reconnection.
- Close every program that may already use the port.
- Use a direct data-capable cable without a hub.
- Retry once without `--baud 460800` if the read cannot start reliably.
- Never use `erase-flash` or `write-flash` while creating a backup.
- Never force a chip type to work around an unexpected `chip-id` result.

For other installation methods, see Espressif's official
[esptool installation documentation](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html).
