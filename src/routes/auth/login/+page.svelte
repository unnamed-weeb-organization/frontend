<script lang="ts">
	import Button from "$lib/components/common/Button.svelte";
	import TextField from "$lib/components/common/TextField.svelte";
</script>

<form method="POST" class="-mt-8 flex flex-col gap-4 w-96">
	<label for="username">
		<span>Username</span>
		<TextField type="text" name="username" placeholder="Username" />
	</label>
	<label for="password">
		<span>Password</span>
		<TextField type="password" name="password" placeholder="Password" />
	</label>

	<div class="flex justify-between items-center">
		<label class="inline" for="remember">
			<input type="checkbox" name="remember" />
			<span>Remember me</span>
		</label>
		<Button formaction="?/reset" label="Forgot password"  />
	</div>

	<Button label="Login" formaction="?/login" styleType="labelButton" />
</form>

<style lang="postcss">
	label {
		@apply flex flex-col gap-1 w-full;
	}

	label span {
		@apply font-head font-medium text-sm text-custom-200;
	}

	label.inline {
		@apply flex flex-row items-center gap-2;
	}

	label.inline span {
		@apply font-normal text-custom-300;
	}
</style>
