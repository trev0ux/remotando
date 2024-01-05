<template>
  <div class="form-check">
    <input
      type="checkbox"
      :id="id"
      :value="value"
      v-model="checkedOptions"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    value: String,
    label: String,
    checkedOptions: Array,
  },
};
</script>
