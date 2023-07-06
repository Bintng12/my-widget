<template>
  <div class="location-widget">
    <h2>Your Location</h2>
    <div v-if="locationAvailable">
      <p>Latitude: {{ latitude }}</p>
      <p>Longitude: {{ longitude }}</p>
    </div>
    <div v-else>
      <p>Location data not available.</p>
    </div>

    <div class="location-input">
      <label for="latitude">Latitude:</label>
      <input type="text" id="latitude" v-model="inputLatitude" />
    </div>
    <div class="location-input">
      <label for="longitude">Longitude:</label>
      <input type="text" id="longitude" v-model="inputLongitude" />
    </div>

    <button @click="fetchLocationDetails">Find Location Details</button>

    <div v-if="foundLocation">
      <h3>Location Details</h3>
      <p>{{ foundLocation.country }}</p>
      <p>{{ foundLocation.city }}</p>
      <p>{{ foundLocation.street }}</p>
      <p>Postal Code: {{ foundLocation.postcode }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      inputLatitude: '',
      inputLongitude: '',
      foundLocation: null,
    };
  },
  computed: {
    locationAvailable() {
      return this.latitude !== null && this.longitude !== null;
    },
  },
  mounted() {
    this.getCurrentPosition();
  },
  methods: {
    getCurrentPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setPosition);
      }
    },
    setPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },
    async fetchLocationDetails() {
      try {
        const apiKey = '...';
        const latitude = this.inputLatitude || this.latitude;
        const longitude = this.inputLongitude || this.longitude;
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          latitude + ',' + longitude
        )}&key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const location = data.results[0].components;
          this.foundLocation = location;
          console.log('Location:', location);
          // Do something with the retrieved location data
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    },
  },
};
</script>

<style scoped>
.location-widget {
  text-align: center;
  padding: 69px;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: rgb(255, 255, 255);
}

p {
  margin-bottom: 25px;
  font-size: 16px;
  color: rgb(255, 255, 255);
}

.location-input {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 80px;
  font-size: 14px;
  text-align: right;
  margin-right: 10px;
  color: #fff;
}

input[type="text"] {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: #5e47ef;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3a24cc;
}

button:active {
  background-color: #333;
}

button:focus {
  outline: none;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>
