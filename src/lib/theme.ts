/**
 * Mode should contain dark/light, and should be present in the root's classList
 * Palette should contain the theme's name, and should be following "theme-{name}" format.
 */
export const THEME_PALETTE_KEY = "theme-pallete";
export const THEME_MODE_KEY = "theme-mode";

export enum ThemePalette {
	Default = "palette-default"
}

export const isDark = () => {
	const local = localStorage.getItem(THEME_MODE_KEY);

	if (local != null) return local === "dark";
	else return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const getCurrentPalette = () => {
	const local = localStorage.getItem(THEME_PALETTE_KEY);

	if (local === null) return ThemePalette.Default;
	else {
		const localKey = Object.values(ThemePalette).indexOf(local as ThemePalette);
		return Object.keys(ThemePalette)[localKey];
	}
};

export const initializeTheme = () => {
	const theme = isDark() ? "dark" : "light";
	const palette = getCurrentPalette();

	document.documentElement.classList.add(theme);
	document.documentElement.classList.add(palette);
};

export const changeTheme = (theme: ThemePalette | "preserve", dark: boolean | "preserve") => {
	document.documentElement.classList.add("no-transition");

	if (dark !== "preserve") {
		const oldMode = isDark() ? "dark" : "light";
		document.documentElement.classList.replace(oldMode, dark ? "dark" : "light");
		localStorage.setItem(THEME_MODE_KEY, dark ? "dark" : "light");
	}

	if (theme !== "preserve") {
		const oldPalette = getCurrentPalette();
		document.documentElement.classList.replace(oldPalette, theme);
		localStorage.setItem(THEME_PALETTE_KEY, theme);
	}

	// Triggers a reflow to make sure the transitions are stopped, in order to re-activate again.
	document.documentElement.offsetHeight;
	document.documentElement.classList.remove("no-transition");
};
