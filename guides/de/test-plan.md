# Testplan für Einsteiger

[English](../test-plan.md) · **Deutsch**

Dieser Plan beginnt beim unberührten Gerät und vermeidet Abkürzungen. Bei
jedem Fehler stoppen, Ergebnis notieren und erst nach Ursachenklärung
fortfahren.

## Testprotokoll

| Feld | Eintrag |
| --- | --- |
| Datum / Prüfer | |
| Waveshare-Bestellnummer | |
| Akku | werkseitig / nachgerüstet / keiner |
| RoonPilot-Version | |
| Factory SHA-256 | |
| OTA SHA-256 | |
| Companion SHA-256 | |
| S3-Originalbackup Größe/SHA-256 | |
| Companion-Originalbackup Größe/SHA-256 | |
| Roon Server / Testzone | |

## A. Ankunft und Originalzustand

- [ ] Gerät äußerlich prüfen, Bestellvariante notieren.
- [ ] Originalsoftware vor Änderung starten und fotografisch dokumentieren.
- [ ] Beide USB-C-Orientierungen mit `chip-id` eindeutig zuordnen.
- [ ] Exakte 16-MB-Sicherung des ESP32-S3 lesen und SHA-256 notieren.
- [ ] Exakte 4-MB-Sicherung des Begleit-ESP32 lesen und SHA-256 notieren.
- [ ] Beide Sicherungen an einen zweiten sicheren Ort kopieren.

## B. Saubere Browserinstallation

- [ ] Aktuellen Chromium-Desktopbrowser verwenden; Firefox/Safari nicht.
- [ ] HTTPS-Seite öffnen und Warnhinweise lesen.
- [ ] Aktiven Chip erneut als ESP32-S3 bestätigen.
- [ ] Factory-Löschung und Verlust aller Einstellungen bewusst bestätigen.
- [ ] Löschen, Schreiben und Verifizieren vollständig beobachten.
- [ ] RoonPilot-Startbildschirm und Version prüfen.

## C. Erstmaliges WLAN

- [ ] `RoonPilot-Setup-XXXXXX` erscheint.
- [ ] `192.168.4.1` zeigt nur die minimale WLAN-Seite.
- [ ] Absichtlich falsches Kennwort testen; Recovery-AP kehrt nach ungefähr
  45 Sekunden zurück.
- [ ] Korrekte 2,4-GHz-Daten speichern.
- [ ] IP unter Quick Settings → System und im Router vergleichen.
- [ ] Lokale Webseite unter der angezeigten IP öffnen.

## D. Roon-Erkennung und Freigabe

- [ ] Einzelner Server wird automatisch gefunden.
- [ ] RoonPilot erscheint unter Einstellungen → Erweiterungen.
- [ ] Freigabe führt ohne Zusatzdienst zur Verbindung.
- [ ] Bei mehreren Servern ist eine Auswahl möglich.
- [ ] Manuelle IP/Port-Konfiguration funktioniert bei abgeschalteter Discovery.
- [ ] Neustart erhält Serverauswahl und Freigabe.

## E. Zonen

- [ ] Alle erwarteten Zonen erscheinen auf der Webseite.
- [ ] Sichtbarkeitsschalter bleiben nach **Save changes** erhalten.
- [ ] Ausgeblendete Zonen fehlen am Gerät.
- [ ] Hauptzone bleibt nach Neustart gewählt.
- [ ] Zonenwahl funktioniert per Touch, Wischen und Drehring.
- [ ] Nicht verfügbare Zone erzeugt verständlichen Auswahlhinweis.

## F. Player und Wiedergabe

- [ ] Classic, Focus und Orbit lassen sich auf der Webseite auswählen.
- [ ] Vorschaubilder sind sauber und nicht überlagert.
- [ ] Jedes Layout bleibt innerhalb des runden Displays.
- [ ] Cover, Gradient, Titel und Interpret aktualisieren bei Trackwechsel.
- [ ] Langer Titel läuft genau einmal durch.
- [ ] Sonderzeichen, etwa `a-ha`, erscheinen ohne Rechteckzeichen.
- [ ] Play/Pause-Symbol folgt dem echten Roon-Zustand.
- [ ] Tasten und Links-/Rechts-Wischgesten steuern korrekt.
- [ ] Orbit-Fortschritt/Zeiten liegen frei von Text und Tasten.

## G. Ring und Lautstärkeschutz

- [ ] Standard- und umgekehrte Richtung testen.
- [ ] Alle Multiplikatoren der nativen Schrittweite prüfen: 1, 2, 3, 5 und 10.
- [ ] Ein Roon-Ausgang vom Typ `number` wird automatisch erkannt und in Prozent
  angezeigt.
- [ ] Ein Roon-Ausgang vom Typ `db` wird automatisch erkannt und zeigt den
  echten Wert, einschließlich negativer Werte wie `-40 dB`.
- [ ] Die erste Drehung am dB-Ausgang beginnt beim aktuellen Roon-Wert und nicht
  bei null.
- [ ] Bei nativer Schrittweite 1 dB ändert Multiplikator `2` vor der
  Beschleunigung 2 dB pro Raster.
- [ ] Ein `incremental`-Ausgang erhält relative Befehle ohne erfundenen
  Absolutwert.
- [ ] Ein dB-Ausgang ohne gemeldete Grenzen behält Text und relative Regelung;
  absoluter Webregler, Bogen/Bereich und lokale Maximalgrenze bleiben aus.
- [ ] Beschleunigung bei schneller Drehung prüfen.
- [ ] Bei gemeldeten Grenzen wird das Maximum durch Ring- und Webbefehle nie
  überschritten.
- [ ] Lautstärkeansicht schließt automatisch und kehrt zum Player zurück.

## H. Schnelleinstellungen und Sperre

- [ ] **System** steht an erster Stelle.
- [ ] System zeigt richtige IP, richtigen Roon Server, Status und Firmwarestand.
- [ ] Ring markiert alle vier Menüpunkte; Touch öffnet sie.
- [ ] Display-, Lautstärke- und Uhreinstellungen speichern korrekt.
- [ ] Verlassen ohne Speichern übernimmt Änderungen nicht.
- [ ] Langer Mittendruck sperrt/entsperrt.
- [ ] Jede Bedienung bei Sperre zeigt Hinweis und sendet keinen Befehl.

## I. Display, Dimmen und Uhren

- [ ] Aktive/Dimmhelligkeit sichtbar unterschiedlich.
- [ ] **Never** verhindert Dimmen beziehungsweise Ruhewechsel.
- [ ] Bahnhofsuhr läuft korrekt vorwärts.
- [ ] Digitaluhr zeigt Uhrzeit und Datum.
- [ ] Regionale Zeitzone wählen und Uhrzeit mit einer unabhängigen Uhr prüfen.
- [ ] Je ein Winter- und Sommerdatum folgt der erwarteten Zeitumstellung.
- [ ] Uhr bleibt als gewählte Ruheansicht sichtbar und wird nicht schwarz.
- [ ] Tag-/Nachthelligkeit schaltet zu konfigurierten Zeiten.
- [ ] Touch auf Uhr/Schwarz weckt ohne Zusatzbefehl.
- [ ] 180°-Schalter dreht Darstellung und Touch gemeinsam.

## J. Lokale Webseite

- [ ] Übersicht lädt aktuelle Werte zeitnah ohne komplette Seitenblockade.
- [ ] Alle sieben Hauptseiten auf Desktop und Mobil ohne Überlauf.
- [ ] Schalter bleiben nach Speichern erhalten.
- [ ] Buttontexte sind nicht unterstrichen.
- [ ] Export enthält alle nicht geheimen Einstellungen.
- [ ] Export enthält weder WLAN-Kennwort noch Roon-Token.
- [ ] Import stellt alle enthaltenen Werte wieder her.
- [ ] Diagnose kann heruntergeladen werden.
- [ ] Geschützter Factory Reset entfernt Konfiguration und startet AP.

## K. OTA und Wiederherstellung

- [ ] Mit automatischer Prüfung wird nach dem Start das signierte Manifest geprüft.
- [ ] Ohne automatische Prüfung erfolgt kein Zeitplan; **Check now** funktioniert.
- [ ] Displaymeldung lässt sich unabhängig von der Onlineprüfung schalten.
- [ ] Jede Webseite zeigt bei einem Update installierte und verfügbare Version.
- [ ] Klick auf den Webhinweis springt direkt zu **System → Firmware update**.
- [ ] Gerätemeldung erscheint nur über einer unbenutzten Playeransicht.
- [ ] Zonenwahl, Schnelleinstellungen, Lautstärke, Einrichtung, Freigabe, Uhr,
  Sperre, Kalibrierung und OTA werden nicht unterbrochen.
- [ ] **LATER** quittiert; eine Drehung quittiert und ändert weiter Lautstärke.
- [ ] Innerhalb von 24 Stunden erscheint auch nach Neustart keine zweite Meldung.
- [ ] Prüfung und Meldung laden/installieren Firmware niemals automatisch.
- [ ] Signiertes Online-OTA wechselt von Slot A nach B und behält Einstellungen.
- [ ] Zweites signiertes Online-OTA wechselt zurück; lokaler Upload ist nicht verfügbar.
- [ ] Onlineprüfung erreicht signiertes HTTPS-Manifest.
- [ ] Onlineupdate prüft Projekt, Board, Version, Größe, Signatur und SHA-256.
- [ ] Startvalidierung bestätigt gesundes Abbild.
- [ ] Absichtlich ungültiger Start führt zum Rollback.
- [ ] Stromunterbrechung wird gemäß Recovery-Dokumentation behandelt.
- [ ] Originales 16-MB-Backup lässt sich nur nach bewusster Freigabe
  wiederherstellen.

## L. Companion-Stromspar-Firmware

- [ ] Klassischer ESP32 vor Schreiben erneut bestätigt.
- [ ] Originale 4-MB-Sicherung Größe/SHA-256 geprüft.
- [ ] Companion-Datei SHA-256 geprüft.
- [ ] Schreiben und `verify-flash` erfolgreich.
- [ ] Nach Zurückdrehen startet RoonPilot unverändert.
- [ ] Wiederherstellung des Original-Companion-Abbilds dokumentiert getestet.

## M. Akku-Kalibrierung

- [ ] Vorbereitung erzwingt LCD 50 %, WLAN an, Dim/Off aus.
- [ ] Start ist nur lokal nach Abziehen von USB möglich.
- [ ] Webserver und Roon stoppen während des Laufs.
- [ ] Deep Sleep bleibt während Vorbereitung/Lauf deaktiviert.
- [ ] Fortschritt wird minütlich gespeichert.
- [ ] Nach Hardwareabschaltung erscheint Ergebnis zur Prüfung.
- [ ] Verwerfen erhält vorherige Referenz; Speichern übernimmt neue.
- [ ] Mindestens zwei vollständige Läufe mit allen Bedingungen dokumentiert.

## N. Deep Sleep

- [ ] Startet nur bei klar pausierter/gestoppter gewählter Zone.
- [ ] Wiedergabe, Setup, Update, Startvalidierung und Kalibrierung blockieren.
- [ ] Touch weckt mit vollständigem Neustart.
- [ ] Ring weckt mit vollständigem Neustart.
- [ ] Erstes Wake-Ereignis sendet keinen Musik-/Lautstärkebefehl.
- [ ] WLAN und Roon verbinden nach Wake wieder.

## Abschluss

Erst wenn alle sicherheitskritischen Punkte bestanden und offene Fehler
dokumentiert sind, kann eine allgemeine Installationsfreigabe erfolgen. Logs
und Screenshots vor Veröffentlichung von privaten Daten bereinigen.
