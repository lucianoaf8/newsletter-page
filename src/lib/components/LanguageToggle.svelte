<script>
    import { locale, _ } from 'svelte-i18n';
  
    function setLanguage(lang) {
      locale.set(lang);
    }
  </script>
  
  <div id="languageToggle">
    <button on:click={() => setLanguage('en')} class="languageButton" class:activeLanguageButton={$locale === 'en'}>EN</button>
    <button on:click={() => setLanguage('pt')} class="languageButton" class:activeLanguageButton={$locale === 'pt'}>PT</button>
  </div>
  
  <style>
    /* Styles from the original Vue component */
    #languageToggle {
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 5px;
    }
  
    .languageButton {
      background: none;
      border: none;
      color: #ffffff;
      cursor: pointer;
      font-family: 'Rajdhani', sans-serif;
      font-size: 0.9rem;
      padding: 5px 10px;
      transition: color 0.3s ease;
    }
  
    .activeLanguageButton {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 15px;
    }
  
    .languageButton:hover {
      color: #00f7ff;
    }
  </style>