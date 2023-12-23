import { browser } from "$app/environment";
import { UserDataStore } from "$houdini";
import { HTTPCode, LOCAL_USER, UNEXPECTED_ERROR } from "$lib/constants";
import type { UserCardData } from "$lib/typings/client/component";
import type { LocalStorageUser } from "$lib/typings/client/locals";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load = (async (event) => {
	if (!browser) return { user: null };

	const {
		data: { localsUser },
	} = event;

	let userCardData: UserCardData | null = null;

	const localUserString = localStorage.getItem(LOCAL_USER);
	const localStorageUser: LocalStorageUser | null = localUserString
		? JSON.parse(localUserString)
		: null;

	if (localsUser && localStorageUser) {
		if (localsUser.ulid !== localStorageUser.ulid) localStorage.removeItem(LOCAL_USER);
		else {
			userCardData = {
				role: localsUser.access_level,
				userId: localsUser.ulid,
				username: localStorageUser.username,
			};
		}
	}

	if (!localsUser && localStorageUser) {
		userCardData = {
			userId: localStorageUser.ulid,
			role: localStorageUser.role,
			username: localStorageUser.username,
			needsReLogin: true,
		};
	}

	if (localsUser && !localStorageUser) {
		const userDataStore = new UserDataStore();
		const userData = await userDataStore.fetch({ event, variables: { id: localsUser.ulid } });

		if (userData.errors || !userData.data) {
			throw error(HTTPCode.NotAuthorized, {
				message: userData.errors?.at(0)?.message ?? UNEXPECTED_ERROR,
			});
		}

		userCardData = {
			userId: localsUser.ulid,
			role: localsUser.access_level,
			username: userData.data.user.username,
		};

		const newLocalStorageUser: LocalStorageUser = {
			ulid: localsUser.ulid,
			role: localsUser.access_level,
			username: userData.data.user.username,
			createdAt: userData.data.user.createdAt.getTime(),
		};

		localStorage.setItem(LOCAL_USER, JSON.stringify(newLocalStorageUser));
	}

	return {
		userCardData,
	};
}) satisfies LayoutLoad;
