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
          // Handle submission error
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
  
  <div class="submit-error">
    <h2 class="title">{$_('submitErrorTitle')}</h2>
    <form id="submitErrorForm" on:submit={handleErrorSubmit} class="error-form">
      <input
        type="email"
        id="subscribeEmail"
        name="email"
        required
        placeholder={$_('subscribePlaceholder')}
        bind:value={email}
        class="neon-input"
      />
      <input
        type="text"
        name="errorSubject"
        placeholder={$_('subjectPlaceholder')}
        required
        class="neon-input"
        bind:value={errorSubject}
      />
      <textarea
        name="errorDescription"
        placeholder={$_('errorDescriptionPlaceholder')}
        required
        class="neon-textarea"
        bind:value={errorDescription}
      ></textarea>
      <button
        type="submit"
        class="submit-button neon-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? $_('submitting') : $_('submitError')}
      </button>
    </form>
    <a href="/" class="cta-button neon-cta cta-home">{$_('backToHome')}</a>
  </div>
  
  <style>
    .submit-button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  </style>