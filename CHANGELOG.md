# RoonPilot changelog

**English** · [Deutsch](CHANGELOG.de.md)

This document provides a user-facing overview of RoonPilot releases. Full
details for release 2.0.0 are in the
[English release notes](docs/release-notes-2.0.0.md). Development-only changes
without a visible user impact are intentionally omitted.

**Current public firmware: 2.0.0**, released on **4 October 2026** together
with the optional **IR Bridge firmware 1.0.0**.

## Contents

- [2.0.0 — 4 October 2026](#200)
- [Project release 1.0.5 — firmware 1.0.2](#project-release-105--firmware-102)
- [Project release 1.0.4 — firmware 1.0.1](#project-release-104--firmware-101)
- [Firmware 1.0.0](#firmware-100)

## 2.0.0

Released 4 October 2026. Optional IR Bridge firmware: 1.0.0.

### Unified edition

- One shared firmware replaces the separate Bridge and non-Bridge editions.
- IR Bridge and Bluetooth start disabled on a new installation and remain
  entirely optional for Roon-only users.
- Enabled and disabled Bridge configurations and older configuration backups
  remain compatible.

### IR Bridge

- Complete optional IR control for volume, mute and power.
- Up to four saved Bridges. One Bluetooth link is shared; other assigned
  Bridges can remain available at the same time over authenticated Wi-Fi.
- Automatic selection from the current Roon zone and a temporary maintenance
  selection.
- Guided pairing, a visible discovery cancel action and clear saved/paired/
  connected states.
- A persistent, Bridge-independent IR profile library with unique names;
  learn on any receiver-equipped Bridge and assign one profile to several
  Bridges. One backup includes the library and separate zone/Bridge routes.
- Display and **IR Bridges** Quick Settings status for transport, signal, Wi-Fi
  and firmware.
- Automatic Bluetooth/Wi-Fi recovery without turning brief interruptions into
  disruptive full-screen messages or repeated event-log entries.
- Fast IR volume control without multi-second trailing commands and with
  immediate direction changes.
- Separate, manually started Bridge updates with RoonPilot/Bridge compatibility
  checks.

### Roon, zones and music

- Up to 32 visible or hidden Roon zones.
- Reliable automatic zone selection when the previous target disappears.
- Fast native volume control without delayed **Try again** notices or trailing
  changes.
- Correct presentation of dB, unitless and relative Roon values.
- Grouped Roon zones control every member through its saved Roon or IR route.
  A temporary group mixer also allows one physical output to be adjusted on
  its own.
- New Music page for Roon playlists and My Live Radio.
- Normal or shuffled playlist playback and direct radio start.
- Playlist and radio sorting shared by the website and device.
- Dedicated, independently configurable Playlists and Live Radio display
  shortcuts.

### Display and controls

- Classic now-playing with elapsed time, total length and a cover progress ring.
- Fixed-width digits and a calm once-per-second time display.
- Amber volume information panel instead of a complete screen change.
- Larger, better-spaced Power, Mute, Playlists and Live Radio buttons.
- Refined Focus and Orbit layouts plus the new cover-free **Aura** layout.
- Optional large centre Play/Pause touch area.
- Stronger visual button feedback.
- German and English user interface.
- Expanded Unicode coverage for European scripts, Greek, Cyrillic, symbols and
  selected emoji.
- Substantially broader international time-zone selection.

### Touch feedback

- Optional vibration for touchscreen buttons.
- Continuously adjustable 1–100 percent strength on the website and device.
- Double pulse for control lock and unlock.
- No vibration while turning, waking the display or receiving automatic notices.

### Zone Management and HTTP

- Per-zone volume step, Power, Mute and Bridge settings.
- Up to three named HTTP ON/OFF command pairs per zone.
- Independent direction and pair switches that retain disabled entries.
- Confirmed test buttons for individual saved HTTP commands.
- HTTP actions work without an IR Bridge and are included in configuration
  backup.

### Power and battery

- **Performance**, **Balanced** and **Battery saver** CPU modes.
- **Automatic**, **Installed** and **Not installed** battery-hardware choices.
- Adjustable battery/USB detection thresholds.
- Lightning symbol for detected external USB power.
- Display timeout based on last interaction or the end of zone playback.
- Clearer calibration guidance and explanation of computer USB versus a
  dedicated charger.
- Calibration progress stays in retained RTC memory instead of minute-by-minute
  flash writes. Supply protection stops the running calibration before unstable
  operation; it does not force normal USB changes into protective sleep.
- A completed reference is accepted only on stable USB power. Interrupted runs
  cannot overwrite the previous accepted result.

### Backup and restore

- One backup holds controller settings, the IR library and separate Bridge routes.
- An offline or failing Bridge no longer aborts restoration on other devices.
  Unconfirmed transfers are deferred with a clear warning.
- Unverified offline routes are not activated. Once the Bridge returns, the user
  can transfer the saved library profile or repeat the restore.

### Website, log and help

- Fully bilingual desktop and mobile interface.
- Reorganised IR Bridge page and new Music page.
- Direct links to project, documentation, Web Installer, GitHub,
  troubleshooting and Send Me a Coffee.
- Actionable help for an expired settings session.
- Local event log with filtering, download and clear actions.
- Additional recording of important settings, connection and operation errors.
- Faster, more resilient pages during simultaneous requests.
- Independent web-response and event-log downloads prevent a slow read from
  blocking unrelated status requests. Genuine device failures remain distinguishable
  from cancelled downloads or navigation.
- Compact System/Music layouts and a RoonPilot browser favicon.

### Stability and updating

- Quiet automatic recovery from brief Roon interruptions.
- Bridge background status work isolated from Roon communication.
- Several restart causes removed from Play/Pause, Quick Settings, display-save,
  playlist loading and web operation.
- Safe settings storage without partially accepted configuration.
- Substantially more working-memory headroom without reducing responsiveness.
- Manually confirmed updates with startup validation and return to the previous
  firmware if a new image cannot start correctly.
- Complete group-aware Bridge failure/recovery feedback, route-conflict blocking
  after regrouping, and clean return from Bridge maintenance.
- Documented clean USB return to the original 1.0.2, with warnings about erased
  settings, separate backups and avoiding calibration under the older version.

### Installation and documentation

- Simpler, separate Windows and macOS instructions.
- Web Installer first; Device Manager and System Report only as optional checks.
- Clear device labels for ESP32-S3 and the Companion ESP32.
- Plain instruction to turn the USB-C plug by 180 degrees when required.
- Guided Web Installer for the optional Companion Sleep firmware.
- A separate, clearly identified Web Installer for the IR Bridge.
- Original-firmware backup is explained but is not an installation requirement.
- Extensive Bridge examples and diagrams for selection, zones and transports.
- Updated native/IR volume illustrations show the current amber popup over the
  player, not the removed full-screen dial.
- Illustrated 3D-print guides and model previews: four stand parts including
  the rear panel, plus the Bridge enclosure and both foot lengths.

## Project release 1.0.5 – firmware 1.0.2

- Broader regional time-zone selection with automatic daylight-saving changes.
- Centre double-tap for immediate display off and wake-only handling of the
  next touch or rotary movement.
- Reliable clock transition while playback continues.
- Automatic 30-second Quick Settings timeout.
- Firmware version in **Quick Settings → System**.
- Faster local website and more reliable zone/artwork loading.
- Restored route back from the firmware-update page.
- Consistent English runtime messages and endpoint-neutral volume guidance.

The original complete notes are in
[firmware 1.0.2 Release Notes](docs/release-notes-1.0.2.md).

## Project release 1.0.4 – firmware 1.0.1

- Visible available-update notification.
- Separate automatic-check and display-notification options.
- Update installation remained an explicitly confirmed action.
- Automatic detection of Roon `number`, `db` and `incremental` volume types.
- Real dB presentation using the zone's reported step and limits.
- Signed updating with successful-start validation.

The original complete notes are in
[firmware 1.0.1 Release Notes](docs/release-notes-1.0.1.md).

## Firmware 1.0.0

The initial firmware introduced direct local Roon control, the rotary/touch
interface and browser-based setup. Its original details remain available in the
[firmware 1.0.0 Release Notes](docs/release-notes-1.0.0.md).
