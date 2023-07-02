export const defaultLang = "en";
export const supportedLangs = {
	en: "English",
	fr: "Français",
} as const;

/**
 * Get the language from the url
 *
 * @param url
 * @returns
 */
export function getLangFromUrl(url: URL): string {
	const [, lang] = url.pathname.split("/");
	if (lang in supportedLangs) return lang as keyof typeof supportedLangs;
	return defaultLang;
}

/**
 * Get the url path with the translation
 * @param target
 * @param lang
 * @returns
 */
export function getUrlWithTranslation(target: string, lang: string): string {
	return "/" + (lang === defaultLang || !(lang in supportedLangs) ? "" : lang + "/") + target;
}

/**
 * Switch the language from the url
 *
 * @param url
 * @param lang
 * @returns
 */
export function switchLangFromUrl(url: URL, lang: string) {
	if (lang === defaultLang) return url.pathname.replace(`/${getLangFromUrl(url)}/`, "/");
	return "/" + lang + url.pathname;
}
