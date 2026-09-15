#pragma once

#include <stddef.h>
#include <stdbool.h>

typedef enum {
    ROON_VOLUME_HOW_ABSOLUTE = 0,
    ROON_VOLUME_HOW_RELATIVE,
    ROON_VOLUME_HOW_RELATIVE_STEP,
} roon_volume_how_t;

typedef struct {
    const char *output_id;
    bool has_volume;
} roon_zone_volume_output_t;

typedef struct {
    const roon_zone_volume_output_t *outputs;
    size_t output_count;
} roon_zone_volume_zone_t;

typedef bool (*roon_zone_volume_send_fn)(
    void *ctx,
    const char *output_id,
    roon_volume_how_t how,
    double value);

/**
 * Apply one volume change to every software-controllable output in the zone.
 *
 * @return true if at least one change_volume request was sent.
 */
bool roon_zone_volume_apply(
    const roon_zone_volume_zone_t *zone,
    roon_volume_how_t how,
    double value,
    roon_zone_volume_send_fn send,
    void *ctx);
