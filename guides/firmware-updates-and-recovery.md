# Firmware updates and recovery

**English** - [Deutsch](de/firmware-updates-and-recovery.md)

> [!WARNING]
> **RoonPilot online updates are temporarily suspended.** Do not use the internal
> updater until this notice is removed. Use the
> [USB Web Installer for a clean 2.0.1 installation](https://mermayer.github.io/RoonPilot/firmware/?v=2.0.1-usb).
> This erases RoonPilot settings, profiles, Wi-Fi and Bridge pairings; set them up again afterwards.
> An existing device may still show an old update offer or an update-check error.
> IR Bridge online updates are not affected.

## Which path is used?

| Purpose | Processor | Method | Settings |
| --- | --- | --- | --- |
| First installation or complete recovery | ESP32-S3 | Authorized Chromium Web Installer | Completely erased |
| RoonPilot update during the suspension | ESP32-S3 | Clean 2.0.1 USB Web Installer installation | Completely erased |
| Return from 2.0.0 to 1.0.2 | ESP32-S3 | Fixed 1.0.2 recovery choice in the Web Installer | Completely erased |
| Optional Companion power saving | Classic ESP32 | Separate Companion Web Installer | Replaces Companion flash |
| First IR Bridge installation or complete Bridge recovery | Separate Bridge ESP32-S3 | Dedicated Chromium Bridge installer | Bridge identity, bond, Wi-Fi and profiles erased |
| Normal IR Bridge update | Separate Bridge ESP32-S3 | **IR Bridge → Bridge firmware update** in RoonPilot | Bridge identity, bond, Wi-Fi and profiles retained |

Primary Factory and OTA files are not offered as standalone downloads. The
methods cannot be interchanged, and the USB orientation must be verified before
any recovery action. The separate IR Bridge has its own USB connector and
firmware target; never install its image on the round-display RoonPilot.

## Signed online update - temporarily suspended

The following describes the normal update workflow for when the channel is
available again. Do not perform these steps during the suspension.

1. Connect RoonPilot to stable USB power.
2. Open its IP address in a browser.
3. Select **System - Firmware update**.
4. Select **Check for updates**.
5. If an approved newer version is shown, select **Download and install**.
6. Do not remove power while downloading, writing or validating.
7. Wait for the boot screen, Wi-Fi and Roon reconnection.
8. Reopen System and verify version and active partition.

RoonPilot verifies release metadata, target, version, size, SHA-256 and its
configured RSA signature. It writes the inactive A/B slot. The new image is
marked valid only after its boot self-test; otherwise the bootloader returns to
the previous working slot. Updates are always user initiated.

The private signing key is never placed in this repository, installer, device
assets or firmware. Only the public verification material is embedded.

## Update checks and notifications

The System page contains two independent settings:

- **Check automatically for updates** allows a signed-manifest check after a
  normal startup and then once every 24 hours. A network failure is retried
  later. Turning this off still leaves **Check now** available.
- **Show update notice on device** allows a full-screen notice only after a
  newer version has already been found. Turning it off does not disable web
  status or manual checks.

All normal web pages show the installed and available versions in their common
status area when an update exists. Selecting the notice jumps directly to
**System → Firmware update**.

The device notice is deliberately conservative: it appears at most once in any
24-hour period, only over the active Now Playing screen after the controls have
been idle, and never during setup, Roon pairing, zone selection, Quick Settings,
volume adjustment, a clock/idle screen, control lock, battery calibration or an
OTA operation. Tap **LATER** to dismiss it. Turning the ring also dismisses it
and continues with the intended volume adjustment. Dismissing is not an update
installation and does not disable future checks.

No background path downloads or installs firmware. **Download and install** on
the signed update page always remains a separate, explicit user action.

## Optional IR Bridge update — also managed by RoonPilot

When **Bridge & Bluetooth** is enabled, installed and available Bridge versions
appear under **IR Bridge → Bridge firmware update**. Bridge update checking and
its once-per-day display notice are configurable separately from RoonPilot's
own update settings. If the complete Bridge feature is disabled, RoonPilot does
not scan, check, notify or transfer anything for a Bridge.

For a confirmed installation, RoonPilot prefers the authenticated local Wi-Fi
path because it is much faster than BLE. If normal Bridge Wi-Fi is disabled but
the Bridge is bonded and reachable by BLE, RoonPilot may provision and enable
Wi-Fi temporarily, perform the transfer, then restore the previous disabled
state after the Bridge reconnects. Encrypted BLE remains the slower fallback if
Wi-Fi cannot be used.

RoonPilot validates the manifest, project, board, protocol compatibility,
minimum controller version, file size, embedded version and SHA-256 before
transfer. The Bridge independently validates block order, final size, SHA-256
and RSA-3072 signature before selecting its inactive A/B partition. Success is
reported only after the Bridge reconnects with the requested version. During
the operation the RoonPilot display and Bridge LED both warn not to remove
power.

### If both devices offer an update

The two updates remain independent and neither starts automatically. The
manifest compatibility ranges decide whether the current controller can safely
install the Bridge image and whether a controller release expects a minimum
Bridge protocol/version. Follow an on-page **Update RoonPilot first** or
**Update Bridge first** instruction when shown; otherwise either order is
allowed. Complete one update, wait for reconnection and verify its version
before starting the other. Compatibility rejection is a safety stop, not a
reason to force an image or erase either device.

The complete procedure is in [IR Bridge updates](ir-bridge-updates.md).

## Browser Factory recovery

Use the supplied authorized installer page with a current desktop Chromium
browser with Web Serial, such as Chrome or Edge. Firefox and Safari cannot run
it. An original-flash backup is optional and is useful only if you want a path
back to the exact manufacturer-delivered state.

The browser must report ESP32-S3. If it reports a classic ESP32 or a chip-family
mismatch, cancel immediately and rotate/reconnect USB. Factory installation
erases all primary-processor firmware and configuration.

## Return to RoonPilot 1.0.2

If 2.0.0 does not work for you, choose **Return to RoonPilot 1.0.2** in the
[Web Installer](https://mermayer.github.io/RoonPilot/firmware/?version=1.0.2#web-installer-title).
This USB option always installs the original 1.0.2 release and includes a
mandatory erase. It does not need a working device website. The Companion
processor and separate IR Bridges are not flashed.

All settings and the profile library on RoonPilot are lost. Keep a backup made
under 1.0.2 before upgrading; do not restore a 2.0.0 backup into 1.0.2. Set up
Wi-Fi and Roon again after installation. The 2.0.0 Bridge and extended group
functions are unavailable in 1.0.2. **Do not run battery calibration in 1.0.2**:
it does not include the newer calibration safety measures.

Follow [Return to RoonPilot 1.0.2](return-to-1.0.2.md) for the complete beginner
instructions. Automatic A/B boot recovery returns to the previous usable
application slot, not necessarily to this particular version.

## Interrupted update

- Keep power stable and wait several minutes; writing and validation take time.
- If the previous version boots, rollback succeeded. Download diagnostics
  before trying again.
- If a boot loop continues, keep USB stable and capture serial output.
- If no RoonPilot application boots, repeat the authorized ESP32-S3 Web
  Installer recovery after verifying the processor. If you chose to make an
  original backup, verify it before using it for a restore.
- Never rotate USB and write the second processor as a troubleshooting guess.

## Restore an original factory backup

Restoring a user-created original backup is different from distributing a
RoonPilot image. It is destructive and returns the exact bytes previously
captured from that processor. Follow [Factory backup](factory-backup.md), verify
chip, exact backup size and SHA-256, then use its documented restore command.

## Companion recovery

The optional Companion firmware has its own browser installer, restricted to
the classic ESP32 chip family. If a Companion installation is interrupted,
reconnect the Companion USB side and run that installer again. The simple
procedure is in [Optional Companion ESP32 firmware](companion-firmware.md).

An exact return to the manufacturer-delivered state is possible only if that
processor's original 4 MB flash was saved beforehand. The optional technical
procedures are split into [Windows](factory-backup-windows.md) and
[macOS](factory-backup-macos.md) guides.

## IR Bridge Factory recovery

Use the separate Bridge Web Installer only when no valid Bridge application
boots or when a deliberately clean Bridge is required. Factory installation
performs its own erase; do not erase first. It removes Bridge identity, bond,
Wi-Fi fallback and learned profiles. Before a planned reinstall, use **System
→ Create Backup** after the latest profiles have synchronized to RoonPilot;
Bridges need not stay online for the export. Keep the complete JSON file
private. See [Configuration backup and restore](configuration-backup.md).

After Factory recovery, pair the Bridge under its new `RPB-…` identity and
explicitly select it as the restore target for the named IR profiles. The
profile library is stored on RoonPilot and in the unified backup; the new
Bridge receives its own local profile IDs. Prefer signed application updates
while the Bridge is healthy, since they preserve its pairing and Wi-Fi setup.

## Factory reset is not firmware recovery

The System-page factory reset removes RoonPilot configuration and pairing but
keeps the installed application. It does not restore Waveshare firmware.
