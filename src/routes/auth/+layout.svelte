<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="h-full flex flex-col items-center justify-center">
    <div class="-mt-12 flex flex-col gap-4 w-4/5 md:w-96">
        <h1 class="font-head font-medium text-4xl text-custom-100 self-start mb-4">{$page.data.header}</h1>
        <slot />
    </div>
</div>