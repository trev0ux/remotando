<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { useModal } from '~/services/modal-service';

export default {
  setup() {
    const modalService = useModal();

    return {
      modalService
    }
  },
};
</script>

<style></style>
