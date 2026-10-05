# RoonPilot 2.0.2

RoonPilot 2.0.2 ist ein Wartungsrelease für den Waveshare ESP32-S3 Knob. Es stellt die Brownout-Einstellung des ESP32-S3 wieder her, die RoonPilot 1.0.2 verwendet hat. Die höhere Schwelle in 2.0.1 kann bei manchen Boards bereits beim Start einen Reset auslösen, auch bei USB-Versorgung. Die Brownout-Erkennung bleibt aktiv; der getrennte Flash-Schreibschutz und die ausschließlich während der Kalibrierung wirksame Unterspannungsabschaltung bleiben unverändert. Die Korrektur beseitigt einen nachgewiesenen Konfigurationsunterschied, garantiert aber nicht, dass jedes gemeldete Strom- oder Neustartproblem dieselbe Ursache hat.

## Installation über USB

Den [RoonPilot-USB-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/?v=2.0.2-usb) in Chrome oder Edge auf einem Computer öffnen. **RoonPilot 2.0.2** und die zum RoonPilot-ESP32-S3 gehörende **USB JTAG/serial debug unit** auswählen. Die Werksinstallation löscht das Gerät vollständig, einschließlich WLAN-Einstellungen, Profilen und Bluetooth-Kopplungen des Controllers mit Bridges. Danach WLAN und Roon neu einrichten. Ein Konfigurationsbackup enthält keine Bluetooth-Kopplungsschlüssel und kann diese Kopplungen nach dem Löschen nicht allein wiederherstellen. Die getrennten IR Bridges und der Companion-Prozessor werden nicht geflasht.

Der **interne Online-Updater von RoonPilot bleibt vorübergehend gesperrt**. Während der Sperre kann seine automatische Prüfung „Update manifest is incompatible or incomplete“ melden; dadurch wird keine Installation gestartet. Ein eventuell noch angezeigtes altes Updateangebot bitte nicht benutzen. Die Firmware der IR Bridge 1.0.0 und deren separater Updatekanal bleiben unverändert.

Falls 2.0.2 auf deinem Board nicht funktioniert, bietet derselbe Installer den sauberen [Rückweg zu RoonPilot 1.0.2](../guides/de/return-to-1.0.2.md). Auch dabei werden die RoonPilot-Einstellungen gelöscht. Unter 1.0.2 bitte keine Batteriekalibrierung durchführen.

Die mit 2.0.0 eingeführten Funktionen sind weiterhin in den [Release Notes zu 2.0.0](release-notes-2.0.0.de.md) beschrieben. Die [Anleitung für Firmware und Wiederherstellung](../guides/de/firmware-updates-and-recovery.md) erklärt die Installation Schritt für Schritt.
