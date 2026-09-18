export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { brand, fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/dbd-cheats/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/dbd-cheats/' },
	{ label: fillBrandTokens('{game} esp'), href: '/dbd-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/dbd-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/dbd-cheats/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/dbd-esp/' },
	{ label: fillBrandTokens('{game} world esp'), href: '/dbd-world-esp/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/dbd-cheats/' },
	{ label: 'Aimbot', href: '/dbd-aimbot/' },
	{ label: 'ESP', href: '/dbd-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: brand.checkoutUrl },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} cheat update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} cheats pillar'), href: '/dbd-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/dbd-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/dbd-aimbot/' },
	{ label: fillBrandTokens('{game} World ESP'), href: '/dbd-world-esp/' },
	{ label: fillBrandTokens('Full {game} cheat feature list'), href: '/features/' },
	{ label: '31-day & lifetime pricing', href: brand.checkoutUrl },
	{ label: fillBrandTokens('{game} cheat setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} cheats FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Dead by Daylight on Windows PC. It includes Survivor ESP, Killer ESP, World ESP, aimbot, auto skill check, and {antiCheat} maintenance with setup support.',
		slug: 'what-are-dbd-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, aimbot, and World ESP for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-dbd-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work for both Survivor and Killer?',
		answer:
			'Yes. ESP, World ESP, and aimbot are built for {game} trial flow — reading Survivors and Killers, tracking generators and totems, and staying aware near exit gates.',
		slug: 'survivor-and-killer-trials',
		seoTitle: 'Survivor and Killer Support | FAQ',
		seoDescription:
			'{brand} works for Survivor and Killer roles — ESP, World ESP, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, World ESP, or Aimbot?',
		answer:
			'{brand} bundles Survivor ESP, Killer ESP, World ESP, auto skill check, and configurable aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-world-esp-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, World ESP, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, World ESP, auto skill check, and configurable aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a {game} or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a {game} or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows Survivors, Killers, and objectives through walls. {brand} includes distance readouts, generator states, and toggleable categories.',
		slug: 'what-is-a-dbd-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals Survivors, Killers, and objectives through walls — with distance, states, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include World ESP?',
		answer:
			'Yes. {brand} includes World ESP overlays for generators, totems, hooks, pallets, chests, hatches, and exit doors — each with customizable name, aura, state, distance, and colors.',
		slug: 'does-dbd-cheats-include-world-esp',
		seoTitle: 'Does {brand} Include World ESP? | FAQ',
		seoDescription:
			'Yes — {brand} includes World ESP for generators, totems, hooks, pallets, and more with distance and state readouts.',
	}),
	faq({
		question: 'Is the {game} cheat stream proof?',
		answer:
			'Yes. {brand} includes StreamProof mode that hides ESP, menu, and visual elements from OBS, Streamlabs, screenshots, and recording software.',
		slug: 'is-dbd-cheat-stream-proof',
		seoTitle: 'Is {brand} Stream Proof? | FAQ',
		seoDescription:
			'Yes — {brand} StreamProof mode hides ESP and menu overlays from streaming and recording software.',
	}),
	faq({
		question: 'What is the Cosmetic Unlocker?',
		answer:
			'The Cosmetic Unlocker grants access to all skins, outfits, and customization items for every character in Dead by Daylight without purchasing them individually.',
		slug: 'what-is-dbd-cosmetic-unlocker',
		seoTitle: 'What Is the Cosmetic Unlocker? | FAQ',
		seoDescription:
			'The {brand} Cosmetic Unlocker unlocks all DBD skins and outfits for every character on Windows PC.',
	}),
	faq({
		question: 'What is the HWID Spoofer and why do I need it?',
		answer:
			'The HWID Spoofer protects against hardware ID bans. If you have been banned before or want extra protection, it changes your hardware identifiers so you can play safely.',
		slug: 'what-is-dbd-hwid-spoofer',
		seoTitle: 'What Is the HWID Spoofer? | FAQ',
		seoDescription:
			'The {brand} HWID Spoofer changes hardware identifiers to help you play safely after a hardware ban.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'eac-anti-cheat-and-dbd-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells 31-day and lifetime licenses for Windows PC with ESP, World ESP, aimbot, and skill check in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-dbd-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy 31-day or lifetime {brand} licenses for Windows PC — ESP, World ESP, aimbot, and skill check in one stack.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'FogWalker_DBD',
		rating: 5,
		text: 'Auto skill check in DBD Hacks feels smooth on Autohaven. The menu took a few minutes to learn. After that, trials felt much easier.',
		short: 'Auto skill check in DBD Hacks feels smooth on Autohaven.',
		slug: 'dbd-skill-check-review-fogwalker',
		seoTitle: 'Skill Check Review by @FogWalker_DBD — 5/5 | {brand}',
		seoDescription: '@FogWalker_DBD rates {brand} skill check 5/5 for Autohaven on Windows PC.',
		date: '2026-07-24',
		tag: 'Skill check',
	}),
	reviewMeta({
		handle: 'GenRush42',
		rating: 4,
		text: 'ESP boxes help on Killer side. You can see who is on a generator before you commit. Still worth the price for DBD Hacks.',
		short: 'ESP boxes help on Killer side. Still worth the price for DBD Hacks.',
		slug: 'dbd-esp-killer-review-genrush42',
		seoTitle: 'ESP Review by @GenRush42 — 4/5 | {brand}',
		seoDescription: '@GenRush42 rates {brand} ESP 4/5 for Killer sides on Windows PC.',
		date: '2026-07-19',
		tag: 'Killer',
	}),
	reviewMeta({
		handle: 'trial_wizard',
		rating: 5,
		text: 'I moved to DBD Hacks this chapter. Setup was simple. It stayed up after the last EAC update when my old cheat failed. Lifetime was a good buy.',
		short: 'DBD Hacks stayed up after the last EAC update. Lifetime was a good buy.',
		slug: 'dbd-update-review-trial-wizard',
		seoTitle: 'Update Review by @trial_wizard — 5/5 | {brand}',
		seoDescription: '@trial_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'skillCheckPro',
		rating: 4,
		text: 'Aimbot in DBD Hacks is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Aimbot in DBD Hacks is easy to tune on PC.',
		slug: 'dbd-aimbot-review-skillcheckpro',
		seoTitle: 'Aimbot Review by @skillCheckPro — 4/5 | {brand}',
		seoDescription: '@skillCheckPro rates {brand} aimbot 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'FogChaser_07',
		rating: 3,
		text: 'DBD Hacks works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP on MacMillan is solid.',
		short: 'ESP on MacMillan is solid. Support helped after a slow first launch.',
		slug: 'dbd-cheat-setup-review-fogchaser07',
		seoTitle: 'Setup Review by @FogChaser_07 — 3/5 | {brand}',
		seoDescription: '@FogChaser_07 rates {brand} setup 3/5. ESP on MacMillan is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'TotemHunterx',
		rating: 5,
		text: 'Totem ESP in DBD Hacks pays for the monthly plan. Hatch markers and distance make late-game trials faster.',
		short: 'Totem ESP in DBD Hacks pays for the monthly plan.',
		slug: 'dbd-object-esp-review-totemhunterx',
		seoTitle: 'World ESP Review by @TotemHunterx — 5/5 | {brand}',
		seoDescription: '@TotemHunterx rates {brand} World ESP 5/5 for late-game trials on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'RankedGrind42',
		rating: 4,
		text: 'I have used DBD Hacks since last chapter. Aimbot per killer helps in mid-chase. Status updates after EAC patches could be clearer, but it came back the next day.',
		short: 'Aimbot per killer in DBD Hacks helps in mid-chase.',
		slug: 'dbd-skill-check-trial-review-rankedgrind42',
		seoTitle: 'Trial Aimbot by @RankedGrind42 — 4/5 | {brand}',
		seoDescription: '@RankedGrind42 rates {brand} aimbot 4/5 for trials on Windows PC.',
		date: '2026-07-07',
		tag: 'Trial',
	}),
	reviewMeta({
		handle: 'ExitGateLife',
		rating: 5,
		text: 'World ESP in DBD Hacks saved me near exit gates. Seeing the killer approach early in duos is huge. Boxes plus World ESP look clean.',
		short: 'World ESP in DBD Hacks saved me near exit gates.',
		slug: 'dbd-world-esp-review-exitgatelife',
		seoTitle: 'World ESP Review by @ExitGateLife — 5/5 | {brand}',
		seoDescription: '@ExitGateLife rates {brand} World ESP 5/5 near exit gates on Windows PC.',
		date: '2026-07-28',
		tag: 'Exit Gates',
	}),
	reviewMeta({
		handle: 'PatchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. DBD Hacks posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'DBD Hacks was back the next morning after a patch.',
		slug: 'dbd-eac-update-review-patchdaymike',
		seoTitle: 'Status Review by @PatchDayMike — 4/5 | {brand}',
		seoDescription: '@PatchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'EAC updates',
	}),
	reviewMeta({
		handle: 'HuntressMain_',
		rating: 5,
		text: 'Killer aimbot plus ESP in DBD Hacks is excellent for hatchet throws. Simple and strong.',
		short: 'Killer aimbot plus ESP in DBD Hacks is excellent.',
		slug: 'dbd-killer-aimbot-review-huntressmain',
		seoTitle: 'Killer Aimbot by @HuntressMain_ — 5/5 | {brand}',
		seoDescription: '@HuntressMain_ rates {brand} killer aimbot 5/5 with ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
