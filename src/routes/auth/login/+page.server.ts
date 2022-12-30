import { Route, RoutePoint } from "$lib/routes";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		throw redirect(304, data.get("from")?.toString() ?? Route[RoutePoint.Home].route);
	}
};

export const load = (async () => {
	return {
		title: "auth/login",
		header: "Login"
	};
}) satisfies PageServerLoad;
