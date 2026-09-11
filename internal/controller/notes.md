# Internal RoonPilot OTA validation

This prerelease build exists only for controlled hardware validation of the
signed online-update path. It is not a public RoonPilot release and must not be
linked from the project website, installer, documentation, or stable update
channel.

Test.99 contains the same recovery fix validated in Test.98: completed
asynchronous HTTP sessions are closed in both
directions. This prevents abandoned browser connections from remaining in
lwIP's FIN_WAIT_2 state and eventually starving larger web responses after
heavy or interrupted parallel traffic. It retains the Test.97 selective
configuration writes, serialized controller/Bridge update work and validated
main-task stack reserve. The new version number exists solely to validate the
case where Controller and Bridge updates are available at the same time. This
build is for internal recovery, update and connection-stability testing only.
