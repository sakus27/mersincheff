import { categories } from '../data/menu.js';
import { tx, t } from '../data/i18n.js';
import { $, $$, reduceMotion } from '../utils/dom.js';

export function categoryNav() {
  return `
  <nav class="catnav" id="catnav" aria-label="${t('ui.menuNav')}">
    <ul class="catnav__list" role="list">
      ${categories.map((c, i) => `
        <li><a class="chip${i === 0 ? ' is-active' : ''}" href="#${c.target}" data-cat="${c.id}" data-target="${c.target}"
          ${i === 0 ? 'aria-current="true"' : ''}>${tx(c.label)}</a></li>`).join('')}
    </ul>
  </nav>`;
}

export function initCategoryNav() {
  const nav = $('#catnav');
  const list = $('.catnav__list', nav);
  const chips = $$('.chip', nav);
  let lock = 0;

  const setActive = (id, center = true) => {
    chips.forEach((c) => {
      const on = c.dataset.cat === id;
      c.classList.toggle('is-active', on);
      on ? c.setAttribute('aria-current', 'true') : c.removeAttribute('aria-current');
      if (on && center) {
        const target = c.offsetLeft - (list.clientWidth - c.offsetWidth) / 2;
        list.scrollTo({ left: target, behavior: reduceMotion() ? 'auto' : 'smooth' });
      }
    });
  };

  chips.forEach((c) => c.addEventListener('click', (e) => {
    e.preventDefault();
    const el = document.getElementById(c.dataset.target);
    if (!el) return;
    lock = Date.now();
    setActive(c.dataset.cat);
    const y = el.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 6;
    window.scrollTo({ top: y, behavior: reduceMotion() ? 'auto' : 'smooth' });
  }));

  // scroll-spy
  const sections = chips.map((c) => ({ id: c.dataset.cat, el: document.getElementById(c.dataset.target) })).filter((s) => s.el);
  let ticking = false;
  const spy = () => {
    ticking = false;
    if (Date.now() - lock < 900) return;
    const line = nav.offsetHeight + window.innerHeight * 0.25;
    let current = sections[0].id;
    for (const s of sections) if (s.el.getBoundingClientRect().top <= line) current = s.id;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections.at(-1).id;
    if (!$('.chip.is-active', nav) || $('.chip.is-active', nav).dataset.cat !== current) setActive(current);
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });

  // stuck state (for visual styling)
  const sentinel = document.createElement('div');
  sentinel.className = 'catnav-sentinel';
  nav.before(sentinel);
  new IntersectionObserver(([e]) => nav.classList.toggle('is-stuck', !e.isIntersecting), { threshold: 0 }).observe(sentinel);
}
