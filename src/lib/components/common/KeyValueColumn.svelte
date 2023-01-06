<script lang="ts">
	export let key: string;
	export let value: string | number;
</script>

<div class="column_item">
	<span>{key}</span>
	<span>{value}</span>
</div>

<style lang="postcss">
    .column_item {
        @apply flex flex-col font-head text-sm text-custom-200;
    }

    .column_item > :first-child {
        @apply text-custom-300;
    }
</style>