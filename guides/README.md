# RoonPilot documentation

This documentation assumes that the reader has never flashed an ESP device,
never opened a serial port and has just taken the hardware out of its box.

## First installation path

1. [Hardware and the two processors](hardware-and-two-processors.md)
2. [Factory backup](factory-backup.md)
3. [Installation](installation.md)
4. [First-time setup](first-time-setup.md)
5. [Device controls](device-controls.md)
6. [Beginner test plan](test-plan.md)

Do not skip the first two pages. The unusual USB-C processor selection makes
them part of the installation, not optional background reading.

## Complete reference

| Topic | Document |
| --- | --- |
| Every display view | [Screen reference](screen-reference.md) |
| Every local configuration page | [Web interface](web-interface.md) |
| Factory, local and online updates | [Firmware updates and recovery](firmware-updates-and-recovery.md) |
| Settings backup | [Configuration export and import](configuration-backup.md) |
| Battery limitations and calibration | [Battery and runtime](battery-and-runtime.md) |
| Fault finding | [Troubleshooting](troubleshooting.md) |
| What is and is not stored | [Privacy and security](privacy-and-security.md) |

## Terminology

- **Roon Server:** the computer or appliance running Roon's server software.
  Older Roon versions called it the Core.
- **Zone:** a Roon playback destination or grouped set of destinations.
- **Main ESP32-S3:** the processor that runs RoonPilot, the display, touch,
  Wi-Fi, Roon and the local website.
- **Companion ESP32:** a second, independent classic ESP32 on the same board.
- **Factory image:** one file containing everything needed at flash address 0.
- **OTA image:** the application file used to update an existing RoonPilot.
- **AP:** a temporary Wi-Fi access point created by RoonPilot for setup.
- **NVS:** the ESP32's non-volatile settings storage.

## Getting help safely

Before opening a GitHub issue, read [Troubleshooting](troubleshooting.md) and
download diagnostics from **System** if the local page still opens. Remove home
Wi-Fi names, IP addresses, Roon metadata and any other private information from
screenshots or logs before making them public.

