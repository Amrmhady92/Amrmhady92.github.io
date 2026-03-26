/* ==============================================
   GAME PORTFOLIO — SCRIPT
   Amr Saleh
   ============================================== */

/* ── Project data → data/projects.js ──────── */
/* window.PROJECTS_DATA is loaded by data/projects.js (see index.html) */
/*
const PROJECTS_LEGACY = {
  highstreet: {
    title: 'Highstreet Calamity',
    period: '07/2023 — 04/2026',
    role: 'Senior Unity Developer · Highstreet',
    gradient: 'linear-gradient(135deg,#667eea,#764ba2)',
    desc: 'A multiplayer VR experience featuring a scalable locomotion system with over 10 movement modes — grounded movement, crouch, crawl, climbing, jumping, sliding, wall running, gliding, grappling hook, and VR swimming. Led the tech team, managed server infrastructure, and built real-time gameplay using Netcode for Entities.',
    tech: ['Unity3D','C#','Netcode for Entities','DOTS','AWS GameLift','Multiplay','VR','Node.js'],
    highlights: [
      'Scalable Locomotion system (Strategy pattern) with 10+ movement modes',
      'Led tech team: codebase ownership and pull request reviews',
      'Managed Multiplay \u2192 AWS GameLift server migration',
      'Backend server maintenance with Node.js',
      'Coordinated workflow across designers, artists, and developers'
    ],
    links: [
      { label:'VIEW GAME',   icon:'fas fa-external-link-alt', url:'https://www.highstreet.xyz' },
      { label:'SOURCE CODE', icon:'fab fa-github',            url:'https://github.com/Amrmhady92' }
    ]
  },
  hexgrid: {
    title: 'Hex Grid Builder',
    period: '2022',
    role: 'Personal Project',
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    desc: 'A flexible Unity3D grid building tool supporting square, 3D square, and hexagonal grids with full neighbour detection. Designed as a reusable developer utility for strategy games, board games, and any grid-based system.',
    tech: ['Unity3D','C#','Algorithms','Editor Tooling'],
    highlights: [
      'Square, 3D-square, and hexagonal grid types in one unified API',
      'Full neighbour detection for all grid types',
      'Designed for strategy, RPG, and board game prototyping'
    ],
    links: [{ label:'VIEW ON GITHUB', icon:'fab fa-github', url:'https://github.com/Amrmhady92' }]
  },
  lotn: {
    title: 'Lord of the Nerds',
    period: '2017',
    role: 'Lead Developer · ITI Graduation Project',
    gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)',
    desc: 'A VR game for Oculus Rift and HTC VIVE developed with Unity3D and C# as the ITI Game Development track graduation project. Won 5th place nationally at Microsoft Imagine Cup 2017 and 3rd place at Global Game Jam 2017.',
    tech: ['Unity3D','C#','Oculus SDK','HTC VIVE','VR'],
    highlights: [
      'Microsoft Imagine Cup 2017 — 5th place nationally',
      'Global Game Jam 2017 — Voted 3rd place',
      'ITI Game Development track graduation project'
    ],
    links: [{ label:'VIEW ON GITHUB', icon:'fab fa-github', url:'https://github.com/Amrmhady92' }]
  },
  gomoku: {
    title: 'Gomoku AI',
    period: '2020',
    role: 'University Project · Uppsala University',
    gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)',
    desc: "A 3D Gomoku (Five in a Row) implementation in Unity3D featuring an AI opponent using game tree search. Developed as part of the AI Programming for Games courses (15 credits) at Uppsala University, Visby.",
    tech: ['Unity3D','C#','Game AI','Minimax','Alpha-Beta Pruning'],
    highlights: [
      '3D board game environment in Unity',
      'AI opponent with configurable difficulty',
      'Part of AI Programming for Games at Uppsala University (15 credits)'
    ],
    links: [{ label:'VIEW ON GITHUB', icon:'fab fa-github', url:'https://github.com/Amrmhady92' }]
  },
  habtic: {
    title: 'Habtic Content Builder',
    period: '11/2021 — 05/2023',
    role: 'Unity Developer · Dephion B.V.',
    gradient: 'linear-gradient(135deg,#fa709a,#fee140)',
    desc: "A Unity-based content authoring tool used to create content for the Habtic mobile app. Took full ownership of the application, implemented its UI using Unity's new UI Toolkit, maintained the Habtic app, created mini-games for user engagement, and conducted app testing.",
    tech: ['Unity3D','C#','Unity UI Toolkit','Mobile'],
    highlights: [
      'Full ownership of the Unity Content Builder application',
      "UI implementation using Unity's new UI Toolkit",
      'Mini-game creation to increase user engagement',
      'Bug fixing and feature delivery for the Habtic mobile app'
    ],
    links: [{ label:'DEPHION B.V.', icon:'fas fa-external-link-alt', url:'https://www.dephion.nl' }]
  },
  gol: {
    title: 'Game of Life 3D',
    period: '2020',
    role: 'University Project · Uppsala University',
    gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    desc: "Conway's Game of Life rendered in full 3D using Unity3D. Each cell is a 3D object, creating a spatially rich cellular automata simulation. Developed as part of the AI Programming for Games coursework at Uppsala University.",
    tech: ['Unity3D','C#','Cellular Automata','Simulation'],
    highlights: [
      '3D spatial visualisation of cellular automata',
      'Configurable rules and grid size',
      'Part of AI Programming for Games coursework'
    ],
    links: [{ label:'VIEW ON GITHUB', icon:'fab fa-github', url:'https://github.com/Amrmhady92' }]
  }
}; */

/* ── Helpers ───────────────────────────────── */
const $  = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

/* ── Card Rendering (from window.PROJECTS_DATA) ── */
function renderCards(data) {
  const grid = $('#projGrid');
  if (!grid) return;
  grid.innerHTML = '';
  data.forEach((p, i) => {
    const num  = String(i + 1).padStart(2, '0');
    const tags = (p.tags || []).map(t => `<span class="ptag ${t.cls}">${t.label}</span>`).join('');
    const el   = document.createElement('article');
    el.className       = 'pcard';
    el.dataset.cat     = p.category || 'all';
    el.dataset.proj    = p.id;
    el.innerHTML = `
      <div class="pc-thumb" style="--g:${p.gradient}">
        <span class="pc-num">${num}</span>
        <div class="pc-ov"><button class="pc-btn">SELECT MISSION</button></div>
      </div>
      <div class="pc-body">
        <div class="pc-tags">${tags}</div>
        <h3 class="pc-title">${p.title}</h3>
        <p class="pc-desc">${p.cardDesc}</p>
      </div>`;
    grid.appendChild(el);
  });
}

/* ── Media helpers (used by Steam-style modal) ── */
function buildViewerHtml(m) {
  if (m.type === 'youtube') {
    const thumb = `https://img.youtube.com/vi/${m.id}/hqdefault.jpg`;
    /* On file:// protocol YouTube iframes are blocked (Error 153).
     * Show a thumbnail link that opens YouTube in a new tab instead. */
    if (window.location.protocol === 'file:') {
      return `<a class="ms-yt-poster" href="https://www.youtube.com/watch?v=${m.id}"
        target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
        <img src="${thumb}" alt="">
        <div class="ms-yt-play"><i class="fas fa-play"></i><span>WATCH ON YOUTUBE</span></div>
      </a>`;
    }
    /* On http/https: show thumbnail poster, load iframe with autoplay on click. */
    return `<div class="ms-yt-poster" data-ytid="${m.id}">
      <img src="${thumb}" alt="">
      <div class="ms-yt-play"><i class="fas fa-play"></i></div>
    </div>`;
  }
  if (m.type === 'image') {
    return `<img src="${m.url}" alt="${m.alt || ''}" loading="lazy">`;
  }
  return '';
}

/* Attach click-to-play handlers to any YouTube poster divs inside container. */
function attachPosterHandlers(container) {
  $$('.ms-yt-poster[data-ytid]', container).forEach(poster => {
    poster.addEventListener('click', () => {
      const id = poster.dataset.ytid;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`;
      iframe.allow = 'accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture';
      iframe.allowFullscreen = true;
      poster.replaceWith(iframe);
    });
  });
}

function buildThumbHtml(m, active) {
  const cls   = active ? ' active' : '';
  const thumb = m.type === 'youtube'
    ? `<img src="https://img.youtube.com/vi/${m.id}/mqdefault.jpg" alt="" loading="lazy">`
    : `<img src="${m.url}" alt="" loading="lazy">`;
  const play  = m.type === 'youtube'
    ? `<div class="ms-tp"><i class="fas fa-play"></i></div>` : '';
  const label = m.label
    ? `<span class="ms-tl">${m.label}</span>` : '';
  return `<div class="ms-thumb${cls}">${thumb}${play}${label}</div>`;
}

/* ── Loading Screen ────────────────────────── */
function initLoader() {
  document.body.style.overflow = 'hidden';
  const fill   = $('#lsFill');
  const pct    = $('#lsPct');
  const status = $('#lsStatus');
  const screen = $('#loadingScreen');

  const msgs = [
    'CHARTING THE DESERT...',
    'CROSSING THE SANDS...',
    'FINDING THE OASIS...',
    'ALMOST THERE...',
    'WELCOME'
  ];

  let val = 0;
  const tick = setInterval(() => {
    val = Math.min(val + Math.random() * 10 + 2, 100);
    const p = Math.floor(val);
    fill.style.width  = p + '%';
    pct.textContent   = p + '%';
    status.textContent = msgs[Math.min(Math.floor((p / 100) * (msgs.length - 1)), msgs.length - 1)];

    if (val >= 100) {
      clearInterval(tick);
      fill.style.width  = '100%';
      pct.textContent   = '100%';
      status.textContent = 'READY';
      setTimeout(() => {
        screen.classList.add('out');
        document.body.style.overflow = '';
        runHeroEntrance();
      }, 600);
    }
  }, 55);
}

/* ── Three.js starfield background ────────── */
function initBackground() {
  const canvas = $('#bgCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = window.innerWidth, H = window.innerHeight;
  const isMobile = W < 768;

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);

  /*
   * Build a 64×64 canvas texture: bright white-blue centre fading to
   * transparent. Used as a sprite map so every star is a round glowing
   * sphere instead of the default square billboard.
   */
  function makeStarTexture() {
    const sz = 64;
    const c  = document.createElement('canvas');
    c.width  = sz;
    c.height = sz;
    const ctx = c.getContext('2d');
    const r   = sz / 2;
    const grd = ctx.createRadialGradient(r, r, 0, r, r, r);
    grd.addColorStop(0.00, 'rgba(255, 245, 210, 1.0)');  /* warm bright core  */
    grd.addColorStop(0.15, 'rgba(240, 210, 140, 0.85)'); /* golden inner glow */
    grd.addColorStop(0.45, 'rgba(200, 155,  70, 0.28)'); /* amber halo        */
    grd.addColorStop(1.00, 'rgba(  0,   0,   0, 0.0)');  /* transparent edge  */
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, sz, sz);
    return new THREE.CanvasTexture(c);
  }

  const starTex = makeStarTexture();

  /*
   * Two layers of stars give a sense of depth:
   *   bg — many small, very dim stars (distant field)
   *   fg — fewer slightly larger, softly brighter stars (closer field)
   * AdditiveBlending makes overlapping halos brighten naturally on the
   * dark background without any z-order artefacts.
   */
  function makeLayer(count, size, baseOpacity, spread) {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 2); /* only x/y drift */
    const phase = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random() - 0.5) * spread;
      pos[i*3+1] = (Math.random() - 0.5) * spread * 0.6;
      pos[i*3+2] = (Math.random() - 0.5) * 10;
      vel[i*2]   = (Math.random() - 0.5) * 0.0025;
      vel[i*2+1] = (Math.random() - 0.5) * 0.0018;
      phase[i]   = Math.random() * Math.PI * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      size,
      map:        starTex,
      color:      0xffeebb,  /* warm desert gold-white */
      transparent: true,
      opacity:    baseOpacity,
      sizeAttenuation: true,
      depthWrite: false,                  /* avoids z-fighting with transparency */
      blending:   THREE.AdditiveBlending  /* halos add light → natural glow      */
    });
    scene.add(new THREE.Points(geo, mat));
    return { geo, mat, pos, vel, phase, count, baseOpacity };
  }

  const bgCount = isMobile ? 90  : 200;
  const fgCount = isMobile ? 35  : 80;
  const bg = makeLayer(bgCount, isMobile ? 0.35 : 0.55, 0.20, 72);
  const fg = makeLayer(fgCount, isMobile ? 0.60 : 0.90, 0.38, 60);

  /* mouse parallax — fg moves slightly faster than bg */
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  let rafId, t = 0;

  function tickLayer(layer, parallaxScale) {
    const { pos, vel, count } = layer;
    const bx = 36, by = 22;
    for (let i = 0; i < count; i++) {
      pos[i*3]   += vel[i*2];
      pos[i*3+1] += vel[i*2+1];
      /* wrap at edges instead of bouncing — smoother for a starfield */
      if (pos[i*3]   >  bx) pos[i*3]   = -bx;
      if (pos[i*3]   < -bx) pos[i*3]   =  bx;
      if (pos[i*3+1] >  by) pos[i*3+1] = -by;
      if (pos[i*3+1] < -by) pos[i*3+1] =  by;
    }
    layer.geo.attributes.position.needsUpdate = true;
  }

  function animate() {
    rafId = requestAnimationFrame(animate);
    t += 0.006;

    tickLayer(bg);
    tickLayer(fg);

    /* gentle per-layer twinkle — opacity breathes subtly */
    bg.mat.opacity = bg.baseOpacity + Math.sin(t * 0.7) * 0.04;
    fg.mat.opacity = fg.baseOpacity + Math.sin(t * 0.9 + 1.2) * 0.06;

    /* very soft camera drift following mouse — fg moves 2× bg */
    camera.position.x += (mx * 0.8 - camera.position.x) * 0.02;
    camera.position.y += (-my * 0.6 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
  animate();

  /* pause renderer when hero is off-screen */
  const heroObs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { if (!rafId) animate(); }
    else { cancelAnimationFrame(rafId); rafId = null; }
  });
  heroObs.observe($('#home'));

  /* resize */
  window.addEventListener('resize', () => {
    const nw = window.innerWidth, nh = window.innerHeight;
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
    renderer.setSize(nw, nh);
  });
}

/* ── Custom Cursor ─────────────────────────── */
function initCursor() {
  const dot  = $('#curDot');
  const ring = $('#curRing');
  if (!dot || !ring) return;

  let tx = 0, ty = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    dot.style.left = tx + 'px';
    dot.style.top  = ty + 'px';
  });

  (function trackRing() {
    rx += (tx - rx) * 0.11;
    ry += (ty - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(trackRing);
  })();

  const hoverSel = 'a, button, .fbtn, .mi, .pc-btn, .badge, .nav-tog, .modal-close';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverSel)) { dot.classList.add('hov'); ring.classList.add('hov'); }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverSel)) { dot.classList.remove('hov'); ring.classList.remove('hov'); }
  });
}

/* ── Navbar ────────────────────────────────── */
function initNavbar() {
  const navbar = $('#navbar');
  const tog    = $('#navTog');
  const menu   = $('#navMenu');
  const links  = $$('.nav-lnk');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveLink();
  }, { passive: true });

  tog.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    tog.classList.toggle('open', open);
    tog.setAttribute('aria-expanded', String(open));
  });

  links.forEach(l => l.addEventListener('click', () => {
    menu.classList.remove('open');
    tog.classList.remove('open');
    tog.setAttribute('aria-expanded', 'false');
  }));

  function updateActiveLink() {
    const secs = $$('section[id]');
    let cur = '';
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 180) cur = s.id; });
    links.forEach(l => l.classList.toggle('active', l.dataset.s === cur));
  }

  /* Set correct active link on first paint, not just on scroll */
  updateActiveLink();
}

/* ── Smooth scroll ─────────────────────── */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      /* Guard: bare "#" has no target — prevent the default scroll-to-top */
      if (!href || href === '#') { e.preventDefault(); return; }
      const t = $(href);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* ── Scroll Reveal (IntersectionObserver) ──── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        const el = e.target;
        const delay = parseFloat(el.dataset.delay || 0);
        setTimeout(() => el.classList.add('vis'), delay * 1000);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  /* Assign staggered delays and observe */
  $$('.tl-item').forEach((el, i)   => { el.dataset.delay = i * 0.12; obs.observe(el); });
  $$('.pcard').forEach((el, i)     => { el.dataset.delay = (i % 3) * 0.1; obs.observe(el); });
  $$('.skbar').forEach((el, i)     => { el.dataset.delay = i * 0.08; obs.observe(el); });
  $$('.badge').forEach((el, i)     => { el.dataset.delay = (i % 6) * 0.06; obs.observe(el); });
  $$('.ccard').forEach((el, i)     => { el.dataset.delay = i * 0.12; obs.observe(el); });
}

/* ── Stat counters ─────────────────────────── */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || e.target.dataset.counted) return;
      e.target.dataset.counted = '1';
      const numEl  = e.target.querySelector('.cn');
      const target = parseInt(e.target.dataset.count, 10);
      const sfx    = e.target.dataset.sfx || '';
      let cur = 0;
      const step = target / 36;
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        numEl.textContent = Math.floor(cur);
        if (cur >= target) { numEl.textContent = target; clearInterval(t); }
      }, 38);
    });
  }, { threshold: 0.6 });
  $$('.stat-card').forEach(el => obs.observe(el));
}

/* ── Skill bar fill ────────────────────────── */
function initSkillBars() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const fill = e.target.querySelector('.skfill');
      if (fill) setTimeout(() => { fill.style.width = fill.dataset.w + '%'; }, 200);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  $$('.skbar').forEach(el => obs.observe(el));
}

/* ── Project filter ────────────────────────── */
function initFilter() {
  const btns  = $$('.fbtn');
  const cards = $$('.pcard');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.f;

      cards.forEach((c, i) => {
        const match = f === 'all' || c.dataset.cat === f;
        if (match) {
          c.classList.remove('gone');
          /* re-trigger reveal with small stagger */
          c.classList.remove('vis');
          setTimeout(() => c.classList.add('vis'), i * 55);
        } else {
          c.classList.add('gone');
          c.classList.remove('vis');
        }
      });
    });
  });
}

/* ── Project Modal (Steam-style) ──────────── */
function initModal() {
  const modal    = $('#modal');
  const body     = $('#modalBody');
  const closeBtn = $('#modalClose');

  function open(id) {
    const data = window.PROJECTS_DATA || [];
    const p    = data.find(x => x.id === id);
    if (!p) return;

    const media      = p.media || [];
    const hasMedia   = media.length > 0;
    const hasMulti   = media.length > 1;

    /* ── media section ── */
    let mediaHtml;
    if (hasMedia) {
      const thumbs = hasMulti
        ? `<div class="ms-thumbs">${media.map((m, i) => buildThumbHtml(m, i === 0)).join('')}</div>`
        : '';
      mediaHtml = `<div class="ms-media">
        <div class="ms-viewer" id="msViewer">${buildViewerHtml(media[0])}</div>
        ${thumbs}
      </div>`;
    } else {
      /* gradient banner when no media yet */
      mediaHtml = `<div class="ms-banner" style="background:${p.gradient}"></div>`;
    }

    /* ── content ── */
    const tags  = (p.tech   || []).map(t => `<span class="ms-tag">${t}</span>`).join('');
    const items = (p.highlights || []).map(h => `<li>${h}</li>`).join('');
    const links = (p.links  || []).map(l =>
      `<a href="${l.url}" class="ms-lnk" target="_blank" rel="noopener noreferrer"><i class="${l.icon}"></i> ${l.label}</a>`
    ).join('');

    body.innerHTML = `
      <div class="ms-hd">
        <h2 class="ms-title">${p.title}</h2>
        <span class="ms-meta">${p.role}</span>
        <span class="ms-period">${p.period}</span>
      </div>
      ${mediaHtml}
      <div class="ms-body">
        <p class="ms-desc">${p.desc}</p>
        ${tags  ? `<span class="ms-lbl">// TECH STACK</span><div class="ms-tags">${tags}</div>` : ''}
        ${items ? `<span class="ms-lbl">// HIGHLIGHTS</span><ul class="ms-list">${items}</ul>` : ''}
        ${links ? `<div class="ms-links">${links}</div>` : ''}
      </div>`;

    /* attach click-to-play on the initial viewer */
    attachPosterHandlers(body);

    /* thumbnail click → switch viewer */
    if (hasMulti) {
      const thumbEls = $$('.ms-thumb', body);
      thumbEls.forEach((th, i) => {
        th.addEventListener('click', () => {
          thumbEls.forEach(t => t.classList.remove('active'));
          th.classList.add('active');
          $('#msViewer', body).innerHTML = buildViewerHtml(media[i]);
          attachPosterHandlers(body); /* re-attach for new poster */
        });
      });
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    /* stop any playing video after fade-out */
    setTimeout(() => { if (!modal.classList.contains('open')) body.innerHTML = ''; }, 350);
  }

  /* event delegation — works with dynamically rendered cards */
  $('#projGrid').addEventListener('click', e => {
    const card = e.target.closest('.pcard');
    if (card) open(card.dataset.proj);
  });

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── GSAP hero entrance (runs after loader) ── */
function runHeroEntrance() {
  if (typeof gsap === 'undefined') {
    /* Fallback: make elements visible if GSAP failed to load */
    ['.hero-eyebrow','.hn-first','.hn-last','.hero-deck','.mi','.cv-dl','.scroll-cta']
      .forEach(s => document.querySelectorAll(s).forEach(el => el.style.opacity = '1'));
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.fromTo('.hero-eyebrow', { opacity:0, y:14  }, { opacity:1, y:0, duration:.6 }, .1)
    .fromTo('.hn-first',     { opacity:0, x:-30 }, { opacity:1, x:0, duration:.7 }, .35)
    .fromTo('.hn-last',      { opacity:0, x:-30 }, { opacity:1, x:0, duration:.7 }, .52)
    .fromTo('.hero-deck',    { opacity:0, y:8   }, { opacity:1, y:0, duration:.6 }, .72)
    .fromTo('.mi',           { opacity:0, x:-18 }, { opacity:1, x:0, stagger:.1, duration:.5 }, .88)
    .fromTo('.cv-dl',        { opacity:0 },        { opacity:1, duration:.4 }, 1.38)
    .fromTo('.scroll-cta',   { opacity:0 },        { opacity:1, duration:.4 }, 1.52);
}

/* ── Boot ──────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  /* 1. Render project cards from data BEFORE observers/handlers are set up */
  if (window.PROJECTS_DATA) renderCards(window.PROJECTS_DATA);

  /* 2. Hide hero text so it doesn't flash before the loader completes */
  if (typeof gsap !== 'undefined') {
    gsap.set(['.hero-eyebrow','.hn-first','.hn-last','.hero-deck','.mi','.cv-dl','.scroll-cta'], { opacity: 0 });
  }

  initBackground();
  initCursor();
  initNavbar();
  initSmoothScroll();
  initReveal();    /* observes .pcard — cards are already in DOM */
  initCounters();
  initSkillBars();
  initFilter();    /* reads .pcard — cards are already in DOM */
  initModal();     /* uses event delegation on #projGrid */
  initLoader();    /* runs last so everything is ready before hiding loader */
});
