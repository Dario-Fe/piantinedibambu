document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = mobileNav?.querySelectorAll('a');

  /* ─── Header scroll state ─── */
  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── Hamburger ─── */
  hamburger?.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileNav?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      mobileNav?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ─── Active nav link on scroll ─── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

  const onScrollSpy = () => {
    let current = '';
    sections.forEach(s => {
      const top = s.offsetTop - 150;
      if (window.scrollY >= top) current = s.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', onScrollSpy, { passive: true });

  /* ─── Species card expand ─── */
  document.querySelectorAll('.species-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      card.classList.toggle('expanded');
    });
  });

  /* ─── Pricing card prefill ─── */
  document.querySelectorAll('[data-prefill]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const msg = document.getElementById('messaggio');
      if (msg) msg.value = btn.getAttribute('data-prefill');
      const motivo = document.getElementById('motivo');
      if (motivo) motivo.value = btn.getAttribute('data-motivo') || '';
    });
  });

  /* ─── Contact form mailto ─── */
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const motivo = document.getElementById('motivo');
    const motivoText = motivo.options[motivo.selectedIndex]?.text || '';
    const messaggio = document.getElementById('messaggio').value.trim();
    const subject = encodeURIComponent('Nuovo contatto da PiantineDiBambù');
    const body = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nMotivo: ${motivoText}\n\n${messaggio}`
    );
    window.location.href = `mailto:mark.ni@hotmail.it?subject=${subject}&body=${body}`;
  });

  /* ─── Reveal animations ─── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ─── Newsletter popup ─── */
  const popup = document.getElementById('popup-newsletter');
  const popupClose = document.getElementById('popup-close');
  const popupOpen = document.getElementById('popup-open');

  popupOpen?.addEventListener('click', (e) => {
    e.preventDefault();
    popup?.classList.add('open');
  });
  popupClose?.addEventListener('click', () => popup?.classList.remove('open'));
  popup?.addEventListener('click', (e) => {
    if (e.target === popup) popup.classList.remove('open');
  });

  /* ─── Smooth scroll for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
