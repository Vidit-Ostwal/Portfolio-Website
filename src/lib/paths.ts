/** Respects `astro.config.mjs` `base` when set; default is site root (`/`). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (!path || path === '/') return base;
  return `${base}${path.replace(/^\//, '')}`;
}
