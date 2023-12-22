<!--
	Both idea and the implementation is from BetterDiscord's Installer
	Source: https://github.com/BetterDiscord/Installer/blob/development/src/renderer/common/Spinner.svelte
	Source repository is licensed under MIT.
-->
<script lang="ts">
	import { afterUpdate, onMount } from "svelte";
	import { fade } from "svelte/transition";

	export let height = 32;
	export let width = 32;
	export let value: number | null = null;

	let circle: SVGCircleElement;
	function updateValue() {
		const circumference = Math.PI * (Number(circle.getAttribute("r")) * 2);
		if (value != null && value < 0) value = 0;
		if (value != null && value > 100) value = 100;
		circle.style.strokeDashoffset = (((100 - (value ?? 0)) / 100) * circumference).toString();
	}

	onMount(updateValue);
	afterUpdate(updateValue);
</script>

<svg
	class="spinner"
	style="height: {height}; width: {width};"
	viewBox="0 0 16 16"
	role="progressbar"
	aria-valuemin={value ? 0 : undefined}
	aria-valuemax={value ? 100 : undefined}
	aria-valuenow={value}
	in:fade={{ delay: 400, duration: 150 }}
>
	<circle class="spinner-ring" cx="50%" cy="50%" r="7" />
	<circle class="spinner-fill" cx="50%" cy="50%" r="7" stroke-dasharray="3" bind:this={circle} />
</svg>

<style>
	@keyframes spinner-indeterminate {
		0% {
			stroke-dasharray: 0 44px;
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(450deg);
			stroke-dasharray: 22px 22px;
		}
		100% {
			stroke-dasharray: 0 44px;
			transform: rotate(1080deg);
		}
	}

	.spinner circle {
		fill: none;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		stroke-width: 2;
		stroke-linecap: round;
		transform-origin: 50% 50%;
	}

	.spinner-ring {
		stroke: var(--tertiary);
	}

	.spinner .spinner-fill {
		stroke: var(--accent-300);
		stroke-dasharray: 43.75;
		animation: spinner-indeterminate 2s linear infinite;
	}
</style>
