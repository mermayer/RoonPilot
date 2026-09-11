# Optional original-firmware backup

**English** · [Deutsch](de/factory-backup.md)

An original-firmware backup is useful only if you may later want to return both
processors to the exact state in which Waveshare delivered your individual
device. It is optional and is not a prerequisite for installing RoonPilot or
the Companion Sleep firmware.

The normal RoonPilot and Companion installations both use browser installers
and need no command-line tools. A browser installer cannot read the existing
flash and save it to your computer, so the optional backup uses Espressif's
`esptool`.

## Choose your computer

- **[Create the optional backup with Windows →](factory-backup-windows.md)**
- **[Create the optional backup with macOS →](factory-backup-macos.md)**

Each guide explains the tool download, USB identification, complete 16 MB
ESP32-S3 backup, complete 4 MB Companion ESP32 backup, exact file sizes and
SHA-256 checksums separately.

## If you do not need an exact factory return path

Skip the backup and continue with the appropriate installer:

- [Install the main RoonPilot firmware](installation.md)
- [Install the optional Companion firmware](companion-firmware.md)

RoonPilot configuration exports are different from original-firmware backups.
They save RoonPilot settings for later import, but they do not contain the
manufacturer firmware.
