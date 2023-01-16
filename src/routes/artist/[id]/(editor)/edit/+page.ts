import type { PageLoad } from "./$types";
import { artist } from "$lib/placeholders";

export const load = (async () => {
	return {
		title: ["Editing", artist.name],
		header: ["Edit", artist.name]
	};
}) satisfies PageLoad;
