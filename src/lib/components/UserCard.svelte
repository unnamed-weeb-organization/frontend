<script lang="ts">
	import { slide } from "svelte/transition";
	import { page } from "$app/stores";
	import { RoutePoint, goto, withParameter } from "$lib/routes";
	import { isDark, changeTheme } from "$lib/theme";
	import type { UserCardData } from "$lib/typings/client/component";

	import DismissBackground from "$lib/components/common/DismissBackground.svelte";
	import RoleChip from "$lib/components/common/RoleChip.svelte";
	import Button from "$lib/components/common/Button.svelte";

	export let onDismiss: () => void;
	export let data: UserCardData | null;

	let isItDark = isDark();
	let from = $page.url.pathname;

	const toggleThemeMode = () => (isItDark = changeTheme(!isItDark));

	const login = () => {
		onDismiss.call(undefined);
		goto(RoutePoint.AuthLogin, { from }, { invalidateAll: true });
	};

	const logout = () => {
		onDismiss.call(undefined);
		goto(RoutePoint.AuthLogout, { from }, { invalidateAll: true });
	};

	const withCloseHook = (route: RoutePoint) => {
		return () => {
			onDismiss.call(undefined);
			goto(route);
		};
	};
</script>

<div transition:slide={{ duration: 150 }} class="wrapper {$$props.class}">
	<div class="flex items-center border-b border-b-custom-tertiary px-4 py-4">
		{#if data != null}
			<div class="flex flex-col flex-grow justify-between gap-1">
				<a href={withParameter(RoutePoint.Me).route} class="font-head text-custom-100 select-none"
					>{data.username}</a
				>
				<RoleChip role={data.role} />
			</div>

			<Button styleType="none" class="h-8 w-8 fill-custom-300 hover:fill-red-500" on:click={logout}>
				<div class="h-5 w-5 i-uil-signout" />
			</Button>
		{:else}
			<Button class="flex-1" styleType="labelButton" label="Sign In" on:click={login} />
		{/if}
	</div>

	<div class="grid grid-cols-2">
		<Button
			class="h-10 col-start-1 col-end-3"
			label="Change Theme Mode"
			styleType="hoverable"
			on:click={toggleThemeMode}
		>
			{#if isItDark}
				<div class="h-5 w-5 i-uil-brightness" />
			{:else}
				<div class="h-5 w-5 i-uil-brightness-empty" />
			{/if}
		</Button>

		<Button
			class="h-10"
			label="Edit Profile"
			styleType="hoverable"
			on:click={withCloseHook(RoutePoint.SettingsAccount)}
		>
			<div class="h-5 w-5 i-uil-edit" />
		</Button>
		<Button
			class="h-10"
			label="Settings"
			styleType="hoverable"
			on:click={withCloseHook(RoutePoint.Settings)}
		>
			<div class="h-5 w-5 i-uil-cog" />
		</Button>
	</div>
</div>

<DismissBackground {onDismiss} />

<style>
	.wrapper {
		--at-apply: absolute z-10 flex flex-col min-w-[16rem] md: min-w-[20rem] bg-custom-background
			rounded-md shadow-md border border-custom-tertiary;
	}
</style>
