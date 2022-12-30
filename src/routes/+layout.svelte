<script lang="ts">
	import "../app.pcss";
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import { APP_NAME } from "$lib/constants";
	import { initializeTheme } from "$lib/theme";
	import NavigationBar from "$lib/components/NavigationBar.svelte";

	if (browser) {
		initializeTheme();
	}
</script>

<svelte:head>
	<title>{$page.data.title ?? APP_NAME}</title>
</svelte:head>

<div class="relative flex flex-col h-full">
	<NavigationBar />
	<div class="escape_navbar" />
	<slot />
</div>
