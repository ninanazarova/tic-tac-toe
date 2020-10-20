<template>
  <transition name="modal" v-if="showModal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{ gameConfig[currentConfig].question }}</h3>
          <h3 v-if="gameResult.isWin">{{ gameResult.winner }} win!</h3>
          <h3 v-if="gameResult.isDraw">Draw!</h3>
          <BaseButton
            :text="gameConfig[currentConfig].buttonsNames[0]"
            :onClick="onNewGame"
          />
          <BaseButton
            :text="gameConfig[currentConfig].buttonsNames[1]"
            :onClick="onNewGame"
          />
          <!-- <BaseButton
            v-if="gameResult.isGameOver"
            text="New game"
            :onClick="onNewGame"
          />
          <BaseButton
            v-if="gameResult.isGameOver"
            text="Restart"
            :onClick="onNewGame"
          /> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "Modal",
  components: {
    BaseButton,
  },
  data: function() {
    return {
      currentConfig: 1,
    };
  },

  methods: {
    onNewGame(text) {
      if (text === ("player" || "computer")) {
        this.$store.dispatch("setVersus", { versus: text });
        this.currentConfig++;
      }

      if (text === ("X" || "O")) {
        this.$store.dispatch("setCurrentPlayer", { currentPlayer: text });
        this.$store.dispatch("toggleModal");
      }
    },
  },

  computed: {
    gameConfig() {
      return this.$store.state.gameConfig;
    },
    showModal() {
      return this.$store.state.showModal;
    },

    gameResult() {
      return {
        isWin: this.$store.state.isCurrentPlayerWin,
        winner: this.$store.state.currentPlayer,
        isDraw: this.$store.state.isDraw,
        isGameOver: this.$store.state.isGameOver,
      };
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
