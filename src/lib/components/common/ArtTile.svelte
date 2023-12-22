<script lang="ts">
	import ArtContainer from "$lib/components/common/ArtContainer.svelte";

	export const imageURL = "";
	export let label: string;
	export let link: string;
</script>

<div class="w-fit flex flex-col items-center gap-1">
	<ArtContainer {link} size="medium" />
	<a href={link} class="text-sm text-200 font-sans">{label}</a>
</div>
