<script lang="ts">
	import type { PageData } from "./$types";
	import { getNonEmptyName } from "$lib/typings/server/general.js";

	import ArtContainer from "$lib/components/common/ArtContainer.svelte";
	import EntryDetailsLayout from "$lib/components/layouts/EntryDetailsLayout.svelte";

	export let data: PageData;

	const altNames = data.artist.alt_names.map((name) => getNonEmptyName(name));
</script>

<EntryDetailsLayout>
	<div class="contents" slot="info_container">
		<ArtContainer />
		<div class="title_container">
			<h1>{getNonEmptyName(data.artist.name)}</h1>
			<div class="alt_name_container">
				{#each altNames as name, i}
					<span>{name}</span>
					{#if i < altNames.length - 1}
						<span class="mx-1">/</span>
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<!--	<div class="flex flex-col w-full px-4 mt-8 gap-4 md:px-0 md:mt-0 xl:contents">-->
	<!--		<SongList songs={data.songs} class="h-fit lg:max-w-3xl 2xl:max-w-4xl md:pr-8" />-->
	<!--		<ExternalSites sites={data.externalSites} />-->
	<!--	</div>-->
</EntryDetailsLayout>

<style lang="postcss">
	.title_container {
		@apply flex flex-col items-center md:items-start
        font-head;
	}

	.title_container h1 {
		@apply text-4xl font-medium text-custom-100;
	}

	.alt_name_container {
		@apply flex items-center h-6
        text-sm text-custom-300;
	}
</style>
