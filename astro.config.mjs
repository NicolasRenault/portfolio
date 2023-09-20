import i18n from "astro-i18n";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [i18n()],
	scopedStyleStrategy: "class",
	build: {
		inlineStylesheets: "never",
	},
	site: "https://www.dev.portfolio.nicolasrenault.com",
	// site: "https://www.nicolasrenault.com", //TODO: change to production
});
