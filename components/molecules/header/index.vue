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
          <form-switch id="languageSwitch" :checked="currentLanguage === 'pt'"
            @change="toggleLanguage" />
          <label class="form-check-label ms-2" for="languageSwitch" v-if="currentLanguage === 'pt'">PT</label>
          <label class="form-check-label ms-2" v-else>EN</label>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import FormSwitch from "../forms/form-switch/form-switch.vue"
import { usePlacesStore } from "../../../stores/places";

const localeStore = usePlacesStore()
const currentLanguage = ref(null)
const { locale } = useNuxtApp().$i18n

onMounted(() => {
  currentLanguage.value = localStorage.getItem('user-lang') || 'pt'
  localeStore.setLocale(currentLanguage.value)
})

const toggleLanguage = (event) => {
  const newLocale = event.target.checked ? 'pt' : 'en'
  currentLanguage.value = newLocale
  localeStore.setLocale(newLocale)
  console.log(localeStore);
}

const route = useRoute()
const showAddBtn = computed(() => route.path.includes("/search"))

const modalService = inject("modalService")

const openModal = () => {
  modalService.openModal("")
}
</script>

<style lang="sass">
@import "./header.scss"
</style>
