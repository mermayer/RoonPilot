# RoonPilot-Firmware 2.0.0

[English](release-notes-2.0.0.md) · **Deutsch**

Diese Ausgabe ist das bislang größte RoonPilot-Update seit Firmware 1.0.2.
Sie führt die bisher getrennt entwickelte IR-Bridge-Unterstützung mit dem
normalen RoonPilot in einer gemeinsamen Firmware zusammen. Eine IR Bridge
bleibt vollständig optional; gleichzeitig wurden Display, Musiknavigation,
Zonenverwaltung, Energieoptionen, Diagnose und Alltagssicherheit umfassend
erweitert.

> **Dokumentationsvorschau:** Die aktuell veröffentlichte Firmware bleibt
> **1.0.2**. Diese Hinweise beschreiben die kommende **RoonPilot 2.0.0** und
> die optionale **IR Bridge 1.0.0**. Firmware und Installer werden gemeinsam
> mit dem Release freigegeben.

## Inhalt

- [Eine gemeinsame RoonPilot-Firmware](#eine-gemeinsame-roonpilot-firmware)
- [Optionale IR Bridge](#optionale-ir-bridge)
- [IR-Profile, Lernen und Sicherung](#ir-profile-lernen-und-sicherung)
- [Wiederherstellung bei ausgeschalteter Bridge](#wiederherstellung-bei-ausgeschalteter-bridge)
- [Bridge-Verbindung und IR-Bedienung](#bridge-verbindung-und-ir-bedienung)
- [Roon-Playlisten und Live Radio](#roon-playlisten-und-live-radio)
- [Zonen, Gruppenmixer und native Roon-Steuerung](#zonen-und-native-roon-steuerung)
- [Zusätzliche HTTP-Power-Befehle](#zusätzliche-http-power-befehle)
- [Playeransichten und Anzeige](#playeransichten-und-anzeige)
- [Sprache, Schriften und Uhrzeit](#sprache-schriften-und-uhrzeit)
- [Vibrationsrückmeldung](#vibrationsrückmeldung)
- [Energie und Akku](#energie-und-akku)
  - [Sichere Laufzeitkalibrierung](#sichere-laufzeitkalibrierung)
- [Lokale Webseite](#lokale-webseite)
- [Ereignislog und Diagnose](#ereignislog-und-diagnose)
- [Firmware-Updates und Kompatibilität](#firmware-updates-und-kompatibilität)
- [Stabilität und Fehlerkorrekturen](#stabilität-und-fehlerkorrekturen)
- [Installation und Dokumentation](#installation-und-dokumentation)
- [3D-Druckmodelle für Stand und Bridge](#3d-druckmodelle-für-stand-und-bridge)
- [Datenschutz, Projektcharakter und Support](#datenschutz-projektcharakter-und-support)
- [Bekannte Grenzen](#bekannte-grenzen)

[Änderungsprotokoll und frühere Ausgaben](../CHANGELOG.de.md) ·
[Benutzeranleitung](../guides/de/README.md)

## Eine gemeinsame RoonPilot-Firmware

- Künftig wird nur noch eine RoonPilot-Firmware benötigt. Die frühere
  Aufteilung in Ausgaben mit und ohne IR Bridge entfällt.
- Bei einer neuen Installation sind **IR Bridge & Bluetooth** zunächst
  ausgeschaltet. Wer ausschließlich Roon verwendet, muss nichts einrichten.
- Im ausgeschalteten Zustand werden keine Bridge-Verbindungen, Suchläufe,
  Statusabfragen oder Bridge-Updateprüfungen gestartet. RoonPilot verwendet
  dann die native Steuerung der gewählten Roon-Zone.
- Gespeicherte Bridge-Kopplungen, Zonenrouten und Einstellungen bleiben beim
  Ausschalten erhalten und stehen nach einer erneuten Aktivierung wieder zur
  Verfügung.
- Konfigurations-Backups funktionieren unabhängig davon, ob Bridge und
  Bluetooth ein- oder ausgeschaltet sind. Auch ältere Backups bleiben
  verwendbar; fehlende neue Optionen erhalten sichere Vorgaben.

## Optionale IR Bridge

- RoonPilot kann Lautstärke, Mute und Power von Geräten steuern, die diese
  Funktionen in Roon nicht oder nicht passend bereitstellen.
- Bis zu **vier IR Bridges** lassen sich in einem RoonPilot speichern. Es gibt
  einen BLE-Link; weitere zugeordnete Bridges können gleichzeitig über ihr
  jeweils authentifiziertes WLAN bedient werden. So kann auch eine gruppierte
  Zone mehrere Ausgänge mit unterschiedlichen Bridge-Routen steuern.
- Mehrere Zonen können dieselbe Bridge mit unterschiedlichen IR-Profilen
  verwenden. Beim Wechsel zu einer Zone mit einer anderen Bridge wird das
  Ziel automatisch gewechselt.
- Zonen mit nativer Roon-Steuerung benötigen keine aktive Bridge. Eine nicht
  erreichbare Bridge führt niemals dazu, dass ein Befehl unbeabsichtigt an
  eine andere Bridge oder über einen anderen Steuerweg gesendet wird.
- **Automatic Zone Control** folgt immer der am RoonPilot ausgewählten Zone.
  **Manage** wählt dagegen vorübergehend eine bestimmte Bridge für Lernen,
  Profile, WLAN, Backup oder Firmwarepflege aus. **Return to zone control**
  beendet diesen Wartungsmodus.
- Die Webseite unterscheidet eindeutig zwischen **gespeichert**, **gekoppelt**,
  **verbunden**, **wird verbunden** und **nicht verbunden**. Eine gespeicherte,
  momentan nicht verbundene Bridge muss nicht erneut gekoppelt werden.
- Die Bridge-Suche besitzt einen sichtbaren Abbruch. Nach einem Suchlauf kann
  jederzeit zur normalen Zonensteuerung zurückgekehrt werden.
- Eine verlorene oder defekte Bridge lässt sich nach ausdrücklicher
  Bestätigung auch dann aus RoonPilot entfernen, wenn sie nicht mehr erreichbar
  ist.

## IR-Profile, Lernen und Sicherung

- Benannte IR-Profile liegen dauerhaft in einer Bridge-unabhängigen Bibliothek
  auf RoonPilot. Ihre Namen sind eindeutig; lokale Profilnummern verschiedener
  Bridges werden nicht gleichgesetzt.
- Lautstärke lauter/leiser, Mute sowie Power ein/aus können mit jeder
  gekoppelten Bridge mit IR-Empfänger gelernt, geprüft und in der Bibliothek
  gespeichert werden. Die anderen Bridges benötigen nur einen IR-Sender. Beim
  Speichern der Zonenroute wird das Profil an die Ziel-Bridge übertragen und
  geprüft; dasselbe Profil kann mehreren Bridges dienen.
- **Sicherung erstellen** erzeugt eine JSON-Datei mit RoonPilot-Einstellungen,
  Profilbibliothek, gelernten Befehlen und getrennten Zonen-/Bridge-Zuordnungen.
  Der Export liest RoonPilot; eine Bridge muss dafür nicht online sein.
- WLAN-Passwörter, Roon-Anmeldung, Kopplungs- und Transportschlüssel werden
  nicht exportiert. HTTP-Aktions-URLs sind enthalten und können private
  Parameter enthalten.
- Die Bridge-Webseite wurde in übersichtliche Bereiche für Verbindung,
  Profile, Lernen, Zonen, Sicherung und Firmwarepflege gegliedert. Auch auf
  kleineren Displays bleiben Navigation und Aktionen erreichbar.

## Wiederherstellung bei ausgeschalteter Bridge

- Eine nicht erreichbare Bridge bricht nicht mehr die gesamte Wiederherstellung
  ab. RoonPilot stellt seine Einstellungen und Profilbibliothek wieder her und
  fährt mit anderen ausgewählten Bridges fort. Auch ein Ausfall während der
  Übertragung stellt nur diese Bridge für später zurück.
- Das Fortschrittsfenster kann **100 % mit einem Warnhinweis** erreichen und die
  unbestätigten Übertragungen nennen. Das ist etwas anderes als ein Abbruch wegen
  einer ungültigen Datei, eines Speicherfehlers oder eines Routenkonflikts.
- Eine Offline-Route wird nur wiederhergestellt, wenn dieses RoonPilot bereits
  eine geprüfte Zuordnung für das identische Profil kennt. Eine neue oder
  geänderte unbestätigte Zuordnung wird nicht aktiviert; die bestehende Route
  bleibt unverändert.
- Zurückgestellte Profile bleiben in der Bibliothek. Sobald die Bridge erreichbar
  ist, dieselbe Sicherung erneut importieren oder das Bibliotheksprofil übertragen
  und die Route speichern. Wiederverbinden allein garantiert keine Übernahme
  zurückgestellter Zuordnungen.
- Löschen von Profilen und Bibliotheksabgleich vermeiden unnötige
  Verbindungswechsel und wiederholte Routineeinträge im Ereignislog.

Siehe [Konfiguration sichern und wiederherstellen](../guides/de/configuration-backup.md).

## Bridge-Verbindung und IR-Bedienung

- Bluetooth LE und das authentifizierte WLAN der Bridge werden automatisch
  als verfügbare Übertragungswege verwaltet. Ein kurzfristig gestörter Weg
  kann im Hintergrund wiederhergestellt werden, während der andere verfügbar
  bleibt.
- Die Statusanzeige zeigt den tatsächlich verwendeten Weg, die Signalstärken,
  den WLAN-Zustand, die Bridge-Firmware und die Stromversorgung der Bridge.
- Das Quickmenü **IR Bridges** zeigt das aktive Ziel, den Verbindungszustand,
  die gespeicherten Bridges und die wichtigsten Funkinformationen direkt am
  Gerät.
- Kurze Roon-, WLAN- und Bridge-Unterbrechungen werden dezent im Hintergrund
  behoben. Der komplette Verbindungsbildschirm erscheint nicht bei jeder
  kurzen Unterbrechung.
- Häufig schwankende, aber funktionierende Funkzustände erzeugen keine
  ständigen „Bridge connected“-Meldungen mehr.
- In einer Gruppe werden alle zugeordneten Bridges berücksichtigt, nicht nur
  das primäre Bluetooth-Ziel. Ausfall und Wiederverbindung werden dem betroffenen
  Ausgang zugeordnet; eine zurückkehrende Bridge wird ohne erneutes Koppeln
  wieder nutzbar.
- Hintergrundabfragen werden begrenzt und dürfen weder die Roon-Verbindung
  noch IR-Befehle verdrängen.
- Schnelles Drehen wird ohne mehrere Sekunden nachlaufende Befehlswarteschlange
  verarbeitet. Ein plötzlicher Richtungswechsel wird sofort berücksichtigt.
- Während eines Zonen- oder Bridge-Wechsels werden alte Eingaben nicht
  gesammelt und später an das neue Ziel gesendet.
- Für IR-Lautstärke zeigt RoonPilot nur eine vorübergehende relative Änderung
  an. Da eine IR Bridge den absoluten Pegel des Zielgeräts nicht kennt, wird
  kein erfundener Lautstärkewert angezeigt.

## Roon-Playlisten und Live Radio

- Die neue Seite **Music** liest Roon-Playlisten und die unter **My Live
  Radio** gespeicherten Sender ein.
- Playlisten lassen sich normal oder nach einer zusätzlichen Rückfrage mit
  Roons Zufallswiedergabe starten. Live-Radio beginnt ohne Shuffle-Abfrage.
- Eigene Displaytasten für **Playlists** und **Live Radio** öffnen kompakte
  Listen direkt auf dem Gerät. Beide Tasten lassen sich unabhängig ein- oder
  ausschalten.
- Mit dem Drehring wird durch die Listen gescrollt; die Auswahl erfolgt per
  Touch. Lange Namen werden auf höchstens zwei vollständige Zeilen begrenzt.
- Unvollständige letzte Seiten zeigen keine bedeutungslosen grauen
  Platzhalterfelder mehr.
- Playlisten lassen sich nach **Name**, **Titelanzahl** oder der von Roon
  gelieferten **Änderungsreihenfolge** auf- und absteigend sortieren. Live
  Radio lässt sich nach dem Sendernamen sortieren.
- Die gespeicherte Sortierung gilt identisch auf der Webseite und am
  RoonPilot-Display.
- Roon liefert weder ein verlässliches Änderungsdatum noch die Gesamtdauer
  einer Playlist. RoonPilot kennzeichnet diese Einschränkung offen und zeigt
  keine erfundenen Werte an.
- Langsame oder verspätete Antworten von Roon werden abgefangen. Eine
  Zeitüberschreitung startet keine Playlist automatisch ein zweites Mal und
  darf weder einen Neustart noch eine dauerhaft graue Bedienoberfläche
  verursachen.

## Zonen und native Roon-Steuerung

- Bis zu **32 Roon-Zonen** werden unterstützt und können einzeln für die
  Anzeige am Gerät ein- oder ausgeblendet werden.
- Lautstärkeschritt, Power-Taste, Mute-Taste und optionaler IR-Steuerweg
  werden pro Zone gespeichert.
- Bei einer gruppierten Roon-Zone berücksichtigt RoonPilot alle enthaltenen
  Ausgänge. Jeder Ausgang verwendet dabei weiterhin seinen eigenen
  Lautstärkeschritt und seinen gespeicherten Roon- oder IR-Steuerweg.
- Die erste Rastung am Drehring öffnet den Gruppenmixer, ohne die Lautstärke zu
  verändern. Weiteres Drehen regelt zunächst die gesamte Gruppe. Durch
  Antippen einer Ausgangszeile wird vorübergehend nur dieser Ausgang geregelt;
  ein Tipp auf den Gruppennamen wechselt zurück zur gesamten Gruppe.
- Der Gruppenmixer zeigt den Gruppennamen und bis zu drei getrennte Werte,
  beispielsweise native Lautstärke, dB und relative IR-Schritte. Nach acht
  Sekunden oder bei einem Zonenwechsel gilt automatisch wieder die Gruppe.
- Größere, optisch getrennte Touchzeilen und fettere Ausgangsnamen erleichtern
  die Auswahl einzelner Mitglieder. Zahlenwerte, dB und IR-Rückmeldungen können
  gleichzeitig erscheinen.
- Gruppen mit mehr als drei Mitgliedern regeln im Gruppenmodus weiterhin alle
  Ausgänge. Im Popup passen nur drei Zeilen; die Einzelauswahl ist auf diese
  sichtbaren Zeilen beschränkt.
- Gruppieren und Auflösen erhalten die Zuordnung physischer Ausgänge. Entstehen
  durch eine neue Zusammensetzung widersprüchliche Routen, verhindern
  **ROUTEN PRUEFEN / CHECK ROUTES** und **STOP** weitere Lautstärkebefehle, bis
  die Zuordnungen geprüft sind. IR wird nicht stillschweigend durch native
  Roon-Lautstärke ersetzt.
- Verschwindet die ausgewählte Zone, öffnet RoonPilot automatisch die
  Zonenauswahl, sobald andere Zonen verfügbar sind. Das Gerät bleibt nicht
  mehr bei **Loading zones** oder einem reinen Webhinweis stehen.
- Eine neue Zone kann sowohl am Gerät als auch auf der Webseite zuverlässig
  ausgewählt und gespeichert werden.
- Wird die Zonenauswahl ohne Änderung verlassen, bleibt der Player sichtbar,
  ohne den gesamten Bildschirm unnötig neu aufzubauen.
- Schnelle Lautstärkeänderungen nativer Roon-Zonen werden zusammenhängend
  verarbeitet. Die Meldung **Try again** erscheint nicht mehr nach einer
  bereits erfolgreich übernommenen Drehbewegung.
- Ein Richtungswechsel verwirft keine neue Eingabe, und alte Änderungen laufen
  nach dem Loslassen nicht weiter.
- Roon-Lautstärketypen `number`, `db` und `incremental` werden automatisch
  unterschieden. dB-Endpunkte zeigen echte dB-Werte einschließlich `0 dB`.
  Dimensionslose Werte bleiben wie in Roon ohne Prozentzeichen.

## Zusätzliche HTTP-Power-Befehle

- Pro Zone können zusätzlich zur normalen Roon- oder IR-Power-Funktion bis zu
  **drei benannte HTTP-Befehlspaare** hinterlegt werden, beispielsweise für
  Tablet-Stromversorgung, Steckdose und Verstärker.
- **Enable HTTP** kann nur aktiviert werden, wenn die Power-Taste der Zone
  eingeschaltet ist.
- ON und OFF jedes Paares besitzen eigene Freigaben. Beim Deaktivieren bleiben
  Name und Adresse gespeichert.
- **+ Add command pair** ergänzt ein zweites oder drittes Paar; nicht mehr
  benötigte Zusatzpaare lassen sich wieder entfernen.
- Separate Testtasten senden nach einer Sicherheitsabfrage genau den
  ausgewählten gespeicherten Befehl, ohne gleichzeitig Roon, IR oder andere
  HTTP-Ziele anzusteuern.
- Beim normalen Power-Befehl werden die aktivierten Ziele in sichtbarer
  Reihenfolge verarbeitet. Ein nicht erreichbares Ziel verhindert nicht den
  Versuch der folgenden unabhängigen Ziele.
- Es gibt keine nachlaufende Warteschlange und keine automatische Wiederholung
  eines möglicherweise bereits angekommenen HTTP-Befehls.
- Alle Bezeichnungen, Adressen und Freigaben sind im Konfigurations-Backup
  enthalten. Die Funktion benötigt keine IR Bridge.

## Playeransichten und Anzeige

- Die **Classic**-Ansicht zeigt nun links die gespielte Zeit und rechts die
  Gesamtlänge. Der bisherige weiße Coverrand dient gleichzeitig als dünner,
  besser sichtbarer Fortschrittsring, ohne das Cover zu verkleinern.
- Die Zeitanzeige verwendet feste Zeichenbreiten und läuft sichtbar im
  Sekundentakt. Regelmäßige Abgleiche mit Roon verhindern ein langfristiges
  Auseinanderlaufen.
- Lautstärkeänderungen ersetzen nicht mehr den gesamten Player. Stattdessen
  erscheint ein ruhiges, amberfarbenes Informationsfeld über der bestehenden
  Ansicht.
- Power, Mute, Playlists und Live Radio wurden vergrößert und mit mehr Abstand
  angeordnet.
- Die Ansichten **Focus** und **Orbit** wurden optisch verfeinert.
- Neu ist **Aura**: eine coverlose Playeransicht mit großen Titel- und
  Interpreteninformationen. Die Hintergrundfarben werden weiterhin aus dem
  aktuellen Cover abgeleitet.
- Aura zeigt bei nativer Lautstärkesteuerung den aktuellen Wert besonders groß.
  Bei IR-Steuerung bleibt dieser Bereich leer, weil die Bridge keinen absoluten
  Pegel zurückmelden kann.
- Ein optionaler großer Touchbereich in der Displaymitte bietet Play/Pause für
  Nutzer, denen die kleinen Tasten schwerfallen. Sichtbare Tasten und langes
  Drücken zum Sperren behalten Vorrang.
- Ist der große Play/Pause-Bereich ausgeschaltet, schaltet ein Doppeltipp in
  die Mitte das Display weiterhin sofort aus.
- Tasten geben beim Antippen eine deutlichere optische Rückmeldung durch einen
  verstärkten Glow.

## Sprache, Schriften und Uhrzeit

- Die gesamte RoonPilot-Oberfläche kann zwischen **Deutsch** und **Englisch**
  umgeschaltet werden. Das gilt für Webseite, Displaymenüs, Statushinweise und
  Fehlermeldungen.
- Titel, Interpreten, Zonen-, Playlist- und Radionamen bleiben als Unicode
  erhalten. Unterstützt werden lateinische europäische Schriften, Griechisch,
  Kyrillisch, häufige Sonderzeichen und eine ausgewählte Gruppe gebräuchlicher
  Emojis.
- Die Zeitzonenauswahl wurde deutlich erweitert und deckt nun auch Regionen
  wie Singapur sowie weitere internationale Standorte ab.
- Sommer- und Winterzeit werden entsprechend der gewählten Region automatisch
  berücksichtigt.
- Asiatische Schriftsysteme mit sehr großen Zeichenvorräten sind in dieser
  Ausgabe noch nicht enthalten.

## Vibrationsrückmeldung

- Das eingebaute Vibrationsmodul kann für Touch-Eingaben ein- oder
  ausgeschaltet werden.
- Die Stärke lässt sich auf der Webseite und unter **Quick Settings → Display
  → Touch feedback** stufenlos von 1 bis 100 Prozent einstellen und testen.
- Aktive Touch-Tasten erzeugen einen kurzen Impuls. Sperren und Entsperren über
  langes Drücken in der Displaymitte wird mit einem Doppelimpuls bestätigt.
- Drehen verursacht bewusst niemals Vibrationen – auch nicht in Menüs,
  Playlisten oder der Zonenauswahl.
- Beim Aufwecken, bei automatischen Statusmeldungen, während Updates und
  während einer Akku-Kalibrierung bleibt die Vibration aus.
- Die Rückmeldung bestätigt die Berührung, nicht die erfolgreiche Ausführung
  durch Roon oder ein IR-Gerät.

## Energie und Akku

- Unter **Power** stehen die drei CPU-Modi **Performance**, **Balanced** und
  **Battery saver** zur Verfügung. Für kurze anspruchsvolle Aktionen kann
  RoonPilot automatisch vorübergehend volle Leistung verwenden.
- Die CPU-Einstellung verändert weder WLAN- noch Bluetooth-Energiesparen und
  kann jederzeit ohne Neustart zurückgestellt werden.
- Mit **Automatic**, **Installed** und **Not installed** lässt sich festlegen,
  ob das Gerät einen Akku besitzt. Ohne Akku verschwinden Akkuanzeige,
  Akkuinformationen und Kalibrierung vollständig.
- Die Automatik aktiviert die Akkuanzeige erst, nachdem ein echter Wechsel von
  USB- auf Akkubetrieb beobachtet wurde. Sie kann das Fehlen eines Akkus nicht
  zweifelsfrei erkennen; dafür gibt es **Not installed**.
- Die Erkennung zwischen Akku- und USB-Versorgung besitzt einstellbare
  Spannungsschwellen. Dadurch kann sie an das individuelle Gerät und seine
  Stromversorgung angepasst werden.
- Ein Blitz im Batteriesymbol zeigt eine erkannte externe USB-Versorgung. Er
  ist kein sicherer Nachweis dafür, dass der Akku tatsächlich geladen wird.
- Die Power-Webseite zeigt die gemessene Versorgungsspannung zur Kontrolle der
  gewählten Schwellen.
- Ein Computer-USB-Port kann eine niedrigere Spannung als ein separates
  USB-Netzteil liefern und den Akku unter Umständen nicht vollständig laden.
  Für die Akku-Kalibrierung wird deshalb ein stabiles Ladegerät empfohlen.
- Der Display-Zeitgeber kann wahlweise nach der letzten Bedienung oder erst
  dann starten, wenn die ausgewählte Zone nichts mehr abspielt.
- Uhr, schwarzer Bildschirm und Deep Sleep bleiben unabhängig voneinander
  konfigurierbar. Display aus hält WLAN und Roon aktiv; Deep Sleep beendet die
  Verbindung und benötigt nach dem Aufwecken einen Neuaufbau.

### Sichere Laufzeitkalibrierung

- Während der Messung entfallen die bisherigen minütlichen Flash-Sicherungen.
  Der Fortschritt bleibt im erhaltenen RTC-Speicher; Flash-Schreiben und -Löschen
  der Anwendung sind während des gesamten Messlaufs gesperrt.
- Sinkt die gemessene Systemversorgung, endet die Kalibrierung im Schutz-Deep-Sleep
  statt absichtlich bis zur Abschaltung der Akkuhardware zu entladen. Diese
  softwaregesteuerte Abschaltung gilt **nur während der Kalibrierung**, nicht
  beim normalen Umstecken der USB-Versorgung.
- Unter **3,70 V für 500 ms** wird der Lauf gestoppt; bei **3,50 V oder weniger**
  erfolgt der Stopp mit der nächsten Messung. Gemeint ist die Systemschiene,
  nicht die Spannung der Akkuzelle.
- Nach diesem Schutzstopp setzt der Wiederanlauf eine stabile USB-Versorgung mit
  mindestens **4,28 V für drei Sekunden** voraus. Geprüft wird alle 30 Sekunden;
  nach dem Anstecken kann das Display deshalb noch etwa **33 Sekunden** schwarz
  bleiben.
- Nur ein vollständig beendeter Lauf ab fünf Minuten lässt sich nach bewusster
  Bestätigung an stabiler USB-Versorgung speichern. Ein unterbrochener Lauf
  ersetzt die bisherige Referenz nicht. Es wird nichts automatisch akzeptiert.
- Auch im Normalbetrieb verhindern niedrige oder ungültige Versorgungsmesswerte
  unsichere Flash-Schreibvorgänge, lösen aber keinen Kalibrierungs-Schutzschlaf
  aus. Bei gültiger stabiler Versorgung wird das Schreiben wieder freigegeben.
- Die Hardware misst ihre geregelte Systemspannung, nicht die Akkuzelle. Das
  Ergebnis ist eine Referenzlaufzeit, keine Kapazitätsmessung oder genaue
  Restprozentzahl. Software ersetzt weder den Hardware-Akkuschutz noch eine
  elektrische Trennung der Zelle.

Siehe [Akkustatus und Laufzeitkalibrierung](../guides/de/battery-and-runtime.md).

## Lokale Webseite

- Die Navigation und alle wesentlichen Seiten stehen auf Deutsch und Englisch
  zur Verfügung und funktionieren auf Desktop und Mobilgeräten.
- Die Overview-Seite enthält gut sichtbare Links zu Projektseite,
  Dokumentation, Webinstaller, GitHub, Fehlerbehebung und **Send Me a Coffee**.
- **Music** bündelt Playlisten und Live Radio einschließlich Sortierung und
  Zielzone.
- **Zone Management** fasst Sichtbarkeit, Lautstärke, Tasten, Bridge-Zuordnung
  und HTTP-Aktionen logisch pro Zone zusammen.
- Die IR-Bridge-Seite wurde vollständig neu gegliedert und verwendet kompakte,
  logisch getrennte Bereiche statt einer langen Folge übergroßer Karten.
- Ein abgelaufenes Einstellungsfenster erklärt nun ausdrücklich, dass nichts
  gespeichert wurde, und nennt **Strg + F5** unter Windows beziehungsweise
  **Cmd + Shift + R** unter macOS als Lösung.
- Seitenabrufe, Listen und gleichzeitige Statusanfragen wurden robuster. Wenn
  vorübergehend nicht genügend Arbeitsspeicher verfügbar ist, bleibt die
  bestehende Konfiguration erhalten und die Webseite fordert zu einem späteren
  erneuten Versuch auf.
- Die Anzeige **Power policy** beschreibt den tatsächlichen gewählten Zustand
  und verwendet nicht mehr den missverständlichen Wert **Disabled**.
- System und Musik verwenden kompaktere Layouts, unter anderem einzeilige
  Playlisteneinträge, soweit der Platz ausreicht, und besser ausgerichtete
  Systemaktionen.
- Ein eigenes RoonPilot-Favicon kennzeichnet die Gerätewebseite in Browser-Tabs
  und Lesezeichen.

## Ereignislog und Diagnose

- Unter **System → Event log** steht ein lokales Ereignisprotokoll für Starts,
  WLAN, Roon, IR Bridge, Updates und wichtige Bedienfehler zur Verfügung.
- Das Log übersteht einen normalen Software-Neustart, wird aber nach einem
  vollständigen Stromverlust nicht garantiert erhalten.
- Die neuesten Ereignisse stehen oben und enthalten Startnummer, Laufzeit und
  – sobald verfügbar – die lokale Uhrzeit.
- Wiederholte gleichartige Meldungen können zusammengefasst werden, damit ein
  einzelner anhaltender Fehler das Log nicht füllt.
- **Warnings & errors** filtert die Ansicht. **Download log** speichert eine
  Kopie zur Fehleranalyse, und **Clear log** leert das Protokoll nach
  Bestätigung.
- Fehler beim Speichern und andere unerwartete Webaktionen werden ebenfalls
  erfasst, soweit dies noch sicher möglich ist.
- Das Ereignislog enthält keine Passwörter, Schlüssel, IR-Impulse,
  Musiktitel oder vollständige Speicherabbilder und sendet nichts an einen
  externen Dienst.

## Firmware-Updates und Kompatibilität

- RoonPilot und IR Bridge besitzen getrennte Firmwareversionen und werden
  einzeln aktualisiert.
- Vor einem Update wird geprüft, ob die neue Version mit dem jeweils anderen
  Gerät zusammenarbeiten kann. Eine unpassende Kombination wird nicht
  aktiviert; die bisherige funktionsfähige Firmware bleibt erhalten.
- Im Normalfall wird zuerst RoonPilot und danach die Bridge aktualisiert. Wenn
  eine andere Reihenfolge nicht sicher wäre, wird sie mit einer verständlichen
  Meldung verhindert.
- Bei mehreren gespeicherten Bridges berücksichtigt RoonPilot alle bekannten
  Versionen und nicht nur die momentan verbundene Bridge.
- Updateprüfung und Displayhinweis sind für RoonPilot und Bridge getrennt
  einstellbar. Eine Installation erfolgt weiterhin ausschließlich nach
  ausdrücklicher Bestätigung und niemals automatisch.
- Unterbrochene oder verspätete Updateprüfungen dürfen die Roon-Verbindung und
  die normale Bedienung nicht blockieren.
- Startprüfung und automatische Rückkehr zur vorherigen Firmware schützen vor
  einem nicht korrekt startenden Update.
- Bei Bedarf steht ein dokumentierter USB-Rückweg zur ursprünglichen **1.0.2**
  bereit. Eine saubere Installation löscht Einstellungen und IR-Profile.
  Versionsbezogene Sicherungen getrennt aufbewahren und unter 1.0.2 keine
  Akkukalibrierung durchführen.

Siehe [Updates und Wiederherstellung](../guides/de/firmware-updates-and-recovery.md)
und [Rückweg zu 1.0.2](../guides/de/return-to-1.0.2.md).

## Stabilität und Fehlerkorrekturen

- Kurze Roon-Verbindungsunterbrechungen werden im Hintergrund wiederhergestellt,
  ohne den Player unnötig durch mehrere Vollbild-Verbindungsseiten zu ersetzen.
- RoonPilot überwacht die laufende Verbindung regelmäßig und verbindet sich
  nach einem echten Abbruch automatisch neu.
- Bridge-Statusabfragen und Updateprüfungen können die Roon-Kommunikation nicht
  mehr über längere Zeit blockieren.
- Neustarts beim Drücken von Play/Pause, nach dem Speichern der
  Display-Einstellungen, beim Drehen im Quickmenü und beim langsamen Laden
  großer Playlistlisten wurden behoben.
- Ein überlasteter oder vorübergehend langsam antwortender Roon Server führt
  nicht mehr zu dauerhaft gesperrten grauen Feldern.
- Speichervorgänge verwenden eine sichere Wiederherstellung. Reicht der Platz
  dafür vorübergehend nicht aus, wird keine halbe oder beschädigte
  Konfiguration übernommen.
- Die interne Speicherreserve wurde deutlich vergrößert, ohne Displayqualität,
  Netzwerkfunktionen oder Reaktionsgeschwindigkeit einzuschränken. Das senkt
  insbesondere bei gleichzeitigen Webseiten-, Roon- und Bridge-Aktivitäten das
  Risiko vorübergehender Speicherengpässe.
- Zusätzliche lokale Zustandswerte erleichtern die Langzeitbeobachtung, ohne
  Daten nach außen zu übertragen.
- Webantworten und Log-Downloads werden unabhängig verarbeitet. Ein langsamer
  Browserdownload hält deshalb andere Statusanfragen nicht auf. Gleichzeitige
  Seitenabrufe werden zuverlässiger angenommen und Seiten schneller aufgebaut.
- Normales Navigieren oder der Abbruch eines rein lesenden Downloads wird von
  einer fehlgeschlagenen Geräteaktion unterschieden. Echte Schreibfehler und
  Zeitüberschreitungen bleiben sichtbar.
- Das Verlassen einer vorübergehenden Bridge-Wartung kehrt sauber zur
  Zonensteuerung zurück. Aus- und Einschalten von Bridge & Bluetooth behält
  Zuordnungen und startet den passenden Verbindungszustand neu, statt ein
  veraltetes Ziel weiterzuverwenden.

## Installation und Dokumentation

- Die Installationsanleitungen sind klar nach **Windows** und **macOS**
  getrennt und beginnen mit dem einfachen Webinstaller-Weg.
- Der Webinstaller zeigt angeschlossene Geräte unmittelbar an. Nur wenn das
  erwartete Gerät nicht erscheint, sind Geräte-Manager beziehungsweise
  macOS-Systembericht als zusätzliche Kontrolle nötig.
- Für ESP32-S3-Geräte wird **USB JTAG/serial debug unit** gewählt; der klassische
  Companion-ESP32 erscheint als **USB serial**. Die auf Windows und macOS
  üblichen Bezeichnungen werden in den Anleitungen gezeigt.
- Ist der falsche Prozessor verbunden, USB abziehen, den USB-C-Stecker um
  180 Grad drehen und erneut verbinden. Der Webinstaller erkennt das neu
  angeschlossene Gerät automatisch.
- Auch die optionale Companion-Sleep-Firmware besitzt einen geführten
  Webinstaller. Ausführliche Werkzeuganleitungen bleiben nur für das optionale
  Sichern oder besondere Wartungsfälle verlinkt.
- Für die separate IR Bridge steht ebenfalls ein eigener geführter
  Webinstaller bereit. Er ist klar vom Installer des runden RoonPilot und vom
  Companion-Installer getrennt.
- Ein Backup der Originalfirmware wird erklärt, ist aber keine Voraussetzung
  für die Installation von RoonPilot.
- Die Bridge-Dokumentation enthält Schaubilder, Beispiele für Automatic Zone
  Control, Wartungsauswahl und Funkwege sowie die aktuelle Hardwarebeschreibung
  mit Power-IR-Sender.

## 3D-Druckmodelle für Stand und Bridge

- Der optionale RoonPilot-Stand bietet **vier STL-Dateien**: Standkörper,
  Bodenabdeckung, USB-C-Halter und Rückwand. Jeder Download besitzt eine direkt
  aus dem Modell gerenderte Vorschau.
- Die bebilderte Montage erklärt den dünnen Schaumstoffstreifen, die leicht
  bewegliche USB-C-Magnetkupplung und den mit zwei kleinen Schrauben befestigten,
  nachjustierbaren Halter.
- Beim IR-Bridge-Gehäuse gibt es Außen- und Innenfotos nach der Montage,
  STL-Vorschauen, Deckel und Senderkappe sowie kurze und längere Füße.
- Beide Anleitungen empfehlen USB-C-Kabel mit kurzen Steckergehäusen. Die
  längeren Bridge-Füße schaffen bei Bedarf mehr Platz für den Kabelstecker.

Siehe [Stand und STL-Downloads](../guides/de/roonpilot-stand.md) sowie
[Bridge-Gehäuse und STL-Downloads](../guides/de/ir-bridge-enclosure.md).

## Datenschutz, Projektcharakter und Support

- RoonPilot ist ein nichtkommerzielles Hobbyprojekt ohne Werbung, versteckte
  Kosten oder Verkauf von Nutzerdaten.
- Konfiguration und Steuerung bleiben lokal. RoonPilot überträgt keine
  Nutzungsdaten an den Entwickler.
- Wer das Projekt freiwillig unterstützen möchte, findet auf der Overview- und
  Projektseite den Link zu **Send Me a Coffee**.
- Hilfe gibt es im Roon-Community-Thread sowie über GitHub Issues.

## Bekannte Grenzen

- Es kann nur eine BLE-Verbindung gleichzeitig aktiv sein. Die gleichzeitige
  Steuerung weiterer Bridges setzt deren authentifizierten WLAN-Weg voraus.
- Eine Bridge wird derzeit von einem RoonPilot verwaltet. Das später erwogene
  Master-/Slave-Modell für mehrere RoonPilot-Geräte ist nicht Bestandteil
  dieser Ausgabe.
- Roon liefert für Playlisten kein verlässliches Änderungsdatum und keine
  Gesamtdauer.
- Asiatische Schriftsysteme sind noch nicht im Display-Zeichensatz enthalten.
- Die Akkuanzeige ist eine bewusst grobe Betriebsanzeige und kein präziser
  Ladezustandsmesser.
- Zusätzliche HTTP-Power-Befehle sind für vertrauenswürdige Geräte im lokalen
  Netzwerk gedacht.
