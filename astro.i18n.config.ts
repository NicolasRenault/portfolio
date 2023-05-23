import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ["fr"],
	showDefaultLangCode: false,
	translations: {
		en: {
			test: {
				welcome: "Title",
			},
			about: {
				title: "About",
			},
		},
		fr: {
			test: {
				welcome: "Titre",
			},
			about: {
				title: "A propos",
			},
		},
	},
});
