<template>
  <section class="search-template">
    <div class="container">
      <div class="search-template__grey-background">
        <!-- Your content here -->
        <p>Encontre lugares para trabalhar remotamente em Salvador</p>
        <div className="search-template__search-field">
          <button class="btn btn-primary">
            Pesquisar <Icon name="SearchIcon" />
          </button>
          <form-text
            type="text"
            placeholder="Procure lugares"
            v-model="search"
            id="search-field"
          />
        </div>
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
import FormSwitch from "../../molecules/forms/form-switch.vue";
import { usePlacesStore } from "../../../stores/places";
import { storeToRefs } from 'pinia';

const store = storeToRefs(usePlacesStore());

export default {
  data() {
    return {
      search: "",
      places: store,
    };
  },
  setup(props) {
    const filteredList = store;
    console.log(filteredList);
    return {
      filteredList,
    };
  },
  components: {
    Card,
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
      const filtered = props.places.filter((item) =>
        item.name.toLowerCase().includes(searchPlace.value.toLowerCase())
      );
      filteredList.value = filtered;
    },
  },
};
</script>

<style lang="sass">
@import "./search-template.scss"
</style>
