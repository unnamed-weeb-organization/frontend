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

<div transition:slide={{ duration: 150 }} class="wrapper{$$props.class}">
	<div class="flex items-center border-b border-b-tertiary px-4 py-4">
		{#if data != null}
			<div class="flex flex-grow flex-col justify-between gap-1">
				<a href={withParameter(RoutePoint.Me).route} class="select-none text-100">{data.username}</a
				>
				<RoleChip role={data.role} />
			</div>

			<Button styleType="none" class="h-8 w-8 fill-300 hover:fill-red-500" on:click={logout}>
				<div class="i-uil-signout h-5 w-5" />
			</Button>
		{:else}
			<Button class="flex-1" styleType="labelButton" label="Sign In" on:click={login} />
		{/if}
	</div>

	<div class="grid grid-cols-2">
		<Button
			class="col-start-1 col-end-3 h-10"
			label="Change Theme Mode"
			styleType="hoverable"
			on:click={toggleThemeMode}
		>
			{#if isItDark}
				<div class="i-uil-brightness h-5 w-5" />
			{:else}
				<div class="i-uil-brightness-empty h-5 w-5" />
			{/if}
		</Button>

		<Button
			class="h-10"
			label="Edit Profile"
			styleType="hoverable"
			on:click={withCloseHook(RoutePoint.SettingsAccount)}
		>
			<div class="i-uil-edit h-5 w-5" />
		</Button>
		<Button
			class="h-10"
			label="Settings"
			styleType="hoverable"
			on:click={withCloseHook(RoutePoint.Settings)}
		>
			<div class="i-uil-cog h-5 w-5" />
		</Button>
	</div>
</div>

<DismissBackground {onDismiss} />

<style>
	.wrapper {
		/* prettier-ignore */
		--at-apply: absolute z-10 flex flex-col min-w-[16rem]  rounded-md shadow-md
		border border-tertiary bg-background md:min-w-[20rem];
	}
</style>
