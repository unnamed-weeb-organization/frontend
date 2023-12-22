import {
	COOKIE_PERSISTENT_OPTIONS,
	COOKIE_SESSION_OPTIONS,
	COOKIE_USER_REFRESH,
	COOKIE_USER_SESSION,
} from "$lib/constants";
import type { PageServerLoad } from "./$types";

export const load = (async ({ cookies }) => {
	cookies.delete(COOKIE_USER_SESSION, COOKIE_SESSION_OPTIONS);
	cookies.delete(COOKIE_USER_REFRESH, COOKIE_PERSISTENT_OPTIONS);
}) satisfies PageServerLoad;
