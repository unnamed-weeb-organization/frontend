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
