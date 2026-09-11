# Internal RoonPilot OTA validation

This prerelease build exists only for controlled hardware validation of the
signed online-update path. It is not a public RoonPilot release and must not be
linked from the project website, installer, documentation, or stable update
channel.

Test.98 additionally closes completed asynchronous HTTP sessions in both
directions. This prevents abandoned browser connections from remaining in
lwIP's FIN_WAIT_2 state and eventually starving larger web responses after
heavy or interrupted parallel traffic. It retains the Test.97 selective
configuration writes, serialized controller/Bridge update work and validated
main-task stack reserve. This build is for internal recovery, update and
connection-stability testing only.
