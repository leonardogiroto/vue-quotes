<template>
  <div class="notification">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Notification extends Vue {

  @Prop() public text!: string;

}
</script>

<style scoped lang="scss">
  div.notification {
    cursor: pointer;
    position: fixed;
    bottom: 0;
    background: black;
    color: white;
    width: 200px;
    left: calc(50% - 100px);
    padding: 10px;
  }
</style>
