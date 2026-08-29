# Lizenzierung und Weitergabe

[Dokumentationsindex](README.md) · [English](../licensing.md)

Diese Seite ist eine praktische Zusammenfassung. Bei Abweichungen gelten die
vollständigen Lizenztexte. Sie ist keine Rechtsberatung.

## Kurzfassung

Für die eigens für RoonPilot geschriebenen Teile gilt:

- private und andere nicht kommerzielle Nutzung ist kostenlos erlaubt;
- kommerzielle Nutzung benötigt eine separate schriftliche Erlaubnis von
  Senior Coder;
- die Lizenz verlangt nicht, dass Anwender den Quellcode eigener Änderungen
  veröffentlichen;
- wer RoonPilot weitergibt, muss auch die PolyForm-Lizenz oder deren URL sowie
  den mitgelieferten `Required Notice` weitergeben.

Maßgeblich ist die
[PolyForm Noncommercial License 1.0.0](../../LICENSE.md). „Nicht kommerziell“
richtet sich nach deren Definition und nicht nur danach, ob unmittelbar Geld
fließt. Unternehmen, kostenpflichtige Produkte und Dienste sowie Anwendungen
mit erwarteter kommerzieller Nutzung benötigen vorher eine separate Erlaubnis.

## Drittanbieter bleiben getrennt

RoonPilot enthält ESP-IDF, LVGL, cJSON, Schriftarten und weitere Komponenten.
Diese Teile behalten ihre ursprünglichen Apache-, MIT-, BSD-, OFL- und anderen
freizügigen Lizenzen. Die nicht kommerzielle RoonPilot-Bedingung nimmt keine
Rechte zurück, welche diese Urheber unabhängig eingeräumt haben – einschließlich
kommerzieller Rechte an deren eigenem Code.

Das vollständige Verzeichnis steht in den
[Drittanbieterhinweisen](../../THIRD_PARTY_NOTICES.md). Die exakten Texte und
Urheberhinweise für Firmware 1.0.0 liegen unter
[`docs/legal/`](../../docs/legal/).

## Veröffentlichung von Quellcode

Weder PolyForm Noncommercial 1.0.0 noch die aufgeführten MIT-, Apache-2.0-,
BSD- und OFL-Abhängigkeiten verlangen allgemein, dass ein Anwender den
Quellcode seiner geänderten RoonPilot-Anwendung veröffentlicht. Bei einer
Weitergabe müssen die jeweiligen Lizenz-, Hinweis- und
Namensnennungspflichten trotzdem erfüllt werden. Drittanbieterhinweise dürfen
nicht entfernt und unabhängig lizenzierte Fremdteile dürfen nicht nachträglich
unter die PolyForm-Einschränkung gestellt werden.

## Was jedes Binärpaket begleitet

Jedes RoonPilot-Releasepaket enthält:

- `LICENSE.md` für die RoonPilot-eigenen Teile;
- `NOTICE` mit der verpflichtenden `Required Notice`-Zeile;
- `THIRD_PARTY_NOTICES.md` mit dem Komponentenverzeichnis;
- `LICENSES/` mit den exakten Lizenz- und Urheberdateien der Abhängigkeiten;
- `roonpilot.spdx`, die maschinenlesbare SPDX-Stückliste.
- `roonpilot-companion.spdx`, die Stückliste des optionalen Companion-Abbilds.

Auf der nicht verlinkten Validierungsseite stehen diese Dokumente direkt bei
den Binärdownloads. Spätere öffentliche Releases behalten dasselbe
Lizenzpaket.

## Häufige Fälle

| Beabsichtigte Nutzung | Praktisches Ergebnis |
| --- | --- |
| Persönliche Roon-Fernbedienung zu Hause | Erlaubte nicht kommerzielle Nutzung |
| Hobby-Änderung oder privates Experiment | Erlaubt, wenn keine kommerzielle Anwendung erwartet wird |
| Unveränderten oder geänderten Build mit anderen Hobbyanwendern teilen | Nicht kommerziell erlaubt; alle vorgeschriebenen Hinweise mitgeben |
| Vorinstallierte Geräte verkaufen oder RoonPilot in ein bezahltes Produkt/einen Dienst aufnehmen | Separate schriftliche Erlaubnis für RoonPilot-eigene Teile erforderlich |
| Eine unabhängig MIT-/Apache-/BSD-lizenzierte Komponente wiederverwenden | Es gilt deren eigene Lizenz, nicht PolyForm |

Wenn eine geplante Nutzung nicht eindeutig zuzuordnen ist, vor Verteilung oder
kommerziellem Einsatz zuerst eine Erlaubnis einholen.
