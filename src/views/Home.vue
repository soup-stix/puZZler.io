<script setup lang="ts">

</script>

<template>
  <main>
    <h1 class="w3-xxxlarge w3-text-pink">ｐｕＺＺｌｅｒ</h1>
    <div class="">
        <div class="w3-quarter w3-text-black">.</div>
        <RouterLink to="/nqueens">
        <div class="w3-card w3-small w3-quarter w3-margin">
            <img src="../assets/nqueens.png" style="width:70%">
            <h3 class="w3-text-amber">N-Queens</h3>
            <span>put to your skills to test with this<br> game and see if you can solve it</span>
        </div>
        </RouterLink>
        <RouterLink to="/tictactoe">
        <div class="w3-card w3-hover-border-aqua w3-small w3-quarter w3-margin">
            <img src="../assets/tictactoe.png" style="width:70%;">
            <h3 class="w3-text-blue">Tic Tac Toe</h3>
            <span>challange your friend to a dual🤺</span>
        </div>
        </RouterLink>
        <div class="w3-quarter w3-text-black">.</div>
    </div>
  </main>
</template>
