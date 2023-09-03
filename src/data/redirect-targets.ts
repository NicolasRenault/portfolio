export type RedirectTargets = {
	[url: string]: { target: string; text: string };
};

export const redirectTargets: RedirectTargets = {
	homepage: {
		target: "projects",
		text: "navigate.projects",
	},
	projects: {
		target: "",
		text: "navigate.homepage",
	},
	project: {
		target: "projects",
		text: "navigate.back_to_projects",
	},
};
