import path from 'path'
import fs from 'fs'
// https://v3.nuxtjs.org/api/configuration/nuxt.config

const config = {}

if (process.env.NODE_ENV === "development") {
    config.server = {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
        }
    }
}

export default ({
    ssr: false,
    target: "static",
    app: {
        head: {
            charset: 'utf-16',
            title: 'Daniel is a human being',
            meta: [{ name: 'description', content: 'The personal page of Daniel Y.Navarro - Welcome' }],
            htmlAttrs: {
                lang: 'en'
            }

        }
    },
    serverMiddleware: {
        '/_ipx': '~/server/middleware/ipx.js'
    },
    image: {
        dir: 'assets/img',
    },

    modules: ['@nuxtjs/color-mode', '@nuxt/image-edge'],
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

})