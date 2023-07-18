type DefaultLangCode = "en"
type SupportedLangCode = "fr"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/project/cheaty-webextension" | "/project/logo" | "/" | "/projects" | "/resume" 
type RouteParams = {"/project/cheaty-webextension": undefined; "/project/logo": undefined; "/": undefined; "/projects": undefined; "/resume": undefined; }
type TranslationPath = "global.IT_developer" | "global.block_release_training" | "global.present" | "global.learn_more" | "global.see_more" | "global.see_on_github" | "global.see_codesources" | "global.website" | "global.download" | "global.license" | "global.light" | "global.dark" | "language.size" | "language.color" | "language.color_name" | "language.hexadecimal" | "language.animations" | "language.animated" | "language.rainbow" | "navbar.homepage" | "navbar.projects" | "navbar.resume" | "navbar.contact" | "home.hello" | "home.intro_1" | "home.intro_2" | "home.work" | "home.passions" | "home.working_experience" | "home.fullstack_web_developer" | "home.selected_projects" | "cheaty.catch_phrase" | "cheaty.description" | "cheaty.hide" | "cheaty.password" | "portfolio.description" | "logo.catch_phrase" | "logo.description" | "logo.webcomponent_description" | "logo.webcomponent_color_description" | "logo.webcomponent_animated_description" | "logo.webcomponent_rainbow_description"
type TranslationOptions = { "global.IT_developer": {} | undefined; "global.block_release_training": {} | undefined; "global.present": {} | undefined; "global.learn_more": {} | undefined; "global.see_more": {} | undefined; "global.see_on_github": {} | undefined; "global.see_codesources": {} | undefined; "global.website": {} | undefined; "global.download": {} | undefined; "global.license": {} | undefined; "global.light": {} | undefined; "global.dark": {} | undefined; "language.size": {} | undefined; "language.color": {} | undefined; "language.color_name": {} | undefined; "language.hexadecimal": {} | undefined; "language.animations": {} | undefined; "language.animated": {} | undefined; "language.rainbow": {} | undefined; "navbar.homepage": {} | undefined; "navbar.projects": {} | undefined; "navbar.resume": {} | undefined; "navbar.contact": {} | undefined; "home.hello": {} | undefined; "home.intro_1": {} | undefined; "home.intro_2": {} | undefined; "home.work": {} | undefined; "home.passions": {} | undefined; "home.working_experience": {} | undefined; "home.fullstack_web_developer": {} | undefined; "home.selected_projects": {} | undefined; "cheaty.catch_phrase": {} | undefined; "cheaty.description": {} | undefined; "cheaty.hide": {} | undefined; "cheaty.password": {} | undefined; "portfolio.description": {} | undefined; "logo.catch_phrase": {} | undefined; "logo.description": {} | undefined; "logo.webcomponent_description": {} | undefined; "logo.webcomponent_color_description": {} | undefined; "logo.webcomponent_animated_description": {} | undefined; "logo.webcomponent_rainbow_description": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
