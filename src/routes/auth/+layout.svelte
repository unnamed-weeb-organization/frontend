<script lang="ts">
	import { page } from "$app/stores";
	import { getMissingErrorMessage } from "$lib/utils";
</script>

<div class="h-full flex flex-col items-center justify-center">
	<div class="-mt-12 flex flex-col gap-4 w-4/5 md:w-96 font-head">
		<h1 class="font-medium text-4xl text-custom-100 self-start">{$page.data.header}</h1>
		<span class="text-sm text-red-600 dark:text-red-500 h-4 mb-2">
			{$page.form?.missing != null ? getMissingErrorMessage($page.form.missing) : ""}
		</span>
		<slot />
	</div>
</div>
