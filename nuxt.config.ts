// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [{ src: './assets/styles/globals.scss', lang: 'sass' }],
  app: {
    head: {
      title: "Remotando",
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
          crossorigin: "anonymous",
        },
      ],    
    }
  },
  modules: ['nuxt-icon',
    'nuxt3-leaflet',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/image',
    ['nuxt-mail', {
      message: {
        to: 'lucas.lopes5@hotmail.com',
      },
      smtp: {
        service: 'gmail',
        auth: {
          user: 'dev.amorim18@gmail.com',
          pass: 'kyir yegq dgub cowq'
        },
      },
    }],
  ],
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  plugins: [
    { src: '~/plugins/leaflet-geosearch.ts', mode: 'client' },
    { src: '~/plugins/firebase.client.ts', mode: 'client'}
  ]
})