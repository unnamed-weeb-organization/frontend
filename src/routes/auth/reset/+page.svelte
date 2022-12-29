<script lang="ts">
	import Button from "$lib/components/common/Button.svelte";
	import TextField from "$lib/components/common/TextField.svelte";
</script>

<form method="POST" class="-mt-8 flex flex-col gap-4 w-96">
	<h1 class="font-head font-medium text-xl text-custom-100 self-start">Reset Your Password</h1>
    <label for="email">
		<span>Enter your email</span>
		<TextField type="email" name="email" placeholder="Email" />
	</label>

	<Button label="Reset" styleType="labelButton" />
</form>

<style lang="postcss">
	label {
		@apply flex flex-col gap-1 w-full;
	}

	label span {
		@apply font-head font-medium text-sm text-custom-200;
	}
</style>
