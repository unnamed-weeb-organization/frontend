import type { Name } from "$lib/typings/server/general";

export enum ArtistType {
	SOLO = "SOLO",
	GROUP = "GROUP",
	CHARACTER = "CHARACTER",
}

export const getArtistTypeName = (type: ArtistType): string => {
	switch (type) {
		case ArtistType.SOLO:
			return "Solo";
		case ArtistType.GROUP:
			return "Group";
		case ArtistType.CHARACTER:
			return "Character";
	}
}

export interface Artist {
	id: string;
	name: Name;
	type: ArtistType;
	alt_names: Name[];
	description?: string;
	based_on: string;
	founded_on: Date;
}
