<script lang="ts">
	import { page } from "$app/stores";
	import { applyAction, enhance } from "$app/forms";
	import { RoutePoint, withParameter } from "$lib/routes";
	import Button from "$lib/components/common/Button.svelte";
	import LabeledTextField from "$lib/components/LabeledTextField.svelte";

	const from = $page.url.searchParams.get("from") ?? undefined;
	const loginOptions = withParameter(RoutePoint.AuthLogin, { from });
	let missing: string[] = [];
</script>

<form
	method="POST"
	class="contents"
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type === "failure" && result.data?.missing) {
				missing = result.data.missing;
				return;
			}

			applyAction(result);
		};
	}}
>
	<input hidden name="from" value={from} />

	<LabeledTextField
		id="email"
		inputType="email"
		label="Email"
		placeholder="Email"
		errorHint={missing.includes("email") ? "Required" : undefined}
	/>

	<div class="flex justify-between items-center">
		<a class="linked" href={loginOptions.route}>Back to login</a>
		<Button class="w-24" label="Reset" styleType="labelButton" />
	</div>
</form>

<style>
	.linked {
		--at-apply: font-head text-sm text-300;
	}
</style>
