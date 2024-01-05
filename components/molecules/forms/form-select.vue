<template>
  <div>
    <label :for="id">{{ label }}</label>
    <select
      :id="id"
      v-bind="$attrs"
      class="form-select"
      v-model="selected"
    >
      <option :value="null" disabled selected>Select an option</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
        selected: this.selectedOption
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    selectedOption: {
      type: [String, Number],
      default: null,
    },
  },
};
</script>

<style></style>
