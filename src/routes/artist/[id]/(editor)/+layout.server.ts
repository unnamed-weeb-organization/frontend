import { HTTPCode, NOT_VERIFIED_RESOURCE_EDIT } from "$lib/constants";
import { isRoleHigherThan, Role } from "$lib/typings/server/user";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
	if (!locals.user) {
		throw error(HTTPCode.NotAuthorized, { useDefault: true });
	}

	if (!isRoleHigherThan(locals.user.access_level, Role.Unverified)) {
		throw error(HTTPCode.Forbidden, { message: NOT_VERIFIED_RESOURCE_EDIT });
	}

	return {};
}) satisfies LayoutServerLoad;
