// src/hooks.client.js
import { init, getLocaleFromNavigator } from 'svelte-i18n';
import { registerLocales } from '$lib/i18n';

registerLocales();

// Determine initial locale from URL or navigator
const url = new URL(window.location);
const lang = url.searchParams.get('lang') || getLocaleFromNavigator() || 'en';

// Initialize svelte-i18n
init({
  fallbackLocale: 'en',
  initialLocale: lang,
});

console.log('Client-side svelte-i18n initialized with locale:', lang);
