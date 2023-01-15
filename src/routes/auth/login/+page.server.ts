import { error, fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { getMissingFields } from "$lib/utils";
import { Route, RoutePoint } from "$lib/routes";
import { UserLoginStore } from "$houdini";
import {
	COOKIE_AUTH_SESSION_OPTIONS,
	COOKIE_AUTH_PERSISTENT_OPTIONS,
	COOKIE_USER_REFRESH,
	COOKIE_USER_SESSION,
	HTTPCode
} from "$lib/constants";

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const dataFields = {
			username: data.get("username")?.toString(),
			password: data.get("password")?.toString()
		};

		const missing = getMissingFields(dataFields);
		if (missing.length > 0) return fail(400, { missing });

		try {
			const userLoginStore = new UserLoginStore();
			const fields = dataFields as Record<keyof typeof dataFields, string>;

			const log = await userLoginStore.mutate({ ...fields, email: "" });
			if (log == null) {
				throw Error("Login returned a value of undefined.");
			}

			cookies.set(COOKIE_USER_SESSION, log.login.token, COOKIE_AUTH_SESSION_OPTIONS);
			cookies.set(
				COOKIE_USER_REFRESH,
				log.login.refreshToken,
				COOKIE_AUTH_PERSISTENT_OPTIONS
			);
		} catch (e) {
			throw error(HTTPCode.InternalServerError, (e as Error).toString());
		}
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
