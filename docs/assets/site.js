(() => {
  const navigationLinks = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
  const observedSections = navigationLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navigationLinks.forEach(link => {
        const active = link.getAttribute('href') === '#' + visible.target.id;
        link.toggleAttribute('aria-current', active);
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: [0, 0.2, 0.6] });
    observedSections.forEach(section => observer.observe(section));
  }
})();
