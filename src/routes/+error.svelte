<script>
	import { page } from "$app/stores";

	const errorMessages = {
		404: "Page not found",
		500: "Internal server error"
	};

	const hintMessages = {
		404: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
		500: "Please try again later."
	};
</script>

<div class="flex-1 flex flex-col h-full justify-center items-center px-4">
	<h1 class="font-head text-9xl text-custom-100">{$page.status}</h1>
	<span class="font-head text-xl text-custom-200">{errorMessages[$page.status]}</span>
	<span class="mt-4 font-head text-custom-300 text-center">{hintMessages[$page.status]}</span>
</div>
