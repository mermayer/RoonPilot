# Zurück zu RoonPilot 1.0.2

[English](../return-to-1.0.2.md) · **Deutsch**

Wenn RoonPilot 2.0.2 bei dir nicht funktioniert, bietet der Webinstaller eine
getrennte Auswahl **Zurück zu RoonPilot 1.0.2**. Sie installiert über USB die
originale Version 1.0.2, auch wenn die lokale RoonPilot-Webseite nicht mehr
erreichbar ist. Python, Kommandozeilenbefehle oder ein manueller
Firmware-Download sind nicht erforderlich.

**Dies ist eine saubere Neuinstallation: Alle Einstellungen und die
Profilbibliothek auf RoonPilot werden gelöscht.** Anders als bei einem
normalen Update bleiben die Einstellungen nicht erhalten. WLAN und
Roon-Verbindung müssen anschließend neu eingerichtet werden.

## Vor dem Upgrade oder der Rückkehr

- Vor dem Wechsel von 1.0.2 auf 2.0.2 auf der Seite **System** eine
  Konfigurationssicherung erstellen und dieses 1.0.2-Backup getrennt aufbewahren.
- Falls sich deine 2.0.x-Installation noch öffnen lässt, vor der Rückkehr eine
  Sicherung dieses Stands speichern. Siehe [Konfiguration sichern](configuration-backup.md).
  Diese Datei für eine spätere Rückkehr zu 2.0.2 aufbewahren, nicht für 1.0.2.
- **Kein 2.0.x-Backup in 1.0.2 importieren.** Ohne eine unter 1.0.2 erstellte
  Sicherung die ältere Version nach der Installation von Hand konfigurieren.
- Startet das Gerät nicht mehr oder ist seine Webseite nicht erreichbar, kann
  die Wiederherstellung auch ohne frische Sicherung erfolgen. Einstellungen,
  die nur auf RoonPilot liegen, gehen beim Löschen verloren.

Eine freiwillige Sicherung der Waveshare-Hersteller-Firmware ist hierfür nicht
nötig. Die Rückkehr zu **RoonPilot 1.0.2** stellt nicht die Software des
Herstellers wieder her.

## Was benötigt wird

- Ein Windows-PC oder Mac mit aktuellem **Chrome** oder **Edge** als
  Desktopbrowser.
- Ein USB-**Datenkabel**; ein reines Ladekabel genügt nicht.
- RoonPilot, direkt an einem stabilen USB-Anschluss des Computers.

Für diesen Vorgang nur RoonPilot per USB verbinden. Separate IR Bridges können
an ihren Netzteilen bleiben; sie müssen nicht an den Computer angeschlossen
werden.

## Version 1.0.2 wiederherstellen

1. Serielle Monitore und alle anderen Programme schließen, die den
   USB-Anschluss von RoonPilot verwenden.
2. Den [Webinstaller mit vorausgewählter Version 1.0.2](https://mermayer.github.io/RoonPilot/de/firmware/?version=1.0.2#web-installer-title)
   in Chrome oder Edge öffnen. Alternativ den normalen Webinstaller öffnen und
   **Zurück zu RoonPilot 1.0.2** auswählen. Als gewählte Version muss **1.0.2**
   angezeigt werden.
3. Den Wiederherstellungshinweis lesen. Zielprozessor, Lizenz und den
   zusätzlichen Hinweis bestätigen, dass die Rückkehr zu 1.0.2 alle
   Einstellungen und Profile löscht.
4. **RoonPilot 1.0.2 wiederherstellen** wählen. Im Geräteauswahldialog des
   Browsers **USB JTAG/serial debug unit** auswählen: Das ist der
   RoonPilot-Hauptprozessor **ESP32-S3**. Unter Windows folgt `COM…`, unter
   macOS `cu.usbmodem…` in Klammern. Die Nummer kann unterschiedlich sein.
5. Steht dort stattdessen **USB serial**, diesen Eintrag nicht auswählen: Das
   ist der zweite, klassische ESP32. USB abziehen, den USB-C-Stecker am runden
   RoonPilot-Gerät um **180 Grad** drehen, neu verbinden und **USB JTAG/serial
   debug unit** auswählen. Meldet der Installer einen anderen Prozessor als
   **ESP32-S3**, abbrechen.
6. Im Installerdialog die Installation von **RoonPilot 1.0.2 recovery** wählen
   und die Installation von **1.0.2** bestätigen. Der Löschvorgang ist
   automatisch enthalten und kann bei dieser Wiederherstellung nicht abgewählt
   werden. Er entfernt die gesamte Firmware und Konfiguration des
   Haupt-ESP32-S3, bevor das originale Factory-Abbild von 1.0.2 geschrieben wird.
7. USB verbunden lassen und die Stromversorgung nicht unterbrechen, bis
   Löschen, Schreiben und Prüfen abgeschlossen sind. Den Neustart von
   RoonPilot abwarten.
8. Der [Ersteinrichtung](first-time-setup.md) folgen: mit dem 2,4-GHz-WLAN
   verbinden, RoonPilot in Roon freigeben und eine Zone auswählen. Auf der Seite
   **System** prüfen, dass als installierte Version **1.0.2** angezeigt wird.

Eine unter 1.0.2 gespeicherte Konfigurationssicherung kann anschließend auf der
1.0.2-Seite **System** wieder eingespielt werden. Ohne diese Sicherung die
gewünschten Einstellungen neu vornehmen.

## Was sich bei der Rückkehr ändert

Nur der Haupt-ESP32-S3 von RoonPilot wird gelöscht und neu beschrieben. Der
Companion-ESP32 im Gerät und separate IR Bridges werden nicht geflasht oder
gelöscht. Die in 2.0.0 eingeführten IR-Bridge-Funktionen und der erweiterte
Gruppenmixer sind in 1.0.2 jedoch nicht verfügbar. Die zuvor auf RoonPilot
gespeicherten Bridge-Kopplungen, Routen und die Profilbibliothek werden durch
die Neuinstallation entfernt. Ein 2.0.x-JSON-Backup bewahrt Einstellungen und
Profildaten für die spätere Rückkehr zu 2.0.2 auf, aber nicht die kryptografischen
Bridge-Kopplungsschlüssel. Nach einer Neuinstallation die Bridges erneut koppeln.

**Unter 1.0.2 keine Akkukalibrierung durchführen.** Die originale Version
1.0.2 enthält nicht die Änderungen aus 2.0.0, die wiederholte Flash-Schreibvorgänge
vermeiden und während der Kalibrierung Unterspannung überwachen. Bei der
Rückkehr zu dieser älteren Version das Gerät ohne Kalibrierung verwenden.

## Später wieder die aktuelle Version installieren

Den normalen [RoonPilot-Webinstaller](https://mermayer.github.io/RoonPilot/de/firmware/)
verwenden und **RoonPilot 2.0.2** auswählen, nicht die feste
1.0.2-Wiederherstellung. Eine Factory-Installation löscht die Einstellungen
erneut. Nach der Ersteinrichtung nur die zur installierten Version gehörende
Konfigurationssicherung wiederherstellen; Sicherungen verschiedener
Hauptversionen nicht vermischen.

## Wenn die USB-Wiederherstellung nicht verbinden kann

Ein bekanntes USB-Datenkabel und einen direkten Computer-Anschluss verwenden,
andere serielle Programme schließen und den Gerätenamen erneut prüfen. Die
normalen Installationsanleitungen für [Windows](installation-windows.md) und
[macOS](installation-macos.md) erklären die beiden USB-Ausrichtungen. Weitere
Verbindungsprobleme behandelt die [Fehlerbehebung](troubleshooting.md).

Die automatische A/B-Wiederherstellung beim Start ist ein anderer Vorgang:
Nach einem fehlgeschlagenen Start kehrt sie zum vorherigen nutzbaren
Anwendungs-Slot zurück, nicht zwingend zu 1.0.2. Die getrennte USB-Auswahl ist
der versionsfeste Rückweg. Ein **Factory reset** auf der Systemseite löscht
nur Einstellungen; er installiert keine ältere Firmwareversion.
