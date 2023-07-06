<template>
  <div class="stopwatch-component">
    <h1>Stopwatch</h1>
    <p>{{ formatTime }}</p>
    <button @click="startStopwatch" v-if="!isRunning">Start</button>
    <button @click="stopStopwatch" v-if="isRunning">Stop</button>
    <button @click="resetStopwatch">Reset</button>
  </div>
</template>

<script>
export default {
  name: "Stopwatch",
  data() {
    return {
      isRunning: false,
      startTime: null,
      elapsedTime: 0,
    };
  },
  computed: {
    formatTime() {
      const minutes = Math.floor(this.elapsedTime / 60000);
      const seconds = Math.floor((this.elapsedTime % 60000) / 1000);
      const milliseconds = Math.floor((this.elapsedTime % 1000) / 10);

      return `${this.padTime(minutes)}:${this.padTime(seconds)}:${this.padTime(milliseconds)}`;
    },
  },
  methods: {
    padTime(value) {
      return value.toString().padStart(2, "0");
    },
    startStopwatch() {
      this.isRunning = true;
      this.startTime = Date.now();

      requestAnimationFrame(this.updateStopwatch);
    },
    updateStopwatch() {
      if (!this.isRunning) return;

      const currentTime = Date.now();
      this.elapsedTime += currentTime - this.startTime;
      this.startTime = currentTime;

      requestAnimationFrame(this.updateStopwatch);
    },
    stopStopwatch() {
      this.isRunning = false;
    },
    resetStopwatch() {
      this.isRunning = false;
      this.elapsedTime = 0;
    },
  },
};
</script>

<style scoped>
.stopwatch-component {
  text-align: center;
  padding: 104px;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 24px;
  margin-bottom: 20px;
}

button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #ff0000;
}

button:active {
  background-color: #390808;
}

button:focus {
  outline: none;
}
</style>
