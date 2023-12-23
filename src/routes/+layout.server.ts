import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
	return {
		localsUser: locals.user,
	};
}) satisfies LayoutServerLoad;
