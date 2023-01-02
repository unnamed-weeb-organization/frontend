import type { Cookies } from "@sveltejs/kit";

export const APP_NAME = "unnamed_weeb_music_database";
export const API_URL_DEV = "http://localhost:6001/graphql";
export const API_URL_PROD = "";

export const errorMessages: Record<number, string> = {
	401: "Not authorized",
	403: "Forbidden",
	404: "Page not found",
	500: "Internal server error"
};

export const hintMessages: Record<number, string> = {
	401: "You need to be logged in to access this page.",
	404: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
	500: "Please try again later."
};

export const NOT_VERIFIED_RESOURCE_EDIT = "Only verified users can create/edit resources.";

export const COOKIE_USER_ID = "user-id";
export const COOKIE_USER_PAT = "user-pat";
export const COOKIE_AUTH_OPTIONS: Parameters<Cookies["set"]>[2] = {
	httpOnly: true,
	path: "/",
	sameSite: "strict"
};
