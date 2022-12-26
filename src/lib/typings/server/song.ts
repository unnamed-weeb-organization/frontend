import type { Artist } from "$lib/typings/server/artist";
import type { Name } from "$lib/typings/server/general";

export interface Song {
	id: string;
	name: Name;
	artists?: Artist[];
	length: number;
}
