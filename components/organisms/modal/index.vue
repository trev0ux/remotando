<template>
  <div
    class="modal fade add-place-modal"
    v-if="modalService.modalState.value.isVisible"
    :class="{ show: modalService.modalState.value.isVisible }"
    style="display: block;"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header add-place-modal__header">
          <h5 class="modal-title"><slot name="header"></slot></h5>
          <button
            type="button"
            class="btn-close"
            @click="closeModal"            
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="handleSubmit" class="add-place-modal__form">
          <section class="modal-body add-place-modal__body">
            <slot></slot>
          </section>
          <div class="modal-footer add-place-modal__footer">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="closeModal"                       
              >
              Fechar
            </button>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';


export default {
  props: {
    place: {
      type: Object,
    },
  },
  setup() {
    const modalService = inject('modalService');

    const closeModal = () => {
      modalService.closeModal();
    };

    const visible = modalService.modalState.value.isVisible;

    return {
      modalService,
      visible,
      closeModal,
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("handleSubmit", this.place);
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./modal";
</style>
