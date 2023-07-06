<template>
  <div class="navigation-container">
    <div class="navigation">
      <router-link class="nav-link" to="/location">Location</router-link>
      <router-link class="nav-link" to="/stopwatch">Stopwatch</router-link>
      <router-link class="nav-link" to="/photo">Photo</router-link>
      <router-link class="nav-link" to="/game-widget">Guess Number</router-link>
      <router-link class="nav-link" to="/weather-widget">Weather</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.navigation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
}

.nav-link {
  display: inline-block;
  padding: 10px;
  margin-right: 10px;
  background-color: #f5f5f5;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #eaeaea;
}
</style>
