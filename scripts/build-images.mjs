// Image pipeline: crops source photos and converts them to WebP (800 + 400px).
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const out = 'public/assets';
mkdirSync(`${out}/branding`, { recursive: true });
mkdirSync(`${out}/drinks`, { recursive: true });

const jobs = [
  ['scratch/ref-durum.jpg', 'food-original/durum-tavuk-tantuni', { left: 0, top: 110, width: 768, height: 768 }],
  ['scratch/ref-somun.jpg', 'food-original/somun-tavuk-tantuni', { left: 0, top: 100, width: 768, height: 768 }],
  ['scratch/ref-yogurtlu.jpg', 'food-original/yogurtlu-tavuk-tantuni', { left: 162, top: 162, width: 700, height: 700 }],
  ['scratch/ref-begendili-wide.jpg', 'food-original/begendili-tavuk-tantuni', { left: 90, top: 0, width: 576, height: 576 }],
  ['scratch/ref-durum-et.jpg', 'food-original/durum-et-tantuni', null],
  ['scratch/ref-somun-et.jpg', 'food-original/somun-et-tantuni', null],
  ['scratch/gen-cheddarli_tavuk_tantuni.jpg', 'food-generated/cheddarli-tavuk-tantuni'],
  ['scratch/gen-tanburger_tavuk_tantuni.jpg', 'food-generated/tanburger-tavuk-tantuni'],
  ['scratch/gen-durum_et_tantuni.jpg', 'food-generated/durum-et-tantuni'],
  ['scratch/gen-somun_et_tantuni.jpg', 'food-generated/somun-et-tantuni'],
  ['scratch/gen-yogurtlu_et_tantuni.jpg', 'food-generated/yogurtlu-et-tantuni'],
  ['scratch/gen-begendili_et_tantuni.jpg', 'food-generated/begendili-et-tantuni'],
  ['scratch/gen-tanburger_et_tantuni.jpg', 'food-generated/tanburger-et-tantuni'],
  ['scratch/gen-cheddarli_et_tantuni.jpg', 'food-generated/cheddarli-et-tantuni'],
  ['scratch/gen-trilece.jpg', 'desserts/trilece'],
  ['scratch/gen-kazandibi.jpg', 'desserts/kazandibi'],
  ['scratch/gen-sutlac.jpg', 'desserts/sutlac'],
  ['scratch/gen-puding.jpg', 'desserts/puding'],
];

const drinkJobs = [
  ['scratch/salgam.webp', 'drinks/salgam'],
  ['scratch/cola.jpg', 'drinks/kola'],
  ['scratch/fanta.jpg', 'drinks/fanta'],
  ['scratch/sprie.jpg', 'drinks/sprite'],
  ['scratch/mango.webp', 'drinks/icetea-mango'],
  ['scratch/karbuz.webp', 'drinks/icetea-karpuz'],
  ['scratch/seftale.jpg', 'drinks/icetea-seftali'],
  ['scratch/su.jpg', 'drinks/su'],
  ['scratch/naneayran.jpg', 'drinks/ayran-naneli'],
  ['scratch/eksi.jpg', 'drinks/ayran-eksili'],
  ['scratch/acili.jpg', 'drinks/ayran-acili'],
  ['scratch/kucukayran.jpg', 'drinks/ayran-kucuk'],
  ['scratch/buyukayran.webp', 'drinks/ayran-buyuk'],
];

for (const [src, dest, crop] of jobs) {
  for (const [suffix, w] of [['', 800], ['-sm', 400]]) {
    let img = sharp(src);
    if (crop) img = img.extract(crop);
    await img.resize(w, w, { fit: 'cover' }).webp({ quality: 80 }).toFile(`${out}/${dest}${suffix}.webp`);
  }
  console.log('ok', dest);
}

// Drinks keep the full product visible instead of cropping bottles/cups.
for (const [src, dest] of drinkJobs) {
  for (const [suffix, w] of [['', 800], ['-sm', 400]]) {
    await sharp(src)
      .resize(w, w, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 84, alphaQuality: 90 })
      .toFile(`${out}/${dest}${suffix}.webp`);
  }
  console.log('ok', dest);
}

const cx = 372, cy = 482, r = 314;
const mask = Buffer.from(`<svg width="${r * 2}" height="${r * 2}"><circle cx="${r}" cy="${r}" r="${r}" fill="#fff"/></svg>`);
const cropped = await sharp('scratch/ref-somun.jpg')
  .extract({ left: cx - r, top: cy - r, width: r * 2, height: r * 2 })
  .ensureAlpha().png().toBuffer();
const base = await sharp(cropped)
  .composite([{ input: mask, blend: 'dest-in' }])
  .png().toBuffer();
for (const [suffix, w] of [['', 900], ['-sm', 560]]) {
  await sharp(base).resize(w, w).webp({ quality: 82, alphaQuality: 90 }).toFile(`${out}/branding/hero-plate${suffix}.webp`);
}
console.log('hero ok');
