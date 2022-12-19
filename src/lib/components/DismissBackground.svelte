<script lang="ts">
	export let onDismiss: () => void;
</script>

<div
	on:click={onDismiss}
	on:keypress={onDismiss}
	class="z-0 fixed top-0 left-0 opacity-0 w-[100vw] h-[100vh]"
/>