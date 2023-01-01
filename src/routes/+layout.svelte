<script lang="ts">
	import "../app.pcss";
	import { onMount } from "svelte";
	import { createClient, setContextClient } from "@urql/svelte";
	import { page } from "$app/stores";
	import { dev } from "$app/environment";
	import { initializeSettings } from "$lib/settings";
	import { API_URL_DEV, API_URL_PROD, APP_NAME } from "$lib/constants";
	import type { LayoutData } from "./$types";
	import NavigationBar from "$lib/components/NavigationBar.svelte";

	export let data: LayoutData;

	const client = createClient({
		url: dev ? API_URL_DEV : API_URL_PROD
	});

	setContextClient(client);

	onMount(() => {
		initializeSettings();
	});
</script>

<svelte:head>
	<title>{$page.data.title ?? APP_NAME}</title>
</svelte:head>

<div class="relative flex flex-col h-full">
	<NavigationBar user={data.user} />
	<div class="escape_navbar" />
	<slot />
</div>
