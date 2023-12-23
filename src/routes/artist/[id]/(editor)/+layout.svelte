<script lang="ts">
	import { fade, slide } from "svelte/transition";
	import type { LayoutData } from "./$types";
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import { preferredTitleLocale } from "$lib/settings";
	import { concatPageTitle, getRandomizedTempId } from "$lib/utils";
	import { ArtistType, getArtistTypeName, getArtistTypes } from "$lib/typings/server/artist";
	import { Country, getCountries, getCountryName, Locale } from "$lib/typings/server/general";

	import Button from "$lib/components/common/Button.svelte";
	import TextArea from "$lib/components/common/TextArea.svelte";
	import TextField from "$lib/components/common/TextField.svelte";
	import ArtContainer from "$lib/components/common/ArtContainer.svelte";
	import SelectInput from "$lib/components/common/SelectInput.svelte";
	import LocalizedTextFields from "$lib/components/LocalizedTextFields.svelte";

	export let data: LayoutData;

	const nameMap = new Map([
		[Locale.English, { id: "name.english", value: data.artist?.name.english }],
		[Locale.Native, { id: "name.native", value: data.artist?.name.native }],
		[Locale.Romanized, { id: "name.romanized", value: data.artist?.name.romanized }],
	]);

	let altNameMap: Map<string, LocalizedTextFields["$$prop_def"]["locales"]> = new Map(
		data.artist?.alt_names.map((name, i) => [
			getRandomizedTempId(),
			new Map([
				[Locale.English, { id: `alt_names.${i}.english`, value: name.english }],
				[Locale.Native, { id: `alt_names.${i}.native`, value: name.native }],
				[Locale.Romanized, { id: `alt_names.${i}.romanized`, value: name.romanized }],
			]),
		]),
	);

	const addArtistAltName = () => {
		const id = getRandomizedTempId();
		const index = altNameMap.size;

		altNameMap = altNameMap.set(
			id,
			new Map([
				[Locale.English, { id: `alt_names.${index}.english` }],
				[Locale.Native, { id: `alt_names.${index}.native` }],
				[Locale.Romanized, { id: `alt_names.${index}.romanized` }],
			]),
		);
	};

	const deleteArtistAltName = (i: string) => {
		const newMap = new Map(altNameMap);
		newMap.delete(i);
		altNameMap = newMap;
	};

	let selectBasedOn: string = getCountryName(data.artist?.based_on ?? Country.JP);
	const basedOnOptions = new Map(getCountries().map((c) => [getCountryName(c), c]));
	const onBasedOnSelect = (country_name: string) => (selectBasedOn = country_name);

	let selectArtistType = getArtistTypeName(data.artist?.type ?? ArtistType.SOLO);
	const artistTypes = new Map(getArtistTypes().map((type) => [getArtistTypeName(type), type]));
	const onArtistTypeSelect = (type_name: string) => (selectArtistType = type_name);
</script>

<div class="flex flex-col gap-4 p-4 md:flex-row" in:fade={{ duration: 150 }}>
	<div class="flex flex-col items-center md:w-64 md:items-start">
		{#if $page.data.header}
			<h1 class="font-head mb-4 self-start text-2xl font-medium">
				{concatPageTitle($page.data.header, $preferredTitleLocale)}
			</h1>
		{/if}
		<ArtContainer size="large" imageURL="" link={null} />
	</div>

	<form method="POST" class="flex flex-1 flex-col" use:enhance>
		<h1 class="mb-2">Name</h1>
		<LocalizedTextFields locales={nameMap} />

		<h1 class="mb-2 mt-4">Alternative names</h1>
		{#each [...altNameMap.entries()] as [id, locales] (id)}
			<div transition:slide|local={{ duration: 150 }} class="mb-3 flex items-center gap-2 -ml-2">
				<Button
					class="h-10 w-10"
					styleType="iconButton"
					on:click={(e) => {
						e.preventDefault();
						deleteArtistAltName(id);
					}}
				>
					<div class="i-uil-trash h-6 w-6 fill-red-600 dark:fill-red-500" />
				</Button>

				<LocalizedTextFields {locales} />
			</div>
		{/each}
		<Button
			label="Add"
			styleType="bordered"
			on:click={(e) => {
				e.preventDefault();
				addArtistAltName();
			}}
		/>

		<h1 class="mb-2 mt-4">Type</h1>
		<SelectInput
			name="type"
			selected={selectArtistType}
			options={Array.from(artistTypes.keys())}
			onSelect={onArtistTypeSelect}
		/>

		<h1 class="mb-2 mt-4">Description</h1>
		<TextArea
			name="description"
			value={data.artist?.description}
			placeholder="Something about the artist."
		/>

		<h1 class="mb-2 mt-4">Based on</h1>
		<SelectInput
			name="based_on"
			selected={selectBasedOn}
			options={Array.from(basedOnOptions.keys())}
			onSelect={onBasedOnSelect}
		/>

		<h1 class="mb-2 mt-4">Founded on</h1>
		<TextField
			name="founded_on"
			type="date"
			value={data.artist?.founded_on?.toISOString().split("T")[0] ?? ""}
			placeholder="e.g. 2007-01-01"
		/>

		<div class="contents flex-1 justify-end md:flex">
			<Button class="mt-8 md:w-24" styleType="labelButton" label="Confirm" />
		</div>
	</form>
</div>

<style>
	h1 {
		--at-apply: font-head font-medium;
	}
</style>
