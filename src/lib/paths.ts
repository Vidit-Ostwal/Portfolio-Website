/** Prefix for GitHub project Pages (`astro.config.mjs` `base`). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (!path || path === '/') return base;
  return `${base}${path.replace(/^\//, '')}`;
}
