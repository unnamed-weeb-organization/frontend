import { CTXType, type ExternalSite, ExternalSiteType } from "$lib/typings/server/general";
import type { Artist } from "$lib/typings/server/artist";
import type { ItemCardData } from "$lib/typings/client/general";
import { type Release, ReleaseType } from "$lib/typings/server/release";
import type { Song } from "$lib/typings/server/song";

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

export const song: Song = {
	id: "25",
	name: "ミュージシャン",
	artists: [artist, artist],
	length: 150
};

export const externalSites: ExternalSite[] = [
	{ type: ExternalSiteType.AppleMusic, url: "https://www.apple.com" },
	{ type: ExternalSiteType.YouTube, url: "https://www.youtube.com" },
	{ type: ExternalSiteType.Spotify, url: "https://www.spotify.com" },
	{ type: ExternalSiteType.SoundCloud, url: "https://www.soundcloud.com" },
	{ type: ExternalSiteType.Twitter, url: "https://www.twitter.com" },
	{ type: ExternalSiteType.Instagram, url: "https://www.instagram.com" }
];

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
