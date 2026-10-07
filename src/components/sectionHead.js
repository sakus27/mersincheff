export const sectionHead = (title, eyebrow = '', id = '') => `
  <header class="shead">
    ${eyebrow ? `<p class="shead__eyebrow">${eyebrow}</p>` : ''}
    <h2 class="shead__title"${id ? ` id="${id}"` : ''}>${title}</h2>
    <span class="shead__rule" aria-hidden="true"></span>
  </header>`;
