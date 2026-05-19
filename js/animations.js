/* ══════════════════════════════════════════════════════════════
   animations.js — effets dynamiques globaux
   ══════════════════════════════════════════════════════════════ */

/* ── 1. Transitions entre pages ─────────────────────────────── */
/* L'entrée est gérée par CSS (@keyframes page-in sur html dans styles.css) */
(function () {
  const doc  = document.documentElement;
  let navigating = false; // empêche les double-clics

  function isInternal(href, target) {
    if (!href) return false;
    if (href.startsWith('#') || href.startsWith('mailto:') ||
        href.startsWith('tel:') || href.startsWith('http') ||
        target === '_blank') return false;
    return true;
  }

  /* ── Sortie : fade html + glissement du browser sur desktop ── */
  function exitTo(href) {
    if (navigating) return;
    navigating = true;

    const browser = document.querySelector('.browser');
    const desktop = browser && window.innerWidth > 600;

    doc.style.transition = 'opacity .22s ease';
    doc.style.animation  = 'none';
    doc.style.opacity    = '0';

    if (desktop) {
      browser.style.transition = 'transform .22s ease, opacity .22s ease';
      browser.style.transform  = 'translate(-50%, calc(-50% + 10px))';
    }

    setTimeout(() => { window.location.href = href; }, 230);
  }

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!isInternal(href, link.getAttribute('target'))) return;
    e.preventDefault();
    exitTo(href);
  });

  /* ── Retour arrière (bfcache iOS Safari / Android Chrome) ──── */
  window.addEventListener('pageshow', e => {
    if (!e.persisted) return;
    navigating = false;
    const browser = document.querySelector('.browser');
    if (browser) {
      browser.style.transition = '';
      browser.style.transform  = '';
      browser.style.opacity    = '';
    }
    doc.style.animation  = 'none';
    doc.style.transition = 'none';
    doc.style.opacity    = '0';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      doc.style.transition = 'opacity .3s ease';
      doc.style.opacity    = '1';
    }));
  });

  /* ── Prefetch au survol (navigation perçue plus rapide) ─────── */
  const prefetched = new Set();
  document.addEventListener('mouseover', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!isInternal(href, link.getAttribute('target'))) return;
    if (prefetched.has(href)) return;
    prefetched.add(href);
    const el = document.createElement('link');
    el.rel  = 'prefetch';
    el.href = href;
    document.head.appendChild(el);
  });
})();

/* ── 2. Scroll reveal ────────────────────────────────────────── */
function setupReveal() {
  const targets = document.querySelectorAll(
    '.card:not(.reveal), .skill-card:not(.reveal)'
  );

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(i * 0.07, 0.28) + 's';
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      setTimeout(() => { entry.target.style.transitionDelay = '0s'; }, 600);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', setupReveal);
window.setupReveal = setupReveal;

/* ── 3. Transition de grille (work.html filtres) ─────────────── */
window.gridFadeIn = function (gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.style.transition = 'none';
  grid.style.opacity = '0';
  requestAnimationFrame(() => {
    grid.style.transition = 'opacity .18s ease';
    grid.style.opacity    = '1';
  });
};

/* ── 4. Compteurs animés (index only) ───────────────────────── */
function animateCount(el, target, duration) {
  const start = performance.now();
  const tick = now => {
    const p    = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCount(entry.target, parseInt(entry.target.dataset.count), 1000);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => io.observe(el));
});
