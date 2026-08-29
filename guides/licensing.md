# Licensing and redistribution

[Documentation index](README.md) · [Deutsch](de/licensing.md)

This page is a practical summary. The actual license texts control if this
summary and a license differ. It is not legal advice.

## Short answer

For the parts written specifically for RoonPilot:

- private and other noncommercial use is permitted without a fee;
- commercial use requires separate written permission from Senior Coder;
- the license does not require users to publish their modified source code;
- anyone redistributing RoonPilot must also provide the PolyForm terms or its
  URL and the `Required Notice` supplied with the firmware.

These rules come from the
[PolyForm Noncommercial License 1.0.0](../LICENSE.md). “Noncommercial” is
defined by that license, not merely by whether money changes hands. Ask for
separate permission before a business, paid product, commercial service or
anticipated commercial application uses RoonPilot.

## Third-party code is separate

RoonPilot includes ESP-IDF, LVGL, cJSON, fonts and other third-party code.
Those portions keep their original Apache, MIT, BSD, OFL and other permissive
terms. RoonPilot's noncommercial condition does not revoke rights which those
authors granted independently, including commercial rights to their own code.

The full inventory is in
[Third-party notices](../THIRD_PARTY_NOTICES.md). Exact texts and attribution
files for firmware 1.0.0 are stored in [`docs/legal/`](../docs/legal/).

## Source-code publication

Neither PolyForm Noncommercial 1.0.0 nor the listed MIT, Apache-2.0, BSD and
OFL dependencies imposes a general requirement to publish a RoonPilot user's
modified application source. Redistribution still has notice, attribution and
license-copy obligations. A recipient must not remove third-party notices or
apply the PolyForm restriction to independently licensed third-party code.

## What accompanies a binary

Every RoonPilot release package contains:

- `LICENSE.md` for RoonPilot-authored portions;
- `NOTICE` with the mandatory `Required Notice` line;
- `THIRD_PARTY_NOTICES.md` with the component inventory;
- `LICENSES/` with exact dependency license and copyright files;
- `roonpilot.spdx`, the machine-readable SPDX software bill of materials.
- `roonpilot-companion.spdx`, the SBOM for the optional companion image.

The unlinked validation download page displays these links next to the binary
downloads. Future public releases will retain the same legal bundle.

## Common cases

| Intended use | Practical result |
| --- | --- |
| Personal Roon remote at home | Permitted noncommercial use |
| Hobby modification or private experiment | Permitted when there is no anticipated commercial application |
| Sharing an unmodified or modified build with other hobbyists | Permitted for noncommercial purposes; include all required notices |
| Selling pre-flashed devices or including RoonPilot in a paid product/service | Requires separate written permission for RoonPilot-authored portions |
| Reusing an independently licensed MIT/Apache/BSD component | Governed by that component's own license, not PolyForm |

When a planned use does not clearly fit one row, obtain permission before
distributing or using it commercially.
