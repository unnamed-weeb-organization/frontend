<script lang="ts">
	import { CTXRouteViewLocation, withParameter } from "$lib/routes";
	import { getJoiningGrammar } from "$lib/typings/server/general";
	import type { ItemCardData } from "$lib/typings/client/component";

	export let data: ItemCardData;

	const joiningString = getJoiningGrammar(data.type, data.alt.type);
	const baseRouteOptions = withParameter(CTXRouteViewLocation[data.type], { id: data.id });
	const altRouteOptions = withParameter(CTXRouteViewLocation[data.alt.type], { id: data.alt.id });
</script>

<div class="item_container">
	<div class="flex-grow" />
	<div class="title_container">
		<a href={baseRouteOptions.route} class="text-custom-200">{data.label}</a>
		<span class="text-custom-400 text-xs">{joiningString}</span>
		<a href={altRouteOptions.route} class="text-custom-300 max-w-[50%]">
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

	.title_container {
		@apply flex gap-1 items-center
        h-8 px-2 bg-custom-tertiary
        font-sans text-sm text-ellipsis;
	}
</style>
