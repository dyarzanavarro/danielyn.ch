const siteUrl = 'https://www.danielyn.ch';
const description =
  'Daniel Yarza Navarro: product and UX lead in Zurich who also builds his own products, like the Mise meal planner and the Shelfie ebook library for Windows.';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Daniel Yarza Navarro: Product, UX & things I build',
      meta: [
        { name: 'description', content: description },
        { name: 'google-site-verification', content: 'qsEjNkUNVTLfWJNyQsKZH-n7QB48GgOKQBVGsGFafBo' },
        { name: 'theme-color', content: '#0b0d10' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'danielyn.ch' },
        { property: 'og:title', content: 'Daniel Yarza Navarro: Product, UX & things I build' },
        { property: 'og:description', content: description },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: `${siteUrl}/og/home.png` },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: ['@nuxtjs/color-mode'],

  colorMode: { classSuffix: '', preference: 'dark', fallback: 'dark' },

  // Prerender every page to static HTML so crawlers and link previews see real content.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    },
  },

  css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],

  compatibilityDate: '2025-08-31',
});
