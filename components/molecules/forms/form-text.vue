<template>
  <div>
    <label class="form-label" v-if="label" :for="id">{{ label }}</label>
    <input
      v-bind="$attrs"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="inputBlur"
      @keydown.enter="onInput"
      class="form-control"
    />
    <div class="invalid-feedback" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    errorMessage: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  watch: {
    value(newValue) {
      this.modelValue = newValue; // Update modelValue when prop value changes
    },
  },
  methods: {
    typingOnInput(event) {
      this.$emit("input-typing-value", event.target.value);
    },
    onInput(event) {
      this.$emit("input-value", event.target.value);
    },
  },
};
</script>
