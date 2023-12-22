import { artist, externalSites } from "$lib/placeholders";
import type { Artist } from "$lib/typings/server/artist";
import type { ExternalSite } from "$lib/typings/server/general";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
	return {
		artist: artist as Artist | undefined,
		externalSites: externalSites as ExternalSite[] | undefined,
	};
}) satisfies LayoutLoad;
