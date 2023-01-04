import { NOT_VERIFIED_RESOURCE_EDIT } from "$lib/constants";
import { Role } from "$lib/typings/server/user";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
	if (locals.user === undefined) {
		throw error(401);
	}

	if (!locals.user?.roles.includes(Role.Verified)) {
		throw error(403, { message: NOT_VERIFIED_RESOURCE_EDIT, override: true });
	}
}) satisfies LayoutServerLoad;
