<script lang="ts">
	import { page } from "$app/stores";
	import { RoutePoint, goto } from "$lib/routes";
	import { errorMessages, hintMessages } from "$lib/constants";

	import Button from "$lib/components/common/Button.svelte";
</script>

<div class="font-head h-full flex flex-col items-center justify-center">
	<h1 class="text-2xl text-100 font-medium">{errorMessages[$page.status]}</h1>
	<h2 class="mb-4 text-center text-sm text-200">{hintMessages[$page.status]}</h2>
	{#if $page.status === 401}
		<Button
			label="Login"
			styleType="labelButton"
			on:click={() => goto(RoutePoint.AuthLogin, { from: $page.url.pathname })}
		/>
	{/if}
</div>
