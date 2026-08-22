<div align="center">

# RoonPilot

### The dedicated control surface for Roon

**Turn the music up. Change the room. See what is playing. Nothing else gets in the way.**

<img src="assets/roonpilot-hardware.png" alt="RoonPilot on the original blue rotary-knob hardware" width="760">

*RoonPilot interface shown on the original target hardware.*

</div>

## Music control should feel immediate

RoonPilot is a compact, purpose-built wireless controller for Roon. Its tactile
rotary ring gives volume control the precision and speed of real hi-fi hardware,
while the round touch display keeps album artwork, playback controls and zone
selection exactly where you need them.

It is not another phone app and it does not try to become a music player.
RoonPilot stays focused on one job: making everyday control of your existing
Roon zones faster, calmer and more satisfying.

## No companion service. No bridge. No cloud dependency.

RoonPilot communicates **directly with your Roon Core over the local Wi-Fi
network** using the Roon Extension protocol.

You do **not** need to install or maintain:

- a Raspberry Pi or other always-on bridge
- Docker containers
- a Node.js extension host
- a desktop helper application
- an additional background daemon
- a RoonPilot cloud account

Once connected to Wi-Fi and approved in Roon, the controller operates as a
self-contained appliance. A working Roon system, a Roon subscription and local
Wi-Fi are the only external requirements.

## Designed for the way Roon is used

### Tactile volume control

Turn the outer ring for immediate control of the selected Roon zone. Rapid
encoder movement is coalesced into a bounded command stream, keeping the
interface responsive without flooding the Core.

### Now playing at a glance

The 1.8-inch round display presents album artwork, title, artist, playback state,
zone, Wi-Fi status and battery information in a clear hi-fi-oriented layout.

### Touch transport and zone selection

Play, pause, skip and choose among available Roon zones directly on the device.
The selected zone is remembered by its stable Roon identifier.

### Quiet when the music stops

After playback becomes inactive, RoonPilot can transition to a restrained clock
or turn the display black. Wi-Fi and Roon remain connected for an instant return.

### Resilient local operation

Automatic Core discovery, persistent pairing, subscribed zone updates and
bounded reconnect behavior are designed to make RoonPilot feel like an appliance,
not a computer that needs supervision.

## Interface preview

<table>
  <tr>
    <td align="center"><img src="assets/01-now-playing.png" alt="Now playing screen" width="280"><br><b>Now playing</b></td>
    <td align="center"><img src="assets/02-volume.png" alt="Volume overlay" width="280"><br><b>Volume overlay</b></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/03-zones.png" alt="Roon zone picker" width="280"><br><b>Zone picker</b></td>
    <td align="center"><img src="assets/04-pairing.png" alt="Roon extension approval screen" width="280"><br><b>Simple Roon approval</b></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><img src="assets/05-clock.png" alt="Low-power idle clock" width="280"><br><b>Low-power idle clock</b></td>
  </tr>
</table>

The interface is designed specifically for the native 360 × 360 circular panel,
with clear typography, large touch targets and information kept away from the
rounded display edge.

## Local web configuration

RoonPilot provides a responsive English-language configuration interface
directly from the device. Open it in a browser on the local network to manage
Roon, zones, display behavior and system settings. There is no cloud dashboard,
external account or companion application involved.

The interface is intentionally a focused device-management tool rather than a
second music player. It combines useful live information with compact controls
that work on both desktop and mobile screens.

### Overview

<img src="assets/web-ui/01-overview.png" alt="RoonPilot local web interface overview" width="100%">

The overview brings the most important information together: Roon and Wi-Fi
connection state, battery level, firmware version, uptime and the selected
zone's now-playing information. Basic transport and volume controls provide a
quick functional check without opening another application.

### Roon and zone selection

<img src="assets/web-ui/02-roon-zones.png" alt="RoonPilot Roon Core and zone configuration" width="100%">

The Roon page shows the connected Core, extension approval state and every
available zone. One zone is selected as the device's display and control target,
with live playback, title and volume information shown alongside it.

### Zone visibility management

<img src="assets/web-ui/05-zone-management.png" alt="RoonPilot shown and hidden zone management" width="100%">

Every discovered zone remains accessible in web configuration, while the
`Available on RoonPilot` switch decides whether it appears on the device itself.
All, shown and hidden filters keep larger Roon installations manageable. Hidden
zones remain completely unchanged in Roon and can be enabled again at any time.

The selected control zone must remain shown. If it is hidden, another shown zone
must be selected in the same saved operation. Newly discovered zones are shown
by default, preventing new rooms from disappearing without explanation.

### Display, rotary encoder and touch

<img src="assets/web-ui/03-display-controls.png" alt="RoonPilot display rotary encoder and touch settings" width="100%">

Screen brightness, dimming, display-off timing and the clock-or-black idle mode
are grouped with rotary-encoder direction, volume step and acceleration.
Touch orientation and calibration status remain visible on the same page.

### System and configuration backup

<img src="assets/web-ui/04-system.png" alt="RoonPilot system maintenance and configuration backup" width="100%">

The system page exposes firmware, hardware, uptime and memory information,
along with downloadable diagnostics. Configuration can be exported and
validated before import without exposing saved Wi-Fi passwords. Restart and
factory reset remain separate, explicit actions so that restoring settings
never causes a surprise reboot.

## Hardware platform

RoonPilot is built for the **Waveshare ESP32-S3-Knob-Touch-LCD-1.8**, a compact
desktop controller that combines a circular touch display, a physical rotary
encoder and the processing resources required for direct Roon communication in
one CNC-machined enclosure.

| Feature | Hardware specification |
| --- | --- |
| Display | 1.8-inch round IPS LCD, 360 × 360 pixels, capacitive touch |
| Primary processor | ESP32-S3, up to 240 MHz |
| Memory | 16 MB flash and 8 MB PSRAM |
| Wireless | 2.4 GHz Wi-Fi 802.11 b/g/n and Bluetooth |
| Controls | Tactile rotary encoder ring and touch screen |
| Enclosure | CNC-machined metal housing, available in blue or black |
| Connectivity | USB-C, microSD/TF card slot and 3.5 mm audio output |
| Additional hardware | PCM5100A audio DAC, microphone and vibration motor |
| Power | USB-C or optional internal 3.7 V / 800 mAh battery |

The product uses the onboard hardware as a dedicated Roon remote. It is not an
audio endpoint; playback continues through your existing Roon zones and audio
system. The board's audio components are therefore hardware reserves rather
than a requirement for RoonPilot operation.

### Choose the hardware version

Waveshare offers the controller in four variants. RoonPilot supports the same
core display and control hardware in either enclosure colour.

| Waveshare order code | Colour | Battery included |
| --- | --- | --- |
| `ESP32-S3-Knob-Touch-LCD-1.8` | Blue | Yes, 800 mAh |
| `ESP32-S3-Knob-Touch-LCD-1.8-EN` | Blue | No |
| `ESP32-S3-Knob-Touch-LCD-1.8B` | Black | Yes, 800 mAh |
| `ESP32-S3-Knob-Touch-LCD-1.8B-EN` | Black | No |

The battery-equipped version is the simplest choice for portable use. The
version without a battery is ideal for permanent USB-C operation or for users
who prefer to source their own compatible cell.

### Where to buy

The hardware can be ordered directly from the
[official Waveshare product store](https://www.waveshare.com/esp32-s3-knob-touch-lcd-1.8.htm).
Use the exact order codes above when comparing offers from regional Waveshare
distributors or electronics retailers. Prices, stock and delivery options vary
by country and are shown by the seller at checkout.

Detailed board documentation, pin assignments and official software resources
are available in the
[Waveshare technical wiki](https://www.waveshare.com/wiki/ESP32-S3-Knob-Touch-LCD-1.8).

## Direct architecture

```text
Touch + rotary encoder
          │
          ▼
     RoonPilot firmware ───── local Wi-Fi ───── Roon Core
          ▲                                          │
          └──── subscribed zones and metadata ──────┘
```

There is no intermediate RoonPilot server in this path.

## Firmware for everyone

Following a short validation period on the target hardware, the RoonPilot
firmware will be made available to everyone as a ready-to-flash release. Normal
installation will not require users to compile the firmware themselves.

Every public firmware release will be accompanied by a detailed, illustrated
step-by-step installation guide covering:

- selecting the correct hardware variant
- connecting the correct USB-C interface
- downloading the matching firmware image and flashing tool
- backing up the factory firmware where applicable
- flashing and verifying RoonPilot
- first-time Wi-Fi setup and approval in Roon
- recovery and troubleshooting procedures

The goal is a predictable installation that can be completed without prior
ESP-IDF or embedded-development experience.

## Created by Senior Coder

RoonPilot is designed and developed by **Senior Coder**.

Roon is a trademark of Roon Labs. RoonPilot is an independent project and is
not affiliated with or endorsed by Roon Labs. Waveshare product names are used
only to identify the target hardware platform.

Copyright © 2026 Senior Coder. All rights reserved.
