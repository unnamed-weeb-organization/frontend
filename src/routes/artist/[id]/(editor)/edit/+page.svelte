<script lang="ts">
	import { slide } from "svelte/transition";
	import type { PageData } from "./$types";
	import { enhance } from "$app/forms";
	import { getRandomizedTempId } from "$lib/utils";
	import { Country, getCountries, getCountryName, Locale } from "$lib/typings/server/general";
	import { getArtistTypeName, getArtistTypes } from "$lib/typings/server/artist";

	import Button from "$lib/components/common/Button.svelte";
	import TextArea from "$lib/components/common/TextArea.svelte";
	import TextField from "$lib/components/common/TextField.svelte";
	import LocalizedTextFields from "$lib/components/LocalizedTextFields.svelte";
	import SelectInput from "$lib/components/common/SelectInput.svelte";

	import TrashIcon from "$lib/assets/icons/trash.svg?component";

	export let data: PageData;

	let altNameMap: Map<string, LocalizedTextFields["$$prop_def"]["locales"]> = new Map(
		data.artist.alt_names.map((name, i) => [
			getRandomizedTempId(),
			new Map([
				[Locale.English, { id: `alt_names.${i}.english`, value: name.english }],
				[Locale.Native, { id: `alt_names.${i}.native`, value: name.native }],
				[Locale.Romanized, { id: `alt_names.${i}.romanized`, value: name.romanized }]
			])
		])
	);

	const addArtistAltName = () => {
		const id = getRandomizedTempId();
		const index = altNameMap.size;

		altNameMap = altNameMap.set(
			id,
			new Map([
				[Locale.English, { id: `alt_names.${index}.english` }],
				[Locale.Native, { id: `alt_names.${index}.native` }],
				[Locale.Romanized, { id: `alt_names.${index}.romanized` }]
			])
		);
	};

	const deleteArtistAltName = (i: string) => {
		const newMap = new Map(altNameMap);
		newMap.delete(i);
		altNameMap = newMap;
	};

	let selectBasedOn: string = Country[data.artist.based_on as unknown as keyof typeof Country];
	const basedOnOptions = new Map(
		getCountries().map((country) => [getCountryName(country), country])
	);
	const onBasedOnSelect = (country_name: string) => {
		selectBasedOn = country_name;
	};

	let selectArtistType = getArtistTypeName(data.artist.type);
	const artistTypes = new Map(getArtistTypes().map((type) => [getArtistTypeName(type), type]));
	const onArtistTypeSelect = (type_name: string) => {
		selectArtistType = type_name;
	};
</script>

<form method="POST" class="flex flex-col flex-1" use:enhance>
	<h1 class="mb-2">Name</h1>
	<LocalizedTextFields
		locales={new Map([
			[Locale.English, { id: "name.english", value: data.artist.name.english }],
			[Locale.Native, { id: "name.native", value: data.artist.name.native }],
			[Locale.Romanized, { id: "name.romanized", value: data.artist.name.romanized }]
		])}
	/>

	<h1 class="mt-4 mb-2">Alternative names</h1>
	{#each [...altNameMap.entries()] as [id, locales] (id)}
		<div transition:slide={{ duration: 150 }} class="flex items-center gap-2 mb-3 -ml-2">
			<Button
				class="w-10 h-10"
				styleType="iconButton"
				on:click={(e) => {
					e.preventDefault();
					deleteArtistAltName(id);
				}}
			>
				<TrashIcon class="h-6 w-6 fill-red-600 dark:fill-red-500" />
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

	<h1 class="mt-4 mb-2">Type</h1>
	<SelectInput
		name="type"
		selected={selectArtistType}
		options={Array.from(artistTypes.keys())}
		onSelect={onArtistTypeSelect}
	/>
	
	<h1 class="mt-4 mb-2">Description</h1>
	<TextArea name="description" placeholder="Something about the artist." />

	<h1 class="mt-4 mb-2">Based on</h1>
	<SelectInput
		name="based_on"
		selected={selectBasedOn}
		options={Array.from(basedOnOptions.keys())}
		onSelect={onBasedOnSelect}
	/>

	<h1 class="mt-4 mb-2">Founded on</h1>
	<TextField name="founded_on" type="date" placeholder="e.g. 2007-01-01" />

	<div class="contents md:flex flex-1 justify-end">
		<Button class="mt-8 md:w-24" styleType="labelButton" label="Confirm" />
	</div>
</form>

<style lang="postcss">
	h1 {
		@apply font-head font-medium;
	}
</style>
