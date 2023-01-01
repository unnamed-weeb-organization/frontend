import { writable } from "svelte/store";
import { Locale } from "./typings/server/general";

const PREFERED_TITLE_LOCALE_KEY = "settings-pref-title-locale";

/**
 * The prefered title locale for the user.
 * 
 * This writeable should NOT be directly modified,
 * instead use {@link setPreferedTitleLocale} to update the value.
 */
export const preferedTitleLocale = writable<Locale>(Locale.Native);

export const initializeSettings = () => {
    const localpreferedTitleLocale = localStorage.getItem(PREFERED_TITLE_LOCALE_KEY) as Locale;
    if (localpreferedTitleLocale) {
        preferedTitleLocale.set(localpreferedTitleLocale);
    }
}

export const setPreferedTitleLocale = (locale: Locale) => {
    localStorage.setItem(PREFERED_TITLE_LOCALE_KEY, locale);
    preferedTitleLocale.set(locale);
}
