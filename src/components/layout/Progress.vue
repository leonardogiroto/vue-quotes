<template>
  <div class="progress-bar" >
    <p>{{ current }} / {{ total }}</p>
    <div
      class="progress-overlay"
      :style="{ width: (current * 100 / total) + '%' }"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Progress extends Vue {

  @Prop() public current!: number;
  @Prop() public total!: number;

}
</script>

<style scoped lang="scss">
  div.progress-bar {
    height: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    border: 1px solid;
    background: lightgray;

    p {
      color: white;
      font-weight: 600;
    }

    div.progress-overlay {
      background: blue;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
</style>
