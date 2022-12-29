<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="h-full flex flex-col items-center justify-center gap-8">
	<h1 class="font-head font-medium text-xl text-custom-100 self-start">{$page.data.}</h1>
    
    <slot />
</div>