import { artist, externalSites, release, song } from "$lib/placeholders";
import type { Artist } from "$lib/typings/server/artist";
import type { PageLoad } from "./$types";

// TODO: Replace placeholder data with graphql requests.
export const load = (async () => {
	return {
		title: [release.name, "by", artist.name],
		albumArtist: artist,
		release,
		externalSites,
		songs: new Array(9).fill(song),
		artists: new Map<string, Artist[]>(
			new Array(9).fill(song).map((song) => [song.id, [artist, artist]]),
		),
	};
}) satisfies PageLoad;
