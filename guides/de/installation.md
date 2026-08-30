# RoonPilot installieren

[English](../installation.md) - **Deutsch**

Zuerst [Hardware und beide Prozessoren](hardware-and-two-processors.md) lesen
und [beide Original-Firmwares sichern](factory-backup.md).

## Bereitstellung der Firmware

- Die Hauptfirmware fuer den ESP32-S3 wird nur mit dem autorisierten Web
  Installer installiert. Factory- und OTA-Dateien werden nicht als Downloads
  angeboten. Der [öffentliche RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/)
  darf erst nach dem Erstellen beider Sicherungen verwendet werden.
- Spaetere Updates installiert RoonPilot direkt aus dem signierten
  Online-Kanal.
- Nur die optionale Companion-Sleep-Firmware wird als eigene Datei angeboten.

Offizielle Abbilder enthalten kein WLAN-Kennwort, keine Entwicklungs-SSID,
keine Roon-Serveradresse, kein Kopplungstoken und keinen privaten
Signaturschluessel. Eine saubere Installation startet deshalb den WLAN-AP.

## ESP32-S3 mit dem Browser installieren

Der Web Installer funktioniert **nur in einem aktuellen Chromium-
Desktopbrowser mit Web Serial**, etwa Chrome, Edge, Chromium, Brave oder Opera.
Firefox, Safari, Smartphones und Tablets funktionieren nicht. Die bereitgestellte
HTTPS-Installerseite und ein direktes USB-Datenkabel sind erforderlich.

### Welches Gerät muss unter macOS ausgewählt werden?

Nach **RoonPilot installieren** bezeichnet Chrome die richtige native
ESP32-S3-Verbindung normalerweise als **USB JTAG/serial debug unit**. Je nach
Chrome- und macOS-Version kann stattdessen ein serieller Name angezeigt werden,
der mit `cu.usbmodem` beginnt. Die eindeutige USB-Kennung lautet Espressif
Vendor-ID `303A` und Product-ID `1001`.

Keinen Eintrag namens `CH340`, `USB2.0-Serial`, `USB Serial` oder
`cu.wchusbserial` auswählen. Diese Namen gehören zur Schnittstelle des
separaten Companion-ESP32. Bietet Chrome nur diese Schnittstelle an, das Kabel
abziehen, den USB-C-Stecker am Gerät um 180 Grad drehen, wieder verbinden und
den Installationsdialog erneut öffnen.

1. ESP-IDF Monitor, PuTTY, Arduino Serial Monitor und alle Programme schliessen,
   die den COM-Port geoeffnet haben koennten.
2. Board anschliessen, Port bestimmen und bei Unsicherheit mit `esptool chip-id`
   eindeutig **ESP32-S3** bestaetigen.
3. Den [autorisierten RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/)
   mit Chrome oder Edge oeffnen.
4. Zwei-Prozessor-Warnung lesen. Bestaetigen, dass beide Original-Flashs
   gesichert sind und der ausgewaehlte Prozessor ESP32-S3 ist.
5. RoonPilot-Lizenz fuer private Binaernutzung lesen und akzeptieren.
6. **RoonPilot installieren** waehlen, den geprueften Port oeffnen und das
   vollstaendige Loeschen erst nach Kontrolle der Sicherung bestaetigen.
7. USB waehrend Loeschen, Schreiben und Verifizieren nicht trennen.
8. USB trennen und in derselben ESP32-S3-Orientierung neu verbinden.
9. RoonPilot-Startbildschirm abwarten und mit dem Einrichtungs-AP fortfahren.

<img src="../../assets/web-ui/11-usb-web-installer.png" alt="RoonPilot USB Web Installer" width="100%">

> [!WARNING]
> Die USB-C-Orientierung waehlt einen von zwei unabhaengigen Prozessoren. Der
> Web Installer ist ausschliesslich fuer den ESP32-S3. Eine Factory-Installation
> loescht dort Firmware, WLAN, Roon-Freigabe, Einstellungen und Kalibrierdaten.

### Muss vorher separat gelöscht werden?

Nein. Es ist weder ein separates Löschkommando noch ein vorheriger
Löschvorgang erforderlich. Bei einer Erstinstallation oder vollständigen
Wiederherstellung im Web Installer **Erase device** auswählen beziehungsweise
bestätigen. Das RoonPilot-Manifest fordert diese Auswahl absichtlich an. Das
Löschen im Installer und das unmittelbar anschließende Schreiben des
Factory-Abbilds bilden zusammen den unterstützten Ablauf für eine saubere
Installation. So bleiben keine alten NVS-, WLAN- oder Konfigurationsdaten in
nicht überschriebenen Flashbereichen erhalten.

Gelöscht wird nur der primäre ESP32-S3, nicht der Companion-ESP32. Auf dem
ESP32-S3 gehen dabei jedoch alle WLAN-Daten, die Roon-Freigabe, Zonenwahl,
Einstellungen und die Akkukalibrierung verloren. Für ein normales Onlineupdate
unter **System - Firmware update** niemals löschen und nicht zum
Factory-Webinstaller zurückkehren.

## Spaetere Updates

Die IP-Adresse von RoonPilot oeffnen und **System - Firmware update** waehlen.
Mit **Check for updates** und danach **Download and install** wird eine
freigegebene signierte Version installiert. RoonPilot schreibt den inaktiven
A/B-Slot und behaelt die Konfiguration normalerweise bei. Ein manueller Upload
der Hauptfirmware ist absichtlich nicht vorhanden.

Fuer normale Updates nicht zum Factory-Installer zurueckkehren, weil er immer
die komplette ESP32-S3-Konfiguration loescht.

## Optionale Companion-Installation

Die Companion-Sleep-Firmware ist fuer RoonPilot nicht erforderlich. Sie
deaktiviert den ungenutzten DAC-Pfad und versetzt den zweiten Prozessor in Deep
Sleep. Sie wird getrennt mit `esptool` installiert und setzt eine gepruefte
vollstaendige 4-MB-Sicherung voraus.

Die vollstaendige Anleitung fuer Werkzeug, Download, Pruefsumme,
Chiperkennung, Sicherung, Installation und Wiederherstellung steht unter
[Companion-Firmware](companion-firmware.md).

Danach folgt die [Ersteinrichtung](first-time-setup.md).
