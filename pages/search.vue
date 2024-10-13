<template>
  <div>
    <search-template :visible="isModalVisible"></search-template>
  </div>
</template>

<script setup>
import searchTemplate from "~/components/templates/search-template/index.vue";
import { usePlacesStore } from "../../../stores/places";

const { locale, t } = useI18n()
const currentLanguage = ref(locale.value)

const isModalVisible = ref(false);
const statusClass = computed(() => {
  return `landing-page-${locale.value}`
});

const localeStore = usePlacesStore()
const currentLocale = computed(() => localeStore.currentLocale)


onMounted(() => {
  locale.value = currentLocale.value
})

useHead(() => ({
  title: t('title'),
  meta: [
    { name: 'description', content: t('description') },
    // Open Graph / Facebook
    { property: 'og:title', content: t('title') },
    { property: 'og:description', content: t('description') },
    // Twitter
    { name: 'twitter:title', content: t('title') },
    { name: 'twitter:description', content: t('description') },
  ],
}))

const openModal = () => {
  this.isModalVisible = true;
};

</script>

<style></style>
