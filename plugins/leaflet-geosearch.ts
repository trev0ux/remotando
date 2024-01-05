import { OpenStreetMapProvider } from 'leaflet-geosearch'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('leafletGeosearch', {
        provider: new OpenStreetMapProvider(),
    })
})