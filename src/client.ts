import { dev } from "$app/environment";
import { API_URL_DEV, API_URL_PROD } from "$lib/constants";
import { HoudiniClient, type RequestHandler } from "$houdini";

const requestHandler: RequestHandler = async ({ fetch, text = "", variables = {}, metadata }) => {
	const result = await fetch(dev ? API_URL_DEV : API_URL_PROD, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});
	return await result.json();
};

export default new HoudiniClient(requestHandler);
