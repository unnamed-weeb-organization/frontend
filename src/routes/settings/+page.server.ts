import { Route, RoutePoint } from "$lib/routes";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (() => {
	throw redirect(301, Route[RoutePoint.SettingsGeneral].route);
}) satisfies PageServerLoad;
