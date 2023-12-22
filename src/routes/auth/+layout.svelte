<script lang="ts">
	import { fade } from "svelte/transition";
	import { page } from "$app/stores";
	import { authFromSubmitting } from "$lib/stores";
	import { getMissingErrorMessage } from "$lib/utils";
	import Spinner from "$lib/components/common/Spinner.svelte";
</script>

<div class="flex flex-col items-center justify-center flex-1 py-4">
	<div class="flex flex-col w-4/5 md:w-96 font-head">
		<h1 class="font-medium text-4xl text-custom-100 self-start">{$page.data.header}</h1>
		<span class="h-4 text-sm text-red-600 dark:text-red-500">
			{$page.form?.missing != null ? getMissingErrorMessage($page.form.missing) : ""}
			{$page.form?.error != null ? $page.form.error : ""}
		</span>
	</div>
	{#if $authFromSubmitting}
		<div class="flex flex-col items-center justify-center w-64 h-64" in:fade={{ duration: 150 }}>
			<Spinner />
		</div>
	{:else}
		<div class="flex flex-col gap-4 w-4/5 md:w-96 mt-4">
			<slot />
		</div>
	{/if}
</div>
