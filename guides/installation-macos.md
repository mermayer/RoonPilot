# Install RoonPilot with macOS

**English** · [Deutsch](de/installation-macos.md) · [Choose another operating system](installation.md)

No Python, Terminal command or command-line tool is needed for the normal
installation.

## 1. Prepare the Mac

1. Install or open a current **Google Chrome** browser. Safari and Firefox do
   not support this browser installation.
2. Connect RoonPilot directly with a **USB data cable**.
3. Close Arduino Serial Monitor, ESP-IDF Monitor and any other program that may
   already be using the serial connection.

## 2. Check the USB plug position

1. Open **System Information** with Spotlight. Alternatively choose
   **Apple menu → About This Mac → More Info → System Report**.
2. In the left sidebar, choose **Hardware → USB**.
3. Select the entry that appears when RoonPilot is connected.

The correct ESP32-S3 side appears as:

> **USB JTAG/serial**

If macOS instead shows:

> **USB serial**

you are connected to the USB interface of the board's **ESP32-U4WDH** companion
processor, not the ESP32-S3. Unplug USB, turn the USB-C plug at the RoonPilot
device by **180 degrees**, reconnect it and check **Hardware → USB** again.
Continue only when **USB JTAG/serial** appears.

## 3. Install RoonPilot

1. Open the [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/)
   in Chrome.
2. Tick the hardware confirmation and accept the personal-use license.
3. Select **Install RoonPilot**.
4. In Chrome's device window, choose the entry for **USB JTAG/serial**. Chrome
   may call it **USB JTAG/serial debug unit**.
5. Confirm **Erase device** when asked. A separate erase beforehand is not
   needed.
6. Keep the cable connected until erasing, writing and verification have all
   finished.

The Factory installation erases the firmware and settings on the ESP32-S3. It
does not erase the board's other processor.

## 4. Start RoonPilot

1. Unplug and reconnect the USB cable **without turning the plug**.
2. Wait for the RoonPilot startup screen.
3. Continue with [First-time setup](first-time-setup.md).

## Optional: put the second processor into deep sleep

RoonPilot works fully without this step. If you want the unused Companion
ESP32 placed into a defined low-power state, use the separate
[Companion Web Installer for macOS](companion-installation-macos.md).
It also needs no Terminal command or esptool.

## If the installer cannot connect

- Make sure the cable transfers data.
- Make sure no other program is using the USB serial connection.
- Reload the installer in Chrome and select **USB JTAG/serial** again.
- See [Troubleshooting](troubleshooting.md) for recovery.

The separate [esptool guide for macOS](esptool-macos.md) is only for advanced
diagnostics, optional original-flash backups and manual recovery. It is not
part of either normal browser installation. An
[original-firmware backup](factory-backup.md) is optional.
