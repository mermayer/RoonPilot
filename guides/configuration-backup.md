# Configuration backup and restore

**English** · [Deutsch](de/configuration-backup.md)

RoonPilot 2 uses **one JSON file** for the controller and its paired IR Bridges. Open **System → Create Backup**. There is no longer a separate backup section under **IR Bridge → Maintenance**. This JSON is a settings backup, not a firmware image or a copy of the manufacturer's original flash.

<img src="../docs/ir-bridge/assets/unified-backup-en.svg" alt="One backup contains RoonPilot settings, zone routes, a permanent profile library and separate Bridge assignments" width="100%">

<img src="../docs/ir-bridge/assets/system-backup.png" alt="Create Backup and Restore backup controls on the RoonPilot System page" width="100%">

## What the file contains

- RoonPilot settings: language, selected Roon zone, shown or hidden zones, display layout and brightness, clock and time zone, controls and touch feedback, power policy and battery settings, update preferences, and the **Bridge & Bluetooth** switch.
- Per-zone settings and **all saved zone routes**, including ring steps, Power/Mute choices and up to three named HTTP ON/OFF action pairs with their individual enable switches and URLs.
- Each independent IR profile **once under a unique name**, with learned commands and checksums for the pulse data. The profile library is also stored permanently on RoonPilot.
- Separate assignments between profile names and paired Bridge identities. The same profile can be copied to multiple Bridges, each with its own local numeric profile ID.
- A checksum for the complete JSON file, including controller settings and routes.

HTTP URLs and room names may contain private information. Keep the file private.

## Creating a backup while a Bridge is offline

Creating a new backup reads the **permanent profile library on RoonPilot**, not each Bridge. An offline Bridge therefore neither delays the download nor makes the file partial. The file includes the library profiles, their paired-Bridge assignments and the zone routes. A controller with no paired Bridges still includes its library profiles.

Saving or learning a profile on the RoonPilot Bridge page synchronizes it to this library. Changes on a Bridge that have **not yet synchronized** cannot be captured by a library-only backup. If a saved IR zone route has no corresponding library assignment, RoonPilot stops and asks you to sync that Bridge manually; it does not create a misleadingly complete file.

If a stored Bridge assignment still refers to an older copy of a library profile, RoonPilot asks for confirmation and marks the file “warning”. The library version remains authoritative; redeploy it to that Bridge when needed. This warning is based on stored signatures, not a live Bridge query. Older “partial” backups remain importable for the data they contain.

## What is deliberately excluded

The portable file never includes Wi-Fi passwords, Roon authorization, temporary web-session tokens, Bluetooth bonds, Bridge transport keys or firmware-signing keys. Importing a file alone cannot pair a Bridge with a different RoonPilot. Set up Wi-Fi and Roon again and pair the required Bridges before transferring profiles to them. Restoring the library on RoonPilot does not require a reachable Bridge.

Factory installation or board replacement creates a new `RPB-…` identity. Pair that Bridge with RoonPilot and explicitly select it as a restore target. The importer copies the named profile's learned commands and records the **new** local profile ID; it never assumes that an old numeric ID is valid on replacement hardware. A backup does not transfer Bluetooth ownership or Wi-Fi credentials.

The selected **Automatic / Installed / Not installed** battery mode is included. A positive battery-detection observation made on one physical device is not copied to another.

## Create and restore

1. On the local RoonPilot website, open **System → Create Backup**. A small status panel shows the current phase while the file is prepared. Save the downloaded JSON somewhere private. New files are marked “complete” or, if older Bridge copies are known, “warning”.
2. Before restoring, connect RoonPilot to Roon so its zones can be matched. Pair any **target** Bridges you want to receive profiles; they may have different identities from the saved Bridges. An already paired Bridge may be offline. With Bridge & Bluetooth off, you can still restore the library and transfer profiles later.
3. Open **System → Restore backup** and select the JSON. After checksum validation, select one or several currently paired target Bridges for each profile. Choose a target for each IR zone route deliberately; an unselected route remains unchanged.
4. After the import, verify the selected zone, routes and settings. If the Bridge master switch changed, perform the requested restart. Test IR Volume, Mute and Power at the real equipment.

A restore spans several devices and is **not atomic**. If a later step fails, some earlier steps may already be saved. Resolve the reported problem and import the same file again; matching profiles are reused rather than duplicated. The importer never trusts a numeric profile ID from the file alone. Existing unrelated routes are retained.

Older RoonPilot-only configuration files and older single-Bridge JSON files remain importable on **System**. The latter are converted into named independent profiles and separate assignments; choose a current target Bridge in the restore dialog. New backups use the unified file only.

## Restoring while a Bridge is offline

An unavailable Bridge **does not abort the restore**. RoonPilot saves the
profile library locally, restores controller settings and continues with the
other selected Bridges. A Bridge that goes offline during a transfer is also
deferred rather than blocking the remaining devices.

| Situation | Result |
| --- | --- |
| Target Bridge is reachable | Profiles are transferred or reused, checked and linked to the Bridge's current local profile IDs. |
| Target is offline, but this RoonPilot already has a verified assignment for the identical profile | That known assignment can be restored without treating the profile ID in the file as proof. The live Bridge transfer remains unconfirmed. |
| Target is offline and its assignment is new, changed or not verified on this RoonPilot | The profile stays in the restored library for later transfer. The unconfirmed IR route is not activated; its existing route remains unchanged. |

The progress window can finish at **100% with a warning** naming Bridges whose
transfers could not be confirmed. This means RoonPilot's restore completed,
not that every offline Bridge received its profiles. A warning about a deferred
Bridge is different from **Restore interrupted**, which indicates an actual
failure such as an invalid file, a storage error or a conflicting route.

To complete a deferred transfer:

1. Power the named Bridge and make sure it is reachable from RoonPilot.
2. Import the same backup again and select that Bridge, or transfer the restored
   library profile under **IR Bridge → IR profiles**.
3. Under **IR Bridge → Zone routing**, select the intended Bridge and profile
   for the affected output and save the route. Saving verifies the current copy
   before activating the assignment.

Simply reconnecting the Bridge is not a promise that deferred profiles and
unconfirmed routes will be applied automatically. Check the assignments before
using IR control.

## Moving to another RoonPilot

Display and behaviour settings are portable, but Roon zone IDs, local HTTP URLs and a battery runtime measured on the old unit may not suit the new one. Reconnect Wi-Fi and Roon, pair the Bridges deliberately, check every zone route and repeat battery calibration on the target hardware.
