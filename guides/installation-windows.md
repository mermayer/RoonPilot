# Install RoonPilot with Windows

**English** · [Deutsch](de/installation-windows.md) · [Choose another operating system](installation.md)

No command-line tool is needed for the normal installation.

## 1. Prepare the computer

1. Use a Windows PC with a current **Chrome** or **Edge** browser.
2. Connect RoonPilot directly with a **USB data cable**.
3. Close Arduino Serial Monitor, PuTTY, ESP-IDF Monitor and any other program
   that may already be using the serial port.

## 2. Check the USB plug position

1. Right-click the Windows Start button and open **Device Manager**.
2. Expand **Ports (COM & LPT)**.
3. Find the entry that appears when RoonPilot is connected.

The correct ESP32-S3 side normally appears as:

> **USB Serial Device (COMx)**

`COMx` is a number chosen by Windows, for example `COM5`.

If Windows instead shows:

> **USB-SERIAL CH340 (COMx)**

you are connected to the USB interface of the board's **ESP32-U4WDH** companion
processor, not the ESP32-S3. Unplug USB, turn the USB-C plug at the RoonPilot
device by **180 degrees**, reconnect it and check Device Manager again. Continue
only when **USB Serial Device (COMx)** appears.

## 3. Install RoonPilot

1. Open the [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/)
   in Chrome or Edge.
2. Tick the hardware confirmation and accept the personal-use license.
3. Select **Install RoonPilot**.
4. In the browser window, choose the same COM number that Device Manager showed
   for **USB Serial Device**.
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
[Companion Web Installer for Windows](companion-installation-windows.md).
It also needs no command-line tool.

## If the installer cannot connect

- Make sure the cable transfers data.
- Make sure no other program has the COM port open.
- Reload the installer in Chrome or Edge and select the ESP32-S3 COM number
  again.
- See [Troubleshooting](troubleshooting.md) for recovery and advanced chip
  identification.

An [original-firmware backup](factory-backup.md) is optional and not a
prerequisite for installing RoonPilot.
