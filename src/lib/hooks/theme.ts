/**
 * Mode should contain dark/light, and should be present in the root's classList
 * Palette should contain the theme's name, and should be following "theme-{name}" format.
 */
export type ThemeMode = "light" | "dark";

export enum ThemePalette {
	Default = "palette-default"
}

export const isDark = () => {
	const local = localStorage.getItem("theme-mode");

	if (local != null) return local === "dark";
	else return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const getCurrentPalette = () => {
	const local = localStorage.getItem("theme-palette");

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
	console.log(`Theme initialized: ${theme} ${palette}`);
};

export const changeTheme = (theme: ThemePalette | "preserve", mode: ThemeMode | "preserve") => {
	const oldMode = isDark() ? "dark" : "light";
	const oldPalette = getCurrentPalette();

	if (mode !== "preserve") {
		document.documentElement.classList.replace(oldMode, mode);
	}

	if (theme !== "preserve") {
		document.documentElement.classList.replace(oldPalette, theme);
	}
};
