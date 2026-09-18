#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Behaviour Interactive'"],
	['Activision\u2019', "Behaviour Interactive'"],
	['Activision services', 'Behaviour Interactive services'],
	['Activision service', 'Behaviour Interactive service'],
	['Activision platform', 'Behaviour Interactive platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Behaviour Interactive bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'Dead by Daylight Support'],
	['Activision DBD', 'Dead by Daylight'],
	['Activision Support', 'Dead by Daylight Support'],
	['Activision', 'Behaviour Interactive'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromdbd.com/support'],
	['www.epicgames.com/dbd', 'www.escapefromdbd.com'],
	['www.dbd.com/competitive', 'www.escapefromdbd.com'],
	['https://www.dbd.com/', 'https://deadbydaylight.com/'],
	['DBD.com', 'Dead by Daylight'],
	['DBD Competitive', 'Dead by Daylight'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
