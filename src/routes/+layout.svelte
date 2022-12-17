<script>
	import { onMount } from "svelte";
	import { initializeTheme } from "$lib/hooks/theme";
	import NavigationBar from "$lib/components/NavigationBar.svelte";
	import "../app.css";

	onMount(() => {
		initializeTheme();
	});
</script>

<svelte:head>
	<title>unnamed_weeb_music_database</title>
</svelte:head>

<div class="relative flex flex-col">
	<NavigationBar />
	<div class="escape_navbar" />
	<slot />
</div>
