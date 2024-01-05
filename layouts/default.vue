<template>
  <div>
    <header-component></header-component>
    <slot></slot>
  </div>
</template>

<script>
import HeaderComponent from "../components/molecules/header/index.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style></style>
