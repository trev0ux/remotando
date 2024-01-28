<template>
  <section class="search-template">
    <div class="container">
      <div class="search-template__search-content">
        <img class="search-template__sun" src="../../../assets/images/sun.png"/>
        <Icon class="search-template__wave" name="WaveIcon"/>
        <Icon class="search-template__wave" name="WaveIcon"/>
        <div class="search-template__grey-background"></div>
        <!-- Your content here -->
        <h2>Encontre lugares para trabalhar remotamente em Salvador</h2>
        <div className="search-template__search-field">
          <button class="btn btn-primary">
            <span>Pesquisar</span> <Icon name="SearchIcon" />
          </button>
          <form-text
            type="text"
            placeholder="Procure lugares"
            id="search-field"
          />
        </div>

        <div class="search-template__filters">
          <form-switch
            id="custom-switch-1"
            label="Wi-fi"
            @change="(e) => filterWifi(e.target.checked ? 'yes' : 'no')"
          />
          <form-switch id="custom-switch-2" label="Notas" />
          <form-switch id="custom-switch-3" label="Distância" />
        </div>
      </div>

      <section class="search-template__card-listing">
        <Card
          v-for="(place, index) in places"
          :key="`place-${index}`"
          :name="place.name"
          :type="place.type"
          :website="place.website"
          :instagram="place.instagram"
          :socket="place.socket"
          :wifi="place.wifi"
          :wifiPassword="place.wifiPassword"
          :space="place.space"
          :noise="place.noise"
          :image="place.image"
        />
      </section>
    </div>
  </section>
</template>

<script>
import Card from "../../molecules/card";
import FormText from "../../molecules/forms/form-text";
import FormSwitch from "../../molecules/forms/form-switch/form-switch.vue";
import { usePlacesStore } from "../../../stores/places";
import { storeToRefs } from "pinia";
import {Icon} from "#components";

const store = storeToRefs(usePlacesStore());

export default {
  data() {
    return {
      search: "",
      places: store.places,
    };
  },
  setup(props) {
    const filteredList = store.places;
    console.log(filteredList);
    return {
      filteredList,
    };
  },
  components: {
    Card,
    Icon,
    FormText,
    FormSwitch,
    usePlacesStore,
  },
  methods: {
    filterWifi(wifiStatus) {
      if (wifiStatus === "yes") {
        const filtered = this.places.filter((item) => item.wifi === wifiStatus);
        filteredList.value = filtered;
      }
    },
    filteredPlaces() {
      const filtered = this.places.filter((item) =>
        item.name.toLowerCase().includes(searchPlace.value.toLowerCase())
      );
      filteredList.value = filtered;
    },
  },
};
</script>

<style lang="scss">
@import "./search-template.scss"
</style>
