<template>
  <div class="configurations">
    <v-list
      three-line
      subheader
    >
      <v-list-item
        class="d-flex justify-center"
      >
        <v-subheader>Who do you want to play against?</v-subheader>
        <v-radio-group v-model="versus">
          <v-radio
            value="player"
            :label="`Player`"
          />
          <v-radio
            value="computer"
            :label="`Computer`"
          />
        </v-radio-group>
      </v-list-item>

      <v-list-item
        v-if="versus === 'player'"
        class="d-flex justify-center"
      >
        <v-form>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="nameX"
                  label="Insert player X name"
                  outlined
                />
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="nameO"
                  label="Insert player O name"
                  outlined
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-list-item>

      <v-list-item
        v-if="versus === 'player' && nameX && nameO"
        class="d-flex justify-center"
      >
        <v-subheader>Who will move first?</v-subheader>
        <v-radio-group v-model="firstMove">
          <v-radio
            value="X"
            :label="`X`"
          />
          <v-radio
            value="O"
            :label="`O`"
          />
        </v-radio-group>
      </v-list-item>

      <v-list-item
        v-if="versus === 'computer'"
        class="d-flex justify-center"
      >
        <v-form>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="12"
              >
                <v-text-field
                  v-model="playerName"
                  label="Insert your name"
                  outlined
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-list-item>

      <v-list-item
        v-if="versus === 'computer' && playerName"
        class="d-flex justify-center"
      >
        <v-subheader>
          Like who do you want to play?
        </v-subheader>

        <v-radio-group v-model="firstMove">
          <v-radio
            value="X"
            :label="`X`"
          />
          <v-radio
            value="O"
            :label="`O`"
          />
        </v-radio-group>
      </v-list-item>
    </v-list>

    <router-link to="/game">
      <v-btn
        v-if="versus && ((nameX && nameO) || playerName) && firstMove"
        x-large
        color="success"
        dark
        class="mt-16"
        @click="dialog = false"
      >
        Start the game
      </v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Configurations',

  computed: {
    dialog: {
      get() {
        return this.$store.state.gameConfig.dialog
      },
      set() {
        this.$store.dispatch('toggleDialog')
      },
    },
    versus: {
      get() {
        return this.$store.state.gameConfig.versus
      },
      set(value) {
        this.$store.dispatch('setVersus', { versus: value })
      },
    },
    nameX: {
      get() {
        return this.$store.state.gameConfig.nameX
      },
      set(value) {
        this.$store.dispatch('setNameX', { nameX: value })
      },
    },
    nameO: {
      get() {
        return this.$store.state.gameConfig.nameO
      },
      set(value) {
        this.$store.dispatch('setNameO', { nameO: value })
      },
    },
    firstMove: {
      get() {
        return this.$store.state.gameConfig.firstMove
      },
      set(value) {
        this.$store.dispatch('setFirstMove', { firstMove: value })
      },
    },
    playerName: {
      get() {
        return this.$store.state.gameConfig.playerName
      },
      set(value) {
        this.$store.dispatch('setPlayerName', { playerName: value })
      },
    },
  },
}
</script>
