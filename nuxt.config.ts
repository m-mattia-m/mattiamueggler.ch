// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/plausible',
        'nuxt-svgo',
    ],
    app: {
        baseURL: '/mattiamueggler.ch/',
        buildAssetsDir: 'assets',
        head: {
            title: "mattiamueggler.ch",
            htmlAttrs: {
                lang: 'en',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    // routeRules: {
    //     "/**": { ssr: true },
    // },
    devtools: {enabled: true},
    css: ['~/assets/style.scss'],
    plausible: {
        domain: 'mattiamueggler.ch',
    },
})

