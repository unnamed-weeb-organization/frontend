import { redirect } from "@sveltejs/kit";
import { Route, RoutePoint } from "$lib/routes";
import type { PageServerLoad } from "./$types";

export const load = (() => {
	throw redirect(301, Route[RoutePoint.SettingsGeneral].route);
}) satisfies PageServerLoad;
