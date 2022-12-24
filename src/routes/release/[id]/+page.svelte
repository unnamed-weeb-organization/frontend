<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	const columnItems = [
		["Release Date", 2013],
		["Type", data?.release.release_type],
		["Language", "Japanese"],
		["Length", "47 Minutes, 52 Seconds"]
	]
</script>

<div class="flex flex-col w-full h-full px-6 lg:px-10 py-4">
	<div class="flex flex-col lg:w-80">
		<div class="flex gap-4 lg:flex-col">
			<div class="art_container" />
			<div class="flex flex-col font-head">
				<h1 class="text-4xl font-medium">{data.release.name}</h1>
				<span class="text-sm text-custom-200">{data.artist.name}</span>
			</div>
		</div>
		<div class="column_container">
			{#each columnItems as [key, value]}
				<div class="column_item">
					<span >{key}</span>
					<span >{value}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.art_container {
		@apply h-56 w-56 lg:h-64 lg:w-64
		bg-custom-secondary rounded shadow;
	}

	.column_container {
		@apply grid grid-cols-3 gap-4 mt-8 lg:grid-cols-2;
	}

	.column_item {
		@apply flex flex-col font-head text-sm text-custom-200;
	}

	.column_item > :first-child {
		@apply text-custom-300;
	}
</style>
