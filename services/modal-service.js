import { ref, provide, inject } from 'vue';
import { useI18n } from 'vue-i18n';

const modalState = ref({
  isVisible: false,
  data: {},
  title: ''
});

export const useModal = () => {
  const { t } = useI18n();

  const openModal = (newData, titleKey = 'addPlace') => {
    modalState.value = {
      isVisible: true,
      data: newData,
      title: t(titleKey)
    };
  };

  const closeModal = () => {
    modalState.value = { 
      isVisible: false, 
      data: {}, 
      title: t('addPlace') 
    };
  };

  provide('modalService', {
    modalState,
    openModal,
    closeModal,
  });

  return {
    modalState,
    openModal,
    closeModal,
  };
};

// Optional: Create a composable to use the modal service
export const useModalService = () => {
  return inject('modalService');
};