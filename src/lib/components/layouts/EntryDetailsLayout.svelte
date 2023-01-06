<script lang="ts">
	import type { CTXType, ExternalSite } from "$lib/typings/server/general";
	import { CTXRouteEditLocation, withParameter } from "$lib/routes";
	import ExternalSites from "$lib/components/ExternalSites.svelte";
	import Button from "$lib/components/common/Button.svelte";

	import EditIcon from "$lib/assets/icons/edit.svg?component";
	import ExclamationMarkIcon from "$lib/assets/icons/exclamation_mark.svg?component";

	export let id: string;
	export let ctxType: CTXType;
	export let externalSites: ExternalSite[];

	const editRouteOptions = withParameter(CTXRouteEditLocation[ctxType], { id });
</script>

<div class="flex flex-col md:flex-row w-full py-6">
	<div class="details_container">
		<div class="info_container">
			<slot name="info_container" />
		</div>
		<div class="column_container">
			<slot name="column_container" />
		</div>
	</div>

	<div class="flex flex-col w-full px-4 mt-8 gap-4 md:px-0 md:mt-0 xl:contents">
		<slot name="content_container" />

		<div class="actions_container">
			<ExternalSites sites={externalSites} />

			<div class="action_wrapper">
				<h2>Actions</h2>

				<a href={editRouteOptions.route} data-sveltekit-preload-data="off">
					<EditIcon class="h-5 w-5" />
					<span>Edit</span>
				</a>
				<Button class="w-fit" label="Report">
					<ExclamationMarkIcon class="h-5 w-5" />	
				</Button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.details_container {
		@apply z-10 flex flex-col md:w-fit md:px-8;
	}

	.info_container {
		@apply flex flex-col items-center gap-4 md:items-start;
	}

	.column_container {
		@apply grid grid-cols-2 md:grid-cols-1 gap-4
        justify-items-center text-center md:justify-items-start md:text-start
        mt-8;
	}

	.actions_container {
		@apply flex flex-col gap-4;
	}

	.action_wrapper {
		@apply flex flex-col gap-4;
	}

	.action_wrapper h2 {
		@apply font-head font-medium text-base text-custom-100 -mb-2;
	}

	.action_wrapper a {
		@apply flex items-center gap-2 w-fit
		text-sm text-custom-300 fill-current;
	}
</style>
