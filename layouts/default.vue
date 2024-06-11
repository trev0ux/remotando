<template>
  <div>
    <header-component></header-component>
       <slot></slot>
    <footer-component></footer-component>
  </div>
</template>

<script>
import { useModal } from '~/services/modal-service';
import HeaderComponent from "../components/molecules/header/index.vue";
import FooterComponent from "../components/molecules/footer/index.vue";

export default {
  setup() {
    const modalService = useModal();

    return {
      modalService
    }
  },
  components: { HeaderComponent, FooterComponent },
};
</script>

<style></style>
