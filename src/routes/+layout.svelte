<script>
	import "../app.css";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { initializeTheme } from "$lib/hooks/theme";
	import Spinner from "$lib/components/common/Spinner.svelte";
	import NavigationBar from "$lib/components/NavigationBar.svelte";

	let loaded = false;

	onMount(() => {
		initializeTheme();
		loaded = true;
	});
</script>

<svelte:head>
	<title>unnamed_weeb_music_database</title>
</svelte:head>

{#if loaded}
	<div class="relative flex flex-col h-full">
		<NavigationBar />
		<div class="escape_navbar" />
		<slot />
	</div>
{:else}
	<div
		out:fade={{ duration: 150 }}
		style="background-color: #1c1c1c"
		class="flex flex-col h-full justify-center items-center"
	>
		<Spinner height="56" width="56" />
	</div>
{/if}
