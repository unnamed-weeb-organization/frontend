import { HoudiniClient } from "$houdini";

export default new HoudiniClient({
	url: "http://localhost:6001/graphql",
	fetchParams: ({ session }) => {
		return {
			headers: {
				Authorization: `Bearer ${session?.token}`,
			},
		};
	},
});
