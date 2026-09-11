# Install the Companion firmware with Windows

**English** · [Deutsch](de/companion-installation-windows.md) · [Companion overview](companion-firmware.md)

This optional installation uses Chrome or Edge. It does not require Python,
PowerShell commands or esptool.

## 1. Connect the correct processor

1. Connect RoonPilot directly to the Windows computer with a USB data cable.
2. Open **Device Manager → Ports (COM & LPT)**.
3. Look for this entry:

   > **USB-SERIAL CH340 (COMx)**

This is the classic ESP32-U4WDH Companion processor. `COMx` is a number chosen
by Windows, for example `COM5`.

If Device Manager instead shows **USB Serial Device (COMx)**, that is the main
ESP32-S3. Unplug USB, turn the USB-C plug at the RoonPilot device by **180
degrees**, reconnect it and check Device Manager again.

## 2. Decide whether you want an optional backup

A backup is not required. It is useful only if you may later want to restore
the exact original Waveshare firmware on this processor. If you want that
return path, stop here and follow the
[detailed Windows factory-backup guide](factory-backup-windows.md). Otherwise
continue directly.

## 3. Install in the browser

1. Close Arduino Serial Monitor, ESP-IDF Monitor and other programs that may
   use the COM port.
2. Open the
   [Companion Web Installer](https://mermayer.github.io/RoonPilot/firmware/companion/)
   in a current desktop **Chrome** or **Edge** browser.
3. Confirm the displayed USB name and the personal-use licence.
4. Select **Install Companion firmware**.
5. In the browser dialog, select the same **USB-SERIAL CH340 (COMx)** entry.
6. Confirm **Erase device** when asked.
7. Keep the cable connected until erasing, writing and verification are all
   complete.

Only the Companion ESP32 is erased. The main ESP32-S3 and its RoonPilot
settings are not changed.

## 4. Return the cable to RoonPilot

1. Unplug USB.
2. Turn the USB-C plug at the RoonPilot device by **180 degrees**.
3. Reconnect it.
4. Device Manager should now show **USB Serial Device (COMx)** and RoonPilot
   should start normally.

## If the installer cannot connect

- Make sure the cable transfers data and is connected directly, without a hub.
- Close every program that might have opened the COM port.
- Verify that **USB-SERIAL CH340**, not **USB Serial Device**, is selected.
- Unplug and reconnect once, reload the installer and try again.
- If installation was interrupted, reconnect the Companion side and repeat the
  Web Installer with the same official image.
