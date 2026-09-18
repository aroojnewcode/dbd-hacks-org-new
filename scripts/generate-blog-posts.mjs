#!/usr/bin/env node
/**
 * Generates src/data/blog/posts.generated.ts — NLP-first DBD Intel posts.
 * Natural language, entity-rich copy for Google semantic matching.
 * Run: node scripts/generate-blog-posts.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'blog', 'posts.generated.ts');

const LOCALES = ['en'];

const EXT = {
	dbd:
		'<a href="https://deadbydaylight.com/" target="_blank" rel="noopener noreferrer">Dead by Daylight</a>',
	status:
		'<a href="https://support.deadbydaylight.com/hc/" target="_blank" rel="noopener noreferrer">Dead by Daylight Support</a>',
	eac:
		'<a href="https://www.eac.com/" target="_blank" rel="noopener noreferrer">Easy Anti-Cheat</a>',
};

/** @typedef {{ h2: string, paragraphs: string[] }} Section */
/** @typedef {{ id: string, imageKey: string, published: string, updated: string, category: string, featured?: boolean, slug: string, title: string, metaDescription: string, h1: string, intro: string, keywords: string[], imageAlt: string, sections: Section[] }} SourcePost */

/** @type {SourcePost[]} */
const sources = [
	{
		id: 'patch-notes-breakdown',
		imageKey: 'teamFight',
		published: '2026-07-29',
		updated: '2026-08-13',
		category: 'Patch Notes',
		featured: false,
		slug: 'dbd-patch-notes-guide',
		title: 'How to Read Dead by Daylight Patch Notes',
		metaDescription:
			'Learn how Dead by Daylight patch notes change Survivor loadouts, skill checks economy, and maps. What to do after EAC and chapter updates in 2026.',
		h1: 'How to Read Dead by Daylight Patch Notes Without Guessing',
		intro:
			'When Behaviour Interactive drops a patch, most players skim the headline and queue anyway. That is how you walk into Autohaven Wreckers with the wrong skill checks and a gun that just lost its chase pressure. Here is a calmer way to read Dead by Daylight patch notes so your next trial still makes sense.',
		keywords: [
			'escape from dbd patch notes',
			'dbd chapter update',
			'eac patch',
			'pmc loadout',
			'dbd intel',
		],
		imageAlt: 'Player reviewing Dead by Daylight patch notes before a Survivor raid',
		sections: [
			{
				h2: 'What actually matters in a DBD patch?',
				paragraphs: [
					`Official notes live on ${EXT.dbd}. Treat that page as the source of truth — Discord rumors and streamer hot takes come second. Ask three plain questions for every bullet: Does this change how I kill armored Survivors? Does this change what loot is worth looting? Does this change which exit gate or map I should run tonight?`,
					'Ammo tables, armor classes, boss spawn rates, and trader unlocks move the real economy. A small recoil tweak on an M4 looks boring in a video title, but it quietly reshapes mid-range fights on The MacMillan Estate and The MacMillan Estate. Cosmetic lines and UI polish almost never decide whether you survive mid-chase.',
					`If you also run second killer pressure tools, separate game balance from anti-cheat maintenance. After a ${EXT.eac} or client update, check our <a href="/updates/">DBD Hacks status page</a> before you blame your own aim.`,
				],
			},
			{
				h2: 'Buffs, nerfs, and removed items — a simple framework',
				paragraphs: [
					'When an item is removed from trial loot pools, delete it from your mental shopping list the same day. Heavy nerfs demote a weapon from “default kit” to “situational.” Light nerfs are fine if you already shoot cleaner than most lobbies. Buffs deserve a short test block — ten focused trials — before you rebuild your entire loadout around them.',
					'Armor and ammunition changes usually matter more than a single gun’s recoil number. If a popular round loses penetration against class-five plates, your Autohaven Wreckers push into three-stacks suddenly needs a different mag. Pair this reading habit with our <a href="/blog/dbd-weapon-tier-list/">DBD perk tier list</a> so you are not chasing streamer kits that ignore your budget.',
				],
			},
			{
				h2: 'How patches reshuffle loadouts and map plans',
				paragraphs: [
					'When mid-range rifles feel strong, prioritize optics and skill checks that win 40–70 meter peeks. When healing items get tighter, play more conservatively near exit gates and avoid ego third-parties. When a map map tile shifts — new locked rooms, moved spawns, boss path changes — rewrite your first three minutes on that map before you farm it for quests.',
					'Keep cosmetic shop chatter out of patch-day focus. Skin talk is fun; time-to-kill and exit gate camping patterns are what get you killed. For aggressive Killer timing after a meta shift, see our <a href="/blog/dbd-killer-side-aggressive-strategies/">Killer side strategies</a>.',
					`On big mornings, confirm ${EXT.status} looks healthy before you assume your client is broken. Then run a short checklist: note removed items, update your loadout “buy list,” play five intentional trials, and only then lock a new main kit.`,
				],
			},
		],
	},
	{
		id: 'dbd-skin-leaks',
		imageKey: 'headerArt',
		published: '2026-07-27',
		updated: '2026-08-13',
		category: 'Cosmetics',
		featured: false,
		slug: 'dbd-skin-leaks-guide',
		title: 'DBD Cosmetics & Skin Leaks: What Is Worth Buying',
		metaDescription:
			'Sensible advice on Dead by Daylight cosmetics and skin leaks — what to buy on the Bloodweb, what to skip, and how looks affect trial readability.',
		h1: 'DBD Cosmetics and Skin Leaks: Buy Smart, Not Impulsive',
		intro:
			'Leaks make every chapter feel like a fashion drop. Before you dump bloodpoints into another loud outfit, decide whether the skin helps you play Dead by Daylight — or just looks cool in a screenshot.',
		keywords: [
			'dbd skins',
			'dbd cosmetics',
			'flea market skins',
			'escape from dbd apparel',
			'dbd intel',
		],
		imageAlt: 'Dead by Daylight character cosmetics and gear appearance options',
		sections: [
			{
				h2: 'Why most impulse cosmetic buys feel bad after a week',
				paragraphs: [
					`Shop loops and official apparel come from ${EXT.dbd}. Leaks are entertainment, not a shopping list. Many players spend hard-earned flea money the night before a chapter, then realize they still need meds, skill checks, and a backup kit.`,
					'Controversial but useful: most cosmetics do not raise your survival rate. Some loud patterns even make you easier to spot in bushes on The MacMillan Estate or in dark The MacMillan Estate hallways. Pros often prefer quieter silhouettes so enemy outlines stay readable in chaotic peeks.',
				],
			},
			{
				h2: 'A simple worth-it checklist for DBD cosmetics',
				paragraphs: [
					'Buy if you will still wear it in ninety days and it stays readable in night trials. Pause if it overlaps three outfits you already own. Skip FOMO bundles packed with fillers you will never equip. Always keep a bloodpoint floor for skill checks and healing before fashion.',
					'Do the math on bundles. Paying extra for two fillers you hate is worse than waiting for a single piece on the Bloodweb. If a leak only hypes one jacket, wait for confirmation instead of panic-buying a full set.',
				],
			},
			{
				h2: 'How to use leaks without getting played',
				paragraphs: [
					'Treat late-chapter leak waves as theme previews, not release dates. Decide a budget before something hits the store, not during the five-minute panic. A quiet daily habit works: open the shop for one minute, check your wishlist, then leave.',
					'For competitive readability tips that actually affect fights, pair this with our <a href="/blog/dbd-pro-settings-guide/">pro settings guide</a>. Looking clean matters less than seeing the other Survivor first.',
				],
			},
		],
	},
	{
		id: 'dbd-weapon-tier-list',
		imageKey: 'aimbotCombat',
		published: '2026-07-25',
		updated: '2026-08-13',
		category: 'Weapons',
		featured: true,
		slug: 'dbd-weapon-tier-list',
		title: 'DBD Perk Tier List: Best perks for trials',
		metaDescription:
			'A practical Dead by Daylight perk tier list for Survivor and Killer sides — Survivor kits, Killer powers, killer powers, skill checks, and when each gun actually wins fights.',
		h1: 'DBD Perk Tier List: What Wins Raids in 2026',
		intro:
			'Creator tier lists love flashy guns. Dead by Daylight rewards expected value: chase pressureetration, recoil you can control, and a kit you can rebuild after you die. Here is how to rank weapons for real trials — not highlight reels.',
		keywords: [
			'dbd perk tier list',
			'best dbd guns',
			'dbd meta weapons',
			'm4a1 dbd',
			'dbd intel',
		],
		imageAlt: 'Dead by Daylight weapons laid out for a Survivor loadout comparison',
		sections: [
			{
				h2: 'How should you define S-tier in DBD?',
				paragraphs: [
					'S-tier means the best expected value across a hundred Survivor fights on maps like Autohaven Wreckers, The MacMillan Estate, and The MacMillan Estate — not the gun that looks strongest in a controlled offline range. Mid-range rifles win many of the fights that actually decide trials: forty to seventy meters through doorways, parking lots, and tree lines.',
					'Shotguns still own tight interiors. Killer powers still punish long peeks on Shoreline and Lighthouse. Everything between those extremes is usually assault-rifle country, which is why a well-built M4A1 or similar 5.56 platform stays relevant chapter after chapter when skill checks and mods are available.',
					`Always re-check live values after patches on ${EXT.dbd}. The hierarchy logic stays useful even when numbers nudge.`,
				],
			},
			{
				h2: 'Ammo, TTK, and peek discipline matter more than brand names',
				paragraphs: [
					'Time-to-kill in DBD is really time-to-pen. A soft gun with the right rounds beats a loud meta rifle feeding trash skill checks into class-five armor. Learn which rounds you can afford this chapter, then pick a platform that controls recoil at your skill level.',
					'First-shot accuracy decides many peeks. A clean cadence — peek, fire a short burst, jiggle back, re-peek — beats standing still for ego sprays. Pair this mid-range plan with loot discipline from our <a href="/blog/dbd-loot-routes-guide/">perk builds guide</a> so you actually spawn with the skill checks you planned to use.',
				],
			},
			{
				h2: 'Loadout pairings and common mistakes',
				paragraphs: [
					'A durable kit is usually a reliable mid rifle, a close-range option for mid-chase or Factory, enough meds, and an armor class you can replace after deaths. In Killer sides, that same spine supports the aggression patterns in our <a href="/blog/dbd-killer-side-aggressive-strategies/">Killer strategies article</a>.',
					'Common mistakes: full-spraying from eighty meters, re-peeking the same pixel, swapping to an SMG at forty meters out of habit, and never practicing controlled bursts offline. If you also use aim-assist tooling, lock sensitivity and fundamentals first, then review <a href="/dbd-aimbot/">DBD aimbot settings</a>.',
				],
			},
		],
	},
	{
		id: 'dbd-killer-side-meta',
		imageKey: 'battleRoyaleCombat',
		published: '2026-07-22',
		updated: '2026-08-13',
		category: 'Killer Runs',
		featured: true,
		slug: 'dbd-killer-side-aggressive-strategies',
		title: 'DBD Killer Run Strategies That Actually Print Loot',
		metaDescription:
			'Five aggressive but smart Dead by Daylight Killer strategies — timings, exit gates, third-parties, and how to leave trials with gear instead of empty pockets.',
		h1: 'DBD Killer Run Strategies: How to Leave With Gear',
		intro:
			'Passive Killer players wait behind a bush while two Survivor teams erase each other, then spray into the mess and die. Strong Killer sides manufacture a short advantage, grab what matters, and exit gate before the map collapses on you.',
		keywords: [
			'dbd killer trial',
			'scav strategies',
			'escape from dbd scav',
			'dbd exit gates',
			'dbd esp',
		],
		imageAlt: 'Killer player moving toward exit gate with loot in Dead by Daylight',
		sections: [
			{
				h2: 'Why so many Killer sides feel soft',
				paragraphs: [
					'Killer kits are random, timers are limited, and player Killers can turn on you. Waiting forever for a “perfect” second killer pressure often means you arrive late to a chapterd lobby with nothing left. Information tools like <a href="/dbd-esp/">DBD ESP</a> can help you see fights early — but you still need an exit plan.',
					'Decide your exit gate before you swing. Take a clear damage window, grab bloodpoint gains, then leave. The usual second killer pressure clock in hot map tiles is only a few seconds long once gunfire starts.',
				],
			},
			{
				h2: 'Five aggressive habits that still work',
				paragraphs: [
					'Pre-aim common corners on Autohaven Wreckers mid-chase and The MacMillan Estate tech stores so you clear angles in under a second. Enter rooms with an exit path, not a panic turn. Fake one side of a doorway, then finish from the safer angle when their magazine is weak.',
					`Stay close to hard cover while you move — never more than a short sprint from a wall or vehicle. Pressure late rotates near exit gates when players are silhouetted and greedy. Mode rules evolve with ${EXT.dbd} chapters; the geometry of first-shot advantage does not.`,
				],
			},
			{
				h2: 'Warmup checklist before you queue a Killer',
				paragraphs: [
					'Know your map’s main exit gates, bring a simple med plan, and pick two map tiles with cover ladders instead of open fields. Pair this article with <a href="/blog/dbd-loot-routes-guide/">perk builds</a>, <a href="/blog/dbd-weapon-tier-list/">perk tiers</a>, and <a href="/blog/dbd-warmup-maps-ranked/">warmup routines</a>.',
					'Try one session where you force early contact only when you have armor and a usable gun — then track whether you exit gateed before the second killer pressure window closed.',
				],
			},
		],
	},
	{
		id: 'dbd-tournament-meta',
		imageKey: 'rebootFight',
		published: '2026-07-20',
		updated: '2026-08-13',
		category: 'Competitive',
		featured: false,
		slug: 'dbd-tournament-meta-guide',
		title: 'What Competitive DBD Players Optimize For',
		metaDescription:
			'What strong Dead by Daylight competitors optimize — spawn plans, loadouts, mid-trial habits, and which tournament habits help normal Survivor queues.',
		h1: 'What Competitive DBD Players Optimize For',
		intro:
			'Tournament winners and high-level duos are not lucky spawn gods. They optimize expected value: safer loot paths, cleaner mid-trial habits, and fights they choose on purpose. Here is what translates into your normal Dead by Daylight queues.',
		keywords: [
			'dbd competitive',
			'dbd tournament',
			'dbd meta',
			'pmc habits',
			'dbd intel',
		],
		imageAlt: 'Competitive Dead by Daylight players reviewing trial strategy',
		sections: [
			{
				h2: 'Watch competitive VODs like a coach, not a fan',
				paragraphs: [
					`Start with schedules and film from ${EXT.dbd} community events or trusted creators, then tag habits instead of memorizing a single map tile name. Note the landing plan, first heal, first rotate, first voluntary fight, and the key late-trial decision.`,
					'Five clear timestamps beat a full passive watch. You are stealing decision patterns, not cosplaying someone else’s spawn.',
				],
			},
			{
				h2: 'Spawn EV and loadout patterns that keep showing up',
				paragraphs: [
					'Score every spawn on contest rate, loot quality in the first few minutes, exit gate pain, exit paths, and split potential with teammates. Edge spawns with clean exits often beat “sexy” mid-map landmarks that look good on stream and then get third-partied.',
					'Expect a reliable mid rifle, a close-range option, mobility or stamina management, and enough meds. High-tier loot is taken when free, not forced — matching the mindset in our <a href="/blog/dbd-weapon-tier-list/">perk tier list</a>.',
				],
			},
			{
				h2: 'What actually translates to normal trials',
				paragraphs: [
					'Steal loot-timer discipline, a simple loadout spine, earlier rotates, and selective fights. Do not blindly mirror a trio drop when you solo queue. Winners rotate early enough to choose sides — the same idea shows up in our <a href="/blog/dbd-killer-side-aggressive-strategies/">Killer aggression guide</a>.',
					'Try this: watch fifteen minutes of a strong VOD with five timestamps. Steal one mid-trial habit only. Run it for a six-trial Survivor block before adding another.',
				],
			},
		],
	},
	{
		id: 'dbd-loot-routes',
		imageKey: 'battleRoyaleIslandMap',
		published: '2026-07-18',
		updated: '2026-08-13',
		category: 'Loot Routes',
		featured: true,
		slug: 'dbd-loot-routes-guide',
		title: 'DBD Loot Routes That Leave Spawn Ready to Fight',
		metaDescription:
			'High-percentage Dead by Daylight perk builds for Autohaven Wreckers, The MacMillan Estate, and The MacMillan Estate — how to leave spawn with guns, armor, and meds that win mid-trial fights.',
		h1: 'DBD Loot Routes: Leave Spawn Ready to Fight',
		intro:
			'Winning in Dead by Daylight starts before the first gunfight. Random looting gets you killed with a pistol and no meds. These route habits consistently convert a spawn into a kit you can actually fight with.',
		keywords: [
			'dbd perk builds',
			'customs loot path',
			'interchange loot',
			'dbd spawn guide',
			'dbd esp',
		],
		imageAlt: 'Loot route planning across a Dead by Daylight map',
		sections: [
			{
				h2: 'Why early inventory is the real bottleneck',
				paragraphs: [
					'Many early trial deaths happen because players loot like tourists. Strong players treat the first ninety seconds like a shopping list: usable gun, enough skill checks, basic armor, and a heal. Drop spot matters less than sequence — a mediocre map tile with discipline beats a stacked landmark with panic looting.',
					'Secure a primary weapon and meds before hunting kills. Early ego chases are how hot-spawn players stay broke.',
				],
			},
			{
				h2: 'Three route archetypes that keep printing gear',
				paragraphs: [
					'Contested edge map tile: land outer loot, snake inward, leave before late third parties. Uncontested chain: sacrifice early fights for a fuller kit by minute three. Mid-map surge: vacuum piles ninety to one hundred fifty seconds after hot spawns empty out.',
					`Timing targets help: first gun quickly, clear a cluster, grab heals, then upgrade or leave. Slot priority is usually gun, skill checks, armor, meds, then flex loot. map tile names shift with ${EXT.dbd} chapters — keep the geometry, not just the landmark brand.`,
				],
			},
			{
				h2: 'Convert a strong spawn into a win',
				paragraphs: [
					'Pair these routes with <a href="/blog/dbd-killer-side-aggressive-strategies/">Killer aggression</a> and <a href="/blog/dbd-weapon-tier-list/">perk tiers</a>. Leave spawn rich so mid-trial becomes a skill check instead of a scavenger panic.',
					'If you practice with objective markers, read <a href="/dbd-esp/">DBD ESP</a> for category toggles — then still run the timer so your habits stay sharp without overlays.',
				],
			},
		],
	},
	{
		id: 'dbd-pro-settings',
		imageKey: 'cheatsPackage',
		published: '2026-07-12',
		updated: '2026-08-13',
		category: 'Settings',
		featured: false,
		slug: 'dbd-pro-settings-guide',
		title: 'DBD Pro Settings That Actually Help You See Enemies',
		metaDescription:
			'Practical Dead by Daylight settings used by strong players — visibility, audio cues, sensitivity, and what to copy vs ignore from pro configs.',
		h1: 'DBD Settings Guide: See More, Panic Less',
		intro:
			'Copying a champion’s entire config will not make you one. But a few Dead by Daylight settings reliably improve visibility, audio reads, and aim consistency. Here is what is worth stealing.',
		keywords: [
			'dbd settings',
			'dbd sensitivity',
			'dbd visibility',
			'dbd audio settings',
			'dbd intel',
		],
		imageAlt: 'Dead by Daylight graphics and control settings menu',
		sections: [
			{
				h2: 'Visibility and performance before fancy numbers',
				paragraphs: [
					'If your frame rate collapses in Streets of DBD or The MacMillan Estate interiors, no sensitivity tip will save you. Prioritize a stable FPS and readable shadows over maximum eye candy. Many strong players lower clutter so Survivor silhouettes pop sooner in tree lines and warehouse lighting.',
					'Test changes in offline mode or a quiet Killer before locking them for serious Survivor trials. Your eyes adapt in a few sessions — give settings that long before declaring them useless.',
				],
			},
			{
				h2: 'Sensitivity, ADS, and muscle memory',
				paragraphs: [
					'Pick one hip-fire and ADS relationship and stick with it for at least a week. Constantly rewriting sens after every death trains nothing. Warm up with the routine in our <a href="/blog/dbd-warmup-maps-ranked/">warmup guide</a> so your hands match the new numbers.',
					'If you later add aimbot tooling, match the in-game sens first, then tune FOV in the <a href="/dbd-aimbot/">aimbot guide</a>. Tools on top of a chaotic sens feel robotic and obvious.',
				],
			},
			{
				h2: 'Audio cues that win exit gates',
				paragraphs: [
					'Footsteps, magazine reloads, and exit gate buzzing often matter more than a tiny graphics slider. Use headphones, keep voice chat from drowning game audio, and learn the sound difference between a scav AI shuffle and a player Survivor push.',
					'Settings are leverage, not a cheat code. Pair them with map knowledge from our <a href="/blog/dbd-loot-routes-guide/">perk builds</a> article so you know where those sounds are coming from.',
				],
			},
		],
	},
	{
		id: 'dbd-warmup-maps',
		imageKey: 'playerEsp',
		published: '2026-07-10',
		updated: '2026-08-13',
		category: 'Warmup',
		featured: false,
		slug: 'dbd-warmup-maps-ranked',
		title: 'DBD Warmup Routine Before Serious Survivor trials',
		metaDescription:
			'A short Dead by Daylight warmup routine before Survivor trials — aim, peeks, audio focus, and what to practice offline so your first fight is not your warmup.',
		h1: 'DBD Warmup Routine Before You Queue Survivor',
		intro:
			'Queuing cold into Factory or mid-chase is how you donate a kit. A short Dead by Daylight warmup — even ten to fifteen minutes — makes your first real fight feel like your third.',
		keywords: [
			'dbd warmup',
			'dbd aim practice',
			'pmc warmup routine',
			'dbd offline practice',
			'dbd intel',
		],
		imageAlt: 'Player warming up aim before a Dead by Daylight Survivor raid',
		sections: [
			{
				h2: 'Why your first trial should not be the warmup',
				paragraphs: [
					'Most players boot the game, slap on a kit, and die to the first clean peeker. Hands are cold, audio is not dialed, and map timing feels off. Treat warmup as part of the session, not optional fluff.',
					'Offline practice, shooting range habits, and a couple of low-stakes Killer sides exist so your expensive Survivor kit is not the experiment.',
				],
			},
			{
				h2: 'A simple 15-minute routine that scales',
				paragraphs: [
					'Minutes 1–5: tracking and short bursts on a range or offline bots. Minutes 6–10: peek practice on common angles — jiggle, counter-strafe, pre-aim head height. Minutes 11–15: one focused Killer or offline fight block where you only work one habit, like holding an exit gate or clearing a room.',
					'Keep the routine identical for a week so improvements are measurable. Rotate maps later — Autohaven Wreckers one day, The MacMillan Estate the next — after the habit sticks.',
				],
			},
			{
				h2: 'What to do right before you ready up',
				paragraphs: [
					'Check loadout meds and skill checks, confirm your map exit gates, and skim <a href="/updates/">cheat status</a> if you use overlays after a patch. Pair warmup with <a href="/blog/dbd-pro-settings-guide/">settings</a> and <a href="/blog/dbd-weapon-tier-list/">perk tiers</a> so you are not reinventing the kit every night.',
					'If the first two Survivor deaths feel mechanical, stop stacking kits and repeat five minutes of peek practice. Ego queueing while tilted is not a strategy.',
				],
			},
		],
	},
	{
		id: 'dbd-cheats-complete-guide',
		imageKey: 'espWallhack',
		published: '2026-07-30',
		updated: '2026-08-13',
		category: 'Cheats Guide',
		featured: true,
		slug: 'dbd-cheats-complete-guide-2026',
		title: 'DBD Hacks 2026: Complete Undetected Guide',
		metaDescription:
			'A clear 2026 guide to dead by daylight cheats — what ESP, aimbot, and radar actually do in Dead by Daylight, how EAC maintenance works, and how to buy safely.',
		h1: 'DBD Hacks in 2026: What They Are and How to Use Them Carefully',
		intro:
			'People search “dead by daylight cheats” for a simple reason: Dead by Daylight is information-heavy, punishing, and full of exit gate campers. This guide explains what modern undetected packages actually include, how EAC maintenance works, and how to decide whether a tool fits your play style.',
		keywords: [
			'dead by daylight cheats',
			'undetected dead by daylight cheats',
			'dbd esp',
			'dbd aimbot',
			'eac',
		],
		imageAlt: 'Overview of DBD Hacks ESP aimbot and radar tools for 2026',
		sections: [
			{
				h2: 'What do people mean when they say dead by daylight cheats?',
				paragraphs: [
					'In plain language, dead by daylight cheats are second killer pressure tools that add information or aim assistance on top of the Dead by Daylight client. The common stack is ESP wallhack for players and loot, a World ESP for threats outside your view, and configurable aimbot for firefights. One license should cover that loop instead of forcing you to juggle separate downloads.',
					'Searchers also say “dead by daylight cheats,” “dbd hacks,” or “dbd wallhack.” Those phrases usually point at the same intent: survive trials with better reads. Start at our <a href="/dbd-cheats/">dead by daylight cheats pillar</a> if you want the product overview without the long essay.',
				],
			},
			{
				h2: 'ESP, aimbot, and radar — what each tool is for',
				paragraphs: [
					'ESP answers “who is near me and what is worth looting?” Aimbot answers “can I finish the fight once I choose it?” Radar answers “is someone flanking while I heal?” Used together, they cover information and combat. Used badly, they create noisy overlays and obvious aim corrections.',
					'Deep dives live on <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">aimbot</a>, <a href="/dbd-wallhack/">wallhack</a>, and <a href="/dbd-world-esp/">radar</a>. Read those before you buy if you only need one job done well.',
				],
			},
			{
				h2: 'Easy Anti-Cheat, “undetected,” and honest expectations',
				paragraphs: [
					`${EXT.eac} protects Dead by Daylight. No seller can promise permanent undetected status. What a serious vendor can offer is maintenance: rebuilds after patches, a public status note, and clear setup steps. That workflow is documented on <a href="/undetected-dbd-cheats/">undetected dead by daylight cheats</a> and <a href="/eac-bypass/">EAC maintenance</a>.`,
					'Before every patch-day queue, read <a href="/updates/">Updates</a>. If status is quiet, wait. Responsible settings matter as much as the binary itself.',
				],
			},
			{
				h2: 'How to buy and set up without wasting a night',
				paragraphs: [
					'Compare monthly and lifetime on <a href="/pricing/">Pricing</a>, then follow <a href="/setup/">Setup</a> after delivery. Keep your order ID ready for <a href="/support/">Support</a>. If you are still shopping, the <a href="/blog/dbd-cheats-cheats-buyers-guide/">buyers guide</a> lists the checklist we wish every shopper used.',
					'DBD Hacks is built for Windows PC Survivor and Killer play. It will not replace map knowledge — it amplifies the reads you already practice in trials.',
				],
			},
		],
	},
	{
		id: 'dbd-cheats-cheats-buyers-guide',
		imageKey: 'cheatsPackage',
		published: '2026-07-28',
		updated: '2026-08-13',
		category: 'Buyers Guide',
		featured: true,
		slug: 'dbd-cheats-cheats-buyers-guide',
		title: 'Dead by Daylight Cheats Buyers Guide',
		metaDescription:
			'What to check before you buy dead by daylight cheats — status pages, ESP features, aimbot, refunds, pricing, and red flags in 2026.',
		h1: 'Dead by Daylight Cheats: What to Check Before You Buy',
		intro:
			'Buying dead by daylight cheats is noisy. Every storefront promises “undetected,” instant delivery, and god mode. This buyers guide slows you down with a practical checklist so you spend money on maintenance and clarity — not banners.',
		keywords: [
			'dead by daylight cheats',
			'dead by daylight cheats buyers guide',
			'buy dead by daylight cheats',
			'undetected eft cheats',
			'dbd pricing',
		],
		imageAlt: 'Checklist for buying Dead by Daylight cheats safely',
		sections: [
			{
				h2: 'Start with status, not screenshots',
				paragraphs: [
					'Ask whether the seller publishes a dated status page after EAC or client patches. Fancy galleries do not help if the tool is offline for three days. DBD Hacks posts rebuild notes on <a href="/updates/">Updates</a> for that reason.',
					'If a shop only answers in private Discord and never writes public notes, assume you will miss patch windows.',
				],
			},
			{
				h2: 'Feature checklist that matches real DBD trials',
				paragraphs: [
					'For Dead by Daylight, useful features usually mean player ESP with distance, object filters, exit gate awareness, radar for approaches, and aimbot you can tone down. “Unlock all” marketing and battle-royale leftovers are red flags that the page was cloned from another game.',
					'Compare the stack on <a href="/features/">Features</a>, <a href="/dbd-esp/">ESP</a>, and <a href="/dbd-aimbot/">Aimbot</a>. If radar matters to how you hold exit gates, confirm it exists before checkout.',
				],
			},
			{
				h2: 'Price, delivery, and support questions worth asking',
				paragraphs: [
					'Know whether you are paying monthly or lifetime, how the license arrives, and how fast support replies with an order ID. Read the <a href="/refund-policy/">refund policy</a> before you pay — digital tools often have narrow windows.',
					'Our plans live on <a href="/pricing/">Pricing</a>. Setup steps are on <a href="/setup/">Setup</a>. If something fails after a patch, <a href="/support/">Support</a> needs your order details, Windows version, and what you already tried.',
				],
			},
		],
	},
	{
		id: 'dbd-cheats-2026-whats-new',
		imageKey: 'hero',
		published: '2026-07-26',
		updated: '2026-08-13',
		category: 'Product Updates',
		featured: false,
		slug: 'dbd-cheats-2026-whats-new',
		title: 'DBD Hacks 2026: What Changed This Year',
		metaDescription:
			'What changed for dead by daylight cheats in 2026 — chapter cadence, EAC maintenance habits, ESP focus, and how DBD Hacks adapted for Dead by Daylight.',
		h1: 'What Changed for DBD Hacks in 2026',
		intro:
			'2026 did not invent cheating in Dead by Daylight — it raised the bar for maintenance. Wipes, Easy Anti-Cheat pushes, and map updates punish stale builds. Here is what changed in how serious dead by daylight cheats packages need to operate.',
		keywords: [
			'dead by daylight cheats 2026',
			'eft cheats 2026',
			'eac 2026',
			'dbd chapter',
			'dead by daylight cheats updates',
		],
		imageAlt: '2026 updates for DBD Hacks on Dead by Daylight',
		sections: [
			{
				h2: 'Why 2026 buyers care more about status pages',
				paragraphs: [
					'Players got tired of “undetected forever” slogans. They want a dated note after patches. That is why we invest in the <a href="/updates/">Updates</a> log and the <a href="/undetected-dbd-cheats/">undetected explainer</a> instead of empty guarantees.',
					`${EXT.eac} and Dead by Daylight client updates still force rebuilds. The shops that survive are the ones that communicate during those windows.`,
				],
			},
			{
				h2: 'Feature focus shifted toward trial information',
				paragraphs: [
					'The winning feature set in 2026 is still ESP, radar, and tunable aimbot — because DBD fights are about information and first peeks. Loud rage features matter less than readable overlays you can turn down near exit gates.',
					'See the current stack on <a href="/features/">Features</a> and the pillar at <a href="/dbd-cheats/">dead by daylight cheats</a>.',
				],
			},
			{
				h2: 'What we recommend you do differently this year',
				paragraphs: [
					'Check status before patch-day queues. Keep aimbot conservative. Use object ESP filters so your screen stays clean. Read the <a href="/blog/dbd-cheats-complete-guide-2026/">complete 2026 guide</a> if you are new to the category.',
					'Pricing remains monthly and lifetime on <a href="/pricing/">Pricing</a> with digital delivery after payment.',
				],
			},
		],
	},
	{
		id: 'dbd-aimbot-settings-guide',
		imageKey: 'aimbotCombat',
		published: '2026-07-24',
		updated: '2026-08-13',
		category: 'Aimbot',
		featured: false,
		slug: 'dbd-aimbot-settings-guide',
		title: 'DBD Aimbot Settings: Smooth FOV Without Looking Robotic',
		metaDescription:
			'How to tune dbd aimbot and aimbot settings — FOV, smoothness, bone priority, and per-killer profiles that feel natural in Dead by Daylight trials.',
		h1: 'DBD Aimbot Settings That Feel Natural',
		intro:
			'A harsh aimbot gets you killed by reports and by your own bad habits. Soft, tunable aim assistance is what most Dead by Daylight players actually want. Here is how to think about FOV, smoothness, and weapon profiles.',
		keywords: [
			'dbd aimbot settings',
			'dbd aimbot',
			'aimbot fov',
			'dbd aim assist',
			'dead by daylight cheats',
		],
		imageAlt: 'Aimbot and FOV settings for DBD aimbot on Windows PC',
		sections: [
			{
				h2: 'Start softer than you think you need',
				paragraphs: [
					'Begin with a smaller FOV and higher smoothness so the assist helps tracking instead of snapping. Play five trials on Autohaven Wreckers or Autohaven and only then widen FOV. If friends watching a demo say it looks robotic, you went too far.',
					'Full control docs live on <a href="/dbd-aimbot/">DBD Aimbot</a> and <a href="/dbd-skill-check/">aimbot</a>.',
				],
			},
			{
				h2: 'Per-killer profiles beat one global slider',
				paragraphs: [
					'Survivor and Killer roles want different assist. Save separate profiles so mid-chase sprays and long The MacMillan Estate peeks do not share the same magnet. Bone priority should favor what you can actually hit under stress — usually upper chest to head transitions, not miracles.',
					'Hotkeys matter mid-trial. You need to disable assist when you are looting friendlies or holding a suspicious angle where obvious corrections would look wrong.',
				],
			},
			{
				h2: 'Pair aim settings with information tools',
				paragraphs: [
					'Aimbot finishes fights that ESP and radar help you choose. If your overlays are noisy, fix <a href="/dbd-esp/">ESP categories</a> before blaming aim. After EAC patches, confirm <a href="/updates/">Updates</a> before you tune anything on an old build.',
				],
			},
		],
	},
	{
		id: 'dbd-esp-wallhack-explained',
		imageKey: 'espWallhack',
		published: '2026-07-21',
		updated: '2026-08-13',
		category: 'ESP',
		featured: false,
		slug: 'dbd-esp-wallhack-explained',
		title: 'DBD ESP and Wallhack Explained in Plain English',
		metaDescription:
			'What dbd ESP and wallhack actually show in Dead by Daylight — players, loot, distance, exit gates — and how to keep overlays readable in trials.',
		h1: 'DBD ESP and Wallhack Explained Clearly',
		intro:
			'“ESP” and “wallhack” get used interchangeably. In Dead by Daylight they both mean information through walls — but the useful details are distance, filters, and what you choose to hide so your screen stays readable.',
		keywords: [
			'dbd esp',
			'dbd wallhack',
			'eft esp',
			'loot esp dbd',
			'dead by daylight cheats',
		],
		imageAlt: 'ESP wallhack overlay showing players and loot in Dead by Daylight',
		sections: [
			{
				h2: 'What ESP shows during a real raid',
				paragraphs: [
					'Player ESP outlines Survivors and Killers through walls and terrain, often with distance. Object ESP highlights chests or high-value items. Extract cues help you avoid camping surprises. That information gap is why people search for dbd esp in the first place.',
					'Read the dedicated pages for <a href="/dbd-esp/">ESP</a> and <a href="/dbd-wallhack/">wallhack</a> if you want category-level detail.',
				],
			},
			{
				h2: 'How to keep overlays from becoming noise',
				paragraphs: [
					'Toggle categories. During a hot push you may want players only. During a loot route you may want chests. Near exit gate you may want threats and exits. Too many boxes at once create hesitation — the opposite of an advantage.',
					'Pair ESP with <a href="/dbd-world-esp/">radar</a> for approaches outside your field of view. Visibility wins information wars; aim tools cover the firefight afterward.',
				],
			},
			{
				h2: 'Maintenance and responsible use',
				paragraphs: [
					'ESP modules rebuild after EAC patches like everything else. Check <a href="/updates/">Updates</a> and the <a href="/undetected-dbd-cheats/">undetected guide</a>. No overlay replaces listening and map knowledge — it shortens the time between “I heard something” and “I know where.”',
				],
			},
		],
	},
	{
		id: 'undetected-dbd-cheats-eac',
		imageKey: 'playerEsp',
		published: '2026-07-19',
		updated: '2026-08-13',
		category: 'Undetected',
		featured: true,
		slug: 'undetected-dbd-cheats-eac',
		title: 'Undetected DBD Hacks and Easy Anti-Cheat Reality',
		metaDescription:
			'What “undetected dead by daylight cheats” really means under Easy Anti-Cheat — maintenance, patch days, risk, and how to read status before you queue Dead by Daylight.',
		h1: 'Undetected DBD Hacks: What Easy Anti-Cheat Reality Looks Like',
		intro:
			'“Undetected” is the most abused word in cheat marketing. Under Easy Anti-Cheat, it means a package is being maintained against current detections — not that bans are impossible. Here is the honest version for Dead by Daylight players.',
		keywords: [
			'undetected dead by daylight cheats',
			'eac dbd',
			'dbd ban risk',
			'eft undetected',
			'dbd status',
		],
		imageAlt: 'EAC maintenance status for undetected DBD cheats',
		sections: [
			{
				h2: 'What undetected can honestly mean',
				paragraphs: [
					`Easy Anti-Cheat is documented at ${EXT.eac}. It evolves. Vendors who care publish rebuild notes when ESP, radar, or aim modules need work. DBD Hacks does that on <a href="/updates/">Updates</a> and explains the workflow on <a href="/eac-bypass/">EAC maintenance</a>.`,
					'If a seller says “100% undetected forever,” treat it as advertising. Your risk also depends on how obviously you play.',
				],
			},
			{
				h2: 'Patch-day habits that reduce pain',
				paragraphs: [
					`After a DBD or EAC update, wait for a status note before queueing. Confirm Dead by Daylight services on ${EXT.status} if the launcher itself is failing. Do not run yesterday’s build into today’s anti-cheat and call it bad luck.`,
					'Keep aimbot conservative and avoid highlight-reel rage settings that attract reports even when the binary is clean.',
				],
			},
			{
				h2: 'Where to go next',
				paragraphs: [
					'Read <a href="/undetected-dbd-cheats/">undetected dead by daylight cheats</a>, the <a href="/blog/dbd-cheats-complete-guide-2026/">2026 complete guide</a>, and <a href="/pricing/">Pricing</a> if you want the maintained stack. Undetected status is a process you check — not a sticker on the box.',
				],
			},
		],
	},
	{
		id: 'dbd-cheats-vs-cheatvault',
		imageKey: 'cheatsPackage',
		published: '2026-07-15',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'dbd-cheats-vs-cheatvault-comparison',
		title: 'DBD Hacks vs Typical Budget EFT Shops',
		metaDescription:
			'How DBD Hacks compares to typical budget Dead by Daylight cheat shops — ESP depth, radar, status pages, pricing, and what “cheap” usually skips.',
		h1: 'DBD Hacks vs Typical Budget EFT Cheat Shops',
		intro:
			'Budget Dead by Daylight stores often look identical: neon banners, “undetected” badges, and a low weekly price. DBD Hacks costs more than the cheapest tier on purpose. Here is what you usually trade when you chase the lowest sticker.',
		keywords: [
			'dead by daylight cheats comparison',
			'budget eft cheats',
			'dead by daylight cheats vs other shops',
			'esp radar pricing',
			'dead by daylight cheats',
		],
		imageAlt: 'Comparing DBD Hacks features against budget EFT cheat shops',
		sections: [
			{
				h2: 'What budget shops usually optimize for',
				paragraphs: [
					'Low entry price and fast checkout. That can be fine for a weekend experiment. The common gaps are thin object ESP, no real radar, Discord-only status, and slow rebuild communication after EAC pushes.',
					'DBD Hacks focuses on a full trial stack — player ESP, object filters, radar, aimbot profiles — with a public <a href="/updates/">Updates</a> page. See <a href="/features/">Features</a> for the list.',
				],
			},
			{
				h2: 'Price versus what you touch every trial',
				paragraphs: [
					'If you only want basic player boxes in casual trials, a cheaper shop might feel enough. If you hold exit gates, run perk builds, and hate dying to unseen approaches, radar and clean filters pay for themselves quickly.',
					'Our monthly and lifetime options are on <a href="/pricing/">Pricing</a>. Read the <a href="/blog/dbd-cheats-cheats-buyers-guide/">buyers guide</a> before you compare three storefronts at once.',
				],
			},
			{
				h2: 'How to decide without brand loyalty',
				paragraphs: [
					'Write down must-haves: dated status, object ESP, radar, aimbot profiles, Windows PC support. Open each seller’s status channel and feature list side by side. If a shop fails the status test, price does not matter.',
					'Then return to <a href="/dbd-cheats/">dead by daylight cheats</a> and <a href="/undetected-dbd-cheats/">undetected notes</a> if that checklist matches what we ship.',
				],
			},
		],
	},
	{
		id: 'elitefn-two-week-test',
		imageKey: 'aimbotSkeleton',
		published: '2026-07-08',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'elitefn-vs-dbd-cheats-two-week-test',
		title: 'I Tested Another DBD Cheat for 2 Weeks First',
		metaDescription:
			'A two-week test of another Dead by Daylight cheat before switching to DBD Hacks — ESP feel, aimbot, patch downtime, and support differences.',
		h1: 'I Tested Another DBD Cheat for Two Weeks Before Switching',
		intro:
			'My Discord kept recommending a popular Dead by Daylight cheat brand. I gave it fourteen days on the same PC and playlists, then moved to DBD Hacks. This is what actually differed — without the usual affiliate script.',
		keywords: [
			'dead by daylight cheats review',
			'eft cheat comparison',
			'dbd cheat downtime',
			'aimbot test',
			'dead by daylight cheats',
		],
		imageAlt: 'Two week hands-on comparison between DBD cheat providers',
		sections: [
			{
				h2: 'Week one — setup and first impressions',
				paragraphs: [
					'Delivery was fine: license in email, loader as admin, overlays disabled. Menu learning took a couple evenings. Player ESP was readable. Object ESP felt secondary. I ran several nights with information tools only and no aim assist so I could judge visibility on its own.',
					'DBD Hacks later felt similar on install time, but filters for objective and exit gates were easier to toggle independently during perk builds.',
				],
			},
			{
				h2: 'Aimbot and the mid-trial feel',
				paragraphs: [
					'Conservative FOV aimbot helped SMG and AR tracking. Sniping needed manual profile swaps that slowed me down. When I pushed smoothness too low, corrections looked obvious in review clips. Tuning toward smoother tracking fixed kills and reduced the robotic look.',
					'On DBD Hacks I relied more on per-killer profiles so mid-chase and long peeks did not share one magnet. Details are in the <a href="/dbd-aimbot/">aimbot guide</a>.',
				],
			},
			{
				h2: 'The patch window that ended the trial',
				paragraphs: [
					'A DBD plus EAC update landed mid-test. The other tool’s status went quiet without a clear ETA. I skipped queues while my group played without me. A rebuild arrived days later; stability was mixed. That downtime — not a single feature screenshot — pushed me to switch.',
					'DBD Hacks won me over with written notes on <a href="/updates/">Updates</a>. I still do not queue blind after patches on any tool.',
				],
			},
			{
				h2: 'After switching — what improved for my trials',
				paragraphs: [
					'Independent objective and player toggles cleaned late-trial screens. Radar helped exit gate reads. Support replies with order ID were fast enough during setup week. Pricing math favored a single full stack over stacking weekly subs — see <a href="/pricing/">Pricing</a>.',
					'If you run your own test, measure patch downtime hours, not just day-one vibes. Then read <a href="/setup/">Setup</a> before you buy anything.',
				],
			},
		],
	},
	{
		id: 'dbd-cheats-vs-ghostware',
		imageKey: 'espWallhack',
		published: '2026-07-05',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'dbd-cheats-vs-ghostware-features-pricing',
		title: 'Full-Stack DBD Hacks vs Minimal ESP Tools',
		metaDescription:
			'Full-stack DBD Hacks versus minimal ESP-only Dead by Daylight tools — feature depth, radar, aimbot, pricing, and who should buy which style.',
		h1: 'Full-Stack DBD Hacks vs Minimal ESP-Only Tools',
		intro:
			'Some Dead by Daylight tools sell a slim ESP module and call it a day. DBD Hacks ships the wider trial stack. Neither philosophy is automatically wrong — they fit different players. Here is a clear comparison.',
		keywords: [
			'dbd esp only cheat',
			'dead by daylight cheats features',
			'radar vs esp',
			'dbd cheat pricing',
			'dead by daylight cheats',
		],
		imageAlt: 'Full stack DBD Hacks compared with minimal ESP-only tools',
		sections: [
			{
				h2: 'Two philosophies: minimal surface vs full trial loop',
				paragraphs: [
					'Minimal tools focus on player boxes and light assist. Fewer features can mean a simpler menu and a lower price. Full-stack tools add object filters, radar, and aimbot profiles so one menu covers information and fights.',
					'DBD Hacks is intentionally full-stack. If you only need outlines in quiet trials, a slim ESP product may feel enough. If you rotate, loot, and hold exit gates, missing radar becomes obvious.',
				],
			},
			{
				h2: 'Feature and pricing reality check',
				paragraphs: [
					'DBD Hacks monthly is $35 and lifetime is $150 for ESP, radar, and aimbot together. Slimmer competitors often undercut sticker price while charging extra for modules you assumed were included. Always read the feature list, not the banner.',
					'Our public comparison points live on <a href="/features/">Features</a>, <a href="/dbd-esp/">ESP</a>, <a href="/dbd-world-esp/">radar</a>, and <a href="/pricing/">Pricing</a>.',
				],
			},
			{
				h2: 'Detection talk without fairy tales',
				paragraphs: [
					'Smaller user bases generate fewer public ban screenshots — that is not proof of safety. Larger brands generate more noise even when maintenance is solid. Judge sellers by patch communication speed and whether you can find a dated status note.',
					'DBD Hacks documents maintenance on <a href="/eac-bypass/">Easy Anti-Cheat workflow</a> and <a href="/undetected-dbd-cheats/">undetected notes</a>.',
				],
			},
			{
				h2: 'Which style should you buy?',
				paragraphs: [
					'Choose minimal ESP if budget is tight, you play casually, and you accept Discord-only status tracking. Choose DBD Hacks if radar, object filters, configurable aimbot, and a public Updates URL are must-haves.',
					'Decide your must-haves on paper first. Then open <a href="/dbd-cheats/">dead by daylight cheats</a> or keep shopping slim tools — but do not skip patch-day checks on either path.',
				],
			},
		],
	},
];

function translationBlock(src) {
	const sections = src.sections
		.map(
			(s) => `			{
				h2: ${JSON.stringify(s.h2)},
				paragraphs: [
${s.paragraphs.map((p) => `					${JSON.stringify(p)},`).join('\n')}
				],
			}`,
		)
		.join(',\n');

	return `{
		slug: ${JSON.stringify(src.slug)},
		title: ${JSON.stringify(src.title)},
		metaDescription: ${JSON.stringify(src.metaDescription)},
		h1: ${JSON.stringify(src.h1)},
		intro: ${JSON.stringify(src.intro)},
		keywords: ${JSON.stringify(src.keywords)},
		imageAlt: ${JSON.stringify(src.imageAlt)},
		sections: [
${sections}
		],
	}`;
}

function buildPost(src) {
	const translations = LOCALES.map((code) => `\t\t${code}: ${translationBlock(src)},`).join('\n');
	return `	{
		id: ${JSON.stringify(src.id)},
		imageKey: ${JSON.stringify(src.imageKey)},
		published: ${JSON.stringify(src.published)},
		updated: ${JSON.stringify(src.updated)},
		category: ${JSON.stringify(src.category)},
		featured: ${src.featured ? 'true' : 'false'},
		translations: {
${translations}
		},
	}`;
}

const file = `/* Auto-generated by scripts/generate-blog-posts.mjs — do not edit by hand. */
import type { BlogPostDefinition } from './types';

export const blogPosts: BlogPostDefinition[] = [
${sources.map(buildPost).join(',\n')}
];
`;

writeFileSync(OUT, file);
console.log(`Wrote ${sources.length} NLP blog posts → ${OUT}`);
