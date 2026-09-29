# Grouped zone volume (firmware integration)

Roon’s transport API exposes `change_volume` per **output** (`output_id`), not per zone.
A grouped zone (one zone name, multiple `outputs`) therefore needs one `change_volume`
request per output that supports software volume.

RoonPilot’s ring, overlay and web UI are zone-oriented. When only the primary (or first)
output is updated, the other grouped endpoints stay at their previous level.

## Integration

1. Locate the code path that sends `com.roonlabs.transport:1/change_volume` for the
   selected control zone (rotary encoder, web API, maximum-volume clamp).
2. Replace the single-output call with `roon_zone_volume_apply()` from
   `roon_zone_volume.c`, passing the current subscribed zone snapshot and the same
   `how` / `value` already computed for the UI output.
3. Keep UI state (overlay text, arc, web slider) driven by the existing **primary**
   volume output; only the transport fan-out changes.

`roon_zone_volume_apply()` skips outputs without a `volume` object (fixed volume).

## Behaviour

| `how` | Fan-out |
| --- | --- |
| `relative_step` | Same step count to every mutable output (native step differs per device). |
| `relative` | Same native delta to every mutable output. |
| `absolute` | Same absolute value to every mutable output (matches Roon Remote for many groups; heterogeneous %/dB groups may still need per-output mapping in a follow-up). |

Ring and detent logic should stay unchanged; only multiply transport calls by
`zone.outputs.length` for grouped zones.

## Tests

See **guides/test-plan.md** section G (grouped zone volume).
