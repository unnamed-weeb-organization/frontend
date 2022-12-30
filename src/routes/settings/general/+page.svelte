<script lang="ts">
	import { getLocaleName, getLocales, Locale } from "$lib/typings/server/general";
	import { preferedTitleLocale, setPreferedTitleLocale } from "$lib/settings";
	import SelectInput from "$lib/components/common/SelectInput.svelte";
	import SettingContainer from "$lib/components/common/SettingContainer.svelte";

	$: selectedPrefLocale = getLocaleName($preferedTitleLocale);
	const locales = new Map<string, Locale>(
		getLocales().map((locale) => [getLocaleName(locale), locale])
	);

	const onPrefLocaleSelect = (locale_name: string) => {
		setPreferedTitleLocale(locales.get(locale_name)!);
		selectedPrefLocale = locale_name;
	};
</script>

<div class="contents">
	<h1 class="font-head text-xl font-medium mt-2 md:mt-0 mb-4">General</h1>

	<SettingContainer
		heading="Prefered Title Locale"
		description={[
			"The locale to use when displaying titles.",
			'As an example, choosing "Native" will display "残酷な天使のテーゼ" over "The Cruel Angel\'s Thesis"'
		]}
	>
		<SelectInput
			options={Array.from(locales.keys())}
			bind:selected={selectedPrefLocale}
			onSelect={onPrefLocaleSelect}
		/>
	</SettingContainer>
</div>
