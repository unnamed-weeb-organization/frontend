<script lang="ts">
	import { page } from "$app/stores";
	import { errorMessages, hintMessages } from "$lib/constants";
</script>

<div class="h-full flex flex-1 flex-col items-center justify-center px-4">
	<h1 class="font-head text-9xl text-100">{$page.status}</h1>
	<span class="font-head text-xl text-200">{errorMessages[$page.status]}</span>
	<span class="font-head mt-4 text-center text-300">
		{$page.error?.useDefault ? hintMessages[$page.status] : $page.error?.message}
	</span>
</div>
