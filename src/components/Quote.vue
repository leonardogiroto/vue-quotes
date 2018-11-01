<template>
  <div class="quote">
    <p>{{ quote }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Quote as QuoteInterface } from '../interfaces/quote.interface';

@Component
export default class Quote extends Vue {

  @Prop() public quote!: string;

}
</script>

<style scoped lang="scss">

</style>
