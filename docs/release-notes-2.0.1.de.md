# RoonPilot 2.0.1

[English](release-notes-2.0.1.md) · **Deutsch**

## Korrigierter Online-Umstieg von 1.0.2

Dieses Wartungsrelease behebt den Signaturschlüssel-Konflikt, durch den die
originale RoonPilot-Version 1.0.2 das Online-Update auf 2.0.0 nicht annehmen
konnte. Es verwendet wieder den ursprünglichen RoonPilot-Signaturschlüssel.
Signaturprüfung, SHA-256-Prüfung und automatische Rückkehr bei einem
fehlgeschlagenen Start bleiben erhalten.

Auf der lokalen RoonPilot-Webseite **System → Firmware update** öffnen,
**Check for updates** wählen und **Download and install** bestätigen, sobald
**2.0.1** angeboten wird. Das Gerät an einer stabilen Stromversorgung lassen
und den Neustart abwarten. Für diesen Online-Umstieg sind weder eine
USB-Browserinstallation noch das Zurücksetzen der Einstellungen erforderlich.

Die Firmware enthält die in den
[Release Notes zu 2.0.0](release-notes-2.0.0.de.md) beschriebenen Funktionen.
Die IR Bridge behält ihre unabhängige Firmware-Version **1.0.0** und wird
durch dieses Update nicht installiert.
