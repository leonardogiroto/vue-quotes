<template>
  <button class="simple-btn">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {

  @Prop() public text!: string;

}
</script>

<style scoped lang="scss">
  button.simple-btn {
    cursor: pointer;
    border: none;
    background: transparent;
    border: 1px solid red;
    color: red;
    padding: 5px 10px;
    border-radius: 10px;
  }
</style>
