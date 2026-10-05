# RoonPilot 2.0.2

RoonPilot 2.0.2 is a maintenance release for the Waveshare ESP32-S3 Knob. It restores the ESP32-S3 brownout detector setting used by RoonPilot 1.0.2. The higher threshold in 2.0.1 can cause some boards to reset during startup, including while connected to USB. The detector remains enabled; the separate flash-write protection and calibration-only low-voltage shutdown are unchanged. This correction addresses a confirmed configuration difference, but cannot guarantee that every reported power or restart problem has the same cause.

## Install over USB

Use the [RoonPilot USB Web Installer](https://mermayer.github.io/RoonPilot/firmware/?v=2.0.2-usb) in desktop Chrome or Edge. Select **RoonPilot 2.0.2** and the **USB JTAG/serial debug unit** belonging to the RoonPilot ESP32-S3. The factory installation erases the device, including Wi-Fi settings, profiles and controller-side Bridge pairings. Set up Wi-Fi and Roon again afterward. A configuration backup does not contain Bluetooth pairing keys and cannot, by itself, restore those pairings after an erase. The separate IR Bridges and Companion processor are not flashed.

RoonPilot's **internal online updater remains temporarily suspended**. While it is paused, its automatic check may show “Update manifest is incompatible or incomplete”; this status does not start an installation. Do not use an old update offer shown on the device. IR Bridge firmware 1.0.0 and its separate update channel are unchanged.

If 2.0.2 does not work on your board, the same installer offers a clean [return to RoonPilot 1.0.2](../guides/return-to-1.0.2.md). That path also erases RoonPilot settings. Do not perform battery calibration under 1.0.2.

The features introduced in 2.0.0 remain described in the [2.0.0 release notes](release-notes-2.0.0.md). The [firmware and recovery guide](../guides/firmware-updates-and-recovery.md) gives the full installation sequence.
