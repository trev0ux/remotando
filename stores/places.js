import { defineStore } from "pinia";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "../../../app.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

export const usePlacesStore = defineStore("places", {
  state: () => [
    {
      location: "",
      name: "João Grilo",
      selectedType: "",
      website: "",
      instagram: "",
      socket: "",
      wifi: false,
      wifiPassword: "",
      isPay: false,
      noise: "",
      image: "",
    },
  ],
  //   getters: {
  //     doubleCount: (state) => state.count * 2,
  //   },
  //   actions: {
  //     increment() {
  //       this.count++;
  //     },
  //   },
});
