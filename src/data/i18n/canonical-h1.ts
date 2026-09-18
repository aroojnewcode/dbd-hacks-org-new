import { getPageContent } from './index';
import { simplePageCopy } from './simple-pages';
import type { PageId } from './content.generated';
import enHome from '../../../public/locales/en/translation.json';
import { getUi } from './index';

/** Visible H1 stays English for brand/keyword consistency; body + meta stay localized. */
export function getCanonicalPageH1(pageId: PageId): string {
	const simple = simplePageCopy[pageId];
	if (simple?.h1) return simple.h1;
	return getPageContent('en', pageId).h1;
}

export function getCanonicalHomeAboutH1(): string {
	return enHome.home.aboutTitle;
}

export function getCanonicalBlogIndexH1(): string {
	return getUi('en').blogH1;
}
