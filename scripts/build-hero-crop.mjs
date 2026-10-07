// Build the hero food image — tight crop focused on the food itself (exclude yellow bg)
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
mkdirSync('public/assets/hero', { recursive: true });

// yogurtlu-tavuk.jpg: 564×1001 px (portrait)
// The plate+food occupies roughly bottom 65% — crop there tightly
const meta = await sharp('public/assets/food-original/yogurtlu-tavuk.jpg').metadata();
const W = meta.width;   // 564
const H = meta.height;  // 1001

// Crop: from y=320 down to y=850 → 530px tall, full width → square via resize
await sharp('public/assets/food-original/yogurtlu-tavuk.jpg')
  .extract({ left: 0, top: 300, width: W, height: Math.min(H - 300, W) })
  .resize(900, 900, { fit: 'cover', position: 'centre' })
  .webp({ quality: 88 })
  .toFile('public/assets/hero/yogurtlu-square.webp');

await sharp('public/assets/food-original/yogurtlu-tavuk.jpg')
  .extract({ left: 0, top: 300, width: W, height: Math.min(H - 300, W) })
  .resize(480, 480, { fit: 'cover', position: 'centre' })
  .webp({ quality: 82 })
  .toFile('public/assets/hero/yogurtlu-square-sm.webp');

console.log('hero crop ok');
