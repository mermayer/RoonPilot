# Configuration export and import

**English** · [Deutsch](de/configuration-backup.md)

## What export is for

Use **System → Export configuration** before experimenting with display, clock,
encoder, power or zone settings. The browser downloads a readable JSON file.

## Included settings

The schema includes the user-configurable non-secret state, including:

- selected Roon connection method and non-secret manual host/port choice;
- selected control zone identifier and shown/hidden-zone preferences;
- active/dim brightness and timeouts;
- cover-background intensity and accent colour;
- player layout and 180-degree rotation;
- clock face, day/night brightness and schedule;
- encoder direction, volume step, acceleration and maximum volume;
- idle clock/black choice;
- deep-sleep enabled state and timeout;
- accepted battery-calibration reference and metadata.

## Intentionally excluded secrets

- Wi-Fi password;
- Roon pairing token or authorization material;
- per-session web mutation token;
- firmware signing key;
- development credentials.

The Wi-Fi SSID may be treated as identifying network metadata. Do not publish an
export without reviewing the file.

## Import procedure

1. Export the current configuration first.
2. Open **System → Import configuration**.
3. Select the JSON file.
4. RoonPilot validates schema, types, ranges and combinations before saving.
5. Confirm the page now displays the imported values.
6. Restart only if the interface asks for it or network-related state changed.
7. Re-enter secrets such as a new Wi-Fi password separately.

Import is not a firmware update and does not replace calibration-independent
factory data. Unknown future fields are handled according to the supported
schema version rather than copied blindly to NVS.

## Moving settings to another unit

Display and behaviour settings are portable. Zone IDs, server addresses and a
battery runtime measured on one physical unit may be inappropriate on another.
After import, review Roon & Zones and repeat battery calibration on the target
hardware.
