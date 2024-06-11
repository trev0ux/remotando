<template>
  <div>
    <div class="search-field">
      <form-text
        id="search"
        required
        v-model="searchQuery"
        @update:modelValue="searchLocations"
        placeholder="Pesquise por uma localização"
      />
      <button class="btn p-0">
            <Icon name="SearchIcon" />
      </button>
    </div>
      <ul class="search-field__results" v-if="suggestions.length">
        <li
          v-for="(suggestion, index) in suggestions"
          :key="index"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion.label }}
          {{ suggestion.lat }}
        </li>
      </ul>
  </div>
</template>

<script>
import formText from "../forms/form-text.vue";

export default {
  components: {
    formText,
  },
  data() {
    return {
      searchQuery: "",
      suggestions: [],
      selectedLocation: null,
      provider: null,
    };
  },
  mounted() {
    const { $leafletGeosearch } = useNuxtApp();
    this.provider = $leafletGeosearch.provider;
  },
  methods: {
    searchLocations() {
      if (this.searchQuery.length > 2) {
        this.provider
          .search({ query: this.searchQuery })
          .then((results) => {
            this.suggestions = results.map((result) => ({
              label: result.label,
              lat: result.raw.lat,
              lon: result.raw.lon,
            }));
          })
          .catch((error) => {
            console.error("Error fetching suggestions:", error);
          });
      } else {
        this.suggestions = [];
      }
    },
    selectSuggestion(suggestion) {
      this.$emit('suggestionSelected',  [suggestion.lat, suggestion.lon]);
      this.$emit('suggestionLabel', suggestion.label);
      this.suggestions = [];
    },
  },
};
</script>

<style lang="scss">
@import "./search-field";
/* Add your custom styles here */
</style>
