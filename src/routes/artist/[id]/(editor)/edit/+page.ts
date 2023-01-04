import type { PageLoad } from './$types';
import { artist, externalSites } from '$lib/placeholders';

export const load = (async () => {
    return {
        title: ["Editing", artist.name],
        header:["Edit", artist.name],
        artist: artist,
        externalSites: externalSites,
    };
}) satisfies PageLoad;