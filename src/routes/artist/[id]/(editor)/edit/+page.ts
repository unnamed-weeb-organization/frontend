import type { PageLoad } from './$types';
import { artist, externalSites } from '$lib/placeholders';

export const load = (async () => {
    return {
        title: ["Editing", artist.name],
        header: ["Edit", artist.name],
        // header:["Edit", { ...artist.name, native: "Lorem Ipsum droet sit aimte" }],
        artist: artist,
        externalSites: externalSites,
    };
}) satisfies PageLoad;

