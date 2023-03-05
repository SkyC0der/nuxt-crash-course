// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head:{
        title: 'Pilot Nuxt App',
        meta: [
            {name: 'description', content: 'Getting Started with Nuxt 3'}
        ],
        link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
});
