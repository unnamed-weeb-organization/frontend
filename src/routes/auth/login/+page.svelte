<script lang="ts">
	import { page } from "$app/stores";
	import { RoutePoint, withParameter } from "$lib/routes";
	import Button from "$lib/components/common/Button.svelte";
	import LabeledTextField from "$lib/components/LabeledTextField.svelte";

	const from = $page.url.searchParams.get("from") ?? undefined;
	const forgetPasswordOptions = withParameter(RoutePoint.AuthReset, { from });
	const createAccountOptions = withParameter(RoutePoint.AuthCreate, { from });
</script>

<form method="POST" class="contents">
	<input hidden name="from" value={from} />

	<LabeledTextField
		id="username"
		inputType="text"
		label="Username"
		placeholder="Username"
		errorHint={undefined}
	/>

	<LabeledTextField
		id="password"
		inputType="password"
		label="Password"
		placeholder="Password"
		errorHint={undefined}
	/>

	<div class="flex justify-between items-center">
		<label class="inline">
			<input type="checkbox" name="remember" />
			<span>Remember me</span>
		</label>
		<a class="linked" href={forgetPasswordOptions.route}>Forget password</a>
	</div>

	<div class="flex justify-between items-center mt-4">
		<a class="linked" href={createAccountOptions.route}>Don't have an account?</a>
		<Button class="w-24" label="Continue" styleType="labelButton" />
	</div>
</form>

<style lang="postcss">
	label.inline {
		@apply flex flex-row w-fit items-center gap-2;
	}

	label.inline span {
		@apply font-head font-normal text-sm text-custom-300;
	}

	.linked {
		@apply font-head text-sm text-custom-300;
	}
</style>
