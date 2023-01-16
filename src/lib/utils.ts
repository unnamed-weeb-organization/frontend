import type { SessionJWTData } from "$lib/typings/client/locals";
import { getValidName, Locale, type Name } from "$lib/typings/server/general";

export const getFormattedLength = (time: number) => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time - minutes * 60);
	return `${minutes}:${seconds}`;
};

export const getFormattedDate = (date: Date) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	return `${year}-${month}-${day}`;
};

export const getDateFromFormatted = (date: string) => {
	const [year, month, day] = date.split("-").map((d) => Number(d));

	if (isNaN(year) || isNaN(month) || isNaN(day)) {
		throw new Error("Invalid date");
	}

	return new Date(year, month - 1, day);
};

export const getMissingFields = (fields: Record<string, string | undefined>) => {
	return Object.entries(fields).flatMap(([key, value]) => (!value ? key : []));
};

export const getMissingErrorMessage = (missing: string[]) => {
	const single = missing.length === 1;
	return `${single ? "Field" : "Fields"} ${missing.join(", ")} should not be empty.`;
};

export const validateEmail = (email: string) => {
	return email.match(/^[^@]+@[^@]+\.[^@]+$/) !== null;
};

export const validatePassword = (password: string) => {
	return password.length >= 8;
};

export const validateUsername = (username: string) => {
	return username.match(/^[a-zA-Z0-9]+$/) !== null;
};

export const concatPageTitle = (t: string | (string | Name)[], locale: Locale): string | null => {
	if (typeof t === "string") return t;
	else if (Array.isArray(t))
		return t.map((mo) => (typeof mo === "string" ? mo : getValidName(mo, locale))).join(" ");
	else return null;
};

export const getRandomizedTempId = () =>
	Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

/**
 * Validation process to check if the name field follows the correct set of rules.
 *
 * @see https://github.com/orgs/unnamed-weeb-organization/projects/2?pane=item&itemId=17019329
 */
export const validateNameStruct = (name: Name): string | null => {
	const { english, romanized, native } = name;

	if (native && !romanized) {
		return "Romanized field should not be empty if native is present.";
	}

	if (romanized && !native) {
		return "Native field should not be empty if romanized is present.";
	}

	if (english && (romanized || native)) {
		return "Native and romanized fields must be empty if english is present.";
	}

	if (!english && !romanized && !native) {
		return "Must contain either English, or Native and Romanized.";
	}

	return null;
};

/**
 * Uses Node.js Buffer to decode the JWT token.
 */
export const decodeSessionJWT = (token: string): SessionJWTData => {
	return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString("utf-8"));
};
