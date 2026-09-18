/**
 * Cloudflare Worker — host canonicalization before static assets.
 * Canonical site: https://dbdhacks.net (matches brand.url)
 *
 * Requires DNS: CNAME `www` → `dbdhacks.net` (proxied) AND
 * Workers custom domain `www.dbdhacks.net` attached — otherwise
 * www is NXDOMAIN and Seobility fails the www/non-www check.
 */
import cannibalRedirects from '../functions/cannibal-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'dbdhacks.net';
const CANNIBAL_REDIRECTS: Record<string, string> = cannibalRedirects;
const PATH_REDIRECTS: Record<string, string> = {
	'/sitemap-index.xml': '/sitemap.xml',
	'/dbd-esp-hack': '/dbd-esp/',
	'/dbd-esp-hack/': '/dbd-esp/',
	'/dbd-aimbot-hack': '/dbd-aimbot/',
	'/dbd-aimbot-hack/': '/dbd-aimbot/',
	'/best-dbd-cheats': '/dbd-cheats/',
	'/best-dbd-cheats/': '/dbd-cheats/',
	'/dbd-cheats-2026': '/dbd-cheats/',
	'/dbd-cheats-2026/': '/dbd-cheats/',
	'/undetected-dbd-cheats': '/dbd-cheats/',
	'/undetected-dbd-cheats/': '/dbd-cheats/',
	'/dbd-cheat-menu': '/dbd-cheats/',
	'/dbd-cheat-menu/': '/dbd-cheats/',
	'/dbd-cosmetic-unlocker': '/dbd-cheats/',
	'/dbd-cosmetic-unlocker/': '/dbd-cheats/',
	'/dbd-skill-check': '/dbd-aimbot/',
	'/dbd-skill-check/': '/dbd-aimbot/',
	'/dbd-wallhack': '/dbd-esp/',
	'/dbd-wallhack/': '/dbd-esp/',
	'/dbd-cheat-download': '/setup/',
	'/dbd-cheat-download/': '/setup/',
	'/eac-bypass': '/updates/',
	'/eac-bypass/': '/updates/',
};

/** Old apex still 301 → current canonical. */
const LEGACY_HOSTS = new Set(['bestdbdcheats.com', 'www.bestdbdcheats.com']);

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const target = canonicalUrl(request);
		const requestUrl = new URL(request.url);
		const pathRedirect =
			PATH_REDIRECTS[requestUrl.pathname] ?? CANNIBAL_REDIRECTS[requestUrl.pathname];

		if (target || pathRedirect) {
			const redirectUrl = target ?? requestUrl;
			if (pathRedirect) redirectUrl.pathname = pathRedirect;
			return Response.redirect(redirectUrl.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
