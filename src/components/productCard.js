import { tx, t } from '../data/i18n.js';
import { img, price, currency } from '../utils/dom.js';

const catLabel = { tavuk: 'chickenShort', et: 'meatShort' };

/**
 * Reusable product card.
 * variant: 'default' | 'feature' | 'dessert' | 'mini'
 */
export function productCard(p, { variant = 'default', sizes = '(min-width:900px) 25vw, 50vw', eager = false, label } = {}) {
  const name = tx(p.name);
  const desc = tx(p.description);
  const eyebrow = label ?? (catLabel[p.category] ? t(`ui.${catLabel[p.category]}`) : '');
  return `
  <button type="button" class="card card--${variant}" data-product="${p.id}" aria-haspopup="dialog"
    aria-label="${name}, ${price(p.price)} ${currency()}. ${t('ui.details')}">
    <span class="card__media">${img(p.image, name, { sizes, eager })}</span>
    <span class="card__body">
      ${eyebrow ? `<span class="card__eyebrow">${eyebrow}</span>` : ''}
      <span class="card__name">${name}</span>
      ${desc ? `<span class="card__desc">${desc}</span>` : ''}
      <span class="card__price"><b>${price(p.price)}</b><small>${currency()}</small></span>
    </span>
  </button>`;
}
