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

## Why the battery-hardware switch is necessary

Waveshare sells this device both with and without an internal battery, but the
ESP32-S3 has no separate signal that says whether a battery is physically
installed. It sees only the shared system rail. A single voltage reading can
therefore come from an internal battery, a computer USB port, a USB charger or
an external power bank. Without an explicit setting, a battery-free unit could
show a meaningless battery icon and offer a calibration that can never work.

Open **Power > Installed battery** and choose one of these modes:

| Mode | Behaviour |
| --- | --- |
| **Automatic** | Battery-specific information remains hidden until RoonPilot has positively observed an installed battery. This is the default on a new installation. |
| **Installed** | Always shows the battery symbol, battery information and runtime calibration. Use this if a battery is fitted but Automatic has not recognised it. |
| **Not installed** | Hides the battery symbol, battery information and the complete calibration section. |

**Not installed** removes only battery-specific functions. CPU modes, supply
thresholds, display timers and Deep Sleep remain available because they are
also useful when RoonPilot is powered from an external power bank. Existing
installations are migrated to **Installed**, so an update does not suddenly
remove a previously visible battery display.

### How Automatic works

Automatic detection needs a positive, uninterrupted observation:

1. RoonPilot is running and recognises the higher system-voltage band as
   external USB power.
2. USB is unplugged, or the device is lifted from its powered dock, without
   switching RoonPilot off.
3. RoonPilot continues running in the lower voltage band.
4. Continued operation proves that an internal battery is supplying the
   device. RoonPilot stores this positive result locally and enables the
   battery symbol, information and calibration section.

Automatic deliberately never concludes that no battery is installed. Merely
remaining on USB proves nothing, and a low-voltage USB source can resemble the
battery band. Select **Not installed** manually for a battery-free model. The
selected mode is included in a RoonPilot configuration backup; the positive
Automatic observation is tied to the physical device and is not copied to
another unit by restoring that backup.

### The USB source matters

The system voltage shown on the Power page can be lower when RoonPilot is
connected to a computer USB port than when it is connected to a dedicated USB
power supply or charger. The actual value also depends on the USB port, cable
and load. A computer port may run the device normally while providing too little
voltage at the board for the battery to reach a true full charge.

> **Important for battery calibration:** Perform the full-charge phase with a
> stable USB power supply/charger, not a computer USB port. Wait until charging
> has finished, then disconnect USB and start the calibration on the display.

Preparation and saving a result require a measured system voltage of at least
**4.28 V continuously for three seconds**. If **Prepare calibration** or
**Save result** stays disabled, check the Power page's voltage reading and use
a stable USB supply and suitable cable. Changing the source-detection
thresholds does not bypass this requirement. This voltage check does not prove
that the battery is fully charged; the full-charge step is still necessary.

A computer USB port remains suitable for flashing, diagnostics and ordinary
operation. It must simply not be used as the **fully charged** reference for a
runtime calibration. A difference between the voltage shown with computer USB
and with a charger reflects the supply path; it is not a battery percentage.

## Meaning of the on-screen battery symbol

When battery hardware is enabled, RoonPilot retains a four-stage, filtered
symbol as a coarse indication of the measured board-power rail. Hysteresis
prevents ADC noise from making a segment flicker continuously.

The bars are **not a calibrated percentage** and are not a safety cutoff. A
small lightning bolt means that the shared system rail is currently classified
as externally powered; it does not prove that the battery is charging. The web
interface consequently labels the numerical reading as `System voltage`.

## Automatic protection at low system voltage

RoonPilot distinguishes **flash-write protection**, which is always active,
from **protective shutdown**, which is used only during a running battery
calibration. These fixed limits are independent of the battery symbol and the
two adjustable source-detection thresholds. They are **system-rail voltages,
not battery-cell voltages**.

| Condition | What RoonPilot does |
| --- | --- |
| System voltage below **3.80 V**, in any operating mode | Blocks new flash writes and erases. They are permitted again only after valid, stable readings at or above 3.80 V for at least 300 ms. This also applies with **Not installed** selected. |
| During a running calibration: below **3.70 V for 500 ms** | Ends the run in protective deep sleep; the display goes dark. This does not depend on the ordinary Deep Sleep switch. |
| During a running calibration: **3.50 V or lower** | Stops at the next supply sample without the 500 ms waiting period. |
| After a retained calibration protective stop | Resumes only at **4.28 V or higher for three seconds**. |

In normal operation, a low, missing or invalid voltage reading prevents unsafe
flash writes; it does **not** trigger this software-controlled protective
sleep. For example, briefly changing from a charger to a computer USB port
does not activate calibration shutdown. Writes become available again once
the supply readings are valid and stable. During calibration, flash writes
remain blocked throughout the run, even above 3.80 V.

Missing or invalid measurements during a running calibration can also cause
a protective stop, but do not produce a valid calibration result. Deep sleep
reduces consumption; it does not electrically disconnect the battery.

After a calibration protective stop, connect a stable USB supply. RoonPilot
checks it every 30 seconds, so the display may stay black for about **33 seconds**
after reconnection before normal boot begins. Touching or turning the ring
cannot override this stop. The 4.28 V restart condition applies to this retained
calibration stop, not to ordinary power-source changes or unrelated restarts.
If it remains asleep, check the supply and cable rather than lowering the
source-detection thresholds.

## Why RoonPilot measures runtime instead

RoonPilot can measure a narrower but useful value:

> How long did this particular device run from a full charge under one fixed
> workload before RoonPilot's protective supply stop?

This captures the installed battery, its age, board losses and real device
consumption. The result is stored as a **full-charge reference runtime**. It is
not a live countdown, a capacity measurement or a remaining-charge estimate.

## Reproducible calibration profile

| Item | Fixed setting |
| --- | --- |
| Display | Static screen on the 1.8-inch IPS LCD |
| Backlight | 50 percent |
| CPU | Fixed at 240 MHz, independent of the normal CPU mode |
| Dimming/display off | Disabled during the test |
| Wi-Fi | Connected and active |
| Roon client | Stopped after local Start |
| Local web server | Stopped after local Start |
| Touch | Active for local cancellation |
| Progress recording | Every second in retained RTC memory; no periodic flash writes |
| Ordinary Deep Sleep | Disabled during preparation and the run; the protective low-voltage cutoff applies only during the run |
| End of the run | Protective supply stop, not discharge to the hardware cutoff |

Wi-Fi stays active because it is part of the device workload. Roon and the web
server are stopped to remove variable network traffic and prevent browser
polling or configuration changes from altering the test.

## Step-by-step procedure

1. Fully charge the device from a stable USB power supply/charger, **not from a
   computer USB port**, and wait until charging has finished.
2. Make sure **Power > Installed battery** is set to **Automatic** with a
   confirmed battery or to **Installed**.
3. Open **Power > Battery calibration** in the local RoonPilot web interface.
4. Select **Prepare calibration** and confirm the prompt. Stable USB power is
   required; after an update, allow the automatic startup check to finish.
5. Verify that the preparation screen appears on RoonPilot.
6. Remove USB. A test performed while USB is connected is invalid.
7. Wait for battery-source detection, then tap **Start** on the device display.
8. Leave the device untouched at a representative room temperature until it
   enters the protective stop and the display goes dark. Do not force further
   discharge to the battery's hardware cutoff.
9. Reconnect a stable USB power supply/charger and allow the restart check to
   finish. The display may remain black for about 33 seconds before boot.
10. Review the duration. **Save result** is available only for a completed
    protective-stop run of at least five minutes, with stable USB power.
    Discard an interrupted result and fully charge before starting another run.

Start is deliberately local. A browser may prepare the calibration but cannot
start it, making accidental measurement on USB power much less likely.
Start also requires a valid, safe system voltage of at least 3.80 V and a
battery-source reading below 4.28 V.

Preparation may be cancelled from the web page. A running test may be
cancelled locally by holding the displayed cancel control. Normal display-power
handling, web service and Roon connection are restored after cancellation.

## Progress and result handling

Preparation stores the session marker in non-volatile memory while stable USB
power is still connected. During the run, elapsed time is recorded every
second in two checksummed slots in **retained RTC memory**. Application flash
writes and erases are blocked throughout the running calibration; the old
minute-by-minute flash checkpoints are no longer used. No final flash write
is attempted when the supply drops.

RTC memory survives protective deep sleep, but it is not a permanent backup:
complete loss of power or loss of the retained record prevents a valid result.
On restart, RoonPilot checks whether the record belongs to the prepared run
and whether the voltage-triggered protective stop completed it.

| End of the run | Result handling |
| --- | --- |
| Voltage-triggered protective stop with a valid retained record | Offered for review. Save requires at least five minutes and stable USB power. |
| USB reconnected before the protective stop, manual reset, complete power loss or unusable voltage measurements | Incomplete; **Save result** is disabled. Discard it and repeat from a full charge. |
| Cancelled or discarded | No new reference is saved; the previous accepted reference is retained. |

Nothing is accepted automatically. A new reference replaces the previous one
only after **Save result** succeeds on stable USB power. One-second recording
does not imply one-second accuracy for the complete runtime measurement.

These illustrations reproduce the current device screens with example
durations. A long enough duration alone does not make an interrupted run valid:

| Protective-stop run completed | Run interrupted |
| --- | --- |
| <img src="../assets/device-screens/15-battery-result.png" width="300" alt="Completed calibration after protective stop; save the reference on USB"> | <img src="../assets/device-screens/15b-battery-interrupted.png" width="300" alt="Incomplete calibration with Save disabled"> |

## What an accepted result means

An accepted result says:

> With this battery, hardware, firmware and fixed calibration profile, this
> RoonPilot operated for approximately the recorded duration from full charge
> to the protective supply stop on the stated date.

Previously saved references remain available. A result measured with an older
firmware that ran to the hardware cutoff is not directly comparable with this
earlier protective endpoint. Recalibrate if you want a reference for the new
procedure.

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

When sharing runtime comparisons, use at least two complete runs under
identical conditions and include the range, not only the longest result.
Comparisons of companion-ESP32 factory and low-power firmware also need the
same calibration endpoint and otherwise identical conditions.

A useful published result should include:

| Field | Record |
| --- | --- |
| Hardware variant | Exact Waveshare order code |
| Battery | Supplier, rated voltage/capacity and whether factory installed |
| Firmware | RoonPilot version/build |
| Companion ESP32 | Factory or RoonPilot low-power firmware |
| Test profile | LCD 50%, CPU 240 MHz, static screen, Wi-Fi on, Roon/web off |
| Wi-Fi | Approximate RSSI before start |
| Environment | Approximate room temperature |
| Result | Date, runtime and protective-stop endpoint; progress is recorded once per second |

Without these conditions, two runtime figures are anecdotes rather than a
controlled comparison.

## Battery safety

The system-supply guard reduces unstable low-voltage operation. It does not
replace the battery's protection circuit: cell voltage is not available to
the ESP32-S3, and deep sleep does not disconnect the cell. RoonPilot cannot
implement a measured battery-cell cutoff on this board.

- Prefer the Waveshare battery-equipped variant or a compatible protected cell
  intended for this board.
- Verify voltage, dimensions, connector and polarity before replacement.
- Never use a swollen, damaged, leaking or unusually hot cell.
- Stop the test if the enclosure becomes unusually hot or the device behaves
  abnormally.
- Reconnect a stable USB supply promptly after the protective stop; do not leave
  a depleted device unpowered for days.
- If the device does not enter the protective stop, cancel rather than trying
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

### Does calibration still write to flash every minute?

No. Runtime progress is recorded in retained RTC memory once per second.
The session is prepared on USB before the run, and the accepted reference is
saved only afterwards on stable USB power.

### Why is Save result disabled?

The run must be completed, last at least five minutes and have a valid retained
record. Saving also requires a system voltage of at least 4.28 V for three
seconds. An interrupted run cannot be saved, even if its duration looks plausible.

### Why is the display still black after reconnecting USB?

After a protective stop, supply checks occur every 30 seconds. Allow about
33 seconds for the check before normal boot, followed by Wi-Fi/Roon reconnection.
Touch and ring input cannot bypass the protective stop.

### Can this compare replacement batteries?

Yes, as a practical runtime comparison when every other relevant condition is
kept constant. It is still not a laboratory capacity measurement.

### Does the reference predict remaining runtime right now?

No. The source classifier and battery-presence observation do not measure the
current state of charge. The saved value describes a full-charge test only.

### My device has no battery. Do I lose the power-management settings?

No. Select **Power > Installed battery > Not installed**. Only the battery
icon, battery information and calibration disappear. CPU policy, supply
thresholds, display timeouts and Deep Sleep remain available, including for an
external power bank.
