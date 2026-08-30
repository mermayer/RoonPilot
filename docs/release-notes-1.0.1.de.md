# RoonPilot-Firmware 1.0.1

[English](release-notes-1.0.1.md) Â· **Deutsch**

RoonPilot-Firmware 1.0.1 ergÃ¤nzt eine klare und datensparsame
Update-Erkennung, ohne die bewusste manuelle Installation zu verÃ¤ndern.
RoonPilot kann auf eine neue signierte Firmware hinweisen, lÃ¤dt oder
installiert sie aber niemals ohne eine ausdrÃ¼ckliche Aktion des Besitzers.

## Update-Hinweise

- Eine auffÃ¤llige Update-Meldung erscheint in der Statuszeile jeder lokalen
  Webseite.
- Die Seite **System** zeigt installierte und verfÃ¼gbare Version, Zeitpunkt der
  letzten PrÃ¼fung sowie den aktuellen Update-Status.
- Ein Klick auf die Meldung Ã¶ffnet direkt **System -> Firmware update**.
- Automatische ManifestprÃ¼fung und Hinweis auf dem runden Display lassen sich
  unabhÃ¤ngig voneinander ein- und ausschalten.
- Der GerÃ¤tehinweis erscheint hÃ¶chstens einmal innerhalb von 24 Stunden. Er
  lÃ¤sst sich Ã¼ber **LATER**, per BerÃ¼hrung oder durch Drehen des Rings schlieÃŸen.
- Er unterbricht weder Kopplung, Ersteinrichtung, Zonenwahl, Quick Settings,
  LautstÃ¤rkeregelung, Firmwareinstallation, Akkukalibrierung, Uhr/Idle-Modus
  noch ein gesperrtes GerÃ¤t.
- Es gibt weiterhin keinen automatischen Firmwaredownload und keine
  automatische Installation.
- Der PrÃ¼fzeitpunkt wird erst nach dem vollstÃ¤ndig beendeten HTTPS-Task in NVS
  gespeichert. Damit bleibt der Flashzugriff auch mit PSRAM-Taskstack sicher.

## KompatibilitÃ¤t und vorhandene Funktionen

- Direkte Roon-Erkennung, Freigabe und Zonensteuerung ohne Zusatzdienst,
  Bridge oder Cloudkonto
- Classic-, Focus- und Orbit-Player mit vom Cover abgeleiteten HintergrÃ¼nden
- Touch-Bedienung, Wischgesten fÃ¼r ZurÃ¼ck/Weiter und LautstÃ¤rke per Drehring
- konfigurierbare Zonenanzeige und primÃ¤re Steuerzone
- Bahnhofs- und Digitaluhr mit getrennten Tag-/Nacht-Helligkeiten
- Quick Settings am GerÃ¤t fÃ¼r Systeminformationen, Display, Uhr, Akzentfarbe
  und LautstÃ¤rke
- konfigurierbare maximale LautstÃ¤rke
- Bediensperre durch langen Druck mit sichtbarem Sperrhinweis
- WLAN-Access-Point bei Ersteinrichtung und RÃ¼ckfall bei falschen Zugangsdaten
- gefÃ¼hrte Ersteinrichtung, Roon-Freigabe und verpflichtende Zonenwahl
- lokale Konfigurationswebseite, sicherer Export/Import und Diagnose
- gerÃ¤tespezifische Akkulaufzeitkalibrierung mit Wiederherstellungspunkten
- abgesicherter Deep Sleep des ESP32-S3 und Aufwecken per Touch oder Drehring
- signierte A/B-Onlineupdates, Startvalidierung und Rollback
- browserbasierte Factory-Installation fÃ¼r den primÃ¤ren ESP32-S3
- getrennte Stromspar-Firmware fÃ¼r den zusÃ¤tzlichen klassischen ESP32

## Installation und Aktualisierung

- Eine Neuinstallation erfolgt Ã¼ber den autorisierten Webinstaller. Dabei wird
  der primÃ¤re ESP32-S3 vollstÃ¤ndig gelÃ¶scht und mit dem Factory-Image bespielt.
- Bestehende RoonPilot-Installationen werden lokal Ã¼ber **System -> Firmware
  update** aktualisiert. Konfiguration, WLAN und Roon-Freigabe bleiben erhalten.
- Factory- und OTA-BinÃ¤rdateien werden bewusst nicht als separate Downloads
  angeboten. Nur das Companion-Sleep-Image bleibt getrennt verfÃ¼gbar, weil es
  fÃ¼r den zweiten, klassischen ESP32 bestimmt ist.
- FÃ¼r eine Factory-Installation ist ein aktueller Chromium-Desktopbrowser mit
  Web Serial erforderlich.

## Sicherheit, Datenschutz und Lizenz

Die Ã¶ffentlichen Factory- und OTA-Abbilder enthalten weder Entwicklungs-WLAN,
WLAN-Passwort, Roon-Serveradresse, Pairing-Token noch privaten SignaturschlÃ¼ssel.
Die UpdateprÃ¼fung lÃ¤dt ausschlieÃŸlich das Ã¶ffentliche signierte Manifest per
HTTPS. Beide Update-Einstellungen und die Zeitpunkte der letzten PrÃ¼fung bzw.
Meldung bleiben lokal auf dem GerÃ¤t.

Die von RoonPilot erstellten Bestandteile unterliegen der RoonPilot Personal-Use
Binary License 1.0. Drittanbieterbestandteile behalten ihre eigenen Lizenzen
und Hinweise.

## Wichtiger Waveshare-Hinweis

Das Waveshare-Modul enthÃ¤lt zwei unabhÃ¤ngig programmierbare Prozessoren. Der
Webinstaller ist **ausschlieÃŸlich fÃ¼r den ESP32-S3** bestimmt. Die Ausrichtung
des USB-C-Steckers entscheidet, welcher Prozessor verbunden ist. Vor jedem
Sichern oder Schreiben den erkannten Chip prÃ¼fen und das ESP32-S3-Factory-Image
niemals auf den Companion-ESP32 schreiben.

Funktions- oder Dokumentationsfehler bitte Ã¼ber GitHub Issues melden. Vor dem
AnhÃ¤ngen von Logs oder Screenshots IP-Adressen, WLAN-Namen, Roon-Metadaten und
andere private Angaben entfernen.
