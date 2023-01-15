<script lang="ts">
	import { page } from "$app/stores";
	import { enhance, applyAction } from "$app/forms";
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
		id="username"
		inputType="text"
		label="Username"
		placeholder="Username"
		errorHint={missing.includes("name") ? "Required" : undefined}
	/>

	<LabeledTextField
		id="email"
		inputType="email"
		label="Email"
		placeholder="Email"
		errorHint={missing.includes("email") ? "Required" : undefined}
	/>

	<LabeledTextField
		id="password"
		inputType="password"
		label="Password"
		placeholder="Password"
		errorHint={missing.includes("password") ? "Required" : undefined}
	/>

	<div class="flex justify-between items-center">
		<a class="linked" href={loginOptions.route}>Already have an account?</a>
		<Button class="w-24" label="Create" styleType="labelButton" />
	</div>

	<div class="relative p-2 mt-8 font-head rounded border-2 border-accent-tertiary">
		<h2 class="mb-2 font-head text-sm">Guidlines for password creation</h2>
		<ul class="list-disc">
			<li>Must be at least 8 characters long</li>
			<li>Refrain from using common passwords (e.g. password, p@ssword et al)</li>
		</ul>
		<div class="elevation-layer elevation-background-1" />
	</div>
</form>

<style lang="postcss">
	li {
		@apply ml-6 text-sm text-custom-300;
	}

	.linked {
		@apply font-head text-sm text-custom-300;
	}
</style>
