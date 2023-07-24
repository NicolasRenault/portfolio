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
				see_on_github: "See on GitHub",
				see_codesources: "See code sources",
				website: "Website",
				download: "Download",
				license: "License",
				light: "Light theme",
				dark: "Dark theme",
			},
			language: {
				size: "Size",
				color: "Color",
				color_name: "Color name",
				hexadecimal: "Hexadecimal",
				animations: "Animations",
				animated: "Animated",
				rainbow: "Rainbow",
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
				catch_phrase: "Extension for the web that feels illegal.",
				description:
					"Cheaty is a simple open-source web extension that allows you to do quick actions on HTML components without going into the inspector console.",
				hide: "Hide/Show HTML elements",
				password: "Hide/Show password",
			},
			portfolio: {
				description: "My personal website build with Astro",
			},
			logo: {
				catch_phrase: "A collection of my logos. SVGs, WebComponent and more.",
				description:
					"All the resources are available from a CDN. This project is under the CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives) license.",
				webcomponent_description: "Easy to use, highly customizable and ready to go.",
				webcomponent_color_description:
					"By default, the component uses the currentColor from heritage. Or you can use the color option and pass all types of valid CSS colors.",
				webcomponent_animated_description:
					"Each independent part of the logo has a hover effect.",
				webcomponent_rainbow_description: "Hover it to go faster than Mario!",
			},
			404: {
				error: "404 error - Page not found",
				searching: "Searching for something ?",
				here_is_for_you: "Here is for you",
			},
		},
		fr: {
			global: {
				IT_developer: "Développeur informatique",
				block_release_training: "Formation en alternance",
				present: "Aujourd'hui",
				learn_more: "En savoir plus",
				see_more: "Voir plus",
				see_on_github: "Voir sur GitHub",
				see_codesources: "Voir le code source",
				website: "Site web",
				download: "Télécharger",
				license: "Licence",
				light: "Thème clair",
				dark: "Thème sombre",
			},
			language: {
				size: "Taille",
				color: "Couleur",
				color_name: "Nom de la couleur",
				hexadecimal: "Hexadécimal",
				animations: "Animations",
				animated: "Animated (Animé)",
				rainbow: "Rainbow (Arc-en-ciel)",
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
				catch_phrase: "Extention pour le web qui semble illégal.",
				description:
					"Cheaty est une extension web open-source qui vous permet de faire des actions rapides sur des composants HTML sans passer par la console d'inspecteur.",
				hide: "Cacher/Afficher des éléments HTML",
				password: "Cacher/Afficher les mots de passe",
			},
			portfolio: {
				description: "Mon site personnel construit avec Astro",
			},
			logo: {
				catch_phrase: "Une collection de mes logos. SVG, WebComponent et plus.",
				description:
					"Toutes les ressources sont disponibles depuis un CDN. Ce projet est sous la licence CC BY-NC-ND (Creative Commons Attribution - Pas d’Utilisation Commerciale - Pas de Modification).",
				webcomponent_description:
					"Facile à utiliser, hautement personnalisable et prêt à l'emploi.",
				webcomponent_color_description:
					"Par défaut, le composant utilise la currentColor grâce à de l'héritage. Ou vous pouvez utiliser l'option color et passer tous les types de couleurs CSS valides.",
				webcomponent_animated_description:
					"Chaque partie indépendante du logo a un effet au survol.",
				webcomponent_rainbow_description: "Survolez-le pour aller plus vite que Mario !",
			},
			404: {
				error: "Erreur 404 - Page non trouvée",
				searching: "Vous cherchez quelque chose ?",
				here_is_for_you: "Voici pour vous",
			},
		},
	},
});
