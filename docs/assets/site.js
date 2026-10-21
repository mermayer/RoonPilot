(() => {
  const isGuidePage = document.body.classList.contains('guide-page');
  const headerLinks = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
  // The complete guide's "On this page" list is the source for both nav surfaces.
  const guideLinks = isGuidePage ? [...document.querySelectorAll('.guide-nav a[href^="#"]')] : [];
  const chapterLinks = guideLinks.length ? guideLinks : headerLinks;
  const chapters = chapterLinks
    .map(link => ({
      link,
      target: document.getElementById(link.hash.slice(1)),
      railTitle: link.dataset.railTitle || link.textContent.trim(),
    }))
    .filter(chapter => chapter.target);
  if (!chapters.length) return;
  const chapterByHash = new Map(chapters.map(chapter => [chapter.link.hash, chapter]));

  const guideMenu = isGuidePage ? document.querySelector('.guide-chapters-menu') : null;
  let menuLinks = [];
  if (guideMenu && guideLinks.length) {
    const list = guideMenu.querySelector('.guide-chapters-list');
    list.replaceChildren(...chapters.map(({ link }) => link.cloneNode(true)));
    menuLinks = [...list.querySelectorAll('a')];
    menuLinks.forEach(link => link.addEventListener('click', () => { guideMenu.open = false; }));
    document.addEventListener('pointerdown', event => {
      if (guideMenu.open && !guideMenu.contains(event.target)) guideMenu.open = false;
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && guideMenu.open) {
        guideMenu.open = false;
        guideMenu.querySelector('summary').focus();
      }
    });
  }

  // Long-form project pages opt in; installers and videos keep their focused layouts.
  const useRail = chapters.length >= 4 && document.body.classList.contains('project-page');
  let rail;
  let railLinks = [];
  let ruler;
  let rulerTrack;
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
    rulerTrack = document.createElement('div');
    rulerTrack.className = 'chapter-rail-ticks';
    rulerTrack.setAttribute('aria-hidden', 'true');
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
    }
    scrubber = document.createElement('span');
    scrubber.className = 'chapter-rail-scrubber';
    scrubber.setAttribute('aria-hidden', 'true');
    scrubberValue = document.createElement('span');
    scrubberValue.className = 'chapter-rail-scrubber-value';
    scrubber.append(scrubberValue);
    rulerTrack.append(ticks);
    ruler.append(viewportBand, rulerTrack, scrubber);
    rail.append(ruler);
    railLinks = chapters.map(({ link, railTitle }, index) => {
      const item = document.createElement('a');
      item.className = 'chapter-rail-link';
      item.href = link.hash;
      const number = document.createElement('span');
      number.className = 'chapter-rail-number';
      number.setAttribute('aria-hidden', 'true');
      number.textContent = String(index + 1).padStart(2, '0');
      const title = document.createElement('span');
      title.className = 'chapter-rail-title';
      title.textContent = railTitle;
      item.classList.toggle('is-long', railTitle.length > 11);
      item.append(number, title);
      rail.append(item);
      return item;
    });
    document.body.append(rail);
    document.body.classList.add('has-chapter-rail');
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const railViewport = window.matchMedia('(min-width: 1440px) and (min-height: 680px)');
  let scheduled = false;
  let geometryDirty = true;
  let geometry;
  let activeChapter = -1;
  let frameTime = 0;
  let renderedPercent;
  let expansion = 0;
  const measure = () => {
    const scrollY = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    geometry = {
      pageHeight,
      maxScroll: Math.max(0, pageHeight - window.innerHeight),
      trackHeight: ruler?.clientHeight || 1,
      sections: chapters.map(({ target }) => target.getBoundingClientRect().top + scrollY),
      // Reserve room for the largest title scale without measuring every scroll frame.
      labelHeights: railLinks.map(link => Math.ceil(link.offsetHeight * 1.18)),
    };
    geometryDirty = false;
  };
  const packLabels = desired => {
    const heights = geometry.labelHeights;
    const top = 18;
    const bottom = Math.max(top, geometry.trackHeight - 18);
    const totalHeight = heights.reduce((sum, height) => sum + height, 0);
    const gap = clamp((bottom - top - totalHeight) / Math.max(1, heights.length - 1), 2, 8);
    const positions = desired.map((position, index) => clamp(position,
      top + heights[index] / 2, bottom - heights[index] / 2));
    for (let i = 1; i < positions.length; i += 1) {
      positions[i] = Math.max(positions[i], positions[i - 1] + (heights[i - 1] + heights[i]) / 2 + gap);
    }
    if (positions.at(-1) > bottom - heights.at(-1) / 2) {
      positions[positions.length - 1] = bottom - heights.at(-1) / 2;
      for (let i = positions.length - 2; i >= 0; i -= 1) {
        positions[i] = Math.min(positions[i], positions[i + 1] - (heights[i] + heights[i + 1]) / 2 - gap);
      }
    }
    return positions;
  };
  const update = timestamp => {
    scheduled = false;
    if (geometryDirty || !geometry) measure();
    const { maxScroll, trackHeight } = geometry;
    const actualPercent = maxScroll ? clamp(window.scrollY / maxScroll * 100, 0, 100) : 0;
    const elapsed = frameTime && timestamp - frameTime < 100 ? clamp(timestamp - frameTime, 1, 50) : 16;
    frameTime = timestamp;
    const immediate = !useRail || reducedMotion.matches || dragging || !railViewport.matches || renderedPercent === undefined;
    renderedPercent = immediate ? actualPercent
      : renderedPercent + (actualPercent - renderedPercent) * (1 - Math.exp(-elapsed / 65));
    if (Math.abs(actualPercent - renderedPercent) < .003) renderedPercent = actualPercent;
    const targetExpansion = railExpanded ? 1 : 0;
    expansion = immediate ? targetExpansion
      : expansion + (targetExpansion - expansion) * (1 - Math.exp(-elapsed / 95));
    if (Math.abs(targetExpansion - expansion) < .001) expansion = targetExpansion;
    const marker = Math.min(230, Math.max(130, window.innerHeight * 0.28));
    let active = 0;
    geometry.sections.forEach((sectionTop, index) => {
      if (sectionTop - window.scrollY <= marker) active = index;
    });
    if (active !== activeChapter) {
      activeChapter = active;
      chapters.forEach(({ link }, index) => {
        [link, railLinks[index]].filter(Boolean).forEach(item => {
          if (index === active) item.setAttribute('aria-current', 'location');
          else item.removeAttribute('aria-current');
        });
      });
      menuLinks.forEach(link => {
        if (link.hash === chapters[active].link.hash) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
    if (ruler && railViewport.matches) {
      const progress = renderedPercent / 100;
      // The marker always uses the full-page position, even while the scale zooms.
      // Only the continuous ruler moves behind it; no integer-percent window resets.
      const markerY = progress * trackHeight;
      const scaleHeight = geometry.pageHeight + (trackHeight - geometry.pageHeight) * expansion;
      const scaleOffset = markerY - progress * scaleHeight;
      rulerTrack.style.height = `${scaleHeight}px`;
      rulerTrack.style.transform = `translate3d(0, ${scaleOffset}px, 0)`;
      scrubber.style.transform = `translate3d(0, ${markerY}px, 0)`;
      const bandHeight = Math.min(trackHeight, Math.max(16, window.innerHeight / Math.max(1, geometry.pageHeight) * trackHeight));
      viewportBand.style.height = `${bandHeight}px`;
      viewportBand.style.transform = `translate3d(0, ${progress * (trackHeight - bandHeight)}px, 0)`;
      viewportBand.style.opacity = String(expansion);
      const labelPositions = packLabels(geometry.sections.map(sectionTop =>
        scaleOffset + clamp(sectionTop / Math.max(1, maxScroll), 0, 1) * scaleHeight));
      railLinks.forEach((link, index) => {
        link.style.transform = `translate3d(0, ${labelPositions[index]}px, 0) translateY(-50%)`;
      });
      const value = `${String(Math.round(renderedPercent)).padStart(3, '0')}%`;
      if (scrubberValue.textContent !== value) scrubberValue.textContent = value;
      ruler.setAttribute('aria-valuenow', String(Math.round(actualPercent)));
      rail.classList.toggle('at-endpoint', actualPercent < .5 || actualPercent > 99.5);
    }
    if (renderedPercent !== actualPercent || expansion !== targetExpansion) schedule();
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };
  if (useRail) {
    let jumpGeneration = 0;
    let pendingRulerTarget = null;
    let lastDragPercent = 0;
    const cancelPendingJump = () => {
      jumpGeneration += 1;
      pendingRulerTarget = null;
    };
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
      lastDragPercent = clamp((event.clientY - bounds.top) / bounds.height * 100, 0, 100);
      scrollToPercent(lastDragPercent);
    };
    const correctRulerTarget = () => {
      if (!pendingRulerTarget) return;
      if (performance.now() > pendingRulerTarget.expires) {
        pendingRulerTarget = null;
        return;
      }
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      scrollToPercent(pendingRulerTarget.percent);
      root.style.scrollBehavior = previous;
    };
    // Lazy images may change the page height after a drag; retain its chosen percentage.
    if ('ResizeObserver' in window) {
      new ResizeObserver(() => {
        geometryDirty = true;
        correctRulerTarget();
        schedule();
      }).observe(document.body);
    }
    window.addEventListener('pointerdown', cancelPendingJump, true);
    const keyboardFocusInside = () => rail.contains(document.activeElement) && document.activeElement.matches(':focus-visible');
    rail.addEventListener('pointerenter', () => setExpanded(true));
    rail.addEventListener('pointerleave', () => {
      if (!dragging && !keyboardFocusInside()) setExpanded(false);
    });
    rail.addEventListener('focusin', () => setExpanded(true));
    rail.addEventListener('focusout', event => {
      if (!rail.contains(event.relatedTarget) && !dragging && !rail.matches(':hover')) setExpanded(false);
    });
    let previousScrollBehavior = '';
    const stopDragging = event => {
      if (!dragging) return;
      dragging = false;
      scrollToPercent(lastDragPercent);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      pendingRulerTarget = { percent: lastDragPercent, expires: performance.now() + 2200 };
      [180, 600, 1400].forEach(delay => setTimeout(correctRulerTarget, delay));
      if (ruler.hasPointerCapture(event.pointerId)) ruler.releasePointerCapture(event.pointerId);
      if (!rail.matches(':hover') && !keyboardFocusInside()) setExpanded(false);
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
    ruler.addEventListener('lostpointercapture', stopDragging);
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
    const jumpToChapter = ({ link, target }, event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      pendingRulerTarget = null;
      if (window.location.hash !== link.hash) history.pushState(null, '', link.hash);
      const generation = ++jumpGeneration;
      const align = () => {
        if (generation !== jumpGeneration || window.location.hash !== link.hash) return;
        const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height || 72;
        const delta = target.getBoundingClientRect().top - (headerHeight + 24);
        if (Math.abs(delta) > 12) {
          // Lazy images can change section positions after the initial jump.
          const root = document.documentElement;
          const previousBehavior = root.style.scrollBehavior;
          root.style.scrollBehavior = 'auto';
          window.scrollBy({ top: delta, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
          root.style.scrollBehavior = previousBehavior;
        }
        schedule();
      };
      align();
      [1200, 2400, 4000].forEach(delay => setTimeout(align, delay));
    };
    railLinks.forEach((railLink, index) => {
      railLink.addEventListener('click', event => jumpToChapter(chapters[index], event));
    });
    guideLinks.forEach(guideLink => {
      const chapter = chapterByHash.get(guideLink.hash);
      if (chapter) guideLink.addEventListener('click', event => jumpToChapter(chapter, event));
    });
    menuLinks.forEach(menuLink => {
      const chapter = chapterByHash.get(menuLink.hash);
      if (chapter) menuLink.addEventListener('click', event => jumpToChapter(chapter, event));
    });
    window.addEventListener('hashchange', cancelPendingJump);
    window.addEventListener('wheel', cancelPendingJump, { passive: true });
    window.addEventListener('touchstart', cancelPendingJump, { passive: true });
    window.addEventListener('keydown', event => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) cancelPendingJump();
    });
  }
  window.addEventListener('scroll', schedule, { passive: true });
  const layoutChanged = () => { geometryDirty = true; schedule(); };
  window.addEventListener('resize', layoutChanged);
  window.addEventListener('load', layoutChanged, { once: true });
  document.fonts?.ready.then(layoutChanged);
  reducedMotion.addEventListener('change', schedule);
  railViewport.addEventListener('change', layoutChanged);
  schedule();
})();
