const projects = [
  {
    id: 1,
    slug: 'utmb-alsace',
    title: 'UTMB Alsace',
    category: 'photo',
    year: 2026,
    shortDesc: "Photos prises lors de l'UTMB Alsace 2026, en RAW, retouchées sur Lightroom.",
    longDesc: "J'ai photographié l'UTMB Alsace 2026 avec un hybride, en RAW. Retouche sur Lightroom photo par photo : exposition, tons, couleurs. L'idée c'était de rester proche de ce que j'avais vu sur place, sans en faire trop.",
    role: ['photographie', 'retouche', 'étalonnage'],
    tools: ['Lightroom', 'Appareil RAW'],
    context: ['événement sportif', 'UTMB Alsace', 'mai 2026'],
    cover: 'img/BON POUR MV2.jpg',
    detailCover: 'img/BON POUR MV.jpg',
    detailImages: ['img/ALLEZ.png', 'img/OTTTTO.png'],
  },
  {
    id: 2,
    slug: 'restaurant-de-la-tour',
    title: 'Restaurant de la Tour',
    category: 'web',
    year: 2026,
    shortDesc: "Site vitrine pour une winstub alsacienne à Turckheim. Design, développement et intégration trilingue.",
    longDesc: "Commande pour le Restaurant de la Tour, winstub à Turckheim fondée en 1923. Typo gothique Deutsch Gothic, interface trilingue FR/DE/EN. J'ai tout géré seul : maquette Figma, développement, déploiement. Le site inclut un système de réservation et une carte des menus.",
    role: ['UI/UX design', 'développement', 'intégration'],
    tools: ['Figma', 'HTML/CSS', 'JavaScript'],
    context: ['commande client', 'site multilingue', 'Turckheim, Alsace'],
    liveUrl: 'https://emilebrenckle-cmyk.github.io/Restaurant-de-la-Tour/',
    cover: 'img/restaurant-screen-hero.png',
    detailImages: ['img/restaurant-screen-contact.png', 'img/restaurant-screen-menu.png'],
  },
  {
    id: 3,
    slug: 'silence-ca-tourne',
    title: 'Silence ça Tourne',
    category: 'design',
    year: 2025,
    shortDesc: "Logo, carte de visite et mockups pour Silence ça Tourne, vidéaste monteur.",
    longDesc: "Commande pour Silence ça Tourne, vidéaste monteur freelance. Un loup comme mascotte, logotype en noir pour qu'il passe partout. Livré avec les déclinaisons (monochrome, négatif), la carte de visite recto/verso et des mockups.",
    role: ['direction artistique', 'identité visuelle', 'print'],
    tools: ['Illustrator', 'Photoshop'],
    context: ['commande client', 'travail solo', '2025'],
    cover: 'img/sct-mockup-sign.jpg',
    detailImages: ['img/sct-mockup-card.jpg', 'img/sct-mockup-laptop.jpg'],
    liveUrl: 'https://acrobat.adobe.com/id/urn:aaid:sc:EU:8c5445cf-6f69-42df-b157-62fbf15af1cf',
    liveLabel: 'voir le PDF',
  },
  {
    id: 4,
    slug: 'logo-hecom',
    title: "Logo HECom'",
    category: 'design',
    year: 2025,
    shortDesc: "Logo et charte graphique pour HECom', association étudiante en communication.",
    longDesc: "Logo et charte pour HECom', une asso étudiante en com'. Double chevron comme symbole, Montserrat Extra Bold, palette bleu/blanc. Déclinaisons fond sombre, noir et monochrome, avec un guide d'utilisation.",
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
    id: 5,
    slug: 'showreel-portfolio',
    title: 'Showreel BUT MMI',
    category: 'motion',
    year: 2025,
    shortDesc: "Showreel BUT MMI : animation typographique, 3D et vidéo, monté sur After Effects.",
    longDesc: "Trois ans de projets BUT MMI montés en showreel. L'intro est une animation typographique avec des lettres texturées, calée sur la musique. Montage et compo intégralement sur After Effects et Premiere Pro.",
    role: ['motion design', 'montage', 'direction artistique'],
    tools: ['After Effects', 'Premiere Pro'],
    context: ['projet personnel', 'BUT MMI', '2025'],
    cover: 'img/portfolio-motion-cover.png',
    detailImages: ['img/portfolio-motion-frame1.png', 'img/portfolio-motion-frame2.png'],
    liveUrl: 'https://youtu.be/OnyJZCEUcDk',
    liveLabel: 'voir le showreel',
  },
  {
    id: 6,
    slug: 'motion-exs',
    title: 'EXS — Motion Design',
    category: 'motion',
    year: 2025,
    shortDesc: "Animation en boucle d'un personnage expressif, réalisée sur After Effects en cours BUT MMI.",
    longDesc: "Exercice de motion design pour les cours BUT MMI, sur After Effects. Animation en boucle d'un visage stylisé sur fond bleu électrique : rigging des expressions, travail sur la fluidité.",
    role: ['motion design', 'animation', 'rigging'],
    tools: ['After Effects'],
    context: ['projet universitaire', 'BUT MMI', '2025'],
    cover: 'img/motion-exs-cover.png',
    detailImages: ['img/motion-exs-ae.png', 'img/motion-exs-render.png'],
    liveUrl: 'https://youtu.be/mj6iCVGw1z8',
    liveLabel: 'voir le motion',
  },
  {
    id: 7,
    slug: 'historia-motion',
    title: 'Historia — Motion Design',
    category: 'motion',
    year: 2025,
    shortDesc: "Générique d'ouverture pour Historia, magazine télé fictif sur l'Antiquité.",
    longDesc: "Générique d'ouverture pour Historia, magazine télé fictif sur l'Antiquité. Typo sérif contemporaine sur fond corail, avec des sculptures gréco-romaines en image. Fait sur After Effects.",
    role: ['motion design', 'direction artistique', 'animation'],
    tools: ['After Effects', 'Illustrator'],
    context: ['projet universitaire', 'BUT MMI', '2025'],
    cover: 'img/historia-cover.png',
    detailImages: ['img/historia-frame1.png', 'img/historia-frame2.png'],
    liveUrl: 'https://youtu.be/1RLIWMOLUVI',
    liveLabel: 'voir le motion',
  },
  {
    id: 8,
    slug: 'poulie-3d',
    title: 'Poulie — Animation 3D',
    category: '3d',
    year: 2025,
    shortDesc: "Mécanisme de poulie modélisé et animé sur Blender, avec simulation physique et rendu EEVEE.",
    longDesc: "Mécanisme de poulie modélisé et animé dans Blender. Simulation physique sur la corde et le poids, rendu EEVEE avec une grange en fond. Animation par contraintes d'objets.",
    role: ['modélisation 3D', 'animation', 'rendu'],
    tools: ['Blender'],
    context: ['projet universitaire', 'BUT MMI', '2025'],
    cover: 'img/poulie-render.png',
    detailImages: ['img/poulie-blender.png', 'img/poulie-wireframe.png'],
    liveUrl: 'https://youtu.be/kk8zivGgJtU',
    liveLabel: 'voir l\'animation',
  },
  {
    id: 9,
    slug: 'blender-3d',
    title: 'Scènes 3D',
    category: '3d',
    year: 2025,
    shortDesc: "Natures mortes sur Blender : fruits, verres et glaçons en rendu Cycles.",
    longDesc: "Exercices de modélisation pour les cours BUT MMI. Natures mortes sur Blender : fruits, verres, glaçons. Matériaux, éclairage et rendu Cycles.",
    role: ['modélisation 3D', 'rendu', 'éclairage'],
    tools: ['Blender'],
    context: ['projet universitaire', 'BUT MMI', 'octobre 2025'],
    cover: 'img/blender-scene1.png',
    detailImages: ['img/blender-glacon.png', 'img/blender-water.png'],
  },
  {
    id: 10,
    slug: 'artcuisines-carte',
    title: 'Art Cuisines — Carte de visite',
    category: 'design',
    year: 2024,
    shortDesc: "Carte de visite recto/verso pour un architecte d'intérieur, 3 déclinaisons.",
    longDesc: "Carte de visite pour David Iltis, architecte d'intérieur chez Art Cuisines à Mulhouse. Trois versions : fond navy, fond blanc, format vertical. Même logique sobre dans les trois, avec un point rouge comme seul accent couleur.",
    role: ['print', 'identité visuelle'],
    tools: ['Illustrator', 'InDesign'],
    context: ['stage Sandro Matera', 'Studio Graphique Web & Image', '2024'],
    cover: 'img/artcuisines-dark.png',
    detailImages: ['img/artcuisines-white.png', 'img/artcuisines-vertical.png'],
    liveUrl: 'https://acrobat.adobe.com/id/urn:aaid:sc:EU:a7c0f451-2be8-499b-923c-d8e354f30904',
    liveLabel: 'voir le PDF',
  },
  {
    id: 11,
    slug: 'boostez-votre-com',
    title: "Boostez Votre Com'",
    category: 'design',
    year: 2024,
    shortDesc: "Logo pour l'offre communication du studio Sandro Matera, 4 déclinaisons couleur.",
    longDesc: "Logo créé pendant mon stage chez Sandro Matera. Typo en italique gras, deux pictogrammes au choix (mégaphone ou fusée), coloris rose/navy et bleu/navy.",
    role: ['identité visuelle', 'logotype', 'déclinaisons'],
    tools: ['Illustrator', 'InDesign'],
    context: ['stage Sandro Matera', 'Studio Graphique Web & Image', '2024'],
    cover: 'img/bvc-cover.png',
    detailImages: ['img/bvc-logo-pink.png', 'img/bvc-logo-blue.png'],
    liveUrl: 'https://acrobat.adobe.com/id/urn:aaid:sc:EU:6c0b369e-96f0-4746-a29d-44abff036455?viewer%21megaVerb=group-discover',
    liveLabel: 'voir le PDF',
  },
  {
    id: 12,
    slug: 'maison-des-delices',
    title: 'Maison des Délices',
    category: 'web',
    year: 2024,
    shortDesc: "UI design pour un restaurant japonais fictif : page hero, carte filtrée, avis et carte Google.",
    longDesc: "Design UI pour la Maison des Délices, resto japonais fictif à Mulhouse. Page d'accueil sombre, commande en ligne avec filtres par catégorie (Gyoza, Maki, Sashimi...), section avis et carte. Fait sur Figma.",
    role: ['UI/UX design', 'webdesign'],
    tools: ['Figma'],
    context: ['projet universitaire', 'BUT MMI', '2024'],
    cover: 'img/maison-delices-hero.png',
    detailImages: ['img/maison-delices-menu.png', 'img/maison-delices-avis.png'],
    liveUrl: 'https://www.figma.com/design/lvHfbQ24Bqfl2Fw0KcZQrI/Untitled?node-id=0-1&p=f',
    liveLabel: 'voir le design',
  },
  {
    id: 13,
    slug: 'graphiste-interview',
    title: 'Graphiste — En quoi ça consiste ?',
    category: 'vidéo',
    year: 2024,
    shortDesc: "Mini-doc sur le métier de graphiste, pour les cours BUT MMI : tournage, montage et étalonnage.",
    longDesc: "Mini-doc sur le métier de graphiste, pour les cours BUT MMI. Interview filmée, b-roll dans l'atelier, montage et habillage typo. Projet en équipe, du tournage au rendu final.",
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
  'motion': 'MOTION', '3d': '3D', 'photo': 'PHOTO'
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
        <img src="${p.cover}" alt="${p.title}" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:${p.imageFit||'cover'};display:block"/>
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

/* ── Browser scroll wrapper + dot navigation ────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const browser = document.querySelector('.browser');
  const bar     = document.querySelector('.browser__bar');
  if (!browser || !bar) return;

  /* Wrap everything after the bar in a scrollable div */
  const scroll = document.createElement('div');
  scroll.className = 'browser__scroll';
  while (bar.nextSibling) scroll.appendChild(bar.nextSibling);
  browser.appendChild(scroll);

  /* Red dot → back to index */
  const redDot = document.querySelector('.browser__dot--red');
  if (redDot && !window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
    redDot.style.cursor = 'pointer';
    redDot.title = "retour à l'accueil";
    redDot.addEventListener('click', () => { window.location.href = 'index.html'; });
  }

  /* ── Easter egg : bouton jaune → réduit dans un dossier ─────────────── */
  const yellowDot = document.querySelector('.browser__dot--yellow');
  const pageEl    = document.querySelector('.page');
  if (!yellowDot || !pageEl) return;

  yellowDot.style.cursor = 'pointer';
  yellowDot.title = 'Réduire';

  /* Création du dossier */
  const folder = document.createElement('div');
  folder.className = 'desktop-folder';
  folder.innerHTML = `
    <svg class="desktop-folder__icon" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10C4 7.79 5.79 6 8 6H21L26 13H48C50.21 13 52 14.79 52 17V38C52 40.21 50.21 42 48 42H8C5.79 42 4 40.21 4 38V10Z" fill="#e8944a" opacity=".95"/>
      <path d="M4 17H52V38C52 40.21 50.21 42 48 42H8C5.79 42 4 40.21 4 38V17Z" fill="#f5a623"/>
      <rect x="18" y="24" width="20" height="12" rx="2" fill="rgba(255,255,255,.25)"/>
      <line x1="24" y1="27" x2="24" y2="33" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
      <line x1="21" y1="30" x2="27" y2="30" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    </svg>
    <span class="desktop-folder__label">Portfolio</span>
  `;
  pageEl.appendChild(folder);

  let minimized = false;

  /* Ancrer le browser à des coordonnées explicites */
  function anchorBrowser() {
    const r = browser.getBoundingClientRect();
    browser.style.top       = r.top  + 'px';
    browser.style.left      = r.left + 'px';
    browser.style.transform = 'none';
  }

  /* Retour au centre CSS */
  function restoreCenter() {
    browser.style.transition = '';
    browser.style.top        = '50%';
    browser.style.left       = '50%';
    browser.style.transform  = 'translate(-50%, -50%)';
  }

  /* Clic jaune : réduire */
  yellowDot.addEventListener('click', () => {
    if (minimized) return;
    minimized = true;

    anchorBrowser();

    /* Montrer le dossier pour récupérer sa position */
    folder.classList.add('is-visible');
    folder.style.opacity = '0';

    requestAnimationFrame(() => {
      const br = browser.getBoundingClientRect();
      const fr = folder.getBoundingClientRect();

      const bCX = br.left + br.width  / 2;
      const bCY = br.top  + br.height / 2;
      const fCX = fr.left + fr.width  / 2;
      const fCY = fr.top  + fr.height / 2;

      const dx = fCX - bCX;
      const dy = fCY - bCY;

      /* Fenêtre glisse vers le dossier */
      browser.style.transition     = 'transform .48s cubic-bezier(.4,0,.2,1), opacity .38s ease';
      browser.style.transformOrigin = 'center center';
      browser.style.transform      = `translate(${dx}px, ${dy}px) scale(0.05)`;
      browser.style.opacity        = '0';

      /* Dossier apparaît quand la fenêtre arrive */
      setTimeout(() => {
        browser.style.visibility = 'hidden';

        folder.style.transition = 'opacity .18s ease, transform .35s cubic-bezier(.34,1.56,.64,1)';
        folder.style.opacity    = '1';
        folder.style.transform  = 'scale(1.18)';
        setTimeout(() => { folder.style.transform = 'scale(1)'; }, 60);

        /* Petit "wobble" pour attirer l'attention */
        setTimeout(() => {
          folder.style.transition = 'transform .5s cubic-bezier(.34,1.56,.64,1)';
          folder.style.transform  = 'rotate(-6deg) scale(1.05)';
          setTimeout(() => {
            folder.style.transform = 'rotate(4deg) scale(1)';
            setTimeout(() => { folder.style.transform = 'rotate(0deg)'; }, 150);
          }, 150);
        }, 450);

      }, 420);
    });
  });

  /* Double-clic dossier : restaurer */
  folder.addEventListener('dblclick', () => {
    if (!minimized) return;
    minimized = false;

    /* Récupérer centre dossier avant de le cacher */
    const fr  = folder.getBoundingClientRect();
    const fCX = fr.left + fr.width  / 2;
    const fCY = fr.top  + fr.height / 2;

    /* Dossier se ferme */
    folder.style.transition = 'opacity .18s ease, transform .18s ease';
    folder.style.transform  = 'scale(1.35)';
    folder.style.opacity    = '0';

    setTimeout(() => {
      folder.classList.remove('is-visible');
      folder.style.transform = '';
      folder.style.opacity   = '';

      /* Browser part du centre du dossier, minuscule */
      const bw = browser.offsetWidth;
      const bh = browser.offsetHeight;

      browser.style.transition     = 'none';
      browser.style.visibility     = 'visible';
      browser.style.opacity        = '1';
      browser.style.left           = (fCX - bw / 2) + 'px';
      browser.style.top            = (fCY - bh / 2) + 'px';
      browser.style.transform      = 'scale(0.05)';
      browser.style.transformOrigin = 'center center';

      requestAnimationFrame(() => requestAnimationFrame(() => {
        const targetL = (window.innerWidth  - bw) / 2;
        const targetT = (window.innerHeight - bh) / 2;

        browser.style.transition = 'transform .52s cubic-bezier(.34,1.56,.64,1), top .48s cubic-bezier(.34,1.56,.64,1), left .48s cubic-bezier(.34,1.56,.64,1), opacity .25s ease';
        browser.style.left       = targetL + 'px';
        browser.style.top        = targetT + 'px';
        browser.style.transform  = 'scale(1)';
      }));

      /* Restaurer le CSS centré */
      setTimeout(restoreCenter, 540);
    }, 200);
  });
});
