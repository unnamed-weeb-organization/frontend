<script lang="ts">
	import { page } from "$app/stores";
	import { concatPageTitle } from "$lib/utils";
	import { preferredTitleLocale } from "$lib/settings";
	import ArtContainer from "$lib/components/common/ArtContainer.svelte";
</script>

<div class="flex flex-col md:flex-row p-4 gap-4">
	<div class="flex flex-col md:w-64 items-center md:items-start">
		{#if $page.data.header}
			<h1 class="self-start font-head font-medium text-2xl mb-4">
				{concatPageTitle($page.data.header, $preferredTitleLocale)}
			</h1>
		{/if}
		<ArtContainer size="large" imageURL="" link={null} />
	</div>
	<slot />
</div>
