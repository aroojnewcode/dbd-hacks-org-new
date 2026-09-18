import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const outDir = path.resolve('public/images');

const files = [
	{ source: '_src-mod-menu.png', base: 'dbd-screenshot-mod-menu' },
	{ source: '_src-esp-neon.jpg', base: 'dbd-screenshot-esp-neon' },
	{ source: '_src-gameplay.jpg', base: 'dbd-screenshot-gameplay' },
];

const CONTENT_WIDTHS = [480, 960];

for (const { source, base } of files) {
	const srcPath = path.join(outDir, source);
	const masterWebp = path.join(outDir, `${base}.webp`);
	await writeFile(
		masterWebp,
		await sharp(srcPath).webp({ quality: 85, effort: 6 }).toBuffer(),
	);
	const meta = await sharp(masterWebp).metadata();
	console.log(`${base}: ${meta.width}x${meta.height}`);

	for (const width of CONTENT_WIDTHS) {
		if (meta.width && width >= meta.width) continue;
		const variant = path.join(outDir, `${base}-${width}w.webp`);
		await writeFile(
			variant,
			await sharp(masterWebp)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 78, effort: 6 })
				.toBuffer(),
		);
		console.log(`  wrote ${base}-${width}w.webp`);
	}
}

console.log('Product screenshots ready.');
