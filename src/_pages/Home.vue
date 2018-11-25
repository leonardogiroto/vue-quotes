<template>
  <div class="content" >
    <Header :currentProgress="currentProgress" />
    <QuotesList @updateProgress="updateProgress" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QuotesList from '../components/QuotesList.vue';
import Header from '../components/Header.vue';

@Component({
  components: {
    Header,
    QuotesList,
  },
})
export default class Home extends Vue {

  public currentProgress: number = 1;

  public updateProgress(progress: number): void {
    this.currentProgress = progress;
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Mali', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
  background: #fefbf6;
  height: calc(100vh - 30px);
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 30px);
  padding: 15px;

  div.content {
    max-width: 960px;
    margin: 0 auto;
  }
}
</style>
