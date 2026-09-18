#!/usr/bin/env node
/**
 * Completes dbd-cheats-cheats SEO audit: add missing pages, fix leftovers, strip  from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'dbd-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'dbd-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'dbd-cheat-menu', pageId: 'mod-menu' },
	{ id: 'skill-check', dir: 'dbd-skill-check', pageId: 'skill-check' },
	{ id: 'best-cheats', dir: 'best-dbd-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'dbd-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'dbd-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'dbd-cosmetic-unlocker', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/dbd-dbd/g, 'dbd'],
	[/eac-bypass-dbd/g, 'eac-bypass'],
	[/Dead by Daylight/g, 'Dead by Daylight'],
	[/Dead by Daylight/g, 'Dead by Daylight'],
	[/Call of Duty/g, 'Dead by Daylight'],
	[/DBD Wallhack/g, 'Dead by Daylight Wallhack'],
	[/DBD Radar Hack/g, 'Dead by Daylight Radar Hack'],
	[/DBD Cheat Features/g, 'Dead by Daylight Cheat Features'],
	[/DBD Cheat Pricing/g, 'Dead by Daylight Cheat Pricing'],
	[/DBD Cheat Setup/g, 'Dead by Daylight Cheat Setup'],
	[/DBD Cheat Status/g, 'Dead by Daylight Cheat Status'],
	[/DBD Cheat Support/g, 'Dead by Daylight Cheat Support'],
	[/DBD team fight/g, 'Dead by Daylight team fight'],
	[/DBD team builder/g, 'Dead by Daylight loadout builder'],
	[/DBD store header/g, 'Dead by Daylight header'],
	[/DBD wasteland combat/g, 'Dead by Daylight battle royale combat'],
	[/DBD loadout builder/g, 'Dead by Daylight loadout builder'],
	[/DBD pricing/g, 'Dead by Daylight pricing'],
	[/DBD Easy Anti-Cheat/g, 'Dead by Daylight Easy Anti-Cheat'],
	[/on DBD/g, 'on Dead by Daylight'],
	[/for DBD/g, 'for Dead by Daylight'],
	[/DBD guides/g, 'Dead by Daylight guides'],
	[/DBD guide/g, 'Dead by Daylight guide'],
	[/DBD hileleri/g, 'Dead by Daylight hileleri'],
	[/DBD hile/g, 'Dead by Daylight hile'],
	[/DBD hileleri/g, 'Dead by Daylight hileleri'],
	[/cheatów DBD/g, 'cheatów Dead by Daylight'],
	[/cheat DBD/g, 'cheat Dead by Daylight'],
	[/cheats DBD/g, 'cheats Dead by Daylight'],
	[/trucos DBD/g, 'trucos Dead by Daylight'],
	[/triche DBD/g, 'triche Dead by Daylight'],
	[/trucchi DBD/g, 'trucchi Dead by Daylight'],
	[/Wallhack DBD/g, 'Dead by Daylight Wallhack'],
	[/cheat DBD undetected/g, 'cheat Dead by Daylight undetected'],
	[/cheats DBD undetected/g, 'cheats Dead by Daylight undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/killer-side room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and killer-side'],
	[/Verdansk, Urzikstan/g, 'Verdansk, killer-side'],
	[/raid and killer-side/g, 'raid and killer-side'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/dbd-cheats-cheats/g, 'dbd-cheats-cheats'],
	[/dbd-cheats/g, 'dbd'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Dead by Daylight'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Dead by Daylight anti-cheat'],
];

/** Remove  from meta description/title strings only */
function stripFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via \.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en \.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via \.?/gi, '.')
		.replace(/\s*with  checkout\.?/gi, '.')
		.replace(/\s*via  checkout\.?/gi, '.')
		.replace(/\s*Checkout via \.?/gi, '')
		.replace(/\s* checkout,?\s*/gi, ' ')
		.replace(/\s* delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and  delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant  Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on /g, 'Buy DBD Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip  from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/DBD guides/g, 'Dead by Daylight guides');
	content = content.replace(/DBD guide/g, 'Dead by Daylight guide');
	content = content.replace(/DBD hileleri/g, 'Dead by Daylight hileleri');
	content = content.replace(/DBD hile/g, 'Dead by Daylight hile');
	content = content.replace(/cheat DBD/g, 'cheat Dead by Daylight');
	content = content.replace(/cheats DBD/g, 'cheats Dead by Daylight');
	content = content.replace(/trucos DBD/g, 'trucos Dead by Daylight');
	content = content.replace(/triche DBD/g, 'triche Dead by Daylight');
	content = content.replace(/trucchi DBD/g, 'trucchi Dead by Daylight');
	content = content.replace(/cheatów DBD/g, 'cheatów Dead by Daylight');
	content = content.replace(/читов DBD/g, 'читов Dead by Daylight');
	content = content.replace(/читів DBD/g, 'читів Dead by Daylight');
	content = content.replace(/DBDチート/g, 'Dead by Daylightチート');
	content = content.replace(/DBD 치트/g, 'Dead by Daylight 치트');
	content = content.replace(/DBD作弊/g, 'Dead by Daylight作弊');
	content = content.replace(/DBD rehberleri/g, 'Dead by Daylight rehberleri');
	content = content.replace(/DBD gidsen/g, 'Dead by Daylight gidsen');
	content = content.replace(/DBD průvodce/g, 'Dead by Daylight průvodce');
	content = content.replace(/DBD guider/g, 'Dead by Daylight guider');
	content = content.replace(/DBD related/g, 'Dead by Daylight related');
	content = content.replace(/DBD ガイド/g, 'Dead by Daylight ガイド');
	content = content.replace(/DBD 가이드/g, 'Dead by Daylight 가이드');
	content = content.replace(/DBD指南/g, 'Dead by Daylight指南');
	content = content.replace(/DBD गाइड/g, 'Dead by Daylight गाइड');
	content = content.replace(/DBD panduan/g, 'Dead by Daylight panduan');
	content = content.replace(/DBD คู่มือ/g, 'Dead by Daylight คู่มือ');
	content = content.replace(/DBD hướng dẫn/g, 'Dead by Daylight hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== DBD Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
