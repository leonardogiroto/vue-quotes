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
    background: #251605;
    color: white;
    width: 200px;
    left: calc(50% - 110px);
    padding: 10px;
  }
</style>
