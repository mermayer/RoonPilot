# RoonPilot firmware 1.0.0

**English** · [Deutsch](release-notes-1.0.0.de.md)

This is the first complete RoonPilot validation build for the Waveshare
`ESP32-S3-Knob-Touch-LCD-1.8`. It is published so the full installation,
recovery and everyday-use test plan can be repeated from a clean device.

## Included

- direct Roon discovery, authorization and zone control without a companion
  service, bridge or cloud account;
- Classic, Focus and Orbit player screens with artwork-derived backgrounds;
- touch transport, horizontal previous/next gestures and rotary volume;
- configurable zone visibility and primary control zone;
- station and digital clocks with separate day/night brightness schedules;
- on-device Quick Settings for display, clock, accent colour and volume;
- configurable maximum-volume safety limit;
- long-press device control lock with visible locked-operation feedback;
- first-start Wi-Fi access point and automatic recovery after invalid
  credentials;
- local configuration website, safe export/import and diagnostics;
- device-specific battery runtime calibration with recoverable checkpoints;
- guarded ESP32-S3 deep sleep while the selected zone is paused/stopped, with
  touch and rotary-ring wake-up;
- local A/B OTA, signed online OTA, boot validation and rollback;
- browser-based factory installation for the primary ESP32-S3;
- separate low-power firmware for the board's companion ESP32.

## Files

- `roonpilot-factory-v1.0.0.bin` is the complete primary ESP32-S3 image
  for a blank device, browser installation or recovery.
- `roonpilot-ota-v1.0.0.bin` is the application-only image for an
  existing RoonPilot through its local firmware page.
- `roonpilot-companion-sleep-factory-v1.0.0.bin` is the separate image
  for the classic ESP32 companion processor. Never write it to the ESP32-S3.
- `roonpilot-complete-v1.0.0.zip` is the recommended complete download; it
  includes the firmware files, license texts, notices and SPDX SBOM.
- `SHA256SUMS.txt` contains the published file checksums.

## Licensing

RoonPilot-authored portions use PolyForm Noncommercial 1.0.0. Private and
other noncommercial use is permitted; commercial use requires separate
written permission. The license does not require publication of modified
source, but redistribution must retain the supplied license and notices.
Third-party portions keep their independent licenses.

## Privacy

The public Factory and OTA images contain no development Wi-Fi SSID, Wi-Fi
password, Roon Server address, pairing token or private signing key. A new
installation starts the protected `RoonPilot-Setup-XXXXXX` access point.

## Before testing

The USB-C plug orientation selects one of two independent processors. Verify
the detected chip before every backup or write. Back up the complete 16 MB
ESP32-S3 flash and the complete 4 MB companion ESP32 flash before replacing
factory firmware.

## Validation still required

- clean Factory installation through current desktop Chrome and Edge;
- first-start AP setup plus wrong-password recovery after approximately
  45 seconds;
- Roon authorization, multiple-server selection and zone handling;
- every display, touch, swipe, encoder and long-press-lock workflow;
- deep-sleep blocking during playback/setup/update/calibration plus touch and
  ring wake/reconnection;
- local OTA in both A/B directions and settings retention;
- signed online OTA and interrupted-update recovery;
- automatic rollback after a deliberately invalid boot;
- companion backup, low-power firmware and factory restore;
- at least two complete battery-calibration runs under the documented profile.

Report documentation or functional problems through GitHub Issues. Remove IP
addresses, Wi-Fi names, Roon metadata and other private information from logs
or screenshots before attaching them publicly.
