<script lang="ts">
	import { page } from "$app/stores";
	import { RoutePoint, withParameter } from "$lib/routes";
	import Button from "$lib/components/common/Button.svelte";
	import TextField from "$lib/components/common/TextField.svelte";

	const from = $page.url.searchParams.get("from") ?? undefined;
	const forgetPasswordOptions = withParameter(RoutePoint.AuthReset, {from});
</script>

<form method="POST" class="contents">
	<input hidden name="from" value={from} />

	<label for="username">
		<span>Username</span>
		<TextField type="text" name="username" placeholder="Username" />
	</label>
	<label for="password">
		<span>Password</span>
		<TextField type="password" name="password" placeholder="Password" />
	</label>

	<div class="flex justify-between items-center">
		<label class="inline">
			<input type="checkbox" name="remember" />
			<span>Remember me</span>
		</label>
		<a class="linked" href={forgetPasswordOptions.route}>Forget password</a>
	</div>

	<Button label="Continue" styleType="labelButton" />
</form>

<style lang="postcss">
	label {
		@apply flex flex-col gap-1 w-full;
	}

	label span {
		@apply font-head font-medium text-sm text-custom-200;
	}

	label.inline {
		@apply flex flex-row w-fit items-center gap-2;
	}

	label.inline span {
		@apply font-normal text-custom-300;
	}

	.linked {
		@apply font-head text-sm text-custom-300;
	}
</style>
