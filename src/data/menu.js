/**
 * SINGLE SOURCE OF TRUTH for the menu. Change a price here and it updates everywhere.
 * Image paths are base paths (no extension): <path>.webp (800px) and <path>-sm.webp (400px).
 * source: 'real' = restaurant photo, 'generated' = locally stored, restaurant-matching image.
 */
const A = 'assets';
const real = (n) => ({ image: `${A}/food-original/${n}`, source: 'real' });
const gen = (n) => ({ image: `${A}/food-generated/${n}`, source: 'generated' });
const dessert = (n) => ({ image: `${A}/desserts/${n}`, source: 'generated' });
const drink = (n) => ({ image: `${A}/drinks/${n}`, source: 'real' });

export const products = [
  // ───────── TAVUK ─────────
  { id: 'durum-tavuk', category: 'tavuk', variant: 'tavuk', name: { tr: 'Dürüm Tavuk Tantuni' },
    description: { tr: 'Soğan · Domates · Maydanoz · Tavuk Göğsü' }, price: 175,
    ...real('durum-tavuk-tantuni') },
  { id: 'somun-tavuk', category: 'tavuk', variant: 'tavuk', name: { tr: 'Somun Tavuk Tantuni' }, price: 220,
    ...real('somun-tavuk-tantuni') },
  { id: 'yogurtlu-tavuk', category: 'tavuk', variant: 'tavuk', special: 'yogurtlu', name: { tr: 'Yoğurtlu Tavuk Tantuni' },
    price: 280, ...real('yogurtlu-tavuk-tantuni') },
  { id: 'tanburger-tavuk', category: 'tavuk', variant: 'tavuk', special: 'tanburger', name: { tr: 'Tanburger Tavuk Tantuni' },
    price: 280, ...gen('tanburger-tavuk-tantuni') },
  { id: 'cheddarli-tavuk', category: 'tavuk', variant: 'tavuk', special: 'cheddarli', name: { tr: 'Cheddarlı Tavuk Tantuni' },
    price: 280, ...gen('cheddarli-tavuk-tantuni') },
  { id: 'begendili-tavuk', category: 'tavuk', variant: 'tavuk', special: 'begendili', name: { tr: 'Beğendili Tavuk Tantuni' },
    price: 300, ...real('begendili-tavuk-tantuni') },

  // ───────── ET ─────────
  { id: 'durum-et', category: 'et', variant: 'et', name: { tr: 'Dürüm Et Tantuni' }, price: 310,
    ...gen('durum-et-tantuni') },
  { id: 'somun-et', category: 'et', variant: 'et', name: { tr: 'Somun Et Tantuni' }, price: 330,
    ...gen('somun-et-tantuni') },
  { id: 'yogurtlu-et', category: 'et', variant: 'et', special: 'yogurtlu', name: { tr: 'Yoğurtlu Et Tantuni' }, price: 390,
    ...gen('yogurtlu-et-tantuni') },
  { id: 'tanburger-et', category: 'et', variant: 'et', special: 'tanburger', name: { tr: 'Tanburger Et Tantuni' }, price: 380,
    ...gen('tanburger-et-tantuni') },
  { id: 'cheddarli-et', category: 'et', variant: 'et', special: 'cheddarli', name: { tr: 'Cheddarlı Et Tantuni' }, price: 380,
    ...gen('cheddarli-et-tantuni') },
  { id: 'begendili-et', category: 'et', variant: 'et', special: 'begendili', name: { tr: 'Beğendili Et Tantuni' }, price: 400,
    ...gen('begendili-et-tantuni') },

  // ───────── EKSTRALAR ─────────
  { id: 'icli-kofte', category: 'extra', name: { tr: 'İçli Köfte' }, price: 90 },
  { id: 'patates-100', category: 'extra', name: { tr: 'Patates Kızartması 100gr' }, price: 80 },
  { id: 'patates-porsiyon', category: 'extra', name: { tr: 'Patates Kızartması Porsiyon' }, price: 160 },

  // ───────── TATLILAR ─────────
  { id: 'puding', category: 'tatli', name: { tr: 'Puding' }, price: 60, ...dessert('puding') },
  { id: 'sutlac', category: 'tatli', name: { tr: 'Sütlaç' }, price: 110, ...dessert('sutlac') },
  { id: 'trilece', category: 'tatli', name: { tr: 'Trileçe' }, price: 130, ...dessert('trilece') },
  { id: 'kazandibi', category: 'tatli', name: { tr: 'Kazandibi' }, price: 130, ...dessert('kazandibi') },

  // ───────── İÇECEKLER ─────────
  { id: 'salgam', category: 'icecek', group: 'salgam', name: { tr: 'Mersin Şalgam' }, price: 70, ...drink('salgam.webp') },
  { id: 'kola', category: 'icecek', group: 'gazli', name: { tr: 'Şişe Kola' }, price: 70, ...drink('kola.jpg') },
  { id: 'fanta', category: 'icecek', group: 'gazli', name: { tr: 'Şişe Fanta' }, price: 70, ...drink('fanta.jpg') },
  { id: 'sprite', category: 'icecek', group: 'gazli', name: { tr: 'Sprite' }, price: 70, ...drink('sprite.jpg') },
  { id: 'icetea-mango', category: 'icecek', group: 'icetea', name: { tr: 'Ice Tea Mango' }, price: 70, ...drink('icetea-mango.webp') },
  { id: 'icetea-karpuz', category: 'icecek', group: 'icetea', name: { tr: 'Ice Tea Karpuz' }, price: 70, ...drink('icetea-karpuz.webp') },
  { id: 'icetea-seftali', category: 'icecek', group: 'icetea', name: { tr: 'Ice Tea Şeftali' }, price: 70, ...drink('icetea-seftali.jpg') },
  { id: 'su', category: 'icecek', group: 'su', name: { tr: 'Su' }, price: 70, ...drink('su.jpg') },
  { id: 'ayran-naneli', category: 'icecek', group: 'ayran', name: { tr: 'Naneli Ayran' }, price: 70, ...drink('ayran-naneli.jpg') },
  { id: 'ayran-eksili', category: 'icecek', group: 'ayran', name: { tr: 'Ekşili Ayran' }, price: 70, ...drink('ayran-eksili.jpg') },
  { id: 'ayran-acili', category: 'icecek', group: 'ayran', name: { tr: 'Acılı Ayran' }, price: 70, ...drink('ayran-acili.jpg') },
  { id: 'ayran-kucuk', category: 'icecek', group: 'ayran', name: { tr: 'Küçük Ayran' }, price: 30, ...drink('ayran-kucuk.jpg') },
  { id: 'ayran-buyuk', category: 'icecek', group: 'ayran', name: { tr: 'Büyük Ayran' }, price: 70, ...drink('ayran-buyuk.webp') },
];

export const specialFamilies = [
  { id: 'tanburger', name: { tr: 'Tanburger' } },
  { id: 'cheddarli', name: { tr: 'Cheddarlı' } },
  { id: 'begendili', name: { tr: 'Beğendili' } },
  { id: 'yogurtlu', name: { tr: 'Yoğurtlu' } },
];

export const drinkGroups = ['salgam', 'gazli', 'icetea', 'su', 'ayran'];

export const categories = [
  { id: 'all', label: { tr: 'TÜMÜ' }, target: 'tavuk' },
  { id: 'tavuk', label: { tr: 'TAVUK' }, target: 'tavuk' },
  { id: 'et', label: { tr: 'ET' }, target: 'et' },
  { id: 'ozel', label: { tr: 'ÖZEL' }, target: 'ozel' },
  { id: 'extra', label: { tr: 'EKSTRA' }, target: 'ekstra' },
  { id: 'tatli', label: { tr: 'TATLI' }, target: 'tatli' },
  { id: 'icecek', label: { tr: 'İÇECEK' }, target: 'icecek' },
];

export const byId = Object.fromEntries(products.map((p) => [p.id, p]));
export const where = (fn) => products.filter(fn);
