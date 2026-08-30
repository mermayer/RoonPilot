# RoonPilot third-party notices

This document applies to the RoonPilot firmware 1.0.0 binary distribution.
RoonPilot-authored code and distribution material are proprietary and are
licensed only under the [RoonPilot Personal-Use Binary License 1.0](LICENSE.md)
([German version](LICENSE.de.md)). Third-party components listed below retain
their own licenses. RoonPilot restrictions do not replace or narrow rights
granted independently for those components.

## Direct project dependencies

| Component | Version in firmware 1.0.0 | License |
| --- | --- | --- |
| Espressif ESP-IDF | 6.0.1 | Apache-2.0 plus separately licensed bundled components |
| Espressif CMake Utilities | 0.5.3 | Apache-2.0 |
| Espressif ESP JPEG | 1.3.1 | Apache-2.0 and permissively licensed source files |
| Espressif SH8601 LCD driver | 2.0.1~1 | Apache-2.0 |
| LVGL | 9.5.0 | MIT |
| cJSON | 1.7.x-compatible bundled source | MIT |
| RoonPilot Companion Sleep firmware | 1.0.0 | LicenseRef-RoonPilot-Proprietary for RoonPilot-authored code; ESP-IDF notices below |

## Code and data linked through ESP-IDF and LVGL

The release build also links or embeds the following components. This list is
based on the ESP-IDF 6.0.1 build metadata and a file-tag scan produced with the
official `esp-idf-sbom` tool.

| Component | Version | License or notice |
| --- | --- | --- |
| FreeRTOS Kernel | 10.5.1 | MIT; ESP-IDF integration files may be Apache-2.0 |
| lwIP | 2.2.0 | BSD-3-Clause |
| Mbed TLS | 4.0.0 | Apache-2.0 and BSD-3-Clause files |
| HTTP Parser | 2.7.0 | MIT |
| ESP-IDF/picolibc runtime sources | ESP-IDF 6.0.1 / picolibc 1.8.10 | multiple permissive notices reproduced in `LICENSES/ESP-IDF-picolibc.txt` |
| LVGL Montserrat font data | bundled with LVGL 9.5.0 | SIL Open Font License 1.1 |
| Font Awesome font glyphs in LVGL fonts | Font Awesome Free | SIL Open Font License 1.1; accompanying notices reproduced |
| LodePNG decoder | bundled with LVGL 9.5.0 | zlib-style license |
| mpaland/printf | bundled with LVGL 9.5.0 | MIT |

## Complete texts supplied with the installer and private release archive

The `LICENSES` directory accompanying the binary contains the exact license
and notice files copied from the dependency versions used for that build. The
private release archive also contains:

- `LICENSE.md` -- terms for RoonPilot-authored portions;
- `LICENSE.de.md` -- German version of the RoonPilot terms;
- `NOTICE` -- the required RoonPilot notice;
- this `THIRD_PARTY_NOTICES.md` inventory;
- machine-readable SPDX SBOMs when generated for the release.

The SPDX SBOMs are retained for internal compliance verification. They are not
part of the public installer interface because the public third-party notices
and exact license texts provide the required recipient information without
exposing unnecessary build structure.

ESP-IDF contains files under multiple permissive licenses. If a source-file
header and a summary differ, the source-file header takes precedence. The
full corresponding ESP-IDF 6.0.1 source is available from Espressif at
<https://github.com/espressif/esp-idf/tree/v6.0.1>.

## Trademarks

Roon is a trademark of Roon Labs. RoonPilot is independent and is not
affiliated with or endorsed by Roon Labs. Waveshare product names and imagery
identify the supported hardware and do not imply endorsement. Font Awesome
brand icons, if present in the bundled font, remain trademarks of their
respective owners.
