# Privacy and security

**English** · [Deutsch](de/privacy-and-security.md)

## Local architecture

RoonPilot communicates with the chosen Roon Server and browser on the local
network. It does not require a RoonPilot cloud account, telemetry service,
Raspberry Pi bridge, Docker container or desktop helper.

Normal runtime network activity consists of Wi-Fi/DHCP/time services, Roon
discovery/session traffic, artwork retrieval from Roon and local HTTP requests.
An online firmware check/download occurs only when that update path is used.

When deep sleep is active, the main ESP32-S3, Wi-Fi connection, Roon session and
local website are stopped. No network request can wake the device; a local touch
or ring movement starts a complete boot and reconnects it.

## Stored locally

- Wi-Fi SSID and password;
- Roon pairing/authorization state;
- selected server and zone identifiers;
- shown/hidden-zone preferences;
- display, clock, ring and power settings;
- battery-calibration checkpoints/reference;
- update/boot validation state.

These values live in the device's non-volatile storage. Anyone with physical
flash access should be treated as capable of extracting local secrets unless
the hardware's security configuration prevents it.

## Public 1.0.0 binaries

The stable release pipeline blocks packaging if either development Wi-Fi
credential macro or the development Roon host is non-empty. Release metadata
also records:

```json
"contains_bench_wifi_credentials": false,
"contains_bench_roon_address": false
```

Factory and OTA images contain no test SSID/password, test Roon address, pairing
token or private signing key. Example screenshots use fictional content and the
reserved TEST-NET address range.

## Configuration exports

Exports deliberately omit the Wi-Fi password, Roon token, temporary web
mutation token and signing material. They may contain an SSID, zone names,
server address and preferences, so review them before public sharing.

## Local web security boundary

The normal device site is HTTP on the trusted LAN. State-changing API requests
require a session mutation token obtained by the loaded page. This reduces
accidental/cross-site modification but does not turn an untrusted shared Wi-Fi
network into a safe management network.

Recommendations:

- keep RoonPilot on a trusted home/hi-fi network;
- do not expose its HTTP port to the Internet;
- do not forward router ports to it;
- isolate untrusted guests from the device;
- use a strong Wi-Fi password;
- update after a release has passed the relevant validation.

## Setup AP

The first-start/recovery AP uses a documented setup password because the user
must be able to join a device with no prior secret. Its minimal page exposes only
Wi-Fi configuration. Complete setup promptly and do not leave a device in AP
mode in a public place.

## Firmware integrity

- stable OTA images are signed using an RSA-3072 key kept outside the project;
- manifests use HTTPS and publish size/SHA-256;
- A/B boot validation supports rollback;
- browser Factory installation publishes checksums but is a physical-USB
  operation and erases current flash;
- the companion firmware has its own checksum/metadata and is excluded from the
  ESP32-S3 Web Installer.

The private release key requires at least two encrypted external backups. It
must never be committed, copied into Pages or attached to a release.

## Diagnostics

Diagnostics are intended for fault finding and may reveal IP addresses, SSID,
zone names, playback metadata or timing information. Sanitize before posting.
Factory flash backups are even more sensitive and must not be attached.

## Factory reset and disposal

A RoonPilot factory reset removes its settings and pairing and returns to AP
setup. Before selling or disposing of hardware, perform the reset and remove the
extension authorization from Roon. Restoring the manufacturer's full factory
backup is a separate flash operation.

## No security overclaim

RoonPilot's direct/local design removes a companion cloud service and its data
flow, but it does not make the LAN, physical flash or Roon installation
automatically secure. Security depends on network configuration, physical
access, current firmware and careful handling of backups.
