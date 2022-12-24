<script lang="ts">
	import type { ItemCardData,  } from "$lib/typings/client/general";
	import { getJoiningGrammar } from "$lib/typings/server/general";
	export let data: ItemCardData;

	$: joiningString = getJoiningGrammar(data.type, data.alt.type);
</script>

<div class="item_container">
	<div class="flex-grow" />
	<div class="info_container">
		<a href={data.id} class="text-custom-200">{data.label}</a>
		<span class="text-custom-400 text-xs">{joiningString}</span>
		<a href={data.alt.id} class="text-custom-300 max-w-[50%]">
			{data.alt.label}
		</a>
	</div>
</div>

<style lang="postcss">
    .item_container {
        @apply flex flex-col h-52 w-64
		bg-custom-secondary rounded-md
        overflow-hidden;
    }

	.info_container {
		@apply flex gap-1 items-center
        h-8 px-2 bg-custom-tertiary
		font-sans text-sm text-ellipsis;
	}
</style>
