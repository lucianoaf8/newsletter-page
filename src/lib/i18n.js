import { init, register, waitLocale } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('pt', () => import('./locales/pt.json'));

init({
  fallbackLocale: 'en',
  initialLocale: 'en' // We'll set this to a default for now
});

export const i18nReady = waitLocale();