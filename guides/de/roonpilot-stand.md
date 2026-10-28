# 3D-druckbarer Stand für RoonPilot

[English](../roonpilot-stand.md) · **Deutsch** · [Hardware](hardware-and-two-processors.md)

Der optionale vierteilige Stand hält den runden RoonPilot in einem angenehmen
Betrachtungswinkel und führt einen USB-C-Anschluss in die Aufnahme. Er verändert
weder Elektronik noch Firmware und ist für RoonPilot nicht erforderlich.

<table>
  <tr>
    <td align="center"><img src="../../docs/assets/3d/roonpilot-stand/roonpilot-stand.png" alt="Blauer 3D-gedruckter RoonPilot-Stand ohne Gerät" width="330"><br><strong>Stand ohne RoonPilot</strong></td>
    <td align="center"><img src="../../docs/assets/3d/roonpilot-stand/roonpilot-in-stand-demo.png" alt="Blauer 3D-gedruckter Stand mit RoonPilot und der korrekten Classic-Playeransicht" width="330"><br><strong>Vollständiges Beispiel</strong></td>
  </tr>
</table>

## STL-Dateien herunterladen

Eine Karte anklicken, um die jeweilige STL-Datei herunterzuladen. Der ZIP-Button lädt das vollständige Paket.

Jedes Teil einmal drucken:

<a href="https://mermayer.github.io/RoonPilot/assets/3d/roonpilot-stand/dock_body.stl"><picture><source media="(max-width: 480px)" srcset="../../docs/assets/3d/download-cards/dock_body-de-mobile.png"><img src="../../docs/assets/3d/download-cards/dock_body-de.png" alt="Standkörper · 93 × 79 × 63,4 mm · einmal drucken · dock_body.stl herunterladen" width="660"></picture></a>

<a href="https://mermayer.github.io/RoonPilot/assets/3d/roonpilot-stand/dock_bottom_cover.stl"><picture><source media="(max-width: 480px)" srcset="../../docs/assets/3d/download-cards/dock_bottom_cover-de-mobile.png"><img src="../../docs/assets/3d/download-cards/dock_bottom_cover-de.png" alt="Bodenabdeckung · 83,4 × 73,7 × 7,5 mm · einmal drucken · dock_bottom_cover.stl herunterladen" width="660"></picture></a>

<a href="https://mermayer.github.io/RoonPilot/assets/3d/roonpilot-stand/halter.stl"><picture><source media="(max-width: 480px)" srcset="../../docs/assets/3d/download-cards/halter-de-mobile.png"><img src="../../docs/assets/3d/download-cards/halter-de.png" alt="USB-C-Halter · 25 × 25 × 8,5 mm · einmal drucken · halter.stl herunterladen" width="660"></picture></a>

<a href="https://mermayer.github.io/RoonPilot/assets/3d/roonpilot-stand/rueckwand.stl"><picture><source media="(max-width: 480px)" srcset="../../docs/assets/3d/download-cards/rueckwand-de-mobile.png"><img src="../../docs/assets/3d/download-cards/rueckwand-de.png" alt="Rückwand · 66 × 66 × 5 mm · einmal drucken · rueckwand.stl herunterladen" width="660"></picture></a>

<a href="https://mermayer.github.io/RoonPilot/assets/3d/roonpilot-stand/RoonPilot-stand-STL.zip"><img src="../../docs/assets/3d/download-cards/download-all-stl-de.png" alt="Alle STL-Dateien herunterladen" width="300"></a>

ZIP mit allen sieben STL-Dateien: vier Standteile und drei Teile für das optionale Powerbank-Gehäuse. Die Dateien selbst im Slicer vorbereiten.

Die Maße stammen aus den Modelldateien und sind keine garantierten Maße des
fertigen Drucks. Druckerkalibrierung, Materialschrumpfung und Slicer-Toleranzen
beeinflussen die Passung. Halter und Boden zuerst trocken einpassen; niemals
Kraft auf RoonPilots USB-C-Buchse ausüben.

## Was auf den Montagebildern zu sehen ist

<table>
  <tr>
    <td align="center"><img src="../../docs/assets/3d/roonpilot-stand/usb-c-holder-empty.png" alt="Unterseite des RoonPilot-Stands mit einem dünnen Schaumstoffstreifen" width="360"><br><strong>Unterseite mit Schaumstoffstreifen</strong></td>
    <td align="center"><img src="../../docs/assets/3d/roonpilot-stand/usb-c-holder-installed.png" alt="Abgewinkelte USB-C-Magnetkupplung unter dem verschraubten gedruckten Halter" width="360"><br><strong>Magnetkupplung und Halter</strong></td>
  </tr>
</table>

`usb_c_install_01` zeigt den Stand von unten. Dort wird ein dünner Streifen
Schaumstoff eingeklemmt oder angeklebt. Seine Dicke richtet sich nach der Härte
des verwendeten Schaumstoffs: Er soll die abgewinkelte USB-C-Magnetkupplung
leicht führen, sie aber nicht starr festklemmen. Auch nach dem Aufsetzen des
Halters muss sich die Kupplung noch geringfügig bewegen und selbst ausrichten
können.

`usb_c_install_02` zeigt den darüber montierten USB-C-Halter. Er wird mit zwei
kleinen, zu den vorhandenen Bohrungen passenden Schrauben befestigt. Kleben ist
hier ungünstig, weil die Magnetkupplung nach der ersten Passprobe eventuell noch
nachjustiert werden muss. Der Anschluss muss mittig und gerade sitzen: Beim
Einsetzen darf er nicht verkanten und RoonPilots USB-C-Buchse darf keine tragende
Funktion übernehmen.

> [!IMPORTANT]
> Den Halter zunächst nur leicht verschrauben, RoonPilot vorsichtig einsetzen
> und die Magnetkupplung spannungsfrei ausrichten. Erst danach die beiden
> Schrauben gleichmäßig anziehen. Die Kupplung soll weiterhin etwas nachgeben
> können; sie darf das Gerät weder anheben noch seitlich belasten.

## Montagereihenfolge

1. Standkörper, Bodenabdeckung, USB-C-Halter und Rückwand jeweils einmal drucken.
2. Druckreste entfernen und Boden sowie Halter trocken einpassen. Bei zu strammer
   Passung zuerst die Drucktoleranzen korrigieren und nichts erzwingen.
3. Den Stand wie auf `usb_c_install_01` von unten betrachten und einen dünnen
   Schaumstoffstreifen an der gezeigten Stelle einklemmen oder ankleben. Die
   Dicke passend zur Schaumstoffhärte wählen.
4. Bei getrennter Stromversorgung die abgewinkelte USB-C-Magnetkupplung mittig
   auf dem Schaumstoff positionieren. Sie muss leicht beweglich bleiben.
5. Den gedruckten Halter wie auf `usb_c_install_02` darüber einsetzen und mit
   zwei kleinen passenden Schrauben zunächst nur leicht befestigen. Den Halter
   nicht verkleben.
6. RoonPilot vorsichtig zur Passprobe einsetzen, die Kupplung spannungsfrei
   nachjustieren und erst dann beide Schrauben gleichmäßig anziehen. Anschließend
   die Bodenabdeckung einsetzen.
7. Den Stand rutschfest und stabil aufstellen. RoonPilot senkrecht und ohne
   seitliche Belastung einsetzen; dabei die USB-C-Ausrichtung beobachten.
8. Ein stabiles USB-Netzteil verbinden und prüfen, dass das Gerät ohne Kabelzug
   sitzt. Bei belastetem Anschluss oder kippendem Gehäuse sofort wieder entnehmen.

Die im Prototyp verwendete abgewinkelte USB-C-Magnetkupplung wurde über
[dieses Amazon-Angebot](https://www.amazon.de/dp/B0H3C1G3CY?th=1) bezogen. Für
diesen Kupplungstyp gibt es nur wenig Auswahl. Trotzdem vor dem Kauf Maße,
Winkel und durchverbundene Pins prüfen; Produktangebote können sich unabhängig
von den STL-Dateien ändern.

Für den Anschluss möglichst ein USB-C-Kabel mit **kurzem Steckergehäuse**
verwenden. Ein langer oder steifer Stecker kann am Stand anliegen, Zug auf die
Magnetkupplung übertragen und ihre notwendige Beweglichkeit einschränken. Diese
Empfehlung gilt ebenso für die RoonPilot IR Bridge.

## Optionales Powerbank-Gehäuse unter dem Stand

Das zusätzliche dreiteilige Gehäuse wird unter den vorhandenen Stand gesetzt. Es ist für den **INIU Mini Portable Charger, Small 10000mAh 45W** konzipiert. Die konkrete Variante ist über das [INIU-Angebot bei Amazon](https://www.amazon.com/INIU-Portable-10000mAh-Essentials-Powerbank/dp/B0DQD35SQ4) erkennbar: **10.000 mAh, 45 W, ASIN B0DQD35SQ4**.

[Zur bebilderten Projektseite](https://mermayer.github.io/RoonPilot/de/#stand-powerbank)

<a href="../../docs/assets/3d/roonpilot-stand/powerbank-case/powerb_case.png"><img src="../../docs/assets/3d/roonpilot-stand/powerbank-case/powerb_case.png" alt="Explosionszeichnung des RoonPilot-Stands mit optionalem INIU-Powerbank-Gehäuse" width="560"></a>

<a href="https://mermayer.github.io/RoonPilot/assets/3d/roonpilot-stand/powerbank-case/01_Oberschale.stl"><picture><source media="(max-width: 480px)" srcset="../../docs/assets/3d/download-cards/01_Oberschale-de-mobile.png"><img src="../../docs/assets/3d/download-cards/01_Oberschale-de.png" alt="Oberschale · 93 × 79 × 21 mm · einmal drucken · 01_Oberschale.stl herunterladen" width="660"></picture></a>

<a href="https://mermayer.github.io/RoonPilot/assets/3d/roonpilot-stand/powerbank-case/02_Bodenwanne.stl"><picture><source media="(max-width: 480px)" srcset="../../docs/assets/3d/download-cards/02_Bodenwanne-de-mobile.png"><img src="../../docs/assets/3d/download-cards/02_Bodenwanne-de.png" alt="Bodenwanne · 93 × 79 × 16,8 mm · einmal drucken · 02_Bodenwanne.stl herunterladen" width="660"></picture></a>

<a href="https://mermayer.github.io/RoonPilot/assets/3d/roonpilot-stand/powerbank-case/03_Taster.stl"><picture><source media="(max-width: 480px)" srcset="../../docs/assets/3d/download-cards/03_Taster-de-mobile.png"><img src="../../docs/assets/3d/download-cards/03_Taster-de.png" alt="Taster · 20,05 × 23,05 × 8 mm · einmal drucken · 03_Taster.stl herunterladen" width="660"></picture></a>

<a href="https://mermayer.github.io/RoonPilot/assets/3d/roonpilot-stand/powerbank-case/RoonPilot-powerbank-case-STL.zip"><img src="../../docs/assets/3d/download-cards/download-all-stl-de.png" alt="Alle STL-Dateien herunterladen" width="300"></a>

ZIP mit Oberschale, Bodenwanne und Taster. Jedes Teil einmal drucken und vor der Montage einpassen.

Die drei Teile ergänzen den vierteiligen Stand. **Jedes Zusatzteil einmal drucken.** Die Maße beschreiben die STL-Modelle; die fertige Passung hängt vom Druck ab. Vor dem Verschrauben Oberschale, Bodenwanne und Taster trocken einpassen. Die Explosionszeichnung zeigt die Anordnung von Stand, Zusatzgehäuse, Powerbank und Taster.

## Hinweise zum Drucken

Es werden bewusst keine druckerspezifischen Temperaturen, Stützen, Wandstärken,
Infill- oder Materialrezepte behauptet, weil sie nicht für verschiedene Drucker
validiert wurden. Einstellungen passend zum verwendeten Material wählen und den
fertigen Druck vor dem Einsetzen von Elektronik auf Schichttrennung, scharfe
Kanten und Verformung prüfen.

Die STL-Dateien sind RoonPilot-Projektbestandteile und unterliegen weiterhin der
Projektlizenz. Vor Weitergabe von Dateien oder Druckteilen die
[Lizenzhinweise](licensing.md) lesen.
