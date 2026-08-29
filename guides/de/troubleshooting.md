# Fehlerbehebung

[English](../troubleshooting.md) · **Deutsch**

Den passenden Abschnitt von oben nach unten abarbeiten. Flash niemals als
ersten Diagnoseschritt löschen.

## Kein COM-Port

- USB-Datenkabel und direkten PC-Port verwenden.
- Anderes bekannt gutes Kabel testen.
- Geräte-Manager beim An-/Abstecken beobachten.
- USB abziehen, Stecker um 180° drehen und erneut verbinden.
- Hub/Dock zunächst umgehen.

## `esptool` kann nicht verbinden

- ESP-IDF Monitor, PuTTY, Arduino Monitor und VS-Code-Terminals schließen.
- COM-Port neu prüfen; Nummer kann nach Steckerrotation wechseln.
- `py -m esptool --port COMx chip-id` erneut ausführen.
- Kein `erase-flash` nur zur Diagnose hinzufügen.

## Falscher Chip wird gemeldet

USB vollständig trennen, USB-C-Stecker um 180° drehen und neu verbinden. Die
COM-Nummer allein ist kein Chipnachweis. Nur bei passend gemeldetem ESP32-S3
beziehungsweise klassischem ESP32 fortfahren.

## Web Installer kann Port nicht öffnen

- Aktuellen Chromium-Desktopbrowser mit Web Serial verwenden: Chrome, Edge,
  Chromium, Brave oder Opera.
- Firefox und Safari funktionieren nicht.
- Veröffentlichte HTTPS-Seite verwenden.
- Andere serielle Programme schließen.
- Bereits erteilte Portfreigabe im Browser lösen und erneut wählen.

## Display bleibt nach Installation schwarz

1. ESP32-S3-Seite des USB-Steckers bestätigen.
2. Factory-Abbild, nicht OTA-Datei, an Adresse `0x0` geschrieben haben.
3. Stabile Stromversorgung und vollständigen Neustart abwarten.
4. Serielles Startprotokoll erfassen.
5. Nicht den zweiten ESP32 auf Verdacht überschreiben.

## Setup-AP fehlt oder Seite öffnet nicht

- 45 Sekunden warten.
- Nach Netz `RoonPilot-Setup-XXXXXX` suchen.
- Mobile Daten/VPN am Telefon vorübergehend deaktivieren.
- Nach Verbindung `http://192.168.4.1` direkt öffnen.
- Bereits gespeichertes Heim-WLAN kann bedeuten, dass der AP nicht benötigt
  wird; IP im Quick-Menü **System** oder Router prüfen.

## WLAN-Setup kehrt immer wieder zurück

- SSID/Kennwort exakt prüfen, Groß-/Kleinschreibung beachten.
- Nur 2,4 GHz oder gemeinsame SSID mit 2,4-GHz-Zugang verwenden.
- Sonderzeichen unverändert neu eingeben.
- AP-Isolation, MAC-Filter oder versteckte SSID testweise prüfen.
- Nicht neu flashen; Angaben im Recovery-AP korrigieren.

## Lokale Webseite nicht erreichbar oder langsam

- IP unter **Quick Settings → System** neu ablesen.
- Browser und Gerät müssen im selben erreichbaren Netz sein.
- Alte IP aus Cache/Lesezeichen nicht weiterverwenden.
- VPN/Client-Isolation prüfen.
- Während Akku-Kalibrierung ist der Webserver absichtlich aus.
- Seite einmal vollständig neu laden; erste Werte werden asynchron geladen.
- RoonPilot neu starten und Diagnose/serielle Meldungen prüfen, bevor ein Reset
  erfolgt.

## Roon Server wird nicht gefunden

- Roon Server muss laufen und im selben erreichbaren Netz sein.
- Multicast/VLAN-/Firewallregeln prüfen.
- Auf Webseite automatische Erkennung deaktivieren und lokale IP/Port manuell
  eintragen.
- Serveradresse nicht als öffentliche Internetadresse konfigurieren.

## Mehrere Server oder Freigabe bleibt stehen

- Unter **Roon & Zones** gewünschten Server auswählen.
- In Roon **Einstellungen → Erweiterungen** RoonPilot von Senior Coder
  aktivieren.
- Nach Serverwechsel einige Sekunden warten oder einmal neu starten.
- Alte doppelte Freigabe in Roon bei Bedarf deaktivieren und neu bestätigen.

## Keine Zonen / Zonenschalter springt zurück

- Roon-Verbindung/Freigabe kontrollieren.
- **Zone management** öffnen und nach Schalteränderung **Save changes** drücken.
- Ausgeblendete Zonen erscheinen bewusst nicht am Gerät.
- Wenn gewählte Zone nicht mehr existiert, neue Hauptzone wählen.

## Play/Pause-Symbol, Ring oder Touch falsch

- Roon-Zustand mit anderem Controller vergleichen und wenige Sekunden für das
  Statusereignis abwarten.
- Encoder-Richtung, Schritt, Beschleunigung und Maximum prüfen.
- 180°-Displaydrehung dreht Touch, nicht Encoder-Richtung.
- Bei schwarzem/Uhrbildschirm wird die erste Eingabe nur zum Aufwachen
  verbraucht.
- Aktive Bediensperre durch langen Druck in die Mitte lösen.

## Uhr erscheint nicht oder wird schwarz

- Ruheanzeige muss Bahnhofsuhr oder Digitaluhr sein.
- **Idle display after** darf nicht `Never` sein, wenn automatischer Wechsel
  gewünscht ist.
- Bei gewählter Uhr darf keine zweite Schwarz-Zeit greifen.
- Tag-/Nachthelligkeit und Umschaltzeiten prüfen.
- Touch auf der Uhr kehrt zur Wiedergabe zurück.

## WLAN-/Akkusymbol wirkt falsch

WLAN nutzt grobe RSSI-Stufen. Das Akkusymbol ist eine hysteresegefilterte
Systemspannungsanzeige, keine Prozentzahl und keine sichere USB-/Akku-Erkennung.
Siehe [Akku und Laufzeit](battery-and-runtime.md).

## Akku-Kalibrierung unterbrochen

Nach erneutem Einschalten Ergebnis prüfen. Nur speichern, wenn der Stromverlust
das erwartete normale Akkuende des ununterbrochenen Tests war; manuellen Reset,
Kabelereignis oder Wartung verwerfen.

## Deep Sleep startet nicht oder wacht nicht

- Zone muss eindeutig pausiert/gestoppt sein.
- Blockierungsgrund auf Power-Seite prüfen.
- Setup, Update, Bootvalidierung und Akku-Kalibrierung blockieren Schlaf.
- Touch und Ring einzeln testen; vollständigen Boot abwarten.
- Netzwerkzugriff weckt Deep Sleep nicht.
- Bei Fehlschlag serielles Protokoll erfassen, nicht Flash löschen.

## Update fehlgeschlagen

- stabile USB-Stromversorgung nutzen;
- richtige OTA-Datei für lokales Update, Factory nur im USB-Installer;
- HTTPS-/Manifest-/Signatur-/Prüfsummenmeldung lesen;
- nach Neustart Version/Partition und Rollbackstatus prüfen;
- bei nicht startendem Gerät Recovery-Anleitung verwenden.

## Angaben für ein GitHub-Issue

Firmwareversion, Hardwarevariante, aktiver Chip, genaue Schritte, erwartetes und
tatsächliches Verhalten, Diagnose und relevante serielle Meldungen angeben.
Vor Veröffentlichung WLAN-Namen, IP-Adressen, Roon-Metadaten und andere private
Angaben entfernen. Keine Original-Flash-Sicherung und keinen Signaturschlüssel
hochladen.
