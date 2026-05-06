export type RedirectTargets = {
	[url: string]: { target: string; text_EN: string; text_FR: string };
};

export const redirectTargets: RedirectTargets = {
	homepage: {
		target: "main-projects",
		text_EN: "See my main projects",
		text_FR: "Voir mes principaux projets",
	},
	"main-projects": {
		target: "ai-usages",
		text_EN: "How I use AI?",
		text_FR: "Comment j'utilise l'IA ?",
	},
	"ai-usages": {
		target: "rick-roll",
		text_EN: "The purpose",
		text_FR: "L'objectif",
	},
	"rick-roll": {
		target: "homepage",
		text_EN: "Go back to homepage",
		text_FR: "Retourner à l'acceuil",
	},
};