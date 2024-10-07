<script>
  import { _ } from 'svelte-i18n';

  const sections = [
    { key: 'weather' },
    { key: 'exchangeRates' },
    { key: 'quoteOfTheDay' },
    { key: 'funFact' },
    { key: 'englishWithLuca' },
    { key: 'onThisDay' },
    { key: 'breathingBox' },
    { key: 'dailyChallenge' },
  ];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
  {#each sections as section}
    <div class="bg-soft-neutral p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <h3 class="text-deep-blue text-xl font-semibold mb-2">{$_(section.key)}</h3>
      <p class="text-dark-gray">{$_(section.key + 'Desc')}</p>
    </div>
  {/each}
</div>
