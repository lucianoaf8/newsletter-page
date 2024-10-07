<script>
  import { _ } from 'svelte-i18n';
  import { goto } from '$app/navigation';

  let preferences = {
    sections: {},
    days: {},
    interests: ['', '', ''],
    language: 'en',
  };

  const sections = [
    'weather',
    'exchangeRates',
    'quoteOfTheDay',
    'funFact',
    'englishWithLuca',
    'onThisDay',
    'breathingBox',
    'dailyChallenge',
  ];
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  function savePreferences() {
    console.log('Preferences saved:', preferences);
    // Here you would typically send the preferences to your backend
    goto('/');
  }
</script>

<svelte:head>
  <title>{$_('editPreferencesTitle')}</title>
</svelte:head>

<div class="max-w-3xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-10">
  <h2 class="text-3xl font-bold mb-6 text-deep-blue text-center">
    {$_('editPreferencesTitle')}
  </h2>
  <form on:submit|preventDefault={savePreferences} class="space-y-6">
    <div>
      <h3 class="text-2xl font-semibold mb-4 text-deep-blue">
        {$_('newsletterSections')}
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each sections as section}
          <label class="flex items-center space-x-2">
            <input
              type="checkbox"
              bind:checked={preferences.sections[section]}
              class="form-checkbox h-5 w-5 text-deep-blue"
            />
            <span class="text-lg">{$_(section)}</span>
          </label>
        {/each}
      </div>
    </div>

    <div>
      <h3 class="text-2xl font-semibold mb-4 text-deep-blue">
        {$_('deliveryDays')}
      </h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {#each days as day}
          <label class="flex items-center space-x-2">
            <input
              type="checkbox"
              bind:checked={preferences.days[day]}
              class="form-checkbox h-5 w-5 text-deep-blue"
            />
            <span class="text-lg">{$_(day)}</span>
          </label>
        {/each}
      </div>
    </div>

    <div>
      <h3 class="text-2xl font-semibold mb-4 text-deep-blue">{$_('interests')}</h3>
      <div class="space-y-4">
        <input
          type="text"
          bind:value={preferences.interests[0]}
          placeholder={$_('interest1Placeholder')}
          class="input-field"
        />
        <input
          type="text"
          bind:value={preferences.interests[1]}
          placeholder={$_('interest2Placeholder')}
          class="input-field"
        />
        <input
          type="text"
          bind:value={preferences.interests[2]}
          placeholder={$_('interest3Placeholder')}
          class="input-field"
        />
      </div>
    </div>

    <div>
      <h3 class="text-2xl font-semibold mb-4 text-deep-blue">{$_('language')}</h3>
      <select bind:value={preferences.language} class="input-field">
        <option value="en">{$_('languageEnglish')}</option>
        <option value="pt">{$_('languagePortuguese')}</option>
        <option value="both">{$_('languageBoth')}</option>
      </select>
    </div>

    <div class="text-center">
      <button type="submit" class="submit-button">
        {$_('savePreferences')}
      </button>
    </div>
  </form>
  <div class="text-center mt-6">
    <a href="/" class="cta-button">{$_('backToHome')}</a>
  </div>
</div>
