# RoonPilot-Änderungsprotokoll

[English](CHANGELOG.md) · **Deutsch**

Dieses Dokument gibt einen anwenderorientierten Überblick über die
RoonPilot-Versionen. Der aktuelle Installationsweg steht in den
[Release Notes zu 2.0.2](docs/release-notes-2.0.2.de.md). Die
[Release Notes zu 2.0.0](docs/release-notes-2.0.0.de.md) beschreiben die damals
eingeführten Funktionen. Entwicklungsinterne Änderungen ohne sichtbare
Auswirkung sind bewusst nicht aufgeführt.

**Aktuelle USB-Firmware: 2.0.2.** RoonPilot-Onlineupdates sind vorübergehend gesperrt.
Die optionale **IR-Bridge-Firmware 1.0.0** und ihr eigener Updatekanal bleiben unverändert.

## Inhalt

- [2.0.2 — 5. Oktober 2026](#202)
- [2.0.1 — 5. Oktober 2026](#201)
- [2.0.0 — 4. Oktober 2026](#200)
- [Projektrelease 1.0.5 — Firmware 1.0.2](#projektrelease-105--firmware-102)
- [Projektrelease 1.0.4 — Firmware 1.0.1](#projektrelease-104--firmware-101)
- [Firmware 1.0.0](#firmware-100)

## 2.0.2

Für eine saubere Installation über den USB-Webinstaller veröffentlicht. Die Brownout-Erkennung des ESP32-S3 bleibt aktiv, verwendet aber wieder die Schwelle aus 1.0.2. Die höhere Schwelle in 2.0.1 konnte bei manchen Boards schon beim Start zu Resets führen, auch mit USB-Versorgung. Die Unterspannungsabschaltung ausschließlich während der Kalibrierung und der getrennte Flash-Schreibschutz bleiben unverändert. Diese Konfigurationskorrektur beweist nicht, dass jeder gemeldete Neustart dieselbe Ursache hatte.

- [RoonPilot 2.0.2 über USB installieren](https://mermayer.github.io/RoonPilot/de/firmware/?v=2.0.2-usb). Das vollständige Löschen entfernt WLAN, Profile und die auf dem Controller gespeicherten Bridge-Kopplungen. Ein JSON-Backup allein stellt die Kopplungsschlüssel nicht wieder her.
- Der interne RoonPilot-Online-Updater bleibt gesperrt. IR Bridge 1.0.0 und ihr eigener Updatekanal bleiben unverändert.
- Der originale USB-Rückweg zu 1.0.2 bleibt verfügbar. Sein Installer wartet nicht mehr auf das von RoonPilot nicht unterstützte Improv Serial.

Weitere Einzelheiten und Installationshinweise stehen in den [Release Notes zu 2.0.2](docs/release-notes-2.0.2.de.md).

## 2.0.1

Historisches GitHub-Release: 5. Oktober 2026. Die bereits
über den USB-Webinstaller bereitgestellte Firmware 2.0.1 wird durch diese
Dokumentations- und Metadatenaktualisierung nicht verändert. Optionale
IR-Bridge-Firmware: 1.0.0.

### Firmware und Installation

- Verwendet wieder den ursprünglichen RoonPilot-Signaturschlüssel. Signatur-,
  SHA-256- und Boot-Rollback-Prüfungen bleiben erhalten. Das belegt keinen
  zuverlässigen Online-Umstieg für jede vorhandene Installation.
- Bei diesem Release wählte der USB-Webinstaller 2.0.1 mit vollständigem Löschen. Einstellungen,
  Profile, WLAN und die auf RoonPilot gespeicherten Bridge-Kopplungen müssen
  anschließend neu eingerichtet werden.
- Auch eine erneute Installation derselben Version ist eine saubere
  Neuinstallation. Die Einrichtung erfolgt über RoonPilots temporäres WLAN,
  nicht über Improv Serial.
- Konfigurationssicherungen stellen keine Kopplungsschlüssel wieder her.
  Bridges nach einer Neuinstallation erneut koppeln und Profil- sowie
  Zonenzuordnungen prüfen.

### Verfügbarkeit zum Release von 2.0.1

- Der interne RoonPilot-Online-Updater wurde vorübergehend gesperrt. Der aktuelle
  [USB-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/?v=2.0.2-usb)
  wählt jetzt 2.0.2; bitte keinem alten Online-Updateangebot am Gerät folgen.
- Updates der IR Bridge 1.0.0 und der unveränderte Companion bleiben getrennt.
- Der originale USB-Rückweg auf 1.0.2 bleibt verfügbar. Sicherungen nach Version
  getrennt aufbewahren und unter 1.0.2 keine Akkukalibrierung durchführen.
- Damals nannten GitHubs neuestes Release, Metadaten und deutsch-/englische
  Einstiegsseiten einheitlich 2.0.1. Es bleibt als Historie erhalten, nicht
  als aktuelle Installationsempfehlung.

Den vollständigen Installationsweg erklären die
[Release Notes zu 2.0.1](docs/release-notes-2.0.1.de.md). Die mit 2.0.0 eingeführten
Funktionen sind weiterhin enthalten.

## 2.0.0

Veröffentlicht am 4. Oktober 2026. Optionale IR-Bridge-Firmware: 1.0.0.

### Gemeinsame Ausgabe

- Eine gemeinsame Firmware ersetzt die getrennten Ausgaben mit und ohne IR
  Bridge.
- IR Bridge und Bluetooth sind bei einer neuen Installation ausgeschaltet und
  bleiben für reine Roon-Nutzer vollständig optional.
- Ein- und ausgeschaltete Bridge-Konfigurationen sowie ältere
  Konfigurations-Backups bleiben miteinander kompatibel.

### IR Bridge

- Vollständige optionale IR-Steuerung für Lautstärke, Mute und Power.
- Bis zu vier gespeicherte Bridges. Ein Bluetooth-Link wird geteilt; weitere
  zugeordnete Bridges können gleichzeitig über authentifiziertes WLAN
  erreichbar bleiben.
- Automatische Auswahl anhand der aktuellen Roon-Zone sowie vorübergehende
  Wartungsauswahl.
- Geführtes Pairing, sichtbarer Abbruch der Suche und klare Unterscheidung
  zwischen gespeichert, gekoppelt und verbunden.
- Dauerhafte, Bridge-unabhängige IR-Profilbibliothek mit eindeutigen Namen:
  Lernen mit einer beliebigen Bridge mit Empfänger und Zuordnung desselben
  Profils zu mehreren Bridges. Eine Sicherung enthält Bibliothek und getrennte
  Zonen-/Bridge-Zuordnungen.
- Status am Display und im Quickmenü **IR Bridges** einschließlich Funkweg,
  Signalstärke, WLAN und Firmware.
- Automatischer Wechsel und Wiederaufbau von Bluetooth- und WLAN-Verbindungen,
  ohne kurze Störungen unnötig als Vollbildmeldung oder wiederholte
  Ereignislog-Einträge zu zeigen.
- Schnelle IR-Lautstärkesteuerung ohne mehrsekündiges Nachlaufen und mit
  sofortiger Erkennung eines Richtungswechsels.
- Getrennte, ausschließlich manuell gestartete Bridge-Updates mit Prüfung der
  Zusammenarbeit zwischen RoonPilot- und Bridge-Version.

### Roon, Zonen und Musik

- Unterstützung für bis zu 32 sichtbare oder ausgeblendete Roon-Zonen.
- Zuverlässige automatische Zonenauswahl, wenn das bisherige Ziel verschwindet.
- Schnelle native Lautstärkesteuerung ohne verspätetes **Try again** und ohne
  nachlaufende Änderungen.
- Korrekte Anzeige von dB-, dimensionslosen und relativen Roon-Werten.
- Gruppierte Roon-Zonen regeln alle enthaltenen Ausgänge über deren jeweils
  gespeicherten Roon- oder IR-Steuerweg. Ein temporärer Gruppenmixer erlaubt
  außerdem die gezielte Lautstärkeänderung eines einzelnen Ausgangs.
- Neue Musikseite für Roon-Playlisten und My Live Radio.
- Normale oder zufällige Playlist-Wiedergabe sowie direkter Radiostart.
- Sortierung von Playlisten und Radiosendern; dieselbe Reihenfolge gilt auf
  Webseite und Gerät.
- Eigene, einzeln abschaltbare Displaytasten für Playlisten und Live Radio.

### Display und Bedienung

- Classic mit gespielter Zeit, Gesamtlänge und Fortschrittsring um das Cover.
- Feste Ziffernbreite und ruhige sekundengenaue Zeitanzeige.
- Amberfarbenes Lautstärke-Infofeld statt eines vollständigen Bildschirmwechsels.
- Größere und besser getrennte Power-, Mute-, Playlist- und Radio-Tasten.
- Überarbeitete Focus- und Orbit-Ansichten sowie die neue coverlose
  **Aura**-Ansicht.
- Optionaler großer Play/Pause-Touchbereich in der Displaymitte.
- Deutlichere optische Tastenrückmeldung.
- Deutsche und englische Benutzeroberfläche.
- Erweiterte Unicode-Unterstützung einschließlich europäischer Schriften,
  Griechisch, Kyrillisch, Sonderzeichen und ausgewählter Emojis.
- Deutlich größere internationale Zeitzonenauswahl.

### Touch-Feedback

- Ein- und ausschaltbare Vibrationsrückmeldung für Touch-Tasten.
- Stufenlose Stärke von 1 bis 100 Prozent auf Webseite und Gerät.
- Doppelimpuls beim Sperren und Entsperren.
- Keine Vibration beim Drehen, Aufwecken oder bei automatischen Meldungen.

### Zone Management und HTTP

- Zonenbezogene Einstellungen für Lautstärkeschritt, Power, Mute und Bridge.
- Bis zu drei benannte HTTP-ON/OFF-Befehlspaare pro Zone.
- Eigene Freigaben pro Richtung und Paar, ohne Einträge beim Deaktivieren zu
  verlieren.
- Sichere Testtasten für einzelne gespeicherte HTTP-Befehle.
- HTTP-Aktionen funktionieren auch ohne IR Bridge und sind im
  Konfigurations-Backup enthalten.

### Energie und Akku

- CPU-Modi **Performance**, **Balanced** und **Battery saver**.
- Auswahl **Automatic**, **Installed** und **Not installed** für Geräte mit
  oder ohne eingebauten Akku.
- Einstellbare Schwellen für die Erkennung von Akku- und USB-Betrieb.
- Blitzsymbol bei erkannter externer USB-Versorgung.
- Wahlweise Display-Zeitsteuerung nach letzter Bedienung oder nach Ende der
  Zonenwiedergabe.
- Klarere Hinweise zur Akku-Kalibrierung und zu den Unterschieden zwischen
  Computer-USB und einem separaten Ladegerät.
- Kalibrierfortschritt im erhaltenen RTC-Speicher statt minütlicher
  Flash-Schreibvorgänge. Ein Versorgungsschutz beendet den laufenden Messlauf
  vor instabilem Betrieb; normales USB-Umstecken löst keinen Schutzschlaf aus.
- Eine vollständige Referenz wird nur an stabiler USB-Versorgung akzeptiert.
  Unterbrochene Läufe überschreiben das bisherige Ergebnis nicht.

### Sicherung und Wiederherstellung

- Eine Sicherung enthält Geräteeinstellungen, IR-Bibliothek und getrennte
  Bridge-Routen.
- Eine ausgeschaltete oder ausfallende Bridge bricht die Wiederherstellung der
  anderen Geräte nicht mehr ab. Unbestätigte Übertragungen werden mit einem
  klaren Warnhinweis zurückgestellt.
- Ungeprüfte Offline-Routen werden nicht aktiviert. Nach Rückkehr der Bridge
  kann das Bibliotheksprofil übertragen oder der Restore wiederholt werden.

### Webseite, Log und Hilfe

- Vollständig zweisprachige, auf Desktop und Mobilgeräten nutzbare Oberfläche.
- Neu gegliederte IR-Bridge-Seite und neue Music-Seite.
- Direkte Links zu Projekt, Dokumentation, Webinstaller, GitHub,
  Fehlerbehebung und Send Me a Coffee.
- Verständliche Hilfe bei einer abgelaufenen Einstellungssitzung.
- Lokales Ereignislog mit Filter, Download und Löschfunktion.
- Zusätzliche Erfassung wichtiger Speicher-, Verbindungs- und Bedienfehler.
- Schnellere und robustere Webseiten auch bei mehreren gleichzeitigen Abrufen.
- Unabhängige Webantworten und Log-Downloads verhindern, dass ein langsamer
  Abruf andere Statusanfragen blockiert. Echte Gerätefehler bleiben von
  abgebrochenen Downloads oder Navigation unterscheidbar.
- Kompaktere System-/Musikseiten und ein RoonPilot-Favicon im Browser.

### Stabilität und Aktualisierung

- Dezente automatische Wiederverbindung nach kurzen Roon-Unterbrechungen.
- Entkopplung der Bridge-Hintergrundabfragen von der Roon-Kommunikation.
- Beseitigung mehrerer Neustartursachen in Play/Pause, Quick Settings,
  Display-Speichern, Playlist-Laden und Webserver.
- Sichere Speicherung ohne teilweise übernommene Konfiguration.
- Deutlich größere freie Arbeitsspeicherreserve ohne Einschränkung der
  Reaktionsgeschwindigkeit.
- Manuell bestätigte Updates mit Startprüfung und Rückkehr zur vorherigen
  Firmware, falls eine neue Version nicht korrekt startet.
- Gruppenweite Bridge-Ausfall-/Wiederverbindungshinweise, Sperre bei
  Routenkonflikten nach neuer Gruppierung und sauberer Rückweg aus der Wartung.
- Dokumentierter sauberer USB-Rückweg zur ursprünglichen 1.0.2 mit Hinweisen
  zu gelöschten Einstellungen, getrennten Backups und Verzicht auf Kalibrierung
  unter der älteren Version.

### Installation und Dokumentation

- Einfachere, getrennte Anleitungen für Windows und macOS.
- Webinstaller zuerst; Geräte-Manager und Systembericht nur noch als optionale
  Kontrolle.
- Eindeutige Gerätenamen für ESP32-S3 und Companion-ESP32.
- Verständlicher Hinweis, den USB-C-Stecker bei Bedarf um 180 Grad zu drehen.
- Geführter Webinstaller auch für die optionale Companion-Sleep-Firmware.
- Eigener, klar getrennter Webinstaller für die IR Bridge.
- Das Sichern der Originalfirmware wird erklärt, ist aber keine Voraussetzung.
- Umfangreiche Bridge-Beispiele und Schaubilder für Auswahl, Zonen und
  Verbindungswege.
- Aktuelle Abbildungen der nativen/IR-Lautstärke zeigen das amberfarbene Popup
  über dem Player statt des entfernten Vollbild-Drehreglers.
- Bebilderte 3D-Druckanleitungen und Modellvorschauen: vier Standteile inklusive
  Rückwand sowie das Bridge-Gehäuse mit beiden Fußlängen.

## Projektrelease 1.0.5 – Firmware 1.0.2

- Erweiterte regionale Zeitzonenauswahl mit automatischer Sommer-/Winterzeit.
- Doppeltipp zum sofortigen Ausschalten des Displays und reine Aufweckaktion
  beim ersten folgenden Touch oder Drehen.
- Zuverlässiger Wechsel zur Uhr auch während laufender Wiedergabe.
- Automatisches Schließen von Quick Settings nach 30 Sekunden.
- Firmwarestand direkt unter **Quick Settings → System**.
- Schnellere lokale Webseite und zuverlässigeres Laden von Zonen und Covern.
- Wiederhergestellter Rückweg von der Firmware-Update-Seite.
- Einheitlich englische Laufzeitmeldungen und geräteneutrale Lautstärkehinweise.

Die damaligen vollständigen Hinweise stehen in
[Release Notes der Firmware 1.0.2](docs/release-notes-1.0.2.de.md).

## Projektrelease 1.0.4 – Firmware 1.0.1

- Sichtbarer Hinweis auf verfügbare Firmwareupdates.
- Getrennte Optionen für automatische Prüfung und Displaymeldung.
- Updates blieben immer eine manuell bestätigte Aktion.
- Automatische Erkennung der Roon-Lautstärketypen `number`, `db` und
  `incremental`.
- Echte dB-Anzeige und Verwendung der von der Zone gemeldeten Schrittweite und
  Grenzen.
- Signierte Aktualisierung mit Prüfung des erfolgreichen Neustarts.

Die damaligen vollständigen Hinweise stehen in
[Release Notes der Firmware 1.0.1](docs/release-notes-1.0.1.de.md).

## Firmware 1.0.0

Die erste Firmware führte direkte lokale Roon-Steuerung, Drehring-/Touchbedienung
und Einrichtung im Browser ein. Die ursprünglichen Details stehen weiterhin
in den [Release Notes der Firmware 1.0.0](docs/release-notes-1.0.0.de.md).
