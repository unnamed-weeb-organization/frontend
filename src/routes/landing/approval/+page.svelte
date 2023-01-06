<script lang="ts">
	import { onMount } from "svelte";
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

<div class="flex flex-col justify-center items-center flex-1 px-4 gap-2 font-head">
	<h2 class="text-4xl font-medium">Nice!</h2>
	<span class="text-custom-200 text-center">
		Your edit will be pushed to a moderator, and will go live after approval.
	</span>
	<span class="text-custom-400 text-center">
		You will be redirected to the home page in {ticksRemaining} seconds.
	</span>
</div>
