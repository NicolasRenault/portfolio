import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ["fr"],
	showDefaultLangCode: false,
	translations: {
		en: {
			global: {
				IT_developer: "IT Developer",
				block_release_training: "Block release training",
				present: "Present",
				learn_more: "Learn more",
				see_more: "See more",
			},
			navbar: {
				about: "About",
				projects: "Projects",
				resume: "Resume",
				contact: "Contact",
			},
			home: {
				hello: "Hi, I'm",
				intro_1: "I'm a",
				intro_2:
					"Developer based in France. I'm graduated from a Three-year Degree in web and mobile device software technology, with the last year in block release training. I am currently working at Trelleborg as an IT Developer and Software Administrator.",
				working_experience: "Working experience",
				fullstack_php_developer: "Fullstack PHP Developer",
				selected_projects: "Selected projects",
			},
			about: {},
			projects: {},
			resume: {},
			cheaty: {
				description: "Extention for the web that feels illegal.",
			},
			portfolio: {
				description: "My personal website build with Astro",
			},
			logo: {
				description: "A collection of my logos. SVGs, WebComponent and more.",
			},
		},
		fr: {
			global: {
				IT_developer: "Développeur informatique",
				block_release_training: "Formation en alternance",
				present: "Aujourd'hui",
				learn_more: "En savoir plus",
				see_more: "Voir plus",
			},
			navbar: {
				about: "A propos",
				projects: "Projets",
				resume: "CV",
				contact: "Contact",
			},
			home: {
				hello: "Salut, je suis",
				intro_1: "Je suis un Développeur",
				intro_2:
					"basé en France. Je suis  Diplômé d'un DUT informatique et d'une licence professionnelle des technologies logicielles du web et terminaux mobiles en alternance. Je travaille actuellement chez Trelleborg en tant que développeur informatique et administrateur de logiciels.",
				working_experience: "Expérience professionnelle",
				fullstack_php_developer: "Développeur PHP Fullstack",
				selected_projects: "Projets sélectionnés",
			},
			about: {},
			projects: {},
			resume: {},
			cheaty: {
				description: "Extention pour le web qui semble illégal.",
			},
			portfolio: {
				description: "Mon site personnel construit avec Astro",
			},
			logo: {
				description: "Une collection de mes logos. SVGs, WebComponent et plus.",
			},
		},
	},
});
