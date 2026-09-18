#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean DBD source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'skill-check', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['dbd-esp', 'dbd-esp'],
	['dbd-aimbot', 'dbd-aimbot'],
	['eac', 'eac'],
	['undetected-dbd-cheats', 'undetected-dbd-cheats'],
	['dbd-wallhack', 'dbd-wallhack'],
	['dbd-world-esp', 'dbd-world-esp'],
	['dbd-cheats-2026', 'dbd-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['dbdhack.org', 'dbdhack.org'],
	['trucos-dbd', 'trucos-dbd'],
	['triche-dbd', 'triche-dbd'],
	['dbd-cheats', 'dbd-cheats-cheats'],
	['cheats-dbd', 'cheats-dbd'],
	['trucchi-dbd', 'trucchi-dbd'],
	['cheaty-dbd', 'cheaty-dbd'],
	['chity-dbd', 'chity-dbd'],
	['chitov-dbd', 'chitov-dbd'],
	['chitiv-dbd', 'chitiv-dbd'],
	['cheatow-dbd', 'cheatow-dbd'],
	['hile-dbd', 'hile-dbd'],
	['dbd-hile', 'dbd-hile'],
	['dbd-esp-chity', 'dbd-esp-chity'],
	['dbd-aimbot-chity', 'dbd-aimbot-chity'],
	['unentdeckte-dbd-cheats', 'unentdeckte-dbd-cheats-cheats'],
	['cheats-dbd-indetectaveis', 'cheats-dbd-indetectaveis'],
	['trucchi-dbd-indetectabili', 'trucchi-dbd-indetectabili'],
	['niewykrywalne-cheats-dbd', 'niewykrywalne-cheats-dbd'],
	['nedecektiruemye-chity-dbd', 'nedecektiruemye-chity-dbd'],
	['tespit-edilemeyen-dbd-hileleri', 'tespit-edilemeyen-dbd-hileleri'],
	['nedecektovani-chity-dbd', 'nedecektovani-chity-dbd'],
	['cheats-dbd-nedetectabile', 'cheats-dbd-nedetectabile'],
	['basta-dbd-cheats', 'basta-dbd-cheats-cheats'],
	['eac-bypass-trucos-dbd', 'eac-bypass-trucos-dbd'],
	['eac-bypass-triche-dbd', 'eac-bypass-triche-dbd'],
	['eac-bypass-cheats-dbd', 'eac-bypass-cheats-dbd'],
	['eac-bypass-chity-dbd', 'eac-bypass-chity-dbd'],
	['eac-bypass-dbd', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich dbd-cheats-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/dbd-cheats-cheats-hero.webp',
	'dbd-esp': '/images/dbd-cheats-cheats-esp-wallhack.webp',
	'dbd-aimbot': '/images/dbd-cheats-cheats-aimbot-combat.webp',
	features: '/images/dbd-cheats-cheats-package.webp',
	pricing: '/images/dbd-cheats-cheats-cover.webp',
	setup: '/images/dbd-loadout-builder.webp',
	updates: '/images/dbd-header-art.webp',
	faq: '/images/dbd-team-fight.webp',
	support: '/images/dbd-cheats-cheats-package.webp',
	undetected: '/images/dbd-battle-royale-combat.webp',
	wallhack: '/images/dbd-cheats-cheats-esp-wallhack.webp',
	world-esp: '/images/dbd-player-esp.webp',
	'eac': '/images/dbd-reboot-van-fight.webp',
	'cheats-2026': '/images/dbd-cheats-cheats-hero.webp',
	privacy: '/images/dbd-cheats-cheats-aimbot-combat.webp',
	refund: '/images/dbd-cheats-cheats-cover.webp',
	terms: '/images/dbd-cheats-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'dbd-esp', 'dbd-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'world-esp', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'dbd-esp' | 'dbd-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'world-esp' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/exit gateFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
