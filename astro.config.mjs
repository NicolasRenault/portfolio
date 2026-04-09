import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	scopedStyleStrategy: "class",
	build: {
		inlineStylesheets: "never",
	},
	site: "https://www.nicolasrenault.com",
	vite: {
		plugins: [tailwindcss()],
	},
});
