import { defineConfig, fontProviders  } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	scopedStyleStrategy: "class",
	build: {
		inlineStylesheets: "never",
	},
	site: "https://nicolasrenault.com",
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: "SpaceGrotesk-Regular",
			cssVariable: "--font-spacegrotesk",
			options: {
				variants: [
					{
						weight: 400,
						style: "oblique",
						src: ["./src/assets/fonts/SpaceGrotesk-Regular.woff2"],
					}
				]
			}
		},
		{
			provider: fontProviders.local(),
			name: "Inter_18pt-Regular",
			cssVariable: "--font-inter",
			options: {
				variants: [
					{
						weight: 400,
						style: "oblique",
						src: ["./src/assets/fonts/Inter_18pt-Regular.woff2"],
					}
				]
			}
		},
	]
});
