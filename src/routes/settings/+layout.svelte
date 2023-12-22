<script lang="ts">
	import { fade } from "svelte/transition";
	import { page } from "$app/stores";
	import { Route, RoutePoint, type RouteOptions } from "$lib/routes";

	const subs: [string, RouteOptions][] = [
		["General", Route[RoutePoint.SettingsGeneral]],
		["Account", Route[RoutePoint.SettingsAccount]],
	];
</script>

<div class="h-full w-full flex flex-col md:my-4 md:flex-row" in:fade={{ duration: 150 }}>
	<nav>
		<h1>Settings</h1>
		{#each subs as [name, options]}
			<a class:current={$page.url.pathname === options.route} href={options.route}>
				{name}
			</a>
		{/each}
	</nav>
	<div class="flex flex-1 flex-col px-4 pt-2">
		<slot />
	</div>
</div>

<style>
	nav {
		/* prettier-ignore */
		--at-apply: flex items-center md:items-start md:flex-col md:w-56 mx-2 md:mx-0 px-2 py-2 md:
			py-0 border-b-2 md:border-b-0 md:border-r-2 border-custom-tertiary font-head;
	}

	nav h1 {
		/* prettier-ignore */
		--at-apply: hidden md:block md:pb-2 font-medium text-sm;
	}

	nav a {
		/* prettier-ignore */
		--at-apply: flex items-center md:w-full px-4 md:px-0 md:pl-4 h-8 rounded transition-colors
			duration-150 hover: bg-secondary text-sm text-200;
	}

	nav a.current {
		--at-apply: bg-tertiary text-100;
	}
</style>
