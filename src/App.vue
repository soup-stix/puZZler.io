<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div class="wrapper">

      <nav class="w3-container"> 
        <RouterLink to="/" class="w3-btn w3-text-aqua">puZZler.io</RouterLink>
        <RouterLink to="/tictactoe" class="w3-btn">Tic Tac Toe</RouterLink>
        <RouterLink to="/nqueens" class="w3-btn">N-Queens</RouterLink>
      </nav>
    </div>

  <RouterView class="w3-center" />
</template>

<style scoped>

</style>
