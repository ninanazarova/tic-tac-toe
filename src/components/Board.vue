<template>
  <div class="gameboard">
    <ul class="boxes">
      <li
        v-for="(value, key) in board"
        :key="key"
        :class="['box', key]"
        @click="setMove(key, value)"
      >
        <transition name="fade">
          <p class="box__item" v-if="value">{{ value }}</p>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Board',

  methods: {
    setMove(key, value) {
      if (value !== '') {
        return
      }

      this.$store.dispatch('setOnBoard', { box: key })
      this.$store.dispatch('checkWinners')
      if (!this.gameResult.isWin) {
        this.$store.dispatch('toggleCurrentPlayer')
      }
      this.$store.dispatch('checkDraw')
      this.$store.dispatch('checkIsGameOver')
      this.clearBoard()
    },

    clearBoard() {
      if (this.gameResult.isGameOver) {
        // this.$store.dispatch("showGameResultModal");
        this.$store.dispatch('clearBoard')
      }
    },
  },

  computed: mapState({
    board: (state) => state.board,
    gameResult: (state) => ({
      isWin: state.isCurrentPlayerWin,
      winner: state.currentPlayer,
      isDraw: state.isDraw,
      isGameOver: state.isGameOver,
    }),
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
.gameboard {
  width: 400px;
  height: 400px;
  background: rgb(136, 114, 100);
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.boxes {
  width: 100%;
  height: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2px;
  padding: 0;
  margin: 0;
}

.box {
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}

.box_disabled {
  cursor: not-allowed;
}

.box__item {
  font-family: 'Architects Daughter', cursive;
  margin: 0;
  line-height: 1;
  font-size: 86px;
  font-weight: 800;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
