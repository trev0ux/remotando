import { defineStore } from "pinia";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "../../../app.vue";

const app = createApp(App);
app.use(createPinia());

export const usePlacesStore = defineStore("places", {
  state: () => {
    return {
      currentLocale: 'en',
      places: []
    }
  },
  actions: {
    addPlace(newPlace) {
      this.$state.places.push(newPlace);
    },
    setLocale(locale) {
      this.currentLocale = locale
  
      const { $i18n } = useNuxtApp()      
      console.log($i18n.locale.value)
      $i18n.locale.value = locale
      console.log("test" + $i18n.locale.value)
  
      localStorage.setItem('user-lang', locale)
    }
  },
});
