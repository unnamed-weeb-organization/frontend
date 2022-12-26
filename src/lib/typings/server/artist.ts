import type { Name } from "$lib/typings/server/general";

export interface Artist {
	id: string;
	name: Name;
	alt_names: string[];
	description?: string;
}
