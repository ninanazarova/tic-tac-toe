import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    winCombinations: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [7, 5, 3],
    ],

    board: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
    },

    isCurrentPlayerWin: undefined,
    currentPlayer: "X",
  },

  mutations: {
    setOnBoard(state, { box }) {
      state.board[box] = state.currentPlayer;
    },

    toggleCurrentPlayer(state) {
      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },

    setIsCurrentPlayerWin(state, { isWin }) {
      state.isCurrentPlayerWin = isWin;
    },
  },

  actions: {
    setOnBoard(context, { box }) {
      context.commit("setOnBoard", { box });
    },

    toggleCurrentPlayer(context) {
      context.commit("toggleCurrentPlayer");
    },

    checkWinners({ commit, state }) {
      const isWin = state.winCombinations.some((combo) =>
        combo.every((move) => state.board[move] === state.currentPlayer)
      );

      commit("setIsCurrentPlayerWin", { isWin });
    },
  },
});
