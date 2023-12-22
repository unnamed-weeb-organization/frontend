<script lang="ts">
	import { fade } from "svelte/transition";
	import { CTXRouteEditLocation, withParameter } from "$lib/routes";
	import type { CTXType, ExternalSite } from "$lib/typings/server/general";

	import ExternalSites from "$lib/components/ExternalSites.svelte";
	import Button from "$lib/components/common/Button.svelte";

	export let id: string;
	export let ctxType: CTXType;
	export let externalSites: ExternalSite[];

	const editRouteOptions = withParameter(CTXRouteEditLocation[ctxType], { id });
</script>

<div class="w-full flex flex-col py-6 md:flex-row" in:fade={{ duration: 100 }}>
	<div class="details_container">
		<div class="info_container">
			<slot name="info_container" />
		</div>
		<div class="column_container">
			<slot name="column_container" />
		</div>
	</div>

	<div class="mt-8 w-full flex flex-col gap-4 px-4 md:mt-0 xl:contents md:px-0">
		<slot name="content_container" />

		<div class="actions_container">
			<ExternalSites sites={externalSites} />

			<div class="action_wrapper">
				<h2>Actions</h2>

				<a href={editRouteOptions.route} data-sveltekit-preload-data="off">
					<div class="i-uil-edit h-5 w-5" />
					<span>Edit</span>
				</a>
				<Button class="w-fit" label="Report">
					<div class="i-uil-exclamation h-5 w-5" />
				</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.details_container {
		/* prettier-ignore */
		--at-apply: z-10 flex flex-col md:w-fit md:px-8;
	}

	.info_container {
		/* prettier-ignore */
		--at-apply: flex flex-col items-center gap-4 md:items-start;
	}

	.column_container {
		/* prettier-ignore */
		--at-apply: grid grid-cols-2 gap-4 justify-items-center text-center mt-8
			md:grid-cols-1 md:justify-items-start md:text-start;
	}

	.actions_container {
		--at-apply: flex flex-col gap-4;
	}

	.action_wrapper {
		--at-apply: flex flex-col gap-4;
	}

	.action_wrapper h2 {
		--at-apply: font-medium text-base text-100 -mb-2;
	}

	.action_wrapper a {
		--at-apply: flex items-center gap-2 w-fit text-sm text-300 fill-current;
	}
</style>
