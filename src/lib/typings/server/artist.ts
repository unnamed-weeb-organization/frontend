import type { Country, Name } from "$lib/typings/server/general";

export enum ArtistType {
	SOLO = "SOLO",
	GROUP = "GROUP",
	CHARACTER = "CHARACTER",
}

export const getArtistTypes = (): ArtistType[] => {
	return Object.values(ArtistType);
};

export const getArtistTypeName = (type: ArtistType): string => {
	switch (type) {
		case ArtistType.SOLO:
			return "Solo";
		case ArtistType.GROUP:
			return "Group";
		case ArtistType.CHARACTER:
			return "Character";
	}
};

export const getArtistTypeFromName = (name: string): ArtistType => {
	switch (name) {
		case "Solo":
			return ArtistType.SOLO;
		case "Group":
			return ArtistType.GROUP;
		case "Character":
			return ArtistType.CHARACTER;
		default:
			throw new Error(`Invalid artist type name: ${name}`);
	}
};

export interface Artist {
	id: string;
	name: Name;
	type: ArtistType;
	alt_names: Name[];
	description?: string;
	based_on?: Country;
	founded_on?: Date;
}

export type NewArtist = Omit<Artist, "id">;
