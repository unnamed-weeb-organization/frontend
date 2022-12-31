import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	console.log(event.url.pathname, event.locals, event.isDataRequest);

	return await resolve(event);
};
