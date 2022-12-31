<script lang="ts">
	import { page } from "$app/stores";
	import { RoutePoint, withParameter } from "$lib/routes";
	import Button from "$lib/components/common/Button.svelte";
	import LabeledTextField from "$lib/components/LabeledTextField.svelte";

	const from = $page.url.searchParams.get("from") ?? undefined;
	const loginOptions = withParameter(RoutePoint.AuthLogin, { from });
</script>

<form method="POST" class="contents">
	<input hidden name="from" value={from} />

	<LabeledTextField
		id="email"
		inputType="email"
		label="Email"
		placeholder="Email"
		errorHint={undefined}
	/>

	<div class="flex justify-between items-center">
		<a class="linked" href={loginOptions.route}>Back to login</a>
		<Button class="w-24" label="Reset" styleType="labelButton" />
	</div>
</form>

<style lang="postcss">
	.linked {
		@apply font-head text-sm text-custom-300;
	}
</style>
