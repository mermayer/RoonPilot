# Back up both factory firmwares

A complete backup is the safest way back to the state in which the device was
delivered. Make two backups: 16 MB from the main ESP32-S3 and 4 MB from the
companion ESP32.

## What you need

- a Windows, macOS or Linux computer;
- a data-capable USB-C cable;
- Python and Espressif `esptool`, or a working ESP-IDF installation;
- enough disk space for both images;
- a folder that is backed up independently of the RoonPilot project.

The commands below use Windows PowerShell and `COM4`. Change the port if needed.
They read data only.

## 1. Create a safe backup folder

Choose a folder that will not be deleted with a source checkout, for example:

```powershell
New-Item -ItemType Directory -Path D:\RoonPilot-Factory-Backup
```

Record the device colour, battery version, purchase date and serial/order details
in a text file beside the images.

## 2. Back up the main ESP32-S3 (16 MB)

1. Connect the USB-C cable.
2. Find the COM port in Windows Device Manager under **Ports (COM & LPT)**.
3. Identify the chip:

   ```powershell
   python -m esptool --port COM4 chip-id
   ```

4. Continue only if it reports **ESP32-S3**.
5. Read the complete 16 MB flash:

   ```powershell
   python -m esptool --chip esp32s3 --port COM4 read-flash 0x0 0x1000000 D:\RoonPilot-Factory-Backup\esp32s3-original-16mb.bin
   ```

6. Calculate a checksum:

   ```powershell
   Get-FileHash -Algorithm SHA256 D:\RoonPilot-Factory-Backup\esp32s3-original-16mb.bin
   ```

The file size must be exactly `16,777,216` bytes.

## 3. Back up the companion ESP32 (4 MB)

1. Disconnect USB-C.
2. Rotate the **plug** 180 degrees and reconnect it.
3. Check Device Manager again; the COM number can change.
4. Identify the chip again:

   ```powershell
   python -m esptool --port COM4 chip-id
   ```

5. Continue only if it reports a classic **ESP32**, not ESP32-S3.
6. Read the complete 4 MB flash:

   ```powershell
   python -m esptool --chip esp32 --port COM4 read-flash 0x0 0x400000 D:\RoonPilot-Factory-Backup\companion-original-4mb.bin
   ```

7. Calculate a checksum:

   ```powershell
   Get-FileHash -Algorithm SHA256 D:\RoonPilot-Factory-Backup\companion-original-4mb.bin
   ```

The file size must be exactly `4,194,304` bytes.

## 4. Verify and duplicate

- Confirm both exact sizes.
- Save both SHA-256 values in a text file.
- Copy the folder to a second independent encrypted location.
- Do not publish the images; factory flash may contain device- or network-specific
  information.
- Do not rename the files so vaguely that the chips can later be confused.

## RoonPilot's safer companion scripts

The project repository also contains backup and flash scripts that require chip,
size and checksum metadata before the companion can be written. Use those when
building from source. The public merged companion image is intentionally not
offered in the ESP32-S3 browser installer.

## Restoring a backup

Restoration erases current settings and is covered in
[Firmware updates and recovery](firmware-updates-and-recovery.md). Do not attempt
it until the correct chip has again been identified.

