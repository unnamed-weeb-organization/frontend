import { redirect } from "@sveltejs/kit";
import { HTTPCode } from "$lib/constants";
import { Route, RoutePoint } from "$lib/routes";
import type { Actions, PageServerLoad } from "./$types";

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		throw redirect(HTTPCode.SeeOther, data.get("from")?.toString() ?? Route[RoutePoint.Home].route);
	}
};

export const load = (async () => {
	return {
		title: "auth/reset",
		header: "Reset your password"
	};
}) satisfies PageServerLoad; 
