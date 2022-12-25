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
