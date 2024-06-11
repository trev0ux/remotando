<template>
  <div class="card">
    <img
      v-if="place.image"
      class="w-100"
      :src="createObjectURL(place.image)"
      alt="placeImage"
    />
    <h3>{{ place.name }}</h3>
    <ul class="card__places">
      <li>{{ place.locationSelected }}</li>
      <li>5km</li>
      <li>{{ place.type }}</li>
    </ul>
    <aside class="card__actions">
      <button
        class="btn card__delete"
        type="button"
        @click="removePlace(place.id)"
      >
        <Icon name="TrashIcon" />
      </button>
      <button @click="editPlace(place.id)" class="btn card__edit">
        <Icon name="PencilIcon" />
      </button>
    </aside>
    <div class="card__features">
      <ul class="card__itens">
        <li>
          <Icon name="LinkIcon" />
          <a :href="place.website"> Website </a>
        </li>
        <li>
          <a :href="place.instagram">
            <Icon name="InstagramIcon" />
            Instagram
          </a>
        </li>
        <li>
          <Icon name="SocketsIcon" />
          {{ place.socket }}
        </li>
        <li v-if="place.wifi == 'Sim'">
          <Icon name="WifiIcon" />
          Wifi disponível
        </li>
        <li v-if="place.noise === 'yes' || place.noise === 'tolerable'">
          <Icon name="NoiseIcon" />
          {{ place.noise }}
        </li>
      </ul>
      <button type="button" class="card__location btn btn-link">
        <Icon name="PinIcon" />
      </button>
    </div>
    <div class="card__footer">
      <p>
        <Icon name="LockIcon" /> {{ place.wifiPassword }}
        12345678
      </p>
      <button class="btn btn-link" type="button">Copiar</button>
    </div>
  </div>
</template>

<script>
import { Icon } from "#components";
import { collection, doc, deleteDoc, updateDoc } from "firebase/firestore";

export default {
  props: {
    place: Object,
  },
  components: {
    Icon,
  },
  setup(props) {
    const nuxtApp = useNuxtApp();

    const createObjectURL = (image) => {
      return place.image ? URL.createObjectURL(image) : null;
    };
    const removePlace = (id) => {
      deleteDoc(doc(collection(nuxtApp.$db, "places"), id));
    };

    return {
      createObjectURL,
      removePlace,
    };
  },
  methods: {
    editPlace(id) {
      this.$emit("editPlace", id);
    },
  },
};
</script>

<style lang="scss">
@import "./card.scss";
/* Add your card styles here */
</style>
