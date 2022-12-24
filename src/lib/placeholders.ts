import { CTXType } from "$lib/typings/server/general";
import type { Artist } from "$lib/typings/server/artist";
import type { ItemCardData } from "$lib/typings/client/general";
import { type Release, ReleaseType } from "$lib/typings/server/release";

export const release: Release = {
	id: "1",
	name: "eureka",
	release_type: ReleaseType.Album,
	total_tracks: 9
};

export const artist: Artist = {
	id: "1",
	name: "きのこ帝国"
};

export const RAData: ItemCardData[] = [
	{
		type: CTXType.Release,
		label: "eureka",
		id: "1",
		imageURL: "2",
		alt: { label: "きのこ帝国", id: "3", type: CTXType.Artist }
	},
	{
		type: CTXType.Release,
		label: "これでいいんだよ",
		id: "4",
		imageURL: "5",
		alt: { label: "Yuko Ando", id: "6", type: CTXType.Artist }
	}
];
