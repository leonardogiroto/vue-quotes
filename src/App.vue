<template>
  <div id="app">
    <keep-alive exclude="Single" >
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue { }
</script>

<style lang="scss"></style>
