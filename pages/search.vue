<template>
  <div>
    <header-component @open-modal="openModal"></header-component>
    <search-template :visible="isModalVisible"></search-template>
  </div>
</template>

<script>
import searchTemplate from "~/components/templates/search-template/index.vue";
import HeaderComponent from "../components/molecules/header/index.vue";

export default {
  data() {
    return {
      isModalVisible: false
    };
  },
  components: { searchTemplate, HeaderComponent },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
  }
};
</script>

<style></style>
