# Ersteinrichtung von WLAN und Roon

[English](../first-time-setup.md) · **Deutsch**

Ein öffentliches Factory-Abbild enthält keine WLAN-Zugangsdaten,
Roon-Serveradresse oder Freigabe. Der Einrichtungsmodus startet automatisch,
wenn keine gültigen Zugangsdaten gespeichert sind.

## 1. Mit dem Setup-WLAN verbinden

<img src="../../assets/device-screens/18-wifi-setup.png" alt="WLAN-Einrichtungsanzeige" width="360">

1. Auf Telefon, Tablet oder Notebook die WLAN-Liste öffnen.
2. Mit `RoonPilot-Setup-XXXXXX` verbinden. Die letzten Zeichen sind
   gerätespezifisch.
3. Öffnet sich die minimale Einrichtungsseite nicht automatisch,
   `http://192.168.4.1` im Browser aufrufen.
4. Das gewünschte **2,4-GHz-WLAN** auswählen oder den Namen exakt eingeben.
5. WLAN-Kennwort eingeben und speichern.

Der Einrichtungs-AP besitzt nur die WLAN-Konfiguration. Roon, Display,
Zonenverwaltung und Updates erscheinen erst nach erfolgreicher Verbindung in
der vollständigen lokalen Oberfläche.

## 2. Verhalten bei falschen Angaben

RoonPilot versucht, das gespeicherte Netz zu erreichen. Gelingt dies innerhalb
von ungefähr 45 Sekunden nicht, startet der Einrichtungs-AP erneut. Dann:

1. wieder mit `RoonPilot-Setup-XXXXXX` verbinden;
2. `192.168.4.1` öffnen;
3. SSID und Kennwort korrigieren;
4. erneut speichern.

Weder Factory Reset noch erneutes Flashen sind dafür nötig.

## 3. Lokale IP-Adresse finden

Nach erfolgreicher WLAN-Verbindung zeigt **Quick Settings → System** direkt am
Gerät die IP-Adresse und den verbundenen Roon Server. Alternativ kann die
Adresse in der DHCP-/Geräteliste des Routers gefunden werden.

Die IP in einem Browser desselben lokalen Netzes öffnen, beispielsweise
`http://192.168.1.84`. Die Seite wird vom Gerät selbst bereitgestellt.

## 4. RoonPilot freigeben

<img src="../../assets/device-screens/06-roon-pairing.png" alt="Roon-Freigabeanzeige" width="360">

1. Roon öffnen.
2. **Einstellungen → Erweiterungen** wählen.
3. **RoonPilot** von **Senior Coder** suchen.
4. Erweiterung aktivieren/freigeben.
5. Einige Sekunden warten, bis die Geräteanzeige zur Zonenwahl oder Wiedergabe
   wechselt.

Die Freigabe geschieht einmalig im eigenen Roon-System. RoonPilot installiert
keinen Dienst auf dem Roon Server.

## 5. Mehrere oder nicht gefundene Roon Server

<img src="../../assets/device-screens/22-select-roon-server.png" alt="Auswahl eines Roon Servers" width="360">

- Werden mehrere Server gefunden, auf der lokalen Webseite unter **Roon &
  Zones** den gewünschten auswählen.
- Ist Discovery durch VLAN, Multicastfilter oder Netzwerkstruktur blockiert,
  automatische Verbindung deaktivieren und eine feste lokale Server-IP mit
  Port eintragen.
- Eine manuelle Adresse muss im lokalen Netzwerk erreichbar sein; keine
  öffentliche Internetadresse verwenden.
- Nach Serverwechsel kann eine neue Freigabe in Roon erforderlich sein.

## 6. Zone wählen und andere ausblenden

Unter **Zone management** festlegen:

- welche Zonen am Gerät sichtbar sind;
- welche Zone primär gesteuert wird;
- welche Räume bewusst ausgeblendet bleiben.

Die Zonenwahl kann anschließend am Gerät über den Zonennamen sowie mit Touch
und Drehring geöffnet und bedient werden.

## 7. Funktionsprüfung

1. Auf dem Gerät erscheint Zone, Cover/Titel und Wiedergabestatus.
2. Ring langsam drehen und Lautstärkeänderung in der gewählten Zone prüfen.
3. Play/Pause sowie Zurück/Weiter testen.
4. Zonennamen antippen und Zonenwahl öffnen.
5. Nach oben wischen und unter **System** IP und Roon Server prüfen.
6. Weboberfläche neu laden und kontrollieren, dass Statuswerte zeitnah
   erscheinen.

Danach [Bedienung am Gerät](device-controls.md) lesen.
