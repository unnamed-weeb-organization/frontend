<script lang="ts">
	import { type ExternalSite, ExternalSiteType, getExternalSiteName } from "$lib/typings/server/general";

	import YouTubeLogo from "$lib/assets/logos/youtube.svg?component";
	import AppleMusicLogo from "$lib/assets/logos/apple_music.svg?component";
	import SpotifyLogo from "$lib/assets/logos/spotify.svg?component";
	import SoundCloudLogo from "$lib/assets/logos/soundcloud.svg?component";
	import TwitterLogo from "$lib/assets/logos/twitter.svg?component";
	import InstagramLogo from "$lib/assets/logos/instagram.svg?component";

	export let sites: ExternalSite[];

	const siteItemMap = {
		[ExternalSiteType.YOU_TUBE]: YouTubeLogo,
		[ExternalSiteType.APPLE_MUSIC]: AppleMusicLogo,
		[ExternalSiteType.SPOTIFY]: SpotifyLogo,
		[ExternalSiteType.SOUND_CLOUD]: SoundCloudLogo,
		[ExternalSiteType.TWITTER]: TwitterLogo,
		[ExternalSiteType.INSTAGRAM]: InstagramLogo,
	};
</script>

<div class="wrapper {$$props.class}">
	<span class="font-head font-medium text-base pb-1">External Sites</span>

	{#each sites as site}
		<a target="_blank" rel="noreferrer" href={site.url} data-sveltekit-preload-code="off">
			<svelte:component this={siteItemMap[site.type]} class="h-5 w-5" />
			<span>{getExternalSiteName(site.type)}</span>
		</a>
	{/each}
</div>

<style lang="postcss">
	.wrapper {
		@apply flex flex-col w-fit;
	}

	.wrapper a {
		@apply flex items-center gap-2
        py-2 w-fit
		text-sm text-custom-200;
	}
</style>

