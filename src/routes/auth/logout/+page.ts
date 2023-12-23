import { browser } from "$app/environment";
import { HTTPCode, LOCAL_USER } from "$lib/constants";
import { Route, RoutePoint } from "$lib/routes";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ url }) => {
	if (browser) {
		localStorage.removeItem(LOCAL_USER);
		const from = url.searchParams.get("from");
		throw redirect(HTTPCode.SeeOther, from ?? Route[RoutePoint.Home].route);
	}
}) satisfies PageLoad;
