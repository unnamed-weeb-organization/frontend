import { goto as sGoto } from "$app/navigation";
import { CTXType } from "$lib/typings/server/general";

export interface RouteOptions {
	/**
	 * **NOTE**:
	 *
	 * This will contain placeholders that should be replaced accordingly,
	 * as in, `artist/:id` where `id` should be replaced with artist's ID.
	 *
	 * Use {@link withParameter} to replace them with the appropriate {@link RouteParameters} object.
	 */
	route: string;
	/// Whether this route needs authentication or not.
	/// Value of null represents that this route is not authenticated.
	authenticated?: boolean;
}

/**
 * Pointer for a route, useful for maintaining
 * types for routes and their parameters.
 *
 * Use {@link Route} with a key of {@link RoutePoint}
 * to get a {@link RouteOptions} object.
 */
export enum RoutePoint {
	Home = 0,
	Settings,
	SettingsGeneral,
	SettingsAccount,
	Artists,
	Artist,
	ArtistCreate,
	ArtistEdit,
	Releases,
	Release,
	ReleaseCreate,
	ReleaseEdit,
	AnimeList,
	Anime,
	AnimeCreate,
	AnimeEdit,
	Songs,
	Song,
	SongCreate,
	SongEdit,
	Me,
	AuthLogin,
	AuthLogout,
	AuthReset,
	AuthCreate,
	LandingApproval
}

/**
 * {@link CTXType} to {@link RoutePoint} mapping.
 */
export const CTXRouteViewLocation: Record<CTXType, RoutePoint> = {
	[CTXType.ARTIST]: RoutePoint.Artist,
	[CTXType.RELEASE]: RoutePoint.Release,
	[CTXType.ANIME]: RoutePoint.Anime,
	[CTXType.SONG]: RoutePoint.Song
};

export const CTXRouteEditLocation: Record<CTXType, RoutePoint> = {
	[CTXType.ARTIST]: RoutePoint.ArtistEdit,
	[CTXType.RELEASE]: RoutePoint.ReleaseEdit,
	[CTXType.ANIME]: RoutePoint.AnimeEdit,
	[CTXType.SONG]: RoutePoint.SongEdit
};

/**
 * Contains all the routes possible for the application.
 *
 * Use {@link RoutePoint} to get a {@link RouteOptions} object,
 * which will contain information needed to navigate to a route.
 */
export const Route: Record<RoutePoint, RouteOptions> = {
	[RoutePoint.Home]: { route: "/" },
	[RoutePoint.Settings]: { route: "/settings" },
	[RoutePoint.SettingsGeneral]: { route: "/settings/general" },
	[RoutePoint.SettingsAccount]: { route: "/settings/account", authenticated: true },

	[RoutePoint.Artists]: { route: "/artists" },
	[RoutePoint.Artist]: { route: "/artist/:id" },

	[RoutePoint.Releases]: { route: "/releases" },
	[RoutePoint.Release]: { route: "/release/:id" },

	[RoutePoint.AnimeList]: { route: "/anime" },
	[RoutePoint.Anime]: { route: "/anime/:id" },
	[RoutePoint.Songs]: { route: "/songs" },
	[RoutePoint.Song]: { route: "/song/:id" },

	[RoutePoint.ArtistCreate]: { route: "/artist/create", authenticated: true },
	[RoutePoint.ReleaseCreate]: { route: "/release/create", authenticated: true },
	[RoutePoint.AnimeCreate]: { route: "/anime/create", authenticated: true },
	[RoutePoint.SongCreate]: { route: "/song/create", authenticated: true },

	[RoutePoint.ArtistEdit]: { route: "/artist/:id/edit", authenticated: true },
	[RoutePoint.ReleaseEdit]: { route: "/release/:id/edit", authenticated: true },
	[RoutePoint.AnimeEdit]: { route: "/anime/:id/edit", authenticated: true },
	[RoutePoint.SongEdit]: { route: "/song/:id/edit", authenticated: true },

	[RoutePoint.Me]: { route: "/me", authenticated: true },
	[RoutePoint.AuthLogin]: { route: "/auth/login" },
	[RoutePoint.AuthLogout]: { route: "/auth/logout", authenticated: true },
	[RoutePoint.AuthReset]: { route: "/auth/reset" },
	[RoutePoint.AuthCreate]: { route: "/auth/create" },

	[RoutePoint.LandingApproval]: { route: "/landing/approval", authenticated: true }
};

export const getMatchedRoute = (pathname: string): RouteOptions => {
	const route = Object.values(Route).find((route) => route.route === pathname);
	if (route == undefined) throw new Error(`Route ${pathname} does not exist.`);

	return route;
};

export type RouteParameters = {
	[key: string | number]: { [key: string]: string };

	[RoutePoint.Artist]: { id: string };
	[RoutePoint.Release]: { id: string };
	[RoutePoint.Anime]: { id: string };
	[RoutePoint.Song]: { id: string };

	[RoutePoint.Releases]: { artist?: string; song?: string };

	[RoutePoint.ArtistEdit]: { id: string };
	[RoutePoint.ReleaseEdit]: { id: string };
	[RoutePoint.AnimeEdit]: { id: string };
	[RoutePoint.SongEdit]: { id: string };

	[RoutePoint.AuthLogin]: { from?: string };
	[RoutePoint.AuthLogout]: { from?: string };
	[RoutePoint.AuthReset]: { from?: string };
	[RoutePoint.AuthCreate]: { from?: string };

	[RoutePoint.LandingApproval]: { ctx: CTXType; id: string };
};

/**
 * Returns the {@link RouteOptions.route} for a given route
 * while replacing and typehint-ing its possible parameters.
 */
export function withParameter<T extends RoutePoint>(
	routePoint: T,
	params?: RouteParameters[T]
): RouteOptions {
	// How the heck do I clone this object?
	const option: RouteOptions = Object.create(Route[routePoint]);

	if (params != null) {
		const searchParams = new URLSearchParams();
		const keys: string[] = Object.keys(params as object);
		const replaceableKeys = option.route.split("/").filter((key) => key.startsWith(":"));

		keys.forEach((key) => {
			const value = params[key as keyof RouteParameters[T]] as string;

			if (replaceableKeys.includes(`:${key}`)) {
				return (option.route = option.route.replace(`:${key}`, value));
			}

			if (!option.route.endsWith("/")) {
				searchParams.set(key, value);
			}
		});

		const encodedParams = searchParams.toString();
		if (encodedParams.length > 0) {
			option.route += "?" + encodedParams;
		}
	}

	return option;
}

export const goto = async <T extends RoutePoint>(
	routePoint: T,
	params?: RouteParameters[T],
	options?: Parameters<typeof sGoto>[1]
) => {
	await sGoto(withParameter(routePoint, params).route, options);
};
