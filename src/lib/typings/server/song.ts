import type { Name } from "$lib/typings/server/general";

export interface Song {
	id: string;
	name: Name;
	length: number;
	released_on: Date;
}
