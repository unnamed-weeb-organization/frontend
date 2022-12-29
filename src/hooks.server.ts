import { parseCookies } from "$lib/utils";
import { type Handle, error } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const cookie = event.request.headers.get("cookie");
	const cookies = parseCookies(cookie ?? "");

	// TODO: Handle authentication
	if (cookies.AuthorizationToken) throw error(401, "Unauthorized");

	return await resolve(event);
};
