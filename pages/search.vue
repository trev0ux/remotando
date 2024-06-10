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
  components: { searchTemplate },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
  }
};
</script>

<style></style>
