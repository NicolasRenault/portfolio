type DefaultLangCode = "en"
type SupportedLangCode = "fr"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/project/cheaty-webextension" | "/project/logo" | "/404" | "/" | "/projects" 
type RouteParams = {"/project/cheaty-webextension": undefined; "/project/logo": undefined; "/404": undefined; "/": undefined; "/projects": undefined; }
type TranslationPath = "404.error" | "404.searching" | "404.here_is_for_you" | "metadata.description" | "global.application_developer" | "global.block_release_training" | "global.present" | "global.learn_more" | "global.see_more" | "global.see_on_github" | "global.see_codesources" | "global.website" | "global.download" | "global.license" | "global.light" | "global.dark" | "global.white" | "global.black" | "global.bottom_page" | "global.close_dialog" | "global.copy_email" | "language.size" | "language.color" | "language.color_name" | "language.color_theme" | "language.hexadecimal" | "language.animations" | "language.animated" | "language.rainbow" | "navbar.homepage" | "navbar.projects" | "navbar.resume" | "navbar.contact" | "navbar.contact_me" | "navbar.github_profile" | "navbar.switch_language" | "home.hello" | "home.me" | "home.technologies" | "home.motivations" | "home.passions" | "home.work" | "home.working_experiences" | "home.fullstack_web_developer" | "home.selected_projects" | "home.see_more_projects" | "projects.intro" | "projects.pinned_projects" | "projects.all_projects" | "projects.school_projects" | "projects.contributions" | "cheaty.catch_phrase" | "cheaty.description" | "cheaty.hide" | "cheaty.password" | "cheaty.cheaty_website" | "cheaty.cheaty_github" | "cheaty.cheaty_download" | "cheaty.cheaty_codesources" | "cheaty.action_mode" | "cheaty.hide_action" | "cheaty.hide_password" | "cheaty.show_password" | "portfolio.description" | "logo.catch_phrase" | "logo.description" | "logo.the_logo" | "logo.explaination" | "logo.webcomponent_description" | "logo.webcomponent_color_description" | "logo.webcomponent_color_theme_description" | "logo.webcomponent_animated_description" | "logo.webcomponent_rainbow_description" | "navigate.homepage" | "navigate.projects" | "navigate.back_to_projects"
type TranslationOptions = { "404.error": {} | undefined; "404.searching": {} | undefined; "404.here_is_for_you": {} | undefined; "metadata.description": {} | undefined; "global.application_developer": {} | undefined; "global.block_release_training": {} | undefined; "global.present": {} | undefined; "global.learn_more": {} | undefined; "global.see_more": {} | undefined; "global.see_on_github": {} | undefined; "global.see_codesources": {} | undefined; "global.website": {} | undefined; "global.download": {} | undefined; "global.license": {} | undefined; "global.light": {} | undefined; "global.dark": {} | undefined; "global.white": {} | undefined; "global.black": {} | undefined; "global.bottom_page": {} | undefined; "global.close_dialog": {} | undefined; "global.copy_email": {} | undefined; "language.size": {} | undefined; "language.color": {} | undefined; "language.color_name": {} | undefined; "language.color_theme": {} | undefined; "language.hexadecimal": {} | undefined; "language.animations": {} | undefined; "language.animated": {} | undefined; "language.rainbow": {} | undefined; "navbar.homepage": {} | undefined; "navbar.projects": {} | undefined; "navbar.resume": {} | undefined; "navbar.contact": {} | undefined; "navbar.contact_me": {} | undefined; "navbar.github_profile": {} | undefined; "navbar.switch_language": {} | undefined; "home.hello": {} | undefined; "home.me": {} | undefined; "home.technologies": {} | undefined; "home.motivations": {} | undefined; "home.passions": {} | undefined; "home.work": {} | undefined; "home.working_experiences": {} | undefined; "home.fullstack_web_developer": {} | undefined; "home.selected_projects": {} | undefined; "home.see_more_projects": {} | undefined; "projects.intro": {} | undefined; "projects.pinned_projects": {} | undefined; "projects.all_projects": {} | undefined; "projects.school_projects": {} | undefined; "projects.contributions": {} | undefined; "cheaty.catch_phrase": {} | undefined; "cheaty.description": {} | undefined; "cheaty.hide": {} | undefined; "cheaty.password": {} | undefined; "cheaty.cheaty_website": {} | undefined; "cheaty.cheaty_github": {} | undefined; "cheaty.cheaty_download": {} | undefined; "cheaty.cheaty_codesources": {} | undefined; "cheaty.action_mode": {} | undefined; "cheaty.hide_action": {} | undefined; "cheaty.hide_password": {} | undefined; "cheaty.show_password": {} | undefined; "portfolio.description": {} | undefined; "logo.catch_phrase": {} | undefined; "logo.description": {} | undefined; "logo.the_logo": {} | undefined; "logo.explaination": {} | undefined; "logo.webcomponent_description": {} | undefined; "logo.webcomponent_color_description": {} | undefined; "logo.webcomponent_color_theme_description": {} | undefined; "logo.webcomponent_animated_description": {} | undefined; "logo.webcomponent_rainbow_description": {} | undefined; "navigate.homepage": {} | undefined; "navigate.projects": {} | undefined; "navigate.back_to_projects": {} | undefined; }

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
