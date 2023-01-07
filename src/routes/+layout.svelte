<script lang="ts">
	import "../app.pcss";
	import { onMount } from "svelte";
	import type { LayoutData } from "./$types";
	import { page } from "$app/stores";
	import { dev } from "$app/environment";
	import { concatPageTitle } from "$lib/utils";
	import { API_URL_DEV, API_URL_PROD, APP_NAME } from "$lib/constants";
	import { initializeSettings, preferredTitleLocale } from "$lib/settings";

	import NavigationBar from "$lib/components/NavigationBar.svelte";

	export let data: LayoutData;

	onMount(() => {
		initializeSettings();
	});
</script>

<svelte:head>
	<title>{concatPageTitle($page.data.title ?? APP_NAME, $preferredTitleLocale)}</title>
</svelte:head>

<div class="relative flex flex-col h-full">
	<NavigationBar user={data.user} />
	<div class="escape_navbar" />
	<slot />
</div>
