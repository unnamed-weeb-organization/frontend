import type { CTXType } from "$lib/typings/server/general";

export interface ItemCardData {
	type: CTXType;
	label: string;
	imageURL: string;
	id: string;
	alt: {
		type: CTXType;
		label: string;
		id: string;
	};
}

export interface ArtTileListData {
	id: string;
	ctx: CTXType;
	imageURL: string;
	label: string;
}
