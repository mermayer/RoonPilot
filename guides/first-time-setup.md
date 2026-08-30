# First-time setup

**English** · [Deutsch](de/first-time-setup.md)

After a clean Factory installation, RoonPilot contains no Wi-Fi credentials,
Roon Server address, authorization or selected zone. The normal first-time
flow is completed on the device in four steps:

1. connect RoonPilot to Wi-Fi;
2. let it discover the Roon Server automatically;
3. enable RoonPilot in Roon;
4. choose a zone on the round display.

The full web interface is not required when one Roon Server is discoverable.

## 1. Join the RoonPilot setup network

The display shows **Wi-Fi setup** and the temporary access-point name.

<img src="../assets/device-screens/18-wifi-setup.png" alt="Wi-Fi setup screen" width="360">

1. On a phone, tablet or computer, open Wi-Fi settings.
2. Join `RoonPilot-Setup-XXXXXX`; the final six characters identify the unit.
3. Enter the temporary password `roonpilot-setup`.
4. A captive setup page should open. If it does not, browse to
   `http://192.168.4.1`.
5. Select or type the home **2.4 GHz** Wi-Fi name.
6. Enter its password carefully. Passwords are case-sensitive.
7. Press **Save and connect**.

<img src="../assets/web-ui/09-wifi-first-setup.png" alt="Minimal Wi-Fi first setup page" width="100%">

Only Wi-Fi can be configured on this minimal page. Roon, zones, display,
firmware and system actions are intentionally absent.

### If the Wi-Fi password is wrong

RoonPilot tries the saved network for up to approximately 45 seconds. If it
cannot obtain an address, it automatically returns to the protected setup AP.
Rejoin `RoonPilot-Setup-XXXXXX`, open `192.168.4.1`, correct the details and
save again. No erase or USB cable is required.

Some phones leave the AP because it has no Internet access. Choose **stay
connected** or temporarily disable mobile-data auto-switching.

## 2. Wait for automatic Roon discovery

After saving Wi-Fi, RoonPilot restarts. The display progresses through
**Wi-Fi connecting** and **Finding Roon**. It repeatedly performs
local Roon SOOD discovery. When exactly one server is found, RoonPilot connects
to it automatically—do not start a manual scan first.

The next normal screen is **Waiting for approval**. If this screen appears,
continue with step 3.

### More than one Roon Server

If several servers are discovered and no previous server can be matched, the
display asks for a server selection. Open the local **Roon & zones** page,
press **Scan for Roon Servers**, choose the correct server and save it.

<img src="../assets/device-screens/22-select-roon-server.png" alt="Select Roon Server screen" width="360">

### No server is discovered

Discovery requires local reachability and normally multicast traffic between
RoonPilot and the Roon Server. Guest Wi-Fi, client isolation, VLAN boundaries
or multicast filtering can prevent it.

1. Open **Quick Settings → System** on the device to find its IP address.
2. Enter that IP address in a browser on the same network.
3. Open **Roon & zones** and press **Scan for Roon Servers**.
4. If discovery is still blocked, enter the Roon Server's fixed local IP
   address and port manually, then save.

Use a DHCP reservation for a manually configured address. Never enter a public
Internet address; RoonPilot is designed for the local network.

## 3. Authorize the Roon extension

The display now remains on **Waiting for approval** and shows the required Roon
menu path. Dim, clock and deep-sleep timers are suspended until this setup step
is complete.

<img src="../assets/device-screens/06-roon-pairing.png" alt="Roon approval screen" width="360">

1. Open the Roon application.
2. Go to **Settings → Extensions**.
3. Locate **RoonPilot**, created by **Senior Coder**.
4. Press **Enable**.
5. Return to the device; no firmware restart and no manual refresh are needed.

Authorization is stored locally. Reapproval is normally needed only after a
Factory reset, explicit pairing removal or Roon Server migration. RoonPilot
installs no service, bridge or plug-in on the Roon Server.

## 4. Select the first zone on the device

As soon as Roon returns its zone list, the full **Select zone** screen opens
automatically. A first installation cannot leave this screen without choosing
a real zone.

1. Turn the ring to move between pages when more than three zones exist.
2. Tap the wanted zone on the display.
3. Wait for the player screen and artwork to appear.

The web interface is not needed for this first selection. It remains available
later to change the primary zone or hide rooms that should not appear on the
round display.

## 5. Open the full local interface

Open **Quick Settings → System** to see the assigned IP address and connected
Roon Server. Enter the IP address in a browser on the same local network.
Bookmark it or reserve the address in the router if desired.

The local page loads its structure immediately and fills live values after its
status requests complete. Brief placeholders are normal; multi-second stalls
are not.

## 6. Perform a quick functional check

- Artwork, title and artist update for the selected zone.
- Tapping play/pause changes both Roon and the displayed icon.
- Previous/next buttons and horizontal swipes work.
- Turning the ring changes the selected zone's volume and shows the overlay.
- Tapping the zone name opens the zone picker again.
- A browser refresh retains saved settings.

Continue with [Device controls](device-controls.md).
