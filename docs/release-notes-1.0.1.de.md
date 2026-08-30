# RoonPilot-Firmware 1.0.1

[English](release-notes-1.0.1.md) · **Deutsch**

RoonPilot-Firmware 1.0.1 ergänzt eine klare und datensparsame
Update-Erkennung, ohne die bewusste manuelle Installation zu verändern.
RoonPilot kann auf eine neue signierte Firmware hinweisen, lädt oder
installiert sie aber niemals ohne eine ausdrückliche Aktion des Besitzers.

## Update-Hinweise

- Eine auffällige Update-Meldung erscheint in der Statuszeile jeder lokalen
  Webseite.
- Die Seite **System** zeigt installierte und verfügbare Version, Zeitpunkt der
  letzten Prüfung sowie den aktuellen Update-Status.
- Ein Klick auf die Meldung öffnet direkt **System -> Firmware update**.
- Automatische Manifestprüfung und Hinweis auf dem runden Display lassen sich
  unabhängig voneinander ein- und ausschalten.
- Der Gerätehinweis erscheint höchstens einmal innerhalb von 24 Stunden. Er
  lässt sich über **LATER**, per Berührung oder durch Drehen des Rings schließen.
- Er unterbricht weder Kopplung, Ersteinrichtung, Zonenwahl, Quick Settings,
  Lautstärkeregelung, Firmwareinstallation, Akkukalibrierung, Uhr/Idle-Modus
  noch ein gesperrtes Gerät.
- Es gibt weiterhin keinen automatischen Firmwaredownload und keine
  automatische Installation.
- Der Prüfzeitpunkt wird erst nach dem vollständig beendeten HTTPS-Task in NVS
  gespeichert. Damit bleibt der Flashzugriff auch mit PSRAM-Taskstack sicher.

## Native Roon-Lautstärkeverarbeitung

- RoonPilot unterscheidet die von Roon gemeldeten Lautstärketypen `number`,
  `db` und `incremental` automatisch; eine manuelle Auswahl der Einheit ist
  nicht notwendig.
- Ein dB-Endpunkt wird mit dem tatsächlich von Roon gemeldeten Wert angezeigt,
  beispielsweise `-40 dB`, und nicht künstlich in 0 bis 100 umgerechnet.
- Änderungen per Drehring beginnen beim aktuellen Wert des Endpunkts und
  verwenden dessen native Schrittweite. Zwei konfigurierte Roon-Schritte
  entsprechen bei einem Endpunkt mit 1-dB-Schritt daher 2 dB.
- Gemeldete Minimal- und Maximalwerte werden für Bogen, Webregler und lokale
  Maximallautstärke verwendet. Meldet ein dB-Endpunkt diese Grenzen nicht,
  bleiben relative Regelung und korrekte dB-Anzeige erhalten; RoonPilot erfindet
  aber keinen unsicheren Absolutbereich oder Prozentwert.

## Kompatibilität und vorhandene Funktionen

- Direkte Roon-Erkennung, Freigabe und Zonensteuerung ohne Zusatzdienst,
  Bridge oder Cloudkonto
- Classic-, Focus- und Orbit-Player mit vom Cover abgeleiteten Hintergründen
- Touch-Bedienung, Wischgesten für Zurück/Weiter und native Prozent-/dB-
  Lautstärke per Drehring
- konfigurierbare Zonenanzeige und primäre Steuerzone
- Bahnhofs- und Digitaluhr mit getrennten Tag-/Nacht-Helligkeiten
- Quick Settings am Gerät für Systeminformationen, Display, Uhr, Akzentfarbe
  und Lautstärke
- konfigurierbare maximale Lautstärke
- Bediensperre durch langen Druck mit sichtbarem Sperrhinweis
- WLAN-Access-Point bei Ersteinrichtung und Rückfall bei falschen Zugangsdaten
- geführte Ersteinrichtung, Roon-Freigabe und verpflichtende Zonenwahl
- lokale Konfigurationswebseite, sicherer Export/Import und Diagnose
- gerätespezifische Akkulaufzeitkalibrierung mit Wiederherstellungspunkten
- abgesicherter Deep Sleep des ESP32-S3 und Aufwecken per Touch oder Drehring
- signierte A/B-Onlineupdates, Startvalidierung und Rollback
- browserbasierte Factory-Installation für den primären ESP32-S3
- getrennte Stromspar-Firmware für den zusätzlichen klassischen ESP32

## Installation und Aktualisierung

- Eine Neuinstallation erfolgt über den autorisierten Webinstaller. Dabei wird
  der primäre ESP32-S3 vollständig gelöscht und mit dem Factory-Image bespielt.
- Bestehende RoonPilot-Installationen werden lokal über **System -> Firmware
  update** aktualisiert. Konfiguration, WLAN und Roon-Freigabe bleiben erhalten.
- Factory- und OTA-Binärdateien werden bewusst nicht als separate Downloads
  angeboten. Nur das Companion-Sleep-Image bleibt getrennt verfügbar, weil es
  für den zweiten, klassischen ESP32 bestimmt ist.
- Für eine Factory-Installation ist ein aktueller Chromium-Desktopbrowser mit
  Web Serial erforderlich.

## Sicherheit, Datenschutz und Lizenz

Die öffentlichen Factory- und OTA-Abbilder enthalten weder Entwicklungs-WLAN,
WLAN-Passwort, Roon-Serveradresse, Pairing-Token noch privaten Signaturschlüssel.
Die Updateprüfung lädt ausschließlich das öffentliche signierte Manifest per
HTTPS. Beide Update-Einstellungen und die Zeitpunkte der letzten Prüfung bzw.
Meldung bleiben lokal auf dem Gerät.

Die von RoonPilot erstellten Bestandteile unterliegen der RoonPilot Personal-Use
Binary License 1.0. Drittanbieterbestandteile behalten ihre eigenen Lizenzen
und Hinweise.

## Wichtiger Waveshare-Hinweis

Das Waveshare-Modul enthält zwei unabhängig programmierbare Prozessoren. Der
Webinstaller ist **ausschließlich für den ESP32-S3** bestimmt. Die Ausrichtung
des USB-C-Steckers entscheidet, welcher Prozessor verbunden ist. Vor jedem
Sichern oder Schreiben den erkannten Chip prüfen und das ESP32-S3-Factory-Image
niemals auf den Companion-ESP32 schreiben.

Funktions- oder Dokumentationsfehler bitte über GitHub Issues melden. Vor dem
Anhängen von Logs oder Screenshots IP-Adressen, WLAN-Namen, Roon-Metadaten und
andere private Angaben entfernen.
