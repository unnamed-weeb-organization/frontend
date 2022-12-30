export enum Country {
	Japan = "JP"
}

export const getCountryName = (country: Country) => {
	switch (country) {
		case Country.Japan:
			return "Japan";
	}
};

export enum Locale {
	Native = "native",
	Romanized = "romanized",
	English = "english"
}

export const getLocales = (): Locale[] => {
	return Object.keys(Locale).map((key) => Locale[key as keyof typeof Locale]);
};

export const getLocaleName = (locale: Locale) => {
	switch (locale) {
		case Locale.Native:
			return "Native";
		case Locale.Romanized:
			return "Romanized";
		case Locale.English:
			return "English";
	}
};

export type Name = Partial<Record<Locale, string>>;

// TODO: Non-null plus based on preference.
export const getValidName = (name: Name, preferedLocale: Locale = Locale.English): string => {
	const nm =
		name[preferedLocale] ||
		name[Locale.English] ||
		name[Locale.Romanized] ||
		name[Locale.Native];

	if (!nm) throw new Error("No valid name found");
	else return nm;
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
			return "Release";
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
