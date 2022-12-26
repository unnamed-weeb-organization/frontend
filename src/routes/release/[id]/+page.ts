import type { PageLoad } from "./$types";
import { release, artist, song, externalSites } from "$lib/placeholders";

// TODO: Replace placeholder data with graphql requests.
export const load = (() => {
	return {
		title: `${release.name} by ${artist.name}`,
		artist,
		release,
		externalSites,
		songs: new Array(9).fill(song),
	};
}) satisfies PageLoad;
