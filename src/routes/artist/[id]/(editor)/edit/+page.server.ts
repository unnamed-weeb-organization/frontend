import type { Actions } from "./$types";

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		console.log(data);
	}
};
