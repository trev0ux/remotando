<template>
  <div>
    <h1>Place Addition Confirmation</h1>
    <p>Please confirm or reject the following places:</p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Description</th>
          <th>Confirm</th>
          <th>Reject</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(place, index) in places" :key="index">
          <td>{{ place.name }}</td>
          <td>{{ place.address }}</td>
          <td>{{ place.description }}</td>
          <td><button @click="confirmPlace(index)">Confirm</button></td>
          <td><button @click="rejectPlace(index)">Reject</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { usePlacesStore } from "../../../stores/places";
import { storeToRefs } from 'pinia';

const store = storeToRefs(usePlacesStore());

  export default {
    data() {
      return {
        places: store.places
      };
    },
    methods: {
      confirmPlace(index) {
        // Confirm the place
      },
      rejectPlace(index) {
        // Reject the place
      },
    },
  };
</script>
