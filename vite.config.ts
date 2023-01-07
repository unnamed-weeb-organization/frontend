import houdini from "houdini/vite";
import type { UserConfig } from "vite";
import svg from "@poppanator/sveltekit-svg";
import { sveltekit } from "@sveltejs/kit/vite";

const config: UserConfig = {
	plugins: [
		houdini(),
		sveltekit(),
		svg({
			includePaths: ["./src/lib/assets/icons/"],
			svgoOptions: {
				multipass: true,
				plugins: [
					{ name: "preset-default", params: { overrides: { removeViewBox: false } } },
					{ name: "removeAttrs", params: { attrs: "(fill|stroke)" } }
				]
			}
		}),
		svg({
			includePaths: ["./src/lib/assets/logos/"],
			svgoOptions: {
				multipass: true,
				plugins: [
					{ name: "preset-default", params: { overrides: { removeViewBox: false } } }
				]
			}
		})
	]
};

export default config;
