<script>
	import { onMount } from "svelte";
	import "../app.css";

	onMount(() => {
		const isDark =
			window.matchMedia("(prefers-color-scheme: dark)").matches ||
			localStorage.getItem("dark") === "true";
		document.documentElement.classList.add(isDark ? "dark" : "light");
	});
</script>

<svelte:head>
	<title>unnamed_weeb_music_database</title>
</svelte:head>

<slot />
