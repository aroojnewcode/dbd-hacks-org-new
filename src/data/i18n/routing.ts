import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'dbd-esp'
	| 'dbd-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'world-esp'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'skill-check'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'dbd-esp': '/dbd-esp/',
	'dbd-aimbot': '/dbd-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-dbd-cheats/',
	wallhack: '/dbd-wallhack/',
	'world-esp': '/dbd-world-esp/',
	'eac': '/eac-bypass/',
	'cheats-2026': '/dbd-cheats-2026/',
	hacks: '/dbd-cheats/',
	'cheat-download': '/dbd-cheat-download/',
	'mod-menu': '/dbd-cheat-menu/',
	'skill-check': '/dbd-skill-check/',
	'best-cheats': '/best-dbd-cheats/',
	'aimbot-hack': '/dbd-aimbot-hack/',
	'esp-hack': '/dbd-esp-hack/',
	'unlock-all': '/dbd-cosmetic-unlocker/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'dbd-esp': {
		en: 'dbd-esp',
		es: 'trucos-dbd-esp',
		fr: 'triche-dbd-esp',
		de: 'dbd-esp-wallhack',
		pt: 'cheats-dbd-esp',
		it: 'trucchi-dbd-esp',
		nl: 'dbd-esp-wallhack',
		pl: 'cheaty-dbd-esp',
		ru: 'dbd-esp-chity',
		tr: 'dbd-esp-hile',
		ar: 'dbd-esp-wallhack',
		ja: 'dbd-esp-wallhack',
		ko: 'dbd-esp-wallhack',
		zh: 'dbd-esp-wallhack',
		hi: 'dbd-esp-wallhack',
		id: 'dbd-esp-wallhack',
		th: 'dbd-esp-wallhack',
		vi: 'dbd-esp-wallhack',
		uk: 'dbd-esp-chity',
		cs: 'dbd-esp-wallhack',
		ro: 'dbd-esp-wallhack',
		sv: 'dbd-esp-wallhack',
	},
	'dbd-aimbot': {
		en: 'dbd-aimbot',
		es: 'trucos-dbd-aimbot',
		fr: 'triche-dbd-aimbot',
		de: 'dbd-aimbot',
		pt: 'cheats-dbd-aimbot',
		it: 'trucchi-dbd-aimbot',
		nl: 'dbd-aimbot',
		pl: 'cheaty-dbd-aimbot',
		ru: 'dbd-aimbot-chity',
		tr: 'dbd-aimbot-hile',
		ar: 'dbd-aimbot',
		ja: 'dbd-aimbot',
		ko: 'dbd-aimbot',
		zh: 'dbd-aimbot',
		hi: 'dbd-aimbot',
		id: 'dbd-aimbot',
		th: 'dbd-aimbot',
		vi: 'dbd-aimbot',
		uk: 'dbd-aimbot-chity',
		cs: 'dbd-aimbot',
		ro: 'dbd-aimbot',
		sv: 'dbd-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-dbd',
		fr: 'fonctionnalites-triche-dbd',
		de: 'dbd-cheats-cheats-funktionen',
		pt: 'recursos-cheats-dbd',
		it: 'funzioni-trucchi-dbd',
		nl: 'dbd-cheats-cheats-functies',
		pl: 'funkcje-cheatow-dbd',
		ru: 'funkcii-chitov-dbd',
		tr: 'dbd-hile-ozellikleri',
		ar: 'dbd-cheats-cheats-features',
		ja: 'dbd-cheats-cheats-features',
		ko: 'dbd-cheats-cheats-features',
		zh: 'dbd-cheats-cheats-features',
		hi: 'dbd-cheats-cheats-features',
		id: 'dbd-cheats-cheats-features',
		th: 'dbd-cheats-cheats-features',
		vi: 'dbd-cheats-cheats-features',
		uk: 'funkcii-chitiv-dbd',
		cs: 'dbd-cheats-cheats-funkce',
		ro: 'functii-cheats-dbd',
		sv: 'dbd-cheats-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-dbd',
		fr: 'prix-triche-dbd',
		de: 'dbd-cheats-cheats-preise',
		pt: 'precos-cheats-dbd',
		it: 'prezzi-trucchi-dbd',
		nl: 'dbd-cheats-cheats-prijzen',
		pl: 'ceny-cheatow-dbd',
		ru: 'ceny-chitov-dbd',
		tr: 'dbd-hile-fiyatlari',
		ar: 'dbd-cheats-cheats-pricing',
		ja: 'dbd-cheats-cheats-pricing',
		ko: 'dbd-cheats-cheats-pricing',
		zh: 'dbd-cheats-cheats-pricing',
		hi: 'dbd-cheats-cheats-pricing',
		id: 'dbd-cheats-cheats-pricing',
		th: 'dbd-cheats-cheats-pricing',
		vi: 'dbd-cheats-cheats-pricing',
		uk: 'ciny-chitiv-dbd',
		cs: 'dbd-cheats-cheats-ceny',
		ro: 'preturi-cheats-dbd',
		sv: 'dbd-cheats-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-dbd',
		fr: 'installation-triche-dbd',
		de: 'dbd-cheats-cheats-installation',
		pt: 'instalacao-cheats-dbd',
		it: 'installazione-trucchi-dbd',
		nl: 'dbd-cheats-cheats-installatie',
		pl: 'instalacja-cheatow-dbd',
		ru: 'ustanovka-chitov-dbd',
		tr: 'dbd-hile-kurulum',
		ar: 'dbd-cheats-cheats-setup',
		ja: 'dbd-cheats-cheats-setup',
		ko: 'dbd-cheats-cheats-setup',
		zh: 'dbd-cheats-cheats-setup',
		hi: 'dbd-cheats-cheats-setup',
		id: 'dbd-cheats-cheats-setup',
		th: 'dbd-cheats-cheats-setup',
		vi: 'dbd-cheats-cheats-setup',
		uk: 'vstanovka-chitiv-dbd',
		cs: 'dbd-cheats-cheats-instalace',
		ro: 'instalare-cheats-dbd',
		sv: 'dbd-cheats-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-dbd',
		fr: 'mises-a-jour-triche-dbd',
		de: 'dbd-cheats-cheats-updates',
		pt: 'atualizacoes-cheats-dbd',
		it: 'aggiornamenti-trucchi-dbd',
		nl: 'dbd-cheats-cheats-updates',
		pl: 'aktualizacje-cheatow-dbd',
		ru: 'obnovleniya-chitov-dbd',
		tr: 'dbd-hile-guncellemeleri',
		ar: 'dbd-cheats-cheats-updates',
		ja: 'dbd-cheats-cheats-updates',
		ko: 'dbd-cheats-cheats-updates',
		zh: 'dbd-cheats-cheats-updates',
		hi: 'dbd-cheats-cheats-updates',
		id: 'dbd-cheats-cheats-updates',
		th: 'dbd-cheats-cheats-updates',
		vi: 'dbd-cheats-cheats-updates',
		uk: 'onovlennya-chitiv-dbd',
		cs: 'dbd-cheats-cheats-aktualizace',
		ro: 'actualizari-cheats-dbd',
		sv: 'dbd-cheats-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-dbd',
		fr: 'faq-triche-dbd',
		de: 'dbd-cheats-cheats-faq',
		pt: 'faq-cheats-dbd',
		it: 'faq-trucchi-dbd',
		nl: 'dbd-cheats-cheats-faq',
		pl: 'faq-cheatow-dbd',
		ru: 'faq-chitov-dbd',
		tr: 'dbd-hile-sss',
		ar: 'dbd-cheats-cheats-faq',
		ja: 'dbd-cheats-cheats-faq',
		ko: 'dbd-cheats-cheats-faq',
		zh: 'dbd-cheats-cheats-faq',
		hi: 'dbd-cheats-cheats-faq',
		id: 'dbd-cheats-cheats-faq',
		th: 'dbd-cheats-cheats-faq',
		vi: 'dbd-cheats-cheats-faq',
		uk: 'faq-chitiv-dbd',
		cs: 'dbd-cheats-cheats-faq',
		ro: 'faq-cheats-dbd',
		sv: 'dbd-cheats-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-dbd',
		fr: 'support-triche-dbd',
		de: 'dbd-cheats-cheats-support',
		pt: 'suporte-cheats-dbd',
		it: 'supporto-trucchi-dbd',
		nl: 'dbd-cheats-cheats-support',
		pl: 'wsparcie-cheatow-dbd',
		ru: 'podderzhka-chitov-dbd',
		tr: 'dbd-hile-destek',
		ar: 'dbd-cheats-cheats-support',
		ja: 'dbd-cheats-cheats-support',
		ko: 'dbd-cheats-cheats-support',
		zh: 'dbd-cheats-cheats-support',
		hi: 'dbd-cheats-cheats-support',
		id: 'dbd-cheats-cheats-support',
		th: 'dbd-cheats-cheats-support',
		vi: 'dbd-cheats-cheats-support',
		uk: 'pidtrymka-chitiv-dbd',
		cs: 'dbd-cheats-cheats-podpora',
		ro: 'suport-cheats-dbd',
		sv: 'dbd-cheats-cheats-support',
	},
	undetected: {
		en: 'undetected-dbd-cheats',
		es: 'trucos-dbd-indetectables',
		fr: 'triche-dbd-indetectable',
		de: 'unentdeckte-dbd-cheats-cheats',
		pt: 'cheats-dbd-indetectaveis',
		it: 'trucchi-dbd-indetectabili',
		nl: 'undetected-dbd-cheats',
		pl: 'niewykrywalne-cheats-dbd',
		ru: 'nedecektiruemye-chity-dbd',
		tr: 'tespit-edilemeyen-dbd-hileleri',
		ar: 'undetected-dbd-cheats',
		ja: 'undetected-dbd-cheats',
		ko: 'undetected-dbd-cheats',
		zh: 'undetected-dbd-cheats',
		hi: 'undetected-dbd-cheats',
		id: 'undetected-dbd-cheats',
		th: 'undetected-dbd-cheats',
		vi: 'undetected-dbd-cheats',
		uk: 'nedecektovani-chity-dbd',
		cs: 'undetected-dbd-cheats',
		ro: 'cheats-dbd-nedetectabile',
		sv: 'undetected-dbd-cheats',
	},
	wallhack: {
		en: 'dbd-wallhack',
		es: 'wallhack-trucos-dbd',
		fr: 'wallhack-triche-dbd',
		de: 'dbd-wallhack',
		pt: 'wallhack-cheats-dbd',
		it: 'wallhack-trucchi-dbd',
		nl: 'dbd-wallhack',
		pl: 'wallhack-cheatow-dbd',
		ru: 'wallhack-chity-dbd',
		tr: 'dbd-wallhack-hile',
		ar: 'dbd-wallhack',
		ja: 'dbd-wallhack',
		ko: 'dbd-wallhack',
		zh: 'dbd-wallhack',
		hi: 'dbd-wallhack',
		id: 'dbd-wallhack',
		th: 'dbd-wallhack',
		vi: 'dbd-wallhack',
		uk: 'wallhack-chity-dbd',
		cs: 'dbd-wallhack',
		ro: 'wallhack-cheats-dbd',
		sv: 'dbd-wallhack',
	},
	'world-esp': {
		en: 'dbd-world-esp',
		es: 'radar-hack-trucos-dbd',
		fr: 'radar-hack-triche-dbd',
		de: 'dbd-world-esp',
		pt: 'radar-hack-cheats-dbd',
		it: 'radar-hack-trucchi-dbd',
		nl: 'dbd-world-esp',
		pl: 'radar-hack-cheatow-dbd',
		ru: 'radar-hack-chity-dbd',
		tr: 'dbd-world-esp',
		ar: 'dbd-world-esp',
		ja: 'dbd-world-esp',
		ko: 'dbd-world-esp',
		zh: 'dbd-world-esp',
		hi: 'dbd-world-esp',
		id: 'dbd-world-esp',
		th: 'dbd-world-esp',
		vi: 'dbd-world-esp',
		uk: 'radar-hack-chity-dbd',
		cs: 'dbd-world-esp',
		ro: 'radar-hack-cheats-dbd',
		sv: 'dbd-world-esp',
	},
	'eac': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-cheats',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'dbd-cheats-2026',
		es: 'trucos-dbd-2026',
		fr: 'triche-dbd-2026',
		de: 'dbd-cheats-2026',
		pt: 'cheats-dbd-2026',
		it: 'trucchi-dbd-2026',
		nl: 'dbd-cheats-2026',
		pl: 'cheaty-dbd-2026',
		ru: 'chity-dbd-2026',
		tr: 'dbd-hileleri-2026',
		ar: 'dbd-cheats-2026',
		ja: 'dbd-cheats-2026',
		ko: 'dbd-cheats-2026',
		zh: 'dbd-cheats-2026',
		hi: 'dbd-cheats-2026',
		id: 'dbd-cheats-2026',
		th: 'dbd-cheats-2026',
		vi: 'dbd-cheats-2026',
		uk: 'chity-dbd-2026',
		cs: 'dbd-cheats-2026',
		ro: 'cheats-dbd-2026',
		sv: 'dbd-cheats-2026',
	},
	hacks: {
		en: 'dbd-cheats',
		es: 'hacks-trucos-dbd',
		fr: 'hacks-triche-dbd',
		de: 'dbd-cheats',
		pt: 'hacks-cheats-dbd',
		it: 'hacks-trucchi-dbd',
		nl: 'dbd-cheats',
		pl: 'hacks-cheatow-dbd',
		ru: 'haksy-chity-dbd',
		tr: 'dbd-hile-hacks',
		ar: 'dbd-cheats',
		ja: 'dbd-cheats',
		ko: 'dbd-cheats',
		zh: 'dbd-cheats',
		hi: 'dbd-cheats',
		id: 'dbd-cheats',
		th: 'dbd-cheats',
		vi: 'dbd-cheats',
		uk: 'haksy-chity-dbd',
		cs: 'dbd-cheats',
		ro: 'hacks-cheats-dbd',
		sv: 'dbd-cheats',
	},
	'cheat-download': {
		en: 'dbd-cheat-download',
		es: 'descarga-trucos-dbd',
		fr: 'telechargement-triche-dbd',
		de: 'dbd-cheat-download',
		pt: 'download-cheats-dbd',
		it: 'download-trucchi-dbd',
		nl: 'dbd-cheat-download',
		pl: 'pobieranie-cheatow-dbd',
		ru: 'skachat-chity-dbd',
		tr: 'dbd-hile-indir',
		ar: 'dbd-cheat-download',
		ja: 'dbd-cheat-download',
		ko: 'dbd-cheat-download',
		zh: 'dbd-cheat-download',
		hi: 'dbd-cheat-download',
		id: 'dbd-cheat-download',
		th: 'dbd-cheat-download',
		vi: 'dbd-cheat-download',
		uk: 'zavantazhennya-chitiv-dbd',
		cs: 'dbd-cheat-download',
		ro: 'descarcare-cheats-dbd',
		sv: 'dbd-cheat-download',
	},
	'mod-menu': {
		en: 'dbd-cheat-menu',
		es: 'menu-mod-trucos-dbd',
		fr: 'menu-mod-triche-dbd',
		de: 'dbd-cheat-menu',
		pt: 'menu-mod-cheats-dbd',
		it: 'menu-mod-trucchi-dbd',
		nl: 'dbd-cheat-menu',
		pl: 'menu-mod-cheatow-dbd',
		ru: 'mod-menu-chity-dbd',
		tr: 'dbd-cheat-menu',
		ar: 'dbd-cheat-menu',
		ja: 'dbd-cheat-menu',
		ko: 'dbd-cheat-menu',
		zh: 'dbd-cheat-menu',
		hi: 'dbd-cheat-menu',
		id: 'dbd-cheat-menu',
		th: 'dbd-cheat-menu',
		vi: 'dbd-cheat-menu',
		uk: 'mod-menu-chity-dbd',
		cs: 'dbd-cheat-menu',
		ro: 'meniu-mod-cheats-dbd',
		sv: 'dbd-cheat-menu',
	},
	'skill-check': {
		en: 'dbd-skill-check',
		es: 'soft-aim-trucos-dbd',
		fr: 'soft-aim-triche-dbd',
		de: 'dbd-skill-check',
		pt: 'soft-aim-cheats-dbd',
		it: 'soft-aim-trucchi-dbd',
		nl: 'dbd-skill-check',
		pl: 'soft-aim-cheatow-dbd',
		ru: 'soft-aim-chity-dbd',
		tr: 'dbd-skill-check',
		ar: 'dbd-skill-check',
		ja: 'dbd-skill-check',
		ko: 'dbd-skill-check',
		zh: 'dbd-skill-check',
		hi: 'dbd-skill-check',
		id: 'dbd-skill-check',
		th: 'dbd-skill-check',
		vi: 'dbd-skill-check',
		uk: 'soft-aim-chity-dbd',
		cs: 'dbd-skill-check',
		ro: 'soft-aim-cheats-dbd',
		sv: 'dbd-skill-check',
	},
	'best-cheats': {
		en: 'best-dbd-cheats',
		es: 'mejores-trucos-dbd',
		fr: 'meilleures-triches-dbd',
		de: 'beste-dbd-cheats-cheats',
		pt: 'melhores-cheats-dbd',
		it: 'migliori-trucchi-dbd',
		nl: 'beste-dbd-cheats-cheats',
		pl: 'najlepsze-cheats-dbd',
		ru: 'luchshie-chity-dbd',
		tr: 'en-iyi-dbd-hileleri',
		ar: 'best-dbd-cheats',
		ja: 'best-dbd-cheats',
		ko: 'best-dbd-cheats',
		zh: 'best-dbd-cheats',
		hi: 'best-dbd-cheats',
		id: 'best-dbd-cheats',
		th: 'best-dbd-cheats',
		vi: 'best-dbd-cheats',
		uk: 'naykrashchi-chity-dbd',
		cs: 'nejlepsi-dbd-cheats-cheats',
		ro: 'cele-mai-bune-cheats-dbd',
		sv: 'basta-dbd-cheats-cheats',
	},
	'aimbot-hack': {
		en: 'dbd-aimbot-hack',
		es: 'aimbot-hack-trucos-dbd',
		fr: 'aimbot-hack-triche-dbd',
		de: 'dbd-aimbot-hack',
		pt: 'aimbot-hack-cheats-dbd',
		it: 'aimbot-hack-trucchi-dbd',
		nl: 'dbd-aimbot-hack',
		pl: 'aimbot-hack-cheatow-dbd',
		ru: 'aimbot-hack-chity-dbd',
		tr: 'dbd-aimbot-hack',
		ar: 'dbd-aimbot-hack',
		ja: 'dbd-aimbot-hack',
		ko: 'dbd-aimbot-hack',
		zh: 'dbd-aimbot-hack',
		hi: 'dbd-aimbot-hack',
		id: 'dbd-aimbot-hack',
		th: 'dbd-aimbot-hack',
		vi: 'dbd-aimbot-hack',
		uk: 'aimbot-hack-chity-dbd',
		cs: 'dbd-aimbot-hack',
		ro: 'aimbot-hack-cheats-dbd',
		sv: 'dbd-aimbot-hack',
	},
	'esp-hack': {
		en: 'dbd-esp-hack',
		es: 'esp-hack-trucos-dbd',
		fr: 'esp-hack-triche-dbd',
		de: 'dbd-esp-hack',
		pt: 'esp-hack-cheats-dbd',
		it: 'esp-hack-trucchi-dbd',
		nl: 'dbd-esp-hack',
		pl: 'esp-hack-cheatow-dbd',
		ru: 'esp-hack-chity-dbd',
		tr: 'dbd-esp-hack',
		ar: 'dbd-esp-hack',
		ja: 'dbd-esp-hack',
		ko: 'dbd-esp-hack',
		zh: 'dbd-esp-hack',
		hi: 'dbd-esp-hack',
		id: 'dbd-esp-hack',
		th: 'dbd-esp-hack',
		vi: 'dbd-esp-hack',
		uk: 'esp-hack-chity-dbd',
		cs: 'dbd-esp-hack',
		ro: 'esp-hack-cheats-dbd',
		sv: 'dbd-esp-hack',
	},
	'unlock-all': {
		en: 'dbd-cosmetic-unlocker',
		es: 'unlock-all-trucos-dbd',
		fr: 'unlock-all-triche-dbd',
		de: 'dbd-cosmetic-unlocker',
		pt: 'unlock-all-cheats-dbd',
		it: 'unlock-all-trucchi-dbd',
		nl: 'dbd-cosmetic-unlocker',
		pl: 'unlock-all-cheatow-dbd',
		ru: 'unlock-all-chity-dbd',
		tr: 'dbd-cosmetic-unlocker',
		ar: 'dbd-cosmetic-unlocker',
		ja: 'dbd-cosmetic-unlocker',
		ko: 'dbd-cosmetic-unlocker',
		zh: 'dbd-cosmetic-unlocker',
		hi: 'dbd-cosmetic-unlocker',
		id: 'dbd-cosmetic-unlocker',
		th: 'dbd-cosmetic-unlocker',
		vi: 'dbd-cosmetic-unlocker',
		uk: 'unlock-all-chity-dbd',
		cs: 'dbd-cosmetic-unlocker',
		ro: 'unlock-all-cheats-dbd',
		sv: 'dbd-cosmetic-unlocker',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('dbd-aimbot', locale), pageId: 'dbd-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('dbd-esp', locale), pageId: 'dbd-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
