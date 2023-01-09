import type { Cookies } from "@sveltejs/kit";

export const APP_NAME = "unnamed_weeb_music_database";
export const API_URL_DEV = "http://0.0.0.0:6001/graphql";
export const API_URL_PROD = "";

export enum HTTPCode {
	SeeOther = 303,
	NotModified = 304,
	PermanentlyMoved = 307,
	TemporarilyMoved = 308,
	BadRequest = 400,
	NotAuthorized = 401,
	Forbidden = 403,
	NotFound = 404,
	UnprocessableEntity = 422,
	InternalServerError = 500
}

export const errorMessages: Partial<Record<HTTPCode, string>> = {
	400: "Bad request",
	401: "Not authorized",
	403: "Forbidden",
	404: "Page not found",
	422: "Invalid data",
	500: "Internal server error"
};

export const hintMessages: Partial<Record<HTTPCode, string>> = {
	400: "The request could not be understood by the server due to malformed syntax.",
	401: "You need to be logged in to access this page.",
	403: "You do not have permission to access this page.",
	404: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
	422: "The data you provided is invalid.",
	500: "Something poof'd within the server, please try again later."
};

export const NOT_VERIFIED_RESOURCE_EDIT = "Only verified users can create/edit resources.";
export const INVALID_ARTIST_TYPE = "The artist type provided is invalid.";
export const INVALID_COUNTRY = "The country provided is invalid.";
export const INVALID_DATE = "The date provided is invalid.";
export const INVALID_EMAIL = "The email provided is invalid.";
export const INVALID_PASSWORD_LENGTH = "Password must be at least 8 characters long!";
export const INVALID_USERNAME_SPECIAL_CHARS = "Username should not contain any special characters.";

export const COOKIE_USER_ID = "user-id";
export const COOKIE_USER_REFRESH = "user-refresh";
export const COOKIE_USER_SESSION = "user-session";
export const COOKIE_USER_ISSUED = "user-issued";

export const COOKIE_AUTH_SESSION_OPTIONS: Parameters<Cookies["set"]>[2] = {
	httpOnly: true,
	path: "/",
	sameSite: "strict",
	expires: new Date(Date.now() + 1000 * 60 * 15)
};
export const COOKIE_AUTH_PERSISTENT_OPTIONS: Parameters<Cookies["set"]>[2] =
	COOKIE_AUTH_SESSION_OPTIONS && {
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
	};
