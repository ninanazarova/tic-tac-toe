<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-spacer />
      <v-tabs>
        <v-tab to="/">
          Home
        </v-tab>
        <v-tab to="/configurations">
          Configs
        </v-tab>
        <v-tab
          disabled
          to="/game"
        >
          Game
        </v-tab>
        <v-tab
          disabled
          to="/history"
        >
          History
        </v-tab>
      </v-tabs>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
