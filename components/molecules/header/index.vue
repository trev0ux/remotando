<template>
  <div class="container">
    <header class="header align-items-start">
      <nuxt-link to="/" class="header__logo">
        <logo-icon icon-name="LogoIcon" />
      </nuxt-link>
      <div class="d-flex gap-3 align-items-center flex-wrap justify-content-end">
        <button v-if="showAddBtn" @click="openModal" class="btn btn-primary">
          {{ $t("addPlaces") }}
        </button>
        <nuxt-link to="/search" v-else class="btn btn-primary">
          {{ $t("explorePlaces") }}
        </nuxt-link>
        <div class="form-check form-switch d-flex align-items-center">
          <form-switch id="languageSwitch" :checked="$i18n.locale === 'pt'"
            @change="toggleLanguage" />
          <label class="form-check-label ms-2" for="languageSwitch" v-if="$i18n.locale === 'pt'">PT</label>
          <label class="form-check-label ms-2" v-else>EN</label>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import FormSwitch from "../forms/form-switch/form-switch.vue"
import { inject } from "vue";

export default {
  computed: {
    showAddBtn() {
      return this.$route.path.includes("/search");
    },
  },
  components: {
    FormSwitch
  },
  setup() {
    const modalService = inject("modalService");

    return {
      modalService,
    };
  },
  methods: {
    openModal() {
      this.modalService.openModal("");
    },
    toggleLanguage(event) {
      const newLocale = event.target.checked ? "pt" : "en";
      this.$i18n.setLocale(newLocale);
    },
  },
};
</script>

<style lang="sass">
@import "./header.scss"
</style>
