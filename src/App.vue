<template>
  <div id="app">
    <Board />
    <Modal />
  </div>
</template>

<script>
import Board from './components/Board.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Board,
    Modal,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(87, 76, 70);
}
</style>
