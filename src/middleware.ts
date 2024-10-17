import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['sr', 'en'],

  // Default locale if no match
  defaultLocale: 'sr'
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(sr|en)/:page*']
};