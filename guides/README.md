# RoonPilot documentation

**English** · [Deutsch](de/README.md)

This documentation assumes that the reader has never flashed an ESP device,
never opened a serial port and has just taken the hardware out of its box.

## First installation path

Choose your computer first:

- **[Install with Windows →](installation-windows.md)**
- **[Install with macOS →](installation-macos.md)**

Both guides begin with the cable and the USB name shown by the operating
system. No command-line tool is required. Afterwards continue with
[First-time setup](first-time-setup.md), [Device controls](device-controls.md)
and the [Beginner test plan](test-plan.md).

If returning to the exact manufacturer firmware may matter later, first follow
the [optional factory-backup guide](factory-backup.md). This backup is not a
condition for installing RoonPilot. After identifying the ESP32-S3, continue
with the selected Windows or macOS guide above; it links to the public Web
Installer after the required USB check.

The technical explanation of the two processors is available separately under
[Hardware and the two processors](hardware-and-two-processors.md).

## Complete reference

| Topic | Document |
| --- | --- |
| Choose an installation operating system | [Windows or macOS](installation.md) |
| Beginner installation on Windows | [Windows installation](installation-windows.md) |
| Beginner installation on macOS | [macOS installation](installation-macos.md) |
| Every display view | [Screen reference](screen-reference.md) |
| Every local configuration page | [Web interface](web-interface.md) |
| Web Installer, signed online updates and recovery | [Firmware updates and recovery](firmware-updates-and-recovery.md) |
| Optional second-ESP low-power image and Web Installer | [Companion firmware](companion-firmware.md) |
| Companion installation on Windows | [Windows Companion installation](companion-installation-windows.md) |
| Companion installation on macOS | [macOS Companion installation](companion-installation-macos.md) |
| Optional original-firmware backup | [Choose Windows or macOS](factory-backup.md) |
| Optional backup with Windows | [Windows factory backup](factory-backup-windows.md) |
| Optional backup with macOS | [macOS factory backup](factory-backup-macos.md) |
| Standalone/Python esptool on macOS | [Using esptool on macOS](esptool-macos.md) |
| Settings backup | [Configuration export and import](configuration-backup.md) |
| Battery limitations and calibration | [Battery and runtime](battery-and-runtime.md) |
| Deep-sleep behaviour and wake-up | [Deep sleep](deep-sleep.md) |
| Fault finding | [Troubleshooting](troubleshooting.md) |
| What is and is not stored | [Privacy and security](privacy-and-security.md) |
| Private/commercial use and redistribution | [Licensing and redistribution](licensing.md) |

## Terminology

- **Roon Server:** the computer or appliance running Roon's server software.
  Older Roon versions called it the Core.
- **Zone:** a Roon playback destination or grouped set of destinations.
- **Main ESP32-S3:** the processor that runs RoonPilot, the display, touch,
  Wi-Fi, Roon and the local website.
- **Companion ESP32:** a second, independent classic ESP32 on the same board.
- **Factory installation:** complete ESP32-S3 erase/install performed only by
  the authorized Web Installer.
- **Companion installation:** optional classic-ESP32 erase/install performed by
  its separate chip-restricted Web Installer.
- **OTA update:** signed application update fetched and installed by an
  existing RoonPilot; no manual firmware file is offered.
- **AP:** a temporary Wi-Fi access point created by RoonPilot for setup.
- **NVS:** the ESP32's non-volatile settings storage.

## Getting help safely

Before opening a GitHub issue, read [Troubleshooting](troubleshooting.md) and
download diagnostics from **System** if the local page still opens. Remove home
Wi-Fi names, IP addresses, Roon metadata and any other private information from
screenshots or logs before making them public.
