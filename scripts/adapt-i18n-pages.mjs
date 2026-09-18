#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from DBD source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'skill-check', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['dbd-esp', 'dbd-esp'],
	['dbd-aimbot', 'dbd-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-dbd-cheats', 'undetected-dbd-cheats'],
	['dbd-wallhack', 'dbd-wallhack'],
	['dbd-world-esp', 'dbd-world-esp'],
	['dbd-cheats-2026', 'dbd-cheats-2026'],
	['dbd-cheats-cheats', 'dbd-cheats-cheats'],
	['dbd-cheats', 'dbd'],
	['Dead by Daylight', 'Dead by Daylight'],
	['Dead by Daylight', 'Dead by Daylight'],
	['DBD Hacks', 'DBD Hacks'],
	['DBD cheats', 'DBD cheats'],
	['DBD cheat', 'DBD cheat'],
	['DBD ESP', 'Dead by Daylight ESP'],
	['DBD Aimbot', 'Dead by Daylight Aimbot'],
	['DBD wallhack', 'Dead by Daylight wallhack'],
	['DBD radar', 'Dead by Daylight radar'],
	['DBD firefights', 'Dead by Daylight firefights'],
	['DBD combat', 'Dead by Daylight combat'],
	['DBD patches', 'Dead by Daylight patches'],
	['DBD updates', 'Dead by Daylight updates'],
	['DBD setup', 'Dead by Daylight setup'],
	['DBD license', 'Dead by Daylight license'],
	['DBD licenses', 'Dead by Daylight licenses'],
	['DBD sessions', 'Dead by Daylight sessions'],
	['in DBD', 'in Dead by Daylight'],
	['for DBD', 'for Dead by Daylight'],
	['DBD on', 'Dead by Daylight on'],
	['DBD or', 'Dead by Daylight or'],
	['DBD\'s', 'Dead by Daylight\'s'],
	['DBD ', 'Dead by Daylight '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['EAC maintenance', 'EAC maintenance'],
	['EAC bypass', 'EAC bypass'],
	['EAC Bypass', 'EAC Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@dbdhack.org', 'support@dbdhack.org'],
	['The Fog, MacMillan Estate, and Autohaven Wreckers', 'The Fog, MacMillan Estate, and Autohaven Wreckers'],
	['Autohaven Wreckers, The MacMillan Estate and Streets of DBD', 'Autohaven Wreckers, The MacMillan Estate and Streets of DBD'],
	['chase escapes', 'chase escapes'],
	['chase escape', 'chase escape'],
	['trial rounds', 'trial rounds'],
	['exit gate', 'exit gate'],
	['Survivors', 'players'],
	['operator', 'player'],
	['Survivors', 'Players'],
	['Operator', 'Player'],
	['exit gate timer', 'exit gate timer'],
	['Survivor and Killer sides', 'Survivor and Killer sides'],
	['Survivor and Killer sides', 'Survivor and Killer sides'],
	['Survivor & Killer', 'Survivor & Killer'],
	['bloodpoint gains', 'bloodpoint gains'],
	['bloodpoint gains', 'bloodpoint gains'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Dead by Daylight combat pace'],
	['COD', 'Dead by Daylight'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	world-esp: 'world esp',
	aimbot: 'Aimbot',
	product: 'DBD Hacks',
	game: 'Dead by Daylight',
	checkout: '',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'The Fog, MacMillan Estate, and Autohaven Wreckers'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
