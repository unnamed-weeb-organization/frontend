interface RouteOptions {
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
	Artists,
	Artist,
	Albums,
	Album,
	AnimeList,
	Anime,
	Songs,
	Song,
	Me,
	EditMe,
	Login,
	Logout
}

/**
 * Contains all the routes possible for the application.
 *
 * Use {@link RoutePoint} to get a {@link RouteOptions} object,
 * which will contain information needed to navigate to a route.
 */
export const Route: Record<RoutePoint, RouteOptions> = {
	[RoutePoint.Home]: { route: "/" },
	[RoutePoint.Settings]: { route: "/settings" },

	[RoutePoint.Artists]: { route: "/artists" },
	[RoutePoint.Artist]: { route: "/artist/:id" },

	[RoutePoint.Albums]: { route: "/albums" },
	[RoutePoint.Album]: { route: "/album/:id" },

	[RoutePoint.AnimeList]: { route: "/anime" },
	[RoutePoint.Anime]: { route: "/anime/:id" },
	[RoutePoint.Songs]: { route: "/songs" },
	[RoutePoint.Song]: { route: "/song/:id" },

	[RoutePoint.Me]: { route: "/me", authenticated: true },
	[RoutePoint.EditMe]: { route: "/me/edit", authenticated: true },

	[RoutePoint.Login]: { route: "/login" },
	[RoutePoint.Logout]: { route: "/logout", authenticated: true }
};

export type RouteParameters = {
	[key: string | number]: { [key: string]: string };
	[RoutePoint.Artist]: { id: string };
	[RoutePoint.Album]: { id: string };
	[RoutePoint.Anime]: { id: string };
	[RoutePoint.Song]: { id: string };
	[RoutePoint.Login]: { from?: string };
	[RoutePoint.Logout]: { from?: string };
};

/**
 * Returns the {@link RouteOptions.route} for a given route
 * while replacing and typehint-ing its possible parameters.
 */
export function withParameter<T extends RoutePoint>(routePoint: T, params?: RouteParameters[T]) {
	let route = Route[routePoint].route;

	if (params != null) {
		const keys: string[] = Object.keys(params as object);
		const replaceableKeys = route.split("/").filter((key) => key.startsWith(":"));

		keys.forEach((key) => {
			const value = encodeURIComponent(params[key as keyof RouteParameters[T]] as string);

			if (key in replaceableKeys) {
				return (route = route.replace(`:${key}`, value));
			}

			if (!route.endsWith("/")) {
				if (route.endsWith("?")) route += `${key}=${value}`;
				else route += `?${key}=${value}`;
			}
		});
	}

	return route;
}
