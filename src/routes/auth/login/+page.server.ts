import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { user } from "$lib/placeholders";
import { Route, RoutePoint } from "$lib/routes";
import { getMissingFields } from "$lib/utils";

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const fields = {
			username: data.get("username")?.toString(),
			password: data.get("password")?.toString(),
		}

		const missing = getMissingFields(fields);
		console.log(missing);
		if (missing.length > 0) return fail(400, { missing });
		
		locals.user = user;
		throw redirect(303, data.get("from")?.toString() ?? Route[RoutePoint.Home].route);
	}
};

export const load = (({ locals }) => {
	if (locals.user) throw redirect(303, Route[RoutePoint.Home].route);

	return {
		title: "auth/login",
		header: "Login"
	};
}) satisfies PageServerLoad;
