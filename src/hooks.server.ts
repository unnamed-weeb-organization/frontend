import { COOKIE_USER_SESSION } from "$lib/constants";
import { user } from "$lib/placeholders";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	if (event.cookies.get(COOKIE_USER_SESSION)) {
		// TODO: Handle verification of the PAT.
		event.locals.user = user;
	}
	
	return await resolve(event);
};
