# Install RoonPilot

**English** · [Deutsch](de/installation.md)

No Device Manager, macOS System Information, Python, `esptool` or other
command-line tool is needed for a normal installation. The Web Installer's
device chooser shows the connected processor directly.

## What you need

- the Waveshare ESP32-S3-Knob-Touch-LCD-1.8;
- a USB data cable, not a charge-only cable;
- a current Chrome or Edge desktop browser.

## Start directly in the Web Installer

1. Open the [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/)
   in Chrome or Edge.
2. Enable both confirmations and select **Install RoonPilot**.
3. In the device chooser, read the name before the parentheses and select
   **USB JTAG/serial debug unit**.
4. If **USB serial** appears instead, leave the chooser open, unplug USB, turn
   the USB-C plug at the RoonPilot device by **180 degrees** and reconnect it.
   The browser refreshes the device list immediately.
5. Confirm **Erase device** and keep USB connected until erase, write and
   verification are complete.

A backup of the original firmware is **optional**. It is useful only if you may
later want to restore the exact manufacturer-delivered state. It is not needed
to install or use RoonPilot.

## Optional: verify in the operating system

This check is not required by the Web Installer. It can help when several USB
devices are connected or when you want to confirm the processor independently
of the browser.

- **Windows:** In **Device Manager → Ports (COM & LPT)**, the RoonPilot
  ESP32-S3 appears as **USB Serial Device (COMx)**. The classic companion
  processor appears as **USB-SERIAL CH340 (COMx)**.
- **macOS:** In **System Information → Hardware → USB**, the RoonPilot ESP32-S3
  appears as **USB JTAG/serial**. The classic companion processor appears as
  **USB serial**.

The operating-system names are only an additional check. For installation,
the decisive entry is **USB JTAG/serial debug unit** in the browser chooser.

Detailed procedures: [Windows](installation-windows.md) ·
[macOS](installation-macos.md).

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
