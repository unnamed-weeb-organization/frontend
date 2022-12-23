<script lang="ts">
	export let onDismiss: () => void;

	export let styleType: 'none' | 'dimmed' = 'none';
	const styles = {
		none: 'opacity-0',
		dimmed: 'bg-black opacity-50'
	}
</script>

<div
	on:click={onDismiss}
	on:keypress={onDismiss}
	class="z-0 fixed top-0 left-0 opacity-0 w-[100vw] h-[100vh] {styles[styleType]}"
/>