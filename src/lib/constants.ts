import type { Cookies } from "@sveltejs/kit";

export const APP_NAME = "unnamed_weeb_music_database";
export const FE_SOURCE = "https://github.com/unnamed-weeb-organization/frontend";
export const BE_SOURCE = "https://github.com/unnamed-weeb-organization/backend";
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

export const errorMessages: Partial<Record<number, string>> = {
	400: "Bad request",
	401: "Not authorized",
	403: "Forbidden",
	404: "Page not found",
	422: "Invalid data",
	500: "Internal server error"
};

export const hintMessages: Partial<Record<number, string>> = {
	400: "The request could not be understood by the server due to malformed syntax.",
	401: "You need to be logged in to access this page.",
	403: "You do not have permission to access this page.",
	404: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
	422: "The data you provided is invalid.",
	500: "Something poof'd within the server, please try again later."
};

export const NOT_VERIFIED_RESOURCE_EDIT = "Only verified users can create/edit resources.";
export const UNEXPECTED_ERROR = "An unexpected error occurred.";
export const INVALID_ARTIST_TYPE = "The artist type provided is invalid.";
export const INVALID_COUNTRY = "The country provided is invalid.";
export const INVALID_DATE = "The date provided is invalid.";
export const INVALID_EMAIL = "The email provided is invalid.";
export const INVALID_PASSWORD_LENGTH = "Password must be at least 8 characters long!";
export const INVALID_USERNAME_SPECIAL_CHARS = "Username should not contain any special characters.";

export const COOKIE_USER_REFRESH = "user-refresh";
export const COOKIE_USER_SESSION = "user-session";

export const LOCAL_USER = "user";

export const COOKIE_SESSION_OPTIONS: Parameters<Cookies["set"]>[2] = {
	path: "/",
	httpOnly: true,
	sameSite: "strict",
	maxAge: 1000 * 60 * 15,
	expires: new Date(Date.now() + 1000 * 60 * 15)
};
export const COOKIE_PERSISTENT_OPTIONS: Parameters<Cookies["set"]>[2] = {
	path: "/",
	httpOnly: true,
	sameSite: "strict",
	maxAge: 1000 * 60 * 60 * 24 * 30,
	expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
};
