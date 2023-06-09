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
				homepage: "Homepage",
				projects: "Projects",
				resume: "Resume",
				contact: "Contact",
			},
			home: {
				hello: "Hi, I'm",
				intro_1: "I'm a",
				intro_2:
					"Developer based in France. Currently working at Trelleborg as an IT Developer and Software Administrator. I'm always doing side projects that you can find on my ",
				work: "I graduated with a Bachelor's Degree in web and mobile development. I mainly work with web technologies in backend-oriented projects.",
				passions:
					"Outside work, I enjoy doing sports, building side projects, spending time with friends, and playing video games.",
				working_experience: "Working experience",
				fullstack_web_developer: "Fullstack Web Developer",
				selected_projects: "Selected projects",
			},
			projects: {},
			resume: {},
			cheaty: {
				description: "Extension for the web that feels illegal.",
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
				homepage: "Accueil",
				projects: "Projets",
				resume: "CV",
				contact: "Contact",
			},
			home: {
				hello: "Salut, je suis",
				intro_1: "Je suis un Développeur",
				intro_2:
					"basé en France. Je travaille actuellement chez Trelleborg en tant que développeur informatique et administrateur de logiciels. Je suis très souvent en train de réaliser des projets annexes que vous pouvez trouver sur mon ",
				work: "Je suis Diplômé d'un DUT informatique et d'une Licence professionnelle dans le développement web et mobile. Je travaille principalement avec des technologies web dans des projets axés sur le backend.",
				passions:
					"En dehors du travail, j'aime faire du sport, réaliser des projets annexes, passer du temps avec des amis et jouer à des jeux vidéo.",
				working_experience: "Expérience professionnelle",
				fullstack_web_developer: "Développeur Web Fullstack",
				selected_projects: "Projets sélectionnés",
			},
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
