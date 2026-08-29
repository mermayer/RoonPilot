# Firmware updates and recovery

## The three images are not interchangeable

| Image | Processor | Flash address | Preserves settings? |
| --- | --- | --- | --- |
| ESP32-S3 Factory | ESP32-S3 | `0x0` | No, complete installation/recovery |
| ESP32-S3 OTA | ESP32-S3 | Managed inactive OTA slot | Yes, normally |
| Companion Factory | Classic ESP32 | `0x0` | Replaces companion flash |

Always verify the filename, SHA-256 and active chip before writing.

## Local OTA upload

1. Connect RoonPilot to stable USB power.
2. Open **System → Firmware update**.
3. Select the matching `roonpilot-ota-vX.Y.Z.bin`.
4. Confirm the version and start the update.
5. Do not close the page or remove power while writing.
6. RoonPilot reboots into the other application slot.
7. Wait for the boot screen, Wi-Fi and Roon reconnection.
8. Reopen System and confirm version and partition.

The application validates major startup milestones. If the new image repeatedly
fails before becoming healthy, the ESP-IDF bootloader can return to the previous
valid slot.

## Signed online update

The update page can fetch the stable HTTPS manifest, compare version, board,
size, checksum and signature state, then download the OTA file. This remains a
user-initiated operation; RoonPilot does not silently replace its firmware.

The private RSA signing key is never stored in the repository, public image or
device web assets. Keep at least two encrypted external backups of the release
key; losing it would prevent continuity of signed stable updates.

## Browser Factory installation

Use the unlinked validation Web Installer address supplied separately. It writes
only the ESP32-S3 Factory image and asks before erasing. See
[Installation](installation.md) for the complete novice procedure.

## Interrupted update

- If the local page is still reachable, wait several minutes and check System.
- If the old version boots, rollback worked; do not immediately retry without
  collecting diagnostics.
- If the boot screen repeats, keep USB power stable and capture serial output.
- If no application boots, use the ESP32-S3 Factory image at address 0.
- Never rotate USB and flash the second processor as a troubleshooting guess.

## Restore the original ESP32-S3 backup

This is destructive and returns the exact bytes that were captured:

```powershell
python -m esptool --chip esp32s3 --port COM4 chip-id
python -m esptool --chip esp32s3 --port COM4 write-flash 0x0 D:\RoonPilot-Factory-Backup\esp32s3-original-16mb.bin
```

Verify the chip and backup size/checksum first. Existing RoonPilot settings are
overwritten.

## Restore the original companion backup

Disconnect, rotate USB, identify the classic ESP32, then:

```powershell
python -m esptool --chip esp32 --port COM4 chip-id
python -m esptool --chip esp32 --port COM4 write-flash 0x0 D:\RoonPilot-Factory-Backup\companion-original-4mb.bin
```

Disconnect and rotate back to the ESP32-S3 side afterward.

## Factory reset is not firmware recovery

The System-page factory reset erases RoonPilot configuration and pairing but
keeps the installed RoonPilot application. Use it for a clean first-time setup,
not to restore Waveshare software.

## Release-file checks

For version 1.0.0 the build pipeline rejects a stable release when compiled
bench Wi-Fi credentials or a bench Roon address are non-empty. Published
metadata reports both checks explicitly and `SHA256SUMS.txt` covers all three
binary files.

