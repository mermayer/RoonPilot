# RoonPilot firmware 2.0.0

**English** · [Deutsch](release-notes-2.0.0.de.md)

This is the largest RoonPilot update since firmware 1.0.2. It brings the
previously separate IR Bridge work into one shared RoonPilot firmware while
keeping the Bridge entirely optional. Display operation, music browsing, zone
management, power controls, diagnostics and everyday resilience have also
received substantial improvements.

> **Documentation preview:** the currently published firmware remains **1.0.2**.
> These notes describe the upcoming **RoonPilot 2.0.0** and optional
> **IR Bridge 1.0.0**. Their firmware and installers will be released together.

## Contents

- [One unified RoonPilot firmware](#one-unified-roonpilot-firmware)
- [Optional IR Bridge](#optional-ir-bridge)
- [IR profiles, learning and backup](#ir-profiles-learning-and-backup)
- [Restore with an offline Bridge](#restore-with-an-offline-bridge)
- [Bridge connection and IR control](#bridge-connection-and-ir-control)
- [Roon playlists and Live Radio](#roon-playlists-and-live-radio)
- [Zones, group mixer and native Roon control](#zones-and-native-roon-control)
- [Additional HTTP power commands](#additional-http-power-commands)
- [Player layouts and display](#player-layouts-and-display)
- [Language, text and time zones](#language-text-and-time-zones)
- [Touch vibration](#touch-vibration)
- [Power and battery](#power-and-battery)
  - [Safer runtime calibration](#safer-runtime-calibration)
- [Local website](#local-website)
- [Event log and diagnostics](#event-log-and-diagnostics)
- [Firmware updates and compatibility](#firmware-updates-and-compatibility)
- [Stability and corrections](#stability-and-corrections)
- [Installation and documentation](#installation-and-documentation)
- [3D-printed stand and Bridge enclosure](#3d-printed-stand-and-bridge-enclosure)
- [Privacy, project character and support](#privacy-project-character-and-support)
- [Known limitations](#known-limitations)

[Changelog and earlier releases](../CHANGELOG.md) ·
[User documentation](../guides/README.md)

## One unified RoonPilot firmware

- Only one RoonPilot firmware is needed going forward. Separate Bridge and
  non-Bridge editions are no longer required.
- **IR Bridge & Bluetooth** start disabled on a new installation. People who
  use only Roon do not need to configure anything.
- While disabled, no Bridge connection, scan, status request or Bridge update
  check is started. RoonPilot uses the selected zone's native Roon controls.
- Saved Bridge pairings, zone routes and settings remain stored while the
  feature is off and become available again after it is re-enabled.
- Configuration backups work with Bridge and Bluetooth either enabled or
  disabled. Older backups remain usable and missing new options receive safe
  defaults.

## Optional IR Bridge

- RoonPilot can control volume, mute and power on equipment that does not
  expose suitable controls through Roon.
- One RoonPilot can remember up to **four IR Bridges**. It maintains one BLE
  link, while other assigned Bridges can remain usable at the same time over
  their own authenticated Wi-Fi paths. Grouped zones may therefore control
  several physical outputs with different Bridge routes.
- Several zones can use different IR profiles on the same Bridge. Selecting a
  zone assigned to another Bridge changes the target automatically.
- Native Roon zones require no active Bridge. An unavailable Bridge never
  causes a command to be sent through another Bridge or another control path.
- **Automatic Zone Control** always follows the zone selected on RoonPilot.
  **Manage** temporarily selects a specific Bridge for learning, profiles,
  Wi-Fi, backup or firmware maintenance. **Return to zone control** ends that
  maintenance selection.
- The web page clearly distinguishes **saved**, **paired**, **connected**,
  **connecting** and **not connected**. A saved Bridge that is temporarily
  offline does not need to be paired again.
- Bridge discovery has a visible cancel action and always provides a route
  back to normal zone control.
- A lost or failed Bridge can be removed locally after explicit confirmation,
  even when it can no longer be reached.

## IR profiles, learning and backup

- Named IR profiles form a permanent library on RoonPilot, independent of
  Bridge assignments. Names are unique; local numeric slots on different
  Bridges are never treated as interchangeable.
- Volume up/down, mute and power on/off can be learned through any paired
  Bridge with an IR receiver, tested and saved to that library. Other Bridges
  only need an IR transmitter. Saving a zone route transfers and verifies the
  chosen profile on its target Bridge; one profile can serve several Bridges.
- **Create Backup** produces one JSON file with RoonPilot settings, the IR
  profile library, learned commands and separate zone/Bridge assignments.
  Export reads RoonPilot's stored library, so a Bridge need not be online.
- Wi-Fi passwords, Roon authorization, pairing and transport keys are not
  exported. HTTP action URLs are included and may contain private parameters.
- The Bridge website is organised into clear sections for connection,
  profiles, learning, zones, backup and firmware maintenance. Navigation and
  actions remain accessible on smaller screens.

## Restore with an offline Bridge

- An unreachable Bridge no longer aborts the whole restore. RoonPilot restores
  its own settings and profile library and continues with other selected Bridges.
  A Bridge lost during transfer is also deferred instead of blocking the rest.
- The progress window can finish at **100% with a warning** listing unconfirmed
  Bridge transfers. This is different from an interrupted restore caused by an
  invalid file, a storage error or a route conflict.
- An offline Bridge's route is restored only when this RoonPilot already knows
  a verified assignment for that identical profile. An unfamiliar or changed
  assignment is not activated; its existing route stays unchanged.
- Deferred profiles remain in the library. Once the Bridge is reachable, import
  the same backup again or transfer the library profile and save the route.
  Reconnecting alone does not guarantee that deferred assignments are applied.
- Profile deletion and library synchronisation avoid unnecessary connection
  switching and repeated routine log messages.

See [configuration backup and restore](../guides/configuration-backup.md).

## Bridge connection and IR control

- Bluetooth LE and the Bridge's authenticated Wi-Fi connection are managed as
  available transports. A temporarily unhealthy path can recover in the
  background while the other remains available.
- Status shows the transport in use, signal levels, Wi-Fi state, Bridge
  firmware and Bridge power source.
- The on-device **IR Bridges** Quick Settings page shows the active target,
  connection state, saved Bridges and essential radio information.
- Brief Roon, Wi-Fi and Bridge reconnects remain discreetly in the background
  instead of showing a full connection screen for every short interruption.
- Harmless radio-state changes no longer produce repeated “Bridge connected”
  notices.
- Group status includes every assigned Bridge, not just the primary Bluetooth
  target. Offline and recovery feedback belongs to the affected output, and a
  returning Bridge becomes usable again without re-pairing.
- Background status requests are bounded and must not displace Roon traffic or
  IR commands.
- Fast rotary input is handled without a command queue continuing for several
  seconds after the ring stops. A sudden direction change is recognised
  immediately.
- Input belonging to an old zone or Bridge is not collected and replayed after
  the target changes.
- IR volume uses a temporary relative indication only. Because a Bridge cannot
  know the target equipment's absolute level, RoonPilot never invents one.

## Roon playlists and Live Radio

- The new **Music** page loads Roon playlists and stations saved under **My
  Live Radio**.
- A playlist can start normally or, after confirmation, with Roon shuffle.
  Live Radio starts without a shuffle prompt.
- Dedicated **Playlists** and **Live Radio** display buttons open compact lists
  on the device. Each shortcut can be enabled or disabled independently.
- Turn the ring to scroll and touch an entry to select it. Long names use at
  most two complete lines.
- A partially filled final page no longer contains meaningless grey placeholder
  cards.
- Playlists can be sorted by **Name**, **Track count** or Roon's delivered
  **modified order**, each ascending or descending. Live Radio can be sorted
  by station name.
- The saved order is identical on the website and on the RoonPilot display.
- Roon supplies neither a reliable playlist modification date nor total
  duration. RoonPilot states that limitation and does not fabricate values.
- Slow or delayed Roon replies are handled safely. A timeout does not start a
  playlist a second time and must not cause a restart or permanently disabled
  grey controls.

## Zones and native Roon control

- Up to **32 Roon zones** are supported and each can be shown or hidden on the
  device.
- Volume step, Power button, Mute button and optional IR route are stored per
  zone.
- For a grouped Roon zone, RoonPilot includes every member. Each output keeps
  its own volume step and saved native Roon or IR control route.
- The first rotary detent opens the group mixer without changing volume.
  Further turns initially control the complete group. Touch an output row to
  adjust only that output temporarily, or touch the group name to return to
  whole-group control.
- The group mixer shows the group name and up to three separate values, such
  as native volume, dB and relative IR steps. After eight seconds or a zone
  change, control automatically returns to the whole group.
- Larger, visually separated touch rows and heavier output names make individual
  members easier to select. Numeric volume, dB and IR feedback can coexist.
- A group with more than three members still controls all members in whole-group
  mode; only three rows fit in the popup. Individual selection is limited to the
  visible rows.
- Grouping and ungrouping preserve physical-output assignments. If changed
  membership produces conflicting routes, **CHECK ROUTES** and **STOP** prevent
  volume commands until the assignments are reviewed; there is no silent fallback
  from IR control to native Roon volume.
- If the selected zone disappears, RoonPilot opens the zone picker as soon as
  another zone becomes available. It no longer remains on **Loading zones** or
  a web-only instruction.
- A replacement zone can be selected and saved reliably from either the device
  or the website.
- Leaving the zone picker without changing the selection keeps the player in
  place instead of rebuilding the whole screen.
- Rapid native Roon volume changes are handled as one continuous interaction.
  **Try again** no longer appears after an already accepted rotary movement.
- Reversing direction does not discard the new input, and old changes do not
  continue after the ring stops.
- Roon `number`, `db` and `incremental` volume types are distinguished
  automatically. dB endpoints show real dB values, including `0 dB`.
  Unitless values remain unitless as they are in Roon, without a percent sign.

## Additional HTTP power commands

- Each zone can add up to **three named HTTP command pairs** alongside its
  normal Roon or IR power action, for example to control tablet power, a smart
  socket and an amplifier.
- **Enable HTTP** can be selected only while the zone's Power button is enabled.
- ON and OFF in every pair have independent switches. Turning a switch off
  retains the saved name and address.
- **+ Add command pair** creates a second or third pair; unused additional
  pairs can be removed again.
- Separate test buttons send exactly one selected saved command after a
  confirmation. They do not simultaneously operate Roon, IR or another HTTP
  target.
- A normal Power action processes enabled targets in their visible order. One
  unreachable target does not prevent attempts to reach the following
  independent targets.
- There is no trailing queue and no automatic retry of a command that may
  already have arrived.
- All labels, addresses and switches are included in configuration backup.
  This feature does not require an IR Bridge.

## Player layouts and display

- **Classic** now shows elapsed time on the left and total length on the right.
  The former white cover border also serves as a thin, more visible progress
  ring without reducing cover size.
- Track time uses fixed-width digits and advances visibly once per second.
  Periodic reconciliation with Roon prevents long-term drift.
- Volume changes no longer replace the complete player. A calm amber information
  panel appears over the existing layout instead.
- Power, Mute, Playlists and Live Radio buttons are larger and spaced farther
  apart.
- **Focus** and **Orbit** have received visual refinements.
- New **Aura** is a cover-free player with large title and artist information;
  its background colours are still derived from the current cover.
- Aura shows the current value prominently for native volume control. It leaves
  this area empty for IR control because the Bridge cannot report an absolute
  level.
- An optional large centre touch area provides Play/Pause for users who find
  the small buttons difficult to hit. Visible buttons and long-press control
  locking retain priority.
- With the large Play/Pause area disabled, a centre double-tap continues to
  turn the display off immediately.
- Buttons provide clearer visual feedback with a stronger glow when touched.

## Language, text and time zones

- The complete RoonPilot interface can switch between **German** and
  **English**, including the website, device menus, status text and errors.
- Titles, artists, zones, playlists and radio names remain intact as Unicode.
  The display covers European Latin scripts, Greek, Cyrillic, common symbols
  and a selected set of frequently used emoji.
- The time-zone selector now covers substantially more regions, including
  Singapore and other international locations.
- Daylight-saving changes follow the selected regional rule automatically.
- Asian writing systems with very large character sets are not yet included
  in this release.

## Touch vibration

- The built-in vibration unit can be enabled or disabled for touch input.
- Strength can be adjusted continuously from 1 to 100 percent and tested from
  both the website and **Quick Settings → Display → Touch feedback**.
- Active touchscreen buttons produce a short pulse. Long-press lock and unlock
  in the display centre produce a double pulse.
- Rotary input deliberately never vibrates, including menus, playlists and the
  zone picker.
- Wake-only touches, automatic status notices, updates and battery calibration
  remain silent.
- Feedback confirms the touch, not successful execution by Roon or an IR
  target.

## Power and battery

- **Power** now offers **Performance**, **Balanced** and **Battery saver** CPU
  modes. RoonPilot can temporarily use full performance for short demanding
  operations.
- CPU mode does not enable Wi-Fi or Bluetooth power saving and can be changed
  back without restarting.
- **Automatic**, **Installed** and **Not installed** describe whether the unit
  contains battery hardware. Not installed removes the battery icon,
  information and calibration section.
- Automatic enables battery information only after a genuine USB-to-battery
  transition has been observed. It cannot prove that a battery is absent;
  **Not installed** provides that explicit choice.
- Battery/USB detection thresholds are adjustable for the individual device
  and its power supplies.
- A lightning symbol in the battery icon indicates detected external USB
  power. It is not proof that charging is actually taking place.
- The Power page displays the measured supply voltage to help tune the
  thresholds.
- A computer USB port can provide a lower voltage than a dedicated charger and
  may not charge the battery completely. Battery calibration therefore
  recommends a stable charger.
- The display timer can start after the last interaction or only when the
  selected zone stops playing.
- Clock, black display and Deep Sleep remain independent choices. Display off
  keeps Wi-Fi and Roon connected; Deep Sleep reconnects after wake.

### Safer runtime calibration

- The measurement no longer writes a flash checkpoint every minute. Progress
  stays in retained RTC memory; application flash writes and erases are blocked
  throughout the running calibration.
- A low measured system supply ends calibration in protective Deep Sleep instead
  of deliberately waiting for the battery hardware to cut power. This software
  cutoff applies **only during calibration**, not during normal USB changes.
- Calibration stops below **3.70 V for 500 ms**, or at **3.50 V or lower** at the
  next measurement. These are system-rail readings, not battery-cell voltage.
- After a calibration cutoff, a stable USB supply of at least **4.28 V for three
  seconds** is required to resume. Supply checks occur every 30 seconds, so the
  display may remain black for about **33 seconds** after reconnecting power.
- A completed reference of at least five minutes is saved only after the user
  accepts it on stable USB power. Interrupted runs cannot replace the previous
  accepted reference. Nothing is accepted automatically.
- Low or invalid supply readings also block unsafe flash writes in normal use,
  but do not activate calibration protective sleep. Writes resume once valid,
  stable power is available.
- The board measures its regulated system rail, not the battery cell. Calibration
  records a reference runtime; it is not a capacity meter or a precise remaining
  percentage. Software protection does not replace the battery's hardware
  protection or electrically disconnect the cell.

See [battery status and runtime calibration](../guides/battery-and-runtime.md).

## Local website

- Navigation and all essential pages are available in German and English on
  desktop and mobile layouts.
- Overview provides clear links to the project website, documentation, Web
  Installer, GitHub, troubleshooting and **Send Me a Coffee**.
- **Music** combines Playlists and Live Radio with sorting and destination-zone
  information.
- **Zone Management** brings visibility, volume, buttons, Bridge assignment
  and HTTP actions together for every zone.
- The IR Bridge page has been reorganised into compact, logical sections rather
  than a long series of oversized cards.
- An expired settings session now states that nothing was saved and recommends
  **Ctrl + F5** on Windows or **Cmd + Shift + R** on macOS.
- Page loading, lists and simultaneous status requests are more resilient. If
  working memory is temporarily unavailable, the existing configuration is
  preserved and the page asks the user to try again later.
- **Power policy** now describes the selected operating mode instead of showing
  the misleading value **Disabled**.
- System and Music use more compact layouts, including single-row playlist
  entries where space allows and better-aligned system actions.
- A dedicated RoonPilot favicon identifies the device website in browser tabs
  and bookmarks.

## Event log and diagnostics

- **System → Event log** provides a local history of starts, Wi-Fi, Roon, IR
  Bridge, update and important operation failures.
- The log survives a normal software restart, although retention across a
  complete power loss is not guaranteed.
- Newest events appear first with boot number, uptime and local time whenever
  the clock was available.
- Repeated identical messages can be grouped so one continuing fault does not
  fill the entire log.
- **Warnings & errors** filters the view, **Download log** saves a copy for
  troubleshooting, and **Clear log** empties it after confirmation.
- Settings-save failures and other unexpected web operations are included
  whenever they can still be recorded safely.
- The log contains no passwords, keys, raw IR signals, music titles or complete
  memory dumps and sends nothing to an external service.

## Firmware updates and compatibility

- RoonPilot and IR Bridge have independent firmware versions and are updated
  separately.
- Before an update is activated, RoonPilot checks that the new version can work
  with the other device. An incompatible combination is rejected and the
  previously working firmware remains available.
- The normal order is RoonPilot first and Bridge second. If another order would
  be unsafe, a clear message prevents it.
- With several saved Bridges, known versions of all of them are considered,
  not just the currently connected unit.
- Update checking and display notification can be configured separately for
  RoonPilot and Bridge. Installation always requires explicit confirmation and
  never happens automatically.
- Interrupted or delayed update checks must not block the Roon connection or
  normal controls.
- Startup validation and automatic return to the previous firmware protect
  against an update that cannot start correctly.
- A documented USB return to the original **1.0.2** remains available if a user
  needs the previous release. A clean installation erases settings and IR
  profiles; keep version-specific backups separate and do not run battery
  calibration under 1.0.2.

See [updates and recovery](../guides/firmware-updates-and-recovery.md) and
[return to 1.0.2](../guides/return-to-1.0.2.md).

## Stability and corrections

- Brief Roon connection interruptions recover quietly in the background
  without repeatedly replacing the player with full connection screens.
- RoonPilot regularly verifies the live connection and reconnects after a real
  loss.
- Bridge status and update checks can no longer occupy Roon communication for
  extended periods.
- Restarts caused by Play/Pause, saving Display settings, rotating through
  Quick Settings or slowly loading large playlist catalogues have been fixed.
- A busy or temporarily slow Roon Server no longer leaves all controls
  permanently grey.
- Settings saves use safe recovery. If sufficient temporary space is not
  available, no partial or damaged configuration is accepted.
- Available working-memory headroom has been increased substantially without
  reducing display quality, network features or responsiveness. This lowers
  the risk of temporary shortages during concurrent web, Roon and Bridge work.
- Additional local health information supports long-running observation without
  transmitting data externally.
- Web responses and event-log downloads are handled independently, so a slow
  browser download does not hold up unrelated status requests. Parallel page
  requests are admitted more reliably and pages load more promptly.
- Ordinary navigation or cancelling a read-only download is distinguished from
  a failed device action. Genuine write errors and timeouts remain visible.
- Leaving temporary Bridge maintenance returns cleanly to zone control. Switching
  Bridge & Bluetooth off and on retains assignments and restarts the correct
  connection state instead of keeping an obsolete target.

## Installation and documentation

- Installation guides are clearly separated into **Windows** and **macOS** and
  lead with the simple Web Installer route.
- The Web Installer immediately lists attached devices. Device Manager or the
  macOS System Report is needed only as an optional cross-check when the
  expected device does not appear.
- Select **USB JTAG/serial debug unit** for ESP32-S3 devices and **USB serial**
  for the classic Companion ESP32. Common Windows and macOS labels are shown
  in the guides.
- If the wrong processor is connected, unplug USB, turn the USB-C plug by 180
  degrees and reconnect it. The Web Installer detects the newly attached
  device automatically.
- The optional Companion Sleep firmware also has a guided Web Installer.
  Detailed tool instructions remain available only for optional backup and
  special maintenance cases.
- The separate IR Bridge also has its own guided Web Installer, clearly
  separated from both the round RoonPilot installer and the Companion
  installer.
- Backing up the original firmware is explained but is not a prerequisite for
  installing RoonPilot.
- Bridge documentation includes diagrams and examples for Automatic Zone
  Control, maintenance selection and transports, plus the current hardware
  description using the Power IR transmitter.

## 3D-printed stand and Bridge enclosure

- The optional RoonPilot stand has **four downloadable STL parts**: body, bottom
  cover, USB-C holder and rear panel. Each download has a model-rendered preview.
- Illustrated assembly explains the thin foam strip, slightly movable magnetic
  USB-C coupler and holder secured with two small screws for later adjustment.
- The IR Bridge enclosure includes exterior and assembled-interior photographs,
  STL previews, lid and transmitter-cap parts, plus short and longer feet.
- Both guides recommend USB-C cables with short plug housings; the longer Bridge
  feet provide extra clearance when the connector needs it.

See [stand and STL downloads](../guides/roonpilot-stand.md) and
[Bridge enclosure and STL downloads](../guides/ir-bridge-enclosure.md).

## Privacy, project character and support

- RoonPilot is a non-commercial hobby project without advertising, hidden fees
  or sale of user data.
- Configuration and control stay local. RoonPilot sends no usage data to the
  developer.
- Anyone who voluntarily wants to support the project can use the **Send Me a
  Coffee** link on Overview and the project site.
- Support is available in the Roon Community thread and through GitHub Issues.

## Known limitations

- Only one BLE connection can be active at a time. Simultaneous control of
  additional Bridges requires their authenticated Wi-Fi paths to be available.
- A Bridge is currently managed by one RoonPilot. The proposed future
  master/slave model for sharing a Bridge is not part of this release.
- Roon provides neither a reliable playlist modification date nor total
  playlist duration.
- Asian writing systems are not yet included in the display font.
- Battery status is deliberately coarse and is not a precise state-of-charge
  meter.
- Additional HTTP power commands are intended for trusted devices on the local
  network.
