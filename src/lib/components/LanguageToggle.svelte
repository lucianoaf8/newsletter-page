<!-- src/lib/components/LanguageToggle.svelte -->
<script>
  import { locale } from 'svelte-i18n';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onDestroy } from 'svelte';

  let currentLocale;

  // Subscribe to the locale store
  const unsubscribe = locale.subscribe(value => {
    currentLocale = value;
  });

  // Clean up the subscription when the component is destroyed
  onDestroy(() => {
    unsubscribe();
  });

  function setLanguage(lang) {
    if (lang !== currentLocale) {
      console.log(`Setting language to: ${lang}`); // Debugging log
      locale.set(lang);
      // Update the URL to reflect the language change
      const url = new URL($page.url);
      url.searchParams.set('lang', lang);
      goto(url.pathname + url.search, { replaceState: true });
    }
  }
</script>

<div class="absolute top-5 right-5 flex items-center bg-light-gray bg-opacity-50 rounded-full p-1 z-10">
  <button
    on:click={() => setLanguage('en')}
    class={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ease-in-out ${
      currentLocale === 'en' ? 'bg-deep-blue text-white' : 'hover:bg-deep-blue hover:text-white'
    }`}
    aria-label="Switch to English"
  >
    EN
  </button>
  <button
    on:click={() => setLanguage('pt')}
    class={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ease-in-out ${
      currentLocale === 'pt' ? 'bg-deep-blue text-white' : 'hover:bg-deep-blue hover:text-white'
    }`}
    aria-label="Switch to Portuguese"
  >
    PT
  </button>
</div>
