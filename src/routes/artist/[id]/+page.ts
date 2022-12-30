import type { PageLoad } from "./$types";
import { release, artist, externalSites } from "$lib/placeholders";
import { getValidName } from "$lib/typings/server/general";

// TODO: Replace placeholder data with graphql requests.
export const load = (async () => {
	return {
		title: getValidName(artist.name),
		artist,
		externalSites,
		releases: new Array(5).fill(release)
	};
}) satisfies PageLoad;
