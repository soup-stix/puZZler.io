<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref, computed } from 'vue'

const player = ref('X')
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])

const calculateWinner = (squares: any[]) => {
  const lines = [
    [0, 1, 2], // horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i] // destructuring
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a] // return X or O
    }
  }
  return null
}

const winner = computed(() => calculateWinner(board.value.flat()))

const makeMove = (row: number, col: number) => {
  if (winner.value || board.value[row][col] != '') return
  board.value[row][col] = player.value
  player.value = player.value === 'X' ? 'O' : 'X'
}

const resetGame = () => {
  board.value = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  player.value = 'X'
}

</script>

<template>
  <main>
    <h1>Tic Tac Toe</h1>
    <h3>Player {{ player }}'s turn</h3>
    <div>
      <div v-for="(row, x) in board" :key="x" class="">
        <div v-for="(cell, y) in row" :key="y" @click="makeMove(x,y)" 
        class="w3-btn w3-round w3-white w3-border w3-border-bluegrey w3-hover-border-pink w3-center w3-padding-16 w3-xxlarge" style="width: 85px; height:85px">
          {{ cell === 'X' ? '✖️' : cell === 'O' ? '⭕' : '' }}
        </div>
      </div>
    </div>
    <h2 v-if="winner" class="w3-container">Player '{{ player === 'X' ? 'O' : 'X' }}' wins!!</h2>
    <button @click="resetGame()" class="w3-btn w3-round w3-pink w3-center w3-margin">Reset Game</button>
  </main>
</template>
