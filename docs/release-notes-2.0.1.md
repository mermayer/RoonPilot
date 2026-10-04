# RoonPilot 2.0.1

**English** · [Deutsch](release-notes-2.0.1.de.md)

## Corrected online upgrade from 1.0.2

This maintenance release fixes the signing-key mismatch that prevented the
original RoonPilot 1.0.2 from accepting the 2.0.0 online update. It uses the
original RoonPilot signing key while retaining signed-update verification,
SHA-256 checking and automatic boot rollback.

On RoonPilot's local website, open **System → Firmware update**, select
**Check for updates** and confirm **Download and install** when **2.0.1** is
offered. Keep the device connected to a stable power supply and wait for its
restart. A USB browser installation or a reset of settings is not required
for this online upgrade.

The firmware includes the functions described in the
[2.0.0 release notes](release-notes-2.0.0.md). The IR Bridge retains its
independent firmware version **1.0.0** and is not installed by this update.
