# Install RoonPilot with Windows

**English** · [Deutsch](de/installation-windows.md) · [macOS](installation-macos.md)

No Device Manager, Python, `esptool` or other command-line tool is required for
a normal installation.

## What you need

- a Windows PC with current **Chrome** or **Edge**;
- a USB data cable;
- the RoonPilot device.

## Installation

1. Close all programs that use a serial USB connection.
2. Open the [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/)
   in Chrome or Edge.
3. Enable both confirmations and select **Install RoonPilot**. The browser's
   device chooser opens.
4. Connect RoonPilot by USB. The correct entry is:

   > **USB JTAG/serial debug unit** (`COM…`)

5. **USB JTAG/serial debug unit** before the parentheses is decisive. Windows
   assigns the COM number in parentheses, and that number may differ.
6. If **USB serial** (`COM…`) appears instead, the classic companion ESP32 is
   connected. Leave the chooser open, unplug USB, turn the USB-C plug at the
   RoonPilot device by **180 degrees** and reconnect it. The Web Installer
   detects the device again immediately. Select **USB JTAG/serial debug unit**.
7. Confirm **Erase device** and keep USB connected until erase, write and
   verification are complete.
8. Wait for the RoonPilot startup screen, then continue with
   [First-time setup](first-time-setup.md).

The Factory installation erases firmware and settings on the ESP32-S3. It does
not change the board's second processor.

## Optional companion processor

RoonPilot works fully without its additional firmware. To place the unused
ESP32-U4WDH into a defined low-power state, continue with the separate
[Companion Web Installer for Windows](companion-installation-windows.md).

An [original-firmware backup](factory-backup.md) is optional and is not a
prerequisite for installing RoonPilot. Only that technical recovery path needs
`esptool`.

## Optional: verify with Windows

This check is **not** part of the normal installation. If several USB devices
are difficult to distinguish, open **Device Manager → Ports (COM & LPT)**:

- **USB Serial Device (COMx):** the RoonPilot ESP32-S3 side;
- **USB-SERIAL CH340 (COMx):** the classic companion ESP32.

For installation, the browser chooser remains authoritative: select
**USB JTAG/serial debug unit** there.
