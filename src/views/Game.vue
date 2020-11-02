<template>
  <div class="game">
    <Board />
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'

export default {
  name: 'Game',
  components: {
    Board,
  },
}
</script>
