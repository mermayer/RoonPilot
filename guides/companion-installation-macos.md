# Install the Companion firmware with macOS

**English** · [Deutsch](de/companion-installation-macos.md) · [Windows](companion-installation-windows.md)

[![Watch video guide](../docs/assets/video-button-en.svg)](https://mermayer.github.io/RoonPilot/video/companion-installation-en.html)

This optional installation runs entirely in Google Chrome. It needs no macOS
System Information lookup, Python, Terminal command or `esptool`.

## Installation

1. Close every program that uses a serial USB connection.
2. Open the
   [Companion Web Installer](https://mermayer.github.io/RoonPilot/firmware/companion/)
   in Chrome. Safari and Firefox do not support this Web Serial installation.
3. Enable both confirmations and select **Install Companion firmware**.
   Chrome's device chooser opens.
4. Connect RoonPilot by USB. The correct entry is:

   > **USB serial** (`cu.wchusbserial…`)

5. The important part is **USB serial** before the parentheses. The port name
   in parentheses may vary.
6. If the chooser shows **USB JTAG/serial debug unit** (`cu.usbmodem…`)
   instead, the main processor is connected. Leave the chooser open, unplug
   USB, turn the USB-C plug at the RoonPilot device by **180 degrees** and
   reconnect it. The Web Installer detects the device immediately. Select
   **USB serial** when it appears.
7. Confirm **Erase device** and keep USB connected until verification has
   finished.
8. Then unplug USB, turn the USB-C plug by **180 degrees** and reconnect it.
   RoonPilot starts again on the ESP32-S3.

Only the classic companion ESP32 is written. RoonPilot on the ESP32-S3 and its
settings remain unchanged.

An [original-firmware backup](factory-backup.md) is optional. It is useful only
if you may later want to restore the exact manufacturer-delivered state. The
technical [esptool guide for macOS](esptool-macos.md) is needed only for that
backup or a manual restoration.
