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
    background: #FE5D26;
    border: 1px solid #FE5D26;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    outline: none;

    &:hover {
      background: rgba(254, 93, 38, 0.9);
    }
  }
</style>
