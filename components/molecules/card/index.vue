<template>
  <div class="card">
    <img v-if="image" class="w-100" :src="createObjectURL(image)" alt="placeImage" />
    <h3>{{ name }}</h3>
    <ul class="card__places">
      <li>Shopping Barra</li>
      <li>5km</li>
      <li>{{ type }}</li>
    </ul>
    <div class="card__features">
      <ul class="card__itens">
        <li>
          <Icon name="LinkIcon" />
          <a :href="website">
            Website
          </a>
        </li>
        <li>
          <a :href="instagram">
            <Icon name="InstagramIcon" />
            Instagram
          </a>
        </li>
        <li>
          <Icon name="SocketsIcon" />
          Muitas
          <!-- {{ socket }} -->
        </li>
        <li>
          <Icon name="WifiIcon" />
          <!-- {{ wifi }} -->
          Wifi gratuito
        </li>
        <li>
          <Icon name="NoiseIcon" v-if="noise === 'yes' || noise === 'tolerable'" />
          {{ noise }}
        </li>
      </ul>
      <button type="button" class="card__location btn btn-link" >
        <Icon name="PinIcon" />
      </button>
    </div>
    <div class="card__footer">
      <p>
       <Icon name="LockIcon" /> {{ wifiPassword }}
       12345678
      </p>
      <button class="btn btn-link" type="button">Copiar</button>
    </div>
  </div>
</template>

<script>
import {Icon} from "#components";

export default {
  props: {
    name: String,
    type: String,
    website: String,
    instagram: String,
    socket: String,
    wifi: String,
    space: String,
    noise: String,
    image: Object,
    wifiPassword: String
  },
  components: {
    Icon
  },
  setup(props) {
    const createObjectURL = (image) => {
      return image ? URL.createObjectURL(image) : null;
    };

    return {
      createObjectURL
    };
  }
};
</script>

<style lang="scss">
@import "./card.scss";
/* Add your card styles here */
</style>
