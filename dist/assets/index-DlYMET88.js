(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={tr:{dir:`ltr`,lang:`tr`,currency:`₺`,ui:{explore:`MENÜYÜ KEŞFET`,specials:`ÖZEL LEZZETLER`,extras:`EKSTRALAR`,desserts:`TATLILAR`,drinks:`İÇECEKLER`,contactTitle:`ALO PAKET`,contactText:`Sipariş için arayın`,findUs:`BİZİ BULUN`,directions:`YOL TARİFİ`,instagram:`Instagram`,close:`Kapat`,details:`Detay`,generatedNote:`Görsel temsilidir.`,menuNav:`Menü kategorileri`,call:`ARA`,from:`Menü`,chickenShort:`Tavuk`,meatShort:`Et`,skip:`İçeriğe geç`,heroAlt:`Yoğurtlu Tavuk Tantuni`,orderOnline:`ONLINE SİPARİŞ`}}},t=`tr`,n=n=>n.split(`.`).reduce((e,t)=>e?.[t],e[t])??``,r=e=>e&&typeof e==`object`?e[t]??e.tr??``:e??``,i=`assets`,a=e=>({image:`${i}/food-original/${e}`,source:`real`}),o=e=>({image:`${i}/food-generated/${e}`,source:`generated`}),s=e=>({image:`${i}/desserts/${e}`,source:`generated`}),c=[{id:`durum-tavuk`,category:`tavuk`,variant:`tavuk`,name:{tr:`Dürüm Tavuk Tantuni`},description:{tr:`Soğan · Domates · Maydanoz · Tavuk Göğsü`},price:175,...a(`durum-tavuk-tantuni`)},{id:`somun-tavuk`,category:`tavuk`,variant:`tavuk`,name:{tr:`Somun Tavuk Tantuni`},price:220,...a(`somun-tavuk-tantuni`)},{id:`yogurtlu-tavuk`,category:`tavuk`,variant:`tavuk`,special:`yogurtlu`,name:{tr:`Yoğurtlu Tavuk Tantuni`},price:280,...a(`yogurtlu-tavuk-tantuni`)},{id:`tanburger-tavuk`,category:`tavuk`,variant:`tavuk`,special:`tanburger`,name:{tr:`Tanburger Tavuk Tantuni`},price:280,...o(`tanburger-tavuk-tantuni`)},{id:`cheddarli-tavuk`,category:`tavuk`,variant:`tavuk`,special:`cheddarli`,name:{tr:`Cheddarlı Tavuk Tantuni`},price:280,...o(`cheddarli-tavuk-tantuni`)},{id:`begendili-tavuk`,category:`tavuk`,variant:`tavuk`,special:`begendili`,name:{tr:`Beğendili Tavuk Tantuni`},price:300,...a(`begendili-tavuk-tantuni`)},{id:`durum-et`,category:`et`,variant:`et`,name:{tr:`Dürüm Et Tantuni`},price:310,...o(`durum-et-tantuni`)},{id:`somun-et`,category:`et`,variant:`et`,name:{tr:`Somun Et Tantuni`},price:330,...o(`somun-et-tantuni`)},{id:`yogurtlu-et`,category:`et`,variant:`et`,special:`yogurtlu`,name:{tr:`Yoğurtlu Et Tantuni`},price:390,...o(`yogurtlu-et-tantuni`)},{id:`tanburger-et`,category:`et`,variant:`et`,special:`tanburger`,name:{tr:`Tanburger Et Tantuni`},price:380,...o(`tanburger-et-tantuni`)},{id:`cheddarli-et`,category:`et`,variant:`et`,special:`cheddarli`,name:{tr:`Cheddarlı Et Tantuni`},price:380,...o(`cheddarli-et-tantuni`)},{id:`begendili-et`,category:`et`,variant:`et`,special:`begendili`,name:{tr:`Beğendili Et Tantuni`},price:400,...o(`begendili-et-tantuni`)},{id:`icli-kofte`,category:`extra`,name:{tr:`İçli Köfte`},price:90},{id:`patates-100`,category:`extra`,name:{tr:`Patates Kızartması 100gr`},price:80},{id:`patates-porsiyon`,category:`extra`,name:{tr:`Patates Kızartması Porsiyon`},price:160},{id:`puding`,category:`tatli`,name:{tr:`Puding`},price:60,...s(`puding`)},{id:`sutlac`,category:`tatli`,name:{tr:`Sütlaç`},price:110,...s(`sutlac`)},{id:`trilece`,category:`tatli`,name:{tr:`Trileçe`},price:130,...s(`trilece`)},{id:`kazandibi`,category:`tatli`,name:{tr:`Kazandibi`},price:130,...s(`kazandibi`)},{id:`salgam`,category:`icecek`,group:`salgam`,name:{tr:`Mersin Şalgam`},price:70},{id:`kola`,category:`icecek`,group:`gazli`,name:{tr:`Şişe Kola`},price:70},{id:`fanta`,category:`icecek`,group:`gazli`,name:{tr:`Şişe Fanta`},price:70},{id:`sprite`,category:`icecek`,group:`gazli`,name:{tr:`Sprite`},price:70},{id:`icetea-mango`,category:`icecek`,group:`icetea`,name:{tr:`Ice Tea Mango`},price:70},{id:`icetea-karpuz`,category:`icecek`,group:`icetea`,name:{tr:`Ice Tea Karpuz`},price:70},{id:`icetea-seftali`,category:`icecek`,group:`icetea`,name:{tr:`Ice Tea Şeftali`},price:70},{id:`su`,category:`icecek`,group:`su`,name:{tr:`Su`},price:70},{id:`ayran-naneli`,category:`icecek`,group:`ayran`,name:{tr:`Naneli Ayran`},price:70},{id:`ayran-eksili`,category:`icecek`,group:`ayran`,name:{tr:`Ekşili Ayran`},price:70},{id:`ayran-acili`,category:`icecek`,group:`ayran`,name:{tr:`Acılı Ayran`},price:70},{id:`ayran-kucuk`,category:`icecek`,group:`ayran`,name:{tr:`Küçük Ayran`},price:30},{id:`ayran-buyuk`,category:`icecek`,group:`ayran`,name:{tr:`Büyük Ayran`},price:70}],l=[{id:`tanburger`,name:{tr:`Tanburger`}},{id:`cheddarli`,name:{tr:`Cheddarlı`}},{id:`begendili`,name:{tr:`Beğendili`}},{id:`yogurtlu`,name:{tr:`Yoğurtlu`}}],u=[`salgam`,`gazli`,`icetea`,`su`,`ayran`],d=[{id:`all`,label:{tr:`TÜMÜ`},target:`tavuk`},{id:`tavuk`,label:{tr:`TAVUK`},target:`tavuk`},{id:`et`,label:{tr:`ET`},target:`et`},{id:`ozel`,label:{tr:`ÖZEL`},target:`ozel`},{id:`extra`,label:{tr:`EKSTRA`},target:`ekstra`},{id:`tatli`,label:{tr:`TATLI`},target:`tatli`},{id:`icecek`,label:{tr:`İÇECEK`},target:`icecek`}],f=Object.fromEntries(c.map(e=>[e.id,e])),p=e=>c.filter(e),m=`./`,h=e=>`${m}${e}`,g=e=>`${new Intl.NumberFormat(`tr-TR`).format(e)}`,_=()=>e[t].currency;function v(e,t,{sizes:n=`50vw`,eager:r=!1,cls:i=``}={}){return`<img class="${i}" src="${h(e)}.webp" srcset="${h(e)}-sm.webp 400w, ${h(e)}.webp 800w"
    sizes="${n}" width="800" height="800" alt="${t}" ${r?`fetchpriority="high" decoding="async"`:`loading="lazy" decoding="async"`}>`}var y=(e,t=document)=>t.querySelector(e),b=(e,t=document)=>[...t.querySelectorAll(e)],x=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function S(){return`
  <nav class="catnav" id="catnav" aria-label="${n(`ui.menuNav`)}">
    <ul class="catnav__list" role="list">
      ${d.map((e,t)=>`
        <li><a class="chip${t===0?` is-active`:``}" href="#${e.target}" data-cat="${e.id}" data-target="${e.target}"
          ${t===0?`aria-current="true"`:``}>${r(e.label)}</a></li>`).join(``)}
    </ul>
  </nav>`}function C(){let e=y(`#catnav`),t=y(`.catnav__list`,e),n=b(`.chip`,e),r=0,i=(e,r=!0)=>{n.forEach(n=>{let i=n.dataset.cat===e;if(n.classList.toggle(`is-active`,i),i?n.setAttribute(`aria-current`,`true`):n.removeAttribute(`aria-current`),i&&r){let e=n.offsetLeft-(t.clientWidth-n.offsetWidth)/2;t.scrollTo({left:e,behavior:x()?`auto`:`smooth`})}})};n.forEach(t=>t.addEventListener(`click`,n=>{n.preventDefault();let a=document.getElementById(t.dataset.target);if(!a)return;r=Date.now(),i(t.dataset.cat);let o=a.getBoundingClientRect().top+window.scrollY-e.offsetHeight-6;window.scrollTo({top:o,behavior:x()?`auto`:`smooth`})}));let a=n.map(e=>({id:e.dataset.cat,el:document.getElementById(e.dataset.target)})).filter(e=>e.el),o=!1,s=()=>{if(o=!1,Date.now()-r<900)return;let t=e.offsetHeight+window.innerHeight*.25,n=a[0].id;for(let e of a)e.el.getBoundingClientRect().top<=t&&(n=e.id);window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4&&(n=a.at(-1).id),(!y(`.chip.is-active`,e)||y(`.chip.is-active`,e).dataset.cat!==n)&&i(n)};window.addEventListener(`scroll`,()=>{o||(o=!0,requestAnimationFrame(s))},{passive:!0});let c=document.createElement(`div`);c.className=`catnav-sentinel`,e.before(c),new IntersectionObserver(([t])=>e.classList.toggle(`is-stuck`,!t.isIntersecting),{threshold:0}).observe(c)}var w,T,E=!1,D={tavuk:`TAVUK`,et:`ET`,tatli:`TATLI`,extra:`EKSTRA`,icecek:`İÇECEK`};function O(){w=document.createElement(`div`),w.className=`sheet`,w.hidden=!0,w.innerHTML=`
    <div class="sheet__backdrop" data-close></div>
    <section class="sheet__panel" role="dialog" aria-modal="true" aria-labelledby="sheet-title" tabindex="-1">
      <div class="sheet__grip" aria-hidden="true"></div>
      <button type="button" class="sheet__close" data-close aria-label="${n(`ui.close`)}">
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
    </section>`,document.body.appendChild(w),w.addEventListener(`click`,e=>{e.target.closest(`[data-close]`)&&j()}),document.addEventListener(`keydown`,e=>{E&&(e.key===`Escape`&&j(),e.key===`Tab`&&k(e))}),window.addEventListener(`popstate`,()=>{E&&j(!0)}),M()}function k(e){let t=[...w.querySelectorAll(`button, a[href]`)].filter(e=>!e.disabled);if(!t.length)return;let n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n.focus())}function A(e){let t=f[e];if(!t)return;w||O(),T=document.activeElement;let i=r(t.name);y(`.sheet__media`,w).innerHTML=t.image?v(t.image,i,{sizes:`(min-width:700px) 520px, 100vw`,eager:!0}):``,y(`.sheet__media`,w).hidden=!t.image,y(`.sheet__eyebrow`,w).textContent=D[t.category]??``,y(`.sheet__title`,w).textContent=i;let a=r(t.description);y(`.sheet__desc`,w).textContent=a,y(`.sheet__desc`,w).hidden=!a,y(`.sheet__price`,w).innerHTML=`<b>${g(t.price)}</b><small>${_()}</small>`,y(`.sheet__note`,w).textContent=t.source===`generated`?n(`ui.generatedNote`):``;let o=y(`.sheet__panel`,w);o.style.transform=``,w.hidden=!1,document.documentElement.classList.add(`is-locked`),requestAnimationFrame(()=>requestAnimationFrame(()=>w.classList.add(`is-open`))),E=!0,history.pushState({sheet:e},``),setTimeout(()=>y(`.sheet__close`,w).focus({preventScroll:!0}),x()?0:120)}function j(e=!1){if(!E)return;E=!1,w.classList.remove(`is-open`),document.documentElement.classList.remove(`is-locked`),!e&&history.state?.sheet&&history.back();let t=()=>{E||(w.hidden=!0)};x()?t():setTimeout(t,340),T?.focus?.({preventScroll:!0})}function M(){let e=y(`.sheet__panel`,w),t=0,n=0,r=!1;e.addEventListener(`touchstart`,i=>{i.target.closest(`.sheet__body`)&&e.scrollTop>0||i.target.closest(`button`)||(r=!0,t=i.touches[0].clientY,n=0,e.style.transition=`none`)},{passive:!0}),e.addEventListener(`touchmove`,i=>{r&&(n=Math.max(0,i.touches[0].clientY-t),e.style.transform=`translateY(${n}px)`)},{passive:!0}),e.addEventListener(`touchend`,()=>{r&&(r=!1,e.style.transition=``,n>110?j():e.style.transform=``)})}var N={tavuk:`chickenShort`,et:`meatShort`};function P(e,{variant:t=`default`,sizes:i=`(min-width:900px) 25vw, 50vw`,eager:a=!1,label:o}={}){let s=r(e.name),c=r(e.description),l=o??(N[e.category]?n(`ui.${N[e.category]}`):``);return`
  <button type="button" class="card card--${t}" data-product="${e.id}" aria-haspopup="dialog"
    aria-label="${s}, ${g(e.price)} ${_()}. ${n(`ui.details`)}">
    <span class="card__media">${v(e.image,s,{sizes:i,eager:a})}</span>
    <span class="card__body">
      ${l?`<span class="card__eyebrow">${l}</span>`:``}
      <span class="card__name">${s}</span>
      ${c?`<span class="card__desc">${c}</span>`:``}
      <span class="card__price"><b>${g(e.price)}</b><small>${_()}</small></span>
    </span>
  </button>`}var F=(e,t=``,n=``)=>`
  <header class="shead">
    ${t?`<p class="shead__eyebrow">${t}</p>`:``}
    <h2 class="shead__title"${n?` id="${n}"`:``}>${e}</h2>
    <span class="shead__rule" aria-hidden="true"></span>
  </header>`;function I(e,t,n){let r=p(t=>t.category===e&&!t.special);return`
  <section class="section" id="${e}" aria-labelledby="h-${e}">
    ${F(t,n,`h-${e}`)}
    <div class="grid grid--2">${r.map(e=>P(e)).join(``)}</div>
  </section>`}function L(){return`
  <section class="section section--special" id="ozel" aria-labelledby="h-ozel">
    ${F(n(`ui.specials`),``,`h-ozel`)}
    <div class="families">${l.map(e=>{let t=[`tavuk`,`et`].map(t=>c.find(n=>n.special===e.id&&n.category===t)).filter(Boolean);return`
      <article class="family" aria-label="${r(e.name)}">
        <h3 class="family__name">${r(e.name)}</h3>
        <div class="grid grid--2">${t.map(e=>P(e,{variant:`mini`,label:e.category===`tavuk`?n(`ui.chickenShort`):n(`ui.meatShort`)})).join(``)}</div>
      </article>`}).join(``)}</div>
  </section>`}function R(){let e=p(e=>e.category===`extra`);return`
  <section class="section" id="ekstra" aria-labelledby="h-ekstra">
    ${F(n(`ui.extras`),``,`h-ekstra`)}
    <ul class="list" role="list">${e.map(V).join(``)}</ul>
  </section>`}function z(){let e=p(e=>e.category===`tatli`);return`
  <section class="section section--dessert" id="tatli" aria-labelledby="h-tatli">
    ${F(n(`ui.desserts`),``,`h-tatli`)}
    <div class="grid grid--2 grid--dessert">${e.map(e=>P(e,{variant:`dessert`,sizes:`(min-width:900px) 25vw, 50vw`})).join(``)}</div>
  </section>`}function B(){return`
  <section class="section section--drinks" id="icecek" aria-labelledby="h-icecek">
    ${F(n(`ui.drinks`),``,`h-icecek`)}
    <div class="drinks">
      ${u.map(e=>`
        <ul class="list list--drinks" role="list">
          ${p(t=>t.group===e).map(V).join(``)}
        </ul>`).join(``)}
    </div>
  </section>`}function V(e){return`
  <li class="row">
    <button type="button" class="row__btn" data-product="${e.id}" aria-haspopup="dialog" aria-label="${r(e.name)}, ${g(e.price)} ${_()}">
      <span class="row__name">${r(e.name)}</span>
      <span class="row__dots" aria-hidden="true"></span>
      <span class="row__price">${g(e.price)}<small>${_()}</small></span>
    </button>
  </li>`}var H={name:`MERSİN CHEFF TANTUNİ`,shortName:`Mersin Cheff Tantuni`,address:{street:`Hamidiye, Park Cd. No:63 D:1A`,district:`İnegöl`,province:`Bursa`,country:`TR`},phone:{display:`0 551 351 33 16`,e164:`+905513513316`},instagram:{handle:`@inegol_mersin_tantuni`,url:`https://www.instagram.com/inegol_mersin_tantuni/`},platforms:[]},U=`https://www.google.com/maps/dir/?api=1&destination=`+encodeURIComponent(`${H.name}, ${H.address.street}, ${H.address.district}, ${H.address.province}`),W=`<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z"/></svg>`,G=`<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"/></svg>`,K=`<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/></svg>`;function q(){let{address:e,phone:t,instagram:r,platforms:i}=H;return`
  <section class="section section--contact" id="iletisim" aria-label="${n(`ui.findUs`)}">
    <div class="contact">
      <article class="panel panel--call" aria-labelledby="h-call">
        <p class="panel__eyebrow">${n(`ui.contactText`)}</p>
        <h2 class="panel__title" id="h-call">${n(`ui.contactTitle`)}</h2>
        <a class="phone" href="tel:${t.e164}" id="call-link">${W}<span>${t.display}</span></a>
      </article>

      <article class="panel panel--find" aria-labelledby="h-find" id="konum">
        <h2 class="panel__title" id="h-find">${n(`ui.findUs`)}</h2>
        <address class="addr">${e.street}<br>${e.district} / ${e.province}</address>
        <div class="actions">
          <a class="btn btn--primary" id="directions-link" href="${U}" target="_blank" rel="noopener noreferrer">${G}<span>${n(`ui.directions`)}</span></a>
          <a class="btn btn--ghost" id="instagram-link" href="${r.url}" target="_blank" rel="noopener noreferrer">${K}<span>${r.handle}</span></a>
        </div>
        ${i.length?`
        <div class="platforms" aria-label="${n(`ui.orderOnline`)}">
          <p class="panel__eyebrow">${n(`ui.orderOnline`)}</p>
          <p class="platforms__list">${i.map(e=>e.url?`<a href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name}</a>`:`<span>${e.name}</span>`).join(`<i aria-hidden="true"> · </i>`)}</p>
        </div>`:``}
      </article>
    </div>
  </section>`}function J(){let{address:e,phone:t,instagram:n,platforms:r}=H;return`
  <footer class="footer">
    <p class="footer__brand">MERSİN <span>CHEFF</span> TANTUNİ</p>
    <p class="footer__line">${e.street} · ${e.district} / ${e.province}</p>
    <p class="footer__links">
      <a href="tel:${t.e164}">${t.display}</a>
      <i aria-hidden="true">·</i>
      <a href="${n.url}" target="_blank" rel="noopener noreferrer">${n.handle}</a>
    </p>
    ${r.length?`<p class="footer__links">${r.map(e=>e.url?`<a href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name}</a>`:`<span>${e.name}</span>`).join(`<i aria-hidden="true"> · </i>`)}</p>`:``}
  </footer>`}function Y(){let e=y(`.hero`);if(!e||(document.documentElement.classList.add(`is-ready`),y(`#explore`)?.addEventListener(`click`,e=>{e.preventDefault();let t=y(`#catnav`),n=y(`#tavuk`)||y(`#menu`);if(!n){window.scrollTo({top:window.innerHeight,behavior:x()?`auto`:`smooth`});return}let r=t?.offsetHeight??0,i=n.getBoundingClientRect().top+window.scrollY-r-8;window.scrollTo({top:Math.max(0,i),behavior:x()?`auto`:`smooth`})}),x()))return;let t=y(`.hero__plate`,e),n=y(`.hero__glow`,e),r=0,i=0,a=0,o=0,s=()=>{o=0;let s=Math.min(r/e.offsetHeight,1.2);t.style.setProperty(`--py`,`${s*46}px`),t.style.setProperty(`--rx`,`${a*-4}deg`),t.style.setProperty(`--ry`,`${i*5}deg`),n.style.setProperty(`--gy`,`${s*24}px`)},c=()=>{o||(o=requestAnimationFrame(s))};window.addEventListener(`scroll`,()=>{r=window.scrollY,r<e.offsetHeight*1.3&&c()},{passive:!0}),e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect();i=(t.clientX-n.left)/n.width-.5,a=(t.clientY-n.top)/n.height-.5,c()})}if(document.documentElement.lang=e[t].lang,document.documentElement.dir=e[t].dir,document.getElementById(`nav-slot`).innerHTML=S(),document.getElementById(`menu`).innerHTML=[I(`tavuk`,`TAVUK TANTUNİ`,``),I(`et`,`ET TANTUNİ`,``),L(),R(),z(),B()].join(``),document.getElementById(`info`).innerHTML=q()+J(),C(),Y(),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-product]`);t&&A(t.dataset.product)}),!matchMedia(`(prefers-reduced-motion: reduce)`).matches&&`IntersectionObserver`in window){let e=new IntersectionObserver(t=>t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`is-in`),e.unobserve(t.target))}),{rootMargin:`0px 0px -8% 0px`});document.querySelectorAll(`.section, .family, .panel`).forEach(t=>{t.classList.add(`reveal`),e.observe(t)})}