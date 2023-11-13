// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/plausible',
        'nuxt-svgo',
    ],
    app: {
        head: {
            title: "mattiamueggler.ch",
            htmlAttrs: {
                lang: 'en',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    devtools: {enabled: true},
    css: ['~/assets/style.scss'],
    plausible: {
        domain: 'mattiamueggler.ch',
    },
})
