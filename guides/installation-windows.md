# Install RoonPilot with Windows

**English** · [Deutsch](de/installation-windows.md) · [macOS](installation-macos.md)

The normal installation needs no Device Manager, Python, `esptool` or other
command-line tool.

## What you need

- a Windows PC with a current **Chrome** or **Edge** browser;
- a USB data cable;
- the RoonPilot device.

## Installation

1. Close every program that uses a serial USB connection.
2. Open the [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/)
   in Chrome or Edge.
3. Enable both confirmations and select **Install RoonPilot**. The browser's
   device chooser opens.
4. Connect RoonPilot by USB. The correct entry is:

   > **USB JTAG/serial debug unit** (`COM…`)

5. The important part is **USB JTAG/serial debug unit** before the
   parentheses. Windows assigns the COM number in parentheses, so it may vary.
6. If the chooser shows **USB serial** (`COM…`) instead, the classic companion
   ESP32 is connected. Leave the chooser open, unplug USB, turn the USB-C plug
   at the RoonPilot device by **180 degrees** and reconnect it. The Web
   Installer detects the device immediately. Select **USB JTAG/serial debug
   unit** when it appears.
7. Confirm **Erase device** and keep USB connected until erasing, writing and
   verification have all finished.
8. Wait for the RoonPilot startup screen and continue with
   [First-time setup](first-time-setup.md).

The Factory installation erases firmware and settings on the ESP32-S3. It does
not modify the board's second processor.

## Optional companion processor

RoonPilot works fully without its extra firmware. To put the unused
ESP32-U4WDH into a defined low-power state, use the separate
[Companion Web Installer for Windows](companion-installation-windows.md).

An [original-firmware backup](factory-backup.md) is optional and useful only
for returning to the exact manufacturer-delivered state later. Only that
technical procedure needs `esptool`.
