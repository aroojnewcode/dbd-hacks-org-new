#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['DBD Hacks', 'DBD Hacks'],
	['DBD cheats', 'DBD cheats'],
	['DBD Hacks', 'DBD Hacks'],
	['Dead by Daylight', 'Dead by Daylight'],
	['Dead by Daylight', 'Dead by Daylight'],
	['Call of Duty', 'Dead by Daylight'],
	['DBD PC', 'Dead by Daylight PC'],
	['for DBD', 'for Dead by Daylight'],
	['DBD ', 'Dead by Daylight '],
	['dbd ', 'dbd '],
	['EAC maintenance', 'EAC maintenance'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['operatorEsp', 'playerEsp'],
	['exit gateFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['Survivors', 'players'],
	['operator', 'player'],
	['Survivors', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['killer-side', 'killer-side'],
	['exit gate', 'exit gate'],
	['dbdhack.org', 'dbdhack.org'],
	['Trucos DBD', 'Trucos Dead by Daylight'],
	['Triches DBD', 'Triches Dead by Daylight'],
	['Cheats DBD', 'Cheats Dead by Daylight'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en eac key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\teac: \{/, "\t'eac': {");
pagesEn = pagesEn.replace(/Dead by Daylight DBD/g, 'Dead by Daylight');
pagesEn = pagesEn.replace(/for Dead by Daylight DBD/g, 'for Dead by Daylight');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'eac'/g, "'eac'");
pagesI18n = pagesI18n.replace(/eac:/g, "'eac':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
