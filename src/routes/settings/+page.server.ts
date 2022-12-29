import { redirect } from "@sveltejs/kit";
import { Route, RoutePoint } from "$lib/routes";
import type { PageServerLoad } from "./$types";

export const load = (async ({ url }) => {
	if (url.pathname === Route[RoutePoint.Settings].route) {
		throw redirect(301, Route[RoutePoint.SettingsGeneral].route);
	}

	return {};
}) satisfies PageServerLoad;
