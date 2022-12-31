import { Country, CTXType, type ExternalSite, ExternalSiteType } from "$lib/typings/server/general";
import type { Artist } from "$lib/typings/server/artist";
import type { ItemCardData } from "$lib/typings/client/general";
import { type Release, ReleaseType } from "$lib/typings/server/release";
import type { Song } from "$lib/typings/server/song";
import { ArtistType } from "$lib/typings/server/artist";
import { Role, type User } from "./typings/server/user";

export const release: Release = {
	id: "1",
	name: {
		english: "eureka"
	},
	release_type: ReleaseType.Album,
	total_tracks: 9
};

export const artist: Artist = {
	id: "1",
	name: {
		native: "きのこ帝国",
		romanized: "Kinoko Teikoku"
	},
	type: ArtistType.GROUP,
	alt_names: [{ native: "何か" }, { romanized: "nanika" }, { english: "Something" }],
	description: "きのこ帝国は、2007年に結成された日本のロックバンド。",
	based_on: Country.Japan,
	founded_on: new Date("2007-01-01")
};

export const song: Song = {
	id: "25",
	name: {
		native: "ミュージシャン",
		romanized: "Myūjishan",
		english: "Musician"
	},
	length: 150,
	released_on: new Date("2019-01-01"),
};

export const user: User = {
	id: "1",
	name: "test",
	roles: [Role.Admin]
}

export const externalSites: ExternalSite[] = [
	{ type: ExternalSiteType.APPLE_MUSIC, url: "https://www.apple.com" },
	{ type: ExternalSiteType.YOU_TUBE, url: "https://www.youtube.com" },
	{ type: ExternalSiteType.SPOTIFY, url: "https://www.spotify.com" },
	{ type: ExternalSiteType.SOUND_CLOUD, url: "https://www.soundcloud.com" },
	{ type: ExternalSiteType.TWITTER, url: "https://www.twitter.com" },
	{ type: ExternalSiteType.INSTAGRAM, url: "https://www.instagram.com" }
];

export const RAData: ItemCardData[] = [
	{
		type: CTXType.RELEASE,
		label: "eureka",
		id: "1",
		imageURL: "2",
		alt: { label: "きのこ帝国", id: "3", type: CTXType.ARTIST }
	}
];
