/**
 * Aartha Axis - Animations & Intersection Observer
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Splash Intro Sequence Dismissal
  const splash = document.getElementById('intro-splash');
  if (splash) {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      splash.remove();
    } else {
      setTimeout(() => {
        splash.classList.add('is-hidden');
        setTimeout(() => splash.remove(), 850);
      }, 2600);
    }
  }

  // 2. Viewport Scroll Reveal with IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }
});