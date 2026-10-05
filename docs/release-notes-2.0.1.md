# RoonPilot 2.0.1

**English** · [Deutsch](release-notes-2.0.1.de.md)

Historical release: **5 October 2026**. The current USB firmware and installation guidance are in the [2.0.2 release notes](release-notes-2.0.2.md). The 2.0.1 binary remains unchanged.

> [!WARNING]
> **RoonPilot online updates are temporarily suspended.** Do not use the
> internal RoonPilot updater, even if an older update offer remains visible.
> Use the [USB Web Installer](https://mermayer.github.io/RoonPilot/firmware/?v=2.0.2-usb)
> for a clean 2.0.2 installation. It erases settings and Bridge pairings.
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

## Installation status

2.0.1 is no longer the current USB choice. The installer now offers 2.0.2 and the fixed 1.0.2 recovery. For current installation steps, read the [2.0.2 release notes](release-notes-2.0.2.md) and the [firmware guide](../guides/firmware-updates-and-recovery.md).

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
