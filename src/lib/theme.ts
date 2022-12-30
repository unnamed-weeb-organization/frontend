export const THEME_MODE_KEY = "is-theme-mode-dark";

export const isDark = () => {
	const local = localStorage.getItem(THEME_MODE_KEY);

	if (local != null) return local === "true";
	else return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const initializeTheme = () => {
	if (isDark()) document.documentElement.classList.add("dark");

	// no-transition class is applied prior to the initial load.
	document.documentElement.offsetHeight;
	document.documentElement.classList.remove("no-transition");
};

export const changeTheme = (dark: boolean) => {
	// Prevents the transitions from happening when the theme is changed.
	document.documentElement.classList.add("no-transition");

	document.documentElement.classList.toggle("dark", dark);
	localStorage.setItem(THEME_MODE_KEY, dark.toString());

	// Triggers a reflow to make sure the transitions are stopped, in order to re-activate again.
	document.documentElement.offsetHeight;
	document.documentElement.classList.remove("no-transition");
};
