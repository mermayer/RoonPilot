# Battery status and runtime calibration

**English** · [Deutsch](de/battery-and-runtime.md)

RoonPilot is intentionally transparent about the battery limitations of the
Waveshare `ESP32-S3-Knob-Touch-LCD-1.8`. The firmware does not turn an
electrically unsuitable measurement into a precise-looking percentage.

## What the hardware provides

Waveshare offers battery-equipped variants with a 3.7 V, 800 mAh 102035
lithium battery and variants without a battery. A cell installed by an owner
may therefore have a different capacity, age or protection circuit.

The official schematic connects `BATT_ADC` as follows:

```text
regulated 5 V rail
       |
     R62 10 kOhm
       |
       +------ BATT_ADC ------ GPIO1 / ADC1 channel 0
       |
     R63 10 kOhm
       |
      GND
```

The equal resistors divide the **regulated 5 V system rail** by two. The ADC is
not connected to the Li-ion cell terminal. Waveshare's corresponding
`01_ADC_Test` is likewise described as **Get system voltage**, not as a battery
fuel-gauge example.

Primary manufacturer sources:

- [Waveshare product page](https://www.waveshare.com/esp32-s3-knob-touch-lcd-1.8.htm)
- [Waveshare technical wiki](https://www.waveshare.com/wiki/ESP32-S3-Knob-Touch-LCD-1.8)
- [Official Waveshare schematic archive](https://files.waveshare.com/wiki/ESP32-S3-Knob-Touch-LCD-1.8/ESP32-S3-Knob-Touch-LCD-1.8-schematic.zip)

## Consequence for battery information

The ESP32-S3 cannot use this circuit to determine:

- battery-cell voltage
- state of charge or an exact remaining percentage
- remaining capacity in mAh or Wh
- remaining operating time
- whether USB or only the battery is supplying the board
- the cell-voltage threshold at which the hardware will switch off

The power converter can hold the system rail comparatively stable while the
cell discharges. The reading also varies with conversion losses, load, ADC
tolerance and USB power. Presenting it as an exact battery percentage would be
misleading.

## Meaning of the on-screen battery symbol

RoonPilot retains a four-stage, filtered symbol as a coarse indication of the
measured board-power rail. Hysteresis prevents ADC noise from making a segment
flicker continuously.

The symbol is **not a calibrated percentage**, does not distinguish USB from
battery operation, and is not a safety cutoff. The web interface consequently
labels the numerical reading as `System voltage`.

## Why RoonPilot measures runtime instead

RoonPilot can measure a narrower but useful value:

> How long did this particular device run from a full charge under one fixed
> workload before the hardware switched it off?

This captures the installed battery, its age, board losses and real device
consumption. The result is stored as a **full-charge reference runtime**. It is
not a live countdown, a capacity measurement or a remaining-charge estimate.

## Reproducible calibration profile

| Item | Fixed setting |
| --- | --- |
| Display | Static screen on the 1.8-inch IPS LCD |
| Backlight | 50 percent |
| Dimming/display off | Disabled during the test |
| Wi-Fi | Connected and active |
| Roon client | Stopped after local Start |
| Local web server | Stopped after local Start |
| Touch | Active for local cancellation |
| Progress checkpoint | Every 60 seconds |

Wi-Fi stays active because it is part of the device workload. Roon and the web
server are stopped to remove variable network traffic and prevent browser
polling or configuration changes from altering the test.

## Step-by-step procedure

1. Fully charge the device using its normal hardware and firmware.
2. Open **Power > Battery calibration** in the local RoonPilot web interface.
3. Select **Prepare calibration** and confirm the prompt.
4. Verify that the preparation screen appears on RoonPilot.
5. Remove USB. A test performed while USB is connected is invalid.
6. Tap **Start** on the device display.
7. Leave the device untouched at a representative room temperature until it
   switches off.
8. Reconnect USB power.
9. Review the recovered duration. Save it only if the shutdown was the expected
   end of this uninterrupted battery test; otherwise discard it.

Start is deliberately local. A browser may prepare the calibration but cannot
start it, making accidental measurement on USB power much less likely.

Preparation may be cancelled from the web page. A running test may be
cancelled locally by holding the displayed cancel control. Normal display-power
handling, web service and Roon connection are restored after cancellation.

## Surviving the final power loss

The device cannot write the exact shutdown time after power has disappeared.
RoonPilot therefore stores a checkpoint every 60 seconds in two alternating
NVS records. Each contains a format/version marker, sequence number, running
state, elapsed time, previous accepted reference, calibration date and a
checksum.

On the next boot RoonPilot validates both records and chooses the newest valid
one. If a test was running, the last checkpoint is presented for review. It is
never accepted automatically and does not overwrite a previous reference until
the operator selects **Save result**.

The normal measurement uncertainty is therefore approximately zero to 60
seconds on the short side. Results below five minutes are rejected. A manual
reset, unrelated loss of power or firmware maintenance can also produce a
review result, which must be discarded.

## What an accepted result means

An accepted result says:

> With this battery, hardware, firmware and fixed calibration profile, this
> RoonPilot operated for approximately the recorded duration from full charge
> to hardware shutdown on the stated date.

Normal use may differ because of display brightness, display-off behavior,
user interaction and Roon traffic. Other important variables include:

- cell capacity, protection circuit, age and temperature
- Wi-Fi RSSI, retransmissions and access-point behavior
- firmware version and workload
- companion-ESP32 factory or low-power firmware
- touch, encoder and display-update activity

Recalibration is recommended after replacing the battery, changing the
companion-ESP32 firmware, making a material power-related firmware change, or
observing a meaningful loss of operating time.

## Publishing comparable results

A numerical release claim should be based on at least two valid complete runs
under identical conditions; three are recommended. Every valid result should
be published, not only the longest one, with the range shown alongside any
average. A claimed benefit from companion-ESP32 low-power firmware requires
separate factory-versus-low-power runs under otherwise identical conditions.

A useful published result should include:

| Field | Record |
| --- | --- |
| Hardware variant | Exact Waveshare order code |
| Battery | Supplier, rated voltage/capacity and whether factory installed |
| Firmware | RoonPilot version/build |
| Companion ESP32 | Factory or RoonPilot low-power firmware |
| Test profile | LCD 50%, static screen, Wi-Fi on, Roon/web off |
| Wi-Fi | Approximate RSSI before start |
| Environment | Approximate room temperature |
| Result | Date and HH:MM runtime, with up to 60 s uncertainty |

Without these conditions, two runtime figures are anecdotes rather than a
controlled comparison.

## Battery safety

Runtime calibration is not battery protection. Because cell voltage is not
available to the ESP32-S3, RoonPilot cannot implement a software cell-voltage
cutoff.

- Prefer the Waveshare battery-equipped variant or a compatible protected cell
  intended for this board.
- Verify voltage, dimensions, connector and polarity before replacement.
- Never use a swollen, damaged, leaking or unusually hot cell.
- Stop the test if the enclosure becomes unusually hot or the device behaves
  abnormally.
- If the device does not switch off normally, stop the test rather than trying
  to force a deeper discharge.

The board and battery manufacturers remain the authoritative source for cell
compatibility, charging behavior and hardware protection.

## FAQ

### Why not display a percentage?

Because the board does not expose the cell measurement needed to justify it. A
precise number calculated from the regulated 5 V rail would create false
confidence.

### Why does the web interface disappear during calibration?

The server intentionally stops after local Start so browser polling and
configuration cannot change the workload.

### Why does Roon disconnect?

The Roon client is also stopped for a reproducible load. It reconnects after
cancellation or the next powered boot.

### Why may the result be roughly one minute short?

Progress is saved once per minute. The device cannot save again after operating
power has disappeared.

### Can this compare replacement batteries?

Yes, as a practical runtime comparison when every other relevant condition is
kept constant. It is still not a laboratory capacity measurement.

### Does the reference predict remaining runtime right now?

No. RoonPilot cannot reliably detect the power source or current state of
charge. The saved value describes a full-charge test only.
