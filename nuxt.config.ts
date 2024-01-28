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
    '@pinia/nuxt',
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
  plugins: [
    { src: '~/plugins/leaflet-geosearch.ts', mode: 'client' }
  ]
})
