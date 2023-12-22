/*
 * Should only include types required by specific components.
 */
import type { CTXType } from "$lib/typings/server/general";
import type { Role } from "$lib/typings/server/user";

export interface UserCardData {
	userId: string;
	username: string;
	role: Role;
	needsReLogin?: boolean;
}

export interface ItemCardData {
	id: string;
	type: CTXType;
	label: string;
	imageURL?: string;
	alt?: {
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

export type TextFieldType = "text" | "email" | "password" | "date";

export type NamedGenericSizes = "small" | "medium" | "large";
