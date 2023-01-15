/*
 * Should only include types required by specific components.
 */
import type { Role } from "$lib/typings/server/user";
import type { CTXType } from "$lib/typings/server/general";

export interface UserCardData {
    userId: string;
    username: string;
    role: Role;
    needsReLogin?: boolean;
}

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
