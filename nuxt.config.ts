import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    app: {
        head: {
            charset: 'utf-16',
            title: 'Daniel is a human being',
            meta: [{ name: 'description', content: 'The personal page of Daniel Y.Navarro - Welcome' }],

        }
    },

    modules: ['@nuxtjs/color-mode', '@nuxt/image-edge'],
    colorMode: { classSuffix: '', preference: 'dark' },
    image: { dir: 'assets/img', screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536, '2xl': 1536 }, },

    build: {

        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
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
        "~/assets/css/tailwind.css"
    ],

    ssr: false
})