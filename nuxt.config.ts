// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-07-10',
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/plausible',
        'nuxt-svgo',
    ],
    app: {
        // baseURL: '/mattiamueggler.ch/',
        // TODO: triggers the same bug as here: https://github.com/nuxt/nuxt/issues/20446#issuecomment-2205452080
        // buildAssetsDir: 'assets',
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
                { name : "description", content: "Hi, my name is Mattia Müggler. I'm twenty-years-old and work as a software engineer. This page will show you more information about me."},
                { name : "ogDescription", content: "Hi, my name is Mattia Müggler. I'm twenty-years-old and work as a software engineer. This page will show you more information about me."},
                { name : "theme-color", content: "#90E0EF"},
            ]
        }
    },
    // routeRules: {
    //     "/**": { ssr: true },
    // },
    devtools: {enabled: true},
    devServer: { port: 8082},
    css: ['~/assets/style.scss'],
    plausible: {
        domain: 'mattiamueggler.ch',
    },
    runtimeConfig: {
        driveUploadUrl: '',
        driveDownloadUrl: '',
        drivePassword: ''
    },
})

