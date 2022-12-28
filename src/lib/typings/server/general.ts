export enum Country {
	Japan = "JP",
}

export const getCountryName = (country: Country) => {
	switch (country) {
		case Country.Japan:
			return "Japan";
	}
}

export interface Name {
	native?: string;
	romanized?: string;
	english?: string;
}

// TODO: Non-null plus based on preference.
export const getNonEmptyName = (name: Name): string => {
	if (name.native) return name.native;
	if (name.romanized) return name.romanized;
	if (name.english) return name.english;
	throw new Error("Name object is empty.");
};

export enum CTXType {
	RELEASE = "RELEASE",
	ARTIST = "ARTIST",
	ANIME = "ANIME",
	SONG = "SONG"
}

export const getCTXTypes = (): CTXType[] => {
	return Object.keys(CTXType).map((key) => CTXType[key as keyof typeof CTXType]);
};

export const getCTXTypeName = (type: CTXType) => {
	switch (type) {
		case CTXType.RELEASE:
			return "Album";
		case CTXType.ARTIST:
			return "Artist";
		case CTXType.ANIME:
			return "Anime";
		case CTXType.SONG:
			return "Song";
	}
};

/**
 * Gets the word that should be used by when {@link base} is referenced by {@link to}.
 *
 * E.G:
 * 1. ミュージシャン **by** きのこ帝国 (Song, Artist)
 *
 * @throws Error when this join is invalid
 */
export const getJoiningGrammar = (base: CTXType, to: CTXType) => {
	if (base === CTXType.ARTIST || base === CTXType.ANIME) {
		throw new Error("Invalid join");
	}

	if (base === CTXType.RELEASE) {
		switch (to) {
			case CTXType.ARTIST:
				return "by";
			default:
				throw new Error("Invalid join");
		}
	}

	if (base === CTXType.SONG) {
		switch (to) {
			case CTXType.RELEASE:
				return "from";
			case CTXType.ANIME:
				return "appeared in";
			case CTXType.ARTIST:
				return "by";
			default:
				throw new Error("Invalid join");
		}
	}
};

export enum ExternalSiteType {
	APPLE_MUSIC,
	YOU_TUBE,
	SPOTIFY,
	SOUND_CLOUD,
	TWITTER,
	INSTAGRAM
}

export interface ExternalSite {
	type: ExternalSiteType;
	url: string;
}

export const getExternalSiteName = (type: ExternalSiteType) => {
	switch (type) {
		case ExternalSiteType.APPLE_MUSIC:
			return "Apple Music";
		case ExternalSiteType.YOU_TUBE:
			return "YouTube";
		case ExternalSiteType.SPOTIFY:
			return "Spotify";
		case ExternalSiteType.SOUND_CLOUD:
			return "SoundCloud";
		case ExternalSiteType.TWITTER:
			return "Twitter";
		case ExternalSiteType.INSTAGRAM:
			return "Instagram";
	}
};
