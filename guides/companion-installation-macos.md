# Install the Companion firmware with macOS

**English** · [Deutsch](de/companion-installation-macos.md) · [Companion overview](companion-firmware.md)

This optional installation uses Google Chrome. It does not require Python,
Terminal commands or esptool.

## 1. Start directly in the Web Installer

1. Connect RoonPilot directly to the Mac with a USB data cable.
2. Close Arduino Serial Monitor, ESP-IDF Monitor and other programs that may
   use the serial connection.
3. Open the
   [Companion Web Installer](https://mermayer.github.io/RoonPilot/firmware/companion/)
   in a current desktop **Google Chrome** browser. Safari and Firefox do not
   support this Web Serial installation.

No preliminary macOS System Information check is required. Select the correct
USB entry directly in Chrome's device chooser.

## 2. Decide whether you want an optional backup

A backup is not required. It is useful only if you may later want to restore
the exact original Waveshare firmware on this processor. If you want that
return path, stop here and follow the
[detailed macOS factory-backup guide](factory-backup-macos.md). Otherwise
continue directly.

## 3. Install in Chrome

1. Confirm the intended USB name and the personal-use licence.
2. Select **Install Companion firmware**. Chrome's device chooser now opens.
3. Select **USB serial** (`cu.usbserial…` or `cu.wchusbserial…`).
4. If the chooser shows **USB JTAG/serial debug unit** instead, leave it open,
   unplug USB, turn the USB-C plug at the RoonPilot device by **180 degrees**
   and reconnect it. The Web Installer detects the device again immediately;
   now select **USB serial**.
5. Confirm **Erase device** when asked.
6. Keep the cable connected until erasing, writing and verification are all
   complete.

Only the Companion ESP32 is erased. The main ESP32-S3 and its RoonPilot
settings are not changed.

## 4. Return the cable to RoonPilot

1. Unplug USB.
2. Turn the USB-C plug at the RoonPilot device by **180 degrees**.
3. Reconnect it.
4. Wait for RoonPilot to start normally. System Information does not need to be
   open.

## If the installer cannot connect

- Make sure the cable transfers data and is connected directly, without a hub.
- Close every program that might use the serial connection.
- Verify that **USB serial**, not **USB JTAG/serial debug unit**, is selected.
- Unplug and reconnect once, reload the installer in Chrome and try again.
- If installation was interrupted, reconnect the Companion side and repeat the
  Web Installer with the same official image.

Only if Chrome's entries are ambiguous, use **System Information → Hardware →
USB** as an additional check: **USB serial** is the Companion ESP32; **USB
JTAG/serial** is the main ESP32-S3.
