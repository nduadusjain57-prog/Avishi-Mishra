/* =========================================================
   Avishi Mishra — Personal Brand Site
   Shared JavaScript
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const navTabs = document.querySelector('.nav-tabs');

  if (menuToggle && navTabs) {
    menuToggle.addEventListener('click', function () {
      const isOpen = navTabs.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is tapped (mobile)
    navTabs.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navTabs.classList.remove('open');
        menuToggle.classList.remove('open');
      });
    });
  }

  /* ---------- Active nav link highlighting ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-tabs a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Scroll reveal animation ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- Platform tabs (Content page) ---------- */
  const ptabs = document.querySelectorAll('.ptab');
  const ppanels = document.querySelectorAll('.ptab-panel');

  ptabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const target = tab.getAttribute('data-tab');

      ptabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      ppanels.forEach(function (panel) {
        panel.classList.toggle('active', panel.getAttribute('data-panel') === target);
      });
    });
  });

  /* ---------- Gallery lightbox ---------- */
  const galleryImgs = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightbox && lightboxImg) {
    galleryImgs.forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
      });
    });

    function closeLightbox() { lightbox.classList.remove('open'); }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;

    q.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-a').style.maxHeight = null;
        }
      });

      item.classList.toggle('open', !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
    });
  });

  /* ---------- Contact form validation ---------- */
  const form = document.querySelector('#contact-form');
  if (form) {
    const status = document.querySelector('.form-status');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      const fields = [
        { input: form.querySelector('#name'), rule: (v) => v.trim().length > 1, msg: 'Please enter your name.' },
        { input: form.querySelector('#email'), rule: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Enter a valid email address.' },
        { input: form.querySelector('#reason'), rule: (v) => v !== '', msg: 'Please select a reason.' },
        { input: form.querySelector('#message'), rule: (v) => v.trim().length > 9, msg: 'Message should be at least 10 characters.' }
      ];

      fields.forEach(function (f) {
        if (!f.input) return;
        const errEl = f.input.closest('.field').querySelector('.err');
        if (!f.rule(f.input.value)) {
          if (errEl) errEl.textContent = f.msg;
          f.input.style.borderColor = '#E2A7A7';
          valid = false;
        } else {
          if (errEl) errEl.textContent = '';
          f.input.style.borderColor = '';
        }
      });

      if (valid && status) {
        status.textContent = "Message sent! Thank you for reaching out — Avishi's team typically replies within 3–5 business days.";
        status.classList.add('show');
        form.reset();
      }
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll('.current-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

});
