'use strict';

// The navigation remains visible if JavaScript is unavailable.
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const mobile = window.matchMedia('(max-width: 800px)');

if (menu && navigation) {
  const closeMenu = () => {
    menu.setAttribute('aria-expanded', 'false');
    navigation.hidden = mobile.matches;
  };
  const syncNavigation = () => {
    menu.hidden = !mobile.matches;
    navigation.toggleAttribute('data-mobile', mobile.matches);
    closeMenu();
  };
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    navigation.hidden = expanded;
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a') && mobile.matches) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  mobile.addEventListener('change', syncNavigation);
  syncNavigation();
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

// Native anchor navigation and CSS handle scrolling, including reduced motion.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const elements = document.querySelectorAll('.reveal');
  const revealAll = () => elements.forEach((element) => element.classList.remove('is-pending'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  elements.forEach((element) => {
    // Content above the fold stays visible immediately.
    if (element.getBoundingClientRect().top >= window.innerHeight) {
      element.classList.add('is-pending');
      observer.observe(element);
    }
  });
  motionPreference.addEventListener('change', (event) => {
    if (event.matches) {
      observer.disconnect();
      revealAll();
    }
  });
}
