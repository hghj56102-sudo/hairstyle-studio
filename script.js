(() => {
  'use strict';

  const U = (id, w = 800, h) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=78`;

  /* ===== Деректер ===== */
  const CATS = {
    wedding: 'Үйлену тойы', evening: 'Кешкі', prom: 'Мектеп бітіру',
    daily: 'Күнделікті', kids: 'Балалар', men: 'Ерлер'
  };
  const LENS = { short: 'Қысқа', medium: 'Орта', long: 'Ұзын' };

  const STYLES = [
    { id: 1,  img: '1519741497674-611481863552', cat: 'wedding', len: 'long',   name: 'Қалыңдықтың жұмсақ түйіні', time: '1,5–2 сағат', price: 45000,
      desc: 'Желкеде жиналған нәзік түйін, бетті ашық әрі жеңіл етеді. Орамалмен де, тәжбен де үйлеседі.' },
    { id: 2,  img: '1595476108010-b4d1f102b1b1', cat: 'wedding', len: 'long',   name: 'Гүлді грек өрімі', time: '2 сағат', price: 48000,
      desc: 'Шекеден басталып, жан-жағынан айнала өрілген өрім. Тірі гүлдер мен түйреуіштерді қосуға болады.' },
    { id: 3,  img: '1469334031218-e382a71b716b', cat: 'wedding', len: 'medium', name: 'Классикалық француз түйіні', time: '1,5 сағат', price: 40000,
      desc: 'Талғампаз әрі ұстамды үлгі. Жабық мойынды көйлекке және жұқа шымылдыққа өте жарасады.' },
    { id: 4,  img: '1487412947147-5cebf100ffc2', cat: 'evening', len: 'long',   name: 'Голливуд толқыны', time: '1 сағат', price: 22000,
      desc: 'Бір жаққа қайырылған жылтыр, ірі толқындар. Кешкі көйлекке ең сенімді таңдау.' },
    { id: 5,  img: '1529626455594-4ff0802cfb7e', cat: 'evening', len: 'medium', name: 'Көлемді бұйра шаш', time: '1 сағат', price: 18000,
      desc: 'Табиғи көрінетін серпімді бұйралар. Шаш түбіне көлем беріп, түні бойы сақталатындай бекітеміз.' },
    { id: 6,  img: '1515377905703-c4788e51af15', cat: 'evening', len: 'long',   name: 'Жылтыр төмен құйрық', time: '40 минут', price: 15000,
      desc: 'Тегіс, жылтыр құйрық — минимализмді ұнататындарға. Ашық иықты көйлекпен керемет көрінеді.' },
    { id: 7,  img: '1534528741775-53994a69daeb', cat: 'prom',    len: 'long',   name: 'Жартылай жиналған толқын', time: '1 сағат', price: 20000,
      desc: 'Шаштың жоғарғы бөлігі жиналып, қалғаны толқынмен төгіледі. Жас әрі романтикалық бейне.' },
    { id: 8,  img: '1580618672591-eb180b1a973f', cat: 'prom',    len: 'medium', name: 'Еркін көлемді түйін', time: '1 сағат', price: 20000,
      desc: 'Әдейі ұқыпсыз жасалған жеңіл түйін. Бүкіл кеш бойы би билесеңіз де бұзылмайды.' },
    { id: 9,  img: '1516975080664-ed2fc6a32937', cat: 'prom',    len: 'long',   name: 'Көлемді «балық құйрық» өрімі', time: '50 минут', price: 16000,
      desc: 'Бүйірге қарай өрілген, сәл тартылып көлем берілген өрім. Ерекше әрі есте қаларлық.' },
    { id: 10, img: '1562322140-8baeececf3df', cat: 'daily',   len: 'medium', name: 'Жеңіл жағажай толқыны', time: '40 минут', price: 10000,
      desc: 'Желмен ұйпаланғандай табиғи толқындар. Жұмысқа да, кездесуге де жарасады.' },
    { id: 11, img: '1560066984-138dadb4c035', cat: 'daily',   len: 'short',  name: 'Көлемді қысқа сәндеу', time: '30 минут', price: 10000,
      desc: 'Қысқа шашқа тірілік пен көлем береміз. Күнделікті өзіңіз қайталай алатындай кеңес береміз.' },
    { id: 12, img: '1522337360788-8b13dee7a37e', cat: 'daily',   len: 'long',   name: 'Тегіс жылтыр шаш', time: '45 минут', price: 12000,
      desc: 'Айнадай жылтыр, тіп-тік шаш. Ұзақ сақталатын, шашты ыстықтан қорғайтын өнімдермен жасаймыз.' },
    { id: 13, img: '1519014816548-bf5fe059798b', cat: 'kids',    len: 'medium', name: 'Кішкентай ханшайымның өрімі', time: '30 минут', price: 8000,
      desc: 'Балаға арналған нәзік өрім. Шаш тартылмайды, бала мазасызданбайды.' },
    { id: 14, img: '1607346256330-dee7af15f7c5', cat: 'kids',    len: 'long',   name: 'Мерекелік бұйралар', time: '40 минут', price: 10000,
      desc: 'Туған күнге, тұсаукесерге немесе мектептегі кешке арналған жұмсақ бұйралар.' },
    { id: 15, img: '1622286342621-4bd786c2447c', cat: 'men',     len: 'short',  name: 'Классикалық ерлер шаш қиюы', time: '45 минут', price: 7000,
      desc: 'Бүйірі қысқа, үсті ұзынырақ ұстамды шаш қию. Сәндеу мен жуу бағаға кіреді.' },
    { id: 16, img: '1503951914875-452162b0f3f1', cat: 'men',     len: 'short',  name: 'Күйеу жігіттің сәндеуі', time: '40 минут', price: 9000,
      desc: 'Той күніне арналған жинақы әрі жылтыр сәндеу. Сақал түзетуді қосуға болады.' }
  ];

  const POPULAR = [
    { img: '1529626455594-4ff0802cfb7e', name: 'Бұйра шаш',        note: 'Кез келген кешке лайық жұмсақ бұйралар',  ref: 5 },
    { img: '1580618672591-eb180b1a973f', name: 'Түйін',            note: 'Жеңіл әрі талғампаз жиналған шаш',      ref: 8 },
    { img: '1595476108010-b4d1f102b1b1', name: 'Өрім',             note: 'Нәзік әрі мықты ұсталатын өрімдер',      ref: 2 },
    { img: '1469334031218-e382a71b716b', name: 'Француз түйіні',   note: 'Уақыт өтсе де сәнін жоғалтпайтын үлгі',  ref: 3 },
    { img: '1487412947147-5cebf100ffc2', name: 'Голливуд толқыны', note: 'Кино жұлдыздарындай жылтыр толқындар',   ref: 4 },
    { img: '1515377905703-c4788e51af15', name: 'Төмен құйрық',     note: 'Қарапайымдылықтың нағыз сұлулығы',       ref: 6 }
  ];

  const group = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const fmt = n => group(n) + ' ₸';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ===== Таңдаулылар ===== */
  const FAV_KEY = 'hs-favorites';
  let favs;
  try { favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY)) || []); } catch { favs = new Set(); }
  const saveFavs = () => { try { localStorage.setItem(FAV_KEY, JSON.stringify([...favs])); } catch {} };

  const HEART_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.6 4.5c2.1 0 3.6 1.2 4.4 2.5.8-1.3 2.3-2.5 4.4-2.5 3.6 0 5.7 3.8 4.2 7.2C19.5 16.4 12 21 12 21z"/></svg>';

  function updateFavUI() {
    const n = favs.size;
    $('#favNum').textContent = n;
    $('#favCounter').classList.toggle('has-items', n > 0);
    $$('.heart[data-id]').forEach(h => setHeart(h, favs.has(+h.dataset.id)));
    if (lbIndex > -1) setHeart($('#lbHeart'), favs.has(visible()[lbIndex]?.id));
  }
  function setHeart(btn, on) {
    btn.setAttribute('aria-pressed', on);
    const label = on ? 'Таңдаулылардан алып тастау' : 'Таңдаулыларға қосу';
    btn.setAttribute('aria-label', label);
    btn.title = label;
  }
  function toggleFav(id, btn) {
    if (favs.has(id)) { favs.delete(id); toast('Таңдаулылардан алынды'); }
    else { favs.add(id); toast('Таңдаулыларға қосылды ♥'); }
    saveFavs();
    btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
    const c = $('#favCounter'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
    updateFavUI();
    if (state.cat === 'fav') applyFilters();
  }

  /* ===== Toast ===== */
  let toastT;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('is-show');
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove('is-show'), 2200);
  }

  /* ===== Lazy-load ===== */
  const imgIO = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const img = e.target;
          img.src = img.dataset.src;
          if (img.dataset.srcset) img.srcset = img.dataset.srcset;
          obs.unobserve(img);
        });
      }, { rootMargin: '300px 0px' })
    : null;
  function lazy(img) {
    img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
    if (imgIO) imgIO.observe(img); else { img.src = img.dataset.src; }
  }

  /* ===== Каталог ===== */
  const grid = $('#grid');
  const state = { cat: 'all', len: 'all' };

  function renderGrid() {
    grid.innerHTML = STYLES.map(s => `
      <article class="card" data-id="${s.id}" data-cat="${s.cat}" data-len="${s.len}" tabindex="0"
               role="button" aria-label="${s.name}: толық көру">
        <img class="warm" data-src="${U(s.img, 600, 800)}"
             data-srcset="${U(s.img, 400, 533)} 400w, ${U(s.img, 600, 800)} 600w, ${U(s.img, 900, 1200)} 900w"
             sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
             alt="${s.name}" decoding="async">
        <button class="heart" data-id="${s.id}" aria-pressed="false">${HEART_SVG}</button>
        <div class="card__info">
          <span class="card__name">${s.name}</span>
          <span class="card__meta">${CATS[s.cat]} · ${fmt(s.price)}</span>
        </div>
      </article>`).join('');
    $$('img', grid).forEach(lazy);
  }

  const visible = () => STYLES.filter(s =>
    (state.cat === 'all' || (state.cat === 'fav' ? favs.has(s.id) : s.cat === state.cat)) &&
    (state.len === 'all' || s.len === state.len));

  function applyFilters() {
    const ids = new Set(visible().map(s => s.id));
    $$('.card', grid).forEach(c => {
      const show = ids.has(+c.dataset.id);
      if (show && c.classList.contains('is-hidden')) {
        c.style.animation = 'none'; void c.offsetWidth; c.style.animation = '';
      }
      c.classList.toggle('is-hidden', !show);
    });
    const empty = $('#gridEmpty');
    empty.hidden = ids.size > 0;
    empty.textContent = state.cat === 'fav' && favs.size === 0
      ? 'Таңдаулыларыңыз әзірге бос. Ұнаған суреттегі жүрекшені басыңыз.'
      : 'Бұл сүзгі бойынша әзірге шаш үлгісі табылмады. Басқа санатты таңдап көріңіз.';
  }

  function bindGroup(selector, key, attr) {
    $$(selector).forEach(b => b.addEventListener('click', () => {
      $$(selector).forEach(x => { x.classList.remove('is-active'); x.setAttribute('aria-pressed', 'false'); });
      b.classList.add('is-active'); b.setAttribute('aria-pressed', 'true');
      state[key] = b.dataset[attr];
      applyFilters();
    }));
  }

  grid.addEventListener('click', e => {
    const heart = e.target.closest('.heart');
    if (heart) { e.stopPropagation(); toggleFav(+heart.dataset.id, heart); return; }
    const card = e.target.closest('.card');
    if (card) openLightbox(+card.dataset.id);
  });
  grid.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) {
      e.preventDefault(); openLightbox(+e.target.dataset.id);
    }
  });

  /* Таңдаулылар санауышын басқанда — таңдаулылар сүзгісі */
  $('#favCounter').addEventListener('click', () => {
    setTimeout(() => $('.chip[data-cat="fav"]').click(), 50);
  });

  /* ===== Lightbox ===== */
  const lb = $('#lightbox');
  let lbIndex = -1, lastFocus = null;

  function openLightbox(id) {
    const list = visible();
    lbIndex = list.findIndex(s => s.id === id);
    if (lbIndex < 0) { state.cat = 'all'; state.len = 'all'; lbIndex = STYLES.findIndex(s => s.id === id); }
    lastFocus = document.activeElement;
    fillLightbox();
    lb.hidden = false;
    document.body.classList.add('no-scroll');
    $('#lbClose').focus();
  }
  function fillLightbox() {
    const list = visible().length ? visible() : STYLES;
    const s = list[lbIndex];
    if (!s) return;
    const img = $('#lbImg');
    img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
    img.src = U(s.img, 1400, 1700);
    img.alt = s.name;
    $('#lbCat').textContent = CATS[s.cat];
    $('#lbTitle').textContent = s.name;
    $('#lbDesc').textContent = s.desc;
    $('#lbName').textContent = s.name;
    $('#lbLen').textContent = LENS[s.len];
    $('#lbTime').textContent = s.time;
    $('#lbPrice').textContent = fmt(s.price);
    const h = $('#lbHeart'); h.dataset.lbid = s.id; setHeart(h, favs.has(s.id));
    $('#lbBook').dataset.style = s.id;
    const multi = list.length > 1;
    $('#lbPrev').hidden = !multi; $('#lbNext').hidden = !multi;
  }
  function closeLightbox() {
    lb.hidden = true; lbIndex = -1;
    document.body.classList.remove('no-scroll');
    lastFocus?.focus();
  }
  function stepLightbox(d) {
    const n = (visible().length || STYLES.length);
    lbIndex = (lbIndex + d + n) % n;
    fillLightbox();
  }

  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', () => stepLightbox(-1));
  $('#lbNext').addEventListener('click', () => stepLightbox(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  $('#lbHeart').addEventListener('click', e => {
    const id = +e.currentTarget.dataset.lbid;
    const keepIndex = lbIndex;
    toggleFav(id, e.currentTarget);
    if (state.cat === 'fav') {
      if (!visible().length) { closeLightbox(); return; }
      lbIndex = Math.min(keepIndex, visible().length - 1);
      fillLightbox();
    }
  });
  $('#lbBook').addEventListener('click', e => {
    $('#fStyle').value = e.currentTarget.dataset.style;
    closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
    if (e.key === 'Tab') {
      const f = $$('button:not([hidden]), a[href]', lb);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Свайп */
  let sx = null;
  lb.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 60) stepLightbox(dx < 0 ? 1 : -1);
    sx = null;
  });

  /* ===== Слайдер ===== */
  const slider = $('#slider');
  slider.innerHTML = POPULAR.map((p, i) => `
    <article class="slide" data-ref="${p.ref}" tabindex="0" role="button" aria-label="${p.name}: толық көру">
      <img class="warm" data-src="${U(p.img, 700, 875)}" alt="${p.name}" decoding="async">
      <button class="heart" data-id="${p.ref}" aria-pressed="false">${HEART_SVG}</button>
      <div class="slide__cap">
        <span class="slide__num">0${i + 1} / 0${POPULAR.length}</span>
        <h3>${p.name}</h3>
        <p>${p.note}</p>
      </div>
    </article>`).join('');
  $$('img', slider).forEach(lazy);

  const dots = $('#slDots');
  dots.innerHTML = POPULAR.map((p, i) => `<button aria-label="${i + 1}-слайд"></button>`).join('');
  const slides = $$('.slide', slider);
  const slideStep = () => slides[1].offsetLeft - slides[0].offsetLeft;
  const goTo = i => slider.scrollTo({ left: slides[Math.max(0, Math.min(i, slides.length - 1))].offsetLeft - slides[0].offsetLeft, behavior: 'smooth' });
  const current = () => Math.round(slider.scrollLeft / slideStep());

  function syncDots() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    let i = current();
    if (slider.scrollLeft >= maxScroll - 4) i = slides.length - 1;
    $$('button', dots).forEach((d, k) => d.classList.toggle('is-active', k === i));
  }
  slider.addEventListener('scroll', () => requestAnimationFrame(syncDots), { passive: true });
  $$('button', dots).forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  $('#slPrev').addEventListener('click', () => goTo(current() - 1));
  $('#slNext').addEventListener('click', () => {
    const atEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 4;
    goTo(atEnd ? 0 : current() + 1);
  });
  slider.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current() + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current() - 1); }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('slide')) {
      e.preventDefault(); openFromSlide(e.target);
    }
  });
  function openFromSlide(slide) {
    state.cat = 'all'; state.len = 'all';
    $$('.chip').forEach(c => c.classList.toggle('is-active', c.dataset.cat === 'all'));
    $$('.len-btn').forEach(c => c.classList.toggle('is-active', c.dataset.len === 'all'));
    applyFilters();
    openLightbox(+slide.dataset.ref);
  }
  slider.addEventListener('click', e => {
    const heart = e.target.closest('.heart');
    if (heart) { e.stopPropagation(); toggleFav(+heart.dataset.id, heart); return; }
    const slide = e.target.closest('.slide');
    if (slide) openFromSlide(slide);
  });

  /* Автоайналдыру (тінтуір үстінде тұрса тоқтайды) */
  let auto = setInterval(tick, 5000);
  function tick() {
    if (document.hidden || !lb.hidden) return;
    const atEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 4;
    goTo(atEnd ? 0 : current() + 1);
  }
  ['pointerenter', 'touchstart', 'focusin'].forEach(ev =>
    slider.addEventListener(ev, () => { clearInterval(auto); auto = null; }, { passive: true }));
  slider.addEventListener('pointerleave', () => { if (!auto) auto = setInterval(tick, 5000); });

  /* ===== Мәзір ===== */
  const header = $('#header'), nav = $('#nav'), burger = $('#burger');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Мәзірді жабу' : 'Мәзірді ашу');
    document.body.classList.toggle('no-scroll', open);
  }
  burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  $$('.nav__link').forEach(a => a.addEventListener('click', () => setMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth >= 1024) setMenu(false); });

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Белсенді бөлім */
  const links = $$('.nav__link');
  const secIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      let id = e.target.id;
      if (id === 'popular') id = 'catalog';
      if (id === 'booking') id = 'contacts';
      links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['home', 'catalog', 'popular', 'services', 'master', 'reviews', 'booking', 'contacts']
    .forEach(id => { const el = document.getElementById(id); if (el) secIO.observe(el); });

  /* ===== Айналдыру анимациясы ===== */
  const revIO = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-visible');
      obs.unobserve(e.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el, i) => {
    const sib = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    el.style.transitionDelay = `${Math.min(sib.indexOf(el), 5) * 90}ms`;
    revIO.observe(el);
  });

  /* Сандарды санау */
  const cntIO = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count, t0 = performance.now(), dur = 1600;
      const step = t => {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = group(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: .6 });
  $$('[data-count]').forEach(el => cntIO.observe(el));

  /* ===== Форма ===== */
  const form = $('#bookingForm');
  const sel = $('#fStyle');
  sel.insertAdjacentHTML('beforeend',
    Object.entries(CATS).map(([k, label]) =>
      `<optgroup label="${label}">` +
      STYLES.filter(s => s.cat === k).map(s => `<option value="${s.id}">${s.name}</option>`).join('') +
      '</optgroup>').join('') +
    '<option value="other">Шебермен бірге таңдаймын</option>');

  const dateIn = $('#fDate');
  const todayISO = () => {
    const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  };
  dateIn.min = todayISO();

  /* Телефон маскасы: +7 (7XX) XXX-XX-XX */
  const phone = $('#fPhone');
  phone.addEventListener('input', () => {
    let d = phone.value.replace(/\D/g, '');
    if (d.startsWith('8')) d = '7' + d.slice(1);
    if (!d.startsWith('7')) d = '7' + d;
    d = d.slice(0, 11);
    const p = d.slice(1);
    let out = '+7';
    if (p.length) out += ' (' + p.slice(0, 3);
    if (p.length >= 3) out += ')';
    if (p.length > 3) out += ' ' + p.slice(3, 6);
    if (p.length > 6) out += '-' + p.slice(6, 8);
    if (p.length > 8) out += '-' + p.slice(8, 10);
    phone.value = out;
  });

  const rules = {
    name: v => !v.trim() ? 'Атыңызды жазыңыз' : v.trim().length < 2 ? 'Аты тым қысқа' : '',
    phone: v => !v ? 'Телефон нөміріңізді енгізіңіз' : v.replace(/\D/g, '').length !== 11 ? 'Нөмірді толық енгізіңіз' : '',
    style: v => !v ? 'Шаш үлгісін таңдаңыз' : '',
    date: v => !v ? 'Күнді таңдаңыз' : v < todayISO() ? 'Өткен күнді таңдауға болмайды' : ''
  };
  function check(input) {
    const rule = rules[input.name];
    if (!rule) return true;
    const msg = rule(input.value);
    const f = input.closest('.field');
    f.classList.toggle('has-error', !!msg);
    $('.field__err', f).textContent = msg;
    input.setAttribute('aria-invalid', !!msg);
    return !msg;
  }
  $$('input, select', form).forEach(i => {
    i.addEventListener('blur', () => check(i));
    i.addEventListener('input', () => { if (i.closest('.field').classList.contains('has-error')) check(i); });
    i.addEventListener('change', () => { if (i.closest('.field').classList.contains('has-error')) check(i); });
  });

  function summary() {
    const d = Object.fromEntries(new FormData(form));
    const style = sel.value ? sel.options[sel.selectedIndex].text : '';
    const date = d.date ? d.date.split('-').reverse().join('.') : '';
    return [
      'Сәлеметсіз бе! Шаш үлгісіне жазылғым келеді.',
      d.name && `Атым: ${d.name}`,
      d.phone && `Телефон: ${d.phone}`,
      style && `Шаш үлгісі: ${style}`,
      date && `Күні: ${date}`,
      d.message && `Пікір: ${d.message}`
    ].filter(Boolean).join('\n');
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = $$('input[name], select[name]', form).map(check).every(Boolean);
    if (!ok) { $('.has-error input, .has-error select', form)?.focus(); return; }
    // Мұнда өтінімді серверге жіберу логикасы қосылады
    $('#formSuccess').hidden = false;
    setTimeout(() => { form.reset(); $('#formSuccess').hidden = true; }, 5000);
  });

  const WA = '77771234567', TG = 'hairstyle_studio_kz';
  $('#waBtn').addEventListener('click', e => {
    e.currentTarget.href = `https://wa.me/${WA}?text=${encodeURIComponent(summary())}`;
  });
  $('#tgBtn').addEventListener('click', e => {
    e.currentTarget.href = `https://t.me/${TG}?text=${encodeURIComponent(summary())}`;
  });

  $('#year').textContent = new Date().getFullYear();

  /* ===== Іске қосу ===== */
  renderGrid();
  bindGroup('.chip', 'cat', 'cat');
  bindGroup('.len-btn', 'len', 'len');
  applyFilters();
  updateFavUI();
  syncDots();
})();
