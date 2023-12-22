<script lang="ts">
	import type { Role } from "$lib/typings/server/user";

	export let role: Role;
</script>

<option
	class="font-head w-fit flex select-none items-center rounded bg-accent-secondary px-2 text-sm text-accent-200"
>
	{role}
</option>
