# Lizenzierung und erlaubte Nutzung

[Dokumentationsindex](README.md) - [English](../licensing.md)

Diese Seite ist eine praktische Zusammenfassung und keine Rechtsberatung.
Massgeblich ist die vollstaendige
[RoonPilot-Lizenz fuer private Binaernutzung 1.0](../../LICENSE.de.md).

## Was die RoonPilot-Lizenz erlaubt

Senior Coder gestattet fuer RoonPilot-eigene Firmware, Programme, Grafiken und
Integration ausschliesslich:

- die offizielle, unveraenderte Hauptfirmware mit dem autorisierten Web
  Installer auf der unterstuetzten Waveshare-Hardware zu installieren;
- diese offizielle Firmware privat und nicht kommerziell auszufuehren und zu
  konfigurieren;
- offizielle signierte Online-Updates direkt am Geraet zu installieren;
- das offizielle unveraenderte Companion-Sleep-Abbild nach der vorgeschriebenen
  Sicherung auf dem Begleitprozessor zu installieren.

Eine Quellcodeveroeffentlichung ist nicht erforderlich, weil kein Recht zur
Veraenderung von RoonPilot eingeraeumt wird.

## Was nicht erlaubt ist

Ohne vorherige schriftliche Erlaubnis sind insbesondere untersagt:

- Kopieren, Weitergeben, Spiegeln, Verkaufen, Unterlizenzieren oder sonstiges
  Bereitstellen der RoonPilot-Firmware;
- Veraendern, Patchen, Uebersetzen oder Erstellen abgeleiteter Versionen;
- Reverse Engineering, Dekompilieren, Disassemblieren, Entschluesseln,
  Entpacken, Dumpen oder Analysieren zur Rueckgewinnung von Quellcode, Entwurf
  oder Implementierungsdetails;
- Umgehen von Installer-, Signatur-, Update- oder Zugangskontrollen;
- Nutzung von RoonPilot oder daraus gewonnenen Informationen fuer andere
  Produkte, kommerzielle Dienste, Produktentwicklung, Beschaffungspruefung oder
  Wettbewerbsanalyse.

Zwingende gesetzliche Rechte bleiben unberuehrt. Das EU-Softwarerecht kann
rechtmaessigen Nutzern unter engen Voraussetzungen beispielsweise eine
notwendige Sicherung, Beobachtung des normalen Programmablaufs oder bestimmte
Interoperabilitaetshandlungen erlauben. Rechte, auf die gesetzlich nicht
verzichtet werden kann, schliesst die Lizenz nicht aus.

## Bereitstellungsmodell

ESP32-S3-Factory- und OTA-Abbilder werden nicht als einzelne Downloads
angeboten. Die Erstinstallation erfolgt nur durch den autorisierten Web
Installer; spaetere Updates installiert RoonPilot selbst aus dem signierten
Online-Kanal. Nur die Companion-Sleep-Firmware wird als eigene Firmwaredatei
bereitgestellt.

Der Installer verlinkt Lizenz, Pflichthinweis, Drittanbieterverzeichnis und die
exakten Drittanbieterlizenzen. Interne Buildarchive, Symboldateien, Maps, SBOMs
und Dateien der Hauptfirmware gehoeren nicht zur oeffentlichen Downloadflaeche.

## Drittanbieter bleiben getrennt

ESP-IDF, LVGL, cJSON, Schriftarten und weitere Abhaengigkeiten behalten ihre
eigenen Apache-, MIT-, BSD-, OFL- und sonstigen Lizenzen. Die proprietaeren
RoonPilot-Bedingungen nehmen keine Rechte zurueck, die deren Urheber
unabhaengig gewaehrt haben. Das Verzeichnis steht in den
[Drittanbieterhinweisen](../../THIRD_PARTY_NOTICES.md), die exakten Texte unter
[`docs/legal/LICENSES/`](../../docs/legal/LICENSES/).

| Beabsichtigte Handlung | Ergebnis |
| --- | --- |
| Offizielle Firmware zu Hause ueber den Web Installer installieren | Erlaubt |
| Offizielle Firmware privat und nicht kommerziell nutzen | Erlaubt |
| Offizielles signiertes Update am Geraet installieren | Erlaubt |
| RoonPilot veraendern, teilen, spiegeln oder neu veroeffentlichen | Nicht erlaubt |
| Interne Implementierung durch Reverse Engineering zurueckgewinnen | Nicht erlaubt, ausser bei zwingenden gesetzlichen Rechten |
| RoonPilot fuer Produkt, Dienst oder Wettbewerbspruefung verwenden | Vorherige schriftliche Erlaubnis erforderlich |
| Unabhaengig MIT-/Apache-/BSD-lizenzierte Abhaengigkeit nutzen | Deren eigene Lizenz gilt |

Vor jeder nicht ausdruecklich erlaubten Nutzung Senior Coder kontaktieren.
