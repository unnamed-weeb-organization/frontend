<script lang="ts">
	import "../app.pcss";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { APP_NAME } from "$lib/constants";
	import { initializeSettings } from "$lib/settings";
	import NavigationBar from "$lib/components/NavigationBar.svelte";

	onMount(() => {
		initializeSettings();
	});
</script>

<svelte:head>
	<title>{$page.data.title ?? APP_NAME}</title>
</svelte:head>

<div class="relative flex flex-col h-full">
	<NavigationBar />
	<div class="escape_navbar" />
	<slot />
</div>
