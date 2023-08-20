<script setup lang="ts">
import { ref, computed } from 'vue'

const n = ref(4)
const placed = ref(n.value)
const board = ref([]);
let started = true;
// const winner = true

// Initialize the array based on user input
const initializeArray = () => {
      if (n.value < 4 || n.value > 10) return;
      const newBoard = [];
      for (let i = 0; i < n.value; i++) {
        newBoard.push(new Array(n.value).fill(0));
      }
      board.value = newBoard;
      placed.value = n.value;
      console.log('Initialized board:', board.value);
      started = false;
    };

const makeMove = (row: number, col: number) => {
  if (board.value[row][col] === 1) {
        placed.value += 1;
        board.value[row][col] = 0;
      } else {
        if (placed.value === 0) return;
        placed.value -= 1;
        board.value[row][col] = 1;
      }
  console.log(board.value)
  // board.value[row][col] === 0 ? (placed.value = placed.value - 1, board.value[row][col] = 1) : (placed.value = placed.value + 1, board.value[row][col] = 0)
  // placed.value = placed.value - 1  
}

const calculateWinner = () => {
  console.log('Calculating winner...')
      for (let i = 0; i < n.value; i++) {
        for (let j = 0; j < n.value; j++) {
          if(board.value[i])
          if (board.value[i][j] === 1) {
            if (checkRow(i) || checkCol(j) || checkDiag(i, j)) {
              return false;
            }
          }
        }
      }
      console.log("true", placed.value)
      return true;
    };

    const checkRow = (row: number) => {
      console.log('checkrow...')
      let cnt = 0;
      for (let i = 0; i < n.value; i++) {
        if (board.value[row][i] === 1) {
          cnt += 1;
        }
      }
      if (cnt > 1) {
        return true;
      }
      return false;
    };

    const checkCol = (col: number) => {
      console.log('checkcol...')
      let cnt = 0;
      for (let i = 0; i < n.value; i++) {
        if (board.value[i][col] === 1) {
          cnt += 1;
        }
      }
      if (cnt > 1) {
        return true;
      }
      return false;
    };

    const checkDiag = (row: number, col: number) => {
  console.log('checkdiag...');
  let cnt = 0;

  for (let i = 0; i < n.value; i++) {
    const rowPlus = row + i;
    const rowMinus = row - i;
    const colPlus = col + i;
    const colMinus = col - i;

    if (
      isWithinBounds(rowPlus, colPlus) && board.value[rowPlus][colPlus] === 1 ||
      isWithinBounds(rowMinus, colMinus) && board.value[rowMinus][colMinus] === 1 ||
      isWithinBounds(rowPlus, colMinus) && board.value[rowPlus][colMinus] === 1 ||
      isWithinBounds(rowMinus, colPlus) && board.value[rowMinus][colPlus] === 1
    ) {
      cnt += 1;
      console.log("diag", cnt);
    }
  }

  if (cnt > 1) {
    return true;
  }

  return false;
};

const isWithinBounds = (row: number, col: number) => {
  return row >= 0 && row < n.value && col >= 0 && col < n.value;
};

    const winner = computed(() => calculateWinner());
    
</script>
<template>
  <div class="about">
    <h1>N Queens</h1>
    <form class="w3-form">
      <label for="nqueens" class="w3-label w3-xlarge">N: </label>
      <input type="number" v-model="n" id="nqueens" name="nqueens" @change="console.log(n)" class="w3-round w3-center w3-large" style="width: 50px; height:30px" max="10" min="4"><br>
      <!-- <p v-if="myForm.invalid()"></p> -->
      <button v-if="!started" type="button" @click="initializeArray" class="w3-btn w3-round w3-pink w3-center w3-margin">change</button>
      <button v-if="started" type="button" @click="initializeArray" class="w3-btn w3-round w3-pink w3-center w3-margin">Start</button>
    </form>
    <div v-for="(row, x) in board" :key="x" class="">
      <div v-for="(cell, y) in row" :key="y" @click="makeMove(x,y)" v-bind:class="(winner && placed != 0) ? 'w3-btn w3-round w3-white w3-border w3-border-grey w3-hover-border-pink w3-center w3-padding-16 w3-xxlarge' : (winner && placed === 0) ? 'w3-btn w3-round green w3-border w3-border-grey w3-hover-border-pink w3-center w3-padding-16 w3-xxlarge' : 'w3-btn w3-round red w3-border w3-border-grey w3-hover-border-pink w3-center w3-padding-16 w3-xxlarge'" style="width: 85px; height:85px">
        {{ cell === 1 ? '👑' : ''}}
      </div>
    </div>
    <h3 v-if="winner && placed === 0">Congrats you solved it🥳</h3>
    <button v-if="!started" type="button" @click="initializeArray" class="w3-btn w3-round w3-pink w3-center w3-margin">Reset Game</button>
  </div>
</template>

<style>

.red{
  background-color: rgba(230, 80, 96, 0.9);
}

.green{
  background-color: rgba(114, 237, 167, 0.9);
}
</style>
