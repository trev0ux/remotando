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
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const modalService = inject('modalService');

    function openModal() {
      modalService.openModal('');
    }
    return {
      openModal
    }
  }
};
</script>

<style lang="sass">
@import "./header.scss"
</style>
