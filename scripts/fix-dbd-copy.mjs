#!/usr/bin/env node
/**
 * Polish DBD Hacks copy — replace leftover Tarkov/raid terminology with Dead by Daylight language.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Legacy Tarkov composite filenames → real DBD screenshots. */
const IMAGE_REPLACEMENTS = [
	['/images/dbd-cheats-aimbot-view.webp', '/images/dbd-screenshot-mod-menu.webp'],
	['/images/dbd-cheats-raid.webp', '/images/dbd-screenshot-gameplay.webp'],
	['/images/dbd-cheats-radar.webp', '/images/dbd-screenshot-esp-neon.webp'],
	['/images/dbd-cheats-wallhack.webp', '/images/dbd-screenshot-esp-neon.webp'],
	['/images/dbd-cheats-combat.webp', '/images/dbd-screenshot-gameplay.webp'],
	['/images/dbd-cheats-aimbot.webp', '/images/dbd-screenshot-gameplay.webp'],
	['/images/dbd-cheats-esp.webp', '/images/dbd-screenshot-esp-neon.webp'],
];

const REPLACEMENTS = [
	['https://www.escapefromdbd.com/support', 'https://support.deadbydaylight.com/hc/'],
	['https://www.escapefromdbd.com/', 'https://deadbydaylight.com/'],
	['Battlestate Games', 'Behaviour Interactive'],
	['Easy Anti-Cheat Anti-Cheat', 'Easy Anti-Cheat'],
	['Escape from Tarkov', 'Dead by Daylight'],
	['escape from tarkov', 'Dead by Daylight'],
	['Tarkov', 'DBD'],
	['tarkov', 'dbd'],
	[' in raid', ' in trial'],
	[' in raids', ' in trials'],
	[' on raid', ' in trial'],
	['raids fights', 'trial chases'],
	['late-raid', 'late-trial'],
	['every raid', 'every trial'],
	['first raid', 'first trial'],
	['full raid loop', 'full trial loop'],
	['ESP in raid', 'ESP in trial'],
	['Factory, and', 'Autohaven, and'],
	['Extract approaches', 'Exit gate approaches'],
	['bosses and containers', 'Killers and generators'],
	['boss and exit', 'Killer and exit'],
	['boss markers', 'Killer markers'],
	['boss threat', 'Killer threat'],
	['Weapon TTK', 'Perk balance'],
	['ARs, SMGs, and killer powers', 'Survivor and Killer roles'],
	['close-range scav fights', 'close-range chases'],
	['rooftops, windows', 'tiles, windows'],
	['POI', 'map tile'],
	['POIs', 'map tiles'],
	['containers', 'chests'],
	['loot rules', 'objective rules'],
	['loot and', 'generators and'],
	['enemy players and loot', 'Survivors, Killers, and generators'],
	['Battlestate client', 'Dead by Daylight client'],
	['Battlestate services', 'Dead by Daylight services'],
	['https://support.deadbydaylight.com/hc//', 'https://support.deadbydaylight.com/hc/'],
	['eft hacks', 'dbd hacks'],
	[' "eft ', ' "dbd '],
	['Survivor Raids', 'Survivor trials'],
	['Survivor raids', 'Survivor trials'],
	['serious Survivor Raids', 'serious Survivor trials'],
	['for Raids', 'for trials'],
	['for raids', 'for trials'],
	['real raids', 'real trials'],
	['normal raids', 'normal trials'],
	['night raids', 'night trials'],
	['intentional raids', 'intentional trials'],
	['ten focused raids', 'ten focused trials'],
	['six-raid', 'six-trial'],
	['early raid deaths', 'early trial deaths'],
	['decide raids', 'decide trials'],
	['DBD raids', 'DBD trials'],
	['in raids', 'in trials'],
	['a raid', 'a trial'],
	[' raids', ' trials'],
	[' raid ', ' trial '],
	['Flea Market', 'Bloodweb'],
	['rouble', 'bloodpoint'],
	['stash', 'loadout'],
	['armor pen', 'chase pressure'],
	['ammo', 'skill checks'],
	['Interchange', 'The MacMillan Estate'],
	['Factory and', 'Autohaven and'],
	['Weapon Tier List', 'Perk Tier List'],
	['Best Guns', 'Best perks'],
	['weapon tier', 'perk tier'],
	['ARs, SMGs', 'Survivor kits, Killer powers'],
	['escape-from-dbd', 'dbd-cheats'],
	['escape from dead by daylight cheats', 'dead by daylight cheats'],
	['/products/escape-from-dbd', '/products/dbd-cheats'],
	["pageId=\"skill-check\"", "pageId=\"skill-check\""],
	['pageId="soft-aim"', 'pageId="skill-check"'],
	["'soft-aim'", "'skill-check'"],
	['| \'soft-aim\'', "| 'skill-check'"],
	['soft-aim:', 'skill-check:'],
	["'soft-aim':", "'skill-check':"],
	["pageId: 'soft-aim'", "pageId: 'skill-check'"],
	['| radar', '| world-esp'],
	["'radar'", "'world-esp'"],
	['| \'radar\'', "| 'world-esp'"],
	['an Dead by Daylight', 'a Dead by Daylight'],
	['after an Dead by Daylight', 'after a Dead by Daylight'],
	['When an Dead by Daylight', 'When a Dead by Daylight'],
	['Customs', 'Autohaven Wreckers'],
	['Woods', 'The MacMillan Estate'],
	['dorms', 'mid-chase'],
	['this wipe', 'this chapter'],
	['last wipe', 'last chapter'],
	['wipe', 'chapter'],
	['raid flow', 'trial flow'],
	['mid-raid', 'mid-trial'],
	['before you raid', 'before you queue'],
	['before every raid', 'before every trial'],
	['you raid', 'you queue'],
	['In-raid', 'In-trial'],
	['in-raid', 'in-trial'],
	['in a raid', 'in a trial'],
	['during a raid', 'during a trial'],
	['DBD raids', 'DBD trials'],
	['dbd raids', 'dbd trials'],
	['for raids', 'for trials'],
	['early raids', 'early trials'],
	['Raid Soft Aim', 'Trial Skill Check'],
	['Soft Aim Review', 'Skill Check Review'],
	['Sniper Soft Aim', 'Killer Aimbot'],
	['soft aim', 'skill check'],
	['Soft aim', 'Skill check'],
	['scav-run', 'killer-side'],
	['scav run', 'killer trial'],
	['Scav-run', 'Killer-side'],
	['Scav run', 'Killer trial'],
	['Survivor and Killer trials and Killer trials', 'Survivor and Killer trials'],
	['Survivor Raid and Killer Support', 'Survivor and Killer Support'],
	['pmc-raids-and-scav-runs', 'survivor-and-killer-trials'],
	['loot routes', 'perk builds'],
	['loot and', 'objective and'],
	['Loot ESP', 'Object ESP'],
	['loot ESP', 'object ESP'],
	['spotting loot', 'spotting generators and totems'],
	['loot markers', 'objective markers'],
	['loot filters', 'object filters'],
	['loot pins', 'objective pins'],
	['container highlights', 'chest and pallet highlights'],
	['Corpse and container highlights', 'Hook and chest highlights'],
	['Player gear and threat cues', 'Character name, prestige, and health state'],
	['Loot and exit gate markers', 'Generator, totem, and hatch markers'],
	['Per-weapon profiles', 'Per-killer profiles'],
	['Per-weapon', 'Per-killer'],
	['per weapon', 'per killer'],
	['per-weapon', 'per-killer'],
	['bolt-action', 'killer power'],
	['Bolt-action', 'Killer power'],
	['ARs, SMGs, and bolt-actions', 'survivor and killer roles'],
	['long-range DMR fights', 'long-range killer chases'],
	['building clears', 'tile loops'],
	['third party', 'second killer pressure'],
	['third-party', 'second killer pressure'],
	['third party early', 'killer approach early'],
	['squad', 'team'],
	['squads', 'teams'],
	['squadstrider', 'teamstrider'],
	['Extracts', 'Exit Gates'],
	['exit gate holds', 'exit gate reads'],
	['boss markers', 'killer markers'],
	['boss and exit gate', 'killer and exit gate'],
	['Boss and player', 'Killer and survivor'],
	['xKrypt0_EFT', 'FogWalker_DBD'],
	['buildsR4K', 'GenRush42'],
	['dma_wizard', 'trial_wizard'],
	['ctrl_player99', 'skillCheckPro'],
	['stormChaser_07', 'FogChaser_07'],
	['lootGoblinx', 'TotemHunterx'],
	['rankedGrind42', 'RankedGrind42'],
	['vanLifeEFT', 'ExitGateLife'],
	['patchDayMike', 'PatchDayMike'],
	['snipezOnly_', 'HuntressMain_'],
	['Killer trial', 'Killer side'],
	['dbd-esp-scav-run-review', 'dbd-esp-killer-review'],
	['dbd-cloud-dma-review', 'dbd-update-review'],
	['dbd-loot-esp-review', 'dbd-object-esp-review'],
	['dbd-sniper-soft-aim-review', 'dbd-killer-aimbot-review'],
	['dbd-skill-check-raid-review', 'dbd-skill-check-trial-review'],
	['raid tips', 'trial tips'],
	['who raid', 'who play DBD'],
	['players who raid', 'DBD players'],
	['Built for DBD raids', 'Built for DBD trials'],
	['DBD raid-loop', 'DBD trial loop'],
	['raid-loop', 'trial loop'],
	['raid and scav-run', 'survivor and killer trials'],
	['raid, scav-run', 'survivor, killer trials'],
	['raid and scav-run loops', 'survivor and killer trial loops'],
	['raid-critical', 'trial-critical'],
	['competitive lobbies', 'ranked trials'],
	['map awareness', 'trial awareness'],
	['read fights', 'read chases'],
	['engagement control', 'chase control'],
	['engagements', 'chases'],
	['flank pushes', 'tile rotations'],
	['flanks', 'approaches'],
	['rotations', 'loops'],
	['high-value loot', 'bloodpoint gains'],
	['bloodpoint farming', 'bloodpoint gains'],
	['Cloud DMA', 'External mode'],
	['cloud dma', 'external mode'],
];

const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.md']);
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['fix-dbd-copy.mjs', 'adapt-dbd.mjs', 'adapt-tarkov.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

async function main() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		if (!TEXT_EXTENSIONS.has(path.extname(file))) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		let updated = original;
		for (const [from, to] of IMAGE_REPLACEMENTS) {
			updated = updated.split(from).join(to);
		}
		for (const [from, to] of REPLACEMENTS) {
			if (!from || from === to) continue;
			updated = updated.split(from).join(to);
		}
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Fixed copy in ${changed} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
