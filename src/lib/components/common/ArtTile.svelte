<script lang="ts">
	import ArtContainer from "$lib/components/common/ArtContainer.svelte";

	export const imageURL = "";
	export let label: string;
	export let link: string;
</script>

<div class="flex flex-col w-fit gap-1 items-center">
	<ArtContainer {link} size="medium" />
	<a href={link} class="font-sans text-sm text-custom-200">{label}</a>
</div>
