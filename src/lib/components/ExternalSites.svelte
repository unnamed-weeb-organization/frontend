<script lang="ts">
	import {
		type ExternalSite,
		ExternalSiteType,
		getExternalSiteName,
	} from "$lib/typings/server/general";

	export let sites: ExternalSite[];

	const siteItemMap: Record<ExternalSiteType, string> = {
		[ExternalSiteType.YOU_TUBE]: "i-uil-extra-youtube",
		[ExternalSiteType.APPLE_MUSIC]: "i-uil-extra-apple-music",
		[ExternalSiteType.SPOTIFY]: "i-uil-extra-spotify",
		[ExternalSiteType.SOUND_CLOUD]: "i-uil-extra-soundcloud",
		[ExternalSiteType.TWITTER]: "i-uil-extra-twitter",
		[ExternalSiteType.INSTAGRAM]: "i-uil-extra-instagram",
	};
</script>

<div class="wrapper {$$props.class}">
	<span class="font-head font-medium text-base pb-1">External Sites</span>

	{#each sites as site}
		<a target="_blank" rel="noreferrer" href={site.url} data-sveltekit-preload-code="off">
			<div class="h-5 w-5 ${siteItemMap[site.type]}" />
			<span>{getExternalSiteName(site.type)}</span>
		</a>
	{/each}
</div>

<style>
	.wrapper {
		--at-apply: flex flex-col w-fit;
	}

	.wrapper a {
		--at-apply: flex items-center gap-2 py-2 w-fit text-sm text-custom-200;
	}
</style>
