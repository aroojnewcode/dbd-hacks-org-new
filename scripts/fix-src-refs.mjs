#!/usr/bin/env node
/** Final pass: fix remaining DBD references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'skill-check', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['dbdImages', 'dbdImages'],
	["from '../data/dbd'", "from '../data/dbd'"],
	["from './dbd'", "from './dbd'"],
	['/undetected-dbd-cheats/', '/undetected-dbd-cheats/'],
	['/dbd-wallhack/', '/dbd-wallhack/'],
	['/dbd-world-esp/', '/dbd-world-esp/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/dbd-cheats-2026/', '/dbd-cheats-2026/'],
	['/dbd-aimbot/', '/dbd-aimbot/'],
	['/dbd-esp/', '/dbd-esp/'],
	['/dbd-cheats/', '/dbd-esp/'],
	['DBD Hacks', 'DBD Hacks'],
	['DBD cheats', 'DBD cheats'],
	['DBD wallhack', 'Dead by Daylight wallhack'],
	['DBD radar', 'Dead by Daylight radar'],
	['DBD Aimbot', 'Dead by Daylight Aimbot'],
	['DBD ESP', 'Dead by Daylight ESP'],
	['Dead by Daylight', 'Dead by Daylight'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['dbdhack.org', 'dbdhack.org'],
	['operatorEsp', 'playerEsp'],
	['exit gateFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
