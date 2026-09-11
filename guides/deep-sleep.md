# Deep sleep

**English** · [Deutsch](de/deep-sleep.md)

Deep sleep is the lowest-power idle state of the main ESP32-S3. It is different
from dimming, the idle clock and a black display: those modes keep RoonPilot
running and reachable, while deep sleep stops the processor, Wi-Fi, Roon
connection and local website. Waking performs a complete, automatic restart.

## Enable it

1. Open the local RoonPilot website.
2. Select **Power**.
3. Turn on **Deep sleep**.
4. Choose **Deep sleep after**.
5. Press **Save power policy**.

The status badge shows:

- **Disabled** when the switch is off;
- **Waiting** when a safety condition prevents sleep;
- **Armed** when the selected zone is paused/stopped and the idle countdown is
  running.

The timeout starts again after touch/ring input, a relevant playback-state
change, a saved power-policy change or the end of a temporary safety block.

## Conditions that must all be true

RoonPilot enters deep sleep only when:

- the feature is enabled and its timeout has expired;
- the selected Roon zone is available;
- that zone reports **paused** or **stopped**;
- first-time/recovery AP setup is not active;
- no firmware check, upload or installation is active;
- battery calibration is not being prepared, run or reviewed.

Playing, loading and buffering prevent deep sleep. A missing zone, disconnected
Roon Server or unknown playback state also prevents it. This conservative rule
avoids silently disconnecting a controller whose state cannot be proven idle.

## Wake RoonPilot

Either action wakes the main ESP32-S3:

- touch the display; or
- turn the outer ring far enough to produce an encoder edge.

The wake gesture cannot send play, next/previous or volume because the firmware
is not running yet. RoonPilot then boots normally, reconnects to Wi-Fi and Roon,
restores its settings and selected zone, and makes the local website available
again. This takes longer than waking a merely black display.

Network packets, a browser request or a Roon command cannot wake deep sleep,
because Wi-Fi is off. Use touch or the ring at the device.

## What remains stored

Deep sleep does not erase configuration, Wi-Fi credentials, Roon authorization,
zone preferences, clocks, player layout or battery reference. It is equivalent
to a power-saving shutdown followed by a normal boot, not a factory reset.

The separate companion ESP32 has its own low-power firmware and is independent
of this setting. The main Web Installer never changes the companion processor.

## Safe test procedure

1. Keep USB power connected for the first functional test.
2. Select a working Roon zone and pause it.
3. Enable deep sleep and choose the shortest available timeout.
4. Do not touch the display, turn the ring, open setup or start an update.
5. Confirm the Power badge becomes **Armed**.
6. Wait for the LCD/backlight and local website to turn off.
7. Touch once and confirm a normal boot and Wi-Fi/Roon reconnection.
8. Repeat, waking with the ring.
9. Start playback and confirm the device does not sleep after the same interval.

After USB testing, repeat once on battery. Do not combine this with battery
calibration, because calibration deliberately blocks deep sleep.

## If it does not sleep or wake

See [Troubleshooting](troubleshooting.md#deep-sleep-does-not-start) before
changing or reflashing firmware. Serial diagnostics identify entry and an EXT1
touch/encoder wake on the next boot.
