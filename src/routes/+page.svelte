<script>
    import { _ } from 'svelte-i18n';
    import NewsletterSections from '$lib/components/NewsletterSections.svelte';
  </script>
  
  <svelte:head>
    <title>{$_('title')}</title>
  </svelte:head>
  
  <div class="home">
    <h1 id="title">{$_('title')}</h1>
    <div id="content">
      <p>{$_('description')}</p>
      <NewsletterSections />
      <div class="cta-buttons">
        <a href="/subscribe" class="cta-button cta-subscribe">{$_('subscribeNow')}</a>
        <a href="/unsubscribe" class="cta-button cta-unsubscribe">{$_('unsubscribe')}</a>
        <a href="/edit-preferences" class="cta-button cta-edit-preferences">{$_('editPreferences')}</a>
        <a href="/submit-error" class="cta-button cta-submit-error">{$_('submitError')}</a>
        <a href="/submit-request" class="cta-button cta-submit-request">{$_('submitRequest')}</a>
      </div>
    </div>
  </div>