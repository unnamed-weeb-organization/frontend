/// <references types="houdini-svelte">

// TODO: change the api url based on the environment
/** @type {import('houdini').ConfigFile} */
const config = {
	apiUrl: "http://0.0.0.0:6001/graphql",
	plugins: {
		"houdini-svelte": {}
	},
	scalars: {
        DateTime: {
            type: 'Date',
            unmarshal(val) {
                return new Date(val)
            },
            marshal(date) {
                return date.toISOString()
            }
        }
	}
};

export default config;
