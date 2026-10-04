# Install RoonPilot with macOS

**English** · [Deutsch](de/installation-macos.md) · [Windows](installation-windows.md)

The normal installation needs no macOS System Information lookup, Python,
Terminal command or `esptool`.

## What you need

- a Mac with a current **Google Chrome** browser; Safari and Firefox do not
  support this Web Serial installation;
- a USB data cable;
- the RoonPilot device.

## Installation

1. Close every program that uses a serial USB connection.
2. Open the [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/)
   in Chrome.
3. Enable both confirmations and select **Install RoonPilot**. Chrome's device
   chooser opens.
4. Connect RoonPilot by USB. The correct entry is:

   > **USB JTAG/serial debug unit** (`cu.usbmodem…`)

5. The important part is **USB JTAG/serial debug unit** before the
   parentheses. `cu.usbmodem…` is additional text in parentheses and its final
   number may vary.
6. If the chooser shows **USB serial** (`cu.wchusbserial…`) instead, the
   classic companion ESP32 is connected. Leave the chooser open, unplug USB,
   turn the USB-C plug at the RoonPilot device by **180 degrees** and reconnect
   it. The Web Installer detects the device immediately. Select **USB
   JTAG/serial debug unit** when it appears.
7. Confirm **Erase device** and keep USB connected until erasing, writing and
   verification have all finished.
8. Wait for the RoonPilot startup screen and continue with
   [First-time setup](first-time-setup.md).

The Factory installation erases firmware and settings on the ESP32-S3. It does
not modify the board's second processor.

## Optional companion processor

RoonPilot works fully without its extra firmware. To put the unused
ESP32-U4WDH into a defined low-power state, use the separate
[Companion Web Installer for macOS](companion-installation-macos.md).

An [original-firmware backup](factory-backup.md) is optional. The separate
[technical esptool guide for macOS](esptool-macos.md) is needed only for that
backup, manual restoration or advanced diagnostics.
