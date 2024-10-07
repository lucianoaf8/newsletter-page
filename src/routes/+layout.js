// src/routes/+layout.js
export const load = async ({ url }) => {
  // Determine the locale from URL parameters or default to 'en'
  const locale = url.searchParams.get('lang') || 'en';

  return {
    locale,
  };
};
