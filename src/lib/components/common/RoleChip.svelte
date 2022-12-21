<script lang="ts">
	import { Role } from "$lib/typings/server/user";
	import { getRoleName } from "$lib/typings/server/user";

	export let role: Role;
</script>

<div
	class="flex items-center w-fit px-2 font-head text-sm bg-accent-secondary rounded text-accent-200 select-none"
>
	{getRoleName(role)}
</div>
