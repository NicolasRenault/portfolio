/**
 * Generate a liste of all github project group by year of creation.
 * Heavily inspired by https://github.com/kevinzunigacuellar/web.
 */

import { writeFile } from "node:fs/promises";
import { Octokit } from "@octokit/core";

//Import JSON file
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const staticData = require("./project-static-data.json");

interface GQLContributionResponse {
	viewer: {
		repositoriesContributedTo: {
			nodes: Repo[];
		};
	};
}

interface GQLProjectResponse {
	viewer: {
		repositories: {
			nodes: Repo[];
		};
	};
}

interface Repo {
	name: string;
	nameWithOwner: string;
	description: string;
	url: string;
	createdAt: Date;
	languages: {
		nodes: Language[];
	};
}

interface Language {
	name: string;
}

interface Project {
	name: string;
	description: string;
	url: string;
	createdAt: Date;
	languages: string[];
	year?: number;
	icon?: string;
	pinned?: boolean;
}

interface StaticOptions {
	hide?: boolean;
	year?: string;
	icon?: string;
	pinned?: boolean;
}

/**
 * Query to get all the repositories contributed to
 */
const contributionQuery = `query {
        viewer {
            repositoriesContributedTo(
            first: 100
	    orderBy: {field: STARGAZERS, direction: DESC}
            contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
        ) {
            nodes {
                name
                nameWithOwner
                description
                url
                languages(first: 4, orderBy: {field: SIZE, direction: DESC}) {
                    nodes {
                        name
                    }
                }
            }
        }
    }
}`;

/**
 * Query to get all the authored repositories
 */
const projectQuery = `query {
        viewer {
            repositories(
            first: 100
            orderBy: {field: CREATED_AT, direction: DESC}
        ) {
            nodes {
                name
                nameWithOwner
                description
                url
                createdAt
                languages(first: 4, orderBy: {field: SIZE, direction: DESC}) {
                    nodes {
                        name
                    }
                }
            }
        }
    }
}`;

const GITHUB_USERNAME = "NicolasRenault";

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
});

/**
 * Send requests with octokit
 */
const contributionResponse = await octokit.graphql(contributionQuery, {
	login: GITHUB_USERNAME,
});

const projectResponse = await octokit.graphql(projectQuery, {
	login: GITHUB_USERNAME,
});

/**
 * Handle contribution query response
 */
let contributions: Map<string, Project> = new Map<string, Project>();

(contributionResponse as GQLContributionResponse).viewer.repositoriesContributedTo.nodes.forEach(
	(repo) => {
		contributions.set(repo.name, {
			name: repo.nameWithOwner,
			url: repo.url,
			description: repo.description,
			createdAt: repo.createdAt,
			languages: repo.languages.nodes.map((language) => language.name),
		});
	}
);

/**
 * Handle authored project response
 * Build a map with year as key and an array of projects as value
 */
let allProjects: Map<number, Project[]> = new Map<number, Project[]>();

(projectResponse as GQLProjectResponse).viewer.repositories.nodes.forEach((repo) => {
	const contributionProject = contributions.get(repo.name);
	const isContribution = contributionProject !== undefined;
	const projectStaticData: StaticOptions = staticData[repo.name as keyof typeof staticData];
	const hide = projectStaticData?.hide ?? false;

	if (!hide) {
		const year = parseInt(
			projectStaticData?.year ?? new Date(repo.createdAt).getFullYear().toString()
		);

		const projectData: Project = {
			name: isContribution ? contributionProject.name : repo.name,
			description: repo.description,
			url: isContribution ? contributionProject.url : repo.url,
			createdAt: repo.createdAt,
			languages: repo.languages.nodes.map((language) => language.name),
			year: year,
			icon: projectStaticData?.icon,
			pinned: projectStaticData?.pinned ?? false,
		};
		let yearProjects = allProjects.get(year);

		yearProjects?.push(projectData);

		allProjects.set(year, yearProjects ?? [projectData]);
	}

	//if (isContribution) {
	//	contributions.delete(repo.name);
	//}
});

try {
	await writeFile(
		"./src/data/contributions.json",
		JSON.stringify(contributions, null, 2)
	);
	console.log("Contribution list generated");
} catch (error) {
	console.error(error);
}

try {
	await writeFile(
		"./src/data/projects.json",
		JSON.stringify(Object.fromEntries(allProjects), null, 2)
	);
	console.log("Project list generated");
} catch (error) {
	console.error(error);
}
