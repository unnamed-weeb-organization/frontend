import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { getMissingFields } from "$lib/utils";
import { Route, RoutePoint } from "$lib/routes";
import { user } from "$lib/placeholders";

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const fields = {
			email: data.get("email")?.toString(),
			name: data.get("username")?.toString(),
			password: data.get("password")?.toString()
		};

		const missing = getMissingFields(fields);
		if (missing.length > 0) return fail(400, { missing });

		locals.user = user;
		throw redirect(303, data.get("from")?.toString() ?? Route[RoutePoint.Home].route);
	}
};

export const load = (async ({ locals }) => {
	if (locals.user) throw redirect(303, Route[RoutePoint.Home].route);

	return {
		title: "auth/create",
		header: "Create an account"
	};
}) satisfies PageServerLoad;
