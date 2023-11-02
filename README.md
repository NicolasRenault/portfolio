[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Netlify Status](https://api.netlify.com/api/v1/badges/15bf0891-f6f1-4d4c-af64-c293373e5fb1/deploy-status)](https://app.netlify.com/sites/preeminent-taffy-43c8eb/deploys)

## Welcome!

This is my portfolio built with Astro. Feel free to visit it at https://nicolasrenault.com!

This project is under the MIT Licence. Feel free to take inspiration but remember this is a <ins>personal</ins> website so try not to copy past the texts in it. You don't want to talk about me on your website.

Otherwise here are some details about the project.

## Astro v3

The project is using [Astro 3.0.7](https://docs.astro.build/en/getting-started/).

## Projects CI/CD

All the projects you find in the [/projects](https://nicolasrenault.com/projects) are from two JSON files on [/src/data](https://github.com/NicolasRenault/portfolio/tree/main/src/data).

-   [projects.json](https://github.com/NicolasRenault/portfolio/blob/main/src/data/projects.json): A list of almost all my projects from GitHub (name, description, url, createdAt, languages, year, pinned?).

-   [contributions.json](https://github.com/NicolasRenault/portfolio/blob/main/src/data/contributions.json): The list of all the projects I have contributed to by commit, issue, and pull request.

Those two files are dynamically generated by a CI/CD called [Generate project list](https://github.com/NicolasRenault/portfolio/actions/workflows/generate-project-list.yml) running the ts script [generate-project-list.ts](https://github.com/NicolasRenault/portfolio/blob/main/scripts/generate-project-list.ts) scheduled once a month.

The script runs two GraphQL queries to GitHub APIs to get data. It uses [project-static-data.json](https://github.com/NicolasRenault/portfolio/blob/main/scripts/project-static-data.json) to sort projects that I want to hide, change the year of creation, and add info like an icon or a "pinned" boolean. It then creates the two files and commits them and opens a new PR.

This is heavily inspired by https://github.com/kevinzunigacuellar/web.

## astro-i18n

The website is fully translated using the [astro-i18n](https://github.com/Alexandre-Fernandez/astro-i18n) library.

Because of a bug ([#36](https://github.com/Alexandre-Fernandez/astro-i18n/issues/36)), I had to edit my package.json to make it work. [See fix](https://github.com/Alexandre-Fernandez/astro-i18n/issues/36#issuecomment-1567869668).

## Projects custom translations

Since the project data are dynamically generated I have created my own translation implementation just to translate it, based on [astro-i18n](https://github.com/Alexandre-Fernandez/astro-i18n).

I have created a method in [utils.ts](https://github.com/NicolasRenault/portfolio/blob/main/src/utils.ts) called `getTranslatedDescription()` that gets the translation in [project-descriptions-translated.ts](https://github.com/NicolasRenault/portfolio/blob/main/src/data/project-descriptions-translated.ts).

## Navigate on scroll Footer

The [Footer component](https://github.com/NicolasRenault/portfolio/blob/main/src/components/Footer.astro) has a special purpose to change the page when scrolling to the end of the file.

Mapping is made in [redirect-targets.ts](https://github.com/NicolasRenault/portfolio/blob/main/src/data/redirect-targets.ts) file and using a key (source), target, and text in [astro-i18n](https://github.com/Alexandre-Fernandez/astro-i18n) format.

In the pages, the key is defined directly on the [MainLayout](https://github.com/NicolasRenault/portfolio/blob/main/src/layouts/MainLayout.astro) and passed to the [Footer component](https://github.com/NicolasRenault/portfolio/blob/main/src/components/Footer.astro).

## License

[MIT](https://github.com/NicolasRenault/portfolio/blob/main/LICENCE) © [Nicolas Renault](https://github.com/NicolasRenault)
