# RoonPilot 2.0.1

**English** · [Deutsch](release-notes-2.0.1.de.md)

GitHub release and installation guidance: **5 October 2026**. This is the
current **USB firmware release**. The existing 2.0.1 firmware is unchanged by
this documentation and release-metadata update.

> [!WARNING]
> **RoonPilot online updates are temporarily suspended.** Do not use the
> internal RoonPilot updater, even if an older update offer remains visible.
> Use the [USB Web Installer](https://mermayer.github.io/RoonPilot/firmware/?v=2.0.1-usb)
> for a clean 2.0.1 installation. It erases settings and Bridge pairings.
> Separate IR Bridge online updates remain available.

## Firmware changes

2.0.1 uses the original RoonPilot signing key again. Signature verification,
SHA-256 checking and boot rollback remain part of the firmware. The change
does not establish a reliable online upgrade for every older installation;
the controller online channel remains suspended.

The feature set introduced in 2.0.0 remains included: optional IR Bridges,
group control, playlists and Live Radio, display layouts, battery calibration,
local configuration pages and diagnostics. The complete feature description
is in the [historical 2.0.0 release notes](release-notes-2.0.0.md); use the
installation instructions on this page for the current version.

## Install 2.0.1 over USB

1. Save a configuration backup if the current RoonPilot website still opens.
   Keep backups from 1.0.2 and 2.0.x separate.
2. Connect RoonPilot to a stable computer USB port with a USB data cable.
3. Open the [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/?v=2.0.1-usb)
   in desktop Chrome or Edge and select **RoonPilot 2.0.1**.
4. Confirm the processor and license. In the USB chooser select **USB
   JTAG/serial debug unit**, the main ESP32-S3, not the Companion ESP32.
5. Complete the installation and wait for restart without disconnecting USB.
   A complete erase is included, also when reinstalling the same version.
6. Follow [First-time setup](../guides/first-time-setup.md) to enter your Wi-Fi,
   authorize RoonPilot in Roon and select a zone.

No Python, command-line flashing or separate firmware download is needed.
See [Windows installation](../guides/installation-windows.md) or
[macOS installation](../guides/installation-macos.md) for the illustrated steps.

## Settings and Bridge pairings

A clean USB installation erases RoonPilot's settings, profile library, Wi-Fi
credentials and controller-side Bridge pairings. The Companion and separate
IR Bridges are not flashed or erased.

A configuration JSON backup does not restore cryptographic pairing keys.
Set up Wi-Fi and Roon again. If using IR Bridges, enable the Bridge feature,
pair the Bridges again and check the restored profiles and zone assignments.
See [Configuration backup and restore](../guides/configuration-backup.md).

## Independent IR Bridge release

The optional IR Bridge remains at **1.0.0**. Its Web Installer and signed online
update channel remain available. Installing RoonPilot 2.0.1 does not install
Bridge or Companion firmware.

## Return to 1.0.2

The original 1.0.2 USB recovery remains available as a separate installer
choice. It also erases RoonPilot's settings. Do not import a 2.0.x backup or
run battery calibration under 1.0.2. Follow the
[return instructions](../guides/return-to-1.0.2.md).

[Changelog and earlier releases](../CHANGELOG.md) ·
[User documentation](../guides/README.md)
