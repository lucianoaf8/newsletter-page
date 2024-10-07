<script>
  import { _ } from 'svelte-i18n';
  import { goto } from '$app/navigation';

  let email = '';
  let isSubmitting = false;

  async function handleUnsubscribe(event) {
    event.preventDefault();
    isSubmitting = true;

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically make an API call
    console.log('Unsubscribing:', email);

    goto('/unsubscribe-success');
  }
</script>

<svelte:head>
  <title>{$_('unsubscribeTitle')}</title>
</svelte:head>

<div class="max-w-md mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-10">
  <h2 class="text-3xl font-bold mb-6 text-deep-blue text-center">
    {$_('unsubscribeTitle')}
  </h2>
  <form on:submit={handleUnsubscribe} class="space-y-4">
    <input
      type="email"
      bind:value={email}
      required
      placeholder={$_('unsubscribePlaceholder')}
      class="input-field"
    />
    <div class="text-center">
      <button
        type="submit"
        class="submit-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? $_('submitting') : $_('unsubscribeButton')}
      </button>
    </div>
  </form>
  <div class="text-center mt-6">
    <a href="/" class="cta-button">{$_('backToHome')}</a>
  </div>
</div>

<style>
  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
</style>
