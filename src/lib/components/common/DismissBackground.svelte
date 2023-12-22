<script lang="ts">
	export let onDismiss: () => void;

	export let styleType: "none" | "dimmed" = "none";
	const styles = {
		none: "opacity-0",
		dimmed: "bg-black opacity-50",
	};
</script>

<div
	role="button"
	tabindex="-1"
	on:keypress={onDismiss}
	on:click|preventDefault={onDismiss}
	class="fixed left-0 top-0 z-0 h-[100vh] w-[100vw] opacity-0{styles[styleType]}"
/>
