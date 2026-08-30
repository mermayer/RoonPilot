# Optional companion ESP32 firmware

**English** · [Deutsch](de/companion-firmware.md)

This guide explains the separate low-power firmware for the second processor in
the Waveshare ESP32-S3-Knob-Touch-LCD-1.8. It is written for readers who have
never used a command-line flashing tool.

> [!IMPORTANT]
> The companion firmware is optional. It is not needed for display, touch,
> rotary control, Wi-Fi or Roon. The normal RoonPilot Web Installer never
> touches this processor.

> [!CAUTION]
> Do not install the companion image unless you have made and verified the
> complete 4 MB factory backup and are prepared to restore that backup. Keep a
> second copy because the two processor images are not interchangeable.

## What the firmware does

The module contains a classic ESP32-U4WDH in addition to the main ESP32-S3.
RoonPilot does not need this second processor. The companion image:

- mutes the unused PCM5100A DAC through its `XSMT` control;
- leaves the shared audio, encoder and serial lines as inactive inputs;
- puts the companion ESP32 into indefinite deep sleep without a wake source.

This operation does not change the RoonPilot firmware on the ESP32-S3. It also
does not replace the configurable deep-sleep function of the main RoonPilot
processor.

## What you need

- a Windows, macOS or Linux computer;
- a data-capable USB-C cable;
- Python 3.10 or newer and Espressif `esptool`, or an existing ESP-IDF
  installation that already provides `esptool`;
- the companion image and its published SHA-256 checksum;
- two safe storage locations for the original 4 MB factory backup.

The examples below use Windows PowerShell and `COM4`. Replace `COM4` with the
port shown on your computer. On macOS or Linux, use `python3` instead of `py`
and the matching `/dev/...` serial port.

## 1. Install and check esptool

Download Python from the
[official Python Windows page](https://www.python.org/getit/windows/) if it is
not already installed. Then open **Windows Terminal** or **PowerShell** and run:

```powershell
py --version
py -m pip install --upgrade esptool
py -m esptool version
```

The current Espressif documentation requires Python 3.10 or newer for the
latest `esptool`. See the official
[esptool installation instructions](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html)
if these commands fail. If Windows has no `py` command but `python` works, use
`python -m ...` in every command below.

## 2. Download the companion file

Download `roonpilot-companion-sleep-factory-v1.0.1.bin` from the supplied
firmware page.

Place the file in a new working folder. Do not rename it to a vague name such
as `firmware.bin`; the processor target must remain obvious.

## 3. Close programs that use the serial port

Close ESP-IDF Monitor, PuTTY, Arduino Serial Monitor and every other terminal
that may have the device open. Only one program can normally use a COM port at
a time.

## 4. Select and identify the companion ESP32

1. Disconnect the USB-C cable from the module.
2. Rotate the **USB-C plug** 180 degrees.
3. Reconnect it.
4. Open Windows Device Manager and look under **Ports (COM & LPT)**.
5. Run the read-only identity check:

   ```powershell
   py -m esptool --port COM4 chip-id
   ```

Continue only if the result identifies a classic **ESP32**. Stop if it reports
**ESP32-S3**. The COM number alone is not proof because Windows can reuse it.

## 5. Make the mandatory complete 4 MB backup

Create a backup folder outside the RoonPilot download folder:

```powershell
New-Item -ItemType Directory -Path D:\RoonPilot-Factory-Backup
```

Read every byte of the companion flash:

```powershell
py -m esptool --chip esp32 --port COM4 --baud 460800 read-flash 0x0 0x400000 D:\RoonPilot-Factory-Backup\companion-original-4mb.bin
```

Check the exact file size and calculate its checksum:

```powershell
(Get-Item D:\RoonPilot-Factory-Backup\companion-original-4mb.bin).Length
Get-FileHash -Algorithm SHA256 D:\RoonPilot-Factory-Backup\companion-original-4mb.bin
```

The size must be exactly `4,194,304` bytes. Save the displayed SHA-256 value in
a text file beside the backup and copy both files to a second independent,
preferably encrypted location. Never publish this original backup.

## 6. Verify the downloaded RoonPilot image

In the folder containing the downloaded image, run:

```powershell
Get-FileHash -Algorithm SHA256 .\roonpilot-companion-sleep-factory-v1.0.1.bin
```

For version 1.0.1 the result must be:

```text
4959cec1d9baf769359c21e24dbd63f6951466fd05699eec7d9c37661b92b00f
```

The expected file size is `197,264` bytes. Stop after any size or checksum
mismatch and download the file again.

## 7. Check the chip again and write the image

Run the identity check immediately before the write:

```powershell
py -m esptool --chip esp32 --port COM4 chip-id
```

Only after it again reports a classic ESP32, write the merged image at address
`0x0`:

```powershell
py -m esptool --chip esp32 --port COM4 --baud 460800 write-flash 0x0 .\roonpilot-companion-sleep-factory-v1.0.1.bin
```

Do not use `erase-flash` as an exploratory step. Do not substitute either of
the ESP32-S3 files. `esptool` erases the required sectors, writes the data and
verifies it before resetting the processor.

## 8. Return to the RoonPilot processor

1. Wait until `esptool` reports that verification completed.
2. Disconnect USB-C.
3. Rotate the plug 180 degrees back to the RoonPilot orientation.
4. Reconnect it.
5. Run:

   ```powershell
   py -m esptool --port COM4 chip-id
   ```

6. Confirm that this side reports **ESP32-S3** and that RoonPilot starts.

Seeing no RoonPilot screen while the cable is connected to the companion side
is normal; that USB orientation does not address the display processor.

## Restore the original companion firmware

Restoration replaces the complete 4 MB companion flash with the backup made in
step 5:

1. Disconnect USB, rotate to the companion orientation and reconnect.
2. Confirm the classic ESP32 again with `chip-id`.
3. Confirm the backup is still exactly `4,194,304` bytes and that its stored
   SHA-256 value still matches.
4. Write the complete backup:

   ```powershell
   py -m esptool --chip esp32 --port COM4 --baud 460800 write-flash 0x0 D:\RoonPilot-Factory-Backup\companion-original-4mb.bin
   ```

5. Rotate the USB plug back to the ESP32-S3 side afterward.

## If esptool cannot connect

- close every program that may hold the COM port;
- disconnect and reconnect the USB cable;
- check Device Manager because the COM number may have changed;
- try the same command once at the default baud rate by omitting
  `--baud 460800`;
- never rotate the plug and issue a write command without repeating `chip-id`.

If writing was interrupted, do not guess. Reconnect to the classic ESP32,
verify its identity and restore the complete factory backup.

## Related guides

- [Hardware and the two processors](hardware-and-two-processors.md)
- [Back up both factory firmwares](factory-backup.md)
- [Firmware updates and recovery](firmware-updates-and-recovery.md)
- [Public validation test plan](test-plan.md)
