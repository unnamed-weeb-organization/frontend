export enum CTXType {
	Album,
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
		case CTXType.Album:
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

	if (base === CTXType.Album) {
		switch (to) {
			case CTXType.Artist:
				return "by";
			default:
				throw new Error("Invalid join");
		}
	}

	if (base === CTXType.Song) {
		switch (to) {
			case CTXType.Album:
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
