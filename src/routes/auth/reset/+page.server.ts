import type { Actions, PageServerLoad } from "./$types";

export const actions: Actions = {
	default: async ({ request }) => {
		console.log(await request.formData());
	}
};

export const load = (async () => {
	return {
		header: "Reset your password"
	};
}) satisfies PageServerLoad; 
