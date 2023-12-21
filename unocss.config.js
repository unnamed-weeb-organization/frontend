import extractorSvelte from "@unocss/extractor-svelte";
import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";
import presetTheme from "unocss-preset-theme";

/**
 * @typedef {import("@iconify/types").IconifyJSON} IconifyJSON
 *
 * @param {string} name - The name of the icon collection.
 * @returns {() => Promise<IconifyJSON>} - A function that returns a promise of the icon collection.
 */
function importCollection(name) {
	return async () => {
		const { default: icons } = await import(`@iconify-json/${name}/icons.json`);
		return icons;
	};
}

/**
 * @typedef {import("unocss/preset-uno").Theme} Theme
 * @type {import("unocss").UserConfig<Theme>}
 */
const config = defineConfig({
	extractors: [extractorSvelte()],
	presets: [
		presetUno(),
		presetIcons({ collections: { uil: importCollection("uil") } }),
		presetTheme({
			theme: {
				dark: {
					"background": "#1c1c1c",
					"secondary": "#282828",
					"tertiary": "#333333",
					"400": "#8d8d8d",
					"300": "#b0b0b0",
					"200": "#dddddd",
					"100": "#f4f4f4",
					accent: {
						"background": "#0f1b2d",
						"secondary": "#10243e",
						"tertiary": "#102a4c",
						"400": "#0954a5",
						"300": "#0091ff",
						"200": "#52a9ff",
						"100": "#eaf6ff",
					},
				},
				light: {
					colors: {
						"background": "#ffffff",
						"secondary": "#f1f1f1",
						"tertiary": "#e7e7e7",
						"400": "#8d8d8d",
						"300": "#6b6b6b",
						"200": "#3e3e3e",
						"100": "#272727",
						accent: {
							"background": "#f5faff",
							"secondary": "#e1f0ff",
							"tertiary": "#cee7fe",
							"400": "#96c7f2",
							"300": "#0091ff",
							"200": "#006adc",
							"100": "#00254d",
						},
					},
				},
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	theme: {
		fontFamily: {
			sans: "Inter, Noto Sans JP, sans-serif",
			mono: "JetBrains Mono, Fira Code, monospace",
		},
	},
});

export default config;
