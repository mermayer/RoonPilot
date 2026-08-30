# Ersteinrichtung von WLAN und Roon

[English](../first-time-setup.md) · **Deutsch**

Nach einer sauberen Factory-Installation enthält RoonPilot weder
WLAN-Zugangsdaten noch Roon-Serveradresse, Freigabe oder ausgewählte Zone. Der
normale Ablauf wird in vier Schritten direkt am Gerät abgeschlossen:

1. RoonPilot mit dem WLAN verbinden;
2. den Roon Server automatisch finden lassen;
3. RoonPilot in Roon freigeben;
4. eine Zone auf dem runden Display auswählen.

Wenn genau ein Roon Server automatisch gefunden wird, ist die vollständige
Weboberfläche für die Ersteinrichtung nicht erforderlich.

## 1. Mit dem Setup-WLAN verbinden

Auf dem Display werden **Wi-Fi setup** und der Name des temporären
Zugangspunkts angezeigt.

<img src="../../assets/device-screens/18-wifi-setup.png" alt="WLAN-Einrichtungsanzeige" width="360">

1. Auf Telefon, Tablet oder Notebook die WLAN-Liste öffnen.
2. Mit `RoonPilot-Setup-XXXXXX` verbinden. Die letzten sechs Zeichen
   identifizieren das Gerät.
3. Das vorläufige Kennwort `roonpilot-setup` eingeben.
4. Öffnet sich die minimale Einrichtungsseite nicht automatisch,
   `http://192.168.4.1` im Browser aufrufen.
5. Das gewünschte **2,4-GHz-WLAN** auswählen oder den Namen exakt eingeben.
6. Das WLAN-Kennwort sorgfältig eingeben und **Save and connect** wählen.

<img src="../../assets/web-ui/09-wifi-first-setup.png" alt="Minimale WLAN-Ersteinrichtung" width="100%">

Auf dieser absichtlich kleinen Seite wird ausschließlich WLAN eingerichtet.
Roon, Zonen, Display, Firmware und Systemfunktionen erscheinen erst in der
vollständigen lokalen Oberfläche.

### Bei falschen WLAN-Angaben

RoonPilot versucht das gespeicherte Netz ungefähr 45 Sekunden lang zu
erreichen. Gelingt dies nicht, startet der geschützte Einrichtungs-AP erneut.
Dann wieder mit `RoonPilot-Setup-XXXXXX` verbinden, `192.168.4.1` öffnen, die
Angaben korrigieren und erneut speichern. Weder Factory Reset noch erneutes
Flashen sind nötig.

Manche Mobilgeräte trennen ein WLAN ohne Internetzugang automatisch. In diesem
Fall **verbunden bleiben** wählen oder die automatische Umschaltung auf mobile
Daten vorübergehend deaktivieren.

## 2. Automatische Roon-Suche abwarten

Nach dem Speichern des WLANs startet RoonPilot neu. Das Display wechselt von
**Wi-Fi connecting** zu **Finding Roon**. RoonPilot wiederholt die
lokale SOOD-Suche selbständig. Wird genau ein Server gefunden, erfolgt die
Verbindung automatisch—eine manuelle Suche ist vorher nicht nötig.

Im Normalfall erscheint anschließend **Waiting for approval**. Dann mit
Schritt 3 fortfahren.

### Mehrere Roon Server

Werden mehrere Server gefunden und kann keiner früheren Auswahl zugeordnet
werden, fordert das Display zur Serverwahl auf. Auf der lokalen Seite **Roon &
zones** die Suche starten, den richtigen Server auswählen und speichern.

<img src="../../assets/device-screens/22-select-roon-server.png" alt="Auswahl eines Roon Servers" width="360">

### Kein Roon Server wird gefunden

Automatische Erkennung benötigt lokale Erreichbarkeit und normalerweise
Multicast-Verkehr zwischen RoonPilot und Roon Server. Gast-WLAN,
Client-Isolation, VLAN-Grenzen oder Multicastfilter können dies verhindern.

1. Unter **Quick Settings → System** die IP-Adresse von RoonPilot ablesen.
2. Diese IP in einem Browser desselben lokalen Netzes öffnen.
3. Unter **Roon & zones** **Scan for Roon Servers** wählen.
4. Bleibt Discovery blockiert, die feste lokale IP-Adresse und den Port des
   Roon Servers von Hand eintragen und speichern.

Für eine manuelle Adresse empfiehlt sich eine DHCP-Reservierung im Router.
Keine öffentliche Internetadresse eintragen; RoonPilot arbeitet im lokalen
Netz.

## 3. RoonPilot freigeben

Das Display bleibt nun dauerhaft auf **Waiting for approval** und nennt den
notwendigen Menüpfad. Dim-, Uhr- und Deep-Sleep-Timer sind bis zum Abschluss
dieses Einrichtungsschritts ausgesetzt.

<img src="../../assets/device-screens/06-roon-pairing.png" alt="Roon-Freigabeanzeige" width="360">

1. Roon öffnen.
2. **Einstellungen → Erweiterungen** wählen.
3. **RoonPilot** von **Senior Coder** suchen.
4. Die Erweiterung aktivieren/freigeben.
5. Zum Gerät zurückkehren; Neustart oder manuelles Aktualisieren sind nicht
   nötig.

Die Freigabe wird lokal gespeichert. Sie ist normalerweise nur nach Factory
Reset, bewusstem Löschen der Kopplung oder einem Serverwechsel erneut nötig.
RoonPilot installiert keinen Dienst, keine Bridge und kein Plug-in auf dem
Roon Server.

## 4. Erste Zone direkt am Gerät auswählen

Sobald Roon seine Zonenliste liefert, öffnet RoonPilot automatisch das
vollständige Fenster **Select zone**. Eine neue Installation kann dieses
Fenster nicht verlassen, ohne eine echte Zone auszuwählen.

1. Bei mehr als drei Zonen mit dem Drehring zwischen den Seiten wechseln.
2. Die gewünschte Zone auf dem Display antippen.
3. Warten, bis Playeransicht und Cover erscheinen.

Die Weboberfläche ist für diese erste Auswahl nicht erforderlich. Später kann
dort die primäre Zone geändert und festgelegt werden, welche Räume auf dem
runden Display ausgeblendet bleiben.

## 5. Vollständige lokale Weboberfläche öffnen

Unter **Quick Settings → System** zeigt das Gerät seine IP-Adresse und den
verbundenen Roon Server. Die IP in einem Browser desselben lokalen Netzes
öffnen. Bei Bedarf im Router reservieren oder als Lesezeichen speichern.

Die Seitenstruktur erscheint sofort; Livewerte werden mit den anschließenden
Statusabfragen gefüllt. Kurze Platzhalter sind normal, Wartezeiten von mehreren
Sekunden nicht.

## 6. Funktionsprüfung

1. Zone, Cover, Titel, Interpret und Wiedergabestatus werden angezeigt.
2. Ring langsam drehen und die Lautstärkeänderung in der gewählten Zone prüfen.
3. Play/Pause sowie Zurück/Weiter testen.
4. Mit horizontalen Wischgesten Zurück/Weiter testen.
5. Zonennamen antippen und die Zonenwahl erneut öffnen.
6. Weboberfläche neu laden und kontrollieren, dass Einstellungen erhalten
   bleiben.

Danach [Bedienung am Gerät](device-controls.md) lesen.
