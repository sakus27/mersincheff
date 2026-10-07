/**
 * UI strings. Add `en` / `ar` blocks here to localize (set dir:'rtl' for ar).
 * Everything user-visible goes through t() so adding a locale needs no component edits.
 */
export const locales = {
  tr: {
    dir: 'ltr',
    lang: 'tr',
    currency: '₺',
    ui: {
      explore: 'MENÜYÜ KEŞFET',
      specials: 'ÖZEL LEZZETLER',
      extras: 'EKSTRALAR',
      desserts: 'TATLILAR',
      drinks: 'İÇECEKLER',
      contactTitle: 'ALO PAKET',
      contactText: 'Sipariş için arayın',
      findUs: 'BİZİ BULUN',
      directions: 'YOL TARİFİ',
      instagram: 'Instagram',
      close: 'Kapat',
      details: 'Detay',
      generatedNote: 'Görsel temsilidir.',
      menuNav: 'Menü kategorileri',
      call: 'ARA',
      from: 'Menü',
      chickenShort: 'Tavuk',
      meatShort: 'Et',
      skip: 'İçeriğe geç',
      heroAlt: 'Yoğurtlu Tavuk Tantuni',
      orderOnline: 'ONLINE SİPARİŞ',
    },
  },
};

export let locale = 'tr';
export const setLocale = (l) => { if (locales[l]) locale = l; };
export const t = (key) => key.split('.').reduce((o, k) => o?.[k], locales[locale]) ?? '';
/** Resolve a localized field ({tr:'..', en:'..'}) with Turkish fallback. */
export const tx = (field) => (field && typeof field === 'object' ? field[locale] ?? field.tr ?? '' : field ?? '');
