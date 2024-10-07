<script>
  import { _ } from 'svelte-i18n';
  import { goto } from '$app/navigation';

  let isSubmitting = false;
  let email = '';
  let errorSubject = '';
  let errorDescription = '';

  async function handleErrorSubmit(event) {
    event.preventDefault();
    isSubmitting = true;

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('errorSubject', errorSubject);
      formData.append('errorDescription', errorDescription);
      formData.append('_subject', 'New Error Submission');
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const response = await fetch(
        'https://formsubmit.co/ajax/ae13ee8bbcd4e22acd6e07e9e275bd47',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        // Navigate to success page
        goto('/success-page');
      } else {
        const errorText = await response.text();
        console.error('Form submission failed:', errorText);
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="max-w-2xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-10">
  <h2 class="text-3xl font-bold mb-6 text-deep-blue text-center">
    {$_('submitErrorTitle')}
  </h2>
  <form on:submit={handleErrorSubmit} class="space-y-4">
    <input
      type="email"
      name="email"
      required
      placeholder={$_('subscribePlaceholder')}
      bind:value={email}
      class="input-field"
    />
    <input
      type="text"
      name="errorSubject"
      placeholder={$_('subjectPlaceholder')}
      required
      bind:value={errorSubject}
      class="input-field"
    />
    <textarea
      name="errorDescription"
      placeholder={$_('errorDescriptionPlaceholder')}
      required
      bind:value={errorDescription}
      class="input-field h-32 resize-none"
    ></textarea>
    <div class="text-center">
      <button
        type="submit"
        class="submit-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? $_('submitting') : $_('submitError')}
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
