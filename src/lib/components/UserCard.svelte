<script lang="ts">
	import { slide } from "svelte/transition";
	import { Role, getHigherOrderRole } from "$lib/typings/server/user";
	import { Route } from "$lib/routes.js";
	import { isDark } from "$lib/hooks/theme";
	import { changeTheme } from "$lib/hooks/theme.js";
	import DismissBackground from "$lib/components/DismissBackground.svelte";
	import RoleChip from "$lib/components/RoleChip.svelte";

	import AccountIcon from "$lib/assets/icons/account.svg?component";
	import SettingsIcon from "$lib/assets/icons/settings.svg?component";
	import BrightnessHighIcon from "$lib/assets/icons/brightness-high.svg?component";
	import BrightnessLowIcon from "$lib/assets/icons/brightness-low.svg?component";
	import LogoutIcon from "$lib/assets/icons/logout.svg?component";
	import IconButton from "$lib/components/common/IconButton.svelte";

	export let onDismiss: () => void;

	const username = "Curstantine";
	const roles = [Role.Admin, Role.Moderator, Role.User];

	let isItDark = isDark();
	function toggleThemeMode() {
		changeTheme("preserve", !isItDark);
		isItDark = !isItDark;
	}

	function logout() {
	// TODO
	}
</script>

<div transition:slide={{ duration: 150 }} class="wrapper {$$props.class}">
	<div class="flex h-24 border-b border-b-custom-tertiary items-center px-4 py-4">
		<a href={Route.Me} class="icon_wrapper bg-custom-secondary fill-custom-400 h-18 w-18">
			<AccountIcon class="h-16 w-16" />
		</a>

		<div class="flex flex-col flex-grow pl-4 justify-between gap-1">
			<span class="font-head font-semibold select-none">{username}</span>
			<RoleChip role={getHigherOrderRole(roles)} />
		</div>

		<IconButton class="h-8 w-8" on:click={logout}>
			<LogoutIcon class="h-6 w-6" />
		</IconButton>
	</div>

	<div class="option_panel">
		<button on:click={toggleThemeMode} class="col-start-1 col-end-3">
			{#if isItDark}
				<BrightnessHighIcon class="h-5 w-5" />
			{:else}
				<BrightnessLowIcon class="h-5 w-5" />
			{/if}
			Change Theme Mode
		</button>
		<a href={Route.EditMe}>Edit Profile</a>
		<a href={Route.Settings}>
			<SettingsIcon class="h-5 w-5" />
			Settings
		</a>
	</div>

	<div class="elevation-layer elevation-background-1" />
</div>

<DismissBackground {onDismiss} />

<style lang="postcss">
	.wrapper {
		@apply absolute z-10 flex flex-col
       	min-w-[16rem] md:min-w-[22rem]
		bg-custom-background rounded-md shadow-md;
	}

	.option_panel {
		@apply grid grid-cols-2 font-head text-sm
		text-custom-300 fill-current;
	}

	.option_panel > * {
		@apply flex gap-2 justify-center items-center h-10
		py-2 text-center;
	}
</style>
