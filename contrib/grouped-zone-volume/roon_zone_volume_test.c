#include <assert.h>
#include <stdio.h>
#include <string.h>

#include "roon_zone_volume.h"

typedef struct {
    int calls;
    char last_id[32];
    roon_volume_how_t last_how;
    double last_value;
} capture_t;

static bool capture_send(void *ctx, const char *output_id, roon_volume_how_t how, double value)
{
    capture_t *cap = (capture_t *)ctx;
    cap->calls++;
    strncpy(cap->last_id, output_id, sizeof(cap->last_id) - 1);
    cap->last_how = how;
    cap->last_value = value;
    return true;
}

int main(void)
{
    roon_zone_volume_output_t outs[] = {
        { "out-a", true },
        { "out-b", true },
        { "out-fixed", false },
    };
    roon_zone_volume_zone_t zone = { outs, 3 };
    capture_t cap = { 0 };

    assert(roon_zone_volume_apply(&zone, ROON_VOLUME_HOW_RELATIVE_STEP, 2.0, capture_send, &cap));
    assert(cap.calls == 2);
    assert(strcmp(cap.last_id, "out-b") == 0);
    assert(cap.last_how == ROON_VOLUME_HOW_RELATIVE_STEP);
    assert(cap.last_value == 2.0);

    printf("roon_zone_volume_test: ok\n");
    return 0;
}
