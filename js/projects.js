const projects = [
  {
    id: 1,
    slug: 'restaurant-de-la-tour',
    title: 'Restaurant de la Tour',
    category: 'web',
    year: 2026,
    shortDesc: "Site vitrine pour une winstub alsacienne à Turckheim. Design, développement & intégration multilingue.",
    longDesc: "Commande client pour le Restaurant de la Tour, winstub alsacienne fondée en 1923 à Turckheim. Direction artistique avec typographie gothique Deutsch Gothic, identité visuelle sobre et chaleureuse. Intégration trilingue FR/DE/EN pour une clientèle internationale, système de réservation, galerie photos et carte des menus. Réalisé en autonomie totale — de la maquette Figma au déploiement.",
    role: ['UI/UX design', 'développement', 'intégration'],
    tools: ['Figma', 'HTML/CSS', 'JavaScript'],
    context: ['commande client', 'site multilingue', 'Turckheim, Alsace'],
    liveUrl: 'https://emilebrenckle-cmyk.github.io/Restaurant-de-la-Tour/',
    cover: 'img/restaurant-screen-hero.png',
    detailImages: ['img/restaurant-screen-contact.png', 'img/restaurant-screen-menu.png'],
  },
  {
    id: 2,
    slug: 'silence-ca-tourne',
    title: 'Silence ça Tourne',
    category: 'design',
    year: 2025,
    shortDesc: "Création du logo, de la carte de visite et des mockups pour Silence ça Tourne, vidéaste monteur.",
    longDesc: "Commande directe pour Silence ça Tourne, vidéaste monteur indépendant. Parti pris graphique fort : mascotte loup au caractère expressif, logotype en noir absolu pour une polyvalence maximale. Livrables complets — logotype principal, déclinaisons monochrome et négatif, carte de visite recto/verso et mockups de mise en situation. Identité pensée pour durer, adaptable à tous les supports.",
    role: ['direction artistique', 'identité visuelle', 'print'],
    tools: ['Illustrator', 'Photoshop'],
    context: ['commande client', 'travail solo', '2025'],
    cover: 'img/sct-mockup-sign.jpg',
    detailImages: ['img/sct-mockup-card.jpg', 'img/sct-mockup-laptop.jpg'],
    liveUrl: 'https://acrobat.adobe.com/id/urn:aaid:sc:EU:8c5445cf-6f69-42df-b157-62fbf15af1cf',
    liveLabel: 'voir le PDF',
  },
  {
    id: 3,
    slug: 'logo-hecom',
    title: "Logo HECom'",
    category: 'design',
    year: 2025,
    shortDesc: "Création du logo et de la charte graphique pour HECom'. Direction artistique, identité visuelle, déclinaisons.",
    longDesc: "Commande associative pour HECom', association étudiante en communication. Création du logo et de la charte graphique complète en autonomie totale : symbole double chevron évoquant dynamisme et progression, typographie Montserrat Extra Bold, charte couleur bleu/blanc avec déclinaisons sur fond sombre, noir et monochrome. Dossier livré avec guide d'utilisation des déclinaisons.",
    role: ['direction artistique', 'identité visuelle', 'charte graphique'],
    tools: ['Illustrator', 'InDesign'],
    context: ['commande associative', 'travail solo', 'janvier 2025'],
    cover: 'img/hecom-cover.png',
    detailCover: "img/hecom'''.png",
    detailImages: ['img/hecom-variants.png', 'img/hecom-mockups.png'],
    imageFit: 'contain',
    liveUrl: 'https://acrobat.adobe.com/id/urn:aaid:sc:EU:b6e015db-09f1-4b46-b742-ff1e1faa6940',
    liveLabel: 'voir la charte',
  },
  {
    id: 4,
    slug: 'showreel-portfolio',
    title: 'Showreel BUT MMI',
    category: 'motion',
    year: 2025,
    shortDesc: "Montage de mes réalisations BUT MMI — animation typographique, 3D et vidéo, sur After Effects.",
    longDesc: "Showreel compilant trois ans de réalisations BUT MMI. Direction artistique de l'intro typographique animée — lettres multicolores en texture, timing précis sur la musique. Enchaînement fluide de séquences motion design, 3D et vidéo : chaque cut raconte une compétence. Monté et composité intégralement sur After Effects et Premiere Pro.",
    role: ['motion design', 'montage', 'direction artistique'],
    tools: ['After Effects', 'Premiere Pro'],
    context: ['projet personnel', 'BUT MMI', '2025'],
    cover: 'img/portfolio-motion-cover.png',
    detailImages: ['img/portfolio-motion-frame1.png', 'img/portfolio-motion-frame2.png'],
    liveUrl: 'https://youtu.be/OnyJZCEUcDk',
    liveLabel: 'voir le showreel',
  },
  {
    id: 5,
    slug: 'motion-exs',
    title: 'EXS — Motion Design',
    category: 'motion',
    year: 2025,
    shortDesc: "Animation en boucle d'un personnage expressif, réalisée sur After Effects dans le cadre des cours BUT MMI.",
    longDesc: "Motion design réalisé sur After Effects dans le cadre des cours BUT MMI. Animation en boucle d'un visage stylisé sur fond bleu électrique — travail sur les expressions, le rigging et la fluidité du mouvement.",
    role: ['motion design', 'animation', 'rigging'],
    tools: ['After Effects'],
    context: ['projet universitaire', 'BUT MMI', '2025'],
    cover: 'img/motion-exs-cover.png',
    detailImages: ['img/motion-exs-ae.png', 'img/motion-exs-render.png'],
    liveUrl: 'https://youtu.be/mj6iCVGw1z8',
    liveLabel: 'voir le motion',
  },
  {
    id: 6,
    slug: 'historia-motion',
    title: 'Historia — Motion Design',
    category: 'motion',
    year: 2025,
    shortDesc: "Générique animé pour un magazine d'histoire fictif. Typographie, sculptures antiques et motion éditorial.",
    longDesc: "Conception et animation du générique d'ouverture d'Historia, magazine télévisé fictif dédié à l'histoire antique. Direction artistique autour du contraste entre typographie sérif contemporaine et sculptures gréco-romaines, sur fond corail et fond sonore cinématographique.",
    role: ['motion design', 'direction artistique', 'animation'],
    tools: ['After Effects', 'Illustrator'],
    context: ['projet universitaire', 'BUT MMI', '2025'],
    cover: 'img/historia-cover.png',
    detailImages: ['img/historia-frame1.png', 'img/historia-frame2.png'],
    liveUrl: 'https://youtu.be/1RLIWMOLUVI',
    liveLabel: 'voir le motion',
  },
  {
    id: 7,
    slug: 'poulie-3d',
    title: 'Poulie — Animation 3D',
    category: '3d',
    year: 2025,
    shortDesc: "Animation 3D d'un mécanisme de poulie sur Blender — modélisation, rigging physique et rendu EEVEE.",
    longDesc: "Modélisation et animation d'un mécanisme de poulie dans Blender. Simulation de physique sur la corde et le poids, rendu EEVEE avec fond de grange reconstituée. Travail sur la mécanique d'animation et les contraintes d'objets.",
    role: ['modélisation 3D', 'animation', 'rendu'],
    tools: ['Blender'],
    context: ['projet universitaire', 'BUT MMI', '2025'],
    cover: 'img/poulie-render.png',
    detailImages: ['img/poulie-blender.png', 'img/poulie-wireframe.png'],
    liveUrl: 'https://youtu.be/kk8zivGgJtU',
    liveLabel: 'voir l\'animation',
  },
  {
    id: 8,
    slug: 'blender-3d',
    title: 'Scènes 3D',
    category: '3d',
    year: 2025,
    shortDesc: "Modélisation et rendu photoréaliste de natures mortes sur Blender — fruits, verres et glaçons.",
    longDesc: "Exercices de modélisation 3D réalisés dans le cadre des cours BUT MMI. Création de scènes photoréalistes sur Blender : natures mortes avec fruits, verres en verre et glaçons. Travail sur les matériaux, la lumière et le rendu cycles.",
    role: ['modélisation 3D', 'rendu', 'éclairage'],
    tools: ['Blender'],
    context: ['projet universitaire', 'BUT MMI', 'octobre 2025'],
    cover: 'img/blender-scene1.png',
    detailImages: ['img/blender-glacon.png', 'img/blender-water.png'],
  },
  {
    id: 9,
    slug: 'artcuisines-carte',
    title: 'Art Cuisines — Carte de visite',
    category: 'design',
    year: 2024,
    shortDesc: "Carte de visite recto/verso pour un architecte d'intérieur — déclinaisons fond sombre et blanc, format horizontal et vertical.",
    longDesc: "Conception de la carte de visite de David Iltis, CEO et architecte d'intérieur chez Art Cuisines (Mulhouse). Trois déclinaisons : fond navy, fond blanc et format vertical — même logique graphique sobre avec point rouge comme accent.",
    role: ['print', 'identité visuelle'],
    tools: ['Illustrator', 'InDesign'],
    context: ['stage Sandro Matera', 'Studio Graphique Web & Image', '2024'],
    cover: 'img/artcuisines-dark.png',
    detailImages: ['img/artcuisines-white.png', 'img/artcuisines-vertical.png'],
    liveUrl: 'https://acrobat.adobe.com/id/urn:aaid:sc:EU:a7c0f451-2be8-499b-923c-d8e354f30904',
    liveLabel: 'voir le PDF',
  },
  {
    id: 10,
    slug: 'boostez-votre-com',
    title: "Boostez Votre Com'",
    category: 'design',
    year: 2024,
    shortDesc: "Création du logo pour une offre communication du studio Sandro Matera — 4 déclinaisons couleur avec pictogrammes.",
    longDesc: "Conception du logotype \"Boostez Votre Com'\" dans le cadre de mon stage au studio Sandro Matera (Studio Graphique, Web & Image). Typographie impactante en italique gras, déclinaisons avec mégaphone ou fusée, coloris rose/navy et bleu/navy.",
    role: ['identité visuelle', 'logotype', 'déclinaisons'],
    tools: ['Illustrator', 'InDesign'],
    context: ['stage Sandro Matera', 'Studio Graphique Web & Image', '2024'],
    cover: 'img/bvc-cover.png',
    detailImages: ['img/bvc-logo-pink.png', 'img/bvc-logo-blue.png'],
    liveUrl: 'https://acrobat.adobe.com/id/urn:aaid:sc:EU:6c0b369e-96f0-4746-a29d-44abff036455?viewer%21megaVerb=group-discover',
    liveLabel: 'voir le PDF',
  },
  {
    id: 11,
    slug: 'maison-des-delices',
    title: 'Maison des Délices',
    category: 'web',
    year: 2024,
    shortDesc: "Webdesign pour un restaurant japonais fictif — hero sombre, carte filtrée, avis clients et carte Google.",
    longDesc: "Conception du design d'un site web pour la Maison des Délices, restaurant japonais fictif à Mulhouse. Interface sombre et élégante pour la page d'accueil, système de commande en ligne avec filtres par catégorie (Gyoza, Maki, Sashimi…), section avis clients et carte interactive.",
    role: ['UI/UX design', 'webdesign'],
    tools: ['Figma'],
    context: ['projet universitaire', 'BUT MMI', '2024'],
    cover: 'img/maison-delices-hero.png',
    detailImages: ['img/maison-delices-menu.png', 'img/maison-delices-avis.png'],
    liveUrl: 'https://www.figma.com/design/lvHfbQ24Bqfl2Fw0KcZQrI/Untitled?node-id=0-1&p=f',
    liveLabel: 'voir le design',
  },
  {
    id: 12,
    slug: 'graphiste-interview',
    title: 'Graphiste — En quoi ça consiste ?',
    category: 'vidéo',
    year: 2024,
    shortDesc: "Interview d'une graphiste — tournage, montage et étalonnage dans le cadre des cours BUT MMI.",
    longDesc: "Réalisation d'un mini-documentaire autour du métier de graphiste. Interview filmée en conditions réelles, b-roll dans l'atelier, montage rythmé et habillage typographique. Travail en équipe sur l'ensemble de la chaîne de production vidéo.",
    role: ['réalisation', 'cadre', 'montage', 'étalonnage'],
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    context: ['projet universitaire', 'BUT MMI', '2024'],
    cover: 'img/graphiste-titre.png',
    detailImages: ['img/graphiste-interview.png', 'img/graphiste-broll.png'],
    liveUrl: 'https://www.youtube.com/watch?v=b9OmzJ761cU',
    liveLabel: 'voir la vidéo',
  },
];

const CATEGORY_LABELS = {
  'vidéo': 'VIDÉO', 'web': 'WEB', 'design': 'DESIGN',
  'motion': 'MOTION', '3d': '3D'
};

/* ── Shared: build media placeholder HTML ──────────────────────────── */
function mediaHTML(ratio, label) {
  const ratioClass = {
    '16/9': 'media--16-9', '21/9': 'media--21-9',
    '4/3':  'media--4-3',  '3/4':  'media--3-4',
  }[ratio] || 'media--16-9';

  const id = 'p' + Math.random().toString(36).slice(2, 7);
  return `
    <div class="media ${ratioClass}">
      <svg class="media__svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="${id}" patternUnits="userSpaceOnUse" width="24" height="24" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="24" stroke="#e0dbd4" stroke-width="0.8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#${id})"/>
      </svg>
      <span class="media__corner media__corner--tl">+</span>
      <span class="media__corner media__corner--tr">+</span>
      <span class="media__corner media__corner--bl">+</span>
      <span class="media__corner media__corner--br">+</span>
      <span class="media__label">${label}</span>
    </div>`;
}

/* ── Shared: build a project card ──────────────────────────────────── */
function cardHTML(p, showDesc = false) {
  const visual = p.cover
    ? `<div style="position:relative;padding-top:56.25%;overflow:hidden;background:${p.imageFit==='contain'?'var(--cream-dark)':'#ede9e1'}">
        <img src="${p.cover}" alt="${p.title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:${p.imageFit||'cover'};display:block"/>
        <span style="position:absolute;top:5px;left:7px;font-family:var(--mono);font-size:.55rem;color:rgba(255,255,255,.7);pointer-events:none">+</span>
        <span style="position:absolute;top:5px;right:7px;font-family:var(--mono);font-size:.55rem;color:rgba(255,255,255,.7);pointer-events:none">+</span>
        <span style="position:absolute;bottom:5px;left:7px;font-family:var(--mono);font-size:.55rem;color:rgba(255,255,255,.7);pointer-events:none">+</span>
        <span style="position:absolute;bottom:5px;right:7px;font-family:var(--mono);font-size:.55rem;color:rgba(255,255,255,.7);pointer-events:none">+</span>
       </div>`
    : mediaHTML('16/9', p.title);

  return `
    <a class="card" href="project.html?slug=${p.slug}">
      <div class="card__media" style="border:1px solid var(--grey-border);transition:border-color .22s;overflow:hidden">
        ${visual}
        <span class="card__cta">voir le projet →</span>
      </div>
      <div class="card__meta">
        <span>${String(p.id).padStart(2,'0')} · ${CATEGORY_LABELS[p.category]}</span>
        <span>${p.year}</span>
      </div>
      <h3 class="card__title">${p.title}</h3>
      ${showDesc ? `<p class="card__desc">${p.shortDesc}</p>` : ''}
    </a>`;
}

/* ── Shared: header + footer ───────────────────────────────────────── */
function headerHTML(active) {
  const links = ['index','travaux','à propos','contact'];
  const hrefs = { index: 'index.html', 'travaux': 'work.html', 'à propos': 'about.html', contact: 'contact.html' };
  const nav = links.map(l =>
    `<a href="${hrefs[l]}" class="${l === active ? 'active' : ''}">${l}</a>`
  ).join('');
  return `
    <header class="site-header">
      <a href="index.html" class="site-logo">Emile Brenckle</a>
      <nav class="site-nav">${nav}</nav>
    </header>`;
}

function footerHTML() {
  return `
    <footer class="site-footer">
      <span>© 2026 · Strasbourg</span>
      <div class="site-footer__links">
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="mailto:emile.brenckle@gmail.com">Mail</a>
      </div>
      <span>Fait avec le cœur ♥</span>
    </footer>`;
}

/* ── Immersive canvas: draggable browser window ────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const browser = document.querySelector('.browser');
  const bar     = document.querySelector('.browser__bar');
  if (!browser || !bar) return;

  /* Wrap everything after the bar in a scrollable div */
  const scroll = document.createElement('div');
  scroll.className = 'browser__scroll';
  while (bar.nextSibling) scroll.appendChild(bar.nextSibling);
  browser.appendChild(scroll);

  /* Convert CSS-centered position to explicit left/top on first drag */
  let anchored = false;
  function anchor() {
    if (anchored) return;
    const r = browser.getBoundingClientRect();
    browser.style.top       = r.top + 'px';
    browser.style.left      = r.left + 'px';
    browser.style.transform = 'none';
    anchored = true;
  }

  function recenter(animate = true) {
    if (animate) {
      browser.style.transition = 'top .35s var(--ease), left .35s var(--ease), transform .35s var(--ease)';
      setTimeout(() => browser.style.transition = '', 380);
    }
    browser.style.top       = ((window.innerHeight - browser.offsetHeight) / 2) + 'px';
    browser.style.left      = ((window.innerWidth  - browser.offsetWidth)  / 2) + 'px';
    browser.style.transform = 'none';
    anchored = true;
  }

  /* Canvas cursor dot */
  const dot = document.createElement('div');
  dot.className = 'canvas-dot';
  page.appendChild(dot);
  document.addEventListener('mousemove', e => {
    if (e.target.closest('.browser')) { dot.style.opacity = '0'; return; }
    dot.style.opacity   = '1';
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  /* Drag with tilt */
  let startX, startY, origL, origT, prevX, dragging = false;

  function startDrag(cx, cy) {
    anchor();
    dragging = true;
    startX = cx; startY = cy; prevX = cx;
    origL  = browser.offsetLeft; origT = browser.offsetTop;
    browser.classList.add('is-dragging');
    document.body.style.userSelect = 'none';
  }

  function moveDrag(cx, cy) {
    if (!dragging) return;
    const tilt = Math.max(-6, Math.min(6, (cx - prevX) * 0.55));
    prevX = cx;
    browser.style.left      = (origL + cx - startX) + 'px';
    browser.style.top       = (origT + cy - startY) + 'px';
    browser.style.transform = `rotate(${tilt}deg)`;
  }

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    browser.classList.remove('is-dragging');
    document.body.style.userSelect = '';
    browser.style.transition = 'transform .3s cubic-bezier(.34,1.56,.64,1)';
    browser.style.transform  = 'none';
    setTimeout(() => browser.style.transition = '', 320);
  }

  bar.addEventListener('mousedown', e => {
    if (e.target.closest('a, button, input')) return;
    startDrag(e.clientX, e.clientY); e.preventDefault();
  });
  document.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
  document.addEventListener('mouseup', endDrag);

  /* Touch */
  bar.addEventListener('touchstart', e => {
    if (e.target.closest('a, button')) return;
    startDrag(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchmove', e => {
    if (dragging) moveDrag(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  document.addEventListener('touchend', endDrag);

  /* Double-click bar → recenter */
  bar.addEventListener('dblclick', e => {
    if (e.target.closest('a, button')) return;
    recenter();
  });

  /* Green dot → toggle fullscreen */
  const greenDot = document.querySelector('.browser__dot--green');
  if (greenDot) {
    greenDot.style.cursor = 'pointer';
    let maximized = false;
    greenDot.addEventListener('click', () => {
      anchor();
      if (!maximized) {
        browser.style.transition = 'top .3s var(--ease), left .3s var(--ease), width .3s var(--ease), max-height .3s var(--ease)';
        browser.style.top = '1.5vh'; browser.style.left = '1.5vw';
        browser.style.width = '97vw'; browser.style.maxHeight = '97vh';
        maximized = true;
      } else {
        browser.style.width = ''; browser.style.maxHeight = '';
        recenter(false);
        maximized = false;
      }
      setTimeout(() => browser.style.transition = '', 340);
    });
  }

  /* Red dot → back to index */
  const redDot = document.querySelector('.browser__dot--red');
  if (redDot && !window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
    redDot.style.cursor = 'pointer';
    redDot.title = "retour à l'accueil";
    redDot.addEventListener('click', () => { window.location.href = 'index.html'; });
  }

  /* Resize handle */
  const resizeHandle = document.createElement('div');
  resizeHandle.className = 'browser__resize';
  browser.appendChild(resizeHandle);
  let resizing = false, rsX, rsY, rsW, rsH;
  resizeHandle.addEventListener('mousedown', e => {
    anchor();
    resizing = true;
    rsX = e.clientX; rsY = e.clientY;
    rsW = browser.offsetWidth; rsH = browser.offsetHeight;
    document.body.style.userSelect = 'none';
    e.preventDefault(); e.stopPropagation();
  });
  document.addEventListener('mousemove', e => {
    if (!resizing) return;
    browser.style.width     = Math.max(480, rsW + e.clientX - rsX) + 'px';
    browser.style.maxHeight = Math.max(320, rsH + e.clientY - rsY) + 'px';
  });
  document.addEventListener('mouseup', () => { resizing = false; });
});
