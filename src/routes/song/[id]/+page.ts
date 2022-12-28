import { artist, externalSites, release, song } from '$lib/placeholders';
import type { Artist } from '$lib/typings/server/artist';
import type { Release } from '$lib/typings/server/release';
import type { PageLoad } from './$types';

export const load = (async () => {
    return {
        song,
        externalSites,
        artists: new Array(2).fill(artist) as Artist[],
        releases: new Array(4).fill(release) as Release[],
    };
}) satisfies PageLoad;