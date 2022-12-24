import type { PageLoad } from "./$types";
import { release, artist } from "$lib/placeholders";

// TODO: Replace placeholder data with graphql requests.
export const load = (() => {
	return {
		title: `${release.name} by ${artist.name}`,
		artist,
		release
	};
}) satisfies PageLoad;
