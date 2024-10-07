// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'bg-deep-blue',
    'bg-light-gray',
    'text-white',
    'hover:bg-deep-blue',
    'hover:text-white',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-blue': '#2c3e50',
        'light-blue': '#2980b9',
        'background-light-blue': '#e4ece1',

        // Accent Colors
        coral: '#ff7043',
        yellow: '#ffe066',
        green: 'green',

        // Soft Neutrals
        'soft-neutral': '#f9f9f9',

        // Grays
        'dark-gray': '#333333',
        'medium-gray': '#888888',
        'light-gray': '#f0f4f8',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        serif: ['Georgia', 'Palatino', 'Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
};
