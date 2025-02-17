import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ["fr"],
	showDefaultLangCode: false,
	translations: {
		en: {
			metadata: {
				description:
					"Hi, My name is Nicolas Renault. I'm a Fullstack Web Developer with a preference for Backend.",
			},
			global: {
				application_developer: "Digital Innovation and Solution Developper",
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
				white: "White",
				black: "Black",
				bottom_page: "Bottom of the page",
				close_dialog: "Close dialog",
				copy_email: "Copy email",
			},
			language: {
				size: "Size",
				color: "Color",
				color_name: "Color name",
				color_theme: "Color theme",
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
				contact_me: "Contact me",
				github_profile: "GitHub profile",
				switch_language: "Switch language",
			},
			home: {
				hello: "Hi, I'm",
				me: "I'm a Web Developer based in France. I graduated with a Bachelor's Degree in web and mobile development.",
				technologies:
					"Mostly doing FullStack development, I have had a preference for backend technologies ever since I started learning programming.",
				motivations:
					"I'm always trying to optimize life in every aspect, which is why I enjoy building software applications that help people perform tasks more quickly and efficiently.",
				passions:
					"Outside work, I enjoy doing sports, building side projects, spending time with friends, and playing video games.",
				work: "I’m currently working at Trelleborg as an IT Developer and Software Administrator.",
				working_experiences: "Working experiences",
				fullstack_web_developer: "Fullstack Web Developer",
				selected_projects: "Selected projects",
				see_more_projects: "See more projects",
			},
			projects: {
				intro: "All the projects previewed below can be found on my",
				pinned_projects: "Pinned projects",
				all_projects: "All projects",
				school_projects: "School projects",
				contributions: "Contributions",
			},
			cheaty: {
				catch_phrase: "Extension for the web that feels illegal.",
				description:
					"Cheaty is a simple open-source web extension that allows you to do quick actions on HTML components without going into the inspector console.",
				hide: "Hide/Show HTML elements",
				password: "Hide/Show password",
				cheaty_website: "Cheaty's website",
				cheaty_github: "Cheaty's GitHub",
				cheaty_download: "Cheaty's download",
				cheaty_codesources: "Cheaty's code sources",
				action_mode: "Action mode",
				hide_action: "Hide action",
				hide_password: "Hide password",
				show_password: "Show password",
			},
			portfolio: {
				description: "My personal website build with Astro",
			},
			logo: {
				catch_phrase: "A collection of my logos. SVGs, WebComponent and more.",
				description:
					"All the resources are available from a CDN. This project is under the CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives) license.",
				the_logo: "The logo",
				explaination:
					"The acronym of my name, with the N and the R fused. Designed from my idea by ",
				webcomponent_description: "Easy to use, highly customizable and ready to go.",
				webcomponent_color_description:
					"By default, the component uses the currentColor from heritage. Or you can use the color option and pass all types of valid CSS colors.",
				webcomponent_color_theme_description:
					"You can also use the color theme to change the color of the logo.",
				webcomponent_animated_description:
					"Each independent part of the logo has a hover effect.",
				webcomponent_rainbow_description:
					"Hover it to go faster than Mario! ♫Tutututututu!!!♫",
			},
			404: {
				error: "404 error - Page not found",
				searching: "Searching for something ?",
				here_is_for_you: "Here is for you",
			},
			navigate: {
				homepage: "Back to homepage",
				projects: "See all projects",
				back_to_projects: "Back to projects",
			},
		},
		fr: {
			metadata: {
				description:
					"Salut, je m'appelle Nicolas Renault. Je suis un Développeur Web Fullstack avec une préférence pour le Backend.",
			},
			global: {
				application_developer: "Innovation Digital et Développeur de Solutions",
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
				white: "Blanc",
				black: "Noir",
				bottom_page: "Bas de la page",
				close_dialog: "Fermer la fenêtre",
				copy_email: "Copier le mail",
			},
			language: {
				size: "Taille",
				color: "Couleur",
				color_name: "Nom de la couleur",
				color_theme: "Thème de couleur",
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
				contact_me: "Me contacter",
				github_profile: "Profil GitHub",
				switch_language: "Changer de langue",
			},
			home: {
				hello: "Salut, je suis",
				me: "Je suis un Développeur Web basé en France. Je suis Diplômé d'un DUT informatique et d'une Licence professionnelle dans le développement web et mobile.",
				technologies:
					"Principalement orienté FullStack, j'ai une préférence pour les technologies Backend depuis que j'ai commencé à apprendre la programmation.",
				motivations:
					"J'essaie toujours d'optimiser la vie dans tous les aspects, c'est pourquoi j'aime développer des applications logicielles qui aident les gens à effectuer des tâches plus rapidement et plus efficacement.",
				passions:
					"En dehors du travail, j'aime faire du sport, réaliser des projets annexes, passer du temps avec des amis et jouer aux jeux vidéo.",
				work: "Je travaille actuellement chez Trelleborg en tant que Développeur informatique et Administrateur logiciel.",
				working_experiences: "Expériences",
				fullstack_web_developer: "Développeur Web Fullstack",
				selected_projects: "Projets sélectionnés",
				see_more_projects: "Voir plus de projets",
			},
			projects: {
				intro: "Tous les projets présentés ci-dessous peuvent être trouvés sur mon",
				pinned_projects: "Projets épinglés",
				all_projects: "Tous les projets",
				school_projects: "Projets scolaires",
				contributions: "Contributions",
			},
			cheaty: {
				catch_phrase: "Extention pour le web qui semble illégal.",
				description:
					"Cheaty est une extension web open-source qui vous permet de faire des actions rapides sur des composants HTML sans passer par la console d'inspecteur.",
				hide: "Cacher/Afficher des éléments HTML",
				password: "Cacher/Afficher les mots de passe",
				cheaty_website: "Site web de Cheaty",
				cheaty_github: "GitHub de Cheaty",
				cheaty_download: "Télécharger Cheaty",
				cheaty_codesources: "Code source de Cheaty",
				action_mode: "Mode d'action",
				hide_action: "Action de cacher",
				hide_password: "Cacher les mots de passe",
				show_password: "Afficher les mots de passe",
			},
			portfolio: {
				description: "Mon site personnel construit avec Astro",
			},
			logo: {
				catch_phrase: "Une collection de mes logos. SVG, WebComponent et plus.",
				description:
					"Toutes les ressources sont disponibles depuis un CDN. Ce projet est sous la licence CC BY-NC-ND (Creative Commons Attribution - Pas d’Utilisation Commerciale - Pas de Modification).",
				the_logo: "Le logo",
				explaination:
					"Acronyme de mon nom, avec le N et le R fusionnés. Conçu à partir de mon idée par ",
				webcomponent_description:
					"Facile à utiliser, hautement personnalisable et prêt à l'emploi.",
				webcomponent_color_description:
					"Par défaut, le composant utilise la currentColor grâce à de l'héritage. Ou vous pouvez utiliser l'option color et passer tous les types de couleurs CSS valides.",
				webcomponent_color_theme_description:
					"Vous pouvez également utiliser le thème de couleur pour changer la couleur du logo.",
				webcomponent_animated_description:
					"Chaque partie indépendante du logo a un effet au survol.",
				webcomponent_rainbow_description:
					"Survolez-le pour aller plus vite que Mario ! ♫Tutututututu !!!♫",
			},
			404: {
				error: "Erreur 404 - Page non trouvée",
				searching: "Vous cherchez quelque chose ?",
				here_is_for_you: "Voici pour vous",
			},
			navigate: {
				homepage: "Retour à l'accueil",
				projects: "Voir tous les projets",
				back_to_projects: "Retour aux projets",
			},
		},
	},
});
