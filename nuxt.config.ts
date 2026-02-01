export default ({
  app: {
      head: {
          charset: 'utf-16',
          title: 'Daniel is a human being',
          meta: [{ name: 'description', content: 'The personal page of Daniel Y.Navarro - Welcome' }, { name: "google-site-verification", content: "qsEjNkUNVTLfWJNyQsKZH-n7QB48GgOKQBVGsGFafBo" }],

      }
  },

  modules: ['@nuxtjs/color-mode', '@tresjs/nuxt', 'nuxt-swiper'],
  
  plugins: [
    '~/plugins/gsap.client.js'
    // '~/plugins/smooth-scroll.client.js' // Disabled temporarily
  ],
  colorMode: { classSuffix: '', preference: 'dark' },
  swiper: {},

  runtimeConfig: {
      public: {
          apiKey: process.env.NUXT_ENV_WEATHER_API_KEY
      }
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

  extend(config, ctx) {
      config.module.rules.push({
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          loader: 'file-loader',
          options: {
              name: '[path][name].[ext]'
          }
      })
  },

  css: [
      "~/assets/css/tailwind.css",
      "~/assets/css/global.css"
  ],

  ssr: false,
});
