<script lang="ts">
	import { page } from "$app/stores";
	import { errorMessages, hintMessages } from "$lib/constants";
</script>

<div class="flex-1 flex flex-col h-full justify-center items-center px-4">
	<h1 class="font-head text-9xl text-custom-100">{$page.status}</h1>
	<span class="font-head text-xl text-custom-200">{errorMessages[$page.status]}</span>
	<span class="mt-4 font-head text-custom-300 text-center">
		{$page.error?.useDefault ? hintMessages[$page.status] : $page.error?.message}
	</span>
</div>
