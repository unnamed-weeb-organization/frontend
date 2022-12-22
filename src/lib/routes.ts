export enum Route {
	Home = "/",
	Artists = "/artists",
	Albums = "/albums",
	Anime = "/anime",
	Songs = "/songs",
	User = "/user",
	Settings = "/settings",
	Me = "/me",
	EditMe = "/me/edit",

	Logout = "/me/logout"
}

export interface RouteParameters {
	[Route.Logout]: {
		from: string
	},
}


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function withParameter<T = Route>(route: T, params: RouteParameters[T]) {
	return  route + "?" +  Object.entries(params as object)
		.map(([key, val]) => `${key}=${val}`)
		.join("&");
}