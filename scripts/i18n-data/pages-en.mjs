import { HERO_IMAGES, clampTitle, clampDesc, section, stripFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'DBD Hacks 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'DBD cheats for Windows PC — ESP, aimbot, radar, and EAC updates. Compare plans and buy.',
		h1: 'DBD Hacks — Undetected ESP, Wallhack & Aimbot',
		intro:
			'DBD Hacks is the undetected dead by daylight cheats package for Windows PC — built for Dead by Daylight on Windows PC. DBD esp wallhack, World ESP, and dbd aimbot with EAC maintenance after every major patch.',
		imageAlt: "DBD Hacks homepage hero — ESP and aimbot for Dead by Daylight",
		galleryTitle: 'DBD Hacks gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose DBD cheats in 2026',
				'DBD rewards trial awareness. DBD Hacks combines ESP wallhack for Survivors, Killers, and generators, radar-style threat cues, and configurable Aimbot so you can read chases before committing — in trial, killer-side, and ranked trials.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.dbd} and ${EXT.eac}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include EAC maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/dbd-cheats/">DBD cheats pillar</a>, <a href="/dbd-esp/">ESP guide</a>, <a href="/dbd-aimbot/">Aimbot controls</a>, and <a href="/dbd-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, world esp, and Aimbot in one license',
				'Instead of stacking separate tools, DBD Hacks bundles player ESP wallhack, objective markers, World ESP overlays, and Aimbot profiles in one undetected package built for Survivor trials and killer-sides — covering both “dead by daylight cheats” and “dead by daylight cheats” search intent.',
				'Browse the <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-esp/">wallhack</a>, and <a href="/dbd-world-esp/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Behaviour Interactive service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'dbd-esp': {
		title: 'DBD ESP 2026 | Player Boxes & Wallhack',
		description:
			'DBD ESP for Windows PC — player boxes, objective markers, and distance readouts. Part of our undetected dead by daylight cheats for Dead by Daylight.',
		h1: 'DBD ESP — Player Boxes & Wallhack',
		intro:
			'DBD esp visibility tools for trial and killer-side. Read enemy teams, Survivors, Killers, loot, and distance before you commit — toggleable dbd esp wallhack overlays bundled in our dead by daylight cheats package.',
		imageAlt: "DBD ESP player boxes and distance readouts in a trial",
		galleryTitle: 'DBD ESP overlay visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'DBD wallhack guide',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'What DBD ESP solves in trials',
				'DBD maps punish incomplete information. DBD Hacks ESP wallhack helps you spot enemy teams early, spot Survivors and Killers before they push your angle, and mark bloodpoint gains worth the detour.',
				'On raid, killer-side, and ranked trials, that visibility gap is often the difference between a clean second killer pressure and a chapterd team. ESP ships bundled with world ESP overlays and Aimbot in one license.',
				`DBD’s live seasons and map updates are published by Behaviour Interactive (${EXT.dbd}). When map tiles or objective rules shift, ESP categories stay useful because they track players and chests — not a single static landmark.`,
			),
			section(
				'Player, boss, and object ESP wallhack categories',
				'Toggle enemy player outlines, killer markers, exit gate cues, and objective pins so only trial-critical ESP wallhack overlays stay active during loops.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Survivor trials and killer-sides lobbies alike.',
				'Compare category detail on the <a href="/dbd-esp/">wallhack page</a> and pair visibility with the <a href="/dbd-world-esp/">world esp</a> for approaches outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster loops',
					'Boss and exit gate awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with EAC maintenance',
				'DBD Hacks ESP wallhack is maintained for DBD with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/updates/">EAC bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first trial.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/dbd-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/dbd-cheats/">DBD cheats pillar</a> and <a href="/dbd-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'dbd-aimbot': {
		title: 'DBD Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'DBD aimbot with aimbot tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our dead by daylight cheats package.',
		h1: 'DBD Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for DBD firefights. Smoothness, FOV, bone priority, and per-killer profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "DBD aimbot and aimbot controls on Windows PC",
		galleryTitle: 'DBD Aimbot combat previews',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'Aimbot tuned for DBD combat pace',
				'DBD mixes long-range AR fights with close-quarters SMG pushes. DBD Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during team fights and close-range chases.',
				`Weapon balance and season rules change via ${EXT.dbd}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-killer Aimbot profiles',
				'Save separate Aimbot profiles for Survivor and Killer roles. Switch between long-range killer chases and mid-chase clears without reopening menus every trial.',
				'Prefer softer tracking? Read the <a href="/dbd-aimbot/">aimbot guide</a>.',
				'Aimbot ships alongside <a href="/dbd-esp/">ESP wallhack</a> and <a href="/dbd-world-esp/">World ESP</a> in the same DBD Hacks license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-killer profile slots for AR / SMG / killer power',
				],
			),
			section(
				'EAC maintenance for undetected Aimbot',
				'DBD Hacks rebuilds Aimbot behavior when Easy Anti-Cheat or major DBD patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/updates/">EAC maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'DBD Hacks Features | ESP, Soft Aim & Radar',
		description:
			'Full dead by daylight cheats feature list: ESP boxes, aimbot, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'DBD Hacks Features — Full Control List',
		intro:
			'Every ESP wallhack, world esp, and Aimbot control included in the DBD Hacks package for DBD on Windows PC — with EAC maintenance after major patches.',
		imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
		galleryTitle: 'DBD Hacks feature gallery',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, killer and exit gate awareness cues, objective and container markers, distance readouts, snaplines, and toggleable ESP categories for trial-critical overlays only.',
				'Team and enemy colour coding supports Survivor trials and killer-sides. Deep-dive the <a href="/dbd-esp/">ESP page</a> and <a href="/dbd-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.dbd} chapter and map updates — toggleable ESP categories keep overlays useful when map tiles rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'World ESP overlay with directional threat cues, configurable range for loops and late-trial exit gates, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-killer profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live DBD sessions. See <a href="/dbd-world-esp/">radar</a> and <a href="/dbd-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/dbd-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and EAC maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. EAC maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@dbdhack.org.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/dbd-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'DBD Hacks Pricing | $35/mo or $150 Life',
		description:
			'DBD cheats pricing: $35/month or $150 lifetime for ESP, aimbot, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'DBD Hacks Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected DBD Hacks — ESP wallhack, world esp, and Aimbot for DBD on Windows PC. Instant digital delivery after payment.',
		imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
		galleryTitle: 'DBD Hacks package visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime DBD Hacks plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, world esp, and Aimbot access with EAC maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected DBD Hacks package — ideal if you play DBD regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, objective markers, World ESP overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major DBD patches.',
				`Season calendars and client updates come from ${EXT.dbd}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/dbd-cheats/">DBD cheats</a>, <a href="/dbd-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'DBD Hacks Setup | Windows PC Guide',
		description:
			'Set up dead by daylight cheats on Windows PC — activate ESP boxes, aimbot profiles, and . Check EAC updates before your first queue.',
		h1: 'DBD Hacks Setup — Windows PC Guide',
		intro:
			'Install and configure DBD Hacks for DBD on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify EAC maintenance status before queueing.',
		imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
		galleryTitle: 'DBD Hacks setup visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install DBD Hacks',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest EAC maintenance build before launching DBD.',
				`Also glance at ${EXT.status} if Behaviour Interactive services look unstable on patch day — a platform outage is not a license fault.`,
				'DBD Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for Survivors, Killers, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, and <a href="/dbd-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/dbd-aimbot/">aimbot</a> recommendations before raising aggressiveness.',
			),
			section(
				'After DBD or Easy Anti-Cheat patches',
				'When Behaviour Interactive ships a major DBD update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/updates/">EAC bypass page</a> and <a href="/dbd-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'DBD Hacks Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'DBD cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, aimbot, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'DBD Hacks Updates — Maintenance Log',
		intro:
			'Track EAC maintenance and DBD patch rebuilds for the undetected ESP wallhack, world esp, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "DBD Hacks live status after EAC and game patches",
		galleryTitle: 'DBD patch and maintenance visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/dbd-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'DBD and Easy Anti-Cheat receive frequent patches. DBD Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Behaviour Interactive platform health and this page for DBD Hacks build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches in trial and killer-side.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">EAC bypass guide</a> and <a href="/dbd-cheats/">undetected DBD cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.dbd}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a EAC update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'DBD Hacks FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'DBD cheats FAQ: ESP boxes, aimbot, EAC maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'DBD Hacks FAQ — Common Questions',
		intro:
			'Answers about undetected DBD Hacks — ESP wallhack, world esp, Aimbot, EAC maintenance, checkout, and DBD compatibility on Windows PC.',
		imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
		galleryTitle: 'DBD Hacks FAQ visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is DBD Hacks?',
				'DBD Hacks is an undetected cheat package for DBD on Windows PC. It includes ESP wallhack, World ESP-style awareness, and Aimbot controls with EAC maintenance updates.',
				'Packages cover trial and killer-side. Explore <a href="/features/">Features</a> for the full control list and <a href="/dbd-esp/">ESP</a> / <a href="/dbd-aimbot/">Aimbot</a> for module detail.',
				`DBD itself is published by Behaviour Interactive (${EXT.dbd}). Cheats are second killer pressure tools and may violate Behaviour Interactive' rules — use is at your own risk.`,
			),
			section(
				'Are DBD Hacks undetected in 2026?',
				'DBD Hacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/dbd-cheats/">undetected DBD cheats</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@dbdhack.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'DBD Hacks Support | Help & Contact',
		description:
			'Contact dead by daylight cheats support for licenses, ESP setup, aimbot profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'DBD Hacks Support — Contact Us',
		intro:
			'Get help with DBD Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and EAC maintenance for DBD on Windows PC.',
		imageAlt: "DBD Hacks support page for license and setup help",
		galleryTitle: 'DBD Hacks support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after EAC maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. DBD Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Behaviour Interactive bans.',
				`Account and game policy questions belong with Behaviour Interactive. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. EAC bypass notes live on the dedicated <a href="/updates/">Easy Anti-Cheat page</a>.',
				'Email: support@dbdhack.org',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected DBD Hacks 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected dead by daylight cheats with EAC maintenance for ESP boxes, aimbot, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected DBD Hacks — Easy Anti-Cheat Maintenance',
		intro:
			'How DBD Hacks stays maintained for DBD after Easy Anti-Cheat patches — ESP wallhack, world esp, and Aimbot rebuilds for Windows PC.',
		imageAlt: "DBD Hacks undetected status overview for Windows PC",
		galleryTitle: 'Undetected DBD Hacks visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'EAC bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for DBD Hacks',
				'Undetected DBD Hacks means the package is actively maintained against Easy Anti-Cheat and major DBD patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after EAC security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; DBD client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'EAC maintenance workflow',
				'When Easy Anti-Cheat or DBD updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">EAC bypass DBD guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/dbd-cheats/">DBD cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'DBD Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'DBD wallhack ESP with player boxes and objective markers for Windows PC. Undetected dead by daylight cheats — learn overlays and buy.',
		h1: 'DBD Wallhack — ESP Boxes & Visibility',
		intro:
			'DBD wallhack ESP for DBD — see players, loot, bosses, and chests through toggleable wallhack overlays built for Survivor trials and killer-sides.',
		imageAlt: "DBD wallhack visibility through walls in a trial",
		galleryTitle: 'DBD wallhack ESP gallery',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'DBD ESP page',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A DBD wallhack focuses on information — player outlines, objective pins, Killer threat cues — rather than automatic aiming. DBD Hacks bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during loops and exit gate reads.',
				'For the broader ESP keyword page see <a href="/dbd-esp/">DBD ESP</a>; for combat assist see <a href="/dbd-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support raid, killer-side, and ranked trials with distance readouts and snaplines for chase control.',
				`Season maps and map tile changes are announced via ${EXT.dbd}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/dbd-world-esp/">world esp</a> cues for approaches during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/dbd-cheats/">undetected DBD cheats</a> and <a href="/updates/">EAC bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/dbd-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	'world-esp': {
		title: 'DBD Radar Hack 2026 | 2D Threat Overlay',
		description:
			'DBD world esp for flank awareness on Windows PC. Bundled with ESP boxes, aimbot, and radar in our dead by daylight cheats package.',
		h1: 'DBD Radar Hack — 2D Threat Awareness',
		intro:
			'World ESP-style overlay for DBD — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "DBD World ESP overlay showing nearby threats",
		galleryTitle: 'DBD world esp visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'Why world esp matters in DBD',
				'trial chases happen in three dimensions — tiles, windows, and approaches. A World ESP overlay shows nearby player threats outside direct line of sight so you can reposition before a second killer pressure.',
				'DBD Hacks radar complements <a href="/dbd-esp/">ESP wallhack</a> markers during team pushes and exit gate camp fights.',
				`Mode rules and seasonal changes come from ${EXT.dbd}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early loops versus tight exit gate reads. Directional cues highlight approaches during tile loops and tile loops across trial and killer-side.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/dbd-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/dbd-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive EAC maintenance rebuilds with the full DBD Hacks package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major DBD patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/dbd-cheats/">undetected status</a>.',
			),
		],
	},
	'eac': {
		title: 'EAC Bypass DBD | DBD Hacks Maintenance',
		description:
			'How dead by daylight cheats rebuild after EAC patches — ESP boxes, aimbot, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'EAC Bypass — DBD Hacks Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for DBD Hacks — how ESP wallhack, world esp, and Aimbot rebuild after DBD security updates.',
		imageAlt: "DBD Hacks maintenance after a EAC patch",
		galleryTitle: 'EAC maintenance visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Behaviour Interactive' anti-cheat for DBD on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`DBD Hacks monitors EAC patch notes and DBD seasonal updates from ${EXT.dbd} to schedule module reviews.`,
				'“EAC bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a EAC patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Behaviour Interactive service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/dbd-cheats/">undetected DBD cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'EAC bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'DBD Hacks 2026 | ESP Soft Aim & Radar',
		description:
			'Best dead by daylight cheats 2026: ESP boxes, aimbot, and radar for Windows PC. Undetected dead by daylight cheats with EAC maintenance — compare and buy.',
		h1: 'DBD Hacks 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 DBD Hacks package for DBD — undetected ESP wallhack, world esp, and Aimbot with EAC maintenance, instant delivery, and Windows PC support.',
		imageAlt: "DBD Hacks product overview for Dead by Daylight",
		galleryTitle: 'DBD Hacks 2026 gallery',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why dead by daylight cheats buyers choose DBD Hacks in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. DBD Hacks bundles ESP wallhack, world esp, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.dbd}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover trial and killer-side loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, objective markers, World ESP overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/dbd-cheats/">DBD cheats pillar</a>, <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-esp/">wallhack</a>, <a href="/dbd-world-esp/">radar</a>, <a href="/dbd-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/dbd-cheats/">DBD cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/dbd-cheats/">DBD cheats</a> checklist, <a href="/blog/dbd-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@dbdhack.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'DBD Hacks 2026 | Undetected ESP Aimbot Guide',
		description:
			'DBD cheats for Windows PC: undetected ESP wallhack, world esp, and Aimbot with EAC maintenance. Compare dead by daylight cheats options and buy the full package.',
		h1: 'DBD Hacks — Undetected ESP, Aimbot & Wallhack',
		intro:
			'DBD cheats for trial and killer-side combine ESP wallhack visibility, World ESP-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for dead by daylight cheats in 2026.',
		imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
		galleryTitle: 'DBD cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/dbd-cheats/',
		sections: [
			section(
				'What DBD cheats include in 2026',
				'Players searching for DBD cheats usually want visibility and combat tools without stacking separate downloads. DBD Hacks bundles player ESP wallhack, objective markers, World ESP overlays, and configurable Aimbot in one maintained package — the same toolkit often called dead by daylight cheats.',
				'Coverage spans trial and killer-side with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.dbd}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this DBD cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/dbd-cheats/">dead by daylight cheats 2026</a> and <a href="/dbd-cheats/">DBD cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/dbd-esp/">DBD ESP</a>, <a href="/dbd-aimbot/">DBD Aimbot</a>, <a href="/dbd-esp/">wallhack</a>, <a href="/dbd-world-esp/">world esp</a>, and <a href="/dbd-aimbot/">aimbot</a>.',
				'Blog guides expand Easy Anti-Cheat keyword: <a href="/blog/dbd-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/dbd-cheats-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-dbd-cheats-eac/">undetected Easy Anti-Cheat notes</a>.',
			),
			section(
				'DBD cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. DBD Hacks maps the full trial loop: read enemy teams, track Killers and generators, spot approaches on radar, and tune Aimbot per killer class.',
				'Compare the <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/dbd-cheats/">mod menu</a>, <a href="/dbd-aimbot/">aimbot</a>, <a href="/dbd-esp/">ESP</a>.',
			),
			section(
				'Undetected DBD cheats with EAC maintenance',
				'Undetected DBD cheats require rebuilds after Easy Anti-Cheat and major DBD patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/updates/">EAC bypass guide</a> for the practical workflow. Pair with <a href="/dbd-cheats/">undetected DBD cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'DBD Hack Download 2026 | Instant Access',
		description:
			'DBD cheat download with instant license delivery — ESP boxes, aimbot, and radar for Windows PC. Buy, activate, and play.',
		h1: 'DBD Hack Download — Instant License Delivery',
		intro:
			'How DBD cheat download works for DBD — digital license delivery after payment confirmation, with ESP wallhack, world esp, and Aimbot access on Windows PC.',
		imageAlt: "DBD Hacks download and install delivery flow",
		galleryTitle: 'DBD cheat download visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How DBD cheat download delivery works',
				'After checkout confirms payment, DBD Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Behaviour Interactive services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every DBD cheat download includes player ESP wallhack, objective and container markers, World ESP overlays, Aimbot profiles, and in-client toggles for Survivor trials and killer-sides.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When DBD or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/dbd-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'DBD Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'DBD mod menu for in-match toggles — ESP boxes, aimbot, radar, and on Windows PC. Undetected dead by daylight cheats package.',
		h1: 'DBD Mod Menu — In-Client Control Panel',
		intro:
			'DBD mod menu controls for DBD — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your DBD session on Windows PC.',
		imageAlt: "DBD Hacks in-game menu controls",
		galleryTitle: 'DBD mod menu gallery',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a DBD mod menu controls',
				'A DBD mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. DBD Hacks keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, objective markers, vehicle cues, and per-killer Aimbot settings without alt-tabbing out of DBD.',
				'Control deep-dives: <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-world-esp/">radar</a>.',
			),
			section(
				'Mod menu categories for Survivor trials and killer-sides',
				'Separate ESP wallhack categories for players, loot, chests, and bosses let you reduce overlay noise during loops and exit gate reads.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.dbd} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/dbd-aimbot/">aimbot</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after EAC patches',
				'DBD mod menu behavior is rebuilt when Easy Anti-Cheat or major DBD updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">EAC bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'skill-check': {
		title: 'DBD Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'DBD aimbot settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our dead by daylight cheats with ESP boxes.',
		h1: 'DBD Soft Aim — Smooth Aimbot Controls',
		intro:
			'DBD aimbot settings for DBD — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "DBD aimbot FOV and smoothness settings",
		galleryTitle: 'DBD aimbot gallery',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/dbd-aimbot/',
		sections: [
			section(
				'What DBD aimbot means',
				'DBD aimbot refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. DBD Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during team fights.',
				'Full Aimbot documentation: <a href="/dbd-aimbot/">DBD Aimbot</a>. Alternate wording: <a href="/dbd-aimbot/">aimbot hack</a>.',
			),
			section(
				'Aimbot profiles per killer class',
				'Save separate aimbot profiles for Survivor and Killer roles. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Perk balances shift with ${EXT.dbd} balance patches — retune smoothness after major combat updates.`,
				'Aimbot ships alongside <a href="/dbd-esp/">ESP wallhack</a> and <a href="/dbd-world-esp/">World ESP</a> overlays.',
			),
			section(
				'Undetected aimbot with EAC maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best DBD Hacks 2026 | Buyer Guide',
		description:
			'Best dead by daylight cheats for 2026: ESP boxes, aimbot, and EAC maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best DBD Hacks — 2026 Buyer Guide',
		intro:
			'Compare the DBD cheats for DBD in 2026 — undetected ESP wallhack, world esp, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
		galleryTitle: 'Best DBD cheats gallery',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the DBD cheats in 2026',
				'The DBD cheats combine active EAC maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'DBD Hacks covers trial and killer-side with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best DBD cheats feature checklist',
				'Look for player ESP wallhack, objective markers, World ESP overlays, Aimbot profiles, hotkey toggles, and documented maintenance after DBD patches.',
				'Review <a href="/features/">Features</a>, <a href="/dbd-cheats/">undetected status</a>, and <a href="/dbd-cheats/">DBD cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/dbd-esp/">ESP</a>, <a href="/dbd-aimbot/">Aimbot</a>, <a href="/dbd-cheats/">hacks</a>.',
			),
			section(
				'Buying the DBD cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Behaviour Interactive terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'DBD Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'DBD aimbot hack with aimbot for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our dead by daylight cheats package.',
		h1: 'DBD Aimbot Hack — Soft Aim Assist',
		intro:
			'DBD aimbot hack tools for DBD — smoothness, FOV, bone priority, per-killer profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "DBD aimbot hack controls and bone priority",
		galleryTitle: 'DBD aimbot hack gallery',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/dbd-aimbot/',
		sections: [
			section(
				'DBD aimbot hack vs visibility tools',
				'A DBD aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle trial awareness. DBD Hacks bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for DBD combat pace across Survivor trials and killer-sides.',
				'Prefer softer tracking language? See <a href="/dbd-aimbot/">aimbot</a>. Full settings: <a href="/dbd-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during loops or late-trial exit gates.',
				'Per-killer profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.dbd} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">EAC bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/dbd-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'DBD ESP Hack 2026 | Player Boxes & Loot',
		description:
			'DBD ESP hack with player boxes and objective markers for Windows PC. Undetected dead by daylight cheats with — see overlays and buy.',
		h1: 'DBD ESP Hack — Player Boxes Guide',
		intro:
			'DBD ESP hack overlays for DBD — player outlines, Killer threat cues, objective and container markers with distance readouts across trial and killer-side.',
		imageAlt: "DBD ESP hack boxes and objective markers",
		galleryTitle: 'DBD ESP hack gallery',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/dbd-esp/',
		sections: [
			section(
				'What a DBD ESP hack shows',
				'A DBD ESP hack renders enemy player outlines, vehicle positions, and objective pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during team pushes and second killer pressure scenarios.',
				'Canonical visibility guide: <a href="/dbd-esp/">DBD ESP</a>. Wallhack wording: <a href="/dbd-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for trials',
				'Toggle player ESP hack, objective markers, chest pins, and vehicle cues independently so only trial-critical overlays stay active during loops.',
				'Team and enemy colour coding supports Survivor trials and killer-sides.',
				`map tile and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with EAC maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and DBD patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/dbd-world-esp/">world esp</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/dbd-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'DBD Unlock All 2026 | What It Really Means',
		description:
			'DBD unlock all explained vs real dead by daylight cheats — ESP boxes, aimbot, and radar for Windows PC. Know what you are buying.',
		h1: 'DBD Unlock All — What Players Search For',
		intro:
			'DBD unlock all is a common search term for DBD — this page clarifies what unlock-all tools claim versus the ESP wallhack, world esp, and Aimbot tools DBD Hacks actually provides on Windows PC.',
		imageAlt: "DBD Hacks license features overview",
		galleryTitle: 'DBD unlock all guide visuals',
		ctaPrimary: 'Buy DBD Hacks',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What DBD unlock all usually means',
				'DBD unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'DBD Hacks focuses on in-match awareness — player ESP, objective markers, world ESP overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and chapter progression items are sold through ${EXT.dbd}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy teams, bosses, and bloodpoint gains during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, objective and container markers speed map loops — see the <a href="/dbd-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/dbd-cheats/">DBD cheats</a> and <a href="/dbd-cheats/">DBD cheats</a>.',
			),
			section(
				'Buying DBD Hacks for the right reasons',
				'If you need undetected ESP wallhack, world esp, and Aimbot for DBD on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | DBD Hacks',
		description:
			'Privacy policy for DBD Hacks. How we handle support emails, order data, and checkout for dead by daylight cheats licenses on dbdhack.org.',
		h1: 'Privacy Policy',
		intro: 'How DBD Hacks handles information when you browse dbdhack.org or contact support about a DBD license.',
		imageAlt: "DBD Hacks privacy policy page",
		galleryTitle: 'DBD Hacks legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual DBD Hacks customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@dbdhack.org with your request details.',
				'Policy updates publish on this page. Continued use of dbdhack.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | DBD Hacks',
		description:
			'Refund policy for DBD Hacks. Digital delivery terms and eligibility for dead by daylight cheats packages with ESP, aimbot, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for DBD Hacks licenses — ESP wallhack, world esp, and Aimbot packages purchased through checkout for DBD.',
		imageAlt: "DBD Hacks refund policy page",
		galleryTitle: 'DBD Hacks billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'DBD Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@dbdhack.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | DBD Hacks Rules',
		description:
			'Terms of use for dbdhack.org and DBD Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of dbdhack.org and DBD Hacks licenses for DBD on Windows PC.',
		imageAlt: "DBD Hacks terms of use page",
		galleryTitle: 'DBD Hacks legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using DBD Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for DBD on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in DBD may violate Behaviour Interactive terms and result in account penalties. DBD Hacks provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/dbd-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@dbdhack.org for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripFromMeta(page.title)),
		description: clampDesc(stripFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
