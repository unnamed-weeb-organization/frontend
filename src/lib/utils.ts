import { getValidName, Locale, type Name } from "./typings/server/general";

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

export const concatPageTitle = (t: string | (string | Name)[], pftl: Locale) => {
	if (typeof t === "string") return t;
	return t.map((mo) => (typeof mo === "string" ? mo : getValidName(mo, pftl))).join(" ");
};

export const getRandomizedTempId = () =>
	Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

/**
 * Validation process to check if the name field follows the correct set of rules.
 *
 * @see https://github.com/orgs/unnamed-weeb-organization/projects/2?pane=item&itemId=17019329
 */
export const validateNameStruct = (name: Name): { origin: Locale; message: string } | void => {
	const { english, romanized, native } = name;

	if (native && !romanized) {
		return {
			origin: Locale.Romanized,
			message: "romanized field should not be empty if native is present."
		};
	}

	if (romanized && !native) {
		return {
			origin: Locale.Native,
			message: "native field should not be empty if romanized is present."
		};
	}

	if (english && (romanized || native)) {
		return {
			origin: Locale.English,
			message: "native and romanized fields should be empty if english is present."
		};
	}
};
