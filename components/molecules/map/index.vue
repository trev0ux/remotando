<template>
  <l-map ref="myMap" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" />
    <l-marker
      :lat-lng="center"
    >
    </l-marker>
  </l-map>
</template>

<script>
export default {
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      markers: [],
    };
  },
  props: {
    center: Array,
    zoom: Number
  },
  mounted() {
    // const searchControl = new GeoSearchControl({
    //   provider,
    //   // ... some more options
    // });
    //map.addControl(searchControl);
  },
  methods: {
  },
};
</script>
