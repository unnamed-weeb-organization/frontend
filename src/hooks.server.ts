import { setSession, UserRefreshStore } from "$houdini";
import {
	COOKIE_SESSION_OPTIONS,
	COOKIE_USER_REFRESH,
	COOKIE_USER_SESSION,
	HTTPCode,
} from "$lib/constants";
import { decodeSessionJWT } from "$lib/utils";
import { error, type Handle } from "@sveltejs/kit";

/**
 * Refreshes a user's session token.
 *
 * @throws {@link error}
 */
const refreshToken = async (refreshToken: string): Promise<string> => {
	try {
		const tokenStore = new UserRefreshStore();
		const ref = await tokenStore.mutate({ refreshToken });
		if (!ref.data) throw Error("No refresh token found");

		return ref.data.refreshToken.token;
	} catch (e) {
		throw error(HTTPCode.InternalServerError, (e as Error).toString());
	}
};

export const handle: Handle = async ({ event, resolve }) => {
	const refresh = event.cookies.get(COOKIE_USER_REFRESH);
	let session = event.cookies.get(COOKIE_USER_SESSION);

	if (refresh && !session && !event.isDataRequest) {
		session = await refreshToken(refresh);
	}

	if (refresh && session) {
		const jwtData = decodeSessionJWT(session);

		// In case the cookie was not removed after the token expired.
		if (jwtData.exp < Date.now() / 1000) {
			session = await refreshToken(refresh);
			event.cookies.set(COOKIE_USER_SESSION, session, COOKIE_SESSION_OPTIONS);
		}

		setSession(event, { token: session });
		event.locals.user = {
			ulid: jwtData.ulid,
			access_level: jwtData.access_level,
		};
	}

	return await resolve(event);
};
