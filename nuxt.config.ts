import { SITE_DESCRIPTION, SITE_TITLE } from './utils/site.js';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // Defaults only; every page sets its own title, description, canonical and social tags via usePageSeo().
      title: SITE_TITLE,
      meta: [
        { name: 'description', content: SITE_DESCRIPTION },
        { name: 'google-site-verification', content: 'qsEjNkUNVTLfWJNyQsKZH-n7QB48GgOKQBVGsGFafBo' },
        { name: 'theme-color', content: '#0b0d10' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preload', href: '/fonts/Satoshi-Black.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/Satoshi-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: ['@nuxtjs/color-mode'],

  colorMode: { classSuffix: '', preference: 'dark', fallback: 'dark' },

  // Prerender every page to static HTML so crawlers and link previews see real content.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/llms.txt'],
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
