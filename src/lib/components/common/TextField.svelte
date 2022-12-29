<script lang="ts">
    type TextFieldType = "text" | "email" | "password";

    export let name: string;
    export let type: TextFieldType = "text";
	export let placeholder: string;
</script>

<input {name} {type} {placeholder} class={$$props.class} />

<style lang="postcss">
	input {
		@apply w-full h-10 px-2 rounded
        transition-colors duration-150
        font-head text-sm text-custom-200;
	}

    input::placeholder {
        @apply font-head text-sm text-custom-400;
    }

    input:focus {
        @apply border-2 border-accent-tertiary
        bg-custom-tertiary;
    }
</style>
