import { getValidName, type Locale, type Name } from "./typings/server/general";

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
