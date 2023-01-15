import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { Route, RoutePoint } from "$lib/routes";
import {
	COOKIE_AUTH_PERSISTENT_OPTIONS,
	COOKIE_AUTH_SESSION_OPTIONS,
	COOKIE_USER_REFRESH,
	COOKIE_USER_SESSION,
	HTTPCode
} from "$lib/constants";

export const load = (async ({ cookies, url }) => {
	cookies.delete(COOKIE_USER_SESSION, COOKIE_AUTH_SESSION_OPTIONS);
	cookies.delete(COOKIE_USER_REFRESH, COOKIE_AUTH_PERSISTENT_OPTIONS);

	const from = url.searchParams.get("from");
	throw redirect(HTTPCode.SeeOther, from ?? Route[RoutePoint.Home].route);
}) satisfies PageServerLoad;
