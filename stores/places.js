import { defineStore } from "pinia";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "../../../app.vue";

const app = createApp(App);
app.use(createPinia());

export const usePlacesStore = defineStore("places", {
  state: () => {
    return {
      places: [
        {
          name: "cu"
        }
      ]
    };
  },
  actions: {
    addPlace(newPlace) {
      this.$state.places.push(newPlace);
    },
  },
});
