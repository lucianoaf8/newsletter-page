<!-- src/routes/+page.svelte -->
<script>
  import { _ } from 'svelte-i18n';
  import NewsletterSections from '$lib/components/NewsletterSections.svelte';
</script>

<svelte:head>
  <title>{$_('title')}</title>
</svelte:head>

<div class="text-center">
  <h1 class="text-5xl font-bold mb-8 bg-gradient-to-r from-deep-blue to-light-blue bg-clip-text text-transparent">
    {$_('title')}
  </h1>
  <div class="max-w-2xl mx-auto">
    <p class="mb-8 text-lg">{$_('description')}</p>
    <NewsletterSections />
    <div class="flex flex-wrap justify-center gap-4 mt-8">
      <a href="/subscribe" class="cta-button bg-coral text-white">
        {$_('subscribeNow')}
      </a>
      <a href="/unsubscribe" class="cta-button bg-yellow text-dark-gray">
        {$_('unsubscribe')}
      </a>
      <a href="/edit-preferences" class="cta-button bg-light-blue text-white">
        {$_('editPreferences')}
      </a>
      <a href="/submit-error" class="cta-button bg-green text-white">
        {$_('submitErrorButton')}
      </a>
      <a href="/submit-request" class="cta-button bg-deep-blue text-white">
        {$_('submitRequestButton')}
      </a>
    </div>
  </div>
</div>
