import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'Daniel Y.N. - a human being',
        description: 'The personal page of Daniel Y.Navarro - Welcome!',
    },
    modules: ['@nuxtjs/color-mode'],
    colorMode: { classSuffix: '', preference: 'dark' },
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