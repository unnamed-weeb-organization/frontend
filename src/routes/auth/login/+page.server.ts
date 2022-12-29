import { Route, RoutePoint } from "$lib/routes";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const actions: Actions = {
	login: async ({ request }) => {
		console.log(await request.formData());
	},
	reset: async () => {
		throw redirect(301, Route[RoutePoint.AuthReset].route);
	}
};

export const load = (async () => {
	return {
		header: "Login"
	};
}) satisfies PageServerLoad; 
