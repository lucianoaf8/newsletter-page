// src/lib/i18n.js
import { register } from 'svelte-i18n';
import en from './locales/en.json';
import pt from './locales/pt.json';

export function registerLocales() {
  register('en', () => Promise.resolve(en));
  register('pt', () => Promise.resolve(pt));
}
