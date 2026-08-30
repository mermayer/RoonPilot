# Beginner validation test plan

**English** · [Deutsch](de/test-plan.md)

Use this plan for a clean version 1.0.2 cycle. Record pass/fail, date, firmware
checksum and observations for every section. Do not combine unexplained failures
with later tests.

## Test record

| Field | Value |
| --- | --- |
| Hardware order code/colour | |
| Factory battery or own battery | |
| Main Factory SHA-256 | |
| Main OTA SHA-256 | |
| Companion SHA-256 | |
| Browser/OS | |
| Roon Server version/platform | |
| Wi-Fi/AP model and approximate RSSI | |
| Test date | |

## A. Arrival and factory preservation

- [ ] Inspect enclosure, LCD, USB-C, ring and battery condition.
- [ ] Confirm original hardware boots before modification.
- [ ] Identify ESP32-S3 USB orientation with `chip-id`.
- [ ] Read exact 16 MB ESP32-S3 factory backup.
- [ ] Calculate/store SHA-256 and make a second copy.
- [ ] Rotate USB and identify classic ESP32.
- [ ] Read exact 4 MB companion backup.
- [ ] Calculate/store SHA-256 and make a second copy.

## B. Clean browser installation

- [ ] Verify the published Factory checksum.
- [ ] Connect the ESP32-S3 side.
- [ ] Open the separately supplied HTTPS validation installer.
- [ ] Confirm it clearly warns about two processors.
- [ ] Confirm the browser sees the correct port.
- [ ] Install and observe erase/write/verify completion.
- [ ] Confirm boot screen and version 1.0.2.
- [ ] Confirm the companion was not changed.

## C. First-time Wi-Fi

- [ ] `RoonPilot-Setup-XXXXXX` appears with the documented password.
- [ ] Captive page opens or `192.168.4.1` works.
- [ ] Only Wi-Fi fields/actions are exposed.
- [ ] Enter a deliberately wrong password.
- [ ] Recovery AP returns after approximately 45 seconds.
- [ ] Correct credentials and connect successfully.
- [ ] Restart and confirm automatic reconnection.
- [ ] Confirm Network page shows changing real RSSI, not always full.

## D. Roon discovery and authorization

- [ ] Single-server automatic discovery works.
- [ ] RoonPilot appears as `RoonPilot` by `Senior Coder` in Extensions.
- [ ] Enable and confirm the pairing screen clears.
- [ ] Restart and confirm pairing persists.
- [ ] If possible, test two discovered servers and explicit selection.
- [ ] Test manual fixed server address/port.
- [ ] Test unavailable server and return to automatic mode.

## E. Zones

- [ ] All Roon zones initially appear.
- [ ] Select the intended primary zone.
- [ ] Hide/show several zones and save.
- [ ] Confirm an unsaved draft survives periodic status refresh.
- [ ] Confirm the primary cannot be left hidden.
- [ ] Confirm only shown zones appear on the display.
- [ ] Use touch and ring/page gestures through the whole list.
- [ ] Test zone unavailable and no-zone screens.

## F. Player layouts and transport

For Classic, Focus and Orbit:

- [ ] layout matches its website preview;
- [ ] artwork and background gradient update on track change;
- [ ] title makes one marquee pass only when too long;
- [ ] artist Unicode test includes `a-ha` without replacement box;
- [ ] play/pause icon follows subscribed Roon state;
- [ ] previous/next buttons work;
- [ ] swipe left/right maps to next/previous;
- [ ] progress and time layout stay inside the round edge;
- [ ] Wi-Fi and battery symbols stay inside the visible circle.

## G. Ring and safety limit

- [ ] Standard and Reversed direction.
- [ ] All native-step multipliers: 1, 2, 3, 5 and 10.
- [ ] A Roon `number` output is detected automatically and shown as percent.
- [ ] A Roon `db` output is detected automatically and shows the actual value,
  including a negative value such as `-40 dB`.
- [ ] First movement on a dB output starts at the current Roon value, not zero.
- [ ] On a 1 dB native output, multiplier `2` changes 2 dB per detent before
  acceleration.
- [ ] An `incremental` output receives relative commands without a fabricated
  absolute value.
- [ ] A dB output without reported bounds retains text and relative control but
  disables the absolute web slider, arc/range and local maximum cap.
- [ ] Acceleration off/on.
- [ ] With reported bounds, Maximum volume prevents ring and web control from
  crossing the set value.
- [ ] Volume overlay appears and closes cleanly.
- [ ] First ring movement from black screen wakes without volume change.

## H. Quick Settings and control lock

- [ ] Swipe up opens Quick Settings.
- [ ] Touch opens Display/Volume/Clock sections.
- [ ] System shows the actual IP, Roon Server, state and running firmware version.
- [ ] Ring changes selected values.
- [ ] Save & Close persists after restart.
- [ ] Leaving without save restores previous values.
- [ ] Centre hold around 1.2 seconds locks.
- [ ] Touch, swipe and ring are blocked with visible feedback.
- [ ] Centre hold unlocks.

## I. Display, dim and clocks

- [ ] Active and dim brightness visibly differ.
- [ ] Dim after each value and Never.
- [ ] Idle display after each value and Never.
- [ ] Black idle wakes by touch and ring, suppressing the first command.
- [ ] Station clock runs forward and with correct orientation.
- [ ] Digital clock shows correct time/date.
- [ ] Select the local regional time zone and verify a known time against an
  independent clock.
- [ ] Verify one winter and one summer date use the expected standard/DST rule.
- [ ] Touch clock returns to player.
- [ ] Day/night brightness changes at configured times.
- [ ] Clock remains visible instead of later becoming black.
- [ ] Entire display/touch rotation 180 degrees works.
- [ ] Every accent colour is legible.

## J. Local website

- [ ] Desktop and mobile navigation.
- [ ] Initial values arrive promptly.
- [ ] Periodic status refresh remains responsive.
- [ ] All seven pages save and reload correctly.
- [ ] Buttons have no unintended text underlines.
- [ ] Player previews are clean, especially Orbit.
- [ ] Export includes every non-secret setting.
- [ ] Export omits password/token/secrets.
- [ ] Import validates and restores all supported settings.
- [ ] Diagnostics download works.
- [ ] Restart keeps configuration.
- [ ] Typed factory reset removes it and returns to AP.

## K. OTA and recovery

- [ ] Automatic check enabled: boot performs one signed-manifest check.
- [ ] Automatic check disabled: no scheduled check; **Check now** still works.
- [ ] Device notice enabled/disabled independently of online checking.
- [ ] Every web page shows the prominent update notice with installed and
  available versions when a newer release exists.
- [ ] Clicking the web notice opens **System → Firmware update** directly.
- [ ] Device notice appears only on an idle Now Playing screen.
- [ ] It does not interrupt zone picker, Quick Settings, volume, onboarding,
  pairing, clock/idle, control lock, calibration or OTA.
- [ ] **LATER** dismisses it; a ring turn dismisses it and still changes volume.
- [ ] Reboot/dismissal cannot produce a second device notice within 24 hours.
- [ ] No check or notification downloads/installs firmware automatically.
- [ ] Signed online OTA changes from slot A to B.
- [ ] Confirm settings and pairing persist.
- [ ] A second signed online OTA changes back to the other slot as planned.
- [ ] Signed stable manifest, size and checksum accepted; local upload is unavailable.
- [ ] Interrupted/invalid boot produces rollback.
- [ ] Factory Web Installer restores a deliberately clean ESP32-S3.
- [ ] Original 16 MB backup can be restored if required.

## L. Companion low-power firmware

- [ ] Reconfirm original 4 MB backup and metadata.
- [ ] Rotate USB and verify classic ESP32.
- [ ] Write companion image only to classic ESP32.
- [ ] Rotate back; RoonPilot still works.
- [ ] Confirm DAC path remains silent/unpowered as intended.
- [ ] Restore original companion backup once as a recovery proof.

## M. Battery calibration

- [ ] Read the full battery document.
- [ ] Prepare via web and start only after USB removal on device.
- [ ] Fixed 50% screen, Wi-Fi on, Roon/web stopped.
- [ ] Let hardware shut down naturally.
- [ ] Next boot presents recovered result.
- [ ] Accept one valid and discard one deliberately interrupted result.
- [ ] Complete at least two valid comparable runs; three preferred.

## N. Deep sleep

- [ ] Enable deep sleep and select the shortest timeout.
- [ ] Confirm the Power badge says Waiting while the selected zone plays.
- [ ] Pause the selected zone and confirm the badge says Armed.
- [ ] Confirm the LCD/backlight, website and Roon connection stop after timeout.
- [ ] Wake by touch; confirm a full boot, Wi-Fi/Roon reconnection and settings.
- [ ] Enter deep sleep again and wake by turning the ring.
- [ ] Confirm the wake gesture does not send transport or volume.
- [ ] Confirm playing/loading/buffering prevents sleep.
- [ ] Confirm no selected/available zone prevents sleep.
- [ ] Confirm first-time/recovery AP setup prevents sleep.
- [ ] Confirm local and online firmware operations prevent sleep.
- [ ] Confirm battery preparation/running/review prevents sleep.
- [ ] Repeat one sleep/wake cycle on battery after USB validation.

## Completion

Version 1.0.2 should leave validation status only when all safety-critical flash,
recovery, secret-removal and rollback tests pass, and all remaining known issues
are explicitly documented.
