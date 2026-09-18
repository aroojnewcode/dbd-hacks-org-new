#!/usr/bin/env node
/** Drop cached dist/_redirects before build (Cloudflare asset rule limit). */
import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const redirectsAsset = path.join(root, 'dist', '_redirects');
if (existsSync(redirectsAsset)) {
	rmSync(redirectsAsset, { force: true });
	console.log('strip-stale-redirects: removed dist/_redirects');
}
