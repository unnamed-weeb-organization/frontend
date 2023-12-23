<script lang="ts">
	import { page } from "$app/stores";
	import { enhance, applyAction } from "$app/forms";
	import { RoutePoint, withParameter } from "$lib/routes";

	import Button from "$lib/components/common/Button.svelte";
	import LabeledTextField from "$lib/components/LabeledTextField.svelte";
	import { authFromSubmitting } from "$lib/stores";

	const from = $page.url.searchParams.get("from");
	const loginOptions = withParameter(RoutePoint.AuthLogin, { from: from ?? undefined });

	let missing: string[] = [];
</script>

<form
	method="POST"
	class="contents"
	use:enhance={() => {
		authFromSubmitting.set(true);

		return async ({ result }) => {
			if (result.type === "failure" && result.data?.missing) {
				missing = result.data.missing;
				return;
			}

			applyAction(result);
			authFromSubmitting.set(false);
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

	<div class="flex items-center justify-between">
		<a class="linked" href={loginOptions.route}>Already have an account?</a>
		<Button class="w-24" label="Create" styleType="labelButton" />
	</div>

	<div class="font-head relative mt-8 border-2 border-accent-tertiary rounded p-2">
		<h2 class="font-head mb-2 text-sm">Guidlines for password creation</h2>
		<ul class="list-disc">
			<li>Must be at least 8 characters long</li>
			<li>Refrain from using common passwords (e.g. password, p@ssword et al)</li>
		</ul>
		<div class="elevation-layer elevation-background-1" />
	</div>
</form>

<style>
	li {
		--at-apply: ml-6 text-sm text-300;
	}

	.linked {
		--at-apply: font-head text-sm text-300;
	}
</style>
