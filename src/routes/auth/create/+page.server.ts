import { fail, redirect, error } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { Route, RoutePoint } from "$lib/routes";
import { UserLoginStore, UserRegisterStore } from "$houdini";
import { getMissingFields, validateEmail, validatePassword, validateUsername } from "$lib/utils";
import {
	COOKIE_SESSION_OPTIONS,
	COOKIE_PERSISTENT_OPTIONS,
	COOKIE_USER_REFRESH,
	COOKIE_USER_SESSION,
	INVALID_EMAIL,
	INVALID_PASSWORD_LENGTH,
	INVALID_USERNAME_SPECIAL_CHARS,
	HTTPCode
} from "$lib/constants";

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const dataFields = {
			email: data.get("email")?.toString(),
			username: data.get("username")?.toString(),
			password: data.get("password")?.toString()
		};

		const missing = getMissingFields(dataFields);
		if (missing.length > 0) return fail(HTTPCode.UnprocessableEntity, { missing });

		if (validateEmail(dataFields.email ?? "") === false) {
			return fail(HTTPCode.UnprocessableEntity, { error: INVALID_EMAIL });
		}

		if (validateUsername(dataFields.username ?? "") === false) {
			return fail(HTTPCode.UnprocessableEntity, { error: INVALID_USERNAME_SPECIAL_CHARS });
		}

		if (validatePassword(dataFields.password ?? "") === false) {
			return fail(HTTPCode.UnprocessableEntity, { error: INVALID_PASSWORD_LENGTH });
		}

		try {
			const userLoginStore = new UserLoginStore();
			const userRegisterStore = new UserRegisterStore();
			const fields = dataFields as Record<keyof typeof dataFields, string>;

			const reg = await userRegisterStore.mutate(fields);
			if (reg == null) throw Error("Failed to register.");

			const log = await userLoginStore.mutate(fields);
			if (log == null) throw Error("Failed to login after registering.");

			cookies.set(COOKIE_USER_SESSION, log.login.token, COOKIE_SESSION_OPTIONS);
			cookies.set(
				COOKIE_USER_REFRESH,
				log.login.refreshToken,
				COOKIE_PERSISTENT_OPTIONS
			);
		} catch (e) {
			throw error(
				HTTPCode.InternalServerError,
				Array.isArray(e) ? e[0]?.message : (e as Error)?.message ?? e?.toString()
			);
		}

		throw redirect(
			HTTPCode.SeeOther,
			data.get("from")?.toString() ?? Route[RoutePoint.Home].route
		);
	}
};

export const load = (async ({ locals }) => {
	if (locals.user != null) {
		throw redirect(HTTPCode.NotModified, Route[RoutePoint.Home].route);
	}

	return {
		title: "auth/create",
		header: "Create an account"
	};
}) satisfies PageServerLoad;
