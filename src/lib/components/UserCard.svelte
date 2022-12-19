<script lang="ts">
	import { slide } from "svelte/transition";
	import { Role, getHigherOrderRole } from "$lib/typings/server/user";
	import { Route } from "$lib/routes.js";
	import { isDark } from "$lib/hooks/theme";
	import { changeTheme } from "$lib/hooks/theme.js";
	import AccountIcon from "$lib/assets/icons/account.svg?component";
	import DismissBackground from "$lib/components/DismissBackground.svelte";
	import RoleChip from "$lib/components/RoleChip.svelte";

	export let onDismiss: () => void;

	const username = "Curstantine";
	const roles = [Role.Admin, Role.Moderator, Role.User];

	let isItDark = isDark();
	function toggleThemeMode() {
		changeTheme("preserve", !isItDark);
		isItDark = !isItDark;
	}
</script>

<div transition:slide={{ duration: 150 }} class="wrapper {$$props.class}">
	<div class="flex h-24 border-b-2 border-b-custom-tertiary items-center px-4 py-4">
		<a href={Route.Me} class="icon_wrapper bg-custom-secondary fill-custom-400 h-18 w-18">
			<AccountIcon class="h-16 w-16" />
		</a>

		<div class="flex flex-col flex-grow pl-4 justify-between gap-1">
			<span class="font-head font-semibold select-none">{username}</span>
			<RoleChip role={getHigherOrderRole(roles)} />
		</div>
	</div>

	<div class="option_panel">
		<button on:click={toggleThemeMode} class="col-start-1 col-end-3">Change Theme Mode</button>
		<a href={Route.EditMe}>Edit Profile</a>
		<a href={Route.Settings}>Settings</a>
	</div>

	<div class="elevation-layer elevation-background-1" />
</div>

<DismissBackground {onDismiss} />

<style lang="postcss">
	.wrapper {
		@apply absolute z-10 flex flex-col
        min-w-[14rem] bg-custom-background rounded-md shadow-md;
	}

	.option_panel {
		@apply grid grid-cols-2 font-head text-sm text-custom-300;
	}

	.option_panel > * {
		@apply py-2 text-center;
	}
</style>
