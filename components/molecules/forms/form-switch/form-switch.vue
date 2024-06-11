<template>
  <div class="form-check form-switch">
    <input
      type="checkbox"
      :id="id"
      v-bind="$attrs"
      :value="value"
      @change="toggle"
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
  methods: {
    toggle(event) {
      this.$emit("toggle", event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./form-switch";
</style>
