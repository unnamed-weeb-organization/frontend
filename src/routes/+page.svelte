<script lang="ts">
	import { CTXType } from "$lib/typings/server/general";
	import CTXTypeChipset from "$lib/components/CTXTypeChipset.svelte";

	// NOTE: This array won't grow in size,
	// but the positional value will change with interaction.
	let RACTXType = [CTXType.Album];
</script>

<div class="mt-4 flex flex-col gap-2 px-4">
	<div class="flex flex-col">
		<div class="flex flex-wrap mb-2">
			<span class="font-head text-xl select-none mr-2">Recently Added</span>
			<CTXTypeChipset singular="true" selected={RACTXType} />
		</div>
		<div class="grid grid-flow-col overflow-x-auto gap-2">
			{#each new Array(10) as _, i}
				<div class="item_container">
					<div class="flex-grow" />
					<div class="h-8 flex items-center px-2 bg-custom-tertiary">
						<span class="font-sans text-sm text-custom-200">Lorem Ipsum</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.item_container {
		@apply h-52 w-52 bg-custom-secondary rounded-md mb-2
        overflow-hidden
        flex flex-col;
	}
</style>
