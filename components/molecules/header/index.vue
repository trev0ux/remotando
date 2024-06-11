<template>
  <div class="container">
    <header class="header">
      <nuxt-link to="/" class="header__logo">
        <logo-icon icon-name="LogoIcon" />
      </nuxt-link>
      <button v-if="showAddBtn" @click="openModal" class="btn btn-primary">
        Adicione um lugar
      </button>
      <nuxt-link to="/search" v-else class="btn btn-primary">
        Explorar lugares
      </nuxt-link> 
    </header>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  computed: {
    showAddBtn(){
      return this.$route.name === 'search';
    }
  },
  setup() {
    const modalService = inject('modalService');

    return {
      modalService
    }
  },
  methods: {
    openModal() {
      this.modalService.openModal('');
    }
  }
};
</script>

<style lang="sass">
@import "./header.scss"
</style>
