#!/usr/bin/env node
/**
 * Generate ultra-HD hero ladder from public/images/dbd-cheats-hero-full.png
 * Run: node scripts/setup-hero-4k.mjs
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const source = path.join(imagesDir, 'dbd-cheats-hero-full.png');

const WIDTHS = [640, 1024, 1536, 1920, 2560, 3840];

const meta = await sharp(source).metadata();
console.log(`Source: ${source} (${meta.width}x${meta.height})`);

	for (const width of WIDTHS) {
	const pngName = `dbd-cheats-hero-${width}w.png`;
	const webpName = `dbd-cheats-hero-${width}w.webp`;
	const upscale = width > (meta.width ?? width);

	const pngBuffer = await sharp(source)
		.resize({ width, withoutEnlargement: !upscale, kernel: upscale ? sharp.kernel.lanczos3 : sharp.kernel.lanczos3 })
		.png({ compressionLevel: 9 })
		.toBuffer();
	await writeFile(path.join(imagesDir, pngName), pngBuffer);

	const webpQuality = width >= 2560 ? 90 : width >= 1536 ? 85 : 78;
	const webpBuffer = await sharp(source)
		.resize({ width, withoutEnlargement: !upscale, kernel: sharp.kernel.lanczos3 })
		.webp({ quality: webpQuality, effort: 6 })
		.toBuffer();
	await writeFile(path.join(imagesDir, webpName), webpBuffer);

	console.log(`Wrote ${pngName} (${pngBuffer.length} bytes) + ${webpName} (${webpBuffer.length} bytes)`);
}

// Master copies for OG / schema
await writeFile(
	path.join(imagesDir, 'dbd-cheats-hero.png'),
	await sharp(source).png({ compressionLevel: 9 }).toBuffer(),
);
await writeFile(
	path.join(imagesDir, 'dbd-cheats-hero.webp'),
	await sharp(source).webp({ quality: 85, effort: 6 }).toBuffer(),
);

console.log('Hero 4K ladder complete.');
