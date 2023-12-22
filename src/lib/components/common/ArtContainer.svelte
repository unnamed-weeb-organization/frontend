<script lang="ts">
	import type { NamedGenericSizes } from "$lib/typings/client/component";

	export let link: string | null;
	export const imageURL = "";
	export let size: NamedGenericSizes = "large";

	const sizeConstraints = {
		large: "w-64 h-64 shadow-md hover:shadow-lg",
		medium: "w-32 h-32 shadow hover:shadow-md",
		small: "w-16 h-16",
	};
</script>

<!-- TODO: Responsive images and such -->
<a href={link}>
	<div class="container {sizeConstraints[size]} {$$props.class}" />
</a>

<style>
	.container {
		--at-apply: bg-custom-secondary rounded transition-shadow duration-150 ease-in-out;
	}
</style>
