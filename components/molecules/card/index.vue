<template>
  <div class="card">
    <img v-if="place.image" class="w-100" :src="createObjectURL(place.image)" alt="placeImage" />
    <h3>{{ place.name }}</h3>
    <ul class="card__places">
      <li>{{ shortAddress }}</li>
      <li>5km</li>
      <li>{{ place.type }}</li>
    </ul>
    <aside class="card__actions">
      <!-- <button
        class="btn card__delete"
        type="button"
        @click="removePlace(place.id)"
      >
        <Icon name="TrashIcon" />
      </button> -->
      <button @click="editPlace(place.id)" class="btn card__edit">
        <Icon name="PencilIcon" />
      </button>
    </aside>
    <div class="card__features">
      <ul class="card__itens">
        <li>
          <Icon name="LinkIcon" />
          <NuxtLink :href="place.website" external> Website </NuxtLink>
        </li>
        <li>
          <NuxtLink :href="'https://instagram.com/' + place.instagram" external>
            <Icon name="InstagramIcon" />
            Instagram
          </NuxtLink>
        </li>
        <li>
          <Icon name="SocketsIcon" />
          {{ translatedSockets }}
        </li>
        <li v-if="place.wifi == 'Sim'">
          <Icon name="WifiIcon" />
          Wifi {{ $t("available") }}
        </li>
        <li v-if="place.noise === 'yes' || place.noise === 'tolerable'">
          <Icon name="NoiseIcon" />
          {{ place.noise }}
        </li>
      </ul>
      <a class="card__location btn btn-link" :href="`https://www.openstreetmap.org/#map=30/${place.location[0]}/${place.location[1]}`" target="_blank" rel="noopener noreferrer">
        <Icon name="PinIcon" />
      </a>
    </div>
    <div class="card__footer" v-if="place.wifiPassword && place.wify == 'Sim'">
      <p>
        <Icon name="LockIcon" /> Senha do wifi
      </p>
      <button class="btn btn-link" type="button" @click="copyToClipboard">Copiar</button>
    </div>
  </div>
</template>

<script>
import { Icon } from "#components";
import { collection, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useI18n } from 'vue-i18n';
import {onMounted} from 'vue';

export default {
  props: {
    place: Object,
  },
  components: {
    Icon,
  },
  setup(props) {
    const nuxtApp = useNuxtApp();
    const shortAddress = ref('')

    const createObjectURL = (image) => {
      return place.image ? URL.createObjectURL(image) : null;
    };

    const fetchAddress = async () => {
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${props.place.location[0]}&lon=${props.place.location[1]}`
      
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch address')
        const data = await response.json()
        const parts = []
        if (data.address.road) parts.push(data.address.road)
        if (data.address.city) parts.push(data.address.city)
        if (data.address.country) parts.push(data.address.country)
        
        shortAddress.value = parts.join(', ')
        console.log(shortAddress.value)
      } catch (err) {
        console.error(err)
      }
    }

    onMounted(() => {
      fetchAddress();
    })

    const removePlace = (id) => {
      deleteDoc(doc(collection(nuxtApp.$db, "places"), id));
    };
    const { t } = useI18n()

    const translatedSockets = computed(() => {
      switch (props.place.socket) {
        case 'Muitas':
          return t('sockets.many')
        case 'Algumas':
          return t('sockets.some')
        case 'Nenhuma':
          return t('sockets.none')
        default:
          return props.place.sockets
      }
    })

    return {
      createObjectURL,
      removePlace,
      translatedSockets,
      fetchAddress,
      shortAddress,
    };
  },
  methods: {
    editPlace(id) {
      this.$emit("editPlace", id);
    },
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.place.wifiPassword);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  },
};
</script>

<style lang="scss">
@import "./card.scss";
/* Add your card styles here */
</style>
