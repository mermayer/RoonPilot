# Install RoonPilot

**English** · [Deutsch](de/installation.md)

Read [Hardware and the two processors](hardware-and-two-processors.md) and make
the two [factory backups](factory-backup.md) first.

## Choose the right file

| File | Target | Use |
| --- | --- | --- |
| `roonpilot-factory-v1.0.0.bin` | ESP32-S3 | New installation or complete recovery at address `0x0` |
| `roonpilot-ota-v1.0.0.bin` | Existing RoonPilot | Upload from the local firmware page |
| `roonpilot-companion-sleep-factory-v1.0.0.bin` | Classic companion ESP32 | Optional low-power firmware at address `0x0` |

The Factory and OTA files contain no Wi-Fi password, development SSID, Roon
Server address or pairing token. A clean installation therefore starts the
Wi-Fi setup access point.

## Recommended: browser installation of the ESP32-S3

The Web Installer works **only in a current desktop Chromium browser with Web
Serial support**, for example Google Chrome, Microsoft Edge, Chromium, Brave or
Opera. Firefox and Safari do not implement the required Web Serial workflow.
The published HTTPS page and a direct USB data connection are mandatory.

Open the supplied browser-installer address. Its two-processor warning, backup
checklist and chip-confirmation gate appear before the ESP32-S3 installer can
be started.

1. Close ESP-IDF Monitor, PuTTY, Arduino Serial Monitor and every application
   that may have the COM port open.
2. Connect the hardware with USB-C.
3. Identify the port and verify **ESP32-S3** with `esptool chip-id` if there is
   any doubt about cable orientation.
4. Open the supplied Web Installer address in Chrome or Edge.
5. Read the two-processor warning on the page.
6. Select **Install RoonPilot** and choose the correct COM port.
7. Approve erasing the current ESP32-S3 flash only after the factory backup has
   been made.
8. Keep the cable connected while the image is erased, written and verified.
9. Wait for the completion message, disconnect USB, then reconnect it in the
   same ESP32-S3 orientation.
10. The RoonPilot boot screen should appear. A new device then enters Wi-Fi
    setup automatically.

<img src="../assets/web-ui/11-usb-web-installer.png" alt="RoonPilot USB Web Installer" width="100%">

> [!WARNING]
> The Web Installer is for the ESP32-S3 only. It never installs the companion
> image. If the browser connects to a classic ESP32, cancel immediately. A
> Factory installation erases the complete current ESP32-S3 flash, including
> Waveshare/RoonPilot firmware, Wi-Fi credentials, Roon authorization and all
> settings. Make and verify the factory backup before continuing.

## Updates after the Factory installation

The Chromium Web Installer is normally needed only for the first complete
installation or recovery. Once RoonPilot is running, open its IP address and go
to **System → Firmware update**. Use **Check for updates** followed by
**Download and install** for a signed online release. RoonPilot writes the
inactive A/B slot and normally preserves settings. A local OTA file can be
uploaded on the same page when recovery or offline installation is required.

Do not return to the Factory installer for an ordinary update: the Factory path
erases settings, while the device's online/local OTA paths are designed to keep
them.

## Manual ESP32-S3 factory installation

For recovery or advanced testing:

```powershell
python -m esptool --chip esp32s3 --port COM4 chip-id
python -m esptool --chip esp32s3 --port COM4 erase-flash
python -m esptool --chip esp32s3 --port COM4 --baud 460800 write-flash 0x0 roonpilot-factory-v1.0.0.bin
```

Do not use the OTA file in this command. An OTA image does not contain the
bootloader and partition table needed by a blank device.

## Optional companion installation

This is a separate command-line operation and cannot be performed from the Web
Installer. Use Windows PowerShell with Python 3.10 or newer and Espressif
`esptool`. The complete novice procedure, including tool installation,
download, exact backup checks, write verification and restoration, is in
[Optional companion ESP32 firmware](companion-firmware.md).

This optional image is not required to use RoonPilot.

1. Complete and verify the original 4 MB companion backup.
2. Disconnect USB, rotate the plug and reconnect.
3. Confirm the port reports a classic ESP32.
4. Write the merged image at address 0:

   ```powershell
   python -m esptool --chip esp32 --port COM4 chip-id
   python -m esptool --chip esp32 --port COM4 --baud 460800 write-flash 0x0 roonpilot-companion-sleep-factory-v1.0.0.bin
   ```

5. Disconnect USB, rotate back to the ESP32-S3 side and confirm RoonPilot boots.

The companion firmware disables the unused DAC path and enters deep sleep. It
does not add Roon functionality and should be postponed until the main firmware
has passed its first tests.

## Verify downloads

Calculate the SHA-256 value and compare it character for character with the
published `SHA256SUMS.txt`:

```powershell
Get-FileHash -Algorithm SHA256 .\roonpilot-factory-v1.0.0.bin
```

Never proceed after a checksum mismatch. Download the file again.

## Next step

Continue with [First-time setup](first-time-setup.md).
