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
		[ExternalSiteType.YouTube]: YouTubeLogo,
		[ExternalSiteType.AppleMusic]: AppleMusicLogo,
		[ExternalSiteType.Spotify]: SpotifyLogo,
		[ExternalSiteType.SoundCloud]: SoundCloudLogo,
		[ExternalSiteType.Twitter]: TwitterLogo,
		[ExternalSiteType.Instagram]: InstagramLogo,
	};
</script>

<div class="container {$$props.class}">
	<h2 class="font-head font-medium text-md pb-1">External Sites</h2>

	{#each sites as site}
		<a target="_blank" rel="noreferrer" href={site.url}>
			<svelte:component this={siteItemMap[site.type]} class="h-5 w-5" />
			<span>{getExternalSiteName(site.type)}</span>
		</a>
	{/each}
</div>

<style>
	.container {
		@apply flex flex-col w-fit;
	}

	.container a {
		@apply flex items-center gap-2
        py-2 w-fit
		text-sm text-custom-200;
	}
</style>

