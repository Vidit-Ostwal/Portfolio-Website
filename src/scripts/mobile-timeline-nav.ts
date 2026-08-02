import { getMediaQuery, onBreakpoint } from '../lib/breakpoints';

const HIDE_DELAY_MS = 1000;

function shortYear(dateStr: string) {
  if (!dateStr) return '';
  const time = Date.parse(dateStr.includes('-') ? dateStr : `${dateStr} 1`);
  if (Number.isNaN(time)) return '';
  return new Date(time).getFullYear().toString();
}

export function initMobileTimelineNav(root: ParentNode = document) {
  const mobileNav = root.querySelector<HTMLElement>('.mobile-timeline-nav');
  const mobileTrack = root.querySelector<HTMLElement>('.mobile-timeline-nav-track');
  const mobileDots = root.querySelector<HTMLElement>('.mobile-timeline-nav-dots');
  const mobileDate = root.querySelector<HTMLElement>('.mobile-timeline-nav-date');
  const boundTop = root.querySelector<HTMLElement>('.mobile-timeline-nav-bound[data-bound="top"]');
  const boundBottom = root.querySelector<HTMLElement>('.mobile-timeline-nav-bound[data-bound="bottom"]');
  const rowSelector = '.timeline-row';
  const mobileMq = getMediaQuery('mobile');

  if (!mobileNav || !mobileDots) {
    return { refresh: () => {} };
  }

  let visibleRows: HTMLElement[] = [];
  let dragging = false;
  let hideTimer: ReturnType<typeof setTimeout> | null = null;

  function getRows() {
    return [...root.querySelectorAll<HTMLElement>(rowSelector)];
  }

  function getVisibleRows() {
    return getRows().filter((row) => !row.classList.contains('is-hidden'));
  }

  function showMobileNav() {
    if (mobileNav.hidden) return;
    mobileNav.classList.add('is-visible');
    scheduleHide();
  }

  function scheduleHide() {
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (!dragging) mobileNav.classList.remove('is-visible');
    }, HIDE_DELAY_MS);
  }

  function cancelHide() {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  }

  function scrollTargetForRow(row: HTMLElement) {
    return row.getBoundingClientRect().top + window.scrollY - 72;
  }

  function setActiveIndex(index: number) {
    if (visibleRows.length === 0) return;

    const clamped = Math.max(0, Math.min(index, visibleRows.length - 1));
    const row = visibleRows[clamped];

    mobileDots.querySelectorAll<HTMLButtonElement>('.mobile-timeline-nav-dot').forEach((dot, i) => {
      const active = i === clamped;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
    });

    if (mobileDate && row) {
      mobileDate.textContent = row.dataset.navDate ?? '';
    }
  }

  function scrollToIndex(index: number, smooth = true) {
    const row = visibleRows[index];
    if (!row) return;

    window.scrollTo({
      top: Math.max(0, scrollTargetForRow(row)),
      behavior: smooth ? 'smooth' : 'instant',
    });
  }

  function indexFromPointer(clientY: number) {
    if (!mobileTrack || visibleRows.length === 0) return 0;

    const rect = mobileTrack.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

    return visibleRows.length <= 1
      ? 0
      : Math.round(ratio * (visibleRows.length - 1));
  }

  function indexFromScroll() {
    if (visibleRows.length === 0) return 0;

    const anchor = 88;
    let best = 0;
    let bestDistance = Infinity;

    visibleRows.forEach((row, index) => {
      const distance = Math.abs(row.getBoundingClientRect().top - anchor);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });

    return best;
  }

  function renderMobileNav() {
    visibleRows = getVisibleRows();
    const enabled = mobileMq.matches && visibleRows.length > 1;

    mobileNav.hidden = !enabled;
    if (!enabled) return;

    const newest = visibleRows[0];
    const oldest = visibleRows[visibleRows.length - 1];

    if (boundTop) boundTop.textContent = shortYear(newest?.dataset.navEnd ?? '');
    if (boundBottom) boundBottom.textContent = shortYear(oldest?.dataset.navStart ?? '');

    mobileDots.innerHTML = '';

    visibleRows.forEach((row, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'mobile-timeline-nav-dot';
      dot.dataset.index = String(index);
      dot.setAttribute('aria-label', row.dataset.navLabel ?? `Item ${index + 1}`);
      dot.addEventListener('click', () => {
        setActiveIndex(index);
        scrollToIndex(index);
        showMobileNav();
      });
      mobileDots.appendChild(dot);
    });

    setActiveIndex(indexFromScroll());
    showMobileNav();
  }

  function updateMobileNavFromScroll() {
    if (!dragging && mobileMq.matches && visibleRows.length > 1) {
      setActiveIndex(indexFromScroll());
    }
  }

  mobileTrack?.addEventListener('pointerdown', (event) => {
    if (!mobileMq.matches || visibleRows.length <= 1) return;

    cancelHide();
    showMobileNav();
    dragging = true;
    mobileTrack.classList.add('is-dragging');
    mobileTrack.setPointerCapture(event.pointerId);

    const index = indexFromPointer(event.clientY);
    setActiveIndex(index);
    scrollToIndex(index, false);
  });

  mobileTrack?.addEventListener('pointermove', (event) => {
    if (!dragging) return;

    const index = indexFromPointer(event.clientY);
    setActiveIndex(index);
    scrollToIndex(index, false);
  });

  function endMobileDrag(event: PointerEvent) {
    if (!dragging) return;
    dragging = false;
    mobileTrack?.classList.remove('is-dragging');
    mobileTrack?.releasePointerCapture(event.pointerId);
    scheduleHide();
  }

  mobileNav.addEventListener('pointerenter', cancelHide);
  mobileNav.addEventListener('pointerleave', scheduleHide);

  mobileTrack?.addEventListener('pointerup', endMobileDrag);
  mobileTrack?.addEventListener('pointercancel', endMobileDrag);

  window.addEventListener('scroll', () => {
    showMobileNav();
    requestAnimationFrame(updateMobileNavFromScroll);
  }, { passive: true });

  window.addEventListener('resize', renderMobileNav, { passive: true });
  const stopBreakpointListener = onBreakpoint('mobile', renderMobileNav);
  document.addEventListener('timeline-rows-changed', renderMobileNav);

  renderMobileNav();

  return {
    refresh: renderMobileNav,
    destroy: () => {
      stopBreakpointListener();
    },
  };
}
