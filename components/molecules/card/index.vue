<template>
  <div class="card">
    <img v-if="image" class="w-100" :src="createObjectURL(image)" alt="placeImage" />
    <h3>{{ name }}</h3>
    <ul class="card__places">
      <li>Shopping Barra</li>
      <li>5km</li>
      <li>{{ type }}</li>
    </ul>
    <div>
      <ul class="card__itens">
        <li v-if="website">
          <a :href="website">
            Website
          </a>
        </li>
        <li v-if="instagram">
          <a :href="instagram">
            <Icon name="InstagramIcon" />
            Instagram
          </a>
        </li>
        <li>
          <Icon name="SocketsIcon" />
          {{ socket }}
        </li>
        <li>
          <Icon name="WifiIcon" />{{ wifi }}
        </li>
        <li>
          <Icon name="NoiseIcon" v-if="noise === 'yes' || noise === 'tolerable'" />
          {{ noise }}
        </li>
      </ul>
          <Icon name="PinIcon" />
    </div>
    <div class="card__footer">
      <p>
        <Icon name="ClockIcon" /> Aberto hoje 8:00 - 17:00
      </p>
    </div>
    <div v-if="wifi === 'Sim'" class="card__footer">
      <p>
       <Icon name="LockIcon" /> {{ wifiPassword }}
      </p>
      <button type="button">Copiar</button>
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
