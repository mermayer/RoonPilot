# Vollständige Referenz der Weboberfläche

[English](../web-interface.md) · **Deutsch**

Die responsive Oberfläche wird direkt vom RoonPilot im lokalen Netzwerk
bereitgestellt. Sie ist kein Cloud-Dashboard und benötigt keinen zusätzlichen
Dienst.

## Öffnen

Die Geräte-IP steht im Schnellmenü unter **System**. Diese Adresse in einem
Browser desselben Netzes aufrufen, beispielsweise `http://192.168.1.84`.
Aktuelle Werte werden nach dem ersten Seitenaufbau asynchron geladen; die
Oberfläche bleibt dabei bedienbar. Bei Erreichbarkeitsproblemen siehe
[Fehlerbehebung](troubleshooting.md).

Ist eine neuere freigegebene Version bekannt, erscheint auf jeder Seite oben
ein auffälliger gelber Hinweis mit der verfügbaren Version. Ein Klick springt
direkt zu **System → Firmware update**. Der Hinweis startet niemals selbst eine
Installation.

## Übersicht

<img src="../../assets/web-ui/01-overview.png" alt="Webseite Übersicht" width="100%">

- WLAN, IP, Signalstärke, Roon-Verbindung, Server, Zone und Firmware;
- Titel, Interpret, Cover, Wiedergabe und Lautstärke;
- schnelle Play/Pause-/Zurück-/Weiter-Befehle;
- Links zu den wichtigsten Konfigurationsbereichen.

## Roon & Zones

<img src="../../assets/web-ui/02-roon-zones.png" alt="Roon und Zonen" width="100%">

- automatisch gefundene Roon Server anzeigen und auswählen;
- bei mehreren Servern den gewünschten festlegen;
- Auto-Discovery abschalten und lokale IP/Port manuell eintragen;
- Freigabe- und Verbindungszustand sehen;
- primäre Steuerzone wählen.

Eine manuelle Adresse ist für Netze sinnvoll, in denen Multicast-Discovery
durch VLANs oder Filter nicht funktioniert. Sie muss lokal erreichbar sein.

## Zone Management

<img src="../../assets/web-ui/03-zone-management.png" alt="Zonenverwaltung" width="100%">

Jede von Roon gemeldete Zone besitzt einen Schalter für sichtbar/ausgeblendet.
Die gewählte Displayzone wird gekennzeichnet. **Save changes** speichert die
Auswahl dauerhaft; ohne Speichern darf ein kurzzeitig geänderter Schalter nicht
als gespeicherte Einstellung verstanden werden.

## Display & Controls

<img src="../../assets/web-ui/04-display-controls.png" alt="Display und Bedienung" width="100%">

### Display

- aktive Helligkeit und Dimmhelligkeit;
- Zeit bis Dimmen, einschließlich **Never**;
- Zeit bis Ruheanzeige, einschließlich **Never**;
- Schwarz, Bahnhofsuhr oder Digitaluhr als Ruheanzeige;
- Helligkeit/Intensität des coverbasierten Hintergrundverlaufs;
- Akzentfarbe;
- Classic-, Focus- oder Orbit-Player mit Vorschau;
- vollständige Drehung von Display und Touch um 180°.

### Uhr

- Bahnhofsuhr oder Digitaluhr mit Datum;
- eigene Tag- und Nachthelligkeit nur für den Uhrmodus;
- Uhrzeiten für Tagbeginn und Nachtbeginn.

Wird eine Uhr als Ruheanzeige gewählt, bleibt sie sichtbar und wird nicht
später automatisch schwarz. Touch kehrt zur Playeransicht zurück.

### Drehring

- Standard-/umgekehrte Richtung;
- 1, 2, 3, 5 oder 10 Prozent pro Raster;
- Beschleunigung bei schneller Drehung;
- maximale Lautstärke für Befehle dieses Geräts.

## Network

<img src="../../assets/web-ui/05-network.png" alt="Netzwerkseite" width="100%">

Zeigt SSID, IP, RSSI und Wiederverbindungen. Ein WLAN-Wechsel wird lokal
gespeichert. Sind neue Daten falsch, startet nach mehreren erfolglosen Versuchen
automatisch wieder der Setup-AP. Kein erneutes Flashen erforderlich.

## Power

<img src="../../assets/web-ui/06-power.png" alt="Stromversorgungsseite" width="100%">

- grobe Systemspannungsinformation ohne erfundene Akkuprozentzahl;
- Vorbereitung, Status, Ergebnis und Löschen der Laufzeitkalibrierung;
- Deep Sleep ein/aus und Wartezeit;
- aktueller Zulässigkeits-/Blockierungsgrund.

Während laufender Akku-Kalibrierung sind Webserver, Roon und Deep Sleep
absichtlich deaktiviert, damit das Messprofil reproduzierbar bleibt.

## System

<img src="../../assets/web-ui/07-system.png" alt="Systemseite" width="100%">

- installierte Firmwareversion, Partition, Laufzeit und Speicher;
- installierte und verfügbare Version sowie Zeitpunkt der letzten Prüfung;
- getrennte Schalter für automatische Onlineprüfung und die tägliche Meldung
  am Gerät;
- **Check now** und direkter Sprung zur signierten Firmwareupdateseite;
- Diagnosepaket herunterladen;
- Konfiguration exportieren/importieren;
- Neustart;
- durch Texteingabe geschützter Factory Reset.

Die automatische Prüfung liest nach dem Start und danach täglich nur das
freigegebene Release-Manifest. Nach einem Fehler wird später erneut versucht.
Sie installiert nichts; eine Installation muss immer ausdrücklich auf der
separaten Firmwareupdateseite bestätigt werden.

Der Factory Reset entfernt RoonPilot-Einstellungen und Freigabe, stellt aber
nicht Waveshares Original-Firmware wieder her.

## Mobile Darstellung

<img src="../../assets/web-ui/08-overview-mobile.png" alt="Mobile Übersicht" width="390">

Karten werden untereinander angeordnet. Funktionen und Werte entsprechen der
Desktopansicht.

## Minimale WLAN-Einrichtungsseite

<img src="../../assets/web-ui/09-wifi-first-setup.png" alt="Minimales WLAN-Setup" width="100%">

Sie ist nur im Setup-AP verfügbar und enthält absichtlich ausschließlich
WLAN-Auswahl, Kennwort und Speichern. Vollständige Konfiguration wird erst im
Heimnetz angeboten.

## Seite fuer signierte Firmwareupdates

<img src="../../assets/web-ui/10-device-firmware-update.png" alt="Signiertes Online-Firmwareupdate" width="100%">

Für ein vorhandenes RoonPilot: mit **Check for updates** ein freigegebenes
signiertes Online-Update suchen und installieren. Ein manueller Firmwareupload
ist absichtlich nicht vorhanden. Einstellungen bleiben beim A/B-OTA
normalerweise erhalten.

## USB Web Installer

<img src="../../assets/web-ui/11-usb-web-installer.png" alt="USB Web Installer" width="100%">

Nur für vollständige ESP32-S3-Erstinstallation oder Wiederherstellung. Er
funktioniert ausschließlich mit aktuellem Desktop-Chromium und Web Serial,
verlangt die Sicherungs-, Prozessor- und Lizenzbestätigung und bietet das
Hauptabbild nicht als Download an. Factory löscht den kompletten ESP32-S3.
Der Begleit-ESP32 wird niemals durch diesen Installer beschrieben.
