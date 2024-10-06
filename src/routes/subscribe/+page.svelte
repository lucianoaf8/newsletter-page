<script>
    import { _ } from 'svelte-i18n';
    import { goto } from '$app/navigation';
  
    let email = '';
    let isSubmitting = false;
  
    async function handleSubscribe(event) {
      event.preventDefault();
      isSubmitting = true;
  
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      // Here you would typically make an API call
      console.log('Subscribing:', email);
  
      goto('/subscribe-success');
    }
  </script>
  
  <svelte:head>
    <title>{$_('subscribeTitle')}</title>
  </svelte:head>
  
  <div class="subscribe">
    <h2>{$_('subscribeTitle')}</h2>
    <form on:submit={handleSubscribe}>
      <input type="email" bind:value={email} required placeholder={$_('subscribePlaceholder')}>
      <input type="hidden" name="_subject" value="New Subscribe Request">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_captcha" value="false">
      <button type="submit" class="submitButton" disabled={isSubmitting}>
        {isSubmitting ? $_('submitting') : $_('subscribeButton')}
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