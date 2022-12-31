import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { user } from "$lib/placeholders";
import { Route, RoutePoint } from "$lib/routes";
import { COOKIE_USER_ID, COOKIE_USER_PAT } from "$lib/constants";
import { getMissingFields, validateEmail, validatePassword, validateUsername } from "$lib/utils";

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const fields = {
			email: data.get("email")?.toString(),
			name: data.get("username")?.toString(),
			password: data.get("password")?.toString()
		};

		const missing = getMissingFields(fields);
		if (missing.length > 0) return fail(400, { missing });

		if (validateEmail(fields.email ?? "") === false) {
			return fail(400, { error: "Invalid email format!" });
		}

		if (validateUsername(fields.name ?? "") === false) {
			return fail(400, { error: "Username should not contain any special characters!" });
		}

		if (validatePassword(fields.password ?? "") === false) {
			return fail(400, { error: "Password must be at least 8 characters long!" });
		}

		cookies.set(COOKIE_USER_ID, user.id);
		cookies.set(COOKIE_USER_PAT, "PersonalAccessToken");

		throw redirect(303, data.get("from")?.toString() ?? Route[RoutePoint.Home].route);
	}
};

export const load = (async ({ cookies }) => {
	if (cookies.get(COOKIE_USER_PAT) != null) {
		throw redirect(303, Route[RoutePoint.Home].route);
	}

	return {
		title: "auth/create",
		header: "Create an account"
	};
}) satisfies PageServerLoad;
