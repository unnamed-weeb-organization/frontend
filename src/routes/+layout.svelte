<script lang="ts">
	import "@unocss/reset/tailwind-compat.css";
	import "virtual:uno.css";
	import "../app.css";

	import { onMount } from "svelte";

	import { page } from "$app/stores";
	import type { LayoutData } from "./$types";

	import { concatPageTitle } from "$lib/utils";
	import { APP_NAME } from "$lib/constants";
	import { initializeSettings, preferredTitleLocale } from "$lib/settings";

	import NavigationBar from "$lib/components/NavigationBar.svelte";

	export let data: LayoutData;

	onMount(() => {
		const isDark =
			"is-theme-mode-dark" in localStorage
				? localStorage.getItem("is-theme-mode-dark") === "true"
				: window.matchMedia("(prefers-color-scheme: dark)").matches;

		document.documentElement.classList.add(isDark ? "dark" : "light");
		document.documentElement.classList.remove("no-transition");

		initializeSettings();
	});
</script>

<svelte:head>
	<title>{concatPageTitle($page.data.title ?? APP_NAME, $preferredTitleLocale)}</title>
</svelte:head>

<div class="relative flex flex-col h-full">
	<NavigationBar userCardData={data.userCardData ?? null} />
	<div class="escape_navbar" />
	<slot />
</div>
