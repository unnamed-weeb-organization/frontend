<script lang="ts">
	import { page } from "$app/stores";
	import { Route, RoutePoint, type RouteOptions } from "$lib/routes";

	const subs: [string, RouteOptions][] = [
		["General", Route[RoutePoint.SettingsGeneral]],
		["Account", Route[RoutePoint.SettingsAccount]]
	];
</script>

<div class="flex w-full h-full my-4">
	<nav>
		<h1>Settings</h1>
		{#each subs as [name, options]}
			<a class:current={$page.url.pathname === options.route} href={options.route}>
				{name}
			</a>
		{/each}
	</nav>
	<div class="flex flex-col px-4 flex-1">
		<slot />
	</div>
</div>

<style lang="postcss">
	nav {
		@apply flex flex-col w-56 px-2
		border-r-2 border-custom-tertiary
		font-head;
	}

	nav h1 {
		@apply font-head font-medium text-sm pb-2;
	}

	nav a {
		@apply flex items-center
		pl-4 h-8 rounded
		transition-colors duration-150
		hover:bg-custom-secondary
		text-sm text-custom-200;
	}

	nav a.current {
		@apply bg-custom-tertiary text-custom-100;
	}
</style>
