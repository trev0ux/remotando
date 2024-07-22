<template>
  <div class="container">
    <header class="header">
      <nuxt-link to="/" class="header__logo">
        <logo-icon icon-name="LogoIcon" />
      </nuxt-link>
      <div class="d-flex gap-3 align-items-center">
        <div class="form-check form-switch d-flex align-items-center">
          <label class="form-check-label me-2" for="languageSwitch">EN</label>
          <div class="form-check form-switch mb-0">
            <input
              class="form-check-input"
              type="checkbox"
              id="languageSwitch"
              :checked="$i18n.locale === 'pt'"
              @change="toggleLanguage"
            />
          </div>
          <label class="form-check-label ms-2" for="languageSwitch">PT</label>
        </div>
        <button v-if="showAddBtn" @click="openModal" class="btn btn-primary">
          {{ $t("addPlaces") }}
        </button>
        <nuxt-link to="/search" v-else class="btn btn-primary">
          {{ $t("explorePlaces") }}
        </nuxt-link>
      </div>
    </header>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  computed: {
    showAddBtn() {
      return this.$route.path.includes("/search");
    },
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
