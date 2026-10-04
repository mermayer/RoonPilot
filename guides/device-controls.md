# Device controls

**English** · [Deutsch](de/device-controls.md)

RoonPilot combines a rotary ring and capacitive touch. A waking gesture is
consumed deliberately: the first touch or ring movement wakes a black display
without also changing music or volume.

## Now Playing

All firmware-owned labels follow the language selected under **System →
Language**. Roon supplies the zone, track, artist and album text; those values
are shown unchanged and are never machine-translated.

- Tap the centre button to play or pause.
- Tap left/right transport buttons for previous/next.
- Swipe **left** for next and **right** for previous.
- Tap the zone name to open the zone picker.
- Swipe **up** to open Quick Settings.
- Turn the outer ring to change volume.
- Long-press the centre of the display for about 1.2 seconds to lock or unlock
  all controls.
- With the large Play/Pause area disabled, double-tap the centre to switch the
  display completely off immediately.

Long titles make one automatic marquee pass after a track change and then stop.
Short titles stay still. The artist line uses a heavier, Unicode-capable font.

The display fonts cover Western, Central and Eastern European Latin characters,
Greek, Cyrillic, common punctuation and currency symbols, plus a deliberately
selected set of everyday emoji. Emoji are monochrome. Large Asian writing
systems are not included because of the device's limited flash and RAM; a
missing glyph is replaced visibly instead of silently changing the source text.

Elapsed time advances locally once per second between Roon reports. Fresh Roon
positions regularly correct that local timeline in small steps, while a track
change or a difference greater than three seconds is applied immediately. This
keeps the display smooth without inventing progress indefinitely after a lost
connection. Time digits use fixed-width metrics so the labels do not move as
individual numbers change.

Classic shows elapsed time on the left, total time on the right and uses the
fine outline around its circular cover as the progress ring. Focus retains its
horizontal progress bar; Orbit uses the outer circular progress arc. Aura hides
the cover image but retains its softly derived colour background and shows a
large native Roon volume value when an absolute value exists. It intentionally
hides that value for External IR routes.

<img src="../assets/device-screens/roonpilot-classic.png" alt="Current RoonPilot Classic player with progress ring and side controls" width="360">

Four optional side buttons can appear when enabled: Playlist above Power on the
left, and Live Radio above Mute on the right. Playlist/Radio are global display
choices under **Display & Controls**; Power/Mute are enabled separately for each
zone under **Zone Management**.

## Large centre Play/Pause area

**Display & Controls** can enable an invisible 194-pixel Play/Pause touch area
in the centre of the screen. It is roughly the diameter of the Classic cover,
works in all four player layouts and does not alter their appearance. A short
tap inside it toggles playback; visible buttons retain priority and normal touch
haptics still apply.

<img src="../docs/assets/large-play-pause-touch-en.svg" alt="Diagram of the optional large centre Play/Pause touch area" width="720">

A long hold in the same area still locks or unlocks the controls. On a black
display, the first touch is still consumed only for waking. Because two short
taps would now be two deliberate Play/Pause commands, centre double-tap
display-off is available only while the large area is disabled. The option is
off by default.

## Volume

Turning the ring shows a compact amber volume panel over the existing player;
the selected zone, artwork and playback controls remain visible. The panel starts
from the actual value reported by Roon, applies the endpoint's native step and
disappears automatically after the adjustment. RoonPilot recognizes the
Roon volume types `number`, `db` and `incremental` without a manual unit setting:

- `number` is shown as the dimensionless value supplied by Roon, without an
  invented percent sign. Reported minimum and maximum values define the slim bar and
  web slider; only internally may an older endpoint without bounds use the
  conventional 0-100 fallback.
- `db` is shown as the real value reported by Roon, for example `-40 dB`; it is
  not converted to a made-up 0-100 scale.
- `incremental` supports relative louder/quieter commands when no absolute
  value is available.

An external IR route is also relative. It leaves the player visible and shows a
compact amber overlay with a signed action count such as `+2` or `-1`. The count
starts at zero for each new adjustment and represents accepted ring steps, not
an absolute DAC percentage or dB value.

<img src="../assets/device-screens/04-volume.png" alt="Current native Roon volume in a compact amber panel over the Classic player" width="360">

<img src="../assets/device-screens/33-ir-volume-overlay.png" alt="Amber relative IR volume overlay" width="360">

### Roon groups

For a selected group, one single ring detent opens the large member mixer and
is deliberately not sent as a volume command. Continue turning for the whole
group, or tap one of the large rows and turn for only that physical output. Tap
the group-name heading to select the complete group again. The mixer closes
after eight seconds without activity.

Every member keeps its own saved route and honest unit, so numeric volume, dB,
relative Roon and IR feedback may appear together. An unavailable Bridge is
shown as `OFFLINE`; it is not silently replaced by native Roon control.

<img src="../assets/device-screens/35-group-volume.png" alt="Whole-group volume mixer with three different output models" width="360">

<img src="../assets/device-screens/36-group-volume-individual.png" alt="One physical output selected in the group mixer" width="360">

Read [Roon groups and the group mixer](roon-groups.md) for the exact first-step,
display-off, mixed Bridge and groups-larger-than-three behaviour.

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
or becomes unavailable, RoonPilot opens the picker as soon as Roon reports at
least one enabled zone. It never silently controls another room. Selecting one
closes the picker and rebuilds the player for that zone.

## Quick Settings

Swipe up on Now Playing.

<img src="../assets/device-screens/09-quick-settings.png" alt="Quick Settings home" width="360">

On the home page, turning the ring changes the highlighted section; touch opens
it. On a setting page, touch a row to select it and turn the ring to adjust its
value. Press **Save & Close** to persist the changes. Leaving without saving
restores the previous accent colour and settings. After 30 seconds without
touch or ring input, Quick Settings closes automatically.

### System

The first entry is read-only and shows:

- the IP address used to open RoonPilot's local website;
- the connected Roon Server name;
- the running firmware version;
- **Ready**, **Wi-Fi offline**, **Roon offline** or **Approval needed**.

Use the back control or swipe down to return to the Quick Settings home page.

### Display

- active brightness;
- cover-derived background intensity;
- accent colour palette;
- Classic, Focus, Orbit or Aura player screen;
- touch-feedback vibration enabled/disabled and strength from 1 to 100%.

Touch feedback acknowledges on-screen actions and uses a distinctive double
pattern for lock/unlock. Turning the physical ring never vibrates.

### Volume Controls

- native Roon-step multiplier;
- maximum volume where endpoint limits are available;
- acceleration on/off;
- standard/reversed direction.

### Clock

- Station or Digital face;
- regional time zone with automatic daylight-saving changes;
- day and night brightness;
- day-start and night-start times in 30-minute increments.

Full dimming, idle delays, screen rotation and “Never” choices remain available
on the web page because they are rarely changed during listening.

### IR Bridges

This read-only entry appears only when the optional Bridge feature is enabled.
It shows the Bridges required by the selected zone or group, including friendly
name, connection/transport, Wi-Fi state and available signal values.
**Automatic zone control** means that RoonPilot follows the saved routes of the
current zone or all members of the current group. There is at most one BLE
link, while several required Bridges can remain ready over their independent
authenticated Wi-Fi paths. Unneeded saved Bridges do not have to stay connected.

<img src="../assets/device-screens/30-quick-ir-bridges.png" alt="IR Bridges status in Quick Settings" width="360">

Pairing, profile changes and firmware maintenance remain on the local web page.

## Playlists

Tap the optional Playlist button to fetch the selected zone's Roon playlists.
Turn the ring or swipe to change pages, then touch a row to select it. Long names
are limited to two complete lines. The final confirmation asks whether to start
the playlist normally or with shuffle; either choice replaces that zone's
current queue.

<img src="../assets/device-screens/31-playlists.png" alt="Playlist picker with two-line names" width="360">

The list is requested only when opened. If Roon is temporarily slow, RoonPilot
shows the busy/error state and remains usable rather than waiting indefinitely.
The ordering saved on the Music web page also applies here: Name, Track count or
Roon-delivered Modified order, ascending or descending. This Roon interface does
not expose a dependable modification date or total playlist duration, so
RoonPilot does not invent either value.

## Live Radio

Tap the optional radio button, browse Roon's saved Live Radio stations with the
same ring/touch controls and touch a station to start it. Radio starts without a
shuffle question and replaces the selected zone's current playback.
The Name order saved on the Music web page, ascending or descending, is also
used on the device.

<img src="../assets/device-screens/32-live-radio.png" alt="Roon Live Radio picker" width="360">

## Control lock

Hold the centre of the display for about 1.2 seconds. **Controls locked** appears.
Touch, swipe and ring input are then ignored. Attempting an action shows the
locked notice instead of sending a Roon command. Long-press the centre again to
unlock.

The lock is useful when moving or cleaning the device. It does not lock the
local website or other Roon remotes.

## Immediate display-off

With the large centre Play/Pause area disabled, double-tap the centre of an
active display with two short, stationary taps.
RoonPilot switches the backlight fully off and keeps it off even when playback,
track metadata or the local website changes. This is a display-only state: Roon,
Wi-Fi and the local website continue running, so it is not deep sleep.

The next touch or ring movement wakes the display. That first wake input is
consumed and never activates the control below it or changes volume. Repeat the
intended command after the display is visible. The double-tap is distinct from
the approximately 1.2-second centre hold for control lock/unlock and is not
available while the large Play/Pause area is enabled. Battery
calibration keeps control of the display, so the shortcut is ignored while a
calibration screen is active.

## Dim, idle clock and black screen

- **Dim after** lowers the player brightness after inactivity.
- **Idle display after** changes inactive playback to the selected clock or
  black screen.
- **Idle timing starts after** chooses whether that delay begins after the last
  local touch/ring input or only when the selected zone stops playing.
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
