<script lang="ts">
	export let heading: string;
	export let description: string[];
</script>

<div class="flex gap-4">
	<div class="flex flex-1 flex-col">
		<h2 class="font-head text-base">{heading}</h2>
		<span class="font-head text-sm text-300">
			{#each description as line}
				{line}<br />
			{/each}
		</span>
	</div>
	<div class="w-36 flex items-center">
		<slot />
	</div>
</div>
