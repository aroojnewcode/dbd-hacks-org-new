#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → DBD Hacks (Dead by Daylight).
 * Domain: dbdhacks.net
 * Run from project root: node scripts/adapt-dbd.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'dbd-aimbot'],
	['tarkov-esp', 'dbd-esp'],
	['tarkov-wallhack', 'dbd-wallhack'],
	['tarkov-radar-hack', 'dbd-world-esp'],
	['undetected-tarkov-cheats', 'undetected-dbd-cheats'],
	['tarkov-cheats-2026', 'dbd-cheats-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'dbd-cheats'],
	['tarkov-cheat-download', 'dbd-cheat-download'],
	['tarkov-mod-menu', 'dbd-cheat-menu'],
	['tarkov-soft-aim', 'dbd-skill-check'],
	['best-tarkov-cheats', 'best-dbd-cheats'],
	['tarkov-aimbot-hack', 'dbd-aimbot-hack'],
	['tarkov-esp-hack', 'dbd-esp-hack'],
	['tarkov-unlock-all', 'dbd-cosmetic-unlocker'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://dbdhacks.net'],
	['https://www.tarkovcheats.org', 'https://www.dbdhacks.net'],
	['www.tarkovcheats.org', 'www.dbdhacks.net'],
	['tarkovcheats.org', 'dbdhacks.net'],
	['support@tarkovcheats.org', 'support@dbdhacks.net'],
	['/products/escape-from-tarkov', '/products/dbd-cheats'],
	['project-name=tarkovcheats', 'project-name=dbdhacks'],
	['project-name=besttarkovcheats', 'project-name=dbdhacks'],
	['"name": "tarkov-cheats"', '"name": "dbd-hacks"'],
	['undetected-tarkov-cheats', 'undetected-dbd-cheats'],
	['best-tarkov-cheats', 'best-dbd-cheats'],
	['tarkov-cheat-download', 'dbd-cheat-download'],
	['tarkov-cheats-2026', 'dbd-cheats-2026'],
	['tarkov-radar-hack', 'dbd-world-esp'],
	['tarkov-aimbot-hack', 'dbd-aimbot-hack'],
	['tarkov-esp-hack', 'dbd-esp-hack'],
	['tarkov-unlock-all', 'dbd-cosmetic-unlocker'],
	['tarkov-soft-aim', 'dbd-skill-check'],
	['tarkov-mod-menu', 'dbd-cheat-menu'],
	['tarkov-wallhack', 'dbd-wallhack'],
	['tarkov-cheats', 'dbd-cheats'],
	['tarkov-aimbot', 'dbd-aimbot'],
	['tarkov-esp', 'dbd-esp'],
	['battleye-bypass', 'eac-bypass'],
	["pageId=\"battleye\"", 'pageId="eac"'],
	["pageId: 'battleye'", "pageId: 'eac'"],
	["'battleye'", "'eac'"],
	['| battleye', '| eac'],
	['"battleye"', '"eac"'],
	['escape-from-tarkov-cheats', 'dead-by-daylight-cheats'],
	['Escape from Tarkov', 'Dead by Daylight'],
	['Tarkov Cheats', 'DBD Hacks'],
	['Tarkov cheats', 'DBD cheats'],
	['Tarkov cheat', 'DBD cheat'],
	['Tarkov hacks', 'DBD hacks'],
	['Tarkov hack', 'DBD hack'],
	['TarkovCheatsSite', 'DBDHacksSite'],
	['Tarkov Intel', 'DBD Intel'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'EAC maintenance'],
	['BattlEye bypass', 'EAC bypass'],
	['BattlEye Bypass', 'EAC Bypass'],
	['BattlEye patches', 'EAC patches'],
	['BattlEye patch', 'EAC patch'],
	['BattlEye updates', 'EAC updates'],
	['BattlEye update', 'EAC update'],
	['after BattlEye', 'after EAC'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['tarkov cheats', 'dead by daylight cheats'],
	['tarkov esp', 'dbd esp'],
	['tarkov aimbot', 'dbd aimbot'],
	['tarkov wallhack', 'dbd wallhack'],
	['tarkov hacks', 'dbd hacks'],
	['tarkov hack', 'dbd hack'],
	['tarkov cheat', 'dbd cheat'],
	['Customs, Woods, and Streets of Tarkov', 'The Fog, MacMillan Estate, and Autohaven Wreckers'],
	['Customs, Woods et Streets of Tarkov', 'The Fog, MacMillan Estate et Autohaven Wreckers'],
	['Customs, Woods e Streets of Tarkov', 'The Fog, MacMillan Estate e Autohaven Wreckers'],
	['Customs, Woods und Streets of Tarkov', 'The Fog, MacMillan Estate und Autohaven Wreckers'],
	['extract fights', 'chase escapes'],
	['extract fight', 'chase escape'],
	['raid rounds', 'trial rounds'],
	['extract', 'exit gate'],
	['PMC raids and Scav runs', 'Survivor and Killer trials'],
	['PMC & Scav', 'Survivor & Killer'],
	['PMC raids and Scav runs', 'Survivor and Killer trials'],
	['PMC raids', 'Survivor trials'],
	['Scav runs', 'Killer trials'],
	['Scav run', 'Killer trial'],
	['scav run', 'killer trial'],
	['extract and loot markers', 'generator and objective markers'],
	['high-value loot', 'bloodpoint farming'],
	['PMCs', 'Survivors'],
	['PMCs and Scavs', 'Survivors and Killers'],
	['PMC and Scav', 'Survivor and Killer'],
	['PMC', 'Survivor'],
	['Scavs', 'Killers'],
	['Scav', 'Killer'],
	['extract timer', 'generator progress'],
	['2D radar', 'World ESP'],
	['radar hack', 'world esp'],
	['radar cues', 'objective markers'],
	['radar overlay', 'world ESP overlay'],
	['soft aim', 'aimbot'],
	['Soft aim', 'Aimbot'],
	['tarkovImages', 'dbdImages'],
	["from './tarkov'", "from './dbd'"],
	["from '../data/tarkov'", "from '../data/dbd'"],
	["from '../../data/tarkov'", "from '../../data/dbd'"],
	['fetch-tarkov-images', 'fetch-dbd-images'],
	['tarkov-hack-overlays', 'dbd-hack-overlays'],
	['fix-tarkov-copy', 'fix-dbd-copy'],
	['trucos-tarkov', 'trucos-dbd'],
	['triche-tarkov', 'triche-dbd'],
	['cheats-tarkov', 'cheats-dbd'],
	['trucchi-tarkov', 'trucchi-dbd'],
	['cheaty-tarkov', 'cheaty-dbd'],
	['chity-tarkov', 'chity-dbd'],
	['chitov-tarkov', 'chitov-dbd'],
	['chitiv-tarkov', 'chitiv-dbd'],
	['cheatow-tarkov', 'cheatow-dbd'],
	['hile-tarkov', 'hile-dbd'],
	['tarkov-hile', 'dbd-hile'],
	['tarkov-esp-chity', 'dbd-esp-chity'],
	['tarkov-aimbot-chity', 'dbd-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-dbd-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-dbd-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-dbd-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-dbd'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-dbd'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-dbd-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-dbd'],
	['cheats-tarkov-nedetectabile', 'cheats-dbd-nedetectabile'],
	['basta-tarkov-cheats', 'basta-dbd-cheats'],
	['tarkov-cheats-funktionen', 'dbd-cheats-funktionen'],
	['tarkov-cheats-functies', 'dbd-cheats-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-dbd'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-dbd'],
	['recursos-cheats-tarkov', 'recursos-cheats-dbd'],
	['call-of-duty-warzone', 'dead-by-daylight'],
	['Buy Tarkov Cheats', 'Buy DBD Hacks'],
	['Tarkov', 'DBD'],
	['tarkov', 'dbd'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['adapt-warzone.mjs', 'adapt-fortnite.mjs', 'adapt-tarkov.mjs', 'adapt-dbd.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'dbd.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → dbd.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-dbd-images.mjs'],
		['tarkov-hack-overlays.mjs', 'dbd-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-dbd-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'dbd-aimbot': 'dbd-aimbot',
		'dbd-esp': 'dbd-esp',
		'dbd-wallhack': 'wallhack',
		'dbd-world-esp': 'world-esp',
		'undetected-dbd-cheats': 'undetected',
		'dbd-cheats-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'dbd-cheats': 'hacks',
		'dbd-cheat-download': 'cheat-download',
		'dbd-cheat-menu': 'mod-menu',
		'dbd-skill-check': 'skill-check',
		'best-dbd-cheats': 'best-cheats',
		'dbd-aimbot-hack': 'aimbot-hack',
		'dbd-esp-hack': 'esp-hack',
		'dbd-cosmetic-unlocker': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'dbd').replace(/dbd-hacks-logo/g, 'dbd-hacks-logo');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → DBD Hacks (dbdhacks.net)...\n');
	await renamePageDirs();
	await renameDataFile();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: fix brand.ts identity, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
