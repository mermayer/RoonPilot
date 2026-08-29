# Troubleshooting

**English** · [Deutsch](de/troubleshooting.md)

Work from the top of the relevant section. Do not erase flash as a first test.

## No COM port appears

1. Use a known data-capable USB cable; some charging cables have no data wires.
2. Try a direct computer port, not an unpowered hub.
3. Check Windows Device Manager before and after reconnecting.
4. Close serial tools that may hide or hold the port.
5. Rotate the USB-C plug 180 degrees and check again.
6. Install the USB/serial driver recommended by Waveshare if Device Manager
   shows an unknown device.

## `esptool` cannot connect

- Confirm the correct COM number.
- Close ESP-IDF Monitor and browser Web Serial sessions.
- Disconnect/reconnect and retry at a lower baud rate.
- Make sure the cable orientation selects the intended processor.
- Never add `erase-flash` merely to diagnose a connection.

## The wrong chip is reported

Disconnect USB, rotate the plug and reconnect. A classic ESP32 is the companion;
an ESP32-S3 is the RoonPilot processor. Stop any write until they match the file.

## Web Installer cannot open the port

- Use current desktop Chrome or Edge.
- Serve/open the supplied HTTPS installer address, not a downloaded HTML copy.
- Close every program using the COM port.
- Remove the device from the browser's previous serial permission and select it
  again if necessary.
- Recheck the chip with the read-only identification command.

## Blank display after installation

1. Keep USB connected for a minute and watch for a reboot.
2. Confirm the Factory image, not the OTA image, was written at address 0.
3. Confirm it was written to ESP32-S3, not the companion.
4. Capture serial output from the ESP32-S3 side.
5. If boot validation cannot recover, reflash the verified Factory image.

## Setup AP is missing

- Wait through the 45-second failed-station window if wrong credentials were
  previously stored.
- Look for `RoonPilot-Setup-XXXXXX`, not a fixed suffix.
- Move the phone/computer close to the device.
- Disable automatic switching away from Wi-Fi without Internet.
- Restart RoonPilot once. Do not factory-reset until serial logs are checked.

## Setup page does not open

Browse to `http://192.168.4.1`. Temporarily turn off VPN, private relay or mobile
data switching. Confirm the client still shows the RoonPilot AP as connected.

## Wi-Fi setup keeps returning

- Re-enter SSID/password, preserving case.
- RoonPilot supports 2.4 GHz Wi-Fi; ensure the network offers it.
- Avoid WPA enterprise/captive-portal networks for initial testing.
- Check router client isolation and allow a DHCP address.
- Test close to the access point before diagnosing antenna/RSSI behavior.

## Local website cannot be reached

1. Confirm Wi-Fi icon/status and current address in the router.
2. Use `http://` with the local address; the device page is local HTTP.
3. Put browser and RoonPilot on networks that can communicate.
4. Disable guest isolation/VPN temporarily.
5. Ping the address if the network permits it.
6. Restart once and check whether DHCP assigned a different address.

Reserve the address in the router instead of assigning an unplanned static IP.

## Local website is slow

The structure should appear immediately and values shortly afterward. Check:

- RSSI on Network; weak signal causes retransmissions;
- whether another browser tab polls the device heavily;
- memory and uptime on System;
- diagnostics for reconnect or request errors;
- browser developer console for failed `/api/system/status` or
  `/api/roon/summary` requests.

The current interface fetches configuration at startup/after changes and uses
smaller parallel status requests afterward. Consistent multi-second delays on a
strong local network are a defect worth reporting with diagnostics.

## Roon Server is not found

- Verify Roon is running and usable from the Roon app.
- Keep RoonPilot and server on the same unisolated LAN for the first test.
- Allow multicast across any VLAN boundary.
- Use **Scan for Roon Servers**.
- Configure a DHCP-reserved server IP and port 9330 manually if discovery cannot
  cross the network design.

## Several Roon Servers are found

Select the intended discovery result or choose Manual/selected core. RoonPilot
does not guess between multiple servers.

## Waiting for approval does not clear

Open **Roon → Settings → Extensions**, find **RoonPilot** by **Senior Coder** and
enable it. If already enabled, forget pairing in RoonPilot, remove/disable the
old Roon entry if needed, then enable the newly presented extension.

## No zones appear

- Confirm RoonPilot is paired.
- Refresh zones on Roon & Zones.
- Check Zone Management's Hidden filter.
- Confirm the endpoints are enabled and visible in Roon itself.

## A zone switch resets itself

Changes are drafts until **Save zone configuration** is pressed. If a saved
switch still reverts, verify that it is not the primary zone: the primary must
remain shown. Capture diagnostics if unrelated periodic refresh resets a draft.

## Play/pause icon is wrong

Confirm the Roon zone actually changes state and wait for its subscribed state
event. If another Roon client works but RoonPilot remains stale, refresh zones
and download diagnostics rather than tapping repeatedly.

## Ring direction or volume is wrong

Check Direction, Volume step, Acceleration and Maximum volume on Display &
Controls. The first ring movement after black screen wakes only. While locked,
ring movement deliberately does not send volume.

## Touch or swipe is wrong

Confirm **Rotate entire screen 180°** matches the physical orientation. Touch
uses the Waveshare board mapping through LVGL; there is no user calibration card.
Use a deliberate horizontal gesture beginning inside the circle.

## Clock does not appear or becomes black

- Select Idle display = Clock.
- Select a non-Never Idle display after value.
- Verify time/network synchronization.
- Confirm day/night brightness is above zero.
- Save, then wait without touching or turning the ring.

Touching the clock returns to the player. The first touch on a black screen only
wakes it.

## Wi-Fi or battery symbol looks wrong

Wi-Fi uses coarse filtered RSSI levels. Compare the Network page's dBm reading.
Battery is a filtered system-rail indication, not a percentage or USB detector;
read [Battery and runtime](battery-and-runtime.md).

## Battery calibration was interrupted

On the next boot, save the recovered result only if shutdown was the expected
end of the untouched unplugged run. Discard results caused by reset, accidental
power loss, update or cancellation.

## Deep sleep does not start

Open **Power** and check its badge. **Armed** means the countdown is running;
**Waiting** means at least one required condition is missing.

- Save the policy after enabling it and selecting a timeout.
- Select an available Roon zone and make sure Roon reports paused or stopped.
- Playing, loading, buffering, an unknown state or a disconnected/missing zone
  deliberately keeps RoonPilot awake.
- Finish/cancel Wi-Fi AP setup, firmware operations and battery calibration.
- Stop touching the display, turning the ring or repeatedly saving settings;
  these restart the idle countdown.
- Check serial diagnostics for `Deep sleep postponed`: an active-low touch or
  encoder pin prevents an immediate sleep/wake loop.

## Deep sleep does not wake

- A browser, Roon command or network packet cannot wake it because Wi-Fi is off.
- Touch the display once, or turn the ring far enough to create an encoder edge.
- Allow normal boot and Wi-Fi/Roon reconnection time.
- If neither local input works, connect USB, capture serial output and restart.
  The next log should identify an EXT1 wake and its GPIO status when wake works.
- Do not erase flash; configuration is unrelated to electrical wake detection.

Deep sleep and a black idle display are different. Black-screen wake is nearly
immediate and consumes the first action. Deep-sleep wake always performs a full
restart. See [Deep sleep](deep-sleep.md).

## Update failed

Keep USB power attached, wait for rollback, record the version/partition and
download diagnostics. Use [Firmware updates and recovery](firmware-updates-and-recovery.md)
before attempting a Factory reflash.

## Information for an issue

Include firmware version, exact hardware order code, which processor was active,
reproduction steps, expected/actual result and sanitized diagnostics. Never post
Wi-Fi passwords, pairing material, private IP layouts you do not wish to expose,
factory backups or the signing key.
