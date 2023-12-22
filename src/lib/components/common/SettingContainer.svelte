<script lang="ts">
	export let heading: string;
	export let description: string[];
</script>

<div class="flex gap-4">
	<div class="flex flex-col flex-1">
		<h2 class="font-head text-base">{heading}</h2>
		<span class="font-head text-sm text-custom-300">
			{#each description as line}
				{line}<br />
			{/each}
		</span>
	</div>
	<div class="flex items-center w-36">
		<slot />
	</div>
</div>
