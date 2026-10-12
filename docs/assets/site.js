(() => {
  const chapters = [...document.querySelectorAll('.site-header nav a[href^="#"]')]
    .map(link => ({ link, target: document.getElementById(link.hash.slice(1)) }))
    .filter(chapter => chapter.target);
  if (!chapters.length) return;

  // Only the main RoonPilot pages opt in; Bridge pages keep their existing navigation.
  const useRail = chapters.length >= 4 && document.body.classList.contains('roonpilot-page');
  let rail;
  let railLinks = [];
  let progress;
  if (useRail) {
    rail = document.createElement('nav');
    rail.className = 'chapter-rail';
    rail.setAttribute('aria-label', document.documentElement.lang === 'de'
      ? 'Seitenabschnitte' : 'Page sections');
    const track = document.createElement('span');
    track.className = 'chapter-rail-track';
    track.setAttribute('aria-hidden', 'true');
    progress = document.createElement('span');
    progress.className = 'chapter-rail-progress';
    track.append(progress);
    rail.append(track);
    railLinks = chapters.map(({ link }, index) => {
      const item = document.createElement('a');
      item.className = 'chapter-rail-link';
      item.href = link.hash;
      const number = document.createElement('span');
      number.className = 'chapter-rail-number';
      number.setAttribute('aria-hidden', 'true');
      number.textContent = String(index + 1).padStart(2, '0');
      const title = document.createElement('span');
      title.className = 'chapter-rail-title';
      title.textContent = link.textContent.trim();
      item.append(number, title);
      rail.append(item);
      return item;
    });
    document.body.append(rail);
    document.body.classList.add('has-chapter-rail');
  }

  let scheduled = false;
  const update = () => {
    scheduled = false;
    const marker = Math.min(230, Math.max(130, window.innerHeight * 0.28));
    let active = 0;
    chapters.forEach(({ target }, index) => {
      if (target.getBoundingClientRect().top <= marker) active = index;
    });
    const top = 106;
    const spacing = 25;
    const bottom = window.innerHeight - 40;
    chapters.forEach(({ link }, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
      if (!useRail) return;
      const railLink = railLinks[index];
      if (index === active) railLink.setAttribute('aria-current', 'location');
      else railLink.removeAttribute('aria-current');
      const position = index < active ? top + index * spacing
        : index === active ? top + index * spacing + 16
        : bottom - (chapters.length - index - 1) * spacing;
      railLink.style.top = `${position}px`;
    });
    if (progress) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.height = `${scrollable > 0
        ? Math.min(100, Math.max(0, window.scrollY / scrollable * 100)) : 0}%`;
    }
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };
  if (useRail) {
    let jumpGeneration = 0;
    const cancelPendingJump = () => { jumpGeneration += 1; };
    railLinks.forEach((railLink, index) => {
      const { link, target } = chapters[index];
      railLink.addEventListener('click', event => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        if (window.location.hash !== link.hash) history.pushState(null, '', link.hash);
        const generation = ++jumpGeneration;
        const align = () => {
          if (generation !== jumpGeneration || window.location.hash !== link.hash) return;
          const delta = target.getBoundingClientRect().top - 96;
          if (Math.abs(delta) > 12) {
            // Lazy images can change section positions after the initial jump.
            const root = document.documentElement;
            const previousBehavior = root.style.scrollBehavior;
            root.style.scrollBehavior = 'auto';
            window.scrollBy(0, delta);
            root.style.scrollBehavior = previousBehavior;
          }
          schedule();
        };
        align();
        [350, 1200, 2400].forEach(delay => setTimeout(align, delay));
      });
    });
    window.addEventListener('wheel', cancelPendingJump, { passive: true });
    window.addEventListener('touchstart', cancelPendingJump, { passive: true });
    window.addEventListener('keydown', event => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) cancelPendingJump();
    });
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule, { once: true });
  schedule();
})();
