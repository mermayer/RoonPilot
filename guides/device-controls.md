# Device controls

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

Turning the ring opens a large volume overlay for the current zone. The value is
limited by **Maximum volume**, even if acceleration is enabled. The overlay
closes automatically and returns to the player.

<img src="../assets/device-screens/04-volume.png" alt="Volume overlay" width="360">

Available settings:

- **Direction:** Standard or Reversed.
- **Volume step:** 1, 2, 3, 5 or 10 percent per detent.
- **Acceleration:** faster turns multiply the effective change.
- **Maximum volume:** a local upper limit for ring-driven commands.

The limit is a convenience safeguard, not an acoustic safety certification.
Other Roon controllers can still set a higher volume.

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

### Display

- active brightness;
- cover-derived background intensity;
- accent colour palette;
- Classic, Focus or Orbit player screen.

### Volume Controls

- volume step;
- maximum volume;
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

## Rotate 180 degrees

Enable **Rotate display 180°** on Display & Controls if the device orientation
requires it. Display and touch coordinates rotate together. This is independent
of encoder direction.

