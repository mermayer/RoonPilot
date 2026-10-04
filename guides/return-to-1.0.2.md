# Return to RoonPilot 1.0.2

**English** · [Deutsch](de/return-to-1.0.2.md)

If RoonPilot 2.0.0 does not work for you, the Web Installer offers a separate
**Return to RoonPilot 1.0.2** option. It installs the original 1.0.2 release over
USB, even when RoonPilot's local website is unavailable. No Python, command line
or manual firmware download is needed.

**This is a clean installation: all settings and the profile library on
RoonPilot are erased.** It is not an ordinary update that keeps your settings.
Wi-Fi and the Roon connection must be set up again afterward.

## Before upgrading or returning

- Before upgrading from 1.0.2 to 2.0.0, create a configuration backup on the
  **System** page and keep that 1.0.2 backup separately.
- If 2.0.0 still opens, save a separate 2.0.0 backup before returning to 1.0.2.
  See [Configuration backup](configuration-backup.md). Keep it for a later
  return to 2.0.0, not for use under 1.0.2.
- **Do not import a 2.0.0 backup into 1.0.2.** If you do not have a backup made
  under 1.0.2, configure 1.0.2 manually after installation.
- If the device no longer starts or its website cannot be reached, you can
  proceed without a fresh backup. Settings that exist only on RoonPilot will
  be lost when it is erased.

An optional backup of Waveshare's manufacturer firmware is not required.
Returning to **RoonPilot 1.0.2** does not restore the manufacturer's software.

## What you need

- A Windows PC or Mac with a current desktop **Chrome** or **Edge** browser.
- A USB **data** cable; a charging-only cable is not enough.
- Your RoonPilot, connected directly to a stable computer USB port.

Connect only RoonPilot to USB for this procedure. Separate IR Bridges can stay
on their power supplies; they do not need to be connected to the computer.

## Restore version 1.0.2

1. Close serial monitors and any other program using RoonPilot's USB port.
2. Open the [Web Installer with 1.0.2 selected](https://mermayer.github.io/RoonPilot/firmware/?version=1.0.2#web-installer-title)
   in Chrome or Edge. Alternatively, open the normal Web Installer and choose
   **Return to RoonPilot 1.0.2**. The selected version must say **1.0.2**.
3. Read the recovery notice. Confirm the target processor, the license and the
   additional warning that returning to 1.0.2 erases your settings and profiles.
4. Select **Restore RoonPilot 1.0.2**. In the browser's device chooser, select
   **USB JTAG/serial debug unit**: this is RoonPilot's main **ESP32-S3**. On
   Windows the name is followed by `COM…`; on macOS by `cu.usbmodem…`. The
   number may vary.
5. If the chooser instead shows **USB serial**, do not select it: that is the
   second, classic ESP32. Unplug USB, turn the USB-C plug at the round RoonPilot
   device by **180 degrees**, reconnect and select **USB JTAG/serial debug
   unit**. If the installer reports a processor other than **ESP32-S3**, cancel.
6. In the installer dialog, choose installation of **RoonPilot 1.0.2 recovery**
   and confirm the installation of **1.0.2**. Erasing is included automatically
   and cannot be turned off for this recovery. It removes the complete firmware
   and configuration on the main ESP32-S3 before writing the original 1.0.2
   Factory image.
7. Keep USB connected and do not interrupt power until erasing, writing and
   verification have finished. Wait for RoonPilot to restart.
8. Follow [First-time setup](first-time-setup.md) to connect to your 2.4 GHz
   Wi-Fi, approve RoonPilot in Roon and select a zone. Check on the **System**
   page that the installed version is **1.0.2**.

If you saved a configuration backup under 1.0.2, you can restore that backup on
the 1.0.2 **System** page. Otherwise, enter your preferred settings again.

## What changes when you return

Only RoonPilot's main ESP32-S3 is erased and installed. The Companion ESP32
inside the device and separate IR Bridges are not flashed or erased.
However, the IR Bridge functions and extended group mixer introduced in 2.0.0
are not available in 1.0.2. The Bridge pairings, routes and profile library
previously stored on RoonPilot are removed by the clean installation; a 2.0.0
backup keeps a copy for a later return to 2.0.0.

**Do not run battery calibration under 1.0.2.** The original 1.0.2 release does
not include the changes that avoid repeated flash writes and monitor low
voltage during calibration in 2.0.0. Use the device without calibration when
returning to this older release.

## Return to the current version later

Use the normal [RoonPilot Web Installer](https://mermayer.github.io/RoonPilot/firmware/)
and choose **Current RoonPilot release**, not the fixed 1.0.2 recovery option.
A Factory installation erases settings again. After initial setup, restore the
configuration backup belonging to the installed version; do not mix backups
from different major versions.

## If USB recovery cannot connect

Try a known USB data cable and a direct computer port, close other serial
programs and check the device name again. The normal installation instructions
for [Windows](installation-windows.md) and [macOS](installation-macos.md) explain
the two USB orientations. For further connection problems, see
[Troubleshooting](troubleshooting.md).

RoonPilot's automatic A/B boot recovery is different: it returns to the
previous usable application slot after a failed boot, not necessarily to
1.0.2. The dedicated USB option is the version-specific return path. A
**Factory reset** on the System page only clears settings; it does not install
an older firmware version.
