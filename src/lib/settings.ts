import { writable } from "svelte/store";
import { Locale } from "./typings/server/general";

const PREFERRED_TITLE_LOCALE_KEY = "settings-pref-title-locale";

/**
 * The preferred title locale for the user.
 * 
 * This writeable should NOT be directly modified,
 * instead use {@link setPreferredTitleLocale} to update the value.
 */
export const preferredTitleLocale = writable<Locale>(Locale.Native);

export const initializeSettings = () => {
    const localPreferredTitleLocale = localStorage.getItem(PREFERRED_TITLE_LOCALE_KEY) as Locale;
    if (localPreferredTitleLocale) {
        preferredTitleLocale.set(localPreferredTitleLocale);
    }
}

export const setPreferredTitleLocale = (locale: Locale) => {
    localStorage.setItem(PREFERRED_TITLE_LOCALE_KEY, locale);
    preferredTitleLocale.set(locale);
}
