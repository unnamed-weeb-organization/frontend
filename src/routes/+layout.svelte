<script lang="ts">
	import "../app.pcss";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import type { LayoutData } from "./$types";
	import { APP_NAME } from "$lib/constants";
	import { initializeSettings } from "$lib/settings";

	import NavigationBar from "$lib/components/NavigationBar.svelte";

	export let data: LayoutData;

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
