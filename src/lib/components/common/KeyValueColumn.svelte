<script lang="ts">
	export let key: string;
	export let value: string | number;
</script>

<div class="column_item">
	<span>{key}</span>
	<span>{value}</span>
</div>

<style>
	.column_item {
		--at-apply: flex flex-col font-head text-sm text-custom-200;
	}

	.column_item > :first-child {
		--at-apply: text-custom-300;
	}
</style>
