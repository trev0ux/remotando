<template>
  <div>
    <header-component @open-modal="openModal"></header-component>
       <slot></slot>
  </div>
</template>

<script>
import { useModal } from '~/services/modal-service';
import HeaderComponent from "../components/molecules/header/index.vue";

export default {
  setup() {
    const modalService = useModal();

    return {
      modalService
    }
  },
  components: { HeaderComponent },
};
</script>

<style></style>
