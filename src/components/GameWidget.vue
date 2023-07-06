<template>
  <div class="game-widget">
    <h2>Guess the Number</h2>
    <p v-if="!gameOver">Guess a number between 1 and 100:</p>

    <div v-if="!gameOver">
      <input type="number" v-model.number="userGuess" min="1" max="100" />
      <button @click="checkGuess">Check</button>
    </div>

    <div v-if="gameOver">
      <p v-if="isCorrectGuess">Congratulations! You guessed the correct number {{ targetNumber }}!</p>
      <p v-else>Sorry, the correct number was {{ targetNumber }}. Try again!</p>
      <button @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetNumber: null,
      userGuess: null,
      gameOver: false,
      isCorrectGuess: false,
    };
  },
  mounted() {
    this.startNewGame();
  },
  methods: {
    startNewGame() {
      this.targetNumber = Math.floor(Math.random() * 100) + 1;
      this.userGuess = null;
      this.gameOver = false;
      this.isCorrectGuess = false;
    },
    checkGuess() {
      if (this.userGuess === this.targetNumber) {
        this.gameOver = true;
        this.isCorrectGuess = true;
      } else {
        alert("Wrong guess. Try again!");
      }
    },
    resetGame() {
      this.startNewGame();
    },
  },
};
</script>

<style scoped>
.game-widget {
  text-align: center;
  padding: 112px;
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

input[type="number"] {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80px;
}

button {
  padding: 9px 16px;
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

</style>
