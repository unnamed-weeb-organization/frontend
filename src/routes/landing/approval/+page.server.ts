import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { CTXType } from "$lib/typings/server/general";
import { CTXRouteViewLocation, withParameter } from "$lib/routes";
import { HTTPCode, NOT_VERIFIED_RESOURCE_EDIT } from "$lib/constants";
import { getHigherOrderRole, isRoleHigherThan, Role } from "$lib/typings/server/user";

export const load = (async ({ url, locals }) => {
	if (!locals.user) {
		throw error(HTTPCode.NotAuthorized, { useDefault: true });
	}

	if (locals.user?.roles.includes(Role.Verified) === false) {
		throw error(HTTPCode.Forbidden, { message: NOT_VERIFIED_RESOURCE_EDIT });
	}

	if (isRoleHigherThan(getHigherOrderRole(locals.user.roles), Role.Contributor)) {
		const objectId = url.searchParams.get("id");
		const ctxType = url.searchParams.get("ctx") as CTXType;

		if (!ctxType || !objectId) {
			throw error(HTTPCode.BadRequest, { useDefault: true });
		}

		const linkToObject = withParameter(CTXRouteViewLocation[ctxType], { id: objectId });
		throw redirect(HTTPCode.SeeOther, linkToObject.route);
	}
}) satisfies PageServerLoad;
