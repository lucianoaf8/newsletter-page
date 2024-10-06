<script>
    import { _ } from 'svelte-i18n';
    import { goto } from '$app/navigation';
  
    let email = '';
    let isSubmitting = false;
  
    async function handleUnsubscribe(event) {
      event.preventDefault();
      isSubmitting = true;
  
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      // Here you would typically make an API call
      console.log('Unsubscribing:', email);
  
      goto('/unsubscribe-success');
    }
  </script>
  
  <svelte:head>
    <title>{$_('unsubscribeTitle')}</title>
  </svelte:head>
  
  <div class="unsubscribe">
    <h2>{$_('unsubscribeTitle')}</h2>
    <form on:submit={handleUnsubscribe}>
      <input type="email" bind:value={email} required placeholder={$_('unsubscribePlaceholder')}>
      <input type="hidden" name="_subject" value="New Unsubscribe Request">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_captcha" value="false">
      <button type="submit" class="submitButton" disabled={isSubmitting}>
        {isSubmitting ? $_('submitting') : $_('unsubscribeButton')}
      </button>
    </form>
    <a href="/" class="cta-button cta-home">{$_('backToHome')}</a>
  </div>
  
  <style>
    .submitButton:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  </style>