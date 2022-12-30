import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    return {
		title: "Settings"
	};
}) satisfies LayoutServerLoad;