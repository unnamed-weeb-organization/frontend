import type { PageLoad } from "./$types";
import { release, artist, externalSites } from "$lib/placeholders";
import { getNonEmptyName } from "$lib/typings/server/general";

// TODO: Replace placeholder data with graphql requests.
export const load = (() => {
	return {
		title: getNonEmptyName(artist.name),
		artist,
		externalSites,
		releases: new Array(4).fill(release)
	};
}) satisfies PageLoad;
