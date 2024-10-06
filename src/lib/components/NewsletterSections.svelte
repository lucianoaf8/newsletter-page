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
      { key: 'dailyChallenge' }
    ];
  </script>
  
  <div class="section-list">
    {#each sections as section}
      <div class="section-item">
        <h3>{$_(section.key)}</h3>
        <p>{$_(section.key + 'Desc')}</p>
      </div>
    {/each}
  </div>
  
  <style>
    .section-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    .section-item {
      background: rgba(255, 255, 255, 0.1);
      padding: 20px;
      border-radius: 10px;
      transition: all 0.3s ease;
    }
    .section-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 247, 255, 0.2);
    }
    .section-item h3 {
      color: #00f7ff;
      margin-bottom: 10px;
    }
  </style>