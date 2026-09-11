# Install the Companion firmware with macOS

**English** · [Deutsch](de/companion-installation-macos.md) · [Companion overview](companion-firmware.md)

This optional installation uses Google Chrome. It does not require Python,
Terminal commands or esptool.

## 1. Connect the correct processor

1. Connect RoonPilot directly to the Mac with a USB data cable.
2. Open **System Information** with Spotlight, then choose
   **Hardware → USB**.
3. Select the entry that appears when RoonPilot is connected. The Companion
   side appears as:

   > **USB serial**

If System Information instead shows **USB JTAG/serial**, that is the main
ESP32-S3. Unplug USB, turn the USB-C plug at the RoonPilot device by **180
degrees**, reconnect it and check **Hardware → USB** again.

## 2. Decide whether you want an optional backup

A backup is not required. It is useful only if you may later want to restore
the exact original Waveshare firmware on this processor. If you want that
return path, stop here and follow the
[detailed macOS factory-backup guide](factory-backup-macos.md). Otherwise
continue directly.

## 3. Install in Chrome

1. Close Arduino Serial Monitor, ESP-IDF Monitor and other programs that may
   use the serial connection.
2. Open the
   [Companion Web Installer](https://mermayer.github.io/RoonPilot/firmware/companion/)
   in a current desktop **Google Chrome** browser. Safari and Firefox do not
   support this Web Serial installation.
3. Confirm the displayed USB name and the personal-use licence.
4. Select **Install Companion firmware**.
5. In Chrome's device dialog, select the entry belonging to **USB serial**.
6. Confirm **Erase device** when asked.
7. Keep the cable connected until erasing, writing and verification are all
   complete.

Only the Companion ESP32 is erased. The main ESP32-S3 and its RoonPilot
settings are not changed.

## 4. Return the cable to RoonPilot

1. Unplug USB.
2. Turn the USB-C plug at the RoonPilot device by **180 degrees**.
3. Reconnect it.
4. System Information should now show **USB JTAG/serial** and RoonPilot should
   start normally.

## If the installer cannot connect

- Make sure the cable transfers data and is connected directly, without a hub.
- Close every program that might use the serial connection.
- Verify that **USB serial**, not **USB JTAG/serial**, is selected.
- Unplug and reconnect once, reload the installer in Chrome and try again.
- If installation was interrupted, reconnect the Companion side and repeat the
  Web Installer with the same official image.
