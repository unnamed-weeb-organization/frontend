import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { user } from "$lib/placeholders";
import { getMissingFields } from "$lib/utils";
import { Route, RoutePoint } from "$lib/routes";
import {
	COOKIE_AUTH_OPTIONS,
	COOKIE_AUTH_PERSISTENT_OPTIONS,
	COOKIE_USER_ID,
	COOKIE_USER_REFRESH,
	COOKIE_USER_SESSION,
	HTTPCode
} from "$lib/constants";

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const fields = {
			username: data.get("username")?.toString(),
			password: data.get("password")?.toString()
		};

		const missing = getMissingFields(fields);
		if (missing.length > 0) return fail(400, { missing });

		cookies.set(COOKIE_USER_ID, user.id, COOKIE_AUTH_PERSISTENT_OPTIONS);
		cookies.set(COOKIE_USER_SESSION, "SessionToken", COOKIE_AUTH_OPTIONS);
		cookies.set(COOKIE_USER_REFRESH, "RefreshToken", COOKIE_AUTH_PERSISTENT_OPTIONS);

		throw redirect(
			HTTPCode.SeeOther,
			data.get("from")?.toString() ?? Route[RoutePoint.Home].route
		);
	}
};

export const load = (async ({ cookies }) => {
	if (cookies.get(COOKIE_USER_SESSION) != null) {
		throw redirect(HTTPCode.NotModified, Route[RoutePoint.Home].route);
	}

	return {
		title: "auth/login",
		header: "Login"
	};
}) satisfies PageServerLoad;
