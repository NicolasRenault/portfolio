export const defaultLang = "en";
export const supportedLangs = {
	en: "English",
	fr: "Français",
} as const;

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/");
	if (lang in supportedLangs) return lang as keyof typeof supportedLangs;
	return defaultLang;
}
