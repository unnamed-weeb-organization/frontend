export enum ReleaseType {
	Album = "Album",
	EP = "EP",
	Single = "Single"
}

export interface Release {
	id: string;
	name: string;
	release_type: ReleaseType;
	total_tracks: number;
}
