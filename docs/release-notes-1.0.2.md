# RoonPilot firmware 1.0.2

**English** · [Deutsch](release-notes-1.0.2.de.md)

RoonPilot firmware 1.0.2 improves everyday operation on the round display
and makes the local web interface more responsive. It also adds an explicit
regional time-zone setting so both clock faces show correct local time with
automatic daylight-saving changes.

## Display and device controls

- A quick double-tap in the centre turns the display off immediately. The next
  touch or rotary movement only wakes the display and does not trigger the
  underlying control.
- The existing long centre press continues to lock or unlock device controls;
  display-off and control lock therefore remain deliberately separate actions.
- The configured idle clock now appears after its timeout even while the
  selected zone continues playing. Dimming no longer replaces a requested
  clock transition.
- Quick Settings closes automatically after 30 seconds without interaction and
  returns to the normal player or clock screen.
- **Quick Settings -> System** now shows the running firmware version together
  with the device IP address, connected Roon Server and connection state.

## Correct local time

- **Display & Controls** now provides an explicit regional time-zone selector.
- Roon does not supply a reliable device time zone, so RoonPilot stores the
  selected rule locally and applies daylight-saving transitions automatically.
- Existing installations migrate safely with UTC as their initial setting.
  Central European users select **Central Europe (CET/CEST)** once.
- The selected time zone is included in configuration export and import; Wi-Fi
  passwords and Roon authorization secrets remain excluded.

## Web interface improvements

- Status, configuration and Roon data load with fewer blocking requests, which
  substantially improves response time and avoids incomplete zone or artwork
  views on the Overview page.
- The dedicated firmware-update page again has a visible **Back to System**
  control.
- Roon connection, discovery, pairing, zone, transport, browse, artwork and
  error messages in the English device interface are consistently English.
- Volume-limit guidance now describes the selected endpoint's reported native
  range instead of naming a particular test device.

## Roon volume compatibility

RoonPilot continues to detect Roon `number`, `db` and `incremental` volume
outputs automatically. dB endpoints use the value, native step and reported
limits supplied by Roon, so rotary changes start from the current value rather
than from zero. No manual unit selection or invented 0-100 conversion is used.

## Installation and updating

- Existing RoonPilot installations update locally through **System -> Firmware
  update**. Configuration, Wi-Fi and Roon authorization are retained.
- New installations use the authorized browser Web Installer. A Factory
  installation erases the complete primary ESP32-S3 before writing the image.
- The primary Factory and OTA binaries are intentionally not offered as
  standalone downloads. The Companion Sleep image remains a separate manual
  download because it targets the board's second, classic ESP32.
- A current Chromium-based desktop browser with Web Serial is required for a
  Factory installation.
- Firmware installation always remains an explicit owner action; RoonPilot
  never installs an update automatically.

## Security, privacy and licensing

The public Factory and OTA images contain no development Wi-Fi SSID, Wi-Fi
password, Roon Server address, pairing token or private signing key. The
firmware uses signed A/B OTA with boot validation and rollback.

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
