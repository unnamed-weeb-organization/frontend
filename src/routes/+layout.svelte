<script>
	import "../app.pcss";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { page } from "$app/stores";
	import { APP_NAME } from "$lib/constants";
	import { initializeTheme } from "$lib/theme";

	import Spinner from "$lib/components/common/Spinner.svelte";
	import NavigationBar from "$lib/components/NavigationBar.svelte";

	let loaded = false;

	onMount(() => {
		initializeTheme();
		loaded = true;
	});
</script>

<svelte:head>
	<title>{$page.data.title ?? APP_NAME}</title>
</svelte:head>

{#if loaded}
	<div class="relative flex flex-col h-full">
		<NavigationBar />
		<div class="escape_navbar" />
		<slot />
	</div>
{:else}
	<div out:fade={{ duration: 150 }} class="flex flex-col h-full justify-center items-center">
		<Spinner height={56} width={56} />
	</div>
{/if}
