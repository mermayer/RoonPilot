# Hardware and the two processors

**English** · [Deutsch](de/hardware-and-two-processors.md)

## Supported device

RoonPilot targets the **Waveshare ESP32-S3-Knob-Touch-LCD-1.8**. Do not assume
that another round ESP32 display is electrically compatible merely because it
has the same resolution.

| Item | Specification used by RoonPilot |
| --- | --- |
| Display | 1.8-inch round IPS LCD, 360 × 360 pixels |
| Touch | CST816 capacitive touch controller |
| Main processor | ESP32-S3R8 |
| Main memory | 16 MB flash and 8 MB PSRAM |
| Physical control | Full rotary ring |
| Companion processor | ESP32-U4WDH, independent 4 MB flash |
| Audio hardware | PCM5100A DAC and 3.5 mm output, not used by RoonPilot |
| Other hardware | Microphone, vibration motor, microSD/TF slot |
| Power | USB-C or optional internal Li-ion battery |

Official sources:

- [Waveshare product page](https://www.waveshare.com/esp32-s3-knob-touch-lcd-1.8.htm)
- [Waveshare technical wiki](https://www.waveshare.com/wiki/ESP32-S3-Knob-Touch-LCD-1.8)

## Available variants

| Order code | Enclosure | Included battery |
| --- | --- | --- |
| `ESP32-S3-Knob-Touch-LCD-1.8` | Blue | 800 mAh |
| `ESP32-S3-Knob-Touch-LCD-1.8-EN` | Blue | No |
| `ESP32-S3-Knob-Touch-LCD-1.8B` | Black | 800 mAh |
| `ESP32-S3-Knob-Touch-LCD-1.8B-EN` | Black | No |

Check the seller's current listing before ordering. Battery availability,
shipping restrictions and regional product codes can change.

## The unusual part: there are two computers inside

The enclosure contains two independently programmable processors:

```text
Plug position in which chip-id reports ESP32-S3
    └──► ESP32-S3R8 ──► display, touch, ring, Wi-Fi, RoonPilot

Unplug USB, turn the USB-C plug 180 degrees and reconnect
    └──► ESP32-U4WDH ─► separate companion firmware
```

They do not share a firmware image. They do not share flash storage. A backup of
one processor cannot restore the other. To reach the other processor, unplug
USB, turn the USB-C plug by 180 degrees and reconnect it. Windows may then show
the same COM number or a different one, so the COM number is not proof of which
chip is active.

## How to identify the active processor

With Espressif's tools installed, use one of these read-only commands:

```powershell
python -m esptool --port COM4 chip-id
```

Expected identities:

- the RoonPilot side reports an **ESP32-S3**;
- the companion side reports a classic **ESP32**.

Replace `COM4` with the port shown in Windows Device Manager. If the command
cannot connect, close every serial terminal, unplug the cable, rotate the USB-C
plug 180 degrees, reconnect it and try again.

> [!CAUTION]
> Stop if the reported chip is not the chip named by the file you intend to
> write. Do not press an install or erase button to “see what happens.”

## What the companion low-power firmware does

RoonPilot does not use the second ESP32 for Roon. The optional companion image:

- holds the PCM5100A `XSMT` control low;
- leaves shared lines as inputs without pull resistors;
- enters indefinite deep sleep without a wake source.

Its purpose is to remove avoidable background activity and power consumption.
It is deliberately tiny and deliberately separate. A complete original 4 MB
backup is optional; make one only if you may later want to restore the exact
manufacturer-delivered companion firmware.

## Audio hardware

The PCM5100A makes a future audio-endpoint experiment technically interesting,
but the current RoonPilot firmware is a **remote control**, not a Roon audio endpoint. Music is
played by the selected existing Roon zone.

## Next step

Continue with [Installation](installation.md). If being able to restore the
exact manufacturer-delivered firmware matters to you, use the
[optional factory-backup guide](factory-backup.md) before the Factory install.
