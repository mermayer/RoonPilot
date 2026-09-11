# Optional Companion ESP32 firmware

**English** · [Deutsch](de/companion-firmware.md)

The Waveshare ESP32-S3-Knob-Touch-LCD-1.8 contains two independent ESP
processors. RoonPilot runs on the main ESP32-S3. The second processor is a
classic ESP32-U4WDH and is not needed for RoonPilot.

> [!NOTE]
> The Companion firmware is optional. RoonPilot, its display, touch, rotary
> control, Wi-Fi and Roon connection work without it.

## What the Companion firmware does

The small Companion Sleep image places the otherwise unused second processor
into a defined low-power state. It:

- keeps the unused PCM5100A DAC muted through its `XSMT` control;
- releases the shared audio, encoder and serial signals as inactive inputs;
- puts the ESP32-U4WDH into indefinite deep sleep without a wake source.

It does not add Roon features, does not change the RoonPilot configuration and
does not install anything on the main ESP32-S3. The external RoonPilot IR
Bridge is a different, physically separate device.

## Easiest installation: the separate Web Installer

For the normal Companion installation, no Python, Terminal command or esptool
is needed. Choose the guide for your computer:

- **[Install the Companion firmware with Windows →](companion-installation-windows.md)**
- **[Install the Companion firmware with macOS →](companion-installation-macos.md)**

Or open the
**[Companion Web Installer directly →](https://mermayer.github.io/RoonPilot/firmware/companion/)**.

The Web Installer erases and replaces the firmware of the classic Companion
ESP32. After it finishes, unplug USB, turn the USB-C plug at the RoonPilot
device by 180 degrees and reconnect it so the cable is connected to the main
ESP32-S3 again.

## How to recognise the correct processor

| OS | Companion ESP32 — use | Main ESP32-S3 — stop |
| --- | --- | --- |
| Windows | `USB-SERIAL CH340 (COMx)` | `USB Serial Device (COMx)` |
| macOS System Information | `USB serial` | `USB JTAG/serial` |

If the wrong entry appears, unplug USB, turn the USB-C plug at the RoonPilot
device by 180 degrees and reconnect it.

The two browser installers have deliberately separate manifests:

- the main RoonPilot installer contains only an `ESP32-S3` build;
- the Companion installer contains only an `ESP32` build.

This gives the browser an additional chip-family check before it writes.

## Optional original-firmware backup

A backup is useful only if you may later want to restore the exact firmware
state in which Waveshare delivered that processor. It is not required for
RoonPilot or the Companion installation.

A browser cannot read and save a complete original flash image. If you want
that optional return path, create the backup before installation with the
detailed technical guide for your computer:

- [Optional factory backup with Windows](factory-backup-windows.md)
- [Optional factory backup with macOS](factory-backup-macos.md)

These are the only normal procedures here that require Espressif's `esptool`.

## Related guides

- [Hardware and the two processors](hardware-and-two-processors.md)
- [Main RoonPilot installation](installation.md)
- [Firmware updates and recovery](firmware-updates-and-recovery.md)
