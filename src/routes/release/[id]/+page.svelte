<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	const columnItems = [
		["Release Date", 2013],
		["Type", data?.release.release_type],
		["Language", "Japanese"],
		["Length", "47 Minutes, 52 Seconds"]
	];
</script>

<div class="flex flex-col w-full h-full px-6 md:px-10 py-4 md:py-6">
	<div class="flex flex-col md:w-80">
		<div class="info_container">
			<div class="art_container" />
			<div class="title_container">
				<h1>{data.release.name}</h1>
				<span>{data.artist.name}</span>
			</div>
		</div>
		<div class="column_container">
			{#each columnItems as [key, value]}
				<div class="column_item">
					<span>{key}</span>
					<span>{value}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.art_container {
		@apply h-64 w-64 min-h-[16rem]
        bg-custom-secondary rounded
        shadow-md hover:shadow-lg
        transition-shadow duration-150 ease-in-out;
	}

	.info_container {
		@apply flex flex-col items-center gap-4 md:items-start;
	}

	.title_container {
		@apply flex flex-col items-center md:items-start
        font-head;
	}

	.title_container h1 {
		@apply text-4xl font-medium text-custom-100;
	}

	.title_container span {
		@apply text-sm text-custom-200;
	}

	.column_container {
		@apply grid grid-cols-2 gap-4 mt-8;
	}

	.column_item {
		@apply flex flex-col font-head text-sm text-custom-200;
	}

	.column_item > :first-child {
		@apply text-custom-300;
	}
</style>
