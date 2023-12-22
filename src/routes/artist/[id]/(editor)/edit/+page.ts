import { artist } from "$lib/placeholders";
import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		title: ["Editing", artist.name],
		header: ["Edit", artist.name],
	};
}) satisfies PageLoad;
