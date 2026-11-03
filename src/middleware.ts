/**
 * The dev server does not match the base path itself without a trailing
 * slash (/stem-jobs -> 404, because it resolves to /stem-jobs/stem-jobs in
 * middleware). Redirect it to /stem-jobs/ once, in one place. The static
 * build has no runtime, so this only affects astro dev.
 */
import { defineMiddleware } from 'astro/middleware';

const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

export const onRequest = defineMiddleware((context, next) => {
  if (base !== '/' && context.url.pathname === `${base}${base}`) {
    return context.redirect(`${base}/`, 308);
  }
  return next();
});
