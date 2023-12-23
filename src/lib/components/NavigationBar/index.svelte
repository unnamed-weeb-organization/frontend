<script lang="ts">
	import { APP_NAME } from "$lib/constants";
	import type { UserCardData } from "$lib/typings/client/component";

	import SearchBar from "$lib/components/NavigationBar/SearchBar.svelte";
	import LinkSet from "$lib/components/NavigationBar/LinkSet.svelte";
	import AccountButton from "$lib/components/NavigationBar/AccountButton.svelte";

	let searchQuery = "";

	export let userCardData: UserCardData | null;
</script>

<nav class="sticky inset-x-0 top-0 z-10 h-12 flex items-center gap-4 border-b-(2 tertiary) px-6">
	<a href="/" class="select-none text-sm text-200">
		<span class="hidden md:block">{APP_NAME}</span>
		<span class="md:hidden">
			{APP_NAME.split("_")
				.map((str) => str[0])
				.join("")}
		</span>
	</a>

	<LinkSet />

	<div class="flex-1" />
	<SearchBar bind:value={searchQuery} />
	<AccountButton {userCardData} />
</nav>
