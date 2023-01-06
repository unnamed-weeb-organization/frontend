import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { Role } from "$lib/typings/server/user";
import { HTTPCode, NOT_VERIFIED_RESOURCE_EDIT } from "$lib/constants";

export const load = (async ({ locals }) => {
	if (locals.user === undefined) {
		throw error(HTTPCode.NotAuthorized, { useDefault: true });
	}

	if (!locals.user?.roles.includes(Role.Verified)) {
		throw error(HTTPCode.Forbidden, { message: NOT_VERIFIED_RESOURCE_EDIT });
	}

	return {};
}) satisfies LayoutServerLoad;
