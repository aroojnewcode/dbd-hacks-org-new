/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'dbd-esp', 'dbd-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'world-esp', 'eac',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'skill-check', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

export { HERO_IMAGES } from './hero-images.mjs';

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; teamFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'dbd-esp' | 'dbd-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'world-esp' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'skill-check' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Remove  from meta title/description strings only. */
export function stripFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via \.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en \.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout über \.?/gi, '.')
		.replace(/\s*with  checkout\.?/gi, '.')
		.replace(/\s*via  checkout\.?/gi, '.')
		.replace(/\s*Checkout via \.?/gi, '')
		.replace(/\s* checkout,?\s*/gi, ' ')
		.replace(/\s* delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and  delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant  Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on /g, 'Buy DBD Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision:
		'<a href="https://deadbydaylight.com/" target="_blank" rel="noopener noreferrer">Dead by Daylight</a>',
	dbd:
		'<a href="https://deadbydaylight.com/" target="_blank" rel="noopener noreferrer">Dead by Daylight</a>',
	status:
		'<a href="https://support.deadbydaylight.com/hc/" target="_blank" rel="noopener noreferrer">Dead by Daylight Support</a>',
	eac:
		'<a href="https://www.eac.com/" target="_blank" rel="noopener noreferrer">Easy Anti-Cheat</a>',
};
