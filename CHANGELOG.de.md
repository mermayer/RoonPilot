# RoonPilot-Änderungsprotokoll

[English](CHANGELOG.md) · **Deutsch**

Dieses Dokument gibt einen anwenderorientierten Überblick über die
RoonPilot-Versionen. Die ausführliche Beschreibung der nächsten Ausgabe steht
in den [deutschen Release Notes](docs/release-notes-2.0.0.de.md). Entwicklungsinterne
Änderungen ohne sichtbare Auswirkung sind bewusst nicht aufgeführt.

**Aktuelle öffentliche Firmware: 1.0.2.** Der Abschnitt zu 2.0.0 beschreibt
die kommende Ausgabe. Die Veröffentlichung dieser Hinweise gibt die neue
Firmware noch nicht frei.

## Inhalt

- [2.0.0 — kommende Ausgabe](#200-in-vorbereitung)
- [Projektrelease 1.0.5 — Firmware 1.0.2](#projektrelease-105--firmware-102)
- [Projektrelease 1.0.4 — Firmware 1.0.1](#projektrelease-104--firmware-101)
- [Firmware 1.0.0](#firmware-100)

## 2.0.0 (in Vorbereitung)

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
