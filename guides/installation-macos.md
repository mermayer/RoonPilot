# Install RoonPilot with macOS

**English** · [Deutsch](de/installation-macos.md) · [Windows](installation-windows.md)

No macOS System Information, Python, Terminal command or `esptool` is required
for a normal installation.

## What you need

- a Mac with current **Google Chrome**; Safari and Firefox do not support this
  Web Serial installation;
- a USB data cable;
- the RoonPilot device.

## Installation

1. Close all programs that use a serial USB connection.
2. Open the [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/)
   in Chrome.
3. Enable both confirmations and select **Install RoonPilot**. Chrome's device
   chooser opens.
4. Connect RoonPilot by USB. The correct entry is:

   > **USB JTAG/serial debug unit** (`cu.usbmodem…`)

5. **USB JTAG/serial debug unit** before the parentheses is decisive.
   `cu.usbmodem…` appears additionally in parentheses and may have a different
   number.
6. If **USB serial** (`cu.wchusbserial…`) appears instead, the classic companion
   ESP32 is connected. Leave the chooser open, unplug USB, turn the USB-C plug
   at the RoonPilot device by **180 degrees** and reconnect it. The Web
   Installer detects the device again immediately. Select
   **USB JTAG/serial debug unit**.
7. Confirm **Erase device** and keep USB connected until erase, write and
   verification are complete.
8. Wait for the RoonPilot startup screen, then continue with
   [First-time setup](first-time-setup.md).

The Factory installation erases firmware and settings on the ESP32-S3. It does
not change the board's second processor.

## Optional companion processor

RoonPilot works fully without its additional firmware. To place the unused
ESP32-U4WDH into a defined low-power state, continue with the separate
[Companion Web Installer for macOS](companion-installation-macos.md).

The separate [macOS esptool guide](esptool-macos.md) is only for advanced
diagnostics, optional original-flash backups and manual recovery. It is not
part of either normal browser installation. An [original-firmware
backup](factory-backup.md) is optional.

## Optional: verify with macOS

This check is **not** part of the normal installation. If several USB devices
are difficult to distinguish, open **System Information → Hardware → USB**:

- **USB JTAG/serial:** the RoonPilot ESP32-S3 side;
- **USB serial:** the classic companion ESP32.

For installation, Chrome's chooser remains authoritative: select
**USB JTAG/serial debug unit** there.
