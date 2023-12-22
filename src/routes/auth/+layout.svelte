<script lang="ts">
	import { fade } from "svelte/transition";
	import { page } from "$app/stores";
	import { authFromSubmitting } from "$lib/stores";
	import { getMissingErrorMessage } from "$lib/utils";
	import Spinner from "$lib/components/common/Spinner.svelte";
</script>

<div class="flex flex-1 flex-col items-center justify-center py-4">
	<div class="font-head w-4/5 flex flex-col md:w-96">
		<h1 class="self-start text-4xl text-100 font-medium">{$page.data.header}</h1>
		<span class="h-4 text-sm text-red-600 dark:text-red-500">
			{$page.form?.missing != null ? getMissingErrorMessage($page.form.missing) : ""}
			{$page.form?.error != null ? $page.form.error : ""}
		</span>
	</div>
	{#if $authFromSubmitting}
		<div class="h-64 w-64 flex flex-col items-center justify-center" in:fade={{ duration: 150 }}>
			<Spinner />
		</div>
	{:else}
		<div class="mt-4 w-4/5 flex flex-col gap-4 md:w-96">
			<slot />
		</div>
	{/if}
</div>
