<script lang="ts">
	import { fade } from "svelte/transition";
	import { page } from "$app/stores";
	import { Route, RoutePoint, type RouteOptions } from "$lib/routes";

	const subs: [string, RouteOptions][] = [
		["General", Route[RoutePoint.SettingsGeneral]],
		["Account", Route[RoutePoint.SettingsAccount]]
	];
</script>

<div class="flex flex-col md:flex-row w-full h-full md:my-4" in:fade={{ duration: 150 }}>
	<nav>
		<h1>Settings</h1>
		{#each subs as [name, options]}
			<a class:current={$page.url.pathname === options.route} href={options.route}>
				{name}
			</a>
		{/each}
	</nav>
	<div class="flex flex-col px-4 pt-2 flex-1">
		<slot />
	</div>
</div>

<style lang="postcss">
	nav {
		@apply flex items-center md:items-start md:flex-col
		md:w-56 mx-2 md:mx-0 px-2 py-2 md:py-0
		border-b-2 md:border-b-0 md:border-r-2 border-custom-tertiary
		font-head;
	}

	nav h1 {
		@apply hidden md:block md:pb-2 
		font-head font-medium text-sm;
	}

	nav a {
		@apply flex items-center md:w-full
		px-4 md:px-0 md:pl-4 h-8 rounded
		transition-colors duration-150
		hover:bg-custom-secondary
		text-sm text-custom-200;
	}

	nav a.current {
		@apply bg-custom-tertiary text-custom-100;
	}
</style>
