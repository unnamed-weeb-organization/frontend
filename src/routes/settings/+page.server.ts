import { Route, RoutePoint } from "$lib/routes";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async (response) => {
    const currentRoute = Route[response.url.pathname as unknown as RoutePoint];
    
	if (currentRoute.route === Route[RoutePoint.Settings].route) {
		throw redirect(301, Route[RoutePoint.SettingsGeneral].route);
	}

    if (currentRoute.authenticated) {
        
    }

	return {};
}) satisfies PageServerLoad;
