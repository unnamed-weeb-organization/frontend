<script lang="ts">
	import { preferredTitleLocale, setPreferredTitleLocale } from "$lib/settings";
	import { getLocaleName, getLocales, Locale } from "$lib/typings/server/general";

	import SelectInput from "$lib/components/common/SelectInput.svelte";
	import SettingContainer from "$lib/components/common/SettingContainer.svelte";

	$: selectedPrefLocale = getLocaleName($preferredTitleLocale);
	const locales = new Map<string, Locale>(
		getLocales().map((locale) => [getLocaleName(locale), locale]),
	);

	const onPrefLocaleSelect = (locale_name: string) => {
		const selected = locales.get(locale_name);
		if (!selected) return;

		setPreferredTitleLocale(selected);
		selectedPrefLocale = locale_name;
	};
</script>

<div class="contents">
	<h1 class="font-head mb-4 mt-2 text-xl font-medium md:mt-0">General</h1>

	<SettingContainer
		heading="Prefered Title Locale"
		description={[
			"The locale to use when displaying titles.",
			'As an example, choosing "Native" will display "残酷な天使のテーゼ" over "The Cruel Angel\'s Thesis"',
		]}
	>
		<SelectInput
			options={Array.from(locales.keys())}
			bind:selected={selectedPrefLocale}
			onSelect={onPrefLocaleSelect}
		/>
	</SettingContainer>
</div>
