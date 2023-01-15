import { COOKIE_USER_SESSION, HTTPCode } from "$lib/constants";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load = (async ({ cookies }) => {
	if (!cookies.get(COOKIE_USER_SESSION)) {
		throw error(HTTPCode.NotAuthorized, { useDefault: true });
	}
}) satisfies PageServerLoad;
