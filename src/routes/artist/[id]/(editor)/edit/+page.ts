import type { PageLoad } from './$types';
import { artist, externalSites } from '$lib/placeholders';

export const load = (async () => {
    return {
        title: ["Editing", artist.name],
        header: "Editing",
        artist: artist,
        externalSites: externalSites,
    };
}) satisfies PageLoad;