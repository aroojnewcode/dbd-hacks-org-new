/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'DBD Hacks',
	/** Short product label if needed */
	shortName: 'DBD',
	/** Canonical origin — no trailing slash */
	url: 'https://dbdhacks.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@dbdhacks.net',
	checkoutUrl: 'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fdbd',

	/** Game this template instance targets */
	game: 'Dead by Daylight',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/dbd-cheats-logo.webp',
	logoRaster: '/images/dbd-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'DBD Hacks logo',
	defaultOgImage: '/images/dbd-cheats-hero-1920w.webp',
	heroImage: '/images/dbd-cheats-hero-3840w.webp',

	plans: [
		{ id: 'monthly', label: '31 Days', price: 35, duration: 'P31D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#7c3aed',
		bg: '#05050b',
		soft: '#a78bfa',
		deep: '#5b21b6',
		hover: '#8b5cf6',
		panel: '#0a0a12',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'dead by daylight cheats',
		list: [
			'dead by daylight cheats',
			'dead by daylight cheat',
			'dbd cheats',
			'dbd esp',
			'dbd aimbot',
			'dbd wallhack',
			'dbd hacks',
			'undetected dead by daylight cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'DBD Hacks | Dead by Daylight Cheats PC 2026',
		homeDescription:
			'Official DBD Hacks site for Windows PC. Dead by Daylight cheats with ESP, aimbot, wallhack, skill check helper, and live EAC status — instant delivery.',
		featuresTitle: '{game} Cheat Features | {brand}',
		featuresDescription:
			'Full {game} cheat feature list for Windows PC — Survivor ESP, Killer ESP, World ESP, aimbot, skill check helper, stream proof, and EAC updates.',
		storeTitle: '{game} Cheats Pricing | {brand}',
		storeDescription:
			'31-day and lifetime Dead by Daylight cheat plans for Windows PC. Same ESP, aimbot, and wallhack on every plan. Instant digital delivery.',
		statusTitle: '{game} Cheat Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue on Windows PC.',
		previewTitle: 'Dead by Daylight Cheats | Undetected ESP & Aimbot',
		previewDescription:
			'Buy undetected Dead by Daylight cheats for Windows PC. Private DBD cheat with ESP, aimbot, wallhack, auto skill check, and EAC maintenance.',
		setupTitle: '{game} Cheat Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Step-by-step Dead by Daylight cheat loader setup before your first trial.',
		supportTitle: '{game} Cheat Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help.',
		faqTitle: '{game} Cheats FAQ | {brand}',
		faqDescription:
			'Answers about {brand} — delivery, setup, {antiCheat} updates, stream proof, HWID spoofer, cosmetic unlocker, and refunds.',
		reviewsTitle: '{brand} Reviews | DBD Cheat Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, aimbot, skill check, and EAC patch updates for Dead by Daylight on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides for {game} — perk meta, ESP tuning, aimbot settings, and {antiCheat} update notes for Windows PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, wallhack & skill check for PC',
		summary:
			'{brand} is a private {game} cheat for Windows PC. Survivor ESP, Killer ESP, World ESP, aimbot, auto skill check, and {antiCheat} maintenance after patches.',
		heroLede: 'Undetected Dead by Daylight cheats — ESP, aimbot, wallhack, and skill check helper on Windows PC.',
		blogLabel: 'DBD Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one Dead by Daylight cheat license for Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro:
			'{brand} for Dead by Daylight — Survivor ESP, Killer ESP, World ESP, aimbot, auto skill check, and EAC rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, aimbot, skill check, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Aimbot',
		chipRadar: 'World ESP',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	sitemap: {
		contentLastmod: '2026-09-15',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/dbd-screenshot-mod-menu.webp',
				title: 'DBD Hacks mod menu',
				caption: 'In-match menu for Survivor, Killer, ESP, and exploits on Windows PC',
			},
			{
				src: '/images/dbd-screenshot-esp-neon.webp',
				title: 'Dead by Daylight ESP overlay',
				caption: 'Survivor ESP boxes, distance tags, and pallet markers in trial',
			},
			{
				src: '/images/dbd-screenshot-gameplay.webp',
				title: 'DBD Hacks gameplay view',
				caption: 'Survivor trial with ESP, vault markers, and perk readouts',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
