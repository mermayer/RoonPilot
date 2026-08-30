# Firmware updates and recovery

**English** - [Deutsch](de/firmware-updates-and-recovery.md)

## Which path is used?

| Purpose | Processor | Method | Settings |
| --- | --- | --- | --- |
| First installation or complete recovery | ESP32-S3 | Authorized Chromium Web Installer | Completely erased |
| Normal update | ESP32-S3 | Signed online update on RoonPilot | Normally retained |
| Optional Companion power saving | Classic ESP32 | Separate downloadable Companion image and `esptool` | Replaces Companion flash |

Primary Factory and OTA files are not offered as standalone downloads. The
methods cannot be interchanged, and the USB orientation must be verified before
any recovery action.

## Signed online update - the normal path

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

## Browser Factory recovery

Use the supplied authorized installer page only after making and checking both
original flash backups. It requires a current desktop Chromium browser with
Web Serial, such as Chrome or Edge. Firefox and Safari cannot run it.

The browser must report ESP32-S3. If it reports a classic ESP32 or a chip-family
mismatch, cancel immediately and rotate/reconnect USB. Factory installation
erases all primary-processor firmware and configuration.

## Interrupted update

- Keep power stable and wait several minutes; writing and validation take time.
- If the previous version boots, rollback succeeded. Download diagnostics
  before trying again.
- If a boot loop continues, keep USB stable and capture serial output.
- If no RoonPilot application boots, repeat the authorized ESP32-S3 Web
  Installer recovery after verifying the processor and backup.
- Never rotate USB and write the second processor as a troubleshooting guess.

## Restore an original factory backup

Restoring a user-created original backup is different from distributing a
RoonPilot image. It is destructive and returns the exact bytes previously
captured from that processor. Follow [Factory backup](factory-backup.md), verify
chip, exact backup size and SHA-256, then use its documented restore command.

## Companion recovery

The optional Companion image is the only separately downloadable RoonPilot
firmware. The complete backup, checksum, write, verification and original-
restore procedure is in [Optional companion ESP32 firmware](companion-firmware.md).

## Factory reset is not firmware recovery

The System-page factory reset removes RoonPilot configuration and pairing but
keeps the installed application. It does not restore Waveshare firmware.
