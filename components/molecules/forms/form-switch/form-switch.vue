<template>
  <div class="form-check form-switch">
    <input
      type="checkbox"
      :id="id"
      :value="value"
      class="form-check-input"
      v-model="isChecked"
    />
    <label class="form-check-label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: this.checkedOptions,
    };
  },
  props: {
    id: String,
    value: String,
    label: String,
    checkedOptions: String,
  },
};
</script>

<style lang="scss" scoped>
@import "./form-switch"
</style>
