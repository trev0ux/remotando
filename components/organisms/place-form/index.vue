<template>
  <form @submit.prevent="handleSubmit" class="add-place-modal__form">
    <div class="row add-place-modal">
      <div class="col-12 col-lg-6">
        <div class="mb-3">
          <search-field @suggestionSelected="findPlaceOnMap" />
        </div>
        <fieldset>
          <legend>Informações do estabelecimento</legend>
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
              type="text"
              placeholder="Instagram"
              label="Instagram"
              v-model="place.instagram"
            />
          </div>
          <div class="mb-3">
            <form-select
              id="place-type"
              label="Tipo de estabelecimento"
              :options="types"
              v-model="place.type"
              :selected-option="place.type"
            />
          </div>
        </fieldset>

        <div class="mb-3">
          <fieldset>
            <legend>Tem tomadas no ambiente?</legend>
            <div>
              <form-radio
                v-for="option in socketsOptions"
                :key="option.id"
                :id="option.id"
                :value="option.value"
                v-model="place.socket"
                :label="option.label"
                name="socket"
              />
            </div>
          </fieldset>
        </div>
        <div class="mb-3">
          <fieldset>
            <legend>Tem ruído no ambiente?</legend>
            <div>
              <form-radio
                v-for="option in noiseOptions"
                :key="option.id"
                :id="option.id"
                :value="option.value"
                v-model="place.noise"
                :label="option.label"
                name="noise"
              />
            </div>
          </fieldset>
        </div>
        <div class="mb-3">
          <fieldset>
            <legend>Tem wifi?</legend>
            <div>
              <form-radio
                v-for="option in wifiOptions"
                :key="option.id"
                :id="option.id"
                :value="option.value"
                v-model="place.wifi"
                :label="option.label"
                name="wifi"
              />
            </div>
          </fieldset>
        </div>
        <div class="mb-3" v-if="place.wifi == 'Sim'">
          <form-text
            type="text"
            placeholder="Senha do wifi"
            label="Senha do wifi"
            v-model="place.wifiPassword"
          />
        </div>
        <div class="mb-3">
          <fieldset>
            <legend>O espaço é gratuito?</legend>
            <div>
              <form-radio
                v-for="option in spaceOptions"
                :key="option.id"
                :id="option.id"
                :value="option.value"
                v-model="place.isPay"
                :label="option.label"
                name="space"
              />
            </div>
          </fieldset>
        </div>
      </div>
      <div class="col-12 col-lg-6 add-place-modal__map">
        <Map :center="center" :zoom="zoom" />
      </div>
    </div>
    <div class="modal-footer add-place-modal__footer">
      <button type="button" class="btn btn-outline-primary" @click="closeModal">
        Fechar
      </button>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </div>
  </form>
</template>
<script>
import FormText from "../../molecules/forms/form-text.vue";
import FormSelect from "../../molecules/forms/form-select.vue";
import FormRadio from "../../molecules/forms/form-radio/form-radio.vue";
import SearchField from "../../molecules/search-field/index.vue";
import Map from "../../molecules/map/index.vue";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { inject } from "vue";

export default {
  props: {
    place: {
      type: Object,
    },
  },
  components: {
    FormText,
    FormSelect,
    FormRadio,
    SearchField,
    Map,
  },
  setup() {
    const modalService = inject("modalService");
    const nuxtApp = useNuxtApp();

    function closeModal() {
      modalService.closeModal("");
    }
    return {
      closeModal,
      nuxtApp,
    };
  },
  data() {
    return {
      types: [
        { value: "restaurant", label: "Restaurante" },
        { value: "cafe", label: "Cafeteria" },
        { value: "bar", label: "Bar" },
        { value: "bar", label: "Coworking" },
        { value: "bar", label: "Livraria" },
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
        { id: "noise-1", value: "Bastante", label: "Bastante" },
        {
          id: "noise-2",
          value: "Tolerável",
          label: "Tolerável",
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
    };
  },
  methods: {
    findPlaceOnMap(event) {
      this.center = event;
      this.place.location = [this.center[0], this.center[1]];
    },
    handleSubmit() {
      if (this.place.id) {
        this.editPlace(this.place);
      } else {
        this.addPlace(this.place);
      }

      this.closeModal();
      //this.clearAll();
    },
    addPlace(place) {
      try {
        addDoc(collection(this.nuxtApp.$db, "places"), {
          location: place.location,
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
      } catch (error) {
        console.log(error);
      }
    },
    editPlace(place) {
      try {
        updateDoc(doc(collection(this.nuxtApp.$db, "places"), place.id), {
          location: place.location,
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
      } catch (error) {
        console.log(error);
      }
    },
    clearAll() {
      console.log(this.place);
      this.place = {
        location: "",
        name: "",
        website: "",
        type: "",
        instagram: "",
        socket: "",
        wifi: "",
        wifiPassword: "",
        isPay: "",
        noise: "",
      };
    },
    async sendEmail() {
      const confirmationLink = "https://example.com/confirmation";
      // await this.$mail.send({
      //   message: {
      //     to: this.email,
      //   },
      //   subject: "Confirmation of place addition",
      //   text: `Your place has been added successfully! Please click on the following link to confirm your addition: ${confirmationLink}`,
      // });
    },
  },
};
</script>
<style lang="sass">
@import "./place-form.scss"
</style>
