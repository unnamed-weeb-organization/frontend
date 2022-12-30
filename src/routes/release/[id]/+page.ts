import type { PageLoad } from "./$types";
import { release, artist, song, externalSites } from "$lib/placeholders";
import { getValidName } from "$lib/typings/server/general";
import type { Artist } from "$lib/typings/server/artist";

// TODO: Replace placeholder data with graphql requests.
export const load = (async () => {
	return {
		title: `${getValidName(release.name)} by ${getValidName(artist.name)}`,
		albumArtist: artist,
		release,
		externalSites,
		songs: new Array(9).fill(song),
		artists: new Map<string, Artist[]>(
			new Array(9).fill(song).map((song) => [song.id, [artist, artist]])
		)
	};
}) satisfies PageLoad;
