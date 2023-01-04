import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { Route, RoutePoint } from "$lib/routes";
import { COOKIE_AUTH_OPTIONS, COOKIE_USER_ID, COOKIE_USER_PAT } from "$lib/constants";

export const load = (async ({ cookies, locals, url }) => {
	cookies.delete(COOKIE_USER_ID, COOKIE_AUTH_OPTIONS);
	cookies.delete(COOKIE_USER_PAT, COOKIE_AUTH_OPTIONS);
	locals.user = null;

	const from = url.searchParams.get("from");
	throw redirect(303, from ?? Route[RoutePoint.Home].route);
}) satisfies PageServerLoad;
