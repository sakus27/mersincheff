import { reduceMotion, $ } from '../utils/dom.js';

/** Restrained parallax for the hero plate (scroll + pointer). rAF-throttled, off for reduced motion. */
export function initHero() {
  const hero = $('.hero');
  if (!hero) return;
  document.documentElement.classList.add('is-ready');
  $('#explore')?.addEventListener('click', (e) => {
    e.preventDefault();
    const nav = $('#catnav');
    const target = $('#tavuk') || $('#menu');
    if (!target) {
      window.scrollTo({ top: window.innerHeight, behavior: reduceMotion() ? 'auto' : 'smooth' });
      return;
    }
    const navH = nav?.offsetHeight ?? 0;
    const y = target.getBoundingClientRect().top + window.scrollY - navH - 8;
    window.scrollTo({ top: Math.max(0, y), behavior: reduceMotion() ? 'auto' : 'smooth' });
  });
  if (reduceMotion()) return;

  const plate = $('.hero__plate', hero);
  const glow = $('.hero__glow', hero);
  let sy = 0, px = 0, py = 0, raf = 0;
  const frame = () => {
    raf = 0;
    const p = Math.min(sy / hero.offsetHeight, 1.2);
    plate.style.setProperty('--py', `${p * 46}px`);
    plate.style.setProperty('--rx', `${py * -4}deg`);
    plate.style.setProperty('--ry', `${px * 5}deg`);
    glow.style.setProperty('--gy', `${p * 24}px`);
  };
  const req = () => { if (!raf) raf = requestAnimationFrame(frame); };
  window.addEventListener('scroll', () => { sy = window.scrollY; if (sy < hero.offsetHeight * 1.3) req(); }, { passive: true });
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    px = (e.clientX - r.left) / r.width - 0.5;
    py = (e.clientY - r.top) / r.height - 0.5;
    req();
  });
}
