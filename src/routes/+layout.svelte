<script>
    import { onMount } from 'svelte';
    import { initializeI18n } from '$lib/i18n';
    import LanguageToggle from '$lib/components/LanguageToggle.svelte';
    import '../app.css';
  
    onMount(() => {
      initializeI18n();
    });
  </script>
  
  <div id="app">
    <LanguageToggle />
    <div id="background">
      <div class="background-circle"></div>
      <div class="background-circle"></div>
      <div class="background-circle"></div>
    </div>
    <div id="container">
      <slot></slot>
    </div>
  </div>
  
  <style>
    /* You can add any global styles here if needed */
  </style>