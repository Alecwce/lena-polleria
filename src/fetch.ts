/**
 * Pipeline Hono — activo en dev server.
 * En producción (Cloudflare Pages, output: static),
 * los headers de seguridad los sirve `public/_headers`.
 * Si se migra a SSR, usar @astrojs/cloudflare adapter
 * y este pipeline toma el control completo.
 */
import { Hono } from "hono";
import { pages, middleware } from "astro/hono";
import { securityHeaders } from "./middleware/security";

const app = new Hono();
app.use(securityHeaders()); // Headers ANTES de todo
app.use(middleware());
app.use(pages());

export default {
  fetch: app.fetch,
};
