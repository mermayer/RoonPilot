# Install RoonPilot

**English** · [Deutsch](de/installation.md)

Choose the computer you will use. Each guide starts with the USB connection
and shows the exact device name that identifies the ESP32-S3.

## Choose your operating system

### [Install with Windows →](installation-windows.md)

Look in **Device Manager → Ports (COM & LPT)**:

- **Correct for RoonPilot:** `USB Serial Device (COMx)`
- **Other plug position:** `USB-SERIAL CH340 (COMx)`

### [Install with macOS →](installation-macos.md)

Look in **System Information → Hardware → USB**:

- **Correct for RoonPilot:** `USB JTAG/serial`
- **Other plug position:** `USB serial`

If the other device appears, unplug USB, turn the USB-C plug at the RoonPilot
device by 180 degrees and reconnect it. Do not turn the plug while it is still
inserted.

## What you need

- the Waveshare ESP32-S3-Knob-Touch-LCD-1.8;
- a USB data cable, not a charge-only cable;
- a current Chrome or Edge desktop browser;
- the [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/).

A backup of the original firmware is **optional**. It is useful only if you may
later want to restore the exact manufacturer-delivered state. It is not needed
to install or use RoonPilot.

## After installation

Continue with [First-time setup](first-time-setup.md) to connect Wi-Fi, approve
RoonPilot in Roon and select a zone.

The second processor's [Companion Sleep firmware](companion-firmware.md) is a
separate optional step. It now has its own browser installer and also needs no
command-line tool.

Need more detail? Read [Hardware and the two processors](hardware-and-two-processors.md),
the [optional factory-backup guide](factory-backup.md) or
[Troubleshooting](troubleshooting.md). Command-line tools are not part of the
normal browser installation.
