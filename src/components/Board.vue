<template>
  <div class="gameboard">
    <ul class="boxes">
      <li
        v-for="(value, key) in getBoard"
        v-bind:key="key"
        v-bind:class="['box', key]"
        v-on:click="setMove(key)"
      >
        <p class="box__item">{{ value }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Board",

  methods: {
    setMove(key) {
      this.$store.dispatch("setOnBoard", { box: key });
      this.$store.dispatch("checkWinners");
      this.$store.dispatch("toggleCurrentPlayer");
    },
  },
  computed: {
    getBoard() {
      return this.$store.state.board;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");

.gameboard {
  width: 400px;
  height: 400px;
  background: rgb(136, 114, 100);
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

.box__item {
  font-family: "Architects Daughter", cursive;
  margin: 0;
  line-height: 1;
  font-size: 86px;
  font-weight: 800;
}
</style>
