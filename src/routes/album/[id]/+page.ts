import type { PageLoad } from "./$types";
import { album, artist } from "$lib/placeholders";

// TODO: Replace placeholder data with graphql requests.
export const load = (() => {
	return {
		title: `${album.name} by ${artist.name}`,
		artist,
		album
	};
}) satisfies PageLoad;
