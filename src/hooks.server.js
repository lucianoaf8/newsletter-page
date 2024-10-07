// src/hooks.server.js
import { init } from 'svelte-i18n';
import { registerLocales } from '$lib/i18n';

registerLocales();

export async function handle({ event, resolve }) {
  // Extract 'lang' from query parameters or default to 'en'
  const lang = event.url.searchParams.get('lang') || 'en';

  // Initialize svelte-i18n with the detected locale
  init({
    fallbackLocale: 'en',
    initialLocale: lang,
  });

  console.log('Server-side svelte-i18n initialized with locale:', lang);

  const response = await resolve(event);
  return response;
}
