import { t, locale, locales } from '../data/i18n.js';

const BASE = import.meta.env.BASE_URL;

export const url = (path) => `${BASE}${path}`;

export const price = (n) => `${new Intl.NumberFormat('tr-TR').format(n)}`;
export const currency = () => locales[locale].currency;
export const money = (n) => `${price(n)} ${currency()}`;

/** Responsive <img> for a base path (`x` → x-sm.webp 400w, x.webp 800w). */
export function img(base, alt, { sizes = '50vw', eager = false, cls = '' } = {}) {
  return `<img class="${cls}" src="${url(base)}.webp" srcset="${url(base)}-sm.webp 400w, ${url(base)}.webp 800w"
    sizes="${sizes}" width="800" height="800" alt="${alt}" ${eager ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"'}>`;
}

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export { t };
