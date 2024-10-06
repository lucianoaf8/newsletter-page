<script>
    import { _ } from 'svelte-i18n';
    import { goto } from '$app/navigation';
  
    let isSubmitting = false;
    let email = '';
    let requestSubject = '';
    let requestDescription = '';
    let attachment = null; // To store the selected file
  
    function handleFileUpload(event) {
      attachment = event.target.files[0];
    }
  
    async function handleRequestSubmit(event) {
      event.preventDefault();
      isSubmitting = true;
      try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('requestSubject', requestSubject);
        formData.append('requestDescription', requestDescription);
        if (attachment) {
          formData.append('attachment', attachment);
        }
        formData.append('_subject', 'New Request Submission');
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
  
  <div class="submit-request">
    <h2 class="title">{$_('submitRequestTitle')}</h2>
    <form id="submitRequestForm" on:submit={handleRequestSubmit} class="request-form">
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
        name="requestSubject"
        placeholder={$_('subjectPlaceholder')}
        required
        class="neon-input"
        bind:value={requestSubject}
      />
      <textarea
        name="requestDescription"
        placeholder={$_('requestDescriptionPlaceholder')}
        required
        class="neon-textarea"
        bind:value={requestDescription}
      ></textarea>
      <input
        type="file"
        on:change={handleFileUpload}
        class="neon-input"
      />
      <button
        type="submit"
        class="submit-button neon-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? $_('submitting') : $_('submitRequest')}
      </button>
    </form>
    <a href="/" class="cta-button cta-home">{$_('backToHome')}</a>
  </div>
  
  <style>
    .submit-button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  </style>