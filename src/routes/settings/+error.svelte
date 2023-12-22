<script lang="ts">
	import { page } from "$app/stores";
	import { RoutePoint, goto } from "$lib/routes";
	import { errorMessages, hintMessages } from "$lib/constants";

	import Button from "$lib/components/common/Button.svelte";
</script>

<div class="flex flex-col justify-center items-center h-full font-head">
	<h1 class="text-custom-100 font-medium text-2xl">{errorMessages[$page.status]}</h1>
	<h2 class="text-custom-200 text-sm text-center mb-4">{hintMessages[$page.status]}</h2>
	{#if $page.status === 401}
		<Button
			label="Login"
			styleType="labelButton"
			on:click={() => goto(RoutePoint.AuthLogin, { from: $page.url.pathname })}
		/>
	{/if}
</div>
