<script lang="ts">
	export let imageURL: string;
</script>

<!-- Responsive images and such -->
<div class="container" />

<style lang="postcss">
    .container {
        @apply h-64 w-64 min-h-[16rem]
        bg-custom-secondary rounded
        shadow-md hover:shadow-lg
        transition-shadow duration-150 ease-in-out;
    }
</style>