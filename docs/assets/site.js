(() => {
  const chapters = [...document.querySelectorAll('.site-header nav a[href^="#"]')]
    .map(link => ({ link, target: document.getElementById(link.hash.slice(1)) }))
    .filter(chapter => chapter.target);
  if (!chapters.length) return;

  // Only the main RoonPilot pages opt in; Bridge pages keep their existing navigation.
  const useRail = chapters.length >= 4 && document.body.classList.contains('roonpilot-page');
  let rail;
  let railLinks = [];
  let ruler;
  let rulerTicks = [];
  let visibleTickStart = -1;
  let viewportBand;
  let scrubber;
  let scrubberValue;
  let railExpanded = false;
  let dragging = false;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  if (useRail) {
    rail = document.createElement('nav');
    rail.className = 'chapter-rail';
    rail.setAttribute('aria-label', document.documentElement.lang === 'de'
      ? 'Seitenabschnitte' : 'Page sections');
    ruler = document.createElement('div');
    ruler.className = 'chapter-rail-ruler';
    ruler.tabIndex = 0;
    ruler.setAttribute('role', 'slider');
    ruler.setAttribute('aria-orientation', 'vertical');
    ruler.setAttribute('aria-valuemin', '0');
    ruler.setAttribute('aria-valuemax', '100');
    ruler.setAttribute('aria-label', document.documentElement.lang === 'de'
      ? 'Seitenposition: ziehen oder Pfeiltasten verwenden'
      : 'Page position: drag or use arrow keys');
    viewportBand = document.createElement('span');
    viewportBand.className = 'chapter-rail-window';
    viewportBand.setAttribute('aria-hidden', 'true');
    const ticks = document.createDocumentFragment();
    for (let value = 0; value <= 100; value += 1) {
      const tick = document.createElement('span');
      tick.className = `chapter-rail-tick${value % 5 === 0 ? ' is-major' : ''}`;
      tick.style.setProperty('--percent', `${value}%`);
      tick.setAttribute('aria-hidden', 'true');
      if (value % 5 === 0) {
        const number = document.createElement('span');
        number.className = 'chapter-rail-tick-number';
        number.textContent = String(value);
        tick.append(number);
      }
      const line = document.createElement('span');
      line.className = 'chapter-rail-tick-line';
      tick.append(line);
      ticks.append(tick);
      rulerTicks.push(tick);
    }
    scrubber = document.createElement('span');
    scrubber.className = 'chapter-rail-scrubber';
    scrubber.setAttribute('aria-hidden', 'true');
    scrubberValue = document.createElement('span');
    scrubberValue.className = 'chapter-rail-scrubber-value';
    scrubber.append(scrubberValue);
    ruler.append(viewportBand, ticks, scrubber);
    rail.append(ruler);
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
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const percent = maxScroll ? clamp(window.scrollY / maxScroll * 100, 0, 100) : 0;
    const marker = Math.min(230, Math.max(130, window.innerHeight * 0.28));
    let active = 0;
    chapters.forEach(({ target }, index) => {
      if (target.getBoundingClientRect().top <= marker) active = index;
    });
    const top = 104;
    const spacing = 20;
    const bottom = window.innerHeight - 42;
    let expandedPositions = [];
    if (useRail && railExpanded) {
      expandedPositions = chapters.map(({ target }) => {
        const sectionTop = target.getBoundingClientRect().top + window.scrollY;
        return top + clamp(sectionTop / Math.max(1, maxScroll), 0, 1) * (bottom - top);
      });
      // Keep nearby chapter names legible without changing their order.
      for (let i = 1; i < expandedPositions.length; i += 1) {
        expandedPositions[i] = Math.max(expandedPositions[i], expandedPositions[i - 1] + 26);
      }
      if (expandedPositions.at(-1) > bottom) {
        expandedPositions[expandedPositions.length - 1] = bottom;
        for (let i = expandedPositions.length - 2; i >= 0; i -= 1) {
          expandedPositions[i] = Math.min(expandedPositions[i], expandedPositions[i + 1] - 26);
        }
      }
    }
    chapters.forEach(({ link }, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
      if (!useRail) return;
      const railLink = railLinks[index];
      if (index === active) railLink.setAttribute('aria-current', 'location');
      else railLink.removeAttribute('aria-current');
      const position = railExpanded ? expandedPositions[index]
        : index < active ? top + index * spacing
          : index === active ? top + index * spacing + 15
            : bottom - (chapters.length - index - 1) * spacing;
      railLink.style.top = `${position}px`;
    });
    if (ruler) {
      const zoomStart = clamp(Math.floor(percent - 5), 0, 90);
      if (zoomStart !== visibleTickStart) {
        visibleTickStart = zoomStart;
        rulerTicks.forEach((tick, value) => {
          tick.classList.toggle('in-zoom', value >= zoomStart && value <= zoomStart + 10);
          if (value >= zoomStart && value <= zoomStart + 10) {
            tick.style.setProperty('--zoom-position', `${(value - zoomStart) * 10}%`);
          }
        });
      }
      viewportBand.style.top = `${zoomStart}%`;
      scrubber.style.top = `${railExpanded ? percent : (percent - zoomStart) * 10}%`;
      scrubberValue.textContent = `${String(Math.round(percent)).padStart(3, '0')}%`;
      ruler.setAttribute('aria-valuenow', String(Math.round(percent)));
      rail.classList.toggle('at-endpoint', percent < 0.5 || percent > 99.5);
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
    const setExpanded = value => {
      if (railExpanded === value) return;
      railExpanded = value;
      rail.classList.toggle('is-expanded', value);
      schedule();
    };
    const scrollToPercent = value => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      window.scrollTo(0, clamp(value, 0, 100) / 100 * maxScroll);
      schedule();
    };
    const scrollFromPointer = event => {
      const bounds = ruler.getBoundingClientRect();
      scrollToPercent((event.clientY - bounds.top) / bounds.height * 100);
    };
    rail.addEventListener('pointerenter', () => setExpanded(true));
    rail.addEventListener('pointerleave', () => {
      if (!dragging && document.activeElement !== ruler) setExpanded(false);
    });
    ruler.addEventListener('focus', () => setExpanded(true));
    ruler.addEventListener('blur', () => {
      if (!dragging && !rail.matches(':hover')) setExpanded(false);
    });
    let previousScrollBehavior = '';
    const stopDragging = event => {
      if (!dragging) return;
      dragging = false;
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      if (ruler.hasPointerCapture(event.pointerId)) ruler.releasePointerCapture(event.pointerId);
      if (!rail.matches(':hover') && document.activeElement !== ruler) setExpanded(false);
    };
    ruler.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      event.preventDefault();
      cancelPendingJump();
      setExpanded(true);
      dragging = true;
      previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      ruler.setPointerCapture(event.pointerId);
      scrollFromPointer(event);
    });
    ruler.addEventListener('pointermove', event => {
      if (dragging) scrollFromPointer(event);
    });
    ruler.addEventListener('pointerup', stopDragging);
    ruler.addEventListener('pointercancel', stopDragging);
    ruler.addEventListener('keydown', event => {
      const step = event.shiftKey ? 10 : 1;
      const current = Number(ruler.getAttribute('aria-valuenow')) || 0;
      const next = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? current + step
        : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? current - step
          : event.key === 'PageDown' ? current + 10
            : event.key === 'PageUp' ? current - 10
              : event.key === 'Home' ? 0
                : event.key === 'End' ? 100 : null;
      if (next === null) return;
      event.preventDefault();
      cancelPendingJump();
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      scrollToPercent(next);
      root.style.scrollBehavior = previous;
    });
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
