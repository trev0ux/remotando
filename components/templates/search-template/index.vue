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
          :place="place"
          @edit-place="updatePlace"
        />
      </section>
      <modal @handleSubmit="handleSubmit">
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
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useModal } from "../../../services/modal-service";

export default {
  data() {
    return {
      search: "",
    };
  },
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
    const modalService = inject("modalService");

    useModal();

    const handleSubmit = (place) => {
      if (place.id) {
        editPlace(place);
      } else {
        addPlace(place);
      }
      modalService.closeModal();
    };

    onMounted(async () => {
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
      });
    });

    const editPlace = (place) => {
      updateDoc(doc(collection(nuxtApp.$db, "places"), place.id), {
        location: place.location,
        name: place.name,
        website: place.website,
        type: place.selectedType,
        instagram: place.instagram,
        socket: place.socket,
        wifi: place.wifi,
        wifiPassword: place.wifiPassword,
        isPay: place.isPay,
        noise: place.noise,
      });
    };

    const addPlace = (place) => {
      addDoc(collection(nuxtApp.$db, "places"), {
        location: placeenter.value,
        name: place.name,
        website: place.website,
        type: place.type,
        instagram: place.instagram,
        socket: place.socket,
        wifi: place.wifi,
        wifiPassword: place.wifiPassword,
        isPay: place.isPay,
        noise: place.noise,
      });
    };

    function updatePlace(id) {
      selectedPlace.value = places.value.find((place) => place.id == id);
      modalService.openModal(selectedPlace.value, "Editar lugar");
    }

    return {
      editPlace,
      addPlace,
      updatePlace,
      handleSubmit,
      selectedPlace,
      modalService,
      center,
      places,
    };
  },
};
</script>

<style lang="scss">
@import "./search-template.scss";
</style>
