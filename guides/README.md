# RoonPilot documentation

**English** · [Deutsch](de/README.md)

> **Current USB firmware: 2.0.2.** These guides cover RoonPilot and optional
> **IR Bridge 1.0.0**. Both Web Installers are available. RoonPilot online updates
> are temporarily suspended; use the USB installer for a clean 2.0.2 installation.
> It erases settings and pairings. Separate IR Bridge online updates remain available.

[RoonPilot 2.0.2 — release notes and current installation](../docs/release-notes-2.0.2.md)
· [Changelog and earlier versions](../CHANGELOG.md)

This documentation assumes that the reader has never flashed an ESP device,
never opened a serial port and has just taken the hardware out of its box.

## First installation path

1. Choose the operating system: [Windows](installation-windows.md) or
   [macOS](installation-macos.md)
2. [First-time setup](first-time-setup.md)
3. [Device controls](device-controls.md)
4. [Create your first configuration backup](configuration-backup.md)

If returning to the exact manufacturer firmware may matter later, first follow
the [optional factory-backup guide](factory-backup.md). This backup is not a
condition for installing RoonPilot. The normal path starts by opening the
[public RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/).
Its device chooser shows which USB side is connected, so no preliminary Device
Manager or System Information lookup is required.

The [hardware page](hardware-and-two-processors.md) explains, for interested
readers, why turning the USB-C plug by 180 degrees switches between two
independent processors.

## Complete reference

| Topic | Document |
| --- | --- |
| Choose an installation operating system | [Windows or macOS](installation.md) |
| Beginner installation on Windows | [Windows installation](installation-windows.md) |
| Beginner installation on macOS | [macOS installation](installation-macos.md) |
| Every display view | [Screen reference](screen-reference.md) |
| Roon groups, mixed volume routes and individual-member control | [Roon groups and group mixer](roon-groups.md) |
| Every local configuration page | [Web interface](web-interface.md) |
| Web Installer, signed online updates and recovery | [Firmware updates and recovery](firmware-updates-and-recovery.md) |
| Clean USB return from 2.0.2 to the original 1.0.2 release | [Return to RoonPilot 1.0.2](return-to-1.0.2.md) |
| Optional second-ESP low-power image | [Companion firmware](companion-firmware.md) |
| Install RoonPilot with Windows/macOS | [Windows](installation-windows.md) · [macOS](installation-macos.md) |
| Install Companion with Windows/macOS | [Windows](companion-installation-windows.md) · [macOS](companion-installation-macos.md) |
| Optional original-firmware backup | [Factory backup](factory-backup.md) |
| Standalone/Python esptool on macOS | [Using esptool on macOS](esptool-macos.md) |
| Combined controller and Bridge backup | [Create and restore one backup](configuration-backup.md) |
| Battery limitations and calibration | [Battery and runtime](battery-and-runtime.md) |
| Deep-sleep behaviour and wake-up | [Deep sleep](deep-sleep.md) |
| Fault finding | [Troubleshooting](troubleshooting.md) |
| What is and is not stored | [Privacy and security](privacy-and-security.md) |
| Private/commercial use and redistribution | [Licensing and redistribution](licensing.md) |
| Optional four-part 3D-printed stand | [RoonPilot stand and STL downloads](roonpilot-stand.md) |

## Optional RoonPilot IR Bridge

The unified RoonPilot firmware can add infrared control to individual Roon
zones. The feature is optional: when **Bridge & Bluetooth** is switched off and
the requested restart has completed, Bluetooth, scans, Bridge connections,
status traffic and Bridge update checks remain off. Saved pairings and routes
are retained for a later reactivation.

| Bridge topic | Document |
| --- | --- |
| What the Bridge adds and how the pieces fit together | [IR Bridge overview](ir-bridge.md) |
| Parts, wiring and the first Factory installation | [Hardware and installation](ir-bridge-installation.md) |
| Printed housing, assembly photos and STL files | [IR Bridge enclosure](ir-bridge-enclosure.md) |
| Pairing, several saved Bridges, BLE/Wi-Fi and automatic zone control | [Connectivity and automatic zone control](ir-bridge-connectivity.md) |
| Learning commands, profiles, per-zone routes, power, mute and HTTP actions | [IR profiles and zone routing](ir-bridge-zones-and-profiles.md) |
| Signed online updates, backup, restore and recovery | [Updates and recovery](ir-bridge-updates.md) |
| Symptom-based diagnosis | [IR Bridge troubleshooting](ir-bridge-troubleshooting.md) |

Start with the overview even if the hardware is already assembled. In
particular, **saved**, **connected**, **automatic zone control** and
**maintenance selection** describe different states. The diagrams and
fictional screenshots show how up to four saved Bridges are assigned to
physical outputs. A single zone uses its one required route; a Roon group may
keep several Bridges addressable at once through one BLE link and independent
authenticated Wi-Fi paths.

## Terminology

- **Roon Server:** the computer or appliance running Roon's server software.
  Older Roon versions called it the Core.
- **Zone:** a Roon playback destination or grouped set of destinations.
- **Main ESP32-S3:** the processor that runs RoonPilot, the display, touch,
  Wi-Fi, Roon and the local website.
- **Companion ESP32:** a second, independent classic ESP32 on the same board.
- **IR Bridge:** an optional, separate ESP32-S3 device that reproduces learned
  infrared commands. It is not the Companion ESP32 inside RoonPilot.
- **Automatic zone control:** normal Bridge mode in which the selected Roon
  zone or group determines all required Bridge routes and transports.
- **Maintenance selection:** a temporary connection to a specific saved Bridge
  for learning, diagnostics or firmware maintenance.
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
