/**
 * Canonical viewport breakpoints for mobile vs desktop layout.
 * CSS uses matching tokens in breakpoints.css via @custom-media (--mobile, --mobile-sm).
 */
export const BREAKPOINTS = {
  /** Timeline single-column layout, mobile side nav */
  mobile: 640,
  /** Compact UI: icon-only links, theme FAB, tighter padding */
  mobileSm: 520,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export const MEDIA_QUERIES: Record<Breakpoint, string> = {
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  mobileSm: `(max-width: ${BREAKPOINTS.mobileSm}px)`,
};

export const MEDIA_QUERIES_MIN: Record<Breakpoint, string> = {
  mobile: `(min-width: ${BREAKPOINTS.mobile + 1}px)`,
  mobileSm: `(min-width: ${BREAKPOINTS.mobileSm + 1}px)`,
};

export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(MEDIA_QUERIES.mobile).matches;
}

export function isMobileSm(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(MEDIA_QUERIES.mobileSm).matches;
}

export function getMediaQuery(breakpoint: Breakpoint): MediaQueryList {
  if (typeof window === 'undefined') {
    return { matches: false, media: MEDIA_QUERIES[breakpoint] } as MediaQueryList;
  }
  return window.matchMedia(MEDIA_QUERIES[breakpoint]);
}

export function onBreakpoint(
  breakpoint: Breakpoint,
  listener: (matches: boolean) => void,
): () => void {
  const mq = getMediaQuery(breakpoint);
  const handler = () => listener(mq.matches);
  mq.addEventListener('change', handler);
  listener(mq.matches);
  return () => mq.removeEventListener('change', handler);
}
