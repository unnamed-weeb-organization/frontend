<script lang="ts">
	import type { Role } from "$lib/typings/server/user";

	export let role: Role;
</script>

<option
	class="flex items-center w-fit px-2 font-head text-sm bg-accent-secondary rounded text-accent-200 select-none"
>
	{role}
</option>
