import type { PageLoad } from "./$types";
import { release, artist, song, externalSites } from "$lib/placeholders";
import { getNonEmptyName } from "$lib/typings/server/general";

// TODO: Replace placeholder data with graphql requests.
export const load = (() => {
	return {
		title: `${getNonEmptyName(release.name)} by ${getNonEmptyName(artist.name)}`,
		artist,
		release,
		externalSites,
		songs: new Array(9).fill(song),
	};
}) satisfies PageLoad;
