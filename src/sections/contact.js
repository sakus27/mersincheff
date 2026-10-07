import { site, directionsUrl } from '../data/site.js';
import { t } from '../data/i18n.js';
import { sectionHead } from '../components/sectionHead.js';

const icoPhone = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z"/></svg>';
const icoPin = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"/></svg>';
const icoIg = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/></svg>';

export function contact() {
  const { address: a, phone, instagram, platforms } = site;
  return `
  <section class="section section--contact" id="iletisim" aria-label="${t('ui.findUs')}">
    <div class="contact">
      <article class="panel panel--call" aria-labelledby="h-call">
        <p class="panel__eyebrow">${t('ui.contactText')}</p>
        <h2 class="panel__title" id="h-call">${t('ui.contactTitle')}</h2>
        <a class="phone" href="tel:${phone.e164}" id="call-link">${icoPhone}<span>${phone.display}</span></a>
      </article>

      <article class="panel panel--find" aria-labelledby="h-find" id="konum">
        <h2 class="panel__title" id="h-find">${t('ui.findUs')}</h2>
        <address class="addr">${a.street}<br>${a.district} / ${a.province}</address>
        <div class="actions">
          <a class="btn btn--primary" id="directions-link" href="${directionsUrl}" target="_blank" rel="noopener noreferrer">${icoPin}<span>${t('ui.directions')}</span></a>
          <a class="btn btn--ghost" id="instagram-link" href="${instagram.url}" target="_blank" rel="noopener noreferrer">${icoIg}<span>${instagram.handle}</span></a>
        </div>
        ${platforms.length ? `
        <div class="platforms" aria-label="${t('ui.orderOnline')}">
          <p class="panel__eyebrow">${t('ui.orderOnline')}</p>
          <p class="platforms__list">${platforms.map((p) => p.url ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.name}</a>` : `<span>${p.name}</span>`).join('<i aria-hidden="true"> · </i>')}</p>
        </div>` : ''}
      </article>
    </div>
  </section>`;
}

export function footer() {
  const { address: a, phone, instagram, platforms } = site;
  return `
  <footer class="footer">
    <p class="footer__brand">MERSİN <span>CHEFF</span> TANTUNİ</p>
    <p class="footer__line">${a.street} · ${a.district} / ${a.province}</p>
    <p class="footer__links">
      <a href="tel:${phone.e164}">${phone.display}</a>
      <i aria-hidden="true">·</i>
      <a href="${instagram.url}" target="_blank" rel="noopener noreferrer">${instagram.handle}</a>
    </p>
    ${platforms.length ? `<p class="footer__links">${platforms.map((p) => p.url ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.name}</a>` : `<span>${p.name}</span>`).join('<i aria-hidden="true"> · </i>')}</p>` : ''}
  </footer>`;
}
