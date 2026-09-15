#include "roon_zone_volume.h"

bool roon_zone_volume_apply(
    const roon_zone_volume_zone_t *zone,
    roon_volume_how_t how,
    double value,
    roon_zone_volume_send_fn send,
    void *ctx)
{
    if (!zone || !send || !zone->outputs || zone->output_count == 0) {
        return false;
    }

    bool sent = false;
    for (size_t i = 0; i < zone->output_count; i++) {
        const roon_zone_volume_output_t *out = &zone->outputs[i];
        if (!out->output_id || !out->has_volume) {
            continue;
        }
        if (send(ctx, out->output_id, how, value)) {
            sent = true;
        }
    }
    return sent;
}
