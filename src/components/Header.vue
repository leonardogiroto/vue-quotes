<template>
  <div class="header">
    <h1>MY QUOTES</h1>
    <Progress
      :current="currentProgress"
      :total="10"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Progress from './layout/Progress.vue';

@Component({
  components: {
    Progress,
  },
})
export default class Header extends Vue {

  @Prop() public currentProgress!: number;

}
</script>

<style scoped lang="scss">
  h1 {
    margin-top: 10px;
  }
</style>
