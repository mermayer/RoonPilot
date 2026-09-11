# Internal RoonPilot OTA validation

This prerelease build exists only for controlled hardware validation of the
signed online-update path. It is not a public RoonPilot release and must not be
linked from the project website, installer, documentation, or stable update
channel.

Test.100 corrects native Roon volume labels throughout the device display and
web interface. Roon `db` outputs are shown with `dB`, including `0 dB`; generic
Roon `number` outputs remain unitless instead of receiving an invented percent
sign. A negative endpoint range is also recognized as dB when an endpoint
supplies absent or generic type metadata, so a Lyngdorf-style range remains
unambiguous even at zero. It retains the Test.99 update, recovery and
connection-stability safeguards. This build is for internal compatibility and
hardware validation only.
