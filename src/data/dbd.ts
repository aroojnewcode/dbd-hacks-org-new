import { siteConfig } from './site';

/** DBD Hacks screenshots only — real in-game captures, no legacy composite art. */
export const dbdImages = {
	hero: '/images/dbd-cheats-hero-1920w.webp',
	espWallhack: '/images/dbd-screenshot-esp-neon.webp',
	aimbotCombat: '/images/dbd-screenshot-gameplay.webp',
	aimbotSkeleton: '/images/dbd-screenshot-gameplay.webp',
	playerEsp: '/images/dbd-screenshot-mod-menu.webp',
	cheatsCombat: '/images/dbd-screenshot-esp-neon.webp',
	logo: siteConfig.logo,
	cover: '/images/dbd-screenshot-gameplay.webp',
	loadoutBuilder: '/images/dbd-screenshot-mod-menu.webp',
	teamFight: '/images/dbd-screenshot-esp-neon.webp',
	cheatsPackage: '/images/dbd-screenshot-esp-neon.webp',
	headerArt: '/images/dbd-screenshot-mod-menu.webp',
	battleRoyaleCombat: '/images/dbd-screenshot-gameplay.webp',
	extractFight: '/images/dbd-screenshot-gameplay.webp',
	rebootFight: '/images/dbd-screenshot-gameplay.webp',
	scavRunCombat: '/images/dbd-screenshot-esp-neon.webp',
	scavRunMode: '/images/dbd-screenshot-esp-neon.webp',
	battleRoyaleIsland: '/images/dbd-screenshot-esp-neon.webp',
	raidMap: '/images/dbd-screenshot-gameplay.webp',
	product: [
		{
			src: '/images/dbd-screenshot-mod-menu.webp',
			alt: 'DBD Hacks mod menu with Survivor, Killer, ESP, and exploit tabs on PC',
			width: 933,
			height: 525,
		},
		{
			src: '/images/dbd-screenshot-esp-neon.webp',
			alt: 'Dead by Daylight ESP overlay with player distance and pallet markers in trial',
			width: 1024,
			height: 576,
		},
		{
			src: '/images/dbd-screenshot-gameplay.webp',
			alt: 'In-game DBD Hacks view with Survivor ESP and vault markers on a neon map',
			width: 1024,
			height: 576,
		},
	],
	gallery: [
		{
			src: '/images/dbd-screenshot-mod-menu.webp',
			alt: 'DBD Hacks in-game menu — ESP, exploits, FOV, and Survivor or Killer settings',
			featured: true,
			width: 933,
			height: 525,
		},
		{
			src: '/images/dbd-screenshot-esp-neon.webp',
			alt: 'ESP and wallhack overlay during a Dead by Daylight trial',
			width: 1024,
			height: 576,
		},
		{
			src: '/images/dbd-screenshot-gameplay.webp',
			alt: 'Survivor gameplay with DBD Hacks ESP, perks, and distance tags',
			width: 1024,
			height: 576,
		},
	],
	sitemap: [
		{
			src: '/images/dbd-screenshot-mod-menu.webp',
			title: 'DBD Hacks mod menu',
			caption: 'In-match menu for Dead by Daylight on Windows PC',
		},
		{
			src: '/images/dbd-screenshot-esp-neon.webp',
			title: 'DBD ESP overlay',
			caption: 'ESP and wallhack during a DBD trial',
		},
		{
			src: '/images/dbd-screenshot-gameplay.webp',
			title: 'DBD Hacks gameplay',
			caption: 'Survivor trial with ESP and distance tags',
		},
	],
} as const;
