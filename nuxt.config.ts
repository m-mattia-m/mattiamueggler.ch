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
            meta: [
                { name : "title", content: "Mattia Müggler"},
                { name : "ogTitle", content: "Mattia Müggler"},
                { name : "description", content: "Hi, my name is Mattia Müggler. I'm 20 years old and work as a software engineer. This page will show you more information about me."},
                { name : "ogDescription", content: "Hi, my name is Mattia Müggler. I'm 20 years old and work as a software engineer. This page will show you more information about me."},
                { name : "theme-color", content: "#90E0EF"},
            ]
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

