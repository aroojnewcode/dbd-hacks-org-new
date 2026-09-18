import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; teamFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'dbd-esp' | 'dbd-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'world-esp' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'skill-check' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected dead by daylight cheats 2026",
					subtitle: "DBD cheats with dbd esp, world esp and dbd aimbot for Windows PC — EAC maintenance included.",
					subtitleShort: "DBD esp, radar & aimbot for PC",
					buyNow: "Buy DBD Hacks",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "DBD Hacks — undetected dead by daylight cheats live for DBD on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "EAC maintenance supported",
					antiCheatShort: "Easy Anti-Cheat supported",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected dead by daylight cheats",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from DBD Hacks buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy DBD Hacks",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected DBD cheats for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | Undetected ESP, Aimbot & Wallhack",
					description: "DBD cheats for Windows PC — ESP, aimbot, radar, and EAC updates. Compare plans and buy.",
					h1: "DBD Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "DBD Hacks is the undetected dead by daylight cheats package for Windows PC — built for Dead by Daylight on Windows PC. DBD esp wallhack, World ESP, and dbd aimbot with EAC maintenance after every major patch.",
					imageAlt: "DBD Hacks homepage hero — ESP and aimbot for Dead by Daylight",
					galleryTitle: "DBD Hacks gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose DBD cheats in 2026",
							paragraphs: [
								"DBD rewards trial awareness. DBD Hacks combines ESP wallhack for Survivors, Killers, and generators, radar-style threat cues, and configurable Aimbot so you can read chases before committing — in trial, killer-side, and ranked trials.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> and <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include EAC maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/dbd-cheats/\">DBD cheats pillar</a>, <a href=\"/dbd-esp/\">ESP guide</a>, <a href=\"/dbd-aimbot/\">Aimbot controls</a>, and <a href=\"/dbd-cheats/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, world esp, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, DBD Hacks bundles player ESP wallhack, objective markers, World ESP overlays, and Aimbot profiles in one undetected package built for Survivor trials and killer-sides — covering both “dead by daylight cheats” and “dead by daylight cheats” search intent.",
								"Browse the <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, <a href=\"/dbd-esp/\">wallhack</a>, and <a href=\"/dbd-world-esp/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://support.deadbydaylight.com/hc/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight Support</a> for Behaviour Interactive service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				"dbd-esp": {
					title: "DBD ESP 2026 | Player Boxes & Wallhack",
					description: "DBD ESP for Windows PC — player boxes, objective markers, and distance readouts. Part of our undetected dead by daylight cheats for Dead by Daylight.",
					h1: "DBD ESP — Player Boxes & Wallhack",
					intro: "DBD esp visibility tools for trial and killer-side. Read enemy teams, Survivors, Killers, loot, and distance before you commit — toggleable dbd esp wallhack overlays bundled in our dead by daylight cheats package.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP overlay visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "DBD wallhack guide",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "What DBD ESP solves in trials",
							paragraphs: [
								"DBD maps punish incomplete information. DBD Hacks ESP wallhack helps you spot enemy teams early, spot Survivors and Killers before they push your angle, and mark bloodpoint gains worth the detour.",
								"On raid, killer-side, and ranked trials, that visibility gap is often the difference between a clean second killer pressure and a chapterd team. ESP ships bundled with world ESP overlays and Aimbot in one license.",
								"DBD’s live seasons and map updates are published by Behaviour Interactive (<a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>). When map tiles or objective rules shift, ESP categories stay useful because they track players and chests — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and object ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, killer markers, exit gate cues, and objective pins so only trial-critical ESP wallhack overlays stay active during loops.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Survivor trials and killer-sides lobbies alike.",
								"Compare category detail on the <a href=\"/dbd-esp/\">wallhack page</a> and pair visibility with the <a href=\"/dbd-world-esp/\">world esp</a> for approaches outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster loops",
								"Boss and exit gate awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with EAC maintenance",
							paragraphs: [
								"DBD Hacks ESP wallhack is maintained for DBD with rebuilds after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">EAC bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first trial.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/dbd-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/dbd-cheats/\">DBD cheats pillar</a> and <a href=\"/dbd-cheats/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
				},
				"dbd-aimbot": {
					title: "DBD Aimbot 2026 | Soft Aim for Windows PC",
					description: "DBD aimbot with aimbot tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our dead by daylight cheats package.",
					h1: "DBD Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for DBD firefights. Smoothness, FOV, bone priority, and per-killer profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot combat previews",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot tuned for DBD combat pace",
							paragraphs: [
								"DBD mixes long-range AR fights with close-quarters SMG pushes. DBD Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during team fights and close-range chases.",
								"Weapon balance and season rules change via <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-killer Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for Survivor and Killer roles. Switch between long-range killer chases and mid-chase clears without reopening menus every trial.",
								"Prefer softer tracking? Read the <a href=\"/dbd-aimbot/\">aimbot guide</a>.",
								"Aimbot ships alongside <a href=\"/dbd-esp/\">ESP wallhack</a> and <a href=\"/dbd-world-esp/\">World ESP</a> in the same DBD Hacks license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-killer profile slots for AR / SMG / killer power",
							],
						},
						{
							h2: "EAC maintenance for undetected Aimbot",
							paragraphs: [
								"DBD Hacks rebuilds Aimbot behavior when Easy Anti-Cheat or major DBD patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://support.deadbydaylight.com/hc/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight Support</a> and anti-cheat context on <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>, then follow our <a href=\"/updates/\">EAC maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				features: {
					title: "DBD Hacks Features | ESP, Soft Aim & Radar",
					description: "Full dead by daylight cheats feature list: ESP boxes, aimbot, radar, and toggles for Windows PC. Review controls before .",
					h1: "DBD Hacks Features — Full Control List",
					intro: "Every ESP wallhack, world esp, and Aimbot control included in the DBD Hacks package for DBD on Windows PC — with EAC maintenance after major patches.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "DBD Hacks feature gallery",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, killer and exit gate awareness cues, objective and container markers, distance readouts, snaplines, and toggleable ESP categories for trial-critical overlays only.",
								"Team and enemy colour coding supports Survivor trials and killer-sides. Deep-dive the <a href=\"/dbd-esp/\">ESP page</a> and <a href=\"/dbd-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> chapter and map updates — toggleable ESP categories keep overlays useful when map tiles rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"World ESP overlay with directional threat cues, configurable range for loops and late-trial exit gates, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-killer profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live DBD sessions. See <a href=\"/dbd-world-esp/\">radar</a> and <a href=\"/dbd-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/dbd-cheats/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and EAC maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. EAC maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://support.deadbydaylight.com/hc/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight Support</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@dbdhacks.net.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/dbd-cheats/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
				},
				pricing: {
					title: "DBD Hacks Pricing | $35/mo or $150 Life",
					description: "DBD cheats pricing: $35/month or $150 lifetime for ESP, aimbot, and radar on Windows PC. Instant instant digital delivery. — pick a plan.",
					h1: "DBD Hacks Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected DBD Hacks — ESP wallhack, world esp, and Aimbot for DBD on Windows PC. Instant digital delivery after payment.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "DBD Hacks package visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime DBD Hacks plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, world esp, and Aimbot access with EAC maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected DBD Hacks package — ideal if you play DBD regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, objective markers, World ESP overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major DBD patches.",
								"Season calendars and client updates come from <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/dbd-cheats/\">DBD cheats</a>, <a href=\"/dbd-cheats/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				setup: {
					title: "DBD Hacks Setup | Windows PC Guide",
					description: "Set up dead by daylight cheats on Windows PC — activate ESP boxes, aimbot profiles, and . Check EAC updates before your first queue.",
					h1: "DBD Hacks Setup — Windows PC Guide",
					intro: "Install and configure DBD Hacks for DBD on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify EAC maintenance status before queueing.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "DBD Hacks setup visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install DBD Hacks",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest EAC maintenance build before launching DBD.",
								"Also glance at <a href=\"https://support.deadbydaylight.com/hc/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight Support</a> if Behaviour Interactive services look unstable on patch day — a platform outage is not a license fault.",
								"DBD Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for Survivors, Killers, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, and <a href=\"/dbd-cheats/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/dbd-aimbot/\">aimbot</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After DBD or Easy Anti-Cheat patches",
							paragraphs: [
								"When Behaviour Interactive ships a major DBD update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">EAC bypass page</a> and <a href=\"/dbd-cheats/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
				},
				updates: {
					title: "DBD Hacks Updates | Easy Anti-Cheat Maintenance Log",
					description: "DBD cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, aimbot, and radar on Windows PC. Check status before queueing after patches.",
					h1: "DBD Hacks Updates — Maintenance Log",
					intro: "Track EAC maintenance and DBD patch rebuilds for the undetected ESP wallhack, world esp, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "DBD patch and maintenance visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"DBD and Easy Anti-Cheat receive frequent patches. DBD Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://support.deadbydaylight.com/hc/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight Support</a> for Behaviour Interactive platform health and this page for DBD Hacks build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches in trial and killer-side.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">EAC bypass guide</a> and <a href=\"/dbd-cheats/\">undetected DBD cheats</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a EAC update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
				},
				faq: {
					title: "DBD Hacks FAQ | ESP, Soft Aim & Radar Answers",
					description: "DBD cheats FAQ: ESP boxes, aimbot, EAC maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "DBD Hacks FAQ — Common Questions",
					intro: "Answers about undetected DBD Hacks — ESP wallhack, world esp, Aimbot, EAC maintenance, checkout, and DBD compatibility on Windows PC.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "DBD Hacks FAQ visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is DBD Hacks?",
							paragraphs: [
								"DBD Hacks is an undetected cheat package for DBD on Windows PC. It includes ESP wallhack, World ESP-style awareness, and Aimbot controls with EAC maintenance updates.",
								"Packages cover trial and killer-side. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/dbd-esp/\">ESP</a> / <a href=\"/dbd-aimbot/\">Aimbot</a> for module detail.",
								"DBD itself is published by Behaviour Interactive (<a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>). Cheats are second killer pressure tools and may violate Behaviour Interactive' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are DBD Hacks undetected in 2026?",
							paragraphs: [
								"DBD Hacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/dbd-cheats/\">undetected DBD cheats</a> and the <a href=\"/updates/\">Easy Anti-Cheat guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@dbdhacks.net or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
				},
				support: {
					title: "DBD Hacks Support | Help & Contact",
					description: "Contact dead by daylight cheats support for licenses, ESP setup, aimbot profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "DBD Hacks Support — Contact Us",
					intro: "Get help with DBD Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and EAC maintenance for DBD on Windows PC.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "DBD Hacks support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after EAC maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. DBD Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Behaviour Interactive bans.",
								"Account and game policy questions belong with Behaviour Interactive. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. EAC bypass notes live on the dedicated <a href=\"/updates/\">Easy Anti-Cheat page</a>.",
								"Email: support@dbdhacks.net",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				undetected: {
					title: "Undetected DBD Hacks 2026 | Easy Anti-Cheat Maintenance",
					description: "Undetected dead by daylight cheats with EAC maintenance for ESP boxes, aimbot, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected DBD Hacks — Easy Anti-Cheat Maintenance",
					intro: "How DBD Hacks stays maintained for DBD after Easy Anti-Cheat patches — ESP wallhack, world esp, and Aimbot rebuilds for Windows PC.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected DBD Hacks visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "EAC bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for DBD Hacks",
							paragraphs: [
								"Undetected DBD Hacks means the package is actively maintained against Easy Anti-Cheat and major DBD patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after EAC security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>; DBD client updates ship through <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "EAC maintenance workflow",
							paragraphs: [
								"When Easy Anti-Cheat or DBD updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://support.deadbydaylight.com/hc/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">EAC bypass DBD guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/dbd-cheats/\">DBD cheats 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
				},
				wallhack: {
					title: "DBD Wallhack 2026 | ESP Boxes & Visibility",
					description: "DBD wallhack ESP with player boxes and objective markers for Windows PC. Undetected dead by daylight cheats — learn overlays and buy.",
					h1: "DBD Wallhack — ESP Boxes & Visibility",
					intro: "DBD wallhack ESP for DBD — see players, loot, bosses, and chests through toggleable wallhack overlays built for Survivor trials and killer-sides.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD wallhack ESP gallery",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "DBD ESP page",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A DBD wallhack focuses on information — player outlines, objective pins, Killer threat cues — rather than automatic aiming. DBD Hacks bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during loops and exit gate reads.",
								"For the broader ESP keyword page see <a href=\"/dbd-esp/\">DBD ESP</a>; for combat assist see <a href=\"/dbd-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support raid, killer-side, and ranked trials with distance readouts and snaplines for chase control.",
								"Season maps and map tile changes are announced via <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/dbd-world-esp/\">world esp</a> cues for approaches during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/dbd-cheats/\">undetected DBD cheats</a> and <a href=\"/updates/\">EAC bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/dbd-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
				},
				"world-esp": {
					title: "DBD Radar Hack 2026 | 2D Threat Overlay",
					description: "DBD world esp for flank awareness on Windows PC. Bundled with ESP boxes, aimbot, and radar in our dead by daylight cheats package.",
					h1: "DBD Radar Hack — 2D Threat Awareness",
					intro: "World ESP-style overlay for DBD — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "DBD world esp visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Why world esp matters in DBD",
							paragraphs: [
								"trial chases happen in three dimensions — tiles, windows, and approaches. A World ESP overlay shows nearby player threats outside direct line of sight so you can reposition before a second killer pressure.",
								"DBD Hacks radar complements <a href=\"/dbd-esp/\">ESP wallhack</a> markers during team pushes and exit gate camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early loops versus tight exit gate reads. Directional cues highlight approaches during tile loops and tile loops across trial and killer-side.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/dbd-cheats/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/dbd-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive EAC maintenance rebuilds with the full DBD Hacks package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major DBD patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/dbd-cheats/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
				},
				eac: {
					title: "EAC Bypass DBD | DBD Hacks Maintenance",
					description: "How dead by daylight cheats rebuild after EAC patches — ESP boxes, aimbot, and radar maintenance for Windows PC. Read before queueing.",
					h1: "EAC Bypass — DBD Hacks Maintenance",
					intro: "Understand Easy Anti-Cheat maintenance for DBD Hacks — how ESP wallhack, world esp, and Aimbot rebuild after DBD security updates.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC maintenance visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat overview",
							paragraphs: [
								"Easy Anti-Cheat is Behaviour Interactive' anti-cheat for DBD on PC (see <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"DBD Hacks monitors EAC patch notes and DBD seasonal updates from <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> to schedule module reviews.",
								"“EAC bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a EAC patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Behaviour Interactive service health on <a href=\"https://support.deadbydaylight.com/hc/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/dbd-cheats/\">undetected DBD cheats</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"EAC bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				"cheats-2026": {
					title: "DBD Hacks 2026 | ESP Soft Aim & Radar",
					description: "Best dead by daylight cheats 2026: ESP boxes, aimbot, and radar for Windows PC. Undetected dead by daylight cheats with EAC maintenance — compare and buy.",
					h1: "DBD Hacks 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 DBD Hacks package for DBD — undetected ESP wallhack, world esp, and Aimbot with EAC maintenance, instant delivery, and Windows PC support.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD Hacks 2026 gallery",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why dead by daylight cheats buyers choose DBD Hacks in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. DBD Hacks bundles ESP wallhack, world esp, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover trial and killer-side loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, objective markers, World ESP overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/dbd-cheats/\">DBD cheats pillar</a>, <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, <a href=\"/dbd-esp/\">wallhack</a>, <a href=\"/dbd-world-esp/\">radar</a>, <a href=\"/dbd-cheats/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/dbd-cheats/\">DBD cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/dbd-cheats/\">DBD cheats</a> checklist, <a href=\"/blog/dbd-cheats-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@dbdhacks.net via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				hacks: {
					title: "DBD Hacks 2026 | Undetected ESP Aimbot Guide",
					description: "DBD cheats for Windows PC: undetected ESP wallhack, world esp, and Aimbot with EAC maintenance. Compare dead by daylight cheats options and buy the full",
					h1: "DBD Hacks — Undetected ESP, Aimbot & Wallhack",
					intro: "DBD cheats for trial and killer-side combine ESP wallhack visibility, World ESP-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for dead by daylight cheats in 2026.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD cheats gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "What DBD cheats include in 2026",
							paragraphs: [
								"Players searching for DBD cheats usually want visibility and combat tools without stacking separate downloads. DBD Hacks bundles player ESP wallhack, objective markers, World ESP overlays, and configurable Aimbot in one maintained package — the same toolkit often called dead by daylight cheats.",
								"Coverage spans trial and killer-side with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://support.deadbydaylight.com/hc/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight Support</a> before patch-day queues.",
							],
						},
						{
							h2: "How this DBD cheats pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/dbd-cheats/\">dead by daylight cheats 2026</a> and <a href=\"/dbd-cheats/\">DBD cheats</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/dbd-esp/\">DBD ESP</a>, <a href=\"/dbd-aimbot/\">DBD Aimbot</a>, <a href=\"/dbd-esp/\">wallhack</a>, <a href=\"/dbd-world-esp/\">world esp</a>, and <a href=\"/dbd-aimbot/\">aimbot</a>.",
								"Blog guides expand Easy Anti-Cheat keyword: <a href=\"/blog/dbd-cheats-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/dbd-cheats-cheats-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-dbd-cheats-eac/\">undetected Easy Anti-Cheat notes</a>.",
							],
						},
						{
							h2: "DBD cheats vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. DBD Hacks maps the full trial loop: read enemy teams, track Killers and generators, spot approaches on radar, and tune Aimbot per killer class.",
								"Compare the <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/dbd-cheats/\">mod menu</a>, <a href=\"/dbd-aimbot/\">aimbot</a>, <a href=\"/dbd-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected DBD cheats with EAC maintenance",
							paragraphs: [
								"Undetected DBD cheats require rebuilds after Easy Anti-Cheat and major DBD patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">EAC bypass guide</a> for the practical workflow. Pair with <a href=\"/dbd-cheats/\">undetected DBD cheats</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				"cheat-download": {
					title: "DBD Hack Download 2026 | Instant Access",
					description: "DBD cheat download with instant license instant digital delivery. — ESP boxes, aimbot, and radar for Windows PC. Buy, activate, and play.",
					h1: "DBD Hack Download — Instant License Delivery",
					intro: "How DBD cheat download works for DBD — digital license delivery after payment confirmation, with ESP wallhack, world esp, and Aimbot access on Windows PC.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "DBD cheat download visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How DBD cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, DBD Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Behaviour Interactive services are down, check <a href=\"https://support.deadbydaylight.com/hc/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight Support</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every DBD cheat download includes player ESP wallhack, objective and container markers, World ESP overlays, Aimbot profiles, and in-client toggles for Survivor trials and killer-sides.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When DBD or Easy Anti-Cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/dbd-cheats/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
				},
				"mod-menu": {
					title: "DBD Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "DBD mod menu for in-match toggles — ESP boxes, aimbot, radar, and on Windows PC. Undetected dead by daylight cheats package.",
					h1: "DBD Mod Menu — In-Client Control Panel",
					intro: "DBD mod menu controls for DBD — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your DBD session on Windows PC.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "DBD mod menu gallery",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a DBD mod menu controls",
							paragraphs: [
								"A DBD mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. DBD Hacks keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, objective markers, vehicle cues, and per-killer Aimbot settings without alt-tabbing out of DBD.",
								"Control deep-dives: <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, <a href=\"/dbd-world-esp/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for Survivor trials and killer-sides",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, chests, and bosses let you reduce overlay noise during loops and exit gate reads.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.dbd} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/dbd-aimbot/\">aimbot</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after EAC patches",
							paragraphs: [
								"DBD mod menu behavior is rebuilt when Easy Anti-Cheat or major DBD updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">EAC bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
				},
				"skill-check": {
					title: "DBD Soft Aim 2026 | Smooth Aimbot Settings",
					description: "DBD aimbot settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our dead by daylight cheats with ESP boxes.",
					h1: "DBD Soft Aim — Smooth Aimbot Controls",
					intro: "DBD aimbot settings for DBD — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD aimbot gallery",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "What DBD aimbot means",
							paragraphs: [
								"DBD aimbot refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. DBD Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during team fights.",
								"Full Aimbot documentation: <a href=\"/dbd-aimbot/\">DBD Aimbot</a>. Alternate wording: <a href=\"/dbd-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Aimbot profiles per killer class",
							paragraphs: [
								"Save separate aimbot profiles for Survivor and Killer roles. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Perk balances shift with <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> balance patches — retune smoothness after major combat updates.",
								"Aimbot ships alongside <a href=\"/dbd-esp/\">ESP wallhack</a> and <a href=\"/dbd-world-esp/\">World ESP</a> overlays.",
							],
						},
						{
							h2: "Undetected aimbot with EAC maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				"best-cheats": {
					title: "Best DBD Hacks 2026 | Buyer Guide",
					description: "Best dead by daylight cheats for 2026: ESP boxes, aimbot, and EAC maintenance on Windows PC. Use this checklist before .",
					h1: "Best DBD Hacks — 2026 Buyer Guide",
					intro: "Compare the DBD cheats for DBD in 2026 — undetected ESP wallhack, world esp, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Best DBD cheats gallery",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the DBD cheats in 2026",
							paragraphs: [
								"The DBD cheats combine active EAC maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"DBD Hacks covers trial and killer-side with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://support.deadbydaylight.com/hc/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight Support</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best DBD cheats feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, objective markers, World ESP overlays, Aimbot profiles, hotkey toggles, and documented maintenance after DBD patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/dbd-cheats/\">undetected status</a>, and <a href=\"/dbd-cheats/\">DBD cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/dbd-esp/\">ESP</a>, <a href=\"/dbd-aimbot/\">Aimbot</a>, <a href=\"/dbd-cheats/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the DBD cheats safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Behaviour Interactive terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack 2026 | Soft Aim Assist",
					description: "DBD aimbot hack with aimbot for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our dead by daylight cheats package.",
					h1: "DBD Aimbot Hack — Soft Aim Assist",
					intro: "DBD aimbot hack tools for DBD — smoothness, FOV, bone priority, per-killer profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "DBD aimbot hack gallery",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD aimbot hack vs visibility tools",
							paragraphs: [
								"A DBD aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle trial awareness. DBD Hacks bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for DBD combat pace across Survivor trials and killer-sides.",
								"Prefer softer tracking language? See <a href=\"/dbd-aimbot/\">aimbot</a>. Full settings: <a href=\"/dbd-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during loops or late-trial exit gates.",
								"Per-killer profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">EAC bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/dbd-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				"esp-hack": {
					title: "DBD ESP Hack 2026 | Player Boxes & Loot",
					description: "DBD ESP hack with player boxes and objective markers for Windows PC. Undetected dead by daylight cheats with — see overlays and buy.",
					h1: "DBD ESP Hack — Player Boxes Guide",
					intro: "DBD ESP hack overlays for DBD — player outlines, Killer threat cues, objective and container markers with distance readouts across trial and killer-side.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "DBD ESP hack gallery",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "What a DBD ESP hack shows",
							paragraphs: [
								"A DBD ESP hack renders enemy player outlines, vehicle positions, and objective pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during team pushes and second killer pressure scenarios.",
								"Canonical visibility guide: <a href=\"/dbd-esp/\">DBD ESP</a>. Wallhack wording: <a href=\"/dbd-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for trials",
							paragraphs: [
								"Toggle player ESP hack, objective markers, chest pins, and vehicle cues independently so only trial-critical overlays stay active during loops.",
								"Team and enemy colour coding supports Survivor trials and killer-sides.",
								"map tile and loot changes publish through <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with EAC maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Easy Anti-Cheat and DBD patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/dbd-world-esp/\">world esp</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/dbd-cheats/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
				},
				"unlock-all": {
					title: "DBD Unlock All 2026 | What It Really Means",
					description: "DBD unlock all explained vs real dead by daylight cheats — ESP boxes, aimbot, and radar for Windows PC. Know what you are buying.",
					h1: "DBD Unlock All — What Players Search For",
					intro: "DBD unlock all is a common search term for DBD — this page clarifies what unlock-all tools claim versus the ESP wallhack, world esp, and Aimbot tools DBD Hacks actually provides on Windows PC.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD unlock all guide visuals",
					ctaPrimary: "Buy DBD Hacks",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What DBD unlock all usually means",
							paragraphs: [
								"DBD unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"DBD Hacks focuses on in-match awareness — player ESP, objective markers, world ESP overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and chapter progression items are sold through <a href=\"https://deadbydaylight.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Dead by Daylight</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy teams, bosses, and bloodpoint gains during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, objective and container markers speed map loops — see the <a href=\"/dbd-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/dbd-cheats/\">DBD cheats</a> and <a href=\"/dbd-cheats/\">DBD cheats</a>.",
							],
						},
						{
							h2: "Buying DBD Hacks for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, world esp, and Aimbot for DBD on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
				},
				privacy: {
					title: "Privacy Policy | DBD Hacks",
					description: "Privacy policy for DBD Hacks. How we handle support emails, order data, and for dead by daylight cheats licenses on dbdhacks.net.",
					h1: "Privacy Policy",
					intro: "How DBD Hacks handles information when you browse dbdhacks.net or contact support about a DBD license.",
					imageAlt: "DBD Hacks privacy policy page",
					galleryTitle: "DBD Hacks legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual DBD Hacks customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@dbdhacks.net with your request details.",
								"Policy updates publish on this page. Continued use of dbdhacks.net after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				refund: {
					title: "Refund Policy | DBD Hacks",
					description: "Refund policy for DBD Hacks. Digital instant digital delivery. terms and eligibility for dead by daylight cheats packages with ESP, aimbot, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for DBD Hacks licenses — ESP wallhack, world esp, and Aimbot packages purchased through checkout for DBD.",
					imageAlt: "DBD Hacks refund policy page",
					galleryTitle: "DBD Hacks billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"DBD Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@dbdhacks.net with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-gameplay.webp",
				},
				terms: {
					title: "Terms of Use 2026 | DBD Hacks Rules",
					description: "Terms of use for dbdhacks.net and DBD Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of dbdhacks.net and DBD Hacks licenses for DBD on Windows PC.",
					imageAlt: "DBD Hacks terms of use page",
					galleryTitle: "DBD Hacks legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using DBD Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for DBD on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in DBD may violate Behaviour Interactive terms and result in account penalties. DBD Hacks provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/dbd-cheats/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@dbdhacks.net for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos DBD indetectables",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp y Aimbot para DBD en PC Windows — mantenimiento Easy Anti-Cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para DBD PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete DBD Hacks está activo para DBD en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Easy Anti-Cheat incluido",
					antiCheatShort: "Easy Anti-Cheat incluido",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "DBD",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de DBD Hacks",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para DBD — checkout en .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Dead by Daylight indetectables para Dead by Daylight en PC. ESP wallhack, world esp y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital",
					h1: "DBD Hacks — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Dead by Daylight en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galería DBD Hacks — ESP, Aimbot y wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen DBD Hacks en 2026",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Ideal para leer escuadrones enemigos en BR y killer-side.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Cajas de jugador y wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP DBD",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Controles aimbot",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. aimbot, FOV, and per-killer Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, aimbot, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Funciones.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. ESP, aimbot, radar controls.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Precios.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Instalación.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Easy Anti-Cheat",
					description: "Actualizaciones: EAC patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Actualizaciones.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. EAC patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Soporte.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after Easy Anti-Cheat patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Trucos indetectables.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | Visibilidad ESP",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. wallhack ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: World ESP cues for approaches and loops. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. World ESP cues for approaches and loops.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Mantenimiento de parches",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. how EAC updates are handled for Dead by Daylight hacks.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos DBD 2026 | Guía del comprador",
					description: "Trucos DBD 2026: 2026 DBD cheats checklist before . entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos DBD 2026",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Trucos DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "Trucos DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Trucos DBD 2026",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. 2026 DBD cheats checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos DBD | Guía ESP y Aimbot",
					description: "Trucos DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos DBD",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Trucos DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos DBD",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga DBD Hacks | Acceso instantáneo",
					description: "Descarga DBD Hacks: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga DBD Hacks",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Descarga DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Descarga DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga DBD Hacks",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod DBD | Controles en partida",
					description: "Menú mod DBD: in-client ESP and aimbot toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod DBD",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Menú mod DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "Menú mod DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod DBD",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. in-client ESP and aimbot toggles.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Ajustes aimbot",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. smooth aimbot settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos DBD | Lista de compra",
					description: "Mejores trucos DBD: what to compare before buying DBD cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos DBD",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Mejores trucos DBD.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Mejores trucos DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos DBD",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. what to compare before buying DBD cheats.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot DBD | Asistencia aimbot",
					description: "Hack aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot DBD",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Hack aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot DBD",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. undetected Aimbot hack assist for Dead by Daylight.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP DBD | Cajas y loot",
					description: "Hack ESP DBD: ESP hack boxes, objective pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP DBD",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Hack ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP DBD",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. ESP hack boxes, objective pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | Qué significa",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | DBD Hacks",
					description: "Política de privacidad for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Política de privacidad for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | DBD Hacks",
					description: "Política de reembolso for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Política de reembolso for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Contact email,  order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | DBD Hacks",
					description: "Términos de uso for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Términos de uso for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Contact email,  order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout . Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"DBD Hacks ofrece ESP wallhack, undefined y dbd aimbot indetectables para DBD en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@dbdhacks.net para solicitudes legales o de soporte.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches DBD indétectables",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp et Aimbot pour DBD sur PC Windows — maintenance Easy Anti-Cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour DBD PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack DBD Hacks est actif pour DBD sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Easy Anti-Cheat incluse",
					antiCheatShort: "Easy Anti-Cheat inclus",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "DBD",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs DBD Hacks",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour DBD — checkout via .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Dead by Daylight indétectables pour Dead by Daylight sur PC. ESP wallhack, world esp et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique",
					h1: "DBD Hacks — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Dead by Daylight sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galerie DBD Hacks — ESP, Aimbot et wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir DBD Hacks en 2026",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Parfait pour lire les escouades ennemies en BR et killer-side.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Boîtes joueur et wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP DBD",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. player boxes, objective markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Contrôles aimbot",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. aimbot, FOV, and per-killer Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, aimbot, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Fonctions.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. ESP, aimbot, radar controls.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Tarifs.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Installation.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Easy Anti-Cheat",
					description: "Mises à jour: EAC patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Mises à jour.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. EAC patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Support.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after Easy Anti-Cheat patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Triches indétectables.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | Visibilité ESP",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. wallhack ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: World ESP cues for approaches and loops. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. World ESP cues for approaches and loops.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Maintenance des patchs",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. how EAC updates are handled for Dead by Daylight hacks.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches DBD 2026 | Guide acheteur",
					description: "Triches DBD 2026: 2026 DBD cheats checklist before . livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches DBD 2026",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Triches DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "Triches DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Triches DBD 2026",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. 2026 DBD cheats checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches DBD | Guide ESP et Aimbot",
					description: "Triches DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches DBD",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Triches DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Triches DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches DBD",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement DBD Hacks | Accès instantané",
					description: "Téléchargement DBD Hacks: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement DBD Hacks",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Téléchargement DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Téléchargement DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement DBD Hacks",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod DBD | Contrôles en jeu",
					description: "Menu mod DBD: in-client ESP and aimbot toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod DBD",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Menu mod DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "Menu mod DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod DBD",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. in-client ESP and aimbot toggles.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Réglages aimbot",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. smooth aimbot settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches DBD | Checklist acheteur",
					description: "Meilleures triches DBD: what to compare before buying DBD cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches DBD",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Meilleures triches DBD.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Meilleures triches DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches DBD",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. what to compare before buying DBD cheats.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot DBD | Assistance aimbot",
					description: "Hack aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot DBD",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Hack aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot DBD",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. undetected Aimbot hack assist for Dead by Daylight.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP DBD | Boîtes et loot",
					description: "Hack ESP DBD: ESP hack boxes, objective pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP DBD",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Hack ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP DBD",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. ESP hack boxes, objective pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | Ce que ça signifie",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acheter DBD Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | DBD Hacks",
					description: "Politique de confidentialité for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Politique de confidentialité for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | DBD Hacks",
					description: "Politique de remboursement for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Politique de remboursement for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Contact email,  order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | DBD Hacks",
					description: "Conditions d'utilisation for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Conditions d'utilisation for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Contact email,  order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout . Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"DBD Hacks combine ESP wallhack, undefined et dbd aimbot indétectables pour DBD sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@dbdhacks.net pour le support ou les demandes légales.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected DBD Hacks",
					accentShort: "DBD Hacks",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für DBD auf Windows PC — Easy Anti-Cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für DBD PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "DBD Hacks Paket ist live für DBD auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-Wartung unterstützt",
					antiCheatShort: "Easy Anti-Cheat Support",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von DBD Hacks Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für DBD — Checkout über .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected DBD Hacks für Dead by Daylight auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "DBD Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC Paket für Dead by Daylight: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "DBD Hacks Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum DBD Hacks 2026 führt",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Ideal um feindliche Squads in BR und killer-side zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Spielerboxen & Wallhack",
					description: "DBD ESP: player boxes, objective markers, and wallhack overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft-Aim Steuerung",
					description: "DBD Aimbot: aimbot, FOV, and per-killer Aimbot profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD Aimbot.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. aimbot, FOV, and per-killer Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, aimbot, radar controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Features.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. ESP, aimbot, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Preise.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Setup.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Wartungslog",
					description: "Updates: EAC patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Updates.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. EAC patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Support.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after Easy Anti-Cheat patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Undetected Cheats.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "DBD Wallhack | ESP Sichtbarkeit",
					description: "DBD Wallhack: wallhack ESP for players, loot, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Wallhack",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD Wallhack.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD Wallhack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Wallhack",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. wallhack ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: World ESP cues for approaches and loops. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Radar Hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. World ESP cues for approaches and loops.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch-Wartung",
					description: "EAC Bypass: how EAC updates are handled for Dead by Daylight hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. EAC Bypass.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. how EAC updates are handled for Dead by Daylight hacks.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Hacks 2026 | Käuferleitfaden",
					description: "DBD Hacks 2026: 2026 DBD cheats checklist before . sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Hacks 2026",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD Hacks 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD Hacks 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD Hacks 2026",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. 2026 DBD cheats checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "DBD Hacks | ESP Aimbot Guide",
					description: "DBD Hacks: the Dead by Daylight hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Hacks",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD Hacks.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Hacks",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "DBD Cheat Download | Sofortzugang",
					description: "DBD Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Cheat Download",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD Cheat Download.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "DBD Cheat Download",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "DBD Cheat Download",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "DBD Mod-Menü | In-Game Toggles",
					description: "DBD Mod-Menü: in-client ESP and aimbot toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Mod-Menü",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD Mod-Menü.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "DBD Mod-Menü",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Mod-Menü",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. in-client ESP and aimbot toggles.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"skill-check": {
					title: "DBD Soft Aim | Soft-Aim Einstellungen",
					description: "DBD Soft Aim: smooth aimbot settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Soft Aim",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD Soft Aim.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD Soft Aim",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Soft Aim",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. smooth aimbot settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste DBD Hacks | Käufer-Checkliste",
					description: "Beste DBD Hacks: what to compare before buying DBD cheats. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste DBD Hacks",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Beste DBD Hacks.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Beste DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste DBD Hacks",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. what to compare before buying DBD cheats.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack | Soft-Aim Assist",
					description: "DBD Aimbot Hack: undetected Aimbot hack assist for Dead by Daylight. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Aimbot Hack",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD Aimbot Hack.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hack",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. undetected Aimbot hack assist for Dead by Daylight.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hack | Boxen & Loot",
					description: "DBD ESP Hack: ESP hack boxes, objective pins, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD ESP Hack",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD ESP Hack.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "DBD ESP Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hack",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. ESP hack boxes, objective pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "DBD Unlock All | Was es bedeutet",
					description: "DBD Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "DBD Unlock All",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. DBD Unlock All.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD Unlock All",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Unlock All",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | DBD Hacks",
					description: "Datenschutz for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Datenschutz for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | DBD Hacks",
					description: "Rückerstattung for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Rückerstattung for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Contact email,  order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | DBD Hacks",
					description: "Nutzungsbedingungen for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Nutzungsbedingungen for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Contact email,  order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über  Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"DBD Hacks bündelt ESP wallhack, undefined und dbd aimbot als undetected Paket für DBD auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@dbdhacks.net für Support und rechtliche Anfragen.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats DBD indetectáveis",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp e Aimbot para DBD no PC Windows — manutenção Easy Anti-Cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para DBD PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote DBD Hacks está ativo para DBD no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Easy Anti-Cheat incluída",
					antiCheatShort: "Easy Anti-Cheat incluído",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "DBD",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores DBD Hacks",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para DBD — checkout via .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Dead by Daylight indetectáveis para Dead by Daylight no PC. ESP wallhack, world esp e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.",
					h1: "DBD Hacks — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Dead by Daylight no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galeria DBD Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher DBD Hacks em 2026",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Ideal para ler eteamrões inimigos em BR e killer-side.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Caixas de jogador e wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP DBD",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. player boxes, objective markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Controles aimbot",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. aimbot, FOV, and per-killer Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, aimbot, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Recursos.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. ESP, aimbot, radar controls.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Preços.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Instalação.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Easy Anti-Cheat",
					description: "Atualizações: EAC patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Atualizações.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. EAC patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Suporte.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after Easy Anti-Cheat patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Cheats indetectáveis.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | Visibilidade ESP",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: World ESP cues for approaches and loops. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. World ESP cues for approaches and loops.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenção de patches",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. how EAC updates are handled for Dead by Daylight hacks.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats DBD 2026 | Guia do comprador",
					description: "Cheats DBD 2026: 2026 DBD cheats checklist before . entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats DBD 2026",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Cheats DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "Cheats DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheats DBD 2026",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. 2026 DBD cheats checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats DBD | Guia ESP e Aimbot",
					description: "Cheats DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats DBD",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Cheats DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats DBD",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download DBD Hacks | Acesso instantâneo",
					description: "Download DBD Hacks: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download DBD Hacks",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Download DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Download DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download DBD Hacks",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod DBD | Controles in-game",
					description: "Menu mod DBD: in-client ESP and aimbot toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod DBD",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Menu mod DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "Menu mod DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod DBD",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. in-client ESP and aimbot toggles.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Ajustes aimbot",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. smooth aimbot settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats DBD | Checklist do comprador",
					description: "Melhores cheats DBD: what to compare before buying DBD cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats DBD",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Melhores cheats DBD.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Melhores cheats DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats DBD",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. what to compare before buying DBD cheats.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot DBD | Assistência aimbot",
					description: "Hack aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot DBD",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Hack aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot DBD",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. undetected Aimbot hack assist for Dead by Daylight.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP DBD | Caixas e loot",
					description: "Hack ESP DBD: ESP hack boxes, objective pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP DBD",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Hack ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP DBD",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. ESP hack boxes, objective pins, and distance.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | O que significa",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Comprar DBD Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | DBD Hacks",
					description: "Política de privacidade for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Política de privacidade for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | DBD Hacks",
					description: "Política de reembolso for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Política de reembolso for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Contact email,  order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | DBD Hacks",
					description: "Termos de uso for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Termos de uso for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Contact email,  order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout . Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks reúne ESP wallhack, undefined e dbd aimbot indetectáveis para DBD no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@dbdhacks.net para suporte ou questões legais.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat DBD indetectable",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp e Aimbot per DBD su PC Windows — manutenzione Easy Anti-Cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per DBD PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto DBD Hacks è attivo per DBD su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Easy Anti-Cheat supportata",
					antiCheatShort: "Easy Anti-Cheat supportato",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "DBD",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti DBD Hacks",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per DBD — checkout via .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Dead by Daylight indetectable per Dead by Daylight su PC. ESP wallhack, world esp e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.",
					h1: "DBD Hacks — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Dead by Daylight su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galleria DBD Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere DBD Hacks nel 2026",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Ideale per leggere teamre nemiche in BR e killer-side.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Box giocatore e wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP DBD",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. player boxes, objective markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Controlli aimbot",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. aimbot, FOV, and per-killer Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, aimbot, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Funzioni.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. ESP, aimbot, radar controls.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Prezzi.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Setup.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Easy Anti-Cheat",
					description: "Aggiornamenti: EAC patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Aggiornamenti.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. EAC patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Supporto.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after Easy Anti-Cheat patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Cheat indetectable.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | Visibilità ESP",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: World ESP cues for approaches and loops. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. World ESP cues for approaches and loops.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenzione patch",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. how EAC updates are handled for Dead by Daylight hacks.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat DBD 2026 | Guida acquirente",
					description: "Cheat DBD 2026: 2026 DBD cheats checklist before . consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat DBD 2026",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Cheat DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "Cheat DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheat DBD 2026",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. 2026 DBD cheats checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat DBD | Guida ESP e Aimbot",
					description: "Cheat DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat DBD",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Cheat DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat DBD",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download DBD Hacks | Accesso istantaneo",
					description: "Download DBD Hacks: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download DBD Hacks",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Download DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Download DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download DBD Hacks",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu DBD | Toggle in-game",
					description: "Mod menu DBD: in-client ESP and aimbot toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu DBD",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Mod menu DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "Mod menu DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu DBD",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. in-client ESP and aimbot toggles.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Impostazioni aimbot",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. smooth aimbot settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat DBD | Checklist acquirente",
					description: "Migliori cheat DBD: what to compare before buying DBD cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat DBD",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Migliori cheat DBD.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Migliori cheat DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat DBD",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. what to compare before buying DBD cheats.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot DBD | Assist aimbot",
					description: "Hack aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot DBD",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Hack aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot DBD",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. undetected Aimbot hack assist for Dead by Daylight.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP DBD | Box e loot",
					description: "Hack ESP DBD: ESP hack boxes, objective pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP DBD",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Hack ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP DBD",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. ESP hack boxes, objective pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | Cosa significa",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Acquista DBD Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | DBD Hacks",
					description: "Informativa privacy for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Informativa privacy for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | DBD Hacks",
					description: "Politica di rimborso for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Politica di rimborso for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Contact email,  order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | DBD Hacks",
					description: "Termini di utilizzo for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Termini di utilizzo for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Contact email,  order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout . Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks unisce ESP wallhack, undefined e dbd aimbot indetectable per DBD su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@dbdhacks.net per supporto o richieste legali.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected DBD Hacks",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp en Aimbot voor DBD op Windows PC — Easy Anti-Cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor DBD PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "DBD Hacks pakket is live voor DBD op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-onderhoud ondersteund",
					antiCheatShort: "Easy Anti-Cheat support",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van DBD Hacks kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor DBD — checkout via .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected DBD cheats voor Dead by Daylight op PC. ESP wallhack, world esp en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.",
					h1: "DBD Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Dead by Daylight: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "DBD Hacks galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom DBD Hacks in 2026",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Ideaal om vijandelijke teams te lezen in BR en killer-side.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: player boxes, objective markers, and wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: aimbot, FOV, and per-killer Aimbot profiles. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD Aimbot.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. aimbot, FOV, and per-killer Aimbot profiles.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, aimbot, radar controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Functies.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. ESP, aimbot, radar controls.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Prijzen.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Setup.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Maintenance Log",
					description: "Updates: EAC patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Updates.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. EAC patch status and rebuild notes.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Support.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected Cheats: undetected maintenance after Easy Anti-Cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Undetected Cheats.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "DBD Wallhack | ESP Visibility",
					description: "DBD Wallhack: wallhack ESP for players, loot, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Wallhack",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD Wallhack.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD Wallhack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Wallhack",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: World ESP cues for approaches and loops. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Radar Hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. World ESP cues for approaches and loops.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for Dead by Daylight hacks. directe digitale levering. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. EAC Bypass.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. how EAC updates are handled for Dead by Daylight hacks.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Hacks 2026 | Buyer Guide",
					description: "DBD Hacks 2026: 2026 DBD cheats checklist before . directe digitale levering. undetected — Windows PC.",
					h1: "DBD Hacks 2026",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD Hacks 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD Hacks 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD Hacks 2026",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. 2026 DBD cheats checklist before checkout.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "DBD Hacks | ESP Aimbot Guide",
					description: "DBD Hacks: the Dead by Daylight hacks pillar for ESP and Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Hacks",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD Hacks.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Hacks",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "DBD Cheat Download | Instant Access",
					description: "DBD Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Cheat Download",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD Cheat Download.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "DBD Cheat Download",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "DBD Cheat Download",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "DBD Mod Menu | In-Game Toggles",
					description: "DBD Mod Menu: in-client ESP and aimbot toggles. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Mod Menu",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD Mod Menu.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "DBD Mod Menu",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Mod Menu",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. in-client ESP and aimbot toggles.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"skill-check": {
					title: "DBD Soft Aim | Smooth Aim Settings",
					description: "DBD Soft Aim: smooth aimbot settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Soft Aim",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD Soft Aim.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD Soft Aim",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Soft Aim",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. smooth aimbot settings for Windows PC.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste DBD Hacks | Buyer Checklist",
					description: "Beste DBD Hacks: what to compare before buying DBD cheats. directe digitale levering. undetected — Windows PC.",
					h1: "Beste DBD Hacks",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Beste DBD Hacks.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Beste DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste DBD Hacks",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. what to compare before buying DBD cheats.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack | Soft Aim Assist",
					description: "DBD Aimbot Hack: undetected Aimbot hack assist for Dead by Daylight. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Aimbot Hack",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD Aimbot Hack.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hack",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. undetected Aimbot hack assist for Dead by Daylight.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hack | Boxes & Loot",
					description: "DBD ESP Hack: ESP hack boxes, objective pins, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "DBD ESP Hack",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD ESP Hack.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "DBD ESP Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hack",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. ESP hack boxes, objective pins, and distance.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "DBD Unlock All | What It Means",
					description: "DBD Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "DBD Unlock All",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. DBD Unlock All.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD Unlock All",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Unlock All",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@dbdhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | DBD Hacks",
					description: "Privacybeleid for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Privacybeleid for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@dbdhacks.net voor support en juridische vragen.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | DBD Hacks",
					description: "Restitutiebeleid for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Restitutiebeleid for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Contact email,  order references, and basic site security data.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@dbdhacks.net voor support en juridische vragen.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | DBD Hacks",
					description: "Gebruiksvoorwaarden for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Gebruiksvoorwaarden for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Contact email,  order references, and basic site security data.",
								"Licenties met directe digitale levering via  checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks bundelt ESP wallhack, undefined en dbd aimbot als undetected pakket voor DBD op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@dbdhacks.net voor support en juridische vragen.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty DBD",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp i Aimbot do DBD na PC Windows — konserwacja Easy Anti-Cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla DBD PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet DBD Hacks jest aktywny dla DBD na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat wsparcie",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "DBD",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących DBD Hacks",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla DBD — checkout przez .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Dead by Daylight dla Dead by Daylight na PC. ESP wallhack, world esp i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.",
					h1: "DBD Hacks — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Dead by Daylight na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galeria DBD Hacks — ESP, Aimbot i wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego DBD Hacks w 2026",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Idealny do czytania wrogich teamów w BR i killer-side.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Player Boxes & Wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP DBD",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. player boxes, objective markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Soft Aim Controls",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. aimbot, FOV, and per-killer Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, aimbot, radar controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Funkcje.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. ESP, aimbot, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Cennik.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Instalacja.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizacje: EAC patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Aktualizacje.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. EAC patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Wsparcie.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Easy Anti-Cheat Safe Status",
					description: "Cheaty undetected: undetected maintenance after Easy Anti-Cheat patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Cheaty undetected.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | ESP Visibility",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. wallhack ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: World ESP cues for approaches and loops. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. World ESP cues for approaches and loops.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. how EAC updates are handled for Dead by Daylight hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty DBD 2026 | Buyer Guide",
					description: "Cheaty DBD 2026: 2026 DBD cheats checklist before . natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty DBD 2026",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Cheaty DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "Cheaty DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheaty DBD 2026",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. 2026 DBD cheats checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty DBD | ESP Aimbot Guide",
					description: "Cheaty DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty DBD",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Cheaty DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty DBD",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie DBD Hacks | Instant Access",
					description: "Pobieranie DBD Hacks: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie DBD Hacks",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Pobieranie DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Pobieranie DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie DBD Hacks",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu DBD | In-Game Toggles",
					description: "Mod menu DBD: in-client ESP and aimbot toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu DBD",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Mod menu DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "Mod menu DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu DBD",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. in-client ESP and aimbot toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Smooth Aim Settings",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. smooth aimbot settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty DBD | Buyer Checklist",
					description: "Najlepsze cheaty DBD: what to compare before buying DBD cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty DBD",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Najlepsze cheaty DBD.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Najlepsze cheaty DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty DBD",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. what to compare before buying DBD cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot DBD | Soft Aim Assist",
					description: "Hack aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot DBD",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Hack aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot DBD",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. undetected Aimbot hack assist for Dead by Daylight.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP DBD | Boxes & Loot",
					description: "Hack ESP DBD: ESP hack boxes, objective pins, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP DBD",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Hack ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP DBD",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. ESP hack boxes, objective pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | What It Means",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Kup DBD Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | DBD Hacks",
					description: "Polityka prywatności for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Polityka prywatności for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | DBD Hacks",
					description: "Polityka zwrotów for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Polityka zwrotów for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Contact email,  order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | DBD Hacks",
					description: "Warunki użytkowania for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Warunki użytkowania for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Contact email,  order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout . Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks łączy ESP wallhack, undefined i dbd aimbot jako pakiet undetected dla DBD na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@dbdhacks.net w sprawach wsparcia i prawnych.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы DBD",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp и Aimbot для DBD на Windows PC — обслуживание Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для DBD PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет DBD Hacks активен для DBD на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat поддержка",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей DBD Hacks",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для DBD — оплата через .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Dead by Daylight для Dead by Daylight на PC. ESP wallhack, world esp и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "DBD Hacks — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Dead by Daylight на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Галерея DBD Hacks — ESP, Aimbot и wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают DBD Hacks в 2026",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Идеально для чтения вражеских отрядов в BR и killer-side.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Боксы игроков и wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP DBD",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Управление aimbot",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. aimbot, FOV, and per-killer Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, aimbot, radar controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Функции.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. ESP, aimbot, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Цены.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Установка.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Easy Anti-Cheat",
					description: "Обновления: EAC patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Обновления.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. EAC patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Поддержка.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after Easy Anti-Cheat patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Undetected читы.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | Видимость ESP",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. wallhack ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: World ESP cues for approaches and loops. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. World ESP cues for approaches and loops.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Обслуживание патчей",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. how EAC updates are handled for Dead by Daylight hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы DBD 2026 | Гайд покупателя",
					description: "Читы DBD 2026: 2026 DBD cheats checklist before . мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы DBD 2026",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Читы DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "Читы DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Читы DBD 2026",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. 2026 DBD cheats checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы DBD | Гайд ESP и Aimbot",
					description: "Читы DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы DBD",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Читы DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Читы DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы DBD",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать DBD Hacks | Мгновенный доступ",
					description: "Скачать DBD Hacks: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать DBD Hacks",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Скачать DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Скачать DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать DBD Hacks",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню DBD | Игровые переключатели",
					description: "Мод-меню DBD: in-client ESP and aimbot toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню DBD",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Мод-меню DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "Мод-меню DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню DBD",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. in-client ESP and aimbot toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Настройки aimbot",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. smooth aimbot settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы DBD | Чеклист покупателя",
					description: "Лучшие читы DBD: what to compare before buying DBD cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы DBD",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Лучшие читы DBD.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Лучшие читы DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы DBD",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. what to compare before buying DBD cheats.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot DBD | Aimbot ассист",
					description: "Хак aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot DBD",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Хак aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Хак aimbot DBD",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. undetected Aimbot hack assist for Dead by Daylight.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP DBD | Боксы и лут",
					description: "Хак ESP DBD: ESP hack boxes, objective pins, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP DBD",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Хак ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Хак ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Хак ESP DBD",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. ESP hack boxes, objective pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | Что это значит",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купить DBD Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@dbdhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | DBD Hacks",
					description: "Политика конфиденциальности for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Политика конфиденциальности for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@dbdhacks.net для поддержки и юридических вопросов.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | DBD Hacks",
					description: "Политика возврата for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Политика возврата for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Contact email,  order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@dbdhacks.net для поддержки и юридических вопросов.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | DBD Hacks",
					description: "Условия использования for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Условия использования for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Contact email,  order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout . Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks объединяет ESP wallhack, undefined и dbd aimbot в undetected пакете для DBD на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@dbdhacks.net для поддержки и юридических вопросов.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected DBD hileleri",
					accentShort: "DBD Hacks",
					subtitle: "DBD Windows PC için ESP wallhack, world esp ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					subtitleShort: "DBD PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "DBD Hacks paketi DBD Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Easy Anti-Cheat bakım desteği",
					antiCheatShort: "Easy Anti-Cheat destek",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "DBD Hacks alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "DBD için undetected ESP, wallhack, radar ve Aimbot —  checkout.",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack ve Aimbot",
					description: "Dead by Daylight için undetected hileler. ESP wallhack, world esp ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.",
					h1: "DBD Hacks — Undetected ESP, Wallhack ve Aimbot",
					intro: "Dead by Daylight Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "DBD Hacks galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden DBD Hacks",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. BR ve killer-side'da düşman team okumak için ideal.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: player boxes, objective markers, and wallhack overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. player boxes, objective markers, and wallhack overlays.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: aimbot, FOV, and per-killer Aimbot profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD Aimbot.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. aimbot, FOV, and per-killer Aimbot profiles.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, aimbot, radar controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Özellikler.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. ESP, aimbot, radar controls.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. $35 monthly or $150 lifetime licenses.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Kurulum.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Windows PC activation and first-launch setup.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Easy Anti-Cheat Maintenance Log",
					description: "Güncellemeler: EAC patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. EAC patch status and rebuild notes.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. SSS.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Destek.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. order help and license support contact.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Easy Anti-Cheat Safe Status",
					description: "Undetected hileler: undetected maintenance after Easy Anti-Cheat patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. undetected maintenance after Easy Anti-Cheat patches.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				wallhack: {
					title: "DBD Wallhack | ESP Visibility",
					description: "DBD Wallhack: wallhack ESP for players, loot, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Wallhack",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD Wallhack.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD Wallhack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Wallhack",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. wallhack ESP for players, loot, and distance.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: World ESP cues for approaches and loops. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. World ESP cues for approaches and loops.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				eac: {
					title: "EAC bypass | Patch Maintenance",
					description: "EAC bypass: how EAC updates are handled for Dead by Daylight hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "EAC bypass",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. EAC bypass.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC bypass",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC bypass",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. how EAC updates are handled for Dead by Daylight hacks.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Hileleri 2026 | Buyer Guide",
					description: "DBD Hileleri 2026: 2026 DBD cheats checklist before . anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Hileleri 2026",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD Hileleri 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD Hileleri 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD Hileleri 2026",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. 2026 DBD cheats checklist before checkout.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				hacks: {
					title: "DBD Hileleri | ESP Aimbot Guide",
					description: "DBD Hileleri: the Dead by Daylight hacks pillar for ESP and Aimbot. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Hileleri",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD Hileleri.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Hileleri",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Hileleri",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				"cheat-download": {
					title: "DBD Hile İndir | Instant Access",
					description: "DBD Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Hile İndir",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD Hile İndir.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "DBD Hile İndir",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "DBD Hile İndir",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. digital license download after payment.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				"mod-menu": {
					title: "DBD Mod Menü | In-Game Toggles",
					description: "DBD Mod Menü: in-client ESP and aimbot toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Mod Menü",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD Mod Menü.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "DBD Mod Menü",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Mod Menü",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. in-client ESP and aimbot toggles.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				"skill-check": {
					title: "DBD Soft Aim | Smooth Aim Settings",
					description: "DBD Soft Aim: smooth aimbot settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Soft Aim",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD Soft Aim.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD Soft Aim",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Soft Aim",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. smooth aimbot settings for Windows PC.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi DBD Hileleri | Buyer Checklist",
					description: "En İyi DBD Hileleri: what to compare before buying DBD cheats. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi DBD Hileleri",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. En İyi DBD Hileleri.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "En İyi DBD Hileleri",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi DBD Hileleri",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. what to compare before buying DBD cheats.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hilesi | Soft Aim Assist",
					description: "DBD Aimbot Hilesi: undetected Aimbot hack assist for Dead by Daylight. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Aimbot Hilesi",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD Aimbot Hilesi.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hilesi",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hilesi",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. undetected Aimbot hack assist for Dead by Daylight.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hilesi | Boxes & Loot",
					description: "DBD ESP Hilesi: ESP hack boxes, objective pins, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD ESP Hilesi",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD ESP Hilesi.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "DBD ESP Hilesi",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hilesi",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. ESP hack boxes, objective pins, and distance.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				"unlock-all": {
					title: "DBD Unlock All | What It Means",
					description: "DBD Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "DBD Unlock All",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. DBD Unlock All.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD Unlock All",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Unlock All",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@dbdhacks.net.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | DBD Hacks",
					description: "Gizlilik politikası for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Gizlilik politikası for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@dbdhacks.net.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | DBD Hacks",
					description: "İade politikası for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. İade politikası for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Contact email,  order references, and basic site security data.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@dbdhacks.net.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | DBD Hacks",
					description: "Kullanım şartları for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Kullanım şartları for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Contact email,  order references, and basic site security data.",
								" checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks, DBD için Windows PC üzerinde ESP wallhack, undefined ve dbd aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@dbdhacks.net.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش DBD غير مكتشف",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ DBD على Windows PC — صيانة Easy Anti-Cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ DBD PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة DBD Hacks نشطة لـ DBD على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Easy Anti-Cheat",
					antiCheatShort: "دعم Easy Anti-Cheat",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري DBD Hacks",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ DBD — الدفع عبر .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP وWallhack وAimbot",
					description: "غش Dead by Daylight undetected لـ Dead by Daylight على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.",
					h1: "DBD Hacks — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Dead by Daylight على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "معرض DBD Hacks — ESP وAimbot وwallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا DBD Hacks في 2026",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. مثالي لقراءة فرق العدو في BR وkiller-side.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Player Boxes & Wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP DBD",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. player boxes, objective markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Soft Aim Controls",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. aimbot, FOV, and per-killer Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, aimbot, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. الميزات.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. ESP, aimbot, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. الأسعار.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. التثبيت.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Easy Anti-Cheat Maintenance Log",
					description: "التحديثات: EAC patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. التحديثات.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. EAC patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. الأسئلة.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. الدعم.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Easy Anti-Cheat Safe Status",
					description: "غش undetected: undetected maintenance after Easy Anti-Cheat patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. غش undetected.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | ESP Visibility",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. wallhack ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: World ESP cues for approaches and loops. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. World ESP cues for approaches and loops.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. how EAC updates are handled for Dead by Daylight hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش DBD 2026 | Buyer Guide",
					description: "غش DBD 2026: 2026 DBD cheats checklist before . تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش DBD 2026",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. غش DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "غش DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "غش DBD 2026",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. 2026 DBD cheats checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش DBD | ESP Aimbot Guide",
					description: "غش DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش DBD",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. غش DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "غش DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش DBD",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل DBD Hacks | Instant Access",
					description: "تحميل DBD Hacks: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل DBD Hacks",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. تحميل DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "تحميل DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل DBD Hacks",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود DBD | In-Game Toggles",
					description: "قائمة مود DBD: in-client ESP and aimbot toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود DBD",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. قائمة مود DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "قائمة مود DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود DBD",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. in-client ESP and aimbot toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Smooth Aim Settings",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. smooth aimbot settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش DBD | Buyer Checklist",
					description: "أفضل غش DBD: what to compare before buying DBD cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش DBD",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. أفضل غش DBD.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "أفضل غش DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش DBD",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. what to compare before buying DBD cheats.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot DBD | Soft Aim Assist",
					description: "هاك Aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot DBD",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. هاك Aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot DBD",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. undetected Aimbot hack assist for Dead by Daylight.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP DBD | Boxes & Loot",
					description: "هاك ESP DBD: ESP hack boxes, objective pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP DBD",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. هاك ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "هاك ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "هاك ESP DBD",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. ESP hack boxes, objective pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | What It Means",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "اشترِ DBD Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@dbdhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | DBD Hacks",
					description: "سياسة الخصوصية for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. سياسة الخصوصية for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@dbdhacks.net للدعم والطلبات القانونية.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | DBD Hacks",
					description: "سياسة الاسترداد for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. سياسة الاسترداد for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Contact email,  order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@dbdhacks.net للدعم والطلبات القانونية.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | DBD Hacks",
					description: "شروط الاستخدام for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. شروط الاستخدام for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Contact email,  order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout . خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"DBD Hacks يجمع ESP wallhack وundefined وdbd aimbot غير مكتشف لـ DBD على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@dbdhacks.net للدعم والطلبات القانونية.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected DBDチート",
					accentShort: "DBD Hacks",
					subtitle: "DBD Windows PC向けESP wallhack、world esp、Aimbot — Easy Anti-Cheatメンテナンス付き。",
					subtitleShort: "DBD PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "DBD HacksパッケージはDBD Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheatメンテナンス対応",
					antiCheatShort: "Easy Anti-Cheat対応",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "DBD Hacks購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "DBD向けundetected ESP、wallhack、radar、Aimbot — で購入。",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP・Wallhack・Aimbot",
					description: "Dead by Daylight向けundetectedチート。ESP wallhack、world esp、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。",
					h1: "DBD Hacks — Undetected ESP・Wallhack・Aimbot",
					intro: "Dead by Daylight Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。",
					imageAlt: "DBD cheats hero ESP aimbot wallhack",
					galleryTitle: "DBD Hacksギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にDBD Hacksを選ぶ理由",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。BRとkiller-sideで敵スクワッドを読むのに最適。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: player boxes, objective markers, and wallhack overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。player boxes, objective markers, and wallhack overlays.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: aimbot, FOV, and per-killer Aimbot profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD Aimbot.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。aimbot, FOV, and per-killer Aimbot profiles.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, aimbot, radar controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。機能.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。ESP, aimbot, radar controls.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。料金.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。$35 monthly or $150 lifetime licenses.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。Windows PC activation and first-launch setup.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: EAC patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。更新.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "更新",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。EAC patch status and rebuild notes.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。サポート.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。order help and license support contact.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Easy Anti-Cheat Safe Status",
					description: "Undetectedチート: undetected maintenance after Easy Anti-Cheat patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。undetected maintenance after Easy Anti-Cheat patches.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "DBD Wallhack | ESP Visibility",
					description: "DBD Wallhack: wallhack ESP for players, loot, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Wallhack",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD Wallhack.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD Wallhack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Wallhack",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。wallhack ESP for players, loot, and distance.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: World ESP cues for approaches and loops. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。World ESP cues for approaches and loops.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for Dead by Daylight hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。EAC Bypass.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。how EAC updates are handled for Dead by Daylight hacks.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Hacks 2026 | Buyer Guide",
					description: "DBD Hacks 2026: 2026 DBD cheats checklist before . 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Hacks 2026",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD Hacks 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD Hacks 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD Hacks 2026",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。2026 DBD cheats checklist before checkout.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "DBD Hacks | ESP Aimbot Guide",
					description: "DBD Hacks: the Dead by Daylight hacks pillar for ESP and Aimbot. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Hacks",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD Hacks.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Hacks",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。the Dead by Daylight hacks pillar for ESP and Aimbot.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "DBD Cheat Download | Instant Access",
					description: "DBD Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Cheat Download",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD Cheat Download.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "DBD Cheat Download",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "DBD Cheat Download",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。digital license download after payment.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "DBD Mod Menu | In-Game Toggles",
					description: "DBD Mod Menu: in-client ESP and aimbot toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Mod Menu",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD Mod Menu.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "DBD Mod Menu",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Mod Menu",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。in-client ESP and aimbot toggles.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				"skill-check": {
					title: "DBD Soft Aim | Smooth Aim Settings",
					description: "DBD Soft Aim: smooth aimbot settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Soft Aim",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD Soft Aim.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD Soft Aim",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Soft Aim",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。smooth aimbot settings for Windows PC.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強DBDチート | Buyer Checklist",
					description: "最強DBDチート: what to compare before buying DBD cheats. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強DBDチート",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。最強DBDチート.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "最強DBDチート",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強DBDチート",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。what to compare before buying DBD cheats.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack | Soft Aim Assist",
					description: "DBD Aimbot Hack: undetected Aimbot hack assist for Dead by Daylight. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Aimbot Hack",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD Aimbot Hack.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hack",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。undetected Aimbot hack assist for Dead by Daylight.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hack | Boxes & Loot",
					description: "DBD ESP Hack: ESP hack boxes, objective pins, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD ESP Hack",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD ESP Hack.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "DBD ESP Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hack",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。ESP hack boxes, objective pins, and distance.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "DBD Unlock All | What It Means",
					description: "DBD Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "DBD Unlock All",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。DBD Unlock All.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD Unlock All",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Unlock All",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@dbdhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | DBD Hacks",
					description: "プライバシーポリシー for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。プライバシーポリシー for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | DBD Hacks",
					description: "返金ポリシー for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。返金ポリシー for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。Contact email,  order references, and basic site security data.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | DBD Hacks",
					description: "利用規約 for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。利用規約 for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。Contact email,  order references, and basic site security data.",
								" checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"DBD HacksはDBD向けWindows PC用ESP wallhack、undefined、dbd aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected DBD 치트",
					accentShort: "DBD Hacks",
					subtitle: "DBD Windows PC용 ESP wallhack, world esp, Aimbot — Easy Anti-Cheat 유지보수 포함.",
					subtitleShort: "DBD PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "DBD Hacks 패키지는 DBD Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat 유지보수 지원",
					antiCheatShort: "Easy Anti-Cheat 지원",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "DBD Hacks 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "DBD용 undetected ESP, wallhack, radar, Aimbot —  결제.",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack, Aimbot",
					description: "Dead by Daylight undetected 치트. ESP wallhack, world esp, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.",
					h1: "DBD Hacks — Undetected ESP, Wallhack, Aimbot",
					intro: "Dead by Daylight Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.",
					imageAlt: "DBD cheats hero ESP aimbot wallhack",
					galleryTitle: "DBD Hacks 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 DBD Hacks를 선택하는 이유",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. BR 및 killer-side에서 적 분대 읽기에 이상적.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: player boxes, objective markers, and wallhack overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. player boxes, objective markers, and wallhack overlays.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: aimbot, FOV, and per-killer Aimbot profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD Aimbot.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. aimbot, FOV, and per-killer Aimbot profiles.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, aimbot, radar controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 기능.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. ESP, aimbot, radar controls.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 가격.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. $35 monthly or $150 lifetime licenses.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 설치.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. Windows PC activation and first-launch setup.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Easy Anti-Cheat Maintenance Log",
					description: "업데이트: EAC patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. EAC patch status and rebuild notes.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 지원.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. order help and license support contact.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Easy Anti-Cheat Safe Status",
					description: "Undetected 치트: undetected maintenance after Easy Anti-Cheat patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. undetected maintenance after Easy Anti-Cheat patches.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "DBD Wallhack | ESP Visibility",
					description: "DBD Wallhack: wallhack ESP for players, loot, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD Wallhack",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD Wallhack.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD Wallhack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Wallhack",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. wallhack ESP for players, loot, and distance.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: World ESP cues for approaches and loops. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. World ESP cues for approaches and loops.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for Dead by Daylight hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. EAC Bypass.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. how EAC updates are handled for Dead by Daylight hacks.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Hacks 2026 | Buyer Guide",
					description: "DBD Hacks 2026: 2026 DBD cheats checklist before . 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD Hacks 2026",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD Hacks 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD Hacks 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD Hacks 2026",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 2026 DBD cheats checklist before checkout.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "DBD Hacks | ESP Aimbot Guide",
					description: "DBD Hacks: the Dead by Daylight hacks pillar for ESP and Aimbot. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD Hacks",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD Hacks.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Hacks",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "DBD Cheat Download | Instant Access",
					description: "DBD Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD Cheat Download",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD Cheat Download.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "DBD Cheat Download",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "DBD Cheat Download",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. digital license download after payment.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "DBD 모드 메뉴 | In-Game Toggles",
					description: "DBD 모드 메뉴: in-client ESP and aimbot toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD 모드 메뉴",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD 모드 메뉴.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "DBD 모드 메뉴",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD 모드 메뉴",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. in-client ESP and aimbot toggles.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				"skill-check": {
					title: "DBD Soft Aim | Smooth Aim Settings",
					description: "DBD Soft Aim: smooth aimbot settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD Soft Aim",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD Soft Aim.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD Soft Aim",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Soft Aim",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. smooth aimbot settings for Windows PC.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 DBD 치트 | Buyer Checklist",
					description: "최고의 DBD 치트: what to compare before buying DBD cheats. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 DBD 치트",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 최고의 DBD 치트.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "최고의 DBD 치트",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 DBD 치트",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. what to compare before buying DBD cheats.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD 에임봇 핵 | Soft Aim Assist",
					description: "DBD 에임봇 핵: undetected Aimbot hack assist for Dead by Daylight. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD 에임봇 핵",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD 에임봇 핵.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "DBD 에임봇 핵",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD 에임봇 핵",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. undetected Aimbot hack assist for Dead by Daylight.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP 핵 | Boxes & Loot",
					description: "DBD ESP 핵: ESP hack boxes, objective pins, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD ESP 핵",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD ESP 핵.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "DBD ESP 핵",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP 핵",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. ESP hack boxes, objective pins, and distance.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "DBD Unlock All | What It Means",
					description: "DBD Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "DBD Unlock All",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. DBD Unlock All.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD Unlock All",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Unlock All",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@dbdhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | DBD Hacks",
					description: "개인정보 처리방침 for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 개인정보 처리방침 for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | DBD Hacks",
					description: "환불 정책 for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 환불 정책 for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. Contact email,  order references, and basic site security data.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | DBD Hacks",
					description: "이용 약관 for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. 이용 약관 for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. Contact email,  order references, and basic site security data.",
								" checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks는 DBD Windows PC용 ESP wallhack, undefined, dbd aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected DBD作弊",
					accentShort: "DBD Hacks",
					subtitle: "适用于DBD Windows PC的ESP wallhack、world esp和Aimbot — 含Easy Anti-Cheat维护。",
					subtitleShort: "DBD PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "DBD Hacks套餐已在DBD Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Easy Anti-Cheat维护",
					antiCheatShort: "Easy Anti-Cheat支持",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "DBD Hacks 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "DBD undetected ESP、wallhack、radar与Aimbot — 通过结账。",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP、Wallhack、Aimbot",
					description: "Dead by Daylight undetected作弊。ESP wallhack、world esp、Aimbot、Easy Anti-Cheat维护。即时数字交付。",
					h1: "DBD Hacks — Undetected ESP、Wallhack、Aimbot",
					intro: "Dead by Daylight Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。",
					imageAlt: "DBD cheats hero ESP aimbot wallhack",
					galleryTitle: "DBD Hacks图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择DBD Hacks的原因",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。适合在BR和killer-side中读取敌方小队。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。一个许可证而非多个工具。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: player boxes, objective markers, and wallhack overlays. 即时数字交付. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。player boxes, objective markers, and wallhack overlays.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: aimbot, FOV, and per-killer Aimbot profiles. 即时数字交付. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD Aimbot.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。aimbot, FOV, and per-killer Aimbot profiles.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, aimbot, radar controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。功能.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。ESP, aimbot, radar controls.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。价格.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。$35 monthly or $150 lifetime licenses.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。安装.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。Windows PC activation and first-launch setup.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: EAC patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。更新.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "更新",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。EAC patch status and rebuild notes.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。常见问题.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。支持.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。order help and license support contact.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Easy Anti-Cheat Safe Status",
					description: "Undetected作弊: undetected maintenance after Easy Anti-Cheat patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。Undetected作弊.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。undetected maintenance after Easy Anti-Cheat patches.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "DBD Wallhack | ESP Visibility",
					description: "DBD Wallhack: wallhack ESP for players, loot, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "DBD Wallhack",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD Wallhack.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD Wallhack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Wallhack",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。wallhack ESP for players, loot, and distance.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: World ESP cues for approaches and loops. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。Radar Hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。World ESP cues for approaches and loops.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for Dead by Daylight hacks. 即时数字交付. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。EAC Bypass.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。how EAC updates are handled for Dead by Daylight hacks.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD作弊 2026 | Buyer Guide",
					description: "DBD作弊 2026: 2026 DBD cheats checklist before . 即时数字交付. undetected — Windows PC.",
					h1: "DBD作弊 2026",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD作弊 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD作弊 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD作弊 2026",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。2026 DBD cheats checklist before checkout.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "DBD作弊 | ESP Aimbot Guide",
					description: "DBD作弊: the Dead by Daylight hacks pillar for ESP and Aimbot. 即时数字交付. undetected — Windows PC.",
					h1: "DBD作弊",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD作弊.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD作弊",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD作弊",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "DBD作弊下载 | Instant Access",
					description: "DBD作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "DBD作弊下载",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD作弊下载.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "DBD作弊下载",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "DBD作弊下载",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。digital license download after payment.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "DBD修改菜单 | In-Game Toggles",
					description: "DBD修改菜单: in-client ESP and aimbot toggles. 即时数字交付. undetected — Windows PC.",
					h1: "DBD修改菜单",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD修改菜单.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "DBD修改菜单",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD修改菜单",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。in-client ESP and aimbot toggles.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				"skill-check": {
					title: "DBD Soft Aim | Smooth Aim Settings",
					description: "DBD Soft Aim: smooth aimbot settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "DBD Soft Aim",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD Soft Aim.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD Soft Aim",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Soft Aim",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。smooth aimbot settings for Windows PC.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳DBD作弊 | Buyer Checklist",
					description: "最佳DBD作弊: what to compare before buying DBD cheats. 即时数字交付. undetected — Windows PC.",
					h1: "最佳DBD作弊",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。最佳DBD作弊.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "最佳DBD作弊",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳DBD作弊",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。what to compare before buying DBD cheats.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD自瞄外挂 | Soft Aim Assist",
					description: "DBD自瞄外挂: undetected Aimbot hack assist for Dead by Daylight. 即时数字交付. undetected — Windows PC.",
					h1: "DBD自瞄外挂",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD自瞄外挂.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "DBD自瞄外挂",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD自瞄外挂",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。undetected Aimbot hack assist for Dead by Daylight.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP外挂 | Boxes & Loot",
					description: "DBD ESP外挂: ESP hack boxes, objective pins, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "DBD ESP外挂",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD ESP外挂.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "DBD ESP外挂",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP外挂",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。ESP hack boxes, objective pins, and distance.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "DBD Unlock All | What It Means",
					description: "DBD Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. undetected — Windows PC.",
					h1: "DBD Unlock All",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。DBD Unlock All.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD Unlock All",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "购买 DBD Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Unlock All",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@dbdhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | DBD Hacks",
					description: "隐私政策 for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。隐私政策 for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | DBD Hacks",
					description: "退款政策 for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。退款政策 for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。Contact email,  order references, and basic site security data.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | DBD Hacks",
					description: "使用条款 for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。使用条款 for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。Contact email,  order references, and basic site security data.",
								"通过 checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks为DBDWindows PC提供ESP wallhack、undefined和dbd aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected DBD cheats",
					accentShort: "DBD Hacks",
					subtitle: "DBD Windows PC के लिए ESP wallhack, world esp और Aimbot — EAC maintenance शामिल।",
					subtitleShort: "DBD PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "DBD Hacks पैकेज DBD Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "EAC maintenance समर्थित",
					antiCheatShort: "Easy Anti-Cheat समर्थित",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "DBD Hacks खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "DBD के लिए undetected ESP, wallhack, radar और Aimbot —  checkout।",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack और Aimbot",
					description: "Dead by Daylight undetected cheats. ESP wallhack, world esp, Aimbot, EAC maintenance. Instant digital instant digital delivery.",
					h1: "DBD Hacks — Undetected ESP, Wallhack और Aimbot",
					intro: "Dead by Daylight Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, EAC maintenance सहित.",
					imageAlt: "DBD cheats hero ESP aimbot wallhack",
					galleryTitle: "DBD Hacks gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में DBD Hacks क्यों",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। BR और killer-side में दुश्मन team पढ़ने के लिए आदर्श.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: player boxes, objective markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। player boxes, objective markers, and wallhack overlays.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: aimbot, FOV, and per-killer Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD Aimbot.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। aimbot, FOV, and per-killer Aimbot profiles.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, aimbot, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। ESP, aimbot, radar controls.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। Windows PC activation and first-launch setup.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Easy Anti-Cheat Maintenance Log",
					description: "अपडेट: EAC patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। EAC patch status and rebuild notes.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। order help and license support contact.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected maintenance after Easy Anti-Cheat patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। undetected maintenance after Easy Anti-Cheat patches.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "DBD Wallhack | ESP Visibility",
					description: "DBD Wallhack: wallhack ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Wallhack",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD Wallhack.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD Wallhack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Wallhack",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। wallhack ESP for players, loot, and distance.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: World ESP cues for approaches and loops. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। World ESP cues for approaches and loops.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for Dead by Daylight hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। EAC Bypass.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। how EAC updates are handled for Dead by Daylight hacks.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Hacks 2026 | Buyer Guide",
					description: "DBD Hacks 2026: 2026 DBD cheats checklist before . तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Hacks 2026",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD Hacks 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD Hacks 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD Hacks 2026",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। 2026 DBD cheats checklist before checkout.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "DBD Hacks | ESP Aimbot Guide",
					description: "DBD Hacks: the Dead by Daylight hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Hacks",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD Hacks.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Hacks",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। the Dead by Daylight hacks pillar for ESP and Aimbot.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "DBD Cheat Download | Instant Access",
					description: "DBD Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Cheat Download",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD Cheat Download.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "DBD Cheat Download",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "DBD Cheat Download",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। digital license download after payment.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "DBD Mod Menu | In-Game Toggles",
					description: "DBD Mod Menu: in-client ESP and aimbot toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Mod Menu",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD Mod Menu.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "DBD Mod Menu",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Mod Menu",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। in-client ESP and aimbot toggles.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				"skill-check": {
					title: "DBD Soft Aim | Smooth Aim Settings",
					description: "DBD Soft Aim: smooth aimbot settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Soft Aim",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD Soft Aim.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD Soft Aim",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Soft Aim",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। smooth aimbot settings for Windows PC.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ DBD Hacks | Buyer Checklist",
					description: "सर्वश्रेष्ठ DBD Hacks: what to compare before buying DBD cheats. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ DBD Hacks",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। सर्वश्रेष्ठ DBD Hacks.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "सर्वश्रेष्ठ DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ DBD Hacks",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। what to compare before buying DBD cheats.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack | Soft Aim Assist",
					description: "DBD Aimbot Hack: undetected Aimbot hack assist for Dead by Daylight. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Aimbot Hack",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD Aimbot Hack.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hack",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। undetected Aimbot hack assist for Dead by Daylight.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hack | Boxes & Loot",
					description: "DBD ESP Hack: ESP hack boxes, objective pins, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD ESP Hack",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD ESP Hack.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "DBD ESP Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hack",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। ESP hack boxes, objective pins, and distance.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "DBD Unlock All | What It Means",
					description: "DBD Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "DBD Unlock All",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। DBD Unlock All.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD Unlock All",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "DBD Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Unlock All",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@dbdhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | DBD Hacks",
					description: "गोपनीयता नीति for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। गोपनीयता नीति for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | DBD Hacks",
					description: "रिफंड नीति for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। रिफंड नीति for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। Contact email,  order references, and basic site security data.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | DBD Hacks",
					description: "उपयोग की शर्तें for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। उपयोग की शर्तें for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। Contact email,  order references, and basic site security data.",
								" checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks DBD के लिए Windows PC पर ESP wallhack, undefined और dbd aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@dbdhacks.net",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat DBD undetected",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp, dan Aimbot untuk DBD di PC Windows — pemeliharaan Easy Anti-Cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk DBD PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket DBD Hacks aktif untuk DBD di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Easy Anti-Cheat didukung",
					antiCheatShort: "Easy Anti-Cheat didukung",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli DBD Hacks",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk DBD — checkout via .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Dead by Daylight undetected untuk Dead by Daylight di PC. ESP wallhack, world esp, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.",
					h1: "DBD Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Dead by Daylight di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galeri DBD Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa DBD Hacks di 2026",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Ideal membaca team musuh di BR dan killer-side.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Player Boxes & Wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP DBD",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. player boxes, objective markers, and wallhack overlays.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Soft Aim Controls",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. aimbot, FOV, and per-killer Aimbot profiles.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, aimbot, radar controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Fitur.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. ESP, aimbot, radar controls.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Harga.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Setup.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Easy Anti-Cheat Maintenance Log",
					description: "Pembaruan: EAC patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Pembaruan.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. EAC patch status and rebuild notes.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Dukungan.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: undetected maintenance after Easy Anti-Cheat patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Cheat undetected.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | ESP Visibility",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. wallhack ESP for players, loot, and distance.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: World ESP cues for approaches and loops. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. World ESP cues for approaches and loops.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. how EAC updates are handled for Dead by Daylight hacks.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat DBD 2026 | Buyer Guide",
					description: "Cheat DBD 2026: 2026 DBD cheats checklist before . pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat DBD 2026",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Cheat DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "Cheat DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheat DBD 2026",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. 2026 DBD cheats checklist before checkout.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat DBD | ESP Aimbot Guide",
					description: "Cheat DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat DBD",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Cheat DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat DBD",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat DBD | Instant Access",
					description: "Download Cheat DBD: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat DBD",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Download Cheat DBD.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Download Cheat DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat DBD",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod DBD | In-Game Toggles",
					description: "Menu mod DBD: in-client ESP and aimbot toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod DBD",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Menu mod DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "Menu mod DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod DBD",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. in-client ESP and aimbot toggles.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Smooth Aim Settings",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. smooth aimbot settings for Windows PC.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat DBD terbaik | Buyer Checklist",
					description: "Cheat DBD terbaik: what to compare before buying DBD cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat DBD terbaik",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Cheat DBD terbaik.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Cheat DBD terbaik",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat DBD terbaik",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. what to compare before buying DBD cheats.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot DBD | Soft Aim Assist",
					description: "Hack aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot DBD",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Hack aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot DBD",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. undetected Aimbot hack assist for Dead by Daylight.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP DBD | Boxes & Loot",
					description: "Hack ESP DBD: ESP hack boxes, objective pins, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP DBD",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Hack ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP DBD",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. ESP hack boxes, objective pins, and distance.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | What It Means",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Beli DBD Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@dbdhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | DBD Hacks",
					description: "Kebijakan privasi for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Kebijakan privasi for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@dbdhacks.net untuk dukungan dan legal.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | DBD Hacks",
					description: "Kebijakan refund for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Kebijakan refund for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Contact email,  order references, and basic site security data.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@dbdhacks.net untuk dukungan dan legal.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | DBD Hacks",
					description: "Syarat penggunaan for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Syarat penggunaan for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Contact email,  order references, and basic site security data.",
								"pengiriman digital instan via checkout . Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks menyediakan ESP wallhack, undefined, dan dbd aimbot undetected untuk DBD di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@dbdhacks.net untuk dukungan dan legal.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "DBD cheats ไม่ถูกตรวจจับ",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp และ Aimbot สำหรับ DBD บน Windows PC — รวมการดูแล Easy Anti-Cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ DBD PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ DBD Hacks พร้อมใช้งานสำหรับ DBD บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat รองรับ",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ DBD Hacks",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ DBD — ชำระผ่าน ",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Dead by Daylight undetected สำหรับ Dead by Daylight บน PC. ESP wallhack, world esp, Aimbot, EAC maintenance. จัดส่งดิจิทัลทันที.",
					h1: "DBD Hacks — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Dead by Daylight บน Windows PC: ESP wallhack, radar, Aimbot พร้อม EAC maintenance",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "แกลเลอรี DBD Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก DBD Hacks ปี 2026",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC เหมาะสำหรับอ่าน team ศัตรูใน BR และ killer-side",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: player boxes, objective markers, and wallhack overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC player boxes, objective markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: aimbot, FOV, and per-killer Aimbot profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC DBD Aimbot.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC aimbot, FOV, and per-killer Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, aimbot, radar controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC ฟีเจอร์.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC ESP, aimbot, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC ราคา.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC ติดตั้ง.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Easy Anti-Cheat Maintenance Log",
					description: "อัปเดต: EAC patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC อัปเดต.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC EAC patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC สนับสนุน.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: undetected maintenance after Easy Anti-Cheat patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Cheats undetected.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC undetected maintenance after Easy Anti-Cheat patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "DBD Wallhack | ESP Visibility",
					description: "DBD Wallhack: wallhack ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD Wallhack",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC DBD Wallhack.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD Wallhack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Wallhack",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC wallhack ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: World ESP cues for approaches and loops. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Radar Hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC World ESP cues for approaches and loops.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for Dead by Daylight hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC EAC Bypass.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC how EAC updates are handled for Dead by Daylight hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Hacks 2026 | Buyer Guide",
					description: "DBD Hacks 2026: 2026 DBD cheats checklist before . จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD Hacks 2026",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC DBD Hacks 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD Hacks 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD Hacks 2026",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC 2026 DBD cheats checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "DBD Hacks | ESP Aimbot Guide",
					description: "DBD Hacks: the Dead by Daylight hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD Hacks",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC DBD Hacks.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Hacks",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด DBD Hacks | Instant Access",
					description: "ดาวน์โหลด DBD Hacks: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด DBD Hacks",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC ดาวน์โหลด DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "ดาวน์โหลด DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด DBD Hacks",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด DBD | In-Game Toggles",
					description: "เมนูมอด DBD: in-client ESP and aimbot toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด DBD",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC เมนูมอด DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "เมนูมอด DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด DBD",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC in-client ESP and aimbot toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"skill-check": {
					title: "DBD Soft Aim | Smooth Aim Settings",
					description: "DBD Soft Aim: smooth aimbot settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD Soft Aim",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC DBD Soft Aim.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD Soft Aim",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Soft Aim",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC smooth aimbot settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat DBD ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat DBD ที่ดีที่สุด: what to compare before buying DBD cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat DBD ที่ดีที่สุด",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Cheat DBD ที่ดีที่สุด.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Cheat DBD ที่ดีที่สุด",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat DBD ที่ดีที่สุด",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC what to compare before buying DBD cheats.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot DBD | Soft Aim Assist",
					description: "Hack Aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot DBD",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Hack Aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot DBD",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC undetected Aimbot hack assist for Dead by Daylight.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP DBD | Boxes & Loot",
					description: "Hack ESP DBD: ESP hack boxes, objective pins, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP DBD",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Hack ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP DBD",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC ESP hack boxes, objective pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "DBD Unlock All | What It Means",
					description: "DBD Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "DBD Unlock All",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC DBD Unlock All.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD Unlock All",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "ซื้อ DBD Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Unlock All",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@dbdhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | DBD Hacks",
					description: "นโยบายความเป็นส่วนตัว for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC นโยบายความเป็นส่วนตัว for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@dbdhacks.net สำหรับการสนับสนุน",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | DBD Hacks",
					description: "นโยบายการคืนเงิน for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC นโยบายการคืนเงิน for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Contact email,  order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@dbdhacks.net สำหรับการสนับสนุน",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | DBD Hacks",
					description: "ข้อกำหนดการใช้งาน for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC ข้อกำหนดการใช้งาน for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Contact email,  order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout  แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks รวม ESP wallhack, undefined และ dbd aimbot แบบ undetected สำหรับ DBD บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@dbdhacks.net สำหรับการสนับสนุน",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat DBD undetected",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp và Aimbot cho DBD trên PC Windows — bảo trì Easy Anti-Cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho DBD PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói DBD Hacks đang hoạt động cho DBD trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Easy Anti-Cheat",
					antiCheatShort: "Hỗ trợ Easy Anti-Cheat",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua DBD Hacks",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho DBD — thanh toán qua .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Dead by Daylight undetected cho Dead by Daylight trên PC. ESP wallhack, world esp, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.",
					h1: "DBD Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Dead by Daylight trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Thư viện DBD Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn DBD Hacks 2026",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Lý tưởng đọc team địch trong BR và killer-side.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Player Boxes & Wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP DBD",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. player boxes, objective markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Soft Aim Controls",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. aimbot, FOV, and per-killer Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, aimbot, radar controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Tính năng.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. ESP, aimbot, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Giá.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Cài đặt.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Easy Anti-Cheat Maintenance Log",
					description: "Cập nhật: EAC patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Cập nhật.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. EAC patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Hỗ trợ.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: undetected maintenance after Easy Anti-Cheat patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Cheat undetected.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | ESP Visibility",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. wallhack ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: World ESP cues for approaches and loops. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. World ESP cues for approaches and loops.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. how EAC updates are handled for Dead by Daylight hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat DBD 2026 | Buyer Guide",
					description: "Cheat DBD 2026: 2026 DBD cheats checklist before . giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat DBD 2026",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Cheat DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "Cheat DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheat DBD 2026",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. 2026 DBD cheats checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat DBD | ESP Aimbot Guide",
					description: "Cheat DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat DBD",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Cheat DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat DBD",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat DBD | Instant Access",
					description: "Tải Cheat DBD: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat DBD",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Tải Cheat DBD.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Tải Cheat DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat DBD",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu DBD | In-Game Toggles",
					description: "Mod menu DBD: in-client ESP and aimbot toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu DBD",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Mod menu DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "Mod menu DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu DBD",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. in-client ESP and aimbot toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Smooth Aim Settings",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. smooth aimbot settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat DBD tốt nhất | Buyer Checklist",
					description: "Cheat DBD tốt nhất: what to compare before buying DBD cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat DBD tốt nhất",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Cheat DBD tốt nhất.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Cheat DBD tốt nhất",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat DBD tốt nhất",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. what to compare before buying DBD cheats.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot DBD | Soft Aim Assist",
					description: "Hack aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot DBD",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Hack aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot DBD",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. undetected Aimbot hack assist for Dead by Daylight.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP DBD | Boxes & Loot",
					description: "Hack ESP DBD: ESP hack boxes, objective pins, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP DBD",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Hack ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP DBD",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. ESP hack boxes, objective pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | What It Means",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Mua DBD Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | DBD Hacks",
					description: "Chính sách bảo mật for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Chính sách bảo mật for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | DBD Hacks",
					description: "Chính sách hoàn tiền for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Chính sách hoàn tiền for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Contact email,  order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | DBD Hacks",
					description: "Điều khoản sử dụng for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Điều khoản sử dụng for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Contact email,  order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout . Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks cung cấp ESP wallhack, undefined và dbd aimbot undetected cho DBD trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@dbdhacks.net cho hỗ trợ và pháp lý.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти DBD",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp і Aimbot для DBD на Windows PC — обслуговування Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для DBD PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет DBD Hacks активний для DBD на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat підтримка",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців DBD Hacks",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для DBD — оплата через .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Dead by Daylight для Dead by Daylight на PC. ESP wallhack, world esp, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "DBD Hacks — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Dead by Daylight на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Галерея DBD Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому DBD Hacks у 2026",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Ідеально для читання ворожих загонів у BR і killer-side.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Player Boxes & Wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP DBD",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Soft Aim Controls",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. aimbot, FOV, and per-killer Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, aimbot, radar controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Функції.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. ESP, aimbot, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Ціни.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Встановлення.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Easy Anti-Cheat Maintenance Log",
					description: "Оновлення: EAC patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Оновлення.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. EAC patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Підтримка.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Easy Anti-Cheat Safe Status",
					description: "Undetected чіти: undetected maintenance after Easy Anti-Cheat patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Undetected чіти.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | ESP Visibility",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. wallhack ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: World ESP cues for approaches and loops. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. World ESP cues for approaches and loops.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. how EAC updates are handled for Dead by Daylight hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти DBD 2026 | Buyer Guide",
					description: "Чіти DBD 2026: 2026 DBD cheats checklist before . миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти DBD 2026",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Чіти DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "Чіти DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Чіти DBD 2026",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. 2026 DBD cheats checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти DBD | ESP Aimbot Guide",
					description: "Чіти DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти DBD",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Чіти DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти DBD",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження DBD Hacks | Instant Access",
					description: "Завантаження DBD Hacks: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження DBD Hacks",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Завантаження DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Завантаження DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження DBD Hacks",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню DBD | In-Game Toggles",
					description: "Мод-меню DBD: in-client ESP and aimbot toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню DBD",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Мод-меню DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "Мод-меню DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню DBD",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. in-client ESP and aimbot toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Smooth Aim Settings",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. smooth aimbot settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти DBD | Buyer Checklist",
					description: "Найкращі чіти DBD: what to compare before buying DBD cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти DBD",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Найкращі чіти DBD.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Найкращі чіти DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти DBD",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. what to compare before buying DBD cheats.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot DBD | Soft Aim Assist",
					description: "Хак aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot DBD",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Хак aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Хак aimbot DBD",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. undetected Aimbot hack assist for Dead by Daylight.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP DBD | Boxes & Loot",
					description: "Хак ESP DBD: ESP hack boxes, objective pins, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP DBD",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Хак ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Хак ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Хак ESP DBD",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. ESP hack boxes, objective pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | What It Means",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Купити DBD Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@dbdhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | DBD Hacks",
					description: "Політика конфіденційності for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Політика конфіденційності for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@dbdhacks.net для підтримки та правових питань.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | DBD Hacks",
					description: "Політика повернення for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Політика повернення for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Contact email,  order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@dbdhacks.net для підтримки та правових питань.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | DBD Hacks",
					description: "Умови використання for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Умови використання for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Contact email,  order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout . Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks об'єднує ESP wallhack, undefined і dbd aimbot у undetected пакеті для DBD на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@dbdhacks.net для підтримки та правових питань.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected DBD cheaty",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp a Aimbot pro DBD na Windows PC — údržba Easy Anti-Cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro DBD PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček DBD Hacks je aktivní pro DBD na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat podpora",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících DBD Hacks",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro DBD — checkout přes .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected DBD cheaty pro Dead by Daylight na PC. ESP wallhack, world esp, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.",
					h1: "DBD Hacks — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Dead by Daylight na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galerie DBD Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč DBD Hacks v roce 2026",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Ideální pro čtení nepřátelských teamů v BR a killer-side.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: player boxes, objective markers, and wallhack overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: aimbot, FOV, and per-killer Aimbot profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. DBD Aimbot.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. aimbot, FOV, and per-killer Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, aimbot, radar controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Funkce.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. ESP, aimbot, radar controls.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Ceny.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Instalace.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizace: EAC patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Aktualizace.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. EAC patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Podpora.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Easy Anti-Cheat Safe Status",
					description: "Undetected cheaty: undetected maintenance after Easy Anti-Cheat patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Undetected cheaty.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "DBD Wallhack | ESP Visibility",
					description: "DBD Wallhack: wallhack ESP for players, loot, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD Wallhack",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. DBD Wallhack.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD Wallhack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Wallhack",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. wallhack ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: World ESP cues for approaches and loops. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Radar Hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. World ESP cues for approaches and loops.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for Dead by Daylight hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. EAC Bypass.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. how EAC updates are handled for Dead by Daylight hacks.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD cheaty 2026 | Buyer Guide",
					description: "DBD cheaty 2026: 2026 DBD cheats checklist before . okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD cheaty 2026",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. DBD cheaty 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD cheaty 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD cheaty 2026",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. 2026 DBD cheats checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "DBD cheaty | ESP Aimbot Guide",
					description: "DBD cheaty: the Dead by Daylight hacks pillar for ESP and Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD cheaty",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. DBD cheaty.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD cheaty",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD cheaty",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout DBD Hacks | Instant Access",
					description: "Stáhnout DBD Hacks: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout DBD Hacks",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Stáhnout DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Stáhnout DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout DBD Hacks",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "DBD mod menu | In-Game Toggles",
					description: "DBD mod menu: in-client ESP and aimbot toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD mod menu",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. DBD mod menu.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "DBD mod menu",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD mod menu",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. in-client ESP and aimbot toggles.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"skill-check": {
					title: "DBD Soft Aim | Smooth Aim Settings",
					description: "DBD Soft Aim: smooth aimbot settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD Soft Aim",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. DBD Soft Aim.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD Soft Aim",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Soft Aim",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. smooth aimbot settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší DBD cheaty | Buyer Checklist",
					description: "Nejlepší DBD cheaty: what to compare before buying DBD cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší DBD cheaty",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Nejlepší DBD cheaty.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Nejlepší DBD cheaty",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší DBD cheaty",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. what to compare before buying DBD cheats.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD aimbot hack | Soft Aim Assist",
					description: "DBD aimbot hack: undetected Aimbot hack assist for Dead by Daylight. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD aimbot hack",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. DBD aimbot hack.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "DBD aimbot hack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD aimbot hack",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. undetected Aimbot hack assist for Dead by Daylight.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP hack | Boxes & Loot",
					description: "DBD ESP hack: ESP hack boxes, objective pins, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD ESP hack",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. DBD ESP hack.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "DBD ESP hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP hack",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. ESP hack boxes, objective pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "DBD Unlock All | What It Means",
					description: "DBD Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "DBD Unlock All",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. DBD Unlock All.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD Unlock All",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Koupit DBD Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Unlock All",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@dbdhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | DBD Hacks",
					description: "Zásady ochrany soukromí for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Zásady ochrany soukromí for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@dbdhacks.net pro podporu a právní dotazy.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | DBD Hacks",
					description: "Zásady vrácení peněz for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Zásady vrácení peněz for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Contact email,  order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@dbdhacks.net pro podporu a právní dotazy.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | DBD Hacks",
					description: "Podmínky použití for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Podmínky použití for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Contact email,  order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout . Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks spojuje ESP wallhack, undefined a dbd aimbot jako undetected balíček pro DBD na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@dbdhacks.net pro podporu a právní dotazy.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats DBD undetected",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp și Aimbot pentru DBD pe PC Windows — mentenanță Easy Anti-Cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru DBD PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul DBD Hacks este activ pentru DBD pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Easy Anti-Cheat suportată",
					antiCheatShort: "Easy Anti-Cheat suportat",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii DBD Hacks",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru DBD — checkout via .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Dead by Daylight undetected pentru Dead by Daylight pe PC. ESP wallhack, world esp, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.",
					h1: "DBD Hacks — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Dead by Daylight pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "Galerie DBD Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce DBD Hacks în 2026",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Ideal pentru citirea team-urilor inamice în BR și killer-side.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "ESP DBD | Player Boxes & Wallhack",
					description: "ESP DBD: player boxes, objective markers, and wallhack overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP DBD",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. ESP DBD.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "ESP DBD",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. player boxes, objective markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "Aimbot DBD | Soft Aim Controls",
					description: "Aimbot DBD: aimbot, FOV, and per-killer Aimbot profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. aimbot, FOV, and per-killer Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, aimbot, radar controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Funcții.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. ESP, aimbot, radar controls.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Prețuri.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Instalare.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Easy Anti-Cheat Maintenance Log",
					description: "Actualizări: EAC patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Actualizări.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. EAC patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Suport.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: undetected maintenance after Easy Anti-Cheat patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Cheats undetected.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack DBD | ESP Visibility",
					description: "Wallhack DBD: wallhack ESP for players, loot, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Wallhack DBD",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Wallhack DBD.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "Wallhack DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Wallhack DBD",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. wallhack ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: World ESP cues for approaches and loops. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Radar hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. World ESP cues for approaches and loops.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for Dead by Daylight hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. how EAC updates are handled for Dead by Daylight hacks.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats DBD 2026 | Buyer Guide",
					description: "Cheats DBD 2026: 2026 DBD cheats checklist before . livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats DBD 2026",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Cheats DBD 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "Cheats DBD 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Cheats DBD 2026",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. 2026 DBD cheats checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats DBD | ESP Aimbot Guide",
					description: "Cheats DBD: the Dead by Daylight hacks pillar for ESP and Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats DBD",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Cheats DBD.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats DBD",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare DBD Hacks | Instant Access",
					description: "Descărcare DBD Hacks: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare DBD Hacks",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Descărcare DBD Hacks.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "Descărcare DBD Hacks",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare DBD Hacks",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod DBD | In-Game Toggles",
					description: "Meniu mod DBD: in-client ESP and aimbot toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod DBD",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Meniu mod DBD.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "Meniu mod DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod DBD",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. in-client ESP and aimbot toggles.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"skill-check": {
					title: "Aimbot DBD | Smooth Aim Settings",
					description: "Aimbot DBD: smooth aimbot settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot DBD",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Aimbot DBD.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "Aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Aimbot DBD",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. smooth aimbot settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats DBD | Buyer Checklist",
					description: "Cele mai bune cheats DBD: what to compare before buying DBD cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats DBD",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Cele mai bune cheats DBD.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Cele mai bune cheats DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats DBD",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. what to compare before buying DBD cheats.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot DBD | Soft Aim Assist",
					description: "Hack aimbot DBD: undetected Aimbot hack assist for Dead by Daylight. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot DBD",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Hack aimbot DBD.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot DBD",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "Hack aimbot DBD",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. undetected Aimbot hack assist for Dead by Daylight.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP DBD | Boxes & Loot",
					description: "Hack ESP DBD: ESP hack boxes, objective pins, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP DBD",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Hack ESP DBD.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "Hack ESP DBD",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Hack ESP DBD",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. ESP hack boxes, objective pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all DBD | What It Means",
					description: "Unlock all DBD: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all DBD",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Unlock all DBD.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "Unlock all DBD",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Cumpără DBD Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all DBD",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@dbdhacks.net pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | DBD Hacks",
					description: "Politica de confidențialitate for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Politica de confidențialitate for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@dbdhacks.net pentru suport și legal.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | DBD Hacks",
					description: "Politica de rambursare for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Politica de rambursare for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Contact email,  order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@dbdhacks.net pentru suport și legal.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | DBD Hacks",
					description: "Termeni de utilizare for DBD Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Termeni de utilizare for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Contact email,  order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout . Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks combină ESP wallhack, undefined și dbd aimbot undetected pentru DBD pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@dbdhacks.net pentru suport și legal.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected DBD cheats",
					accentShort: "DBD Hacks",
					subtitle: "ESP wallhack, world esp och Aimbot för DBD på Windows PC — Easy Anti-Cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för DBD PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "DBD Hacks-paketet är live för DBD på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-underhåll stöds",
					antiCheatShort: "Easy Anti-Cheat stöd",
				},
				product: {
					title: "DBD Hacks",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "DBD",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från DBD Hacks-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för DBD — checkout via .",
				},
				images: {
					hero: "DBD Hacks hero — ESP and aimbot overlay in Dead by Daylight",
					espWallhack: "Wallhack outlines showing Survivors and Killers through walls",
					aimbotCombat: "Aimbot assist overlay during a Dead by Daylight raid",
					teamFight: "DBD Hacks combat overlay during a team fight",
					playerEsp: "Player ESP boxes and distance readouts in a DBD raid",
					headerArt: "Aimbot view and bone priority controls for DBD",
					cheatsPackage: "World ESP threat overlay for Dead by Daylight",
					rebootFight: "Aimbot assist during a DBD firefight",
					battleRoyale: "DBD Hacks in-trial overview for Windows PC",
					battleRoyaleIsland: "ESP markers for objective and exit gates in DBD",
				},
			},
			pages: {
				home: {
					title: "DBD Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected DBD cheats för Dead by Daylight på PC. ESP wallhack, world esp, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.",
					h1: "DBD Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Dead by Daylight på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.",
					imageAlt: "DBD ESP player tags hack",
					galleryTitle: "DBD Hacks galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför DBD Hacks 2026",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Ideal för att läsa fiendeteams i BR och killer-side.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"dbd-esp": {
					title: "DBD ESP | Player Boxes & Wallhack",
					description: "DBD ESP: player boxes, objective markers, and wallhack overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD ESP",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD ESP.",
					imageAlt: "DBD ESP player boxes and distance readouts in a trial",
					galleryTitle: "DBD ESP",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD ESP",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. player boxes, objective markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				"dbd-aimbot": {
					title: "DBD Aimbot | Soft Aim Controls",
					description: "DBD Aimbot: aimbot, FOV, and per-killer Aimbot profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Aimbot",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD Aimbot.",
					imageAlt: "DBD aimbot and aimbot controls on Windows PC",
					galleryTitle: "DBD Aimbot",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Aimbot",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. aimbot, FOV, and per-killer Aimbot profiles.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, aimbot, radar controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Funktioner.",
					imageAlt: "DBD Hacks features — ESP, aimbot, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. ESP, aimbot, radar controls.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Priser.",
					imageAlt: "DBD Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Installation.",
					imageAlt: "DBD Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Easy Anti-Cheat Maintenance Log",
					description: "Uppdateringar: EAC patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Uppdateringar.",
					imageAlt: "DBD Hacks live status after EAC and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. EAC patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, aimbot, instant digital delivery., and Easy Anti-Cheat questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. FAQ.",
					imageAlt: "DBD Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. ESP, aimbot, delivery, and Easy Anti-Cheat questions.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Support.",
					imageAlt: "DBD Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected maintenance after Easy Anti-Cheat patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Undetected cheats.",
					imageAlt: "DBD Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "DBD Wallhack | ESP Visibility",
					description: "DBD Wallhack: wallhack ESP for players, loot, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Wallhack",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD Wallhack.",
					imageAlt: "DBD wallhack visibility through walls in a trial",
					galleryTitle: "DBD Wallhack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD Wallhack",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				"world-esp": {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: World ESP cues for approaches and loops. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Radar Hack.",
					imageAlt: "DBD World ESP overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. World ESP cues for approaches and loops.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for Dead by Daylight hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. EAC Bypass.",
					imageAlt: "DBD Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. how EAC updates are handled for Dead by Daylight hacks.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "DBD Hacks 2026 | Buyer Guide",
					description: "DBD Hacks 2026: 2026 DBD cheats checklist before . omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Hacks 2026",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD Hacks 2026.",
					imageAlt: "DBD Hacks product overview for Dead by Daylight",
					galleryTitle: "DBD Hacks 2026",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-cheats/",
					sections: [
						{
							h2: "DBD Hacks 2026",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. 2026 DBD cheats checklist before checkout.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "DBD Hacks | ESP Aimbot Guide",
					description: "DBD Hacks: the Dead by Daylight hacks pillar for ESP and Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Hacks",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD Hacks.",
					imageAlt: "DBD Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Hacks",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. the Dead by Daylight hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "DBD Cheat Download | Instant Access",
					description: "DBD Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Cheat Download",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD Cheat Download.",
					imageAlt: "DBD Hacks download and install delivery flow",
					galleryTitle: "DBD Cheat Download",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "DBD Cheat Download",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "DBD Mod-meny | In-Game Toggles",
					description: "DBD Mod-meny: in-client ESP and aimbot toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Mod-meny",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD Mod-meny.",
					imageAlt: "DBD Hacks in-game menu controls",
					galleryTitle: "DBD Mod-meny",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Mod-meny",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. in-client ESP and aimbot toggles.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				"skill-check": {
					title: "DBD Soft Aim | Smooth Aim Settings",
					description: "DBD Soft Aim: smooth aimbot settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Soft Aim",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD Soft Aim.",
					imageAlt: "DBD aimbot FOV and smoothness settings",
					galleryTitle: "DBD Soft Aim",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Soft Aim",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. smooth aimbot settings for Windows PC.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa DBD Hacks | Buyer Checklist",
					description: "Bästa DBD Hacks: what to compare before buying DBD cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa DBD Hacks",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Bästa DBD Hacks.",
					imageAlt: "DBD Hacks overview for Dead by Daylight on PC",
					galleryTitle: "Bästa DBD Hacks",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa DBD Hacks",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. what to compare before buying DBD cheats.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "DBD Aimbot Hack | Soft Aim Assist",
					description: "DBD Aimbot Hack: undetected Aimbot hack assist for Dead by Daylight. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Aimbot Hack",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD Aimbot Hack.",
					imageAlt: "DBD aimbot hack controls and bone priority",
					galleryTitle: "DBD Aimbot Hack",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-aimbot/",
					sections: [
						{
							h2: "DBD Aimbot Hack",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. undetected Aimbot hack assist for Dead by Daylight.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "DBD ESP Hack | Boxes & Loot",
					description: "DBD ESP Hack: ESP hack boxes, objective pins, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD ESP Hack",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD ESP Hack.",
					imageAlt: "DBD ESP hack boxes and objective markers",
					galleryTitle: "DBD ESP Hack",
					heroImage: "/images/dbd-screenshot-esp-neon.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/dbd-esp/",
					sections: [
						{
							h2: "DBD ESP Hack",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. ESP hack boxes, objective pins, and distance.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "DBD Unlock All | What It Means",
					description: "DBD Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "DBD Unlock All",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. DBD Unlock All.",
					imageAlt: "DBD Hacks license features overview",
					galleryTitle: "DBD Unlock All",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Köp DBD Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "DBD Unlock All",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@dbdhacks.net för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | DBD Hacks",
					description: "Integritetspolicy for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Integritetspolicy for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Contact email,  order references, and basic site security data.",
								"Payment details are processed by  checkout — not stored on dbdhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@dbdhacks.net för support och juridik.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | DBD Hacks",
					description: "Återbetalningspolicy for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Återbetalningspolicy for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-gameplay.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Contact email,  order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@dbdhacks.net för support och juridik.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | DBD Hacks",
					description: "Användarvillkor for DBD Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Användarvillkor for dbdhacks.net and Dead by Daylight licenses.",
					imageAlt: "dead by daylight cheats",
					galleryTitle: "dead by daylight cheats",
					heroImage: "/images/dbd-screenshot-mod-menu.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Contact email,  order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via  checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"DBD Hacks kombinerar ESP wallhack, undefined och dbd aimbot som undetected paket för DBD på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@dbdhacks.net för support och juridik.",
								"Email: support@dbdhacks.net",
							],
						},
					],
				},
			},
		},
	};
