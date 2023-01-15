import { API_URL_DEV, API_URL_PROD } from "$lib/constants";
import { HoudiniClient, type RequestHandler } from "$houdini";
import { dev, browser } from "$app/environment";

const requestHandler: RequestHandler = async ({ fetch, text = "", variables = {}, session }) => {
	let url = dev ? API_URL_DEV : API_URL_PROD;

	const headers = new Headers({ "Content-Type": "application/json" });
	if (session?.token) {
		headers.append("Authorization", `Bearer ${session.token}`);
	}

	if (dev) {
		// Loopback doesn't work in dev mode for some machines.
		if (browser) url = "http://localhost:" + API_URL_DEV.split(":").at(-1);

		console.info(`GQL request of ${text.substring(0, text.indexOf("("))}`, {
			variables,
			session,
			headers: Object.fromEntries(headers.entries())
		});
	}

	const result = await fetch(url, {
		method: "POST",
		headers: headers,
		body: JSON.stringify({
			query: text,
			variables
		})
	});

	return await result.json();
};

export default new HoudiniClient(requestHandler);
