# RoonPilot firmware 1.0.1

**English** · [Deutsch](release-notes-1.0.1.de.md)

RoonPilot firmware 1.0.1 adds clear, privacy-conscious update awareness
without changing the manual installation policy. RoonPilot can report that a
new signed firmware version exists, but it never downloads or installs an
update without an explicit action by the owner.

## Update awareness

- a prominent update banner is shared by every page of the local web interface;
- the System page shows installed and available versions, the last check time
  and the current update status;
- selecting the banner opens **System -> Firmware update** directly;
- automatic manifest checks and the notice on the round display can be enabled
  or disabled independently;
- the on-device notice is shown at most once per 24 hours and can be dismissed
  with **LATER**, by touching it or by turning the rotary ring;
- pairing, initial setup, zone selection, Quick Settings, volume control,
  firmware installation, battery calibration, clock/idle mode and a locked
  device are never interrupted by the notice;
- no automatic firmware download or installation has been introduced;
- update-history persistence is performed only after the HTTPS worker has
  stopped, keeping flash/NVS access safe with its PSRAM-backed task stack.

## Native Roon volume handling

- RoonPilot automatically distinguishes Roon `number`, `db` and `incremental`
  volume outputs; no manual unit selection is required.
- A dB endpoint is shown using the value reported by Roon, for example
  `-40 dB`, instead of being relabelled or converted to an invented 0-100 value.
- Rotary changes start from the endpoint's current value and use its reported
  native step. A configured value of two Roon steps therefore means 2 dB on an
  output reporting a 1 dB step.
- Reported minimum and maximum values are used for the arc, web slider and
  local maximum-volume limit. If a dB endpoint omits those limits, RoonPilot
  keeps relative control and the correct dB text but does not invent an unsafe
  absolute range or percentage.

## Compatibility and retained features

- direct Roon discovery, authorization and zone control without a companion
  service, bridge or cloud account;
- Classic, Focus and Orbit player screens with artwork-derived backgrounds;
- touch transport, horizontal previous/next gestures and native percent/dB
  rotary volume;
- configurable zone visibility and primary control zone;
- station and digital clocks with separate day/night brightness schedules;
- on-device Quick Settings for system information, display, clock, accent
  colour and volume;
- configurable maximum-volume safety limit;
- long-press device control lock with visible locked-operation feedback;
- first-start Wi-Fi access point and automatic recovery after invalid
  credentials;
- guided first setup, Roon approval and mandatory zone selection;
- local configuration website, safe export/import and diagnostics;
- device-specific battery runtime calibration with recoverable checkpoints;
- guarded ESP32-S3 deep sleep with touch and rotary-ring wake-up;
- signed A/B online updates, boot validation and rollback;
- browser-based Factory installation for the primary ESP32-S3;
- separate low-power firmware for the board's companion ESP32.

## Installation and updating

- New installations use the authorized browser Web Installer and erase the
  complete primary ESP32-S3 before writing the Factory image.
- Existing RoonPilot installations update locally through **System -> Firmware
  update**. Configuration, Wi-Fi and Roon authorization are retained.
- The primary Factory and OTA binaries are intentionally not offered as
  standalone downloads. The Companion Sleep image remains separate because it
  targets the board's second, classic ESP32.
- A current Chromium-based desktop browser with Web Serial is required for a
  Factory installation.

## Security, privacy and licensing

The public Factory and OTA images contain no development Wi-Fi SSID, Wi-Fi
password, Roon Server address, pairing token or private signing key. Update
checks retrieve only the signed public manifest over HTTPS. The two update
preferences and the last-check/last-notice timestamps remain local.

RoonPilot-authored portions use the RoonPilot Personal-Use Binary License 1.0.
Third-party portions retain their independent licences and notices.

## Waveshare hardware warning

The Waveshare module contains two independently programmable processors. The
Web Installer targets **only the ESP32-S3**. USB-C plug orientation determines
which processor is connected. Verify the detected chip before every backup or
write and never flash the ESP32-S3 Factory image to the companion ESP32.

Report functional or documentation problems through GitHub Issues. Remove IP
addresses, Wi-Fi names, Roon metadata and other private information from logs
or screenshots before attaching them publicly.
