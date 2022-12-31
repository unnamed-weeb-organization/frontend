<script lang="ts">
	import { slide } from "svelte/transition";
	import { page } from "$app/stores";
	import { RoutePoint, goto } from "$lib/routes";
	import { isDark, changeTheme } from "$lib/theme";
	import { getHigherOrderRole, type User } from "$lib/typings/server/user";

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

	export let user: User | null;

	let isItDark = isDark();

	function toggleThemeMode() {
		changeTheme(!isItDark);
		isItDark = isDark();
	}

	function logout() {
		goto(RoutePoint.AuthLogout, { from: $page.url.pathname });
	}
</script>

<div transition:slide={{ duration: 150 }} class="wrapper {$$props.class}">
	<div class="flex items-center border-b border-b-custom-tertiary px-2 py-2">
		{#if user != null}
			<Button
				styleType="none"
				class="h-16 w-16 bg-custom-secondary fill-custom-400"
				on:click={() => goto(RoutePoint.Me)}
			>
				<AccountIcon class="h-16 w-16" />
			</Button>

			<div class="flex flex-col flex-grow pl-4 justify-between gap-1">
				<span class="font-head text-custom-100 select-none">{user?.name ?? "Sign In"}</span>
				<RoleChip role={getHigherOrderRole(user.roles)} />
			</div>

			<Button
				styleType="none"
				class="h-8 w-8 fill-custom-300 hover:bg-custom-secondary hover:fill-red-500"
				on:click={logout}
			>
				<LogoutIcon class="h-5 w-5" />
			</Button>
		{:else}
			<Button
				class="flex-1"
				styleType="labelButton"
				label="Sign In"
				on:click={() => goto(RoutePoint.AuthLogin, { from: $page.url.pathname })}
			/>
		{/if}
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

		<Button class="h-10" label="Edit Profile" on:click={() => goto(RoutePoint.SettingsAccount)}>
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
        min-w-[16rem] md:min-w-[18rem]
        bg-custom-background rounded-md shadow-md;
	}
</style>
