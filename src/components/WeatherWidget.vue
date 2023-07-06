<template>
    <div class="weather-widget">
      <h2>Weather Widget</h2>
  
      <div v-if="loading">Loading...</div>
  
      <div v-else>
        <div v-if="weather">
          <h3>{{ weather.name }}, {{ weather.sys.country }}</h3>
          <p>Temperature: {{ weather.main.temp }}°C</p>
          <p>Weather: {{ weather.weather[0].description }}</p>
          <p>Wind Speed: {{ weather.wind.speed }} km/h</p>
        </div>
  
        <div v-else>
          <p>Failed to fetch weather data.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        loading: true,
        weather: null,
      };
    },
    mounted() {
      this.fetchWeatherData();
    },
    methods: {
      async fetchWeatherData() {
        try {
          const apiKey = '...';
          const city = 'London'; // Ganti dengan kota yang diinginkan
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
          const response = await axios.get(apiUrl);
          this.weather = response.data;
          this.loading = false;
        } catch (error) {
          console.error('Error fetching weather data:', error);
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .weather-widget {
    text-align: center;
    padding: 99px;
    background-color: #333;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    height: 150px; 
    overflow: auto; 
  }
  
  h2 {
    color: rgb(255, 255, 255);
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: rgb(255, 255, 255);
  }
  
  p {
    margin-bottom: 5px;
    font-size: 16px;
    color: rgb(255, 255, 255);
  }
  
  .loading {
    margin-top: 20px;
    font-size: 14px;
    color: #777;
  }
  
  .failed {
    margin-top: 20px;
    font-size: 16px;
    color: #ff0000;
  }
  </style>
  