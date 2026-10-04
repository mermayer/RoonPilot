# Firmwareupdates und Wiederherstellung

[English](../firmware-updates-and-recovery.md) - **Deutsch**

> [!WARNING]
> **RoonPilot-Onlineupdates sind vorübergehend gesperrt.** Bitte den internen
> Updater nicht verwenden, solange dieser Hinweis angezeigt wird. Für eine saubere
> [Installation von 2.0.1 den USB-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/?v=2.0.1-usb) nutzen.
> Dabei werden RoonPilot-Einstellungen, Profile, WLAN und Bridge-Kopplungen gelöscht; anschließend neu einrichten.
> Das Gerät kann noch ein altes Update-Angebot oder einen Prüffehler anzeigen.
> IR-Bridge-Onlineupdates sind nicht betroffen.

## Welcher Weg ist richtig?

| Zweck | Prozessor | Methode | Einstellungen |
| --- | --- | --- | --- |
| Erstinstallation oder vollstaendige Wiederherstellung | ESP32-S3 | Autorisierter Chromium Web Installer | Vollstaendig geloescht |
| RoonPilot-Update während der Sperre | ESP32-S3 | Saubere USB-Installation von 2.0.1 per Webinstaller | Vollständig gelöscht |
| Rückkehr von 2.0.1 auf 1.0.2 | ESP32-S3 | Feste 1.0.2-Auswahl im Webinstaller | Vollständig gelöscht |
| Optionale Companion-Stromersparnis | Klassischer ESP32 | Getrennter Companion-Webinstaller | Ersetzt Companion-Flash |
| Erste IR-Bridge-Installation oder vollständige Bridge-Wiederherstellung | Separater Bridge-ESP32-S3 | Eigener Chromium-Bridge-Installer | Bridge-Kennung, Bond, WLAN und Profile gelöscht |
| Normales IR-Bridge-Update | Separater Bridge-ESP32-S3 | **IR Bridge → Bridge firmware update** in RoonPilot | Bridge-Kennung, Bond, WLAN und Profile erhalten |

Hauptfirmware fuer Factory und OTA wird nicht als einzelner Download angeboten.
Die Verfahren sind nicht austauschbar. Vor jeder Wiederherstellung den aktiven
Chip eindeutig prüfen. Wird der falsche Prozessor gemeldet, USB abziehen, den
USB-C-Stecker um 180 Grad drehen, neu verbinden und erneut prüfen. Die separate IR Bridge besitzt
einen eigenen USB-Anschluss und ein eigenes Firmwareziel; ihr Image niemals auf
dem RoonPilot mit Runddisplay installieren.

## Signiertes Online-Update - vorübergehend gesperrt

Die folgenden Schritte beschreiben den normalen Ablauf nach einer erneuten
Freigabe des Kanals. Während der Sperre bitte nicht durchführen.

1. RoonPilot mit stabiler USB-Stromversorgung verbinden.
2. IP-Adresse im Browser oeffnen.
3. **System - Firmware update** waehlen.
4. **Check for updates** auswaehlen.
5. Bei einer freigegebenen neueren Version **Download and install** waehlen.
6. Waehrend Download, Schreiben und Pruefung den Strom nicht trennen.
7. Startbildschirm, WLAN und Roon-Verbindung abwarten.
8. Unter System Version und aktive Partition kontrollieren.

RoonPilot prueft Releaseangaben, Ziel, Version, Groesse, SHA-256 und die
konfigurierte RSA-Signatur. Geschrieben wird der inaktive A/B-Slot. Erst nach
dem erfolgreichen Startselbsttest wird das neue Abbild gueltig; andernfalls
kehrt der Bootloader zum vorherigen Stand zurueck. Updates werden nie
automatisch installiert.

Der private Signaturschluessel befindet sich weder im Repository noch im
Installer, in Geraetedateien oder in der Firmware. Eingebettet ist nur das
oeffentliche Pruefmaterial.

## Updatepruefung und Meldungen

Auf der Systemseite gibt es zwei voneinander unabhaengige Einstellungen:

- **Check automatically for updates** erlaubt eine Manifestpruefung nach einem
  normalen Start und danach alle 24 Stunden. Nach einem Netzwerkfehler wird
  spaeter erneut versucht. **Check now** bleibt auch bei ausgeschaltetem
  Schalter nutzbar.
- **Show update notice on device** erlaubt die Meldung auf dem Display, sobald
  eine neuere Version bekannt ist. Das Abschalten veraendert weder den
  Webstatus noch die manuelle Pruefung.

Alle normalen Webseiten zeigen bei einem gefundenen Update installierte und
verfuegbare Version in der gemeinsamen Statuszeile. Der Hinweis springt direkt
zu **System - Firmware update**.

Die Geraetemeldung erscheint hoechstens einmal innerhalb von 24 Stunden, nur
ueber der aktiven Playeransicht und erst nach einer kurzen Bedienpause. Sie
stoert niemals WLAN-Setup, Roon-Freigabe, Zonenwahl, Schnelleinstellungen,
Lautstaerkeanzeige, Uhr/Ruhemodus, Bediensperre, Akku-Kalibrierung oder OTA.
**LATER** quittiert sie. Eine Drehung quittiert sie ebenfalls und fuehrt danach
die beabsichtigte Lautstaerkeaenderung aus.

Es gibt keinen automatischen Download und keine automatische Installation.
**Download and install** auf der signierten Updateseite bleibt immer eine
eigene, ausdrueckliche Benutzeraktion.

## Optionales IR-Bridge-Update — ebenfalls durch RoonPilot verwaltet

Bei aktiviertem **Bridge & Bluetooth** stehen installierte und verfügbare
Bridge-Version unter **IR Bridge → Bridge firmware update**. Bridge-Prüfung und
ihre höchstens tägliche Displaymeldung sind von den RoonPilot-Updateeinstellungen
getrennt. Bei vollständig deaktivierter Bridge-Funktion scannt, prüft, meldet
und überträgt RoonPilot nichts für eine Bridge.

Nach Bestätigung bevorzugt RoonPilot das authentifizierte lokale WLAN, weil es
deutlich schneller als BLE ist. Ist das normale Bridge-WLAN aus, die Bridge
aber per BLE gebondet und erreichbar, darf RoonPilot WLAN vorübergehend
bereitstellen und einschalten, das Image übertragen und nach der
Wiederverbindung den vorherigen Aus-Zustand wiederherstellen. Verschlüsseltes
BLE bleibt der langsamere Rückfallweg, wenn WLAN nicht genutzt werden kann.

Vor der Übertragung prüft RoonPilot Manifest, Projekt, Board,
Protokollkompatibilität, minimale Controller-Version, Dateigröße, eingebettete
Version und SHA-256. Die Bridge prüft unabhängig Blockreihenfolge, Gesamtgröße,
SHA-256 und RSA-3072-Signatur, bevor sie ihre inaktive A/B-Partition auswählt.
Erfolg wird erst nach der Wiederverbindung mit der angeforderten Version
gemeldet. Währenddessen warnen RoonPilot-Display und Bridge-LED davor, den Strom
zu trennen.

### Wenn beide Geräte ein Update anbieten

Beide Updates bleiben unabhängige Vorgänge und keines startet automatisch. Die
Kompatibilitätsbereiche der Manifeste entscheiden, ob der aktuelle Controller
das Bridge-Image sicher installieren kann und ob eine Controller-Version ein
bestimmtes Bridge-Protokoll oder eine Mindestversion erwartet. Einen angezeigten
Hinweis **RoonPilot zuerst aktualisieren** oder **Bridge zuerst aktualisieren**
befolgen; ohne solchen Hinweis ist jede Reihenfolge erlaubt. Immer erst ein
Update abschließen, Wiederverbindung und Version prüfen und danach das zweite
starten. Eine Kompatibilitätsablehnung ist ein Sicherheitsstopp und kein Grund,
ein Image zu erzwingen oder eines der Geräte zu löschen.

Der vollständige Ablauf steht unter [IR-Bridge-Updates](ir-bridge-updates.md).

## Browser-Factory-Wiederherstellung

Die bereitgestellte autorisierte Installerseite mit einem aktuellen
Chromium-Desktopbrowser mit Web Serial verwenden, etwa Chrome oder Edge.
Firefox und Safari funktionieren nicht. Eine Original-Flash-Sicherung ist
optional und nur dann sinnvoll, wenn ein Rückweg zum exakten
Auslieferungszustand des Herstellers gewünscht ist.

Der Browser muss ESP32-S3 melden. Bei klassischem ESP32 oder Chipfehler sofort
abbrechen und USB drehen/neu verbinden. Factory loescht die gesamte Firmware
und Konfiguration des Hauptprozessors.

## Zurück zu RoonPilot 1.0.2

Wenn 2.0.1 bei dir nicht funktioniert, im
[Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/?version=1.0.2#web-installer-title)
**Zurück zu RoonPilot 1.0.2** auswählen. Dieser USB-Rückweg installiert immer
die originale Version 1.0.2 und enthält einen verbindlichen Löschvorgang. Eine
funktionierende Geräte-Webseite ist nicht nötig. Der Companion-Prozessor und
separate IR Bridges werden nicht geflasht.

Alle Einstellungen und die Profilbibliothek auf RoonPilot gehen verloren.
Vor dem Upgrade ein unter 1.0.2 erstelltes Backup aufbewahren; kein 2.0.x-Backup
in 1.0.2 einspielen. Nach der Installation WLAN und Roon neu einrichten. Die
Bridge-Funktionen und erweiterten Gruppenbedienungen aus 2.0.0 stehen dort
nicht zur Verfügung. **Unter 1.0.2 keine Akkukalibrierung durchführen**: Die
neuen Schutzmaßnahmen für die Kalibrierung sind dort nicht enthalten.

Die vollständige Einsteigeranleitung steht unter
[Zurück zu RoonPilot 1.0.2](return-to-1.0.2.md). Die automatische
A/B-Wiederherstellung beim Start kehrt zum vorherigen nutzbaren
Anwendungs-Slot zurück, nicht zwingend zu genau dieser Version.

## Unterbrochenes Update

- Strom stabil lassen und mehrere Minuten warten.
- Startet die vorherige Version, war Rollback erfolgreich. Vor einem neuen
  Versuch Diagnose herunterladen.
- Bei weiterem Startloop USB stabil lassen und serielles Protokoll erfassen.
- Startet RoonPilot nicht, den autorisierten ESP32-S3 Web Installer nach
  Kontrolle des Prozessors erneut verwenden. Eine freiwillig erstellte
  Original-Sicherung vor einer Wiederherstellung separat prüfen.
- Niemals den zweiten Prozessor auf Verdacht beschreiben.

## Original-Sicherung wiederherstellen

Die Wiederherstellung einer selbst erstellten Original-Sicherung ist etwas
anderes als die Weitergabe eines RoonPilot-Abbilds. Sie schreibt exakt die
zuvor gelesenen Bytes zurueck und ist destruktiv. Der Anleitung
[Original-Firmware sichern](factory-backup.md) folgen und Chip, exakte Groesse
und SHA-256 vor dem Restore kontrollieren.

## Companion-Wiederherstellung

Die optionale Companion-Firmware besitzt einen eigenen Browser-Installer, der
auf die klassische ESP32-Prozessorfamilie beschränkt ist. Wurde die
Companion-Installation unterbrochen, die Companion-USB-Seite erneut verbinden
und denselben Installer wiederholen. Den einfachen Ablauf erklärt die
[Companion-Anleitung](companion-firmware.md).

Der exakte Herstellerzustand lässt sich nur wiederherstellen, wenn das
ursprüngliche 4-MB-Flash dieses Prozessors vorher gesichert wurde. Die
freiwilligen technischen Abläufe sind in getrennte Anleitungen für
[Windows](factory-backup-windows.md) und [macOS](factory-backup-macos.md)
aufgeteilt.

## Factory-Wiederherstellung der IR Bridge

Den separaten Bridge-Webinstaller nur verwenden, wenn keine gültige
Bridge-Anwendung mehr startet oder bewusst eine saubere Bridge benötigt wird.
Factory führt den erforderlichen Erase selbst aus; vorher nicht separat löschen.
Dabei gehen Bridge-Kennung, Bond, WLAN-Fallback und gelernte Profile verloren.
Vor einer geplanten Neuinstallation die neuesten Profile mit RoonPilots
Bibliothek abgleichen. Danach unter **System → Sicherung erstellen** eine
vollständige JSON-Datei anlegen und privat aufbewahren; die Bridges müssen beim
Export nicht erreichbar sein. Siehe [Konfiguration sichern und
wiederherstellen](configuration-backup.md).

Nach Factory-Recovery die Bridge mit ihrer neuen `RPB-…`-Kennung koppeln und
beim Wiederherstellen ausdrücklich als Ziel der benannten IR-Profile auswählen.
Die Profilbibliothek liegt dauerhaft auf RoonPilot und in der gemeinsamen
Sicherung; die neue Bridge erhält eigene lokale Profil-IDs. Solange die Bridge
funktioniert, signierte Anwendungsupdates bevorzugen, weil Kopplung und
WLAN-Einrichtung dabei erhalten bleiben.

Ein Factory Reset auf der Systemseite loescht nur RoonPilot-Konfiguration und
Kopplung. Er stellt die Waveshare-Firmware nicht wieder her.
