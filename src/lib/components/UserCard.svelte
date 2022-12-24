<script lang="ts">
	import { slide } from "svelte/transition";
	import { page } from "$app/stores";
	import { RoutePoint, goto } from "$lib/routes";
	import { isDark, changeTheme } from "$lib/hooks/theme";
	import { Role, getHigherOrderRole } from "$lib/typings/server/user";

	import DismissBackground from "$lib/components/common/DismissBackground.svelte";
	import RoleChip from "$lib/components/common/RoleChip.svelte";
	import Button from "$lib/components/common/Button.svelte";

	import AccountIcon from "$lib/assets/icons/account.svg?component";
	import SettingsIcon from "$lib/assets/icons/settings.svg?component";
	import BrightnessHighIcon from "$lib/assets/icons/brightness-high.svg?component";
	import BrightnessLowIcon from "$lib/assets/icons/brightness-low.svg?component";
	import LogoutIcon from "$lib/assets/icons/logout.svg?component";
	import EditIcon from "$lib/assets/icons/edit.svg?component";

	export let onDismiss: () => void;

	const username = "Curstantine";
	const roles = [Role.Admin, Role.Moderator, Role.User];

	let isItDark = isDark();

	function toggleThemeMode() {
		changeTheme("preserve", !isItDark);
		isItDark = !isItDark;
	}

	function logout() {
		goto(RoutePoint.Logout, { from: $page.url.pathname });
	}
</script>

<div transition:slide={{ duration: 150 }} class="wrapper {$$props.class}">
	<div class="flex items-center border-b border-b-custom-tertiary px-2 py-2">
		<Button
			styleType="none"
			class="h-16 w-16 bg-custom-secondary fill-custom-400"
			on:click={() => goto(RoutePoint.Me)}
		>
			<AccountIcon class="h-16 w-16" />
		</Button>

		<div class="flex flex-col flex-grow pl-4 justify-between gap-1">
			<span class="font-head text-custom-100 select-none">{username}</span>
			<RoleChip role={getHigherOrderRole(roles)} />
		</div>

		<Button
			styleType="none"
			class="h-8 w-8 fill-custom-300 hover:bg-custom-secondary hover:fill-red-500"
			on:click={logout}
		>
			<LogoutIcon class="h-5 w-5" />
		</Button>
	</div>

	<div class="grid grid-cols-2">
		<Button
			class="h-10 col-start-1 col-end-3"
			label="Change Theme Mode"
			on:click={toggleThemeMode}
		>
			{#if isItDark}
				<BrightnessHighIcon class="h-5 w-5" />
			{:else}
				<BrightnessLowIcon class="h-5 w-5" />
			{/if}
		</Button>

		<Button class="h-10" label="Edit Profile" on:click={() => goto(RoutePoint.EditMe)}>
			<EditIcon class="h-5 w-5" />
		</Button>
		<Button class="h-10" label="Settings" on:click={() => goto(RoutePoint.Settings)}>
			<SettingsIcon class="h-5 w-5" />
		</Button>
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
</style>
