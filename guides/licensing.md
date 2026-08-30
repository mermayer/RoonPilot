# Licensing and permitted use

[Documentation index](README.md) - [Deutsch](de/licensing.md)

This is a practical summary, not legal advice. The complete
[RoonPilot Personal-Use Binary License 1.0](../LICENSE.md) controls.

## What the RoonPilot licence permits

For RoonPilot-authored firmware, code, assets and integration, Senior Coder
grants a narrow right to:

- install the official, unmodified primary firmware through the authorized Web
  Installer on the supported Waveshare board;
- run and configure that official firmware privately and noncommercially;
- install official signed online updates from the device page;
- download and install the official unmodified Companion Sleep image on the
  companion processor after making the required backup.

No source-code publication is required because no right to modify RoonPilot is
granted.

## What is not permitted

Without separate written permission, the licence prohibits:

- copying, redistributing, mirroring, selling, sublicensing or otherwise
  supplying RoonPilot firmware;
- modifying, patching, translating or creating derivative versions;
- reverse engineering, decompiling, disassembling, decrypting, unpacking,
  dumping or analysing RoonPilot to recover source, design or implementation;
- bypassing installer, signature, update or access controls;
- using RoonPilot or recovered information in another product, commercial
  service, product-development effort, procurement evaluation or competitive
  analysis.

Mandatory statutory rights still apply. In particular, EU software law may
preserve narrow rights for a lawful user to make a necessary backup, observe
normal operation, or obtain interoperability information under strict
conditions. The licence does not attempt to exclude rights that cannot legally
be waived.

## Distribution model

The ESP32-S3 Factory and OTA images are not offered as standalone downloads.
Initial installation is available only through the authorized Web Installer;
later primary updates are installed by RoonPilot itself from the signed online
channel. The Companion Sleep image is the only separately downloadable
RoonPilot firmware file.

The installer links the licence, required notice, third-party inventory and
exact third-party licence texts. Internal build archives, symbol files, maps,
SBOMs and primary firmware files are not part of the public download surface.

## Third-party components remain separate

ESP-IDF, LVGL, cJSON, fonts and other dependencies retain their own Apache,
MIT, BSD, OFL and other licences. RoonPilot's proprietary terms cannot revoke
rights those authors granted independently. The exact inventory is in
[Third-party notices](../THIRD_PARTY_NOTICES.md), with licence texts in
[`docs/legal/LICENSES/`](../docs/legal/LICENSES/).

| Intended action | Result |
| --- | --- |
| Install official firmware at home through the Web Installer | Permitted |
| Use official firmware privately and noncommercially | Permitted |
| Install an official signed update on the device | Permitted |
| Modify, share, mirror or republish RoonPilot firmware | Not permitted |
| Reverse engineer or recover its internal implementation | Not permitted, except non-waivable statutory rights |
| Use RoonPilot for a product, service or competitive evaluation | Requires prior written permission |
| Reuse an independently MIT/Apache/BSD-licensed dependency | Governed by that dependency's licence |

Contact Senior Coder before any use not expressly granted by the licence.
