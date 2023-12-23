<script lang="ts">
	import { slide } from "svelte/transition";
	import { page } from "$app/stores";

	import { RoutePoint, goto } from "$lib/routes";
	import { isDark, changeTheme } from "$lib/theme";
	import type { UserCardData } from "$lib/typings/client/component";

	import DismissBackground from "$lib/components/common/DismissBackground.svelte";
	import RoleChip from "$lib/components/common/RoleChip.svelte";
	import Button from "$lib/components/common/Button.svelte";
	import { browser } from "$app/environment";

	let isInDarkMode = browser ? isDark() : false;

	const toggleThemeMode = () => {
		changeTheme(!isInDarkMode);
		isInDarkMode = !isInDarkMode;
	};

	const login = () => {
		let from = $page.url.pathname;
		onDismiss.call(undefined);
		goto(RoutePoint.AuthLogin, { from }, { invalidateAll: true });
	};

	const logout = () => {
		let from = $page.url.pathname;
		onDismiss.call(undefined);
		goto(RoutePoint.AuthLogout, { from }, { invalidateAll: true });
	};

	export let onDismiss: () => void;
	export let user: UserCardData | null;
</script>

<div transition:slide={{ duration: 150 }} class="wrapper">
	<div class="flex items-center border-b border-b-tertiary px-4 py-4">
		{#if user != null}
			<div class="flex flex-grow flex-col justify-between gap-1">
				<a href="/me" class="select-none text-100">{user.username}</a>
				<RoleChip role={user.role} />
			</div>

			<Button styleType="none" class="h-8 w-8 fill-300 hover:fill-red-500" on:click={logout}>
				<div class="i-uil-signout h-5 w-5" />
			</Button>
		{:else}
			<button class="button-label-secondary flex-1" on:click|preventDefault={login}>Sign In</button>
		{/if}
	</div>

	<div class="grid grid-cols-2">
		<button
			class="col-start-1 col-end-3 button-icon-label-300"
			on:click|preventDefault={toggleThemeMode}
		>
			{#if isInDarkMode}
				<div class="i-uil-brightness h-5 w-5" />
			{:else}
				<div class="i-uil-brightness-empty h-5 w-5" />
			{/if}
			Change Theme Mode
		</button>

		{#if user !== null}
			<a class="button-icon-label-300" href="/me/edit" on:click={onDismiss}>
				<div class="i-uil-edit h-5 w-5" />
				Edit Profile
			</a>
		{/if}

		<a
			class="button-icon-label-300"
			class:col-span-2={user === null}
			href="/settings"
			on:click={onDismiss}
		>
			<div class="i-uil-cog h-5 w-5" />
			Settings
		</a>
	</div>
</div>

<DismissBackground {onDismiss} />

<style>
	.wrapper {
		/* prettier-ignore */
		--at-apply: absolute right-0 top-14 z-10 flex flex-col min-w-[16rem] rounded-md shadow-md
		border border-tertiary bg-background md:min-w-[20rem];
	}
</style>
