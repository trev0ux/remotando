import { ref, provide } from 'vue';

const modalState = ref({
  isVisible: false,
  data: {},
  title: 'Adicionar lugar'
});

const openModal = (newData, title = 'Adicionar lugar') => {
  modalState.value = {
    isVisible: true,
    data: newData,
    title: title
  };
};

const closeModal = () => {
  modalState.value = { isVisible: false, data: {}, title: 'Adicionar lugar' };
};

export const useModal = () => {
  provide('modalService', {
    modalState,
    openModal,
    closeModal,
  });
};
