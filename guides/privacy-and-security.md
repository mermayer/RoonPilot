# Privacy and security

**English** · [Deutsch](de/privacy-and-security.md)

## Local architecture

RoonPilot communicates with the chosen Roon Server and browser on the local
network. It does not require a RoonPilot cloud account, telemetry service,
Raspberry Pi bridge, Docker container or desktop helper.

The optional IR Bridge is also local. Initial discovery, pairing and Wi-Fi
provisioning use encrypted Bluetooth LE. If enabled for a specific Bridge,
authenticated Wi-Fi carries commands and firmware on the same LAN. The Bridge
has no cloud account or everyday web interface; RoonPilot remains its management
surface. Disabling **Bridge & Bluetooth** and restarting prevents the Bluetooth
stack, scanning, Bridge status traffic and Bridge update checks from starting.

Normal runtime network activity consists of Wi-Fi/DHCP/time services, Roon
discovery/session traffic, artwork retrieval from Roon and local HTTP requests.
When automatic update checking is enabled, RoonPilot also reads the approved
HTTPS release manifest after startup and then at most once per 24 hours after a
successful check (temporary failures are retried later). This sends ordinary
HTTPS connection metadata to the hosting provider but no Wi-Fi password, Roon
token, zone list or playback metadata. The setting can be disabled independently
of the optional device notification. Firmware is never downloaded or installed
without an explicit user action.

When deep sleep is active, the main ESP32-S3, Wi-Fi connection, Roon session and
local website are stopped. No network request can wake the device; a local touch
or ring movement starts a complete boot and reconnects it.

## Stored locally

- Wi-Fi SSID and password;
- Roon pairing/authorization state;
- selected server and zone identifiers;
- shown/hidden-zone preferences;
- display, clock, ring and power settings;
- battery-calibration session marker and accepted runtime reference;
- update/boot validation state;
- update-check/display-notice preferences and their last-check/last-notice
  timestamps;
- optional saved Bridge identities, encrypted-bond state, zone/profile routes,
  per-Bridge Wi-Fi permission and update preferences;
- optional per-zone HTTP Power labels, enable states and URLs.

These values live in the device's non-volatile storage. Anyone with physical
flash access should be treated as capable of extracting local secrets unless
the hardware's security configuration prevents it.

During battery calibration, the changing runtime is recorded in retained RTC
memory, not periodically written to flash. It survives protective deep sleep
but is not a permanent record after complete power loss. After a calibration
low-voltage protective stop, touch/ring input cannot wake the device; stable
USB power is required before the normal boot resumes. This protective shutdown
is used only during a running calibration; flash-write protection remains
active in normal operation as well.

## Public release binaries

Factory and OTA images contain no test SSID/password, test Roon address, pairing
token or private signing key. Example screenshots use fictional content and the
reserved TEST-NET address range.

## Configuration exports

Exports deliberately omit the Wi-Fi password, Roon token, temporary web
mutation token and signing material. They may contain an SSID, zone names,
server address and preferences, so review them before public sharing.

**System → Create Backup** makes one JSON file with controller settings, every
saved zone route, the permanent IR profile library and Bridge assignments. It
reads the library on RoonPilot, so an offline Bridge does not block export.
Unsynchronized changes on a Bridge may be absent. The file excludes Wi-Fi
passwords, Roon authorization, Wi-Fi transport keys and BLE bond keys, but
**includes configured HTTP Power URLs**.

The file is not a publication artifact: zone names, equipment labels, server
addresses, Bridge identities and local URLs can identify a home installation.
Review it before sharing. See [Configuration backup and restore](configuration-backup.md).

## Local web security boundary

The normal device site is HTTP on the trusted LAN. State-changing API requests
require a session mutation token obtained by the loaded page. This reduces
accidental/cross-site modification but does not turn an untrusted shared Wi-Fi
network into a safe management network.

Optional HTTP Power actions send exactly the configured URL from RoonPilot to a
local HTTP endpoint. They are unencrypted when the URL begins with `http://` and
may contain private host names, addresses or query parameters. Use them only on
a trusted LAN, avoid credentials in URLs, and never expose the target service
through router port forwarding. A Test button performs the real action.

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
- device update manifests use HTTPS and validate size/SHA-256;
- A/B boot validation supports rollback;
- browser Factory installation is a physical-USB operation, is gated by
  hardware and licence confirmations, and erases current flash;
- IR Bridge updates are independently signed and verified, use the inactive A/B
  slot, and may temporarily enable authenticated Bridge Wi-Fi only for the
  confirmed transfer before restoring its previous state;
- the companion firmware has its own checksum/metadata and is excluded from the
  ESP32-S3 Web Installer.

The private release key requires at least two encrypted external backups. It
must never be committed, copied into Pages or attached to a release.

### Technical limits

Code signing protects the official online-update path, but it is not source-code
encryption. A browser installer must deliver the Factory image to the browser;
a technically skilled user can capture that transfer and inspect or decompile
the machine code. Likewise, signed-app verification by itself does not stop an
attacker with physical USB access from replacing the complete flash image.

RoonPilot therefore combines legal restrictions, signed releases, release-binary
audits and a deliberately minimal public package. Hardware Secure Boot and Flash
Encryption are not silently enabled because their irreversible eFuse provisioning
would change the documented backup and recovery workflow. They would require a
separate controlled-device provisioning model and still would not make the image
delivered by a public Web Installer confidential.

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
