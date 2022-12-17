/**
 * @type {import("tailwindcss").Config}
 */
const config = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			sans: ["Nunito Sans", "sans-serif"],
			head: ["Rubik", "ui-serif"]
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
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
