<template>
  <section class="search-template">
    <div class="container">
      <div class="search-template__search-content">
        <NuxtImg
          src="/images/sun.png"
          alt="foto da cidade"
          class="search-template__sun"
        />
        <Icon class="search-template__wave" name="WaveIcon" />
        <Icon class="search-template__wave" name="WaveIcon" />
        <div class="search-template__grey-background"></div>
        <h2>{{ $t("exploreSearchPlaces") }}</h2>
        <div class="search-template__search-field">
          <button class="btn btn-primary">
            <span>{{ $t("search") }}</span> <Icon name="SearchIcon" />
          </button>
          <form-text
            type="text"
            v-model="searchQuery"
            @input="searchPlaces"
            :placeholder="$t('searchPlaces')"
            id="search-field"
          />
        </div>

        <div class="search-template__filters">
          <form-switch
            id="custom-switch-1"
            label="Wi-fi"
            @toggle="filterWifi"
          />
          <form-switch id="custom-switch-2" :label="$t('notes')" />
          <!-- <form-switch id="custom-switch-3" :label="$t('distance')" /> -->
        </div>
      </div>

      <section class="search-template__card-listing">
        <Card
          v-for="(place, index) in filteredPlaces"
          :key="`place-${index}`"
          :place="place"
          @edit-place="updatePlace"
        />
        <h5 v-if="places.length == 0" class="text-center w-100">{{ $t("nonePlacesRegistered") }}</h5>
      </section>
      <modal>
        <template #header>{{ modalService.modalState.value.title }}</template>
        <place-form :place="selectedPlace"></place-form>
      </modal>
    </div>
  </section>
</template>

<script>
import Card from "../../molecules/card";
import FormText from "../../molecules/forms/form-text";
import FormSwitch from "../../molecules/forms/form-switch/form-switch.vue";
import { usePlacesStore } from "../../../stores/places";
import { Icon } from "#components";
import { onMounted, ref, inject } from "vue";
import { defineAsyncComponent } from "vue";
import PlaceForm from "../../organisms/place-form/index.vue";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { useI18n } from 'vue-i18n';

export default {
  components: {
    Card,
    Icon,
    FormText,
    FormSwitch,
    Modal: defineAsyncComponent(() =>
      import("../../organisms/modal/index.vue")
    ),
    usePlacesStore,
    PlaceForm,
  },
  setup() {
    const center = ref([]);
    const nuxtApp = useNuxtApp();
    const selectedPlace = ref({});
    const places = ref({});
    const filteredPlaces = ref({});
    const modalService = inject("modalService");
    const searchQuery = ref("");
    const { t } = useI18n();

    onMounted(async () => {
      populatePlace();
    });

    function populatePlace() {
      onSnapshot(collection(nuxtApp.$db, "places"), (querySnapshot) => {
        const fbPlaces = [];
        querySnapshot.forEach((doc) => {
          const place = {
            id: doc.id,
            name: doc.data().name,
            location: doc.data().location,
            type: doc.data().type,
            website: doc.data().website,
            instagram: doc.data().instagram,
            socket: doc.data().socket,
            wifi: doc.data().wifi,
            wifiPassword: doc.data().wifiPassword,
            isPay: doc.data().isPay,
            noise: doc.data().noise,
          };
          fbPlaces.push(place);
        });
        places.value = fbPlaces;
        filteredPlaces.value = places.value;
      });
    }

    function updatePlace(id) {
      selectedPlace.value = places.value.find((place) => place.id == id);
      modalService.openModal(selectedPlace.value, t('editPlace'));
    }

    const filterWifi = (e) => {
      if (e) {
        filteredPlaces.value = places.value.filter((item) => item.wifi === 'Sim');
      } else {
        filteredPlaces.value = places.value;
      }
    }

    const searchPlaces = () => {
      return filteredPlaces.value = places.value.filter(place => 
        place.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }

    return {
      updatePlace,
      selectedPlace,
      modalService,
      searchQuery,
      populatePlace,
      filterWifi,
      searchPlaces,
      filteredPlaces,
      center,
      places,
    };
  },
};
</script>

<style lang="scss">
@import "./search-template.scss";
</style>
