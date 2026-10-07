import { byId } from '../data/menu.js';
import { tx, t } from '../data/i18n.js';
import { img, price, currency, $, reduceMotion } from '../utils/dom.js';

let sheet, lastFocus, open = false;

const catName = { tavuk: 'TAVUK', et: 'ET', tatli: 'TATLI', extra: 'EKSTRA', icecek: 'İÇECEK' };

function build() {
  sheet = document.createElement('div');
  sheet.className = 'sheet';
  sheet.hidden = true;
  sheet.innerHTML = `
    <div class="sheet__backdrop" data-close></div>
    <section class="sheet__panel" role="dialog" aria-modal="true" aria-labelledby="sheet-title" tabindex="-1">
      <div class="sheet__grip" aria-hidden="true"></div>
      <button type="button" class="sheet__close" data-close aria-label="${t('ui.close')}">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
      </button>
      <div class="sheet__media"></div>
      <div class="sheet__body">
        <p class="sheet__eyebrow"></p>
        <h2 class="sheet__title" id="sheet-title"></h2>
        <p class="sheet__desc"></p>
        <div class="sheet__foot">
          <span class="sheet__price"></span>
          <span class="sheet__note"></span>
        </div>
      </div>
    </section>`;
  document.body.appendChild(sheet);
  sheet.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) close(); });
  document.addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') trapFocus(e);
  });
  window.addEventListener('popstate', () => { if (open) close(true); });
  enableDrag();
}

function trapFocus(e) {
  const f = [...sheet.querySelectorAll('button, a[href]')].filter((el) => !el.disabled);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

export function openProduct(id) {
  const p = byId[id];
  if (!p) return;
  if (!sheet) build();
  lastFocus = document.activeElement;
  const name = tx(p.name);
  $('.sheet__media', sheet).innerHTML = p.image ? img(p.image, name, { sizes: '(min-width:700px) 520px, 100vw', eager: true }) : '';
  $('.sheet__media', sheet).hidden = !p.image;
  $('.sheet__eyebrow', sheet).textContent = catName[p.category] ?? '';
  $('.sheet__title', sheet).textContent = name;
  const desc = tx(p.description);
  $('.sheet__desc', sheet).textContent = desc;
  $('.sheet__desc', sheet).hidden = !desc;
  $('.sheet__price', sheet).innerHTML = `<b>${price(p.price)}</b><small>${currency()}</small>`;
  $('.sheet__note', sheet).textContent = p.source === 'generated' ? t('ui.generatedNote') : '';
  const panel = $('.sheet__panel', sheet);
  panel.style.transform = '';
  sheet.hidden = false;
  document.documentElement.classList.add('is-locked');
  requestAnimationFrame(() => requestAnimationFrame(() => sheet.classList.add('is-open')));
  open = true;
  history.pushState({ sheet: id }, '');
  setTimeout(() => $('.sheet__close', sheet).focus({ preventScroll: true }), reduceMotion() ? 0 : 120);
}

export function close(fromPop = false) {
  if (!open) return;
  open = false;
  sheet.classList.remove('is-open');
  document.documentElement.classList.remove('is-locked');
  if (!fromPop && history.state?.sheet) history.back();
  const done = () => { if (!open) sheet.hidden = true; };
  reduceMotion() ? done() : setTimeout(done, 340);
  lastFocus?.focus?.({ preventScroll: true });
}

/** Swipe-down to dismiss. */
function enableDrag() {
  const panel = $('.sheet__panel', sheet);
  let startY = 0, dy = 0, dragging = false;
  const grab = (e) => {
    if (e.target.closest('.sheet__body') && panel.scrollTop > 0) return;
    if (e.target.closest('button')) return;
    dragging = true; startY = e.touches[0].clientY; dy = 0; panel.style.transition = 'none';
  };
  panel.addEventListener('touchstart', grab, { passive: true });
  panel.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    dy = Math.max(0, e.touches[0].clientY - startY);
    panel.style.transform = `translateY(${dy}px)`;
  }, { passive: true });
  panel.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false; panel.style.transition = '';
    if (dy > 110) close(); else panel.style.transform = '';
  });
}
