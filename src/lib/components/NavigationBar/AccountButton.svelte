<script lang="ts">
	import type { UserCardData } from "$lib/typings/client/component";

	import UserCard from "$lib/components/UserCard.svelte";
	import Button from "$lib/components/common/Button.svelte";

	let showUserCard = false;

	export let userCardData: UserCardData | null;
</script>

<div class="relative inline-flex">
	<Button
		aria-label="Account"
		class="h-10 w-10 bg-secondary focus-within:bg-tertiary focus-within:fill-200"
		on:click={() => (showUserCard = !showUserCard)}
	>
		<div class="i-uil-user h-9 w-9" />
	</Button>

	{#if showUserCard}
		<UserCard data={userCardData} class="right-2 top-14" onDismiss={() => (showUserCard = false)} />
	{/if}
</div>
