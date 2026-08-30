# Device controls

**English** · [Deutsch](de/device-controls.md)

RoonPilot combines a rotary ring and capacitive touch. A waking gesture is
consumed deliberately: the first touch or ring movement wakes a black display
without also changing music or volume.

## Now Playing

- Tap the centre button to play or pause.
- Tap left/right transport buttons for previous/next.
- Swipe **left** for next and **right** for previous.
- Tap the zone name to open the zone picker.
- Swipe **up** to open Quick Settings.
- Turn the outer ring to change volume.
- Long-press the centre of the display for about 1.2 seconds to lock or unlock
  all controls.

Long titles make one automatic marquee pass after a track change and then stop.
Short titles stay still. The artist line uses a heavier, Unicode-capable font.

## Volume

Turning the ring opens a large volume overlay for the current zone. It starts
from the actual value reported by Roon, applies the endpoint's native step and
closes automatically before returning to the player. RoonPilot recognizes the
Roon volume types `number`, `db` and `incremental` without a manual unit setting:

- `number` is normally shown as percent. Older endpoints without an explicit
  range use the conventional 0-100 fallback.
- `db` is shown as the real value reported by Roon, for example `-40 dB`; it is
  not converted to a made-up 0-100 scale.
- `incremental` supports relative louder/quieter commands when no absolute
  value is available.

<img src="../assets/device-screens/04-volume.png" alt="Volume overlay" width="360">

Available settings:

- **Direction:** Standard or Reversed.
- **Volume step:** 1, 2, 3, 5 or 10 native Roon steps per detent. For example,
  `2` means 2 dB on an output reporting a 1 dB native step.
- **Acceleration:** faster turns multiply the effective change.
- **Maximum volume:** a local upper limit for ring-driven commands when the
  endpoint supplies usable minimum and maximum values.

The limit is a convenience safeguard, not an acoustic safety certification.
Other Roon controllers can still set a higher volume. If a dB endpoint does not
report its bounds, RoonPilot keeps correct dB display and relative control but
does not invent a range or apply a potentially unsafe local cap.

## Zone picker

Tap the zone name. Touch a row to select it. Turn the ring to move through zone
pages; the list wraps in both directions. Swipe up/down for next/previous pages
and use the on-screen back control to leave without changing the zone.

Only zones enabled in **Zone management** appear. If the selected zone vanishes
or becomes unavailable, RoonPilot asks for another rather than silently
controlling an unrelated room.

## Quick Settings

Swipe up on Now Playing.

<img src="../assets/device-screens/09-quick-settings.png" alt="Quick Settings home" width="360">

On the home page, turning the ring changes the highlighted section; touch opens
it. On a setting page, touch a row to select it and turn the ring to adjust its
value. Press **Save & Close** to persist the changes. Leaving without saving
restores the previous accent colour and settings.

### System

The first entry is read-only and shows:

- the IP address used to open RoonPilot's local website;
- the connected Roon Server name;
- **Ready**, **Wi-Fi offline**, **Roon offline** or **Approval needed**.

Use the back control or swipe down to return to the Quick Settings home page.

### Display

- active brightness;
- cover-derived background intensity;
- accent colour palette;
- Classic, Focus or Orbit player screen.

### Volume Controls

- native Roon-step multiplier;
- maximum volume where endpoint limits are available;
- acceleration on/off;
- standard/reversed direction.

### Clock

- Station or Digital face;
- day and night brightness;
- day-start and night-start times in 30-minute increments.

Full dimming, idle delays, screen rotation and “Never” choices remain available
on the web page because they are rarely changed during listening.

## Control lock

Hold the centre of the display for about 1.2 seconds. **Controls locked** appears.
Touch, swipe and ring input are then ignored. Attempting an action shows the
locked notice instead of sending a Roon command. Long-press the centre again to
unlock.

The lock is useful when moving or cleaning the device. It does not lock the
local website or other Roon remotes.

## Dim, idle clock and black screen

- **Dim after** lowers the player brightness after inactivity.
- **Idle display after** changes inactive playback to the selected clock or
  black screen.
- Choosing **Never** disables that transition.
- If a clock is selected, the display stays on at the clock's independent
  day/night brightness; it is not subsequently forced black.
- Touching the clock returns to Now Playing.
- Touch or ring input wakes a black screen; repeat the intended action after it
  wakes.

## Deep sleep

Deep sleep is configured separately on the web **Power** page. It can start
only after the selected zone has reported paused/stopped for the configured idle
period. Touch or turn the ring to wake it. Unlike black-screen wake-up, this is a
full boot: Wi-Fi and Roon reconnect before controls and the website return.

Deep sleep is blocked during Wi-Fi setup, firmware work and battery calibration.
It is also blocked while playing/loading/buffering or when the selected zone's
state is unavailable. Network traffic cannot wake it. Read the complete
[Deep-sleep guide](deep-sleep.md).

## Rotate 180 degrees

Enable **Rotate display 180°** on Display & Controls if the device orientation
requires it. Display and touch coordinates rotate together. This is independent
of encoder direction.
