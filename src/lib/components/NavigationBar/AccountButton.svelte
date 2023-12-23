<script lang="ts">
	import type { UserCardData } from "$lib/typings/client/component";

	import UserCard from "$lib/components/NavigationBar/UserCard.svelte";
	import Button from "$lib/components/common/Button.svelte";

	let showUserCard = true;

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
		<UserCard user={userCardData} onDismiss={() => (showUserCard = false)} />
	{/if}
</div>
