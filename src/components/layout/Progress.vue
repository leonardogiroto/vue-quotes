<template>
  <div class="progress-bar" >
    <p>{{ current }} / {{ total }} ({{ current/total | toPercentage }})</p>
    <div
      class="progress-overlay"
      :style="{ width: (current * 100 / total) + '%' }"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import toPercentage from '@/filters/Percentage.vue';

@Component({
  filters: toPercentage,
})
export default class Progress extends Vue {

  @Prop() public current!: number;
  @Prop() public total!: number;

}
</script>

<style scoped lang="scss">
  div.progress-bar {
    height: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    border: 1px solid lightgray;
    background: lightgray;
    border-radius: 4px;

    p {
      color: white;
      font-weight: 600;
      margin: 0;
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
    }

    div.progress-overlay {
      background: #FE5D26;
      height: 40px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  @media only screen and (max-width: 478px) {
    div.progress-bar {
      height: 30px;

      div.progress-overlay {
        height: 30px;
      }
    }
  }
</style>
