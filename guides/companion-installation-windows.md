# Install the Companion firmware with Windows

**English** · [Deutsch](de/companion-installation-windows.md) · [macOS](companion-installation-macos.md)

[![Watch video guide](../docs/assets/video-button-en.svg)](https://mermayer.github.io/RoonPilot/video/companion-installation-en.html)

This optional installation runs entirely in Chrome or Edge. It needs no Device
Manager, Python or `esptool`.

## Installation

1. Close every program that uses a serial USB connection.
2. Open the
   [Companion Web Installer](https://mermayer.github.io/RoonPilot/firmware/companion/)
   in Chrome or Edge.
3. Enable both confirmations and select **Install Companion firmware**. The
   browser's device chooser opens.
4. Connect RoonPilot by USB. The correct entry is:

   > **USB serial** (`COM…`)

5. The important part is **USB serial** before the parentheses. The COM number
   in parentheses may vary.
6. If the chooser shows **USB JTAG/serial debug unit** (`COM…`) instead, the
   main processor is connected. Leave the chooser open, unplug USB, turn the
   USB-C plug at the RoonPilot device by **180 degrees** and reconnect it. The
   Web Installer detects the device immediately. Select **USB serial** when it
   appears.
7. Confirm **Erase device** and keep USB connected until verification has
   finished.
8. Then unplug USB, turn the USB-C plug by **180 degrees** and reconnect it.
   RoonPilot starts again on the ESP32-S3.

Only the classic companion ESP32 is written. RoonPilot on the ESP32-S3 and its
settings remain unchanged.

An [original-firmware backup](factory-backup.md) is optional. It is useful only
if you may later want to restore the exact manufacturer-delivered state, and
must be created before this installation.
