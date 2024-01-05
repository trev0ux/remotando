<template>
  <div class="container">
    <header class="header">
      <div class="header__logo">
        <logo-icon icon-name="LogoIcon" />
      </div>
      <button @click="openModal" class="btn btn-primary">
        Adicione um lugar
      </button>
    </header>
    <add-place-modal :show-modal="showModal" @close-modal="closeModal"></add-place-modal>
  </div>
</template>

<script>
import AddPlaceModal from "../../organisms/add-place-modal/index.vue";

export default {
  components: {
    AddPlaceModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false; // Set the flag to false to hide the modal
    },
  },
};
</script>

<style lang="sass">
@import "./header.scss"
</style>
