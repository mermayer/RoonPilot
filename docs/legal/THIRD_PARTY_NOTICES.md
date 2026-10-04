# RoonPilot third-party notices

This document applies to the RoonPilot firmware 2.0.0/2.0.1 and IR Bridge 1.0.0
binary distributions. The unchanged Companion 1.0.1 and original 1.0.2 recovery
image retain their [original dependency notices](THIRD_PARTY_NOTICES-1.0.2.md)
and the license files already supplied in the root `LICENSES` directory.
RoonPilot-authored code and distribution material are proprietary and are
licensed only under the [RoonPilot Personal-Use Binary License 1.0](LICENSE.md)
([German version](LICENSE.de.md)). Third-party components listed below retain
their own licenses. RoonPilot restrictions do not replace or narrow rights
granted independently for those components.

## Direct project dependencies

| Component | Version in firmware 2.0.0/2.0.1 | License |
| --- | --- | --- |
| Espressif ESP-IDF | 6.0.3 | Apache-2.0 plus separately licensed bundled components |
| Espressif CMake Utilities | 0.5.3 | Apache-2.0 |
| Espressif ESP JPEG | 1.3.1 | Apache-2.0 and permissively licensed source files |
| Espressif SH8601 LCD driver | 2.0.1~1 | Apache-2.0 |
| LVGL | 9.5.0 | MIT |
| cJSON | 1.7.x-compatible bundled source | MIT |
| RoonPilot Companion Sleep firmware | 1.0.1, unchanged | RoonPilot-authored code uses the project license; original ESP-IDF 6.0.1 notices remain supplied separately |

## Bluetooth and IR Bridge dependencies

The controller and IR Bridge use Apache Mynewt NimBLE as bundled with ESP-IDF
6.0.3. The Bridge also uses Espressif's LED Strip component 3.0.3 for its onboard
status LED. Its infrared processing is part of the RoonPilot-authored firmware.

| Component | Distribution | License or notice |
| --- | --- | --- |
| ESP-IDF 6.0.3 | Controller and Bridge | Apache-2.0 and separately licensed bundled components |
| Apache Mynewt NimBLE | Controller and Bridge | Apache-2.0; the original NimBLE NOTICE is supplied |
| TinyCrypt and micro-ecc notices bundled with NimBLE | Bluetooth dependencies | Permissive BSD-style license texts are supplied |
| Espressif LED Strip | Bridge, version 3.0.3 | Apache-2.0 |

## Code and data linked through ESP-IDF and LVGL

The release build also links or embeds the following components. This list is
based on the release dependency and build metadata. Display and font components
apply to RoonPilot, not to the display-less IR Bridge.

| Component | Version | License or notice |
| --- | --- | --- |
| FreeRTOS Kernel | 10.5.1 | MIT; ESP-IDF integration files may be Apache-2.0 |
| lwIP | 2.2.0 | BSD-3-Clause |
| Mbed TLS | 4.1.1 | Apache-2.0 and BSD-3-Clause files |
| HTTP Parser | 2.7.0 | MIT |
| ESP-IDF/picolibc runtime sources | ESP-IDF 6.0.3 / picolibc 1.8.10 | multiple permissive notices reproduced in `LICENSES/releases/2.0.0/ESP-IDF-picolibc.txt` |
| LVGL Montserrat font data | bundled with LVGL 9.5.0 | SIL Open Font License 1.1 |
| DejaVu Sans glyph data for Greek, Cyrillic and common Unicode symbols | bundled with LVGL 9.5.0 | DejaVu Fonts License |
| Font Awesome font glyphs in LVGL fonts | Font Awesome Free | SIL Open Font License 1.1; accompanying notices reproduced |
| LodePNG decoder | bundled with LVGL 9.5.0 | zlib-style license |
| mpaland/printf | bundled with LVGL 9.5.0 | MIT |

## Complete texts supplied with the installers

The [release license directory](LICENSES/releases/2.0.0/) contains the exact
license and notice files copied from the dependency versions used for the new
firmware, including NimBLE's original NOTICE, TinyCrypt/micro-ecc notices and
the LED Strip license. These files are also supplied beside the web installers.
The following documents identify the terms for the distribution:

- `LICENSE.md` -- terms for RoonPilot-authored portions;
- `LICENSE.de.md` -- German version of the RoonPilot terms;
- `NOTICE` -- the required RoonPilot notice;
- this `THIRD_PARTY_NOTICES.md` inventory;

ESP-IDF contains files under multiple permissive licenses. If a source-file
header and a summary differ, the source-file header takes precedence. The
full corresponding ESP-IDF 6.0.3 source is available from Espressif at
<https://github.com/espressif/esp-idf/tree/v6.0.3>.

## Trademarks

Roon is a trademark of Roon Labs. RoonPilot is independent and is not
affiliated with or endorsed by Roon Labs. Waveshare product names and imagery
identify the supported hardware and do not imply endorsement. Font Awesome
brand icons, if present in the bundled font, remain trademarks of their
respective owners.
