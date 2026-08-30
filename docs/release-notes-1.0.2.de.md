# RoonPilot-Firmware 1.0.2

[English](release-notes-1.0.2.md) · **Deutsch**

RoonPilot-Firmware 1.0.2 verbessert die tägliche Bedienung am runden
Display und beschleunigt die lokale Weboberfläche. Zusätzlich gibt es eine
ausdrückliche regionale Zeitzoneneinstellung, damit beide Uhren die korrekte
Ortszeit einschließlich automatischer Sommer-/Winterzeit anzeigen.

## Display und Bedienung am Gerät

- Ein schneller Doppeltipp in die Displaymitte schaltet das Display sofort aus.
  Die nächste Berührung oder Drehbewegung weckt nur das Display und löst nicht
  zugleich die darunterliegende Funktion aus.
- Ein langer Druck in die Mitte sperrt oder entsperrt weiterhin die Bedienung.
  Display-Aus und Bediensperre bleiben damit bewusst getrennte Aktionen.
- Die konfigurierte Uhr erscheint nach ihrer Wartezeit jetzt auch dann, wenn
  die gewählte Zone weiterhin Musik wiedergibt. Dimmen ersetzt den gewünschten
  Wechsel zur Uhr nicht mehr.
- Quick Settings wird nach 30 Sekunden ohne Bedienung automatisch beendet und
  kehrt zum normalen Player- oder Uhrbildschirm zurück.
- **Quick Settings -> System** zeigt neben IP-Adresse, verbundenem Roon Server
  und Verbindungsstatus nun auch den laufenden Firmwarestand.

## Korrekte Ortszeit

- Unter **Display & Controls** lässt sich die regionale Zeitzone ausdrücklich
  auswählen.
- Roon liefert keine verlässliche Gerätezeitzone. RoonPilot speichert die
  gewählte Regel deshalb lokal und führt Sommer-/Winterzeitwechsel automatisch
  aus.
- Vorhandene Installationen übernehmen zunächst UTC. Für Deutschland wird
  einmalig **Central Europe (CET/CEST)** ausgewählt.
- Die Zeitzone ist in Export und Import der Konfiguration enthalten. WLAN-
  Passwörter und Roon-Freigabegeheimnisse bleiben weiterhin ausgeschlossen.

## Verbesserungen der Weboberfläche

- Status-, Konfigurations- und Roon-Daten werden mit weniger blockierenden
  Anfragen geladen. Das verbessert die Reaktionszeit deutlich und verhindert
  unvollständige Zonen- oder Coveranzeigen auf der Übersichtsseite.
- Die eigene Firmware-Update-Seite besitzt wieder einen sichtbaren
  **Back to System**-Button.
- Roon-Verbindungs-, Erkennungs-, Freigabe-, Zonen-, Transport-, Browse-,
  Cover- und Fehlermeldungen der englischen Geräteoberfläche sind nun
  durchgängig englisch.
- Der Hilfetext zur Lautstärkebegrenzung beschreibt den von der gewählten Zone
  gemeldeten nativen Bereich, ohne ein bestimmtes Testgerät zu nennen.

## Roon-Lautstärkekompatibilität

RoonPilot erkennt die von Roon gemeldeten Lautstärketypen `number`, `db` und
`incremental` weiterhin automatisch. Bei dB-Endpunkten werden tatsächlicher
Wert, native Schrittweite und gemeldete Grenzen verwendet. Änderungen per
Drehring beginnen daher beim aktuellen Wert statt bei null. Eine manuelle
Einheitenauswahl oder erfundene Umrechnung auf 0 bis 100 gibt es nicht.

## Installation und Aktualisierung

- Bestehende RoonPilot-Installationen werden lokal über **System -> Firmware
  update** aktualisiert. Konfiguration, WLAN und Roon-Freigabe bleiben erhalten.
- Neuinstallationen erfolgen über den autorisierten Webinstaller. Eine Factory-
  Installation löscht den primären ESP32-S3 vollständig, bevor das Abbild
  geschrieben wird.
- Factory- und OTA-Abbilder werden bewusst nicht als separate Downloads
  angeboten. Nur das Companion-Sleep-Abbild bleibt getrennt verfügbar, weil es
  für den zweiten, klassischen ESP32 bestimmt ist.
- Für eine Factory-Installation ist ein aktueller Chromium-Desktopbrowser mit
  Web Serial erforderlich.
- Eine Firmwareinstallation bleibt immer eine ausdrückliche Aktion des
  Besitzers; RoonPilot installiert Updates niemals automatisch.

## Sicherheit, Datenschutz und Lizenz

Die öffentlichen Factory- und OTA-Abbilder enthalten weder Entwicklungs-WLAN,
WLAN-Passwort, Roon-Serveradresse, Pairing-Token noch privaten Signaturschlüssel.
Die Firmware verwendet signierte A/B-Updates mit Startvalidierung und Rollback.

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
