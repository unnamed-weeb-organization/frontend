import { COOKIE_USER_PAT } from "$lib/constants";
import { user } from "$lib/placeholders";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	if (event.cookies.get(COOKIE_USER_PAT)) {
		// TODO: Handle verification of the PAT.
		event.locals.user = user;
	}
	
	return await resolve(event);
};
