import { artist, externalSites, release } from "$lib/placeholders";
import type { PageLoad } from "./$types";

// TODO: Replace placeholder data with graphql requests.
export const load = (async () => {
	return {
		title: [artist.name],
		artist,
		externalSites,
		releases: new Array(5).fill(release),
	};
}) satisfies PageLoad;
