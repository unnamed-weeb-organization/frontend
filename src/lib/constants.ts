import type { Cookies } from "@sveltejs/kit";

export const APP_NAME = "unnamed_weeb_music_database";
export const API_URL_DEV = "http://localhost:6001/graphql";
export const API_URL_PROD = "";

export enum HTTPCode {
	SeeOther = 303,
	NotModified = 304,
	PermanentlyMoved = 307,
	TemporarilyMoved = 308,
	NotAuthorized = 401,
	Forbidden = 403,
	NotFound = 404,
	UnprocessableEntity = 422,
	InternalServerError = 500
}

export const errorMessages: Partial<Record<HTTPCode, string>> = {
	401: "Not authorized",
	403: "Forbidden",
	404: "Page not found",
	422: "Invalid data",
	500: "Internal server error"
};

export const hintMessages: Partial<Record<HTTPCode, string>> = {
	401: "You need to be logged in to access this page.",
	403: "You do not have permission to access this page.",
	404: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
	422: "The data you provided is invalid.",
	500: "Please try again later."
};

export const NOT_VERIFIED_RESOURCE_EDIT = "Only verified users can create/edit resources.";
export const INVALID_ARTIST_TYPE = "The artist type provided is invalid.";
export const INVALID_COUNTRY = "The country provided is invalid.";
export const INVALID_DATE = "The date provided is invalid.";

export const COOKIE_USER_ID = "user-id";
export const COOKIE_USER_REFRESH = "user-refresh";
export const COOKIE_USER_SESSION = "user-session";
export const COOKIE_AUTH_OPTIONS: Parameters<Cookies["set"]>[2] = {
	httpOnly: true,
	path: "/",
	sameSite: "strict"
};
export const COOKIE_AUTH_PERSISTENT_OPTIONS: Parameters<Cookies["set"]>[2] =
	COOKIE_AUTH_OPTIONS && {
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
	};
