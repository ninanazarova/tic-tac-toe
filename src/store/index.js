import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = () => ({
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
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  },

  currentPlayer: '',
  isCurrentPlayerWin: false,
  isDraw: false,
  isGameOver: false,

  gameConfig: {
    dialog: true,
    versus: '',
    nameX: '',
    nameO: '',
    playerName: '',
    firstMove: '',
  },
})

export default new Vuex.Store({
  strict: true,
  state: initialState(),

  mutations: {
    toggleDialog(state) {
      state.gameConfig.dialog = !state.gameConfig.dialog
    },

    setVersus(state, { versus }) {
      state.gameConfig.versus = versus
    },

    setNameX(state, { nameX }) {
      state.gameConfig.nameX = nameX
    },

    setNameO(state, { nameO }) {
      state.gameConfig.nameO = nameO
    },

    setPlayerName(state, { playerName }) {
      state.gameConfig.playerName = playerName
    },

    setFirstMove(state, { firstMove }) {
      state.gameConfig.firstMove = firstMove
      state.currentPlayer = firstMove
    },

    setCurrentPlayer(state, { currentPlayer }) {
      state.currentPlayer = currentPlayer
    },

    setOnBoard(state, { box }) {
      state.board[box] = state.currentPlayer
    },

    toggleCurrentPlayer(state) {
      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X'
    },

    setIsCurrentPlayerWin(state, { isWin }) {
      state.isCurrentPlayerWin = isWin
    },

    setIsDraw(state, { isDraw }) {
      state.isDraw = isDraw
    },

    setIsGameOver(state) {
      state.isGameOver = !state.isGameOver
    },

    clearBoard(state) {
      Object.keys(state.board).forEach((box) => {
        state.board[box] = ''
      })
    },

    getInitialState(state) {
      Object.assign(initialState(), state)
    },
  },

  actions: {
    toggleDialog(context) {
      context.commit('toggleDialog')
    },
    setVersus(context, { versus }) {
      context.commit('setVersus', { versus })
    },

    setNameX(context, { nameX }) {
      context.commit('setNameX', { nameX })
    },

    setNameO(context, { nameO }) {
      context.commit('setNameO', { nameO })
    },

    setPlayerName(context, { playerName }) {
      context.commit('setPlayerName', { playerName })
    },

    setFirstMove(context, { firstMove }) {
      context.commit('setFirstMove', { firstMove })
    },

    setCurrentPlayer(context, { currentPlayer }) {
      context.commit('setCurrentPlayer', { currentPlayer })
    },

    setOnBoard(context, { box }) {
      context.commit('setOnBoard', { box })
    },

    toggleCurrentPlayer(context) {
      context.commit('toggleCurrentPlayer')
    },

    checkWinners({ commit, state }) {
      const isWin = state.winCombinations.some(
        (combo) => combo.every((move) => state.board[move] === state.currentPlayer),
      )

      commit('setIsCurrentPlayerWin', { isWin })
    },

    checkDraw({ commit, state }) {
      const isDraw = Object.keys(state.board).every(
        (box) => state.board[box] !== '',
      )

      if (!state.isCurrentPlayerWin && isDraw) {
        commit('setIsDraw', { isDraw })
      }
    },

    checkIsGameOver({ commit, state }) {
      if (state.isCurrentPlayerWin || state.isDraw) {
        commit('setIsGameOver')
      }
    },

    clearBoard(context) {
      setTimeout(() => context.commit('clearBoard'), 1500)
    },

    getInitialState(context) {
      context.commit('getInitialState')
    },
  },
})
