<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { goto, RoutePoint } from "$lib/routes";

	let ticksRemaining = 5;

	onMount(() => {
		const interval = setInterval(() => {
			ticksRemaining--;
			if (ticksRemaining === 0) {
				clearInterval(interval);
				goto(RoutePoint.Home, {}, { replaceState: true });
			}
		}, 1000);
	});
</script>

<div
	class="font-head flex flex-1 flex-col items-center justify-center gap-2 px-4"
	in:fade={{ duration: 150 }}
>
	<h2 class="text-4xl font-medium">Nice!</h2>
	<span class="text-center text-200">
		Your edit will be pushed to a moderator, and will go live after approval.
	</span>
	<span class="text-center text-400">
		You will be redirected to the home page in {ticksRemaining} seconds.
	</span>
</div>
