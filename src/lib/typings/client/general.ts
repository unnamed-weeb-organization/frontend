import type { CTXType } from "$lib/typings/server/general";

export interface ItemCardData {
	type: CTXType;
	label: string;
	imageURL: string;
	link: string;
	alt: {
		type: CTXType;
		label: string;
		link: string;
	}
}
