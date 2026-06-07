/* ============================================
   SIGMA OWI — script.js
   Dragon Boat & Pacu Jalur
   ============================================ */

/* ── NAV: Solid on scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav')
    .classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Mobile Menu ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

/* ── Page Switcher ── */
function switchPage(name) {
  // Show the selected page
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');

  // Highlight active tab
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');

  // Update nav brand text
  const brands = { dragon: 'Dragon Boat Race', pacu: 'Pacu Jalur' };
  document.getElementById('navBrand').textContent = brands[name];

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-trigger hero entrance animations
  document.querySelectorAll('#page-' + name + ' .animate-in').forEach(el => {
    el.style.animation = 'none';
    el.offsetHeight; // force reflow
    el.style.animation = '';
  });

  // Re-init scroll-reveal for new page
  initObserver();
}

/* ── Smooth Scroll to Section ── */
function goTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ── External Links ── */
function openYoutube() {
  window.open(
    'https://www.youtube.com/results?search_query=dragon+boat+tanjungpinang',
    '_blank'
  );
}
function shareIG() {
  window.open('https://instagram.com', '_blank');
}
function shareFB() {
  window.open(
    'https://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href),
    '_blank'
  );
}
function shareX() {
  window.open(
    'https://twitter.com/intent/tweet?text=Dragon+Boat+%26+Pacu+Jalur+%23HeritagePride&url=' +
    encodeURIComponent(location.href),
    '_blank'
  );
}

/* ── Scroll-Reveal (IntersectionObserver) ── */
function initObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity   = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  const targets = document.querySelectorAll(
    '.section-about-inner, .video-card, .event-image-wrap, .event-info, .gallery-item, .section-cta'
  );

  targets.forEach(el => {
    if (el.style.opacity !== '1') {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(28px)';
      el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
      obs.observe(el);
    }
  });
}

/* ── Init on load ── */
initObserver();
