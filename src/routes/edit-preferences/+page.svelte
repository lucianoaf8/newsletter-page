<script>
    import { _ } from 'svelte-i18n';
    import { goto } from '$app/navigation';
  
    let preferences = {
      sections: {},
      days: {},
      interests: ['', '', ''],
      language: 'en'
    };
  
    const sections = ['weather', 'exchangeRates', 'quoteOfTheDay', 'funFact', 'englishWithLuca', 'onThisDay', 'breathingBox', 'dailyChallenge'];
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  
    function savePreferences() {
      console.log('Preferences saved:', preferences);
      // Here you would typically send the preferences to your backend
      goto('/');
    }
  </script>
  
  <svelte:head>
    <title>{$_('editPreferencesTitle')}</title>
  </svelte:head>
  
  <div class="edit-preferences">
    <h2>{$_('editPreferencesTitle')}</h2>
    <form on:submit|preventDefault={savePreferences}>
      <h3>{$_('newsletterSections')}</h3>
      {#each sections as section}
        <label>
          <input type="checkbox" bind:checked={preferences.sections[section]}>
          {$_(section)}
        </label>
      {/each}
  
      <h3>{$_('deliveryDays')}</h3>
      {#each days as day}
        <label>
          <input type="checkbox" bind:checked={preferences.days[day]}>
          {$_(day)}
        </label>
      {/each}
  
      <h3>{$_('interests')}</h3>
      <input type="text" bind:value={preferences.interests[0]} placeholder={$_('interest1Placeholder')}>
      <input type="text" bind:value={preferences.interests[1]} placeholder={$_('interest2Placeholder')}>
      <input type="text" bind:value={preferences.interests[2]} placeholder={$_('interest3Placeholder')}>
  
      <h3>{$_('language')}</h3>
      <select bind:value={preferences.language}>
        <option value="en">{$_('languageEnglish')}</option>
        <option value="pt">{$_('languagePortuguese')}</option>
        <option value="both">{$_('languageBoth')}</option>
      </select>
  
      <button type="submit" class="submitButton">{$_('savePreferences')}</button>
    </form>
    <a href="/" class="cta-button cta-home">{$_('backToHome')}</a>
  </div>