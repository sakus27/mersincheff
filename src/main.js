import './styles/fonts.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/sections.css';

import { t, locales, locale } from './data/i18n.js';
import { categoryNav, initCategoryNav } from './components/categoryNav.js';
import { openProduct } from './components/sheet.js';
import { classic, special, extras, desserts, drinks } from './sections/menuSections.js';
import { contact, footer } from './sections/contact.js';
import { initHero } from './sections/hero.js';

document.documentElement.lang = locales[locale].lang;
document.documentElement.dir = locales[locale].dir;

document.getElementById('nav-slot').innerHTML = categoryNav();
document.getElementById('menu').innerHTML = [
  classic('tavuk', 'TAVUK TANTUNİ', ''),
  classic('et', 'ET TANTUNİ', ''),
  special(),
  extras(),
  desserts(),
  drinks(),
].join('');
document.getElementById('info').innerHTML = contact() + footer();

initCategoryNav();
initHero();

// Open product details (event delegation: one listener for every card/row).
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-product]');
  if (el) openProduct(el.dataset.product);
});

// Scroll-reveal for sections (cheap IntersectionObserver, skipped for reduced motion).
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.section, .family, .panel').forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}
