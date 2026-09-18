import { copyFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = path.resolve(import.meta.dirname, "..");
const src = path.join(
  process.env.USERPROFILE ?? "",
  ".cursor",
  "projects",
  "c-Users-DELL-7280-Documents-sites",
  "assets",
  "c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_9b764add951df34a61e6d835211a3e1d_images_ChatGPT_Image_Sep_16__2026__10_22_10_PM-cb177966-2884-47b4-9089-33a37028fc38.jpg",
);

const imagesDir = path.join(projectRoot, "public", "images");
const sourceJpg = path.join(imagesDir, "dbd-cheats-hero-source.jpg");
const masterPng = path.join(imagesDir, "dbd-cheats-hero-full.png");

await copyFile(src, sourceJpg);
const meta = await sharp(sourceJpg).metadata();
console.log("source dimensions:", meta.width, "x", meta.height);

await writeFile(
  masterPng,
  await sharp(sourceJpg).png({ compressionLevel: 9 }).toBuffer(),
);
console.log("wrote", masterPng);
