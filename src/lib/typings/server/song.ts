import type { Artist } from "$lib/typings/server/artist";

export interface Song {
	id: string;
	name: string;
	artists?: Artist[];
	length: number;
}
