import { products, specialFamilies, drinkGroups, where } from '../data/menu.js';
import { tx, t } from '../data/i18n.js';
import { img, price, currency } from '../utils/dom.js';
import { productCard } from '../components/productCard.js';
import { sectionHead } from '../components/sectionHead.js';

/** TAVUK / ET — classic items (non-special). Specials live in ÖZEL LEZZETLER. */
export function classic(category, title, eyebrow) {
  const items = where((p) => p.category === category && !p.special);
  return `
  <section class="section" id="${category}" aria-labelledby="h-${category}">
    ${sectionHead(title, eyebrow, `h-${category}`)}
    <div class="grid grid--2">${items.map((p) => productCard(p)).join('')}</div>
  </section>`;
}

/** ÖZEL LEZZETLER — each family shows chicken + meat variants side by side. */
export function special() {
  return `
  <section class="section section--special" id="ozel" aria-labelledby="h-ozel">
    ${sectionHead(t('ui.specials'), '', 'h-ozel')}
    <div class="families">${specialFamilies.map((f) => {
      const variants = ['tavuk', 'et'].map((c) => products.find((p) => p.special === f.id && p.category === c)).filter(Boolean);
      return `
      <article class="family" aria-label="${tx(f.name)}">
        <h3 class="family__name">${tx(f.name)}</h3>
        <div class="grid grid--2">${variants.map((p) => productCard(p, { variant: 'mini', label: p.category === 'tavuk' ? t('ui.chickenShort') : t('ui.meatShort') })).join('')}</div>
      </article>`;
    }).join('')}</div>
  </section>`;
}

/** EKSTRALAR — compact list. */
export function extras() {
  const items = where((p) => p.category === 'extra');
  return `
  <section class="section" id="ekstra" aria-labelledby="h-ekstra">
    ${sectionHead(t('ui.extras'), '', 'h-ekstra')}
    <ul class="list" role="list">${items.map(listRow).join('')}</ul>
  </section>`;
}

/** TATLILAR — slightly more elegant card variant. */
export function desserts() {
  const items = where((p) => p.category === 'tatli');
  return `
  <section class="section section--dessert" id="tatli" aria-labelledby="h-tatli">
    ${sectionHead(t('ui.desserts'), '', 'h-tatli')}
    <div class="grid grid--2 grid--dessert">${items.map((p) => productCard(p, { variant: 'dessert', sizes: '(min-width:900px) 25vw, 50vw' })).join('')}</div>
  </section>`;
}

/** İÇECEKLER — keep the original compact list layout, adding only the drink thumbnails. */
export function drinks() {
  return `
  <section class="section section--drinks" id="icecek" aria-labelledby="h-icecek">
    ${sectionHead(t('ui.drinks'), '', 'h-icecek')}
    <div class="drinks">
      ${drinkGroups.map((g) => `
        <ul class="list list--drinks" role="list">
          ${where((p) => p.group === g).map((p) => listRow(p, true)).join('')}
        </ul>`).join('')}
    </div>
  </section>`;
}

function listRow(p, withImage = false) {
  return `
  <li class="row${withImage ? ' row--drink' : ''}">
    <button type="button" class="row__btn" data-product="${p.id}" aria-haspopup="dialog" aria-label="${tx(p.name)}, ${price(p.price)} ${currency()}">
      ${withImage ? `<span class="row__thumb">${img(p.image, tx(p.name), { sizes: '48px' })}</span>` : ''}
      <span class="row__name">${tx(p.name)}</span>
      <span class="row__dots" aria-hidden="true"></span>
      <span class="row__price">${price(p.price)}<small>${currency()}</small></span>
    </button>
  </li>`;
}
