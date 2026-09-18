#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'dead by daylight cheats', espWallhack: 'dead by daylight cheats wallhack', aimbotCombat: 'dead by daylight cheats aimbot', teamFight: 'dead by daylight cheats', playerEsp: 'dead by daylight cheats esp', headerArt: 'dead by daylight cheats aimbot', cheatsPackage: 'dead by daylight cheats radar', rebootFight: 'dead by daylight cheats aimbot', battleRoyale: 'dead by daylight cheats', battleRoyaleIsland: 'dead by daylight cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', teamFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'DBD ESP player tags hack'", "imageAlt: 'dead by daylight cheats esp'"],
	["imageAlt: 'DBD ESP world esp'", "imageAlt: 'dead by daylight cheats radar'"],
	["imageAlt: 'DBD aimbot sniper kill'", "imageAlt: 'dead by daylight cheats aimbot'"],
	["imageAlt: 'DBD aimbot skeleton targeting'", "imageAlt: 'dead by daylight cheats aimbot'"],
	["imageAlt: 'DBD cheats ADS combat'", "imageAlt: 'dead by daylight cheats'"],
	["imageAlt: 'DBD cheats setup PC activation'", "imageAlt: 'dead by daylight cheats'"],
	["imageAlt: 'DBD cheats updates EAC maintenance'", "imageAlt: 'dead by daylight cheats'"],
	["imageAlt: 'DBD cheats FAQ ESP aimbot'", "imageAlt: 'dead by daylight cheats'"],
	["imageAlt: 'DBD cheats support license help'", "imageAlt: 'dead by daylight cheats'"],
	["imageAlt: 'Undetected dead by daylight cheats ESP wallhack'", "imageAlt: 'undetected dead by daylight cheats'"],
	["imageAlt: 'DBD wallhack skeleton ESP'", "imageAlt: 'dead by daylight cheats wallhack'"],
	["imageAlt: 'EAC bypass dbd ESP aimbot'", "imageAlt: 'dead by daylight cheats eac'"],
	["imageAlt: 'DBD cheats 2026 ESP aimbot'", "imageAlt: 'dead by daylight cheats'"],
	["imageAlt: 'DBD cheats combat aimbot'", "imageAlt: 'dead by daylight cheats'"],
	["imageAlt: 'DBD cheat download ESP aimbot'", "imageAlt: 'dead by daylight cheats download'"],
	["imageAlt: 'DBD mod menu ESP aimbot'", "imageAlt: 'dead by daylight cheats mod menu'"],
	["imageAlt: 'DBD aimbot aimbot settings'", "imageAlt: 'dead by daylight cheats aimbot'"],
	["imageAlt: 'Best dead by daylight cheats 2026 ESP'", "imageAlt: 'best dead by daylight cheats'"],
	["imageAlt: 'DBD aimbot hack combat'", "imageAlt: 'dead by daylight cheats aimbot'"],
	["imageAlt: 'DBD ESP hack wallhack'", "imageAlt: 'dead by daylight cheats esp'"],
	["imageAlt: 'DBD unlock all ESP aimbot guide'", "imageAlt: 'dead by daylight cheats'"],
	["imageAlt: 'DBD cheats privacy policy'", "imageAlt: 'dead by daylight cheats'"],
	["imageAlt: 'DBD cheats refund policy'", "imageAlt: 'dead by daylight cheats'"],
	["imageAlt: 'DBD cheats terms of use'", "imageAlt: 'dead by daylight cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `DBD ${meta.altKeyword}`")
	.join("imageAlt: 'dead by daylight cheats'")
	.split("galleryTitle: `DBD Hacks ${topicName}`")
	.join("galleryTitle: 'dead by daylight cheats'")
	.split("imageAlt: `DBD cheats ${kind} policy`")
	.join("imageAlt: 'dead by daylight cheats'")
	.split("galleryTitle: `DBD Hacks ${kind} resources`")
	.join("galleryTitle: 'dead by daylight cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
