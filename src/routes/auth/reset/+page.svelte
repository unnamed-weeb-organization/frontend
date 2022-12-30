<script lang="ts">
	import { page } from "$app/stores";
	import { RoutePoint, withParameter } from "$lib/routes";
	import Button from "$lib/components/common/Button.svelte";
	import TextField from "$lib/components/common/TextField.svelte";

	const from = $page.url.searchParams.get("from") ?? undefined;
	const loginOptions = withParameter(RoutePoint.AuthLogin, { from });
</script>

<form method="POST" class="contents">
	<input hidden name="from" value={from} />
	
	<label for="email">
		<span>Enter your email</span>
		<TextField type="email" name="email" placeholder="Email" />
	</label>

	<div class="flex justify-between items-center">
		<a class="linked" href={loginOptions.route}>Back to login</a>
		<Button class="w-24" label="Reset" styleType="labelButton" />
	</div>
</form>

<style lang="postcss">
	label {
		@apply flex flex-col gap-1 w-full;
	}

	label span {
		@apply font-head font-medium text-sm text-custom-200;
	}

	.linked {
		@apply font-head text-sm text-custom-300;
	}
</style>
