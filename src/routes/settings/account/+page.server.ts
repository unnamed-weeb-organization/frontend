import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load = (async ({ cookies }) => {
	if (!cookies.get("AuthorizationToken")) throw error(401, "Unauthorized");

	return {};
}) satisfies PageServerLoad;
