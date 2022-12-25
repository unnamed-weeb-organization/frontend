const colors = require("tailwindcss/colors");

/**
 * @type {import("tailwindcss").Config}
 */
const config = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			sans: ["Noto Sans", "Noto Sans JP", "sans-serif"],
			head: ["Rubik", "Noto Sans JP", "ui-serif"]
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			red: colors.red,
			yellow: colors.amber,
			accent: {
				background: "var(--accent-background)",
				secondary: "var(--accent-secondary)",
				tertiary: "var(--accent-tertiary)",
				400: "var(--accent-400)",
				300: "var(--accent-300)",
				200: "var(--accent-200)",
				100: "var(--accent-100)"
			},
			custom: {
				background: "var(--background)",
				secondary: "var(--secondary)",
				tertiary: "var(--tertiary)",
				400: "var(--400)",
				300: "var(--300)",
				200: "var(--200)",
				100: "var(--100)"
			}
		}
	}
};

module.exports = config;
