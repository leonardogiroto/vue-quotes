<template>
  <div id="app">
    <Header :currentProgress="currentProgress" />
    <QuotesList @updateProgress="updateProgress" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QuotesList from './components/QuotesList.vue';
import Header from './components/Header.vue';

@Component({
  components: {
    Header,
    QuotesList
  },
})
export default class App extends Vue {

  public currentProgress: number = 1;

  public updateProgress(progress: number): void {
    this.currentProgress = progress;
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
