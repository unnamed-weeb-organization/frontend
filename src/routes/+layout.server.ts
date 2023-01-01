import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
	console.log("LayoutServerLoad", locals.user);
	return {
		user: locals.user
	};
}) satisfies LayoutServerLoad;
