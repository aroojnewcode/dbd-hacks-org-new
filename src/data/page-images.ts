import { siteConfig } from './site';
import { dbdImages } from './dbd';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';
import { isSiteMainBannerSrc } from '../lib/responsive-images';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	dbdImages.playerEsp,
	dbdImages.espWallhack,
	dbdImages.aimbotCombat,
	dbdImages.cheatsCombat,
] as const;

/**
 * One primary crawl/OG photo per product page — DBD screenshots only.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: dbdImages.espWallhack,
	'dbd-esp': dbdImages.espWallhack,
	'dbd-aimbot': dbdImages.aimbotCombat,
	features: dbdImages.playerEsp,
	pricing: dbdImages.aimbotCombat,
	setup: dbdImages.playerEsp,
	updates: dbdImages.espWallhack,
	faq: dbdImages.playerEsp,
	support: dbdImages.aimbotCombat,
	undetected: dbdImages.espWallhack,
	wallhack: dbdImages.espWallhack,
	'world-esp': dbdImages.espWallhack,
	eac: dbdImages.aimbotCombat,
	'cheats-2026': dbdImages.aimbotCombat,
	hacks: dbdImages.aimbotCombat,
	'cheat-download': dbdImages.playerEsp,
	'mod-menu': dbdImages.playerEsp,
	'skill-check': dbdImages.aimbotCombat,
	'best-cheats': dbdImages.aimbotCombat,
	'aimbot-hack': dbdImages.aimbotCombat,
	'esp-hack': dbdImages.espWallhack,
	'unlock-all': dbdImages.playerEsp,
	privacy: dbdImages.aimbotCombat,
	refund: dbdImages.aimbotCombat,
	terms: dbdImages.playerEsp,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default social / SERP image (gameplay — not the homepage hero banner). */
export const defaultCrawlImageSrc = dbdImages.espWallhack;

/** Drop homepage hero art from galleries and inline page media. */
export function isGameplayImageSrc(src: string): boolean {
	return Boolean(src) && !isSiteMainBannerSrc(src);
}
