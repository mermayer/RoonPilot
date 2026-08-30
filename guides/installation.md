# Install RoonPilot

**English** - [Deutsch](de/installation.md)

Read [Hardware and the two processors](hardware-and-two-processors.md) and make
both [factory backups](factory-backup.md) before installing anything.

## How firmware is provided

- The primary ESP32-S3 firmware is installed only through the authorized Web
  Installer. Factory and OTA files are not offered as downloads. Open the
  [public RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/)
  only after making both backups.
- Later primary updates are installed directly by RoonPilot from its signed
  online release channel.
- Only the optional Companion Sleep firmware is a separate downloadable file.

Official images contain no Wi-Fi password, development SSID, Roon Server
address, pairing token or private signing key. A clean installation therefore
starts the Wi-Fi setup access point.

## Install the ESP32-S3 with the browser

The Web Installer works **only in a current desktop Chromium browser with Web
Serial**, such as Chrome, Edge, Chromium, Brave or Opera. Firefox, Safari,
phones and tablets cannot perform this installation. Open the supplied HTTPS
installer page and connect the board directly with a USB data cable.

1. Close ESP-IDF Monitor, PuTTY, Arduino Serial Monitor and every application
   that may have the COM port open.
2. Connect the board, identify its port and verify **ESP32-S3** with `esptool
   chip-id` if there is any uncertainty about USB orientation.
3. Open the [authorized RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/)
   in Chrome or Edge.
4. Read the two-processor warning. Confirm that both original flashes have
   been backed up and that the selected processor is ESP32-S3.
5. Read and accept the RoonPilot Personal-Use Binary License.
6. Select **Install RoonPilot**, choose the verified serial port and confirm
   the complete erase only after the backup has been checked.
7. Keep USB connected until erase, write and verification are complete.
8. Disconnect and reconnect in the same ESP32-S3 orientation.
9. Wait for the RoonPilot boot screen and continue with the setup access point.

<img src="../assets/web-ui/11-usb-web-installer.png" alt="RoonPilot USB Web Installer" width="100%">

> [!WARNING]
> The USB-C plug orientation selects one of two independent processors. The Web
> Installer is for the ESP32-S3 only and never installs the Companion image. A
> Factory installation erases the complete ESP32-S3, including existing
> firmware, Wi-Fi, Roon authorization, settings and calibration data.

## Later updates

Open RoonPilot's IP address and select **System - Firmware update**. Use
**Check for updates**, then **Download and install** for an approved signed
release. The device writes its inactive A/B application slot and normally
retains all configuration. Manual primary-firmware upload is intentionally not
available.

Do not use the Factory installer for routine updates because it always erases
the complete ESP32-S3 configuration.

## Optional Companion installation

The Companion Sleep firmware is not required for RoonPilot. It disables the
unused DAC path and puts the second processor into deep sleep. It must be
installed separately with `esptool` and only after a verified complete 4 MB
backup.

The complete tool installation, download, checksum, chip identification,
backup, flashing and restoration procedure is in
[Optional companion ESP32 firmware](companion-firmware.md).

## Next step

Continue with [First-time setup](first-time-setup.md).
