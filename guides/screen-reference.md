# Complete device-screen reference

**English** · [Deutsch](de/screen-reference.md)

The following renders mirror the 360 × 360 LVGL layouts and use fictional data.
Minor colour differences can occur between a browser render and the physical IPS
panel.

## Player and listening screens

### Classic

<img src="../assets/device-screens/01-now-playing-classic.png" width="360" alt="Classic player">

The default balanced layout: zone at the top, circular cover, title, artist and
three transport buttons. Wi-Fi and the coarse battery symbol sit beside the
artwork rather than against the clipped upper edge.

### Focus

<img src="../assets/device-screens/02-now-playing-focus.png" width="360" alt="Focus player">

Emphasizes title and large transport controls. A progress bar and combined
elapsed/total time are shown near the lower edge.

### Orbit

<img src="../assets/device-screens/03-now-playing-orbit.png" width="360" alt="Orbit player">

Uses full-screen cover art, a fine outer progress ring and outlined transport
buttons. Text and controls remain inside the circular safe area.

### Volume

<img src="../assets/device-screens/04-volume.png" width="360" alt="Volume screen">

Appears while the ring is turned. The arc and number represent the pending
volume for the named zone.

### Zone picker

<img src="../assets/device-screens/05-zone-picker.png" width="360" alt="Zone picker">

Shows the enabled Roon zones. The accent outline/check identifies the current
selection; an activity mark distinguishes a playing room.

## Connection and selection screens

| View | Meaning |
| --- | --- |
| <img src="../assets/device-screens/06-roon-pairing.png" width="250" alt="Roon pairing"> | Wi-Fi and discovery work; approve RoonPilot in **Roon → Settings → Extensions**. |
| <img src="../assets/device-screens/18-wifi-setup.png" width="250" alt="Wi-Fi setup"> | No saved Wi-Fi; join the protected setup AP. |
| <img src="../assets/device-screens/19-wifi-attention.png" width="250" alt="Wi-Fi attention"> | Saved Wi-Fi needs attention; the recovery AP is available. |
| <img src="../assets/device-screens/20-wifi-connecting.png" width="250" alt="Wi-Fi connecting"> | Credentials were saved and RoonPilot is trying to join. |
| <img src="../assets/device-screens/21-roon-offline.png" width="250" alt="Roon offline"> | Network is up but the chosen Roon Server is currently unreachable. |
| <img src="../assets/device-screens/22-select-roon-server.png" width="250" alt="Select Roon Server"> | More than one server was discovered; choose the intended one. |
| <img src="../assets/device-screens/23-zone-unavailable.png" width="250" alt="Zone unavailable"> | The remembered zone no longer exists or is offline. |
| <img src="../assets/device-screens/24-select-zone.png" width="250" alt="Select zone"> | Roon is authorized but no control zone has been selected. |

The Wi-Fi icon reports measured RSSI in coarse levels; it is not a decorative
always-full symbol.

## Clock screens

| Station | Digital |
| --- | --- |
| <img src="../assets/device-screens/07-clock-station.png" width="320" alt="Station clock"> | <img src="../assets/device-screens/08-clock-digital.png" width="320" alt="Digital clock"> |

The Station face has forward-running hands. Digital shows time and date. Both
use separate day/night brightness and scheduled switch times. Touch returns to
Now Playing.

## Quick Settings screens

| Home | System | Display |
| --- | --- | --- |
| <img src="../assets/device-screens/09-quick-settings.png" width="220" alt="Quick Settings"> | <img src="../assets/device-screens/09b-quick-system.png" width="220" alt="Quick System information"> | <img src="../assets/device-screens/10-quick-display.png" width="220" alt="Quick Display"> |

| Volume | Clock |
| --- | --- |
| <img src="../assets/device-screens/11-quick-volume.png" width="220" alt="Quick Volume"> | <img src="../assets/device-screens/12-quick-clock.png" width="220" alt="Quick Clock"> |

**System** is the first entry and displays the current device IP address, the
connected Roon Server and an overall connection state. It is deliberately
read-only and makes the local web address discoverable without consulting the
router. Use touch to open/select and the ring to choose or adjust. Save changed
settings explicitly.

## Battery-calibration screens

| Prepare | Running | Result |
| --- | --- | --- |
| <img src="../assets/device-screens/13-battery-prepare.png" width="260" alt="Battery calibration prepare"> | <img src="../assets/device-screens/14-battery-running.png" width="260" alt="Battery calibration running"> | <img src="../assets/device-screens/15-battery-result.png" width="260" alt="Battery calibration result"> |

The heading is kept inside the circular safe area. During a run the calibration
owns the display and enforces its test profile. The next boot offers the recovered
runtime for explicit acceptance; it is not silently converted into a percentage.

## Lock feedback

| Locked | Unlocked |
| --- | --- |
| <img src="../assets/device-screens/16-controls-locked.png" width="300" alt="Controls locked"> | <img src="../assets/device-screens/17-controls-unlocked.png" width="300" alt="Controls unlocked"> |

Any attempted operation while locked repeats the locked notice. Hold the centre
for about 1.2 seconds to change state.

## Boot and maintenance

| View | Meaning |
| --- | --- |
| <img src="../assets/device-screens/25-boot.png" width="250" alt="Boot screen"> | Firmware is starting; the installed version is shown. |
| <img src="../assets/device-screens/26-firmware-update.png" width="250" alt="Firmware update"> | An OTA image is being installed. Do not remove power. |
| <img src="../assets/device-screens/27-hardware-test.png" width="250" alt="Hardware test"> | Manufacturer-aligned display/ring test view used during hardware diagnosis. |
| <img src="../assets/device-screens/28-screen-off.png" width="250" alt="Screen off"> | Black idle mode. The first input wakes without issuing a command. |
