import type { APIRoute } from 'astro';
import { buildLlmsTxt } from '../lib/llms-txt';

export const prerender = true;

export const GET: APIRoute = async () => {
  const body = await buildLlmsTxt();
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
