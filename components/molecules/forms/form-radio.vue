<template>
  <div class="form-check form-radio">
    <input
      type="radio"
      class="form-check-input"
      :id="id"
      v-bind="$attrs"
      :checked="modelValue === value"
      :name="name"
      @change="$emit('update:modelValue', value)"      
      :value="value"
    />
    <label class="form-check-label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    value: String,
    label: String,
    modelValue: {
      type: [String, Number, Boolean], // Allow various value types
      default: null,
    },
  },
};
</script>
