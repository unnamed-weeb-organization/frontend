export enum Route {
	Home = '/',
	Artists = '/artists',
	Albums = '/albums',
	Anime = '/anime',
	Songs = '/songs',
}

export const routeFromString = (route: string): Route => {
	const thisRoute = Object.values(Route).find((r) => r === route);

	if (thisRoute === undefined) {
		throw new Error(`Route ${route} not found.`);
	}

	return thisRoute;
}