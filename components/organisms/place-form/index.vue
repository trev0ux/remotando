<template>
  <div class="row">
    <div class="col">
      <div class="mb-3">
        <search-field
          @suggestionSelected="findPlaceOnMap"
        />
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
          type="text"
          placeholder="Instagram"
          label="Instagram"
          v-model="place.instagram"
        />
      </div>
      <div class="mb-3">
        <form-select
          id="place-type"
          label="Select Type"
          :options="types"
          v-model="place.type"
          :selected-option="place.type"
        />
      </div>
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
      <div class="mb-3" v-if="place.wifi">
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
    <div class="col add-place-modal__map">
      <Map :center="center" :zoom="zoom" />
    </div>
  </div>
</template>
<script>
import FormText from "../../molecules/forms/form-text.vue";
import FormSelect from "../../molecules/forms/form-select.vue"
import FormRadio from "../../molecules/forms/form-radio/form-radio.vue";
import SearchField from "../../molecules/search-field/index.vue";
import Map from "../../molecules/map/index.vue";

export default {
    props: {
        place: {
            type: Object
        }
    },
  components: {
    FormText,
    FormSelect,
    FormRadio,
    SearchField,
    Map,
  },
  setup() {},
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
    }
  },
  methods: {
    findPlaceOnMap(event) {
      this.center = event;
      this.place.location = [this.center[0], this.center[1]];
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
