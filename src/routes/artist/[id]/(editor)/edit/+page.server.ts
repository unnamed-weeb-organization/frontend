import { error, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { RoutePoint, withParameter } from "$lib/routes";
import { getDateFromFormatted, validateNameStruct } from "$lib/utils";
import { HTTPCode, INVALID_ARTIST_TYPE, INVALID_COUNTRY } from "$lib/constants";
import { Country, CTXType, getCountryFromName, type Name } from "$lib/typings/server/general";
import { ArtistType, getArtistTypeFromName, type NewArtist } from "$lib/typings/server/artist";
import { Level } from "$lib/typings/client/general";

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const dataKeys = [...data.keys()];

		const name: Name = {
			english: data.get("name.english") as string,
			romanized: data.get("name.romanized") as string,
			native: data.get("name.native") as string
		};

		const name_error = validateNameStruct(name);
		if (name_error && name_error.level != Level.Warn) {
			throw error(HTTPCode.UnprocessableEntity, { message: name_error.message });
		}

		const altNameMap = new Map<number, Name>();
		const altNameIndexes = dataKeys
			.filter((key) => key.startsWith("alt_names"))
			.map((key) => Number(key.split(".")[1]));

		altNameIndexes.forEach((index) => {
			if (altNameMap.has(index)) return;

			const english = data.get(`alt_names.${index}.english`)?.toString();
			const native = data.get(`alt_names.${index}.native`)?.toString();
			const romanized = data.get(`alt_names.${index}.romanized`)?.toString();

			const name: Name = {
				english: english?.length === 0 ? undefined : english,
				romanized: romanized?.length === 0 ? undefined : romanized,
				native: native?.length === 0 ? undefined : native
			};

			const name_error = validateNameStruct(name);
			if (name_error && name_error.level != Level.Warn) {
				throw error(HTTPCode.UnprocessableEntity, { message: name_error.message });
			}

			altNameMap.set(index, name);
		});

		let artistType: ArtistType;
		try {
			artistType = getArtistTypeFromName(data.get("type") as string);
		} catch {
			throw error(HTTPCode.UnprocessableEntity, { message: INVALID_ARTIST_TYPE });
		}

		let based_on: Country;
		try {
			based_on = getCountryFromName(data.get("based_on") as string);
		} catch {
			throw error(HTTPCode.UnprocessableEntity, { message: INVALID_COUNTRY });
		}

		let founded_on: Date | undefined;
		try {
			const founded_on_str = data.get("founded_on")?.toString();
			founded_on = founded_on_str ? getDateFromFormatted(founded_on_str) : undefined;
		} catch {
			throw error(HTTPCode.UnprocessableEntity, { message: "Invalid date format" });
		}

		const description = data.get("description")?.toString() || undefined;

		const newArtist: NewArtist = {
			name,
			based_on,
			founded_on,
			description,
			type: artistType,
			alt_names: [...altNameMap.values()]
		};

		console.log("Artist", newArtist);

		throw redirect(
			HTTPCode.SeeOther,
			withParameter(RoutePoint.LandingApproval, { ctx: CTXType.ARTIST, id: "1" }).route
		);
	}
};
