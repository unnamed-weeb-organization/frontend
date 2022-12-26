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
}

export enum CTXType {
	Release,
	Artist,
	Anime,
	Song
}

export const getCTXTypes = (): CTXType[] => {
	return Object.keys(CTXType)
		.filter((key) => isNaN(Number(key)))
		.map((key) => CTXType[key as keyof typeof CTXType]);
};

export const getCTXTypeName = (type: CTXType) => {
	switch (type) {
		case CTXType.Release:
			return "Album";
		case CTXType.Artist:
			return "Artist";
		case CTXType.Anime:
			return "Anime";
		case CTXType.Song:
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
	if (base === CTXType.Artist || base === CTXType.Anime) {
		throw new Error("Invalid join");
	}

	if (base === CTXType.Release) {
		switch (to) {
			case CTXType.Artist:
				return "by";
			default:
				throw new Error("Invalid join");
		}
	}

	if (base === CTXType.Song) {
		switch (to) {
			case CTXType.Release:
				return "from";
			case CTXType.Anime:
				return "appeared in";
			case CTXType.Artist:
				return "by";
			default:
				throw new Error("Invalid join");
		}
	}
};

export enum ExternalSiteType {
	AppleMusic,
	YouTube,
	Spotify,
	SoundCloud,
	Twitter,
	Instagram,
}

export interface ExternalSite {
	type: ExternalSiteType;
	url: string;
}

export const getExternalSiteName = (type: ExternalSiteType) => {
	switch (type) {
		case ExternalSiteType.AppleMusic:
			return "Apple Music";
		case ExternalSiteType.YouTube:
			return "YouTube";
		case ExternalSiteType.Spotify:
			return "Spotify";
		case ExternalSiteType.SoundCloud:
			return "SoundCloud";
		case ExternalSiteType.Twitter:
			return "Twitter";
		case ExternalSiteType.Instagram:
			return "Instagram";
	}
}