<script lang="ts">
	import "../app.pcss";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { dev } from "$app/environment";
	import type { LayoutData } from "./$types";
	import { concatPageTitle } from "$lib/utils";
	import { APP_NAME, DB_SOURCE, FE_SOURCE } from "$lib/constants";
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

{#if !dev}
	<div class="flex flex-col items-center justify-center text-center font-head h-full">
		<h1 class="font-medium text-4xl text-custom-100">Under Maintenance!</h1>
		<span class="text-custom-200">Will come back online when the backend is live.</span>
		<div class="flex gap-8 font-mono text-accent-300 mt-8" data-sveltekit-preload-data="off">
			<a href={FE_SOURCE}>source:frontend</a>
			<a href={DB_SOURCE}>source:database</a>
		</div>
	</div>
{:else}
	<div class="relative flex flex-col h-full">
		<NavigationBar userCardData={data.userCardData ?? null} />
		<div class="escape_navbar" />
		<slot />
	</div>
{/if}
