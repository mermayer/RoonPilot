# Internal RoonPilot OTA validation

This prerelease build exists only for controlled hardware validation of the
signed online-update path. It is not a public RoonPilot release and must not be
linked from the project website, installer, documentation, or stable update
channel.

Test.97 prevents unchanged configuration sections from being written or
re-applied, serializes controller and Bridge update work, and uses the
hardware-proven main-task stack reserve in the unified build. This build is
for the internal simultaneous-update and connection-stability test only.
