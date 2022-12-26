import type { Name } from "$lib/typings/server/general";

export enum ReleaseType {
	Album = "Album",
	EP = "EP",
	Single = "Single"
}

export interface Release {
	id: string;
	name: Name;
	release_type: ReleaseType;
	total_tracks: number;
}
