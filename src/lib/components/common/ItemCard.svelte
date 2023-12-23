<script lang="ts">
	import { fly } from "svelte/transition";
	import { CTXRouteViewLocation, withParameter } from "$lib/routes";
	import { getJoiningGrammar } from "$lib/typings/server/general";
	import type { ItemCardData } from "$lib/typings/client/component";

	export let data: ItemCardData;

	const baseRouteOptions = withParameter(CTXRouteViewLocation[data.type], { id: data.id });
</script>

<div transition:fly|local={{ duration: 150 }} class="item_container">
	<div class="flex-grow" />
	<div class="title_container">
		<a href={baseRouteOptions.route} class="text-200">{data.label}</a>
		{#if data.alt}
			<span class="text-xs text-400">
				{getJoiningGrammar(data.type, data.alt.type)}
			</span>
			<a
				class="max-w-[50%] text-300"
				href={withParameter(CTXRouteViewLocation[data.alt.type], { id: data.alt.id }).route}
			>
				{data.alt.label}
			</a>
		{/if}
	</div>
</div>

<style>
	.item_container {
		--at-apply: flex flex-col h-52 w-64 bg-secondary rounded-md overflow-hidden;
	}

	.title_container {
		--at-apply: flex gap-1 items-center h-8 px-2 bg-tertiary font-sans text-sm text-ellipsis;
	}
</style>
