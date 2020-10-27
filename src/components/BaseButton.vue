<template>
  <button class="button" @click="onClick(text)">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: true,
    },

    onClick: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style>
.button {
  padding: 8px 12px;
  width: 100px;
  margin: 0 8px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
</style>
