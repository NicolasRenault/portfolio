import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ["fr"],
	showDefaultLangCode: false,
	translations: {
		en: {
			navbar: {
				about: "About",
				projects: "Projects",
				resume: "Resume",
				contact: "Contact",
			},
		},
		fr: {
			navbar: {
				about: "A propos",
				projects: "Projets",
				resume: "CV",
				contact: "Contact",
			},
		},
	},
});
