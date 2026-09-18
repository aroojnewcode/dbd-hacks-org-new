#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefromdbd.com)
	['published by ${EXT.activision}', 'published by Behaviour Interactive (${EXT.dbd})'],
	['from ${EXT.activision}', 'from ${EXT.dbd}'],
	['via ${EXT.activision}', 'via ${EXT.dbd}'],
	['belong with ${EXT.activision}', 'belong with Behaviour Interactive'],
	['${EXT.activision} terms', 'Behaviour Interactive terms'],
	['${EXT.activision} season updates', '${EXT.dbd} chapter and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → DBD
	['vehicles, loot', 'Survivors, Killers, loot'],
	['notice vehicles before they push your position', 'spot Survivors and Killers before they push your angle'],
	['Player, vehicle, and loot', 'Player, boss, and loot'],
	[
		'vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical',
		'killer markers, exit gate cues, and objective pins so only trial-critical',
	],
	['Vehicle and supply-drop threat cues', 'Boss and exit gate awareness cues'],
	['vehicle and supply-drop threat cues', 'killer and exit gate awareness cues'],
	['loot or chest pins', 'objective and container pins'],
	['Loot and chest markers', 'Loot and container markers'],
	['objective and chest markers', 'objective and container markers'],
	['chests worth the detour', 'bloodpoint gains worth the detour'],
	['vehicles, and chests', 'bosses, and chests'],
	['loot, vehicles, and chests', 'loot, bosses, and chests'],
	['players, loot, and vehicles', 'Survivors, Killers, and loot'],
	['players, loot, vehicles', 'Survivors, Killers, loot'],
	['vehicle threat cues', 'Killer threat cues'],
	['vehicle pushes', 'tile loops'],
	['track vehicles and chests', 'track Killers and generators'],
	['full BR loop', 'full trial loop'],
	['BR loops', 'map loops'],
	['BR-critical', 'trial-critical'],
	['endgame circles', 'exit gate reads'],
	['final circles', 'late-trial exit gates'],
	['final-circle scrims', 'exit gate camp fights'],
	['before your first ranked block', 'before your first trial'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range chases'],
	['Battle Pass', 'chapter progression'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range killer chases and mid-chase clears without reopening menus every trial',
	],
	['assault rifles, SMGs, and snipers', 'Survivor and Killer roles'],
	['AR / SMG / sniper', 'AR / SMG / killer power'],
	['players, loot, and vehicles', 'Survivors, Killers, and loot'],
	['for players, loot, and vehicles', 'for players, loot, and exit gates'],

	// Broken / truncated meta fragments
	['aimbot, and .', 'aimbot, and radar.'],
	['aimbot, and on Windows PC', 'aimbot, and radar on Windows PC'],
	['aimbot, and for Windows PC', 'aimbot, and radar for Windows PC'],
	['aimbot, and in our', 'aimbot, and radar in our'],
	['aimbot, and maintenance', 'aimbot, and radar maintenance'],
	['aimbot, boxes, and on Windows PC', 'aimbot, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['REasy Anti-Cheat out for', 'Reach out for'],
	['an Easy Anti-Cheat', 'a Easy Anti-Cheat'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['dead by daylight cheats & dead by daylight cheats', 'dead by daylight cheats'],
	[
		'covering both dead by daylight cheats and dead by daylight cheats search intent',
		'covering both “dead by daylight cheats” and “dead by daylight cheats” search intent',
	],
	[
		'also searched as dead by daylight cheats and dbd cheat.',
		'built for Dead by Daylight on Windows PC.',
	],
	[
		'DBD cheats vs dead by daylight cheats — same stack, clear pages',
		'How this DBD cheats pillar fits nearby pages',
	],
	[
		'Searchers use dead by daylight cheats and dead by daylight cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/dbd-esp-hack/', '/dbd-esp/'],
	['/dbd-aimbot-hack/', '/dbd-aimbot/'],
	['/best-dbd-cheats/', '/dbd-cheats/'],
	['best DBD cheats guide', 'DBD cheats pillar'],
	['best DBD cheats checklist', 'DBD cheats checklist'],
	['best DBD cheats', 'DBD cheats'],
	[
		'Prefer softer tracking? Read the <a href="/dbd-skill-check/">aimbot guide</a>. Want the search term most players use? See <a href="/dbd-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/dbd-skill-check/">aimbot guide</a>.',
	],
	['Related landings: <a href="/dbd-cheat-download/">cheat download</a>, <a href="/dbd-cheat-menu/">mod menu</a>, <a href="/dbd-aimbot/">aimbot hack</a>, <a href="/dbd-esp/">ESP hack</a>.',
		'Related landings: <a href="/dbd-cheat-download/">cheat download</a>, <a href="/dbd-cheat-menu/">mod menu</a>, <a href="/dbd-aimbot/">aimbot</a>, <a href="/dbd-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
