<script lang="ts">
	import "../app.pcss";
	import { onMount } from "svelte";
	import { createClient, setContextClient } from "@urql/svelte";
	import type { LayoutData } from "./$types";
	import { page } from "$app/stores";
	import { dev } from "$app/environment";
	import { concatPageTitle } from "$lib/utils";
	import { API_URL_DEV, API_URL_PROD, APP_NAME } from "$lib/constants";
	import { initializeSettings, preferedTitleLocale } from "$lib/settings";

	import NavigationBar from "$lib/components/NavigationBar.svelte";

	const client = createClient({
		url: dev ? API_URL_DEV : API_URL_PROD
	});
	setContextClient(client);

	export let data: LayoutData;

	onMount(() => {
		initializeSettings();
	});
</script>

<svelte:head>
	<title>{concatPageTitle($page.data.title ?? APP_NAME, $preferedTitleLocale)}</title>
</svelte:head>

<div class="relative flex flex-col h-full">
	<NavigationBar user={data.user} />
	<div class="escape_navbar" />
	<slot />
</div>
