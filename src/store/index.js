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

    currentPlayer: "",
    isCurrentPlayerWin: false,
    isDraw: false,
    isGameOver: false,

    showModal: true,
    gameConfig: {
      1: {
        question: "Choose how you want to play?",
        buttonsNames: ["player", "computer"],
      },

      2: {
        question: "Select a marker",
        buttonsNames: ["X", "O"],
      },

      versus: "",
    },
  },

  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },

    setVersus(state, { versus }) {
      state.gameConfig.versus = versus;
    },

    setCurrentPlayer(state, { currentPlayer }) {
      state.currentPlayer = currentPlayer;
    },

    setOnBoard(state, { box }) {
      state.board[box] = state.currentPlayer;
    },

    toggleCurrentPlayer(state) {
      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },

    setIsCurrentPlayerWin(state, { isWin }) {
      state.isCurrentPlayerWin = isWin;
    },

    setIsDraw(state, { isDraw }) {
      state.isDraw = isDraw;
    },

    setIsGameOver(state) {
      state.isGameOver = true;
    },

    clearBoard(state) {
      Object.keys(state.board).forEach((box) => {
        state.board[box] = "";
      });
    },
  },

  actions: {
    toggleModal(context) {
      context.commit("toggleModal");
    },

    setVersus(context, { versus }) {
      context.commit("setVersus", { versus });
    },

    setCurrentPlayer(context, { currentPlayer }) {
      context.commit("setCurrentPlayer", { currentPlayer });
    },

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

    checkDraw({ commit, state }) {
      const isDraw = Object.keys(state.board).every(
        (box) => state.board[box] !== ""
      );

      if (!state.isCurrentPlayerWin && isDraw) {
        commit("setIsDraw", { isDraw });
      }
    },

    checkIsGameOver({ commit, state }) {
      if (state.isCurrentPlayerWin || state.isDraw) {
        commit("setIsGameOver");
      }
    },

    clearBoard(context) {
      setTimeout(() => context.commit("clearBoard"), 1500);
    },
  },
});
