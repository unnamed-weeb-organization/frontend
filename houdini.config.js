/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	"watchSchema": {
		"url": "http://localhost:6001/graphql",
	},
	"plugins": {
		"houdini-svelte": {},
	},
	scalars: {
		DateTime: {
			type: "Date",
			unmarshal(val) {
				return new Date(val);
			},
			marshal(date) {
				return date.toISOString();
			},
		},
	},
};

export default config;
