<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
  import LanguageToggle from '$lib/components/LanguageToggle.svelte';
</script>

<div id="app" class="bg-soft-neutral text-dark-gray min-h-screen flex flex-col relative">
  <!-- Temporarily removed background div for testing -->
  <!-- <div id="background" class="absolute inset-0 pointer-events-none z-0">
    <div class="background-circle"></div>
    <div class="background-circle"></div>
    <div class="background-circle"></div>
  </div> -->
  
  <LanguageToggle class="z-10" />
  
  <main id="container" class="flex-grow relative z-10">
    <slot></slot>
  </main>
</div>
