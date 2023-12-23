import type { IconifyJSON } from "@iconify/types";
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";
import extractorSvelte from "@unocss/extractor-svelte";
import {
	type Awaitable,
	defineConfig,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";
import presetTheme from "unocss-preset-theme";
import type { Theme } from "unocss/preset-uno";

function importCollection(name: string): () => Awaitable<IconifyJSON> {
	return async () => {
		const { default: icons } = await import(`@iconify-json/${name}/icons.json`);
		return icons;
	};
}

// write a script to load a file from fs svg file, strip it'
export default defineConfig<Theme>({
	extractors: [extractorSvelte()],
	presets: [
		presetUno(),
		presetIcons({
			collections: {
				uil: importCollection("uil"),
				// logos: importCollection("icons"),
				extra: FileSystemIconLoader("./assets/logos"),
			},
		}),
		presetTheme<Theme>({
			theme: {
				dark: {
					colors: {
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
