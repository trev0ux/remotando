<template>
  <div
    class="modal fade"
    v-if="showModal"
    :class="{ show: showModal }"
    style="display: block"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Adicionar um lugar</h5>
          <button
            type="button"
            class="btn-close"
            @click="closeModal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <search-field @suggestionSelected="findPlaceOnMap" />
                </div>
                <div class="mb-3">
                  <form-text
                    type="text"
                    placeholder="Nome"
                    label="Nome"
                    v-model="place.name"
                    id="name"
                  />
                </div>
                <div class="mb-3">
                  <form-text
                    type="text"
                    placeholder="Website"
                    label="Website"
                    v-model="place.website"
                  />
                </div>
                <div class="mb-3">
                  <form-text
                    type="file"
                    placeholder="Escolha um arquivo"
                    v-model="place.image"
                  />
                </div>

                <div class="mb-3">
                  <form-select
                    id="place-type"
                    label="Select Type"
                    :options="types"
                    v-model="place.selectedType"
                  />
                </div>
                <div class="mb-3">
                  <fieldset>
                    <legend>Tem tomadas no ambiente?</legend>
                    <form-radio
                      v-for="option in socketsOptions"
                      :key="option.id"
                      :id="option.id"
                      :value="option.value"
                      v-model="place.socket"
                      :label="option.label"
                      name="socket"
                    />
                  </fieldset>
                </div>
                <div class="mb-3">
                  <fieldset>
                    <legend>Tem ruído no ambiente?</legend>
                    <form-radio
                      v-for="option in noiseOptions"
                      :key="option.id"
                      :id="option.id"
                      :value="option.value"
                      v-model="place.noise"
                      :label="option.label"
                      name="noise"
                    />
                  </fieldset>
                </div>
                <div class="mb-3">
                  <fieldset>
                    <legend>Tem wifi?</legend>
                    <form-radio
                      v-for="option in wifiOptions"
                      :key="option.id"
                      :id="option.id"
                      :value="option.value"
                      v-model="place.wifi"
                      :label="option.label"
                      name="wifi"
                    />
                  </fieldset>
                </div>
                <div class="mb-3">
                  <fieldset>
                    <legend>O espaço é gratuito?</legend>
                    <form-radio
                      v-for="option in spaceOptions"
                      :key="option.id"
                      :id="option.id"
                      :value="option.value"
                      v-model="place.isPay"
                      :label="option.label"
                      name="space"
                    />
                  </fieldset>
                </div>
              </div>
              <div class="col">
                <!-- Your OpenStreetMap component goes here -->
                <Map :center="center" :zoom="zoom" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormText from "../../molecules/forms/form-text.vue";
import FormSelect from "../../molecules/forms/form-select.vue";
import FormRadio from "../../molecules/forms/form-radio.vue";
import SearchField from "../../molecules/search-field/index.vue";
import Map from "../../molecules/map/index.vue";


export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    FormText,
    FormSelect,
    FormRadio,
    SearchField,
    Map,
    defineStore,
  },
  data() {
    return {
      types: [
        { value: "restaurant", label: "Restaurant" },
        { value: "cafe", label: "Cafe" },
        { value: "bar", label: "Bar" },
        // Add more options as needed
      ],
      center: ["-12.9822499", "-38.4812772"],
      zoom: 13,
      socketsOptions: [
        { id: "socket-1", value: "Nenhuma", label: "Nenhuma" },
        { id: "socket-2", value: "Algumas", label: "Algumas" },
        { id: "socket-3", value: "Muitas", label: "Muitas" },
      ],
      noiseOptions: [
        { id: "noise-1", value: "Sim, bastante", label: "Sim, bastante" },
        {
          id: "noise-2",
          value: "Sim, mas tolerável",
          label: "Sim, mas tolerável",
        },
        { id: "noise-3", value: "Não", label: "Não" },
      ],
      wifiOptions: [
        { id: "wifi-1", value: "Sim", label: "Sim" },
        { id: "wifi-2", value: "Não", label: "Não" },
      ],
      spaceOptions: [
        { id: "space-1", value: "Sim", label: "Sim" },
        { id: "space-2", value: "Não", label: "Não" },
      ],
      place: {
        location: "",
        name: "",
        selectedType: null,
        website: "",
        instagram: "",
        socket: "",
        wifi: false,
        wifiPassword: "",
        isPay: false,
        noise: "",
        image: "",
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    findPlaceOnMap(event) {
      this.center = event;
      this.place.location = this.center;
      this.zoom = 15;
      console.log(this.center);
    },
    handleSubmit() {
      const place = {
        location: this.place.location,
        name: this.place.name,
        website: this.place.website,
        type: this.place.selectedType,
        instagram: this.place.instagram,
        socket: this.place.socket,
        wifi: this.place.wifi,
        wifiPassword: this.place.wifiPassword,
        isPay: this.place.isPay,
        noise: this.place.noise,
        image: this.place.image,
      };

      const placeAdded = useState("placeAdded", place);
      placeAdded;
      console.log(place);
      //this.closeModal(); // Close modal after form submission
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
