<template>
  <div>
    <search-template :visible="isModalVisible"></search-template>
  </div>
</template>

<script>
import searchTemplate from "~/components/templates/search-template/index.vue";

export default {
  data() {
    return {
      isModalVisible: false
    };
  },
  head() {
    return {
      title: this.$t('title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('description') },
        { property: 'og:title', content: this.$t('title') },
        { property: 'og:description', content: this.$t('description') },
        { name: 'twitter:title', content: this.$t('title') },
        { name: 'twitter:description', content: this.$t('description') },
      ]
    }
  },
  components: { searchTemplate },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
  }
};
</script>

<style></style>
