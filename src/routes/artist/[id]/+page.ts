import type { PageLoad } from "./$types";
import { release, artist, externalSites } from "$lib/placeholders";

// TODO: Replace placeholder data with graphql requests.
export const load = (async () => {
	return {
		title: [artist.name],
		artist,
		externalSites,
		releases: new Array(5).fill(release)
	};
}) satisfies PageLoad;
