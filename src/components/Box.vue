//TODO: подумать нужен он или нет

<template>
  <li
    :class="['box', number, isDisabled ? 'box_disabled' : '']"
    @click="isDisabled = !isDisabled"
  >
    <p class="box__item">{{ value }}</p>
  </li>
</template>

<script>
export default {
  props: ['number', 'value', 'board'],

  data: function() {
    return {
      isDisabled: false,
    }
  },

  methods: {},
}
</script>

<style>
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
</style>
